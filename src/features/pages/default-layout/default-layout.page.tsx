import React, { useEffect, useState, useContext } from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router';
import { StyledContainer, StyledContent } from './default-layout.styles';
import { AnyAction, bindActionCreators, Dispatch, ActionCreator } from 'redux';

import User from '../../../common/state/auth/auth.models';
import { DirectionContext } from '../../../common/contexts';
import { RootState, SnackBarType, StringMap } from '../../../common/models';

import {
  ChangeLanguageAction,
  GetDirectionAction,
  OnScreenResizeAction
} from '../../../common/state/general/general.actions';

import SpinnerComponent from '../../components/spinner/spinner.component';
import { ServicesContext } from '../../../common/contexts';
import { IServices } from '../../../common/services/initiate';
import HeaderComponent from '../../components/header/header.component';
import DialogComponent from '../../components/dialog/dialog.component';
import { DialogTypes } from '../../../common/state/dialog/dialog.state';
import SnackBarComponent from '../../components/snackbar/snackbar.component';

interface AppProps {
  path: string;
  component: any;
  user?: User;
  isDialogRender: boolean;
  dialogTitle?: string;
  dialogContent?: React.ReactElement | string;
  loading: boolean;
  isDrawerRender: boolean;
  language: string;
  languages: StringMap;
  dialogType?: DialogTypes;
  snackbackContent?: JSX.Element;
  snackbarType?: SnackBarType;
  isSnackbarOpen: boolean;
}

interface DispatchProps {
  changeLanguage: (args0: string) => void;
  getDirection: () => ActionCreator<string>;
  onScreenResize: () => void;
  onCloseDialog?: () => void;
}

const DefaultLayout: React.FC<AppProps & DispatchProps> = ({ ...props }) => {
  const Component = props.component;
  const services: IServices | undefined = useContext(ServicesContext);

  if (!services) {
    return null;
  }

  const [direction, setDirection] = useState<string>(props.getDirection());

  useEffect(() => {
    window.addEventListener('resize', props.onScreenResize);

    return () => {
      window.removeEventListener('resize', props.onScreenResize);
    };
  }, []);

  useEffect(() => {
    setDirection(props.getDirection());
  }, [props.language]);


  const onCloseDialog = () => {
    services.dialog.actions.close();
    props.onCloseDialog && props.onCloseDialog();
  }

  const getDialogWidth = () => {
    switch (props.dialogType) {
      case DialogTypes.MEDIUM:
        return 'lg';

      case DialogTypes.MEDIUM_LARGE:
        return 'md';

      default:
        return 'sm';
    }
  }

  return (
    <DirectionContext.Provider value={direction}>
      <Route
        path={props.path}
        render={(matchProps: RouteChildrenProps) => (
          <div dir={direction}>
            <HeaderComponent />
            <StyledContainer>
              {props.loading && <SpinnerComponent />}

              <StyledContent><Component {...matchProps} /></StyledContent>

              <DialogComponent
                title={props.dialogTitle as string}
                content={props.dialogContent || ''}
                open={props.isDialogRender}
                onClose={onCloseDialog}
                fullScreen={props.dialogType === DialogTypes.FULL}
                maxWidth={getDialogWidth()}
              />

              <SnackBarComponent
                open={props.isSnackbarOpen}
                message={props.snackbackContent as any}
                onClose={services.snackbar.actions.close}
                type={props.snackbarType}
                autoHideDuration={6000}
              />
            </StyledContainer>
          </div>
        )}
      />
    </DirectionContext.Provider>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction, RootState>) => {
  return {
    changeLanguage: bindActionCreators(ChangeLanguageAction, dispatch),
    getDirection: bindActionCreators(GetDirectionAction, dispatch),
    onScreenResize: bindActionCreators(OnScreenResizeAction, dispatch)
  };
};

const mapStateToProps = (state: RootState) => {
  const { general, dialog, drawer, snackbar } = state.view;
  const { auth } = state.app;
  return {
    user: auth.loggedInUser,
    isDialogRender: dialog.isRender,
    dialogTitle: dialog.title,
    dialogContent: dialog.content,
    dialogType: dialog.type,
    loading: general.loading,
    isDrawerRender: drawer.isRender,
    language: general.language,
    languages: general.languages,
    snackbackContent: snackbar.content,
    snackbarType: snackbar.type,
    isSnackbarOpen: snackbar.open,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);

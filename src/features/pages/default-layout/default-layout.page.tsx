import React, { useEffect, useState, useContext } from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router';
import { StyledContainer, StyledContent } from './default-layout.styles';
import { AnyAction, bindActionCreators, Dispatch, ActionCreator } from 'redux';
import { useTranslation } from 'react-i18next';

import User from '../../../common/state/auth/auth.models';
import { DirectionContext } from '../../../common/contexts';
import { RootState, StringMap } from '../../../common/models';
import urlTitleDictionary from '../../../common/state/general/url-title-dictionary';

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
}

interface DispatchProps {
  changeLanguage: (args0: string) => void;
  getDirection: () => ActionCreator<string>;
  onScreenResize: () => void;
  onCloseDialog?: () => void;
}

const DefaultLayout: React.FC<AppProps & DispatchProps> = ({ ...props }) => {
  const [t] = useTranslation();
  const title = props.path && !Array.isArray(props.path) ? urlTitleDictionary[props.path] : '';
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
            <HeaderComponent
              userActions={[{
                label: 'Settings',
                onItemClick: () => { /** */ }
              }, {
                label: 'Logout',
                onItemClick: () => { /** */ }
              }]}
              title={t(title)}
            />
            <StyledContainer>
              {props.loading && <SpinnerComponent />}

              {/* <DrawerComponent /> */}

              <StyledContent><Component {...matchProps} /></StyledContent>

              <DialogComponent
                title={props.dialogTitle as string}
                content={props.dialogContent || ''}
                open={props.isDialogRender}
                onClose={onCloseDialog}
                fullScreen={props.dialogType === DialogTypes.FULL}
                maxWidth={getDialogWidth()}
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
  const { general, dialog, drawer } = state.view;
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
    languages: general.languages
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);

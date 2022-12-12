import React, { Dispatch, useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StyledContainer } from './activate-user.styles';
import { RootState } from '../../../common/models';
import { ActivateUserAction } from '../../../common/state/auth/auth.actions';
import { Activation } from '../../../swagger2Ts/interfaces';
import { IServices } from '../../../common/services/initiate';
import { ServicesContext } from '../../../common/contexts';

export interface VerifyUserPageProps {
  activateUser: (args: Activation) => Promise<void>
}

const ActivateUserPage: React.FC<VerifyUserPageProps> = (props) => {
  const tokens = window.location.pathname.split('/activate')[1];
  const [uid, token] = tokens.split('/').filter((t) => t);

  const services: IServices | undefined = useContext(ServicesContext);

  if (!services) return null;

  const activate = async () => {
    if (uid && token) {
      try {
        await props.activateUser({ uid, token });
        services.snackbar.actions.open({ content: 'User Activated Successfuly' });
      } catch (e: any) {
        services.snackbar.actions.open({ content: e.detail, type: 'error' });
      } finally {
        services.loading.actions.stop();
      }
    }
  }

  useEffect(() => {
    activate();
  }, [])

  return (
    <StyledContainer>activation</StyledContainer>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => ({
  activateUser: bindActionCreators(ActivateUserAction, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(ActivateUserPage);
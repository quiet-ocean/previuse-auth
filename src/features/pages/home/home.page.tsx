import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { RouteChildrenProps } from 'react-router';
// import { AnyAction, Dispatch } from 'redux';
import { RootState } from '../../../common/models';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IProps {
  
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const login: React.FC<RouteChildrenProps & IProps> = (props) => {
  const [t] = useTranslation();
  return <div>{t('HOME_PAGE')}</div>;
};

const mapStateToProps = (state: RootState) => ({
  user: state.app.auth.loggedInUser
});

// const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
// startLoader: bindActionCreators(StartLoaderAction, dispatch),
// });

export default connect(
  mapStateToProps,
  null //mapDispatchToProps
)(login);

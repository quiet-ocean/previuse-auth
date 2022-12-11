import { combineReducers } from 'redux';
import auth from './state/auth/auth.reducer';
import dialog from './state/dialog/dialog.reducer';
import general from './state/general/general.reducer';
import drawer from './state/drawer/drawer.reducer';
import { AuthState } from './state/auth/auth.state';
import { DialogState } from './state/dialog/dialog.state';
import { GeneralState } from './state/general/general.state';
import { DrawerState } from './state/drawer/drawer.state';

export interface AppState {
  auth: AuthState;
}

export interface ViewState {
  dialog: DialogState;
  general: GeneralState;
  drawer: DrawerState;
}

export interface RootState {
  app: AppState;
  view: ViewState;
}

const rootReducer = combineReducers<RootState>({
  app: combineReducers({
    auth
  }),
  view: combineReducers({
    dialog,
    general,
    drawer
  })
});

export default rootReducer;

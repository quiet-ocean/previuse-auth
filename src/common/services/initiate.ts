import { Store } from 'redux';
import DialogService from './dialog.service';
import LoadingService from './loading.service';
import SnackbarService from './snackbar.services';

export interface IServices {
  dialog: DialogService;
  loading: LoadingService;
  snackbar: SnackbarService;
}

const initiateServices: (arg0: Store) => IServices = store => ({
  dialog: new DialogService(store),
  loading: new LoadingService(store),
  snackbar: new SnackbarService(store),
});

export default initiateServices;

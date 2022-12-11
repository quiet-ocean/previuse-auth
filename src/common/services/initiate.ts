import { Store } from 'redux';
import DialogService from './dialog.service';
import LoadingService from './loading.service';

export interface IServices {
  dialog: DialogService;
  loading: LoadingService;
}

const initiateServices: (arg0: Store) => IServices = store => ({
  dialog: new DialogService(store),
  loading: new LoadingService(store)
});

export default initiateServices;

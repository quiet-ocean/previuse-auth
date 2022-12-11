import {
  STARTED_SUFFIX,
  SUCCESS_SUFFIX,
  FAILED_SUFFIX
} from '../common/constants';
import { OpenDialogAction } from '../common/state/dialog/dialog.actions';
import { StopLoaderAction } from '../common/state/general/general.actions';
import { AnyAction, Dispatch } from 'redux';
import { AsyncAction, RootState } from '../common/models';

interface Args {
  id: string;
}

const createAsyncAction: AsyncAction = (
  type: string,
  fn: (args: Args, getState: () => RootState) => Promise<AnyAction>
) => {
  return (args: Args) => async (
    dispatch: Dispatch<AnyAction, RootState>,
    getState: () => RootState
  ) => {
    // dispatch starting action
    dispatch({
      type: `${type}${STARTED_SUFFIX}`,
      payload: args
    });
    let result;
    try {
      // activate promise call back
      result = await fn(args, getState);
    } catch (error) {
      // dispatch fail action
      dispatch({
        type: `${type}${FAILED_SUFFIX}`,
        error: true,
        payload: error
      });
      dispatch(StopLoaderAction());
      dispatch(OpenDialogAction({ title: 'error', content: error.message }));
      throw error;
    }
    // dispatch success action
    dispatch({
      type: `${type}${SUCCESS_SUFFIX}`,
      payload: result
    });

    return result;
  };
};

export default createAsyncAction;

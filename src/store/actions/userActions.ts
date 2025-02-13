import { Dispatch } from 'redux';

export const fetchUserData = (token: string) => async (dispatch: Dispatch) => {
  dispatch({ type: 'USER_LOADING' });
  try {
    const userDetail = await fetchUserData(token);
    dispatch({ type: 'USER_SUCCESS', payload: userDetail });
  } catch (error) {
    dispatch({ type: 'USER_ERROR', error: error });
  }
};

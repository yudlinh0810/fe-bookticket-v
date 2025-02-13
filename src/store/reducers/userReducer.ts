import { PayLoad, User } from './../../types';
const initialState = {
  loading: false,
  user: null,
  error: '',
};

const userReducer = (state = initialState, action: PayLoad<User>) => {
  switch (action.type) {
    case 'USER_LOADING':
      return { ...state, loading: true };
    case 'USER_SUCCESS':
      return { ...state, loading: false, user: action.payload };
    case 'USER_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
export default userReducer;

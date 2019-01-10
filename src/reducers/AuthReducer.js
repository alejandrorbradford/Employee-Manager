import { EMAIL_CHANGE,
         PASSWORD_CHANGE,
         LOGIN_SUCCESS,
         LOGIN_FAIL,
         LOGIN_START
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload, error: '' };
    case LOGIN_FAIL:
      return { ...state, error: 'Authentication Error', password: '', loading: false };
    case LOGIN_START:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};

import {getAuthUserData} from "./auth-reducer";

const INITIALIZING_SUCCESS = "INITIALIZING_SUCCESS";

const initialState = {
  initialized: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZING_SUCCESS:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
};

// Action Creator
export const initializingSuccess = () => ({type: INITIALIZING_SUCCESS});

// Thunk Creator
export const initializeApp = () => dispatch => {
  let promise1 = dispatch(getAuthUserData());
  Promise.all([promise1]).then(() => {
    dispatch(initializingSuccess());
  });
};


export default appReducer;

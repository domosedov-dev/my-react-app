const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
                }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching};

        default:
            return state;
    }
};

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export default authReducer;

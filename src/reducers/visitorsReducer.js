import { SUBMIT_FORM, SET_CURRENT_USER }  from '../actions';

export default function(state = {users: JSON.parse(localStorage.getItem('users') || '[]')}, action) {
    switch (action.type) {
    case SUBMIT_FORM:
        const users = [...state.users, action.userData];
        localStorage.setItem('users', JSON.stringify(users));
        return {
            ...state,
            users,
            currentUser: action.userData
        };
    case SET_CURRENT_USER:
        return {...state, currentUser: action.userData};
    default:
        return state;
    }
}

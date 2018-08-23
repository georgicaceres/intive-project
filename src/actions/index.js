export const UPDATE_FORM = 'update_form';
export const SUBMIT_FORM = 'submit_form';
export const SUBMIT_INVALID = 'submit_invalid';
export const SET_CURRENT_USER = 'set_current_user';

export function submitInvalid() {
    return {type: SUBMIT_INVALID};
}

export function updateForm(key, value) {
    return {type: UPDATE_FORM, key, value};
};

export function submitForm(userData) {
    return {type: SUBMIT_FORM, userData};
};

export function setCurrentUser(userData) {
    return {type: SET_CURRENT_USER, userData};
}

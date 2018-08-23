import { UPDATE_FORM, SUBMIT_FORM, SUBMIT_INVALID }  from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
    case UPDATE_FORM:
        return {...state, [action.key]: action.value};
    case SUBMIT_FORM:
        return {};
    case SUBMIT_INVALID:
        return {...state, showErrors: true};
    default:
        return state;
    }
}

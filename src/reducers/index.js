import { combineReducers } from 'redux';
import formReducer from './formReducer';
import visitorsReducer from './visitorsReducer';

const rootReducer = combineReducers({
    form: formReducer,
    visitors: visitorsReducer,
});

export default rootReducer;

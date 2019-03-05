import userLogin from './user';
import animalLogger from './animal'
import { combineReducers } from 'redux';

export default combineReducers({
    userLogin,
    animalLogger
});
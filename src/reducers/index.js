import {combineReducers} from 'redux';
import reducer_students from './reducer_student';

var rootReducers = combineReducers({

	studentList:reducer_students

});

export default rootReducers;
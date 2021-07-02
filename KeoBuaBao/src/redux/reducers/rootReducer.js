import {combineReducers} from 'redux';
import gameReducer from './GameReducer';

// console.log(gameReducer);
const rootReducer = combineReducers({
  gameReducer,
});

export default rootReducer;

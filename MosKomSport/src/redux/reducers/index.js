/**
 * Created by sabir on 19.07.17.
 */
import { combineReducers } from 'redux';

import SportReducer from './SportReducer.js';



export const reducer = combineReducers({
    sport: SportReducer
});
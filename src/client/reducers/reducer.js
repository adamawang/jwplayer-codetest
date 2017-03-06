import { combineReducers } from 'redux';

import VideoReducer from './home-reducer'

const rootReducer = combineReducers({
  video: VideoReducer,
});


export default rootReducer;

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

let initialState = {
  videoList: [],
  currentVideo: null
};

let configureStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);


export default configureStore;

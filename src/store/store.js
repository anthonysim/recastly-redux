import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

let initialState = {
  videoList: exampleVideoData,
  currentVideo: null
};

let configureStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);


export default configureStore;




// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducers';

// export default function configureStore(initialState) {
//     return createStore(
//         rootReducer,
//         initialState,
//         applyMiddleware(thunk)
//     );
// }
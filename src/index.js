import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.


// added getState() to see state updated...
// store.subscribe(() => {
//   console.log('state updated')
//   console.log(store.getState());
// });


ReactDOM.render(
  <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />,
  document.getElementById('app')
);

import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
import search from '../actions/search.js';
import store from '../store/store.js';


class App extends React.Component {
  componentDidMount() {
    //   // this.props.searchYouTube('react tutorials');
    store.dispatch(search('pizza'));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
};

export default App;

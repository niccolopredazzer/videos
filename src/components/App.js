import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

const KEY = 'AIzaSyDG5kDO9Hb7-mODvePIbLQyldjKi0mu2I4';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };
  
    onTermSubmit = async (term) => {
      const response = await youtube.get('/search', {
        params: {
          q: term,
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          key: KEY,
        },
      });
  
      this.setState({ videos: response.data.items });
    };
  
    onVideoSelect = (video) => {
      //console.log('From the App!', video);
    };
  
    render() {
      return (
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      );
    }
  }
  
  export default App;
//Import Libraries
import React, { Component } from 'react';
import { ScrollView } from 'react-native'; //Scrollview is necessary for scrolling rendered content
import axios from 'axios';
import AlbumDetail from './AlbumDetail'


//Make Component
class AlbumList extends Component {
  state = { albums: [] };

    componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
      return this.state.albums.map(album =>
        <AlbumDetail key={album.title} album={album} />
      );
    }

    render() {
      console.log(this.state);
    return (
      <ScrollView>
      {this.renderAlbums()}
      </ScrollView>
    );
  }
}

//Send data
export default AlbumList;

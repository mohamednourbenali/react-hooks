import React, { Component } from 'react';
import MovieList from './movies/MovieList';

export default class App extends Component {
  // state={
  //   title:"",
  //   description:"",
  //   posterURL:"",
  //   rating:""
  // }
  render() {  
    return (
      <div>
        <MovieList />
      </div>
    )
  }
}

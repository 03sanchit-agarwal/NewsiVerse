//this is the file which is rendered
import './App.css';

//writing rcc to create class based component
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';


export default class App extends Component {
 
  render() {
    return (
      <div>
      <NavBar />
      <News/>
      </div>
    )
  }
}

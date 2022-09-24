/*
 * @Author: Mrasamu
 * @Date: 2022-09-23 17:04:31
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-24 20:29:22
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/App.js
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './topbar/TopBar';
import Home from './pages/home/Home';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <Home />
      </div>
    );
  }
}
 
export default App;
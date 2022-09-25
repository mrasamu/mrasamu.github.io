/*
 * @Author: Mrasamu
 * @Date: 2022-09-23 17:04:31
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-25 15:43:35
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/App.js
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Posts from './components/posts/Posts';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <Posts/>
      </div>
    );
  }
}
 
export default App;
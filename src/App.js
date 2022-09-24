/*
 * @Author: Mrasamu
 * @Date: 2022-09-23 17:04:31
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-24 09:06:21
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/App.js
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>欢迎来到阿萨姆老哥站点</h2>
        </div>
        <p className="App-intro">
          你可以在 <code>src/App.js</code> 文件中修改。
        </p>
      </div>
    );
  }
}
 
export default App;
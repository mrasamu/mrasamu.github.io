/*
 * @Author: Mrasamu
 * @Date: 2022-09-23 17:04:31
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-26 14:17:51
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/App.jsx
 */
import './App.css';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Posts from './components/posts/Posts';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import About from './pages/about/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  // render() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route exact path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
    );
}
 
export default App;
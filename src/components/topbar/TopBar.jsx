/*
 * @Author: Mrasamu
 * @Date: 2022-09-24 20:23:25
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-26 14:12:08
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/components/topbar/TopBar.jsx
 */
import './topbar.css'
import {Link} from 'react-router-dom'
export default function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>
                  <Link to='/' className='link'>HOME</Link>
                </li>
                <li className='topListItem'>
                  <Link to='/about' className='link'>ABOUT</Link>
                </li>
                <li className='topListItem'>
                  <Link to='/posts' className='link'>POSTS</Link>
                </li>
            </ul>
        </div>
        <div className='topRight'>
            <img 
              className='topImg'
              src='https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

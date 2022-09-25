/*
 * @Author: Mrasamu
 * @Date: 2022-09-24 22:52:20
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-24 23:31:48
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/header/header.jsx
 */
import './header.css'

export default function header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
    </div>
  )
}

/*
 * @Author: Mrasamu
 * @Date: 2022-09-24 22:52:20
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-27 14:23:17
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/components/header/Header.jsx
 */
import './header.css'

export default function header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Home page</span>
            <span className="headerTitleLg">Mr.Asamu</span>
        </div>
        <img className="headerImg" src="https://s3.bmp.ovh/imgs/2022/09/27/bb88d91fc121c31e.jpg" alt="" />
    </div>
  )
}

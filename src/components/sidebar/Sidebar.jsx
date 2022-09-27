/*
 * @Author: Mrasamu
 * @Date: 2022-09-25 09:44:05
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-27 14:41:14
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/components/sidebar/Sidebar.jsx
 */
import './sidebar.css'
import ReactTooltip from 'react-tooltip'
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span>
            <img src="https://s3.bmp.ovh/imgs/2022/09/27/7f89e1b5481cbdf7.jpg" alt="" />
            <p className='pDesc'>
                Mr.Asamu:某个大学生, 喜欢编程, 喜欢音乐，喜欢游戏，日常捣鼓一些东西。
            </p>
        </div>
        {/* <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
         </div> */}
        <div className="sidebarSocial">
            <span className="sidebarTitle">FOLLOW US</span>
            <a data-tip data-for="githubTip" className="topIcon fa-brands fa-github" href='https://github.com/mrasamu'></a>
        <ReactTooltip id="githubTip" place="top" effect="solid">
        欢迎关注我的Github
        </ReactTooltip>
        <a data-tip data-for="blogTip"className="topIcon fa-solid fa-blog" href='https://blog.csdn.net/Mr_tea_milk'></a>
        <ReactTooltip id="blogTip" place="top" effect="solid">
        欢迎关注我的CSDN
        </ReactTooltip>
            
        </div>
    </div>
  )
}

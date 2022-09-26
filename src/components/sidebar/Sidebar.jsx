/*
 * @Author: Mrasamu
 * @Date: 2022-09-25 09:44:05
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-26 15:45:10
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
            <img src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
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

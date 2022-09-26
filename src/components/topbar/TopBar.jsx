/*
 * @Author: Mrasamu
 * @Date: 2022-09-24 20:23:25
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-26 15:28:14
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/components/topbar/TopBar.jsx
 */
import './topbar.css'
import {Link} from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
export default function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'>
        <a data-tip data-for="githubTip" className="topIcon fa-brands fa-github" href='https://github.com/mrasamu'></a>
        <ReactTooltip id="githubTip" place="top" effect="solid">
        查看我的Github主页
        </ReactTooltip>
        <a data-tip data-for="blogTip"className="topIcon fa-solid fa-blog" href='https://blog.csdn.net/Mr_tea_milk'></a>
        <ReactTooltip id="blogTip" place="top" effect="solid">
        查看我的CSDN主页
        </ReactTooltip>
        {/* <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i> */}
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
              src='https://s3.bmp.ovh/imgs/2022/09/26/96bba0a40163c9a5.jpg' alt='' />
            <Link to='/posts' className='name' style={{textDecoration:"none"}}>Mr.Asamu</Link>
        </div>
    </div>
  )
}

/*
 * @Author: Mrasamu
 * @Date: 2022-09-24 23:26:53
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-25 14:22:34
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/pages/home/Home.jsx
 */
import './home.css'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
export default function Home() {
  return (
    <>
    <Header/>
      <div className='home'>
        <Sidebar/>
        <Posts/>
      </div>
    </>
    
  )
}

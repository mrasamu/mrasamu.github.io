/*
 * @Author: Mrasamu
 * @Date: 2022-09-25 13:57:08
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-26 14:14:57
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/components/posts/Posts.jsx
 */
import './posts.css'
import Post from '../post/Post'
import Sidebar from '../sidebar/Sidebar'

export default function Posts() {
  return (
    <div className='posts'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

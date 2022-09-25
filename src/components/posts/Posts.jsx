/*
 * @Author: Mrasamu
 * @Date: 2022-09-25 13:57:08
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-25 14:00:46
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/posts/Posts.jsx
 */
import './posts.css'
import Post from '../post/Post'

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

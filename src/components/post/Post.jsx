/*
 * @Author: Mrasamu
 * @Date: 2022-09-25 13:59:04
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-25 14:12:39
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/post/Post.jsx
 */
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
            </div>
            <span className='postTitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
            <hr />
            <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
    </div>

  )
}

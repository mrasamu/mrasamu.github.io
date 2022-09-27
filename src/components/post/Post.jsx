/*
 * @Author: Mrasamu
 * @Date: 2022-09-25 13:59:04
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-26 17:29:50
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/components/post/Post.jsx
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
            <span className='postTitle'>React 创建个人博客记录 </span>
            <hr />
            <span className='postDate'>2022-9-26</span>
        </div>
        <p className='postDesc'>
            简要介绍了如何使用React创建个人博客, 记录了在搭建站点过程中遇到的一些问题。
        </p>
    </div>

  )
}

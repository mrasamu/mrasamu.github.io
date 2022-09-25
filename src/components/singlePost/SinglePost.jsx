/*
 * @Author: Mrasamu
 * @Date: 2022-09-25 14:28:35
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-25 14:54:45
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/components/singlePost/SinglePost.jsx
 */

import './singlepost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Asamu
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Asamu</b></span>
                <span className="singlePostData"><b>1 hour ago</b></span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    </div>
  )
}

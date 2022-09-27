/*
 * @Author: Mrasamu
 * @Date: 2022-09-25 14:26:14
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-26 16:54:06
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/pages/single/Single.jsx
 */
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import "./single.css"
import Post1 from "../../components/Blogs/Post1/Post1"
export default function Single() {
  return (
    <div className="single">
        <Post1/>
        <Sidebar/>
        
    </div>
  )
}

/*
 * @Author: Mrasamu
 * @Date: 2022-09-25 14:26:14
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-25 14:31:54
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/pages/single/Single.jsx
 */
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from "../../components/singlePost/SinglePost"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>
        
    </div>
  )
}

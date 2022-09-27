/*
 * @Author: Mrasamu
 * @Date: 2022-09-26 16:04:00
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-26 17:24:04
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/components/Blogs/Post1/Post1.jsx
 */
import "../Blog.css";

export default function Post1() {
  return (
    <div>
        <img src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="singlePostImg" />
        <h2>React 创建个人博客记录</h2>
          <p>链接：https://www.youtube.com/watch?v=tlTdbc5byAs&amp;t=79s</p>
          <ul>
          <li>安装React</li>
          <li>使用React初始化一个项目</li>
          <li>选择字体：</li>
          </ul>
          <p>https://fonts.google.com</p>
          <p>搜索到josefin等字体之后，将其添加到我们的代选框中，复制link到index.html即可</p>
          <p><code>&lt;link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;1,200&amp;family=Lora:wght@400;500;600;700&amp;display=swap" rel="stylesheet"&gt;</code></p>
          <ul>
          <li>
          <p>删除index,js和app.js 中不需要的部分</p>
          </li>
          <li>
          <p>在src文件夹中创建topbar文件夹</p>
          </li>
          <li>
          <p>添加topbar jsx css</p>
          </li>
          <li>
          <p>rfc:快捷键</p>
          </li>
          <li>
          <p>修改css时需要使用字体可以从fonts.google的导出界面直接找到</p>
          </li>
          <li>
          <p>图标网站：https://fontawesome.com/start</p>
          </li>
          <li>
          <p>查询fontawesome对应的url：https://cdnjs.com/libraries/font-awesome</p>
          </li>
          </ul>
          <p><code>css
          &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" /&gt;</code></p>
          <ul>
          <li>可以根据已经获得的class的名字来构建新的classname</li>
          </ul>
          <p>添加上Name 然后在前面补上你需要在css中调用的类名字即可</p>
          <ul>
          <li>
          <p>对于一个类下面的img p 等元素，可以在css中这样定义：</p>
          </li>
          <li>
          <p><code>css
            .sidebarItem &gt; img
                width: 80%;
                height: 80%;
                object-fit: cover;
                margin: 10px;
            </code></p>
          </li>
          </ul>

    </div>
  )
}

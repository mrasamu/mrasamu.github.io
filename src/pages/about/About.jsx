/*
 * @Author: Mrasamu
 * @Date: 2022-09-25 17:24:34
 * @LastEditors: Mrasamu
 * @LastEditTime: 2022-09-30 11:21:40
 * @description: file content
 * @FilePath: /mrasamu.github.io/src/pages/about/About.jsx
 */
import './about.css'

export default function About() {
  return (
    <div>
      <div className='about'>
        <img className="aboutImg" src="https://rishavanand.github.io/static/images/greetings.gif" alt="" />
      </div>
      <div className='aboutTitle'>
        <h2>
        I'm Mrasamu, a student majoring in EE at Tsinghua University.
        </h2>
      </div>

      <div className='aboutContent'>
        <p>
        <br/>
        🔭 I’m currently working on Select-ROS2(https://github.com/efc-robot/Select-ROS2)
        <br />
        🌱 I’m currently learning Robot Design and CV.  
        <br/>
        ❓ Ask me about anything related to ROS2 or ROS  
        </p>
      </div>
      <div className='aboutTitle'>
        <h2>
        My Skill Set
        </h2>
      </div>
      <div className='aboutContent'>
      <h3>
        Frontend
      </h3>
      <a href="https://reactjs.org/" target="_blank">
        <img src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" />
        </a>
        <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  
      <a href="https://www.javascript.com/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>  
      <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="50" /></a>  
      <a href="https://flask.palletsprojects.com/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/flask.png" alt="Flask" height="50" /></a>  
      <a href="https://www.djangoproject.com/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/django-original.svg" alt="Django" height="50" /></a>    
      </div>
      
      <div className='aboutContent'>
      <h3>
        Backend
      </h3>
      <a href="https://www.cplusplus.com/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg" alt="C++" height="50" /></a>  
      <a href="https://nodejs.org/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" /></a>  
      <a href="https://www.python.org/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/python-original.svg" alt="Python" height="50" /></a>  
      <a href="https://www.mysql.com/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" height="50" /></a>  
      </div>
      
      <div className='aboutContent'>
      <h3>
        DevOps
      </h3>
      <a href="https://www.linux.org/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/linux-original.svg" alt="Linux" height="50" /></a>  
      <a href="https://github.com/" target="_blank"><img  src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>  
      <a href="https://www.gnu.org/software/bash/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg" alt="Bash" height="50" /></a>  
      <a href="https://www.raspberrypi.org/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/raspberrypi.png" alt="Raspberry Pi" height="50" /></a>  
      </div>
    <div className='aboutContent'>
      <h3>
        Connect with me
      </h3>
      <a href="https://github.com/mrasamu" target="_blank">
      <img src="https://img.shields.io/badge/github-community-black" />
      </a>  
      <a href="https://blog.csdn.net/Mr_tea_milk?type=blog" target="_blank">
      <img src="https://img.shields.io/badge/CSDN-community-red" />
      </a>
    </div>
    <div className='aboutContent'>
    <h3>
      My Github Stats
    </h3>
    <div align="center"><img src="https://github-readme-stats.vercel.app/api?username=mrasamu&show_icons=true&count_private=true&hide_border=true" align="center" /></div>
    </div>
    
    </div>
  )
}

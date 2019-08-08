import React, { Component } from 'react';
import './home.scss'
class Home extends Component{
  render () {
    return(
      <div className="home">
        {/* 页头公共区域，后面写成单独的组件 */}
        <header className="header">
        <div className="bx">
          <div className="title">
            <span className="name">小骚鑫</span>
            <span className="info">一个热爱前端的小白</span>
          </div>
          <div className="router">
            <span>首页</span>
          </div>
        </div>
        </header>
        {/* 日志的主要内容区域 */}
          <div className="content bx">
            <div className="left-info bs">
              <div className="info-title">title</div>
              <div className="journal">日志</div>
            </div>
            <div className="right-card">个人信息展示区</div>
        </div>
        {/* 页脚公共区域，后面写成单独的组件 */}
        <footer className="footer bx">
          
        </footer>
      </div>
    )
  }
}

export default Home
import React, { Component } from 'react';
import './home.scss'
class Home extends Component{
  render () {
    return(
      <div className="home">
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
        <div className="content bx">
        </div>
      </div>
    )
  }
}

export default Home
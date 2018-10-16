import React, { Component } from 'react';
import './style/App.scss';

// 引入组件
import Header from './components/Header'
import Broadside from './components/Broadside'

// 引入页面
import Pv from './views/Pv'

class App extends Component {

  render() {
    return (
      <div className="app">
         {/*顶部导航栏*/}
         <div className="header">
           <Header />
         </div>
        {/* 中间的内容区域 */}
        <div className="main">
          {/* 左边侧边栏 */}
          <div className="aside">
            <Broadside />
          </div>

          {/* 跳转的页面 */}
          <div className="page">
            <Pv />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

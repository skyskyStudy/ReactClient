import React, { Component } from 'react'
import './style/App.scss';

// 引入组件
import Header from './components/Header'
import Broadside from './components/Broadside'

// 引入页面
import Pv from './views/Pv'

const initialState = { count: 0 };
type State = Readonly<typeof initialState>;

class App extends Component<object, State> {
  constructor(props) {
    super(props);

  }

  state: State = initialState;

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

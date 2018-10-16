import React from 'react'
// import { Router, Route, Link } from 'react-router'

// 引入样式
import '../style/broadside.scss'


// 侧边栏的点击
const items = [
  {
    name: '广告数据',
    link: '/Advert'
  },
  {
    name: '用户数据',
    link: '/User'
  },
  {
    name: '流量方数据',
    link: '/Flow'
  },
  {
    name: 'PV数据',
    link: '/PV'
  },
   {
    name: '页面数据',
    link: '/Page'
  },
  {
    name: ' 异常数据',
    link: '/Nozzle'
  },
   {
    name: '接口数据',
    link: '/Abnormal'
  }
]

class Broadside extends React.Component {
  constructor(props) {
    super(props);

    // 绑定this
    // this.getItems = this.getItems.bind(this);
  }

  // 静态函数

  // 挂载函数
  render () {
    const lists = items.map((item, index) =>
        <div className="item" key={index}>
          <a href={item.link}>{item.name}</a>
        </div>
    )
    console.log(lists);
    return (
      <aside>
        {lists}
      </aside>
    )
  }
}

export default Broadside

// 函数式组件

// 函数

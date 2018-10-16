import React from 'react'

//引入样式
import '../style/header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '顶部'
    }
  }

  // 挂载方法
  render () {
    return (
      <header className="container">
        {this.state.header}
      </header>
    )
  }
}

export default Header
import React from 'react'

import { Link } from 'react-router'



export default React.createClass({
  render() {
    return <div>
    	<h1>Hello, World React Router!</h1>
		<ul role="nav">
			<li><Link to='/'>index</Link></li>
			<li><Link to='/about/messages/123?bar=baz'>About</Link></li>
			<li><Link to='/404' activeStyle={{color:'red'}} activeClassName="active">404</Link></li>
			<li><Link to='/counter'>Counter</Link></li>
		</ul>
		{this.props.children}   
    </div>
  }
})

import React from 'react'

export default React.createClass({
  render() {
    return <div>messages {this.props.params.id} {this.props.location.query.bar}!</div>
  }
})

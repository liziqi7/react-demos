import React from 'react'

export default React.createClass({
	 contextTypes: {
	    router: React.PropTypes.object
	  },
    componentDidMount() {
    	this.context.router.setRouteLeaveHook(this.props.route,this.routeWillLeave)
        },
        routeWillLeave(nextLocation){        	
        	if(nextLocation){
        		return "确认离开?"
        	}
        },
        render() {
            return <div > 404! < /div>
        }
})

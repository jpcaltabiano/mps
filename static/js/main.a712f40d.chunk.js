(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),i=n(3),u=n(4),l=n(6),s=n(5),m=n(7),w=function(e){function t(e){var n;Object(i.a)(this,t),n=Object(l.a)(this,Object(s.a)(t).call(this,e));var a=(new Date).setHours(8,0,0),c=new Date-a;return n.launchClock(),n.state={currentTime:(new Date).toLocaleString(),mtime:c,mcount:0},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"launchClock",value:function(){var e=this;console.log(this.fixedDate),setInterval(function(){e.setState({currentTime:(new Date).toLocaleString(),mtime:new Date-(new Date).setHours(8,0,0),mcount:(e.state.mtime*(27.8/36e5)).toFixed(4)})},1e3)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",null,this.state.currentTime),c.a.createElement("div",null,this.state.mcount))}}]),t}(c.a.Component);o.a.render(c.a.createElement(w,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a712f40d.chunk.js.map
(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"7oih":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ye}));var r=n("nKUr"),a=n("q1tI"),i=n.n(a),o=n("8Kt/"),c=n.n(o),s=n("wx14"),l=n("zLVn"),u=n("TSYQ"),f=n.n(u),d=n("vUet"),p=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.fluid,a=e.as,o=void 0===a?"div":a,c=e.className,u=Object(l.a)(e,["bsPrefix","fluid","as","className"]),p=Object(d.a)(n,"container"),v="string"===typeof r?"-"+r:"-fluid";return i.a.createElement(o,Object(s.a)({ref:t},u,{className:f()(c,r?""+p+v:p)}))}));p.displayName="Container",p.defaultProps={fluid:!1};var v=p,b=n("YFqc"),h=n.n(b);n("QLaP");function m(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function x(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function g(e,t){return Object.keys(t).reduce((function(n,r){var i,o=n,c=o[m(r)],u=o[r],f=Object(l.a)(o,[m(r),r].map(x)),d=t[r],p=function(e,t,n){var r=Object(a.useRef)(void 0!==e),i=Object(a.useState)(t),o=i[0],c=i[1],s=void 0!==e,l=r.current;return r.current=s,!s&&l&&o!==t&&c(t),[s?e:o,Object(a.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(u,c,e[d]),v=p[0],b=p[1];return Object(s.a)({},f,((i={})[r]=v,i[d]=b,i))}),e)}function j(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function y(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function O(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function E(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}y.__suppressDeprecationWarning=!0,O.__suppressDeprecationWarning=!0,E.__suppressDeprecationWarning=!0;var N=/-(.)/g;var w=function(e){return e[0].toUpperCase()+(t=e,t.replace(N,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var C=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.as,o=Object(l.a)(e,["bsPrefix","className","as"]);n=Object(d.a)(n,"navbar-brand");var c=a||(o.href?"a":"span");return i.a.createElement(c,Object(s.a)({},o,{ref:t,className:f()(r,n)}))}));C.displayName="NavbarBrand";var S=C,k=n("dZvc");function P(e,t){return function(e){var t=Object(k.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var T=/([A-Z])/g;var R=/^ms-/;function _(e){return function(e){return e.replace(T,"-$1").toLowerCase()}(e).replace(R,"-ms-")}var I=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var M=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(_(t))||P(e).getPropertyValue(_(t));Object.keys(t).forEach((function(a){var i=t[a];i||0===i?!function(e){return!(!e||!I.test(e))}(a)?n+=_(a)+": "+i+";":r+=a+"("+i+") ":e.style.removeProperty(_(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},L=n("SJxq"),D=!1,K=!1;try{var q={get passive(){return D=!0},get once(){return K=D=!0}};L.a&&(window.addEventListener("test",q,q),window.removeEventListener("test",q,!0))}catch(Be){}var U=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!K){var a=r.once,i=r.capture,o=n;!K&&a&&(o=n.__once||function e(r){this.removeEventListener(t,e,i),n.call(this,r)},n.__once=o),e.addEventListener(t,o,D?r:i)}e.addEventListener(t,n,r)};var A=function(e,t,n,r){var a=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var V=function(e,t,n,r){return U(e,t,n,r),function(){A(e,t,n,r)}};function F(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=V(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),i()}}function z(e,t,n,r){null==n&&(n=function(e){var t=M(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var a=F(e,n,r),i=V(e,"transitionend",t);return function(){a(),i()}}n("17x9");var H=n("i8i4"),J=n.n(H),Y=!1,B=i.a.createContext(null),W=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}j(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[J.a.findDOMNode(this),r],i=a[0],o=a[1],c=this.getTimeouts(),s=r?c.appear:c.enter;!e&&!n||Y?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(s,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:J.a.findDOMNode(this);t&&!Y?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:J.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(l.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.a.createElement(B.Provider,{value:null},"function"===typeof n?n(e,r):i.a.cloneElement(i.a.Children.only(n),r))},t}(i.a.Component);function Q(){}W.contextType=B,W.propTypes={},W.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Q,onEntering:Q,onEntered:Q,onExit:Q,onExiting:Q,onExited:Q},W.UNMOUNTED="unmounted",W.EXITED="exited",W.ENTERING="entering",W.ENTERED="entered",W.EXITING="exiting";var X=W;var Z,G=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};var $={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function ee(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=$[e];return n+parseInt(M(t,r[0]),10)+parseInt(M(t,r[1]),10)}var te=((Z={}).exited="collapse",Z.exiting="collapsing",Z.entering="collapsing",Z.entered="collapse show",Z),ne={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:ee},re=i.a.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,o=e.onEntered,c=e.onExit,u=e.onExiting,d=e.className,p=e.children,v=e.dimension,b=void 0===v?"height":v,h=e.getDimensionValue,m=void 0===h?ee:h,x=Object(l.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),g="function"===typeof b?b():b,j=Object(a.useMemo)((function(){return G((function(e){e.style[g]="0"}),n)}),[g,n]),y=Object(a.useMemo)((function(){return G((function(e){var t="scroll"+g[0].toUpperCase()+g.slice(1);e.style[g]=e[t]+"px"}),r)}),[g,r]),O=Object(a.useMemo)((function(){return G((function(e){e.style[g]=null}),o)}),[g,o]),E=Object(a.useMemo)((function(){return G((function(e){e.style[g]=m(g,e)+"px",e.offsetHeight}),c)}),[c,m,g]),N=Object(a.useMemo)((function(){return G((function(e){e.style[g]=null}),u)}),[g,u]);return i.a.createElement(X,Object(s.a)({ref:t,addEndListener:z},x,{"aria-expanded":x.role?x.in:null,onEnter:j,onEntering:y,onEntered:O,onExit:E,onExiting:N}),(function(e,t){return i.a.cloneElement(p,Object(s.a)({},t,{className:f()(d,p.props.className,te[e],"width"===g&&"width")}))}))}));re.defaultProps=ne;var ae=re,ie=i.a.createContext(null);ie.displayName="NavbarContext";var oe=ie,ce=i.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,a=Object(l.a)(e,["children","bsPrefix"]);return r=Object(d.a)(r,"navbar-collapse"),i.a.createElement(oe.Consumer,null,(function(e){return i.a.createElement(ae,Object(s.a)({in:!(!e||!e.expanded)},a),i.a.createElement("div",{ref:t,className:r},n))}))}));ce.displayName="NavbarCollapse";var se=ce;var le=function(e){var t=Object(a.useRef)(e);return Object(a.useEffect)((function(){t.current=e}),[e]),t};function ue(e){var t=le(e);return Object(a.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var fe=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,c=e.label,u=e.as,p=void 0===u?"button":u,v=e.onClick,b=Object(l.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(d.a)(n,"navbar-toggler");var h=Object(a.useContext)(oe)||{},m=h.onToggle,x=h.expanded,g=ue((function(e){v&&v(e),m&&m()}));return"button"===p&&(b.type="button"),i.a.createElement(p,Object(s.a)({},b,{ref:t,onClick:g,"aria-label":c,className:f()(r,n,!x&&"collapsed")}),o||i.a.createElement("span",{className:n+"-icon"}))}));fe.displayName="NavbarToggle",fe.defaultProps={label:"Toggle navigation"};var de=fe,pe=i.a.createContext(null),ve=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},be=pe,he=function(e,t){var n=void 0===t?{}:t,r=n.displayName,a=void 0===r?w(e):r,o=n.Component,c=n.defaultProps,u=i.a.forwardRef((function(t,n){var r=t.className,a=t.bsPrefix,c=t.as,u=void 0===c?o||"div":c,p=Object(l.a)(t,["className","bsPrefix","as"]),v=Object(d.a)(a,e);return i.a.createElement(u,Object(s.a)({ref:n,className:f()(r,v)},p))}));return u.defaultProps=c,u.displayName=a,u}("navbar-text",{Component:"span"}),me=i.a.forwardRef((function(e,t){var n=g(e,{expanded:"onToggle"}),r=n.bsPrefix,o=n.expand,c=n.variant,u=n.bg,p=n.fixed,v=n.sticky,b=n.className,h=n.children,m=n.as,x=void 0===m?"nav":m,j=n.expanded,y=n.onToggle,O=n.onSelect,E=n.collapseOnSelect,N=Object(l.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),w=Object(d.a)(r,"navbar"),C=Object(a.useCallback)((function(){O&&O.apply(void 0,arguments),E&&j&&y&&y(!1)}),[O,E,j,y]);void 0===N.role&&"nav"!==x&&(N.role="navigation");var S=w+"-expand";"string"===typeof o&&(S=S+"-"+o);var k=Object(a.useMemo)((function(){return{onToggle:function(){return y&&y(!j)},bsPrefix:w,expanded:!!j}}),[w,j,y]);return i.a.createElement(oe.Provider,{value:k},i.a.createElement(be.Provider,{value:C},i.a.createElement(x,Object(s.a)({ref:t},N,{className:f()(b,w,o&&S,c&&w+"-"+c,u&&"bg-"+u,v&&"sticky-"+v,p&&"fixed-"+p)}),h)))}));me.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},me.displayName="Navbar",me.Brand=S,me.Toggle=de,me.Collapse=se,me.Text=he;var xe=me,ge=(n("K9S6"),i.a.createContext(null));ge.displayName="CardContext";var je=ge,ye=Function.prototype.bind.call(Function.prototype.call,[].slice);var Oe=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var Ee=function(e,t){return Object(a.useMemo)((function(){return function(e,t){var n=Oe(e),r=Oe(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},Ne=i.a.createContext(null);Ne.displayName="NavContext";var we=Ne,Ce=i.a.createContext(null),Se=function(){},ke=i.a.forwardRef((function(e,t){var n,r,o=e.as,c=void 0===o?"ul":o,u=e.onSelect,f=e.activeKey,d=e.role,p=e.onKeyDown,v=Object(l.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),b=Object(a.useReducer)((function(e){return!e}),!1)[1],h=Object(a.useRef)(!1),m=Object(a.useContext)(be),x=Object(a.useContext)(Ce);x&&(d=d||"tablist",f=x.activeKey,n=x.getControlledId,r=x.getControllerId);var g=Object(a.useRef)(null),j=function(e){var t=g.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",ye(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var i=r.indexOf(a);if(-1===i)return null;var o=i+e;return o>=r.length&&(o=0),o<0&&(o=r.length-1),r[o]},y=function(e,t){null!=e&&(u&&u(e,t),m&&m(e,t))};Object(a.useEffect)((function(){if(g.current&&h.current){var e=g.current.querySelector("[data-rb-event-key].active");e&&e.focus()}h.current=!1}));var O=Ee(t,g);return i.a.createElement(be.Provider,{value:y},i.a.createElement(we.Provider,{value:{role:d,activeKey:ve(f),getControlledId:n||Se,getControllerId:r||Se}},i.a.createElement(c,Object(s.a)({},v,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=j(-1);break;case"ArrowRight":case"ArrowDown":t=j(1);break;default:return}t&&(e.preventDefault(),y(t.dataset.rbEventKey,e),h.current=!0,b())},ref:O,role:d}))))})),Pe=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,o=e.as,c=void 0===o?"div":o,u=Object(l.a)(e,["bsPrefix","className","children","as"]);return n=Object(d.a)(n,"nav-item"),i.a.createElement(c,Object(s.a)({},u,{ref:t,className:f()(r,n)}),a)}));Pe.displayName="NavItem";var Te=Pe;function Re(e){return!e||"#"===e.trim()}var _e=i.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,a=e.disabled,o=e.onKeyDown,c=Object(l.a)(e,["as","disabled","onKeyDown"]),u=function(e){var t=c.href,n=c.onClick;(a||Re(t))&&e.preventDefault(),a?e.stopPropagation():n&&n(e)};return Re(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),a&&(c.tabIndex=-1,c["aria-disabled"]=!0),i.a.createElement(r,Object(s.a)({ref:t},c,{onClick:u,onKeyDown:G((function(e){" "===e.key&&(e.preventDefault(),u(e))}),o)}))}));_e.displayName="SafeAnchor";var Ie=_e,Me=(n("2W6z"),i.a.forwardRef((function(e,t){var n=e.active,r=e.className,o=e.eventKey,c=e.onSelect,u=e.onClick,d=e.as,p=Object(l.a)(e,["active","className","eventKey","onSelect","onClick","as"]),v=ve(o,p.href),b=Object(a.useContext)(be),h=Object(a.useContext)(we),m=n;if(h){p.role||"tablist"!==h.role||(p.role="tab");var x=h.getControllerId(v),g=h.getControlledId(v);p["data-rb-event-key"]=v,p.id=x||p.id,p["aria-controls"]=g||p["aria-controls"],m=null==n&&null!=v?h.activeKey===v:n}"tab"===p.role&&(p.tabIndex=m?p.tabIndex:-1,p["aria-selected"]=m);var j=ue((function(e){u&&u(e),null!=v&&(c&&c(v,e),b&&b(v,e))}));return i.a.createElement(d,Object(s.a)({},p,{ref:t,onClick:j,className:f()(r,m&&"active")}))})));Me.defaultProps={disabled:!1};var Le=Me,De={disabled:!1,as:Ie},Ke=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,a=e.className,o=e.href,c=e.eventKey,u=e.onSelect,p=e.as,v=Object(l.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(d.a)(n,"nav-link"),i.a.createElement(Le,Object(s.a)({},v,{href:o,ref:t,eventKey:c,as:p,disabled:r,onSelect:u,className:f()(a,n,r&&"disabled")}))}));Ke.displayName="NavLink",Ke.defaultProps=De;var qe=Ke,Ue=i.a.forwardRef((function(e,t){var n,r,o,c=g(e,{activeKey:"onSelect"}),u=c.as,p=void 0===u?"div":u,v=c.bsPrefix,b=c.variant,h=c.fill,m=c.justify,x=c.navbar,j=c.className,y=c.children,O=c.activeKey,E=Object(l.a)(c,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),N=Object(d.a)(v,"nav"),w=!1,C=Object(a.useContext)(oe),S=Object(a.useContext)(je);return C?(r=C.bsPrefix,w=null==x||x):S&&(o=S.cardHeaderBsPrefix),i.a.createElement(ke,Object(s.a)({as:p,ref:t,activeKey:O,className:f()(j,(n={},n[N]=!w,n[r+"-nav"]=w,n[o+"-"+b]=!!o,n[N+"-"+b]=!!b,n[N+"-fill"]=h,n[N+"-justified"]=m,n))},E),y)}));Ue.displayName="Nav",Ue.defaultProps={justify:!1,fill:!1},Ue.Item=Te,Ue.Link=qe;var Ae=Ue,Ve=n("vOnD"),Fe=Object(Ve.b)(h.a).attrs({as:"a"}).withConfig({displayName:"Nav__NavLink",componentId:"sc-1mit8lf-0"})(["font-weight:bold !important;margin:0 10px;"]);function ze(){return Object(r.jsx)(xe,{sticky:"top",bg:"light",expand:"lg",children:Object(r.jsxs)(v,{children:[Object(r.jsx)(xe.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(r.jsx)("div",{children:Object(r.jsx)("a",{href:"/#page-top",alt:"Retour \xe0 l'accueil",children:Object(r.jsx)("img",{src:"/img/logo-MSP.png",width:100,height:68,alt:"Logo MonSuiviPsy"})})}),Object(r.jsx)(xe.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end",children:Object(r.jsxs)(Ae,{children:[Object(r.jsx)(Fe,{href:"/#pourquoi",children:"Pourquoi mon suivi psy?"}),Object(r.jsx)(Fe,{href:"/#comment",children:"Comment cela fonctionne"}),Object(r.jsx)(Fe,{href:"/#qui",children:"Qui sommes-nous?"}),Object(r.jsx)(Fe,{href:"/#contact",children:"Contact"})]})})]})})}function He(){return Object(r.jsxs)("header",{style:{height:700,overflow:"hidden"},children:[Object(r.jsx)("video",{id:"video1",preload:"true",autoPlay:!0,muted:!0,playsInline:!0,loop:!0,className:"d-none d-md-block",style:{background:"white",filter:"grayscale(30%)",height:"auto",width:"100%"},children:Object(r.jsx)("source",{src:"/home-background.mp4",type:"video/mp4"})}),Object(r.jsx)("div",{className:"d-md-none",style:{height:"100%",backgroundImage:"url(/img/home-demo-background.jpg)",backgroundSize:"cover",backgroundPosition:"center center"}}),Object(r.jsx)("div",{style:{position:"absolute",top:150,width:"100%"},children:Object(r.jsx)("div",{className:"container h-100",children:Object(r.jsxs)("div",{className:"row h-100",children:[Object(r.jsx)("div",{className:"col-lg-8 my-auto",style:{background:"rgb(66,66,66,0.5)",borderRadius:10,padding:"2em"},children:Object(r.jsxs)("div",{style:{color:"white"},children:[Object(r.jsx)("h1",{className:"mb-5",children:Object(r.jsx)("b",{children:"MON SUIVI PSY"})}),Object(r.jsx)("h3",{children:"Mieux conna\xeetre mes sympt\xf4mes pour un meilleur accompagnement par mon m\xe9decin"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{href:"#",children:Object(r.jsx)("img",{width:200,src:"/img/app-store-badge.svg",alt:""})}),Object(r.jsx)("a",{href:"#",children:Object(r.jsx)("img",{width:200,src:"/img/google-play-badge.svg",alt:""})})]})]})}),Object(r.jsx)("div",{className:"col-lg-4 my-auto d-none d-lg-block",children:Object(r.jsx)("img",{src:"/img/demo-screen-1.png",className:"img-fluid",alt:"",width:300,height:580})})]})})})]})}function Je(){return Object(r.jsx)("footer",{style:{marginTop:150,background:"var(--primary)",color:"var(--white) !important"},children:Object(r.jsxs)("div",{className:"container text-center",children:[Object(r.jsx)("p",{children:"La Fabrique Num\xe9rique des Minist\xe8res Sociaux \xa9 2020"}),Object(r.jsx)("ul",{className:"list-inline",children:Object(r.jsx)("li",{className:"list-inline-item",children:Object(r.jsx)(h.a,{href:"/cgu",passHref:!0,children:Object(r.jsx)("a",{style:{color:"var(--white) !important",fontSize:"0.8em"},children:"condititions g\xe9n\xe9rales"})})})})]})})}function Ye(e){var t=e.showHeader,n=e.children;return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)(c.a,{children:Object(r.jsx)("title",{children:"Mon suivi Psy"})}),Object(r.jsx)(ze,{}),t&&Object(r.jsx)(He,{}),Object(r.jsx)(v,{children:n}),Object(r.jsx)(Je,{})]})}},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,i.default)(r)};var r,a=n("pvIh"),i=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,i,o,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,i,o,c],u=0;(s=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},SJxq:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var i=a(n("q1tI")),o=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if((0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.pathname||"/",f=i.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,o.resolveHref)(a,e.as):c||i}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,b=e.replace,h=e.shallow,m=e.scroll,x=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var g=i.Children.only(v),j=g&&"object"===typeof g&&g.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),O=r(y,2),E=O[0],N=O[1],w=i.default.useCallback((function(e){E(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,E]);(0,i.useEffect)((function(){var e=N&&t&&(0,o.isLocalURL)(d),r="undefined"!==typeof x?x:n&&n.locale,a=l[d+"%"+p+(r?"%"+r:"")];e&&!a&&u(n,d,p,{locale:r})}),[p,d,N,x,t,n]);var C={ref:w,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:i,locale:s}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,b,h,m,x)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};return(e.passHref||"a"===g.type&&!("href"in g.props))&&(C.href=(0,o.addBasePath)((0,o.addLocale)(p,"undefined"!==typeof x?x:n&&n.locale,n&&n.defaultLocale))),i.default.cloneElement(g,C)};t.default=f},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,i,o){var c=a||"<<anonymous>>",s=o||r;if(null==n[r])return t?new Error("Required "+i+" `"+s+"` was not specified in `"+c+"`."):null;for(var l=arguments.length,u=Array(l>6?l-6:0),f=6;f<l;f++)u[f-6]=arguments[f];return e.apply(void 0,[n,r,c,i,s].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,a=(0,i.useRef)(),l=(0,i.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,i.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){i.unobserve(e),0===o.size&&(i.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,i.useEffect)((function(){c||f||(0,o.default)((function(){return d(!0)}))}),[f]),[p,f]};var i=n("q1tI"),o=a(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var s=new Map},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("wx14");var r=n("q1tI"),a=n.n(r),i=a.a.createContext({});i.Consumer,i.Provider;function o(e,t){var n=Object(r.useContext)(i);return e||n[t]||t}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);
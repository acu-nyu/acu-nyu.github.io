(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7oih":function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),o=n.n(a),i=n("TJpk"),u=n.n(i),c=n("Wbzz");n("kpl1"),n("obyI");function l(){return o.a.createElement("section",{id:"footer"},o.a.createElement("div",{className:"inner"},o.a.createElement("h2",{className:"major"},"Get in touch"),o.a.createElement("p",{style:{textAlign:"center"}},"Feel free to reach out to us on any of our socials!"),o.a.createElement("ul",{className:"icons",style:{textAlign:"center"}},o.a.createElement("li",null,o.a.createElement("a",{className:"icon fa-instagram",href:"https://instagram.com/nyu_acu"})),o.a.createElement("li",null,o.a.createElement("a",{className:"icon fa-facebook",href:"https://www.facebook.com/nyu.acu/"})),o.a.createElement("li",null,o.a.createElement("a",{className:"icon fa-github",href:"https://github.com/acu-nyu/"}))),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"© Solid State. All rights reserved."),o.a.createElement("li",null,"Design: ",o.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP")))))}function s(e){var t=e.onMenuToggle,n=void 0===t?function(){}:t;return o.a.createElement("nav",{id:"menu"},o.a.createElement("div",{className:"inner"},o.a.createElement("h2",null,"Menu"),o.a.createElement("ul",{className:"links"},o.a.createElement("li",null,o.a.createElement(c.Link,{onClick:function(e){n()},to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(c.Link,{onClick:function(e){n()},to:"/Team"},"Team"))),o.a.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),n()},href:"#menu"},"")))}function T(e){var t=e.fullMenu,n=Object(a.useState)(!1),r=n[0],i=n[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{id:"header",className:t?"":"alt"},o.a.createElement("h1",null,o.a.createElement(c.Link,{to:"/"},"Solid State")),o.a.createElement("nav",null,o.a.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),i(!r)},className:"menuToggle"},o.a.createElement("span",null,"Menu")))),o.a.createElement("div",{className:r?"is-menu-visible":" "},o.a.createElement(s,{onMenuToggle:function(){return i(!r)}})))}var f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isPreloaded:!0},n}Object(r.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({isPreloaded:!1})}),100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.render=function(){var e=this.props,t=e.children,n=e.fullMenu,r=this.state.isPreloaded;return o.a.createElement(c.StaticQuery,{query:"3649515864",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Solid State"},{name:"keywords",content:"site, web"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{className:r?" main-body  is-preload":" main-body"},o.a.createElement("div",{id:"page-wrapper"},o.a.createElement(T,{fullMenu:n}),t,o.a.createElement(l,null))))}})},t}(a.Component);t.a=f},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function T(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var u=a.prototype;return u.shouldComponentUpdate=function(e){return!i(e,this.props)},u.componentWillMount=function(){s.push(this),T()},u.componentDidUpdate=function(){T()},u.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),T()},u.render=function(){return o.createElement(r,this.props)},a}(a.Component);return u(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),u(f,"canUseDOM",c),f}}},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var l=o[c];if(!u(l))return!1;var s=e[l],T=t[l];if(!1===(a=n?n.call(r,s,T,l):void 0)||void 0===a&&s!==T)return!1}return!0}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=T(n("q1tI")),i=T(n("17x9")),u=T(n("8+s/")),c=T(n("bmMU")),l=n("v1p5"),s=n("hFT/");function T(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d,m,A,h=(0,u.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),S=(d=h,A=m=function(e){function t(){return E(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,u=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=u,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=f(a,["children"]),u=(0,l.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(d,a)},a(t,null,[{key:"canUseDOM",set:function(e){d.canUseDOM=e}}]),t}(o.default.Component),m.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=d.peek,m.rewind=function(){var e=d.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},A);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var u,c,l,s=r(t),T=r(n);if(s&&T){if((c=t.length)!=n.length)return!1;for(u=c;0!=u--;)if(!e(t[u],n[u]))return!1;return!0}if(s!=T)return!1;var f=t instanceof Date,E=n instanceof Date;if(f!=E)return!1;if(f&&E)return t.getTime()==n.getTime();var p=t instanceof RegExp,d=n instanceof RegExp;if(p!=d)return!1;if(p&&d)return t.toString()==n.toString();var m=a(t);if((c=m.length)!==a(n).length)return!1;for(u=c;0!=u--;)if(!o.call(n,m[u]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(u=c;0!=u--;)if(!("_owner"===(l=m[u])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},kpl1:function(e,t,n){},obyI:function(e,t){e.exports={siteTitle:"ACU at NYU",manifestName:"SolidState",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/gatsby-starter-solidstate/",heading:"Asian Cultural Union at NYU",subHeading:"NYU's Largest Asian Umbrella Organization",socialLinks:[{icon:"fa-github",name:"GitHub",url:"https://github.com/acu-nyu"},{icon:"fa-instagram",name:"Instagram",url:"https://instagram.com/nyu_acu"},{icon:"fa-facebook",name:"Facebook",url:"https://facebook.com/nyu.acu"},{icon:"fa-envelope-o",name:"Email",url:"mailto:nyuacu0@gmail.com"}],phone:"000-00000",address:"New York, NY"}},v1p5:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n("q1tI")),i=c(n("6qGY")),u=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=m(e,u.TAG_NAMES.TITLE),n=m(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=m(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return m(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[u.TAG_NAMES.BASE]})).map((function(e){return e[u.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},d=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===u.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),c=0;c<o.length;c++){var l=o[c],s=(0,i.default)({},a[l],r[l]);a[l]=s}return e}),[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},A=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){A(e)}),0)}),h=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||A:e.requestAnimationFrame||A,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||h:e.cancelAnimationFrame||h,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,T=e.styleTags,f=e.title,E=e.titleAttributes;R(u.TAG_NAMES.BODY,r),R(u.TAG_NAMES.HTML,a),P(f,E);var p={baseTag:M(u.TAG_NAMES.BASE,n),linkTags:M(u.TAG_NAMES.LINK,o),metaTags:M(u.TAG_NAMES.META,i),noscriptTags:M(u.TAG_NAMES.NOSCRIPT,c),scriptTags:M(u.TAG_NAMES.SCRIPT,s),styleTags:M(u.TAG_NAMES.STYLE,T)},d={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),l(e,d,m)},g=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){void 0!==e&&document.title!==e&&(document.title=g(e)),R(u.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var T=o.indexOf(l);-1!==T&&o.splice(T,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,i.join(","))}},M=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,a=N(n,r),[o.default.createElement(u.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=O(n),o=g(t);return a?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+a+">"+s(o,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return N(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){_&&y(_),e.defer?_=S((function(){v(e,(function(){_=null}))})):(v(e),_=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,T=e.title,f=void 0===T?"":T,E=e.titleAttributes;return{base:C(u.TAG_NAMES.BASE,t,r),bodyAttributes:C(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(u.ATTRIBUTE_NAMES.HTML,a,r),link:C(u.TAG_NAMES.LINK,o,r),meta:C(u.TAG_NAMES.META,i,r),noscript:C(u.TAG_NAMES.NOSCRIPT,c,r),script:C(u.TAG_NAMES.SCRIPT,l,r),style:C(u.TAG_NAMES.STYLE,s,r),title:C(u.TAG_NAMES.TITLE,{title:f,titleAttributes:E},r)}},t.reducePropsToState=function(e){return{baseTag:p([u.TAG_PROPERTIES.HREF],e),bodyAttributes:E(u.ATTRIBUTE_NAMES.BODY,e),defer:m(e,u.HELMET_PROPS.DEFER),encode:m(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(u.ATTRIBUTE_NAMES.HTML,e),linkTags:d(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:d(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:d(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:d(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:d(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:E(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=S,t.warn=b}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=118338efaf46b1d32ce287cb68a0fef96dc38dfd-823a934640109aba79d6.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{128:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return f});n(28);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=n(141),l=n.n(c),u=n(134),s=n(138),p=n(137),m=n(133),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,n=t.excerpt,a=this.props.pageContext,r=a.previous,i=a.next;return o.a.createElement(p.a,{location:this.props.location,title:e},o.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:t.frontmatter.title+" | "+e}),o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(m.b)(-.2),{display:"block",marginBottom:Object(m.a)(1),marginTop:Object(m.a)(-1)})},t.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement("hr",{style:{marginBottom:Object(m.a)(1)}}),o.a.createElement(s.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(u.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,i&&o.a.createElement(u.Link,{to:i.fields.slug,rel:"next"},i.frontmatter.title," →"))))},e}(o.a.Component);e.default=d;var f="3804820323"},133:function(t,e,n){"use strict";n.d(e,"a",function(){return l}),n.d(e,"b",function(){return u});var a=n(139),r=n.n(a),i=n(140),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var l=c.rhythm,u=c.scale},134:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return m}),n.d(e,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(132),l=n.n(c);n.d(e,"Link",function(){return l.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var u=n(135),s=n.n(u);n.d(e,"PageRenderer",function(){return s.a});var p=n(29);n.d(e,"parsePath",function(){return p.a});var m=r.a.createContext({}),d=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(t,e,n){var a;t.exports=(a=n(136))&&a.default||a},136:function(t,e,n){"use strict";n.r(e);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(46),l=n(2),u=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},137:function(t,e,n){"use strict";n(28);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=n(134),l=n(133),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(-1)}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},t,r)},e}(o.a.Component);e.a=u},138:function(t,e,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=(n(144),n(145),n(133)),l=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},o.a.createElement("img",{src:"https://avatars2.githubusercontent.com/u/1510706?s=88&v=4",alt:"Luan Vu",style:{marginRight:Object(c.a)(.5),marginBottom:0,width:Object(c.a)(2),height:Object(c.a)(2)}}),o.a.createElement("p",null,"Written by ",o.a.createElement("strong",null,"Luan Vu")))},e}(o.a.Component);e.a=l}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7ef342d0dd7a72a26784.js.map
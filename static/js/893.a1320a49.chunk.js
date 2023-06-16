"use strict";(self.webpackChunkteh_test=self.webpackChunkteh_test||[]).push([[893],{155:function(n,t,e){e.r(t),e.d(t,{default:function(){return K}});var r,i,o,a,s,p,l,c,x,d,u,f,g=e(165),h=e(433),b=e(861),w=e(439),m=e(834),Z=e(683),v=e(168),j=e(706),k=e.p+"static/media/back_component.19c0c08f7f670d406573.png",y=j.Z.div(r||(r=(0,v.Z)(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    width: 380px;\n    height: 226px;\n    padding-top:28px;\n    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);\n    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n    border-top-left-radius:20px;\n    border-top-right-radius: 20px;\n"]))),S=j.Z.div(i||(i=(0,v.Z)(["\nwidth: 308px;\nheight: 168px;\nbackground-image: url(",");\nbackground-repeat: no-repeat;\nbackground-size: contain;\n  \n"])),k),C=j.Z.div(o||(o=(0,v.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  z-index: 5;\n  width: 76px;\n  height: 22px;\n \n  & svg{\n    width: 100%;\n    height: 100%;\n    fill:white;\n\n  }\n"]))),F=e(687),E=e(184),L=function(){return(0,E.jsx)(C,{children:(0,E.jsx)(F.r,{})})},A=function(){return(0,E.jsxs)(y,{children:[(0,E.jsx)(L,{}),(0,E.jsx)(S,{})]})},O=j.Z.div(a||(a=(0,v.Z)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  flex-wrap: wrap;\n  flex-direction: column;\n  width: 380px;\n  height: 226px;\n  padding-top: 62px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"]))),B=j.Z.p(s||(s=(0,v.Z)(['\n  font-family: "Montserrat", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1.2;\n  text-transform: uppercase;\n  color: #ebd8ff;\n  &:first-of-type {\n    margin-bottom: 16px;\n  }\n  &:last-of-type {\n    margin-bottom: 26px;\n  }\n']))),I=j.Z.button(p||(p=(0,v.Z)(["\n  width: 196px;\n  height: 50px;\n  padding: 14px 28px;\n  background:",'  ;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.22;\n  color: #373737;\n  text-transform: uppercase;\n'])),(function(n){return n.active?"#5CD3A8":"#ebd8ff"})),T=e(791),z=function(n){var t=n.tweets,e=n.followers,r=n.id,i=(0,T.useState)("follow"),o=(0,w.Z)(i,2),a=o[0],s=o[1],p=(0,T.useState)(e||0),l=(0,w.Z)(p,2),c=l[0],x=l[1],d=(0,T.useState)(!1),u=(0,w.Z)(d,2),f=u[0],g=u[1];(0,T.useEffect)((function(){var n=JSON.parse(localStorage.getItem(r));n&&(s(n.btnTitle),g(n.active),x(n.followersCounter))}),[r]);return(0,E.jsxs)(O,{children:[(0,E.jsxs)(B,{children:[t," TWEETS"]}),(0,E.jsxs)(B,{children:[c," FOLLOWERS"]}),(0,E.jsx)(I,{onClick:function(){return function(n){switch(a){case"follow":s("following"),g(!0),x((function(n){return n+1}));var t={btnTitle:a,active:f,followersCounter:c},e=JSON.stringify(t);localStorage.setItem(n,e);break;case"following":s("follow"),g(!1),x((function(n){return n-1}));var r={btnTitle:a,active:f,followersCounter:c},i=JSON.stringify(r);localStorage.setItem(n,i);break;default:return"follow"}}(r)},active:f,id:r,children:a})]})},D=j.Z.li(l||(l=(0,v.Z)(["\n  position: relative;\n  display: block;\n  width: 380px;\n  height: 460px;\n  margin: 20px 10px;\n\n  @media (min-width: 768px) {\n    margin: 10px 4px;\n  }\n"]))),J=j.Z.div(c||(c=(0,v.Z)(["\n  width: 380px;\n  height: 8px;\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),M=j.Z.div(x||(x=(0,v.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  overflow: hidden;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  height: 80px;\n  background-color: #471ca9;\n  border: 8.5px solid #d6bdf0;\n  border-radius: 86px;\n  &::before{\n    content: '';\n    position: absolute;\n    top:-8px;\n    left: -8px;\n    width: 80px;\n    height: 80px;\n    border-radius: 80px;\n    \n    background-color: transparent;\n    border:1px solid #aa85d3;\n    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;\n  }\n  \n"]))),N=function(n){var t=n.tweets,e=n.followers,r=n.avatar,i=n.id,o=function(){var n=0;return t?(n=t+100500).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):n};return console.log(o()),(0,E.jsxs)(D,{children:[(0,E.jsx)(A,{}),(0,E.jsx)(J,{}),(0,E.jsx)(M,{children:(0,E.jsx)("img",{src:r,alt:"user-avatar"})}),(0,E.jsx)(z,{tweets:o(),followers:e,id:i})]})},_=j.Z.ul(d||(d=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  \n  @media (min-width: 768px){\n    flex-wrap: wrap;\n    flex-direction: row;\n    margin: -8px;\n  }\n"]))),P=function(n){var t=n.users;return(0,E.jsx)(_,{children:t.map((function(n){return(0,E.jsx)(N,(0,Z.Z)({},n),n.id)}))})},W=e(243),R=e(521),q=j.Z.div(u||(u=(0,v.Z)(["\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top:20px ;\n\n"]))),G=j.Z.button(f||(f=(0,v.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 200px;\n  height: 56px;\n  border: 1px solid black;\n  padding: 3px;\nborder-radius: 10px;\n  background-color:",";\n  color:",";\n  \n"])),(function(n){return n.isLoading?"#471CA9":"#EBD8FF"}),(function(n){return n.isLoading?"#EBD8FF":"#471CA9"})),H=function(n){var t=n.onClick,e=n.isLoading,r=n.limitItemsOnPage,i=n.users;return(0,E.jsx)(q,{children:!(i.length-r===0)&&(0,E.jsx)(G,{onClick:function(){return t()},isLoading:e,children:"Load More"})})},K=function(){var n=(0,T.useState)([]),t=(0,w.Z)(n,2),e=t[0],r=t[1],i=(0,T.useState)(!1),o=(0,w.Z)(i,2),a=o[0],s=o[1],p=(0,T.useState)(""),l=(0,w.Z)(p,2),c=l[0],x=l[1];(0,T.useEffect)((function(){var n=function(){var n=(0,b.Z)((0,g.Z)().mark((function n(){var t;return(0,g.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),n.next=4,W.Z.get("https://6409875d6ecd4f9e18b35e8e.mockapi.io/users");case 4:t=n.sent,r((0,h.Z)(t.data)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),x(n.t0.mesage);case 11:return n.prev=11,s(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);var d=(0,T.useState)(1),u=(0,w.Z)(d,1)[0],f=(0,T.useState)(3),Z=(0,w.Z)(f,2),v=Z[0],j=Z[1],k=u*v,y=k-v,S=e.slice(y,k);return console.log(v),(0,E.jsxs)(m.Z,{children:[a&&(0,E.jsx)(R.Z,{}),c&&(0,E.jsx)("p",{children:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0441\u043f\u0440\u043e\u0431\u0443\u0439 \u0449\u0435 \u0440\u0430\u0437..."}),e&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(P,{users:S}),(0,E.jsx)(H,{onClick:function(){j((function(n){return n+3}))},isLoading:a,limitItemsOnPage:v,users:e})]})]})}}}]);
//# sourceMappingURL=893.a1320a49.chunk.js.map
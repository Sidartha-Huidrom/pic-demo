(this["webpackJsonpSid-Pic-Demo"]=this["webpackJsonpSid-Pic-Demo"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),m=a(1),s=(a(3),function(e){var t=e.image,a=t.tags.split(",");return r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden shadow-lg "},r.a.createElement("img",{src:t.webformatURL,alt:"",className:"w-full"}),r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"font-bold text-purple-500 text-xl mb-2"},"Photo by ",t.user),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Views : ")," ",t.views),r.a.createElement("li",null,r.a.createElement("strong",null,"Downloads : ")," ",t.downloads),r.a.createElement("li",null,r.a.createElement("strong",null,"Likes : ")," ",t.likes))),r.a.createElement("div",{className:"px-6 py-4"},a.map((function(e,t){return r.a.createElement("span",{key:"".concat(e).concat(t),className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},"#",e)}))))}),o=function(e){var t=e.searchText,a=Object(n.useState)(""),l=Object(m.a)(a,2),c=l[0],s=l[1];return r.a.createElement("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c)},className:"w-full max-w-sm"},r.a.createElement("div",{className:"flex items-center border-b border-b-2 border-teal-500 py-2"},r.a.createElement("input",{onChange:function(e){return s(e.target.value)},className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Search Image Term..."}),r.a.createElement("button",{className:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"submit"},"Search"))))},i=function(){return r.a.createElement("nav",{className:"flex items-center justify-between flex-wrap bg-teal-500 p-6"},r.a.createElement("div",{className:"flex items-center flex-shrink-0 text-white mr-6"},r.a.createElement("svg",{className:"fill-current h-8 w-8 mr-2",width:"54",height:"54",viewBox:"0 0 54 54",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"})),r.a.createElement("span",{className:"font-semibold text-xl tracking-tight"},"Pictures")))};var u=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),u=Object(m.a)(c,2),d=u[0],p=u[1],f=Object(n.useState)(""),x=Object(m.a)(f,2),b=x[0],g=x[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=".concat("17979588-4226907221538315e46ff5240","&q=").concat(b,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){l(e.hits),p(!1)})).catch((function(e){console.log(e),p(!1)}))}),[b]),r.a.createElement("div",{className:"container mx-auto"},r.a.createElement(i,null),r.a.createElement(o,{searchText:function(e){return g(e)}}),!d&&0===a.length&&r.a.createElement("h1",{className:"text-6xl text-center mx-auto mt-32"},"No Images Found"),d?r.a.createElement("h1",{className:"text-6xl text-center mx-auto mt-32"},"Loading"):r.a.createElement("div",{className:"grid md:grid-cols-3 sm:grid-cols-1 gap-4"},a.map((function(e){return r.a.createElement(s,{key:e.id,image:e})}))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root"))},3:function(e,t,a){},5:function(e,t,a){e.exports=a(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.3d2b2715.chunk.js.map
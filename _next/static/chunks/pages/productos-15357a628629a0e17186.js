_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"98W4":function(n,t,e){"use strict";var r=e("h4VS"),o=e("q1tI"),i=e.n(o),a=e("5D9J"),c=e("YFqc"),u=e.n(c),d=e("xWvD"),f=i.a.createElement;function s(){var n=Object(r.a)(["\n    width: 100%;\n    margin-bottom: .2rem;\n"]);return s=function(){return n},n}function p(){var n=Object(r.a)(["\n    padding: .5rem;\n    font-size: 1.2rem;\n\n    span {\n        font-weight: 700; \n        font-size: 1.2rem;\n    }\n"]);return p=function(){return n},n}function l(){var n=Object(r.a)(["\n    overflow: hidden;\n    height: 100px;\n    padding: .5rem;\n"]);return l=function(){return n},n}function b(){var n=Object(r.a)(["\n    padding: .5rem;\n    font-size: 1.2rem;\n    text-transform: capitalize;\n\n    span {\n        font-weight: 700; \n        font-size: 1.2rem;\n    }\n"]);return b=function(){return n},n}function m(){var n=Object(r.a)(["\n    font-size: 1.5rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    padding: .5rem;\n    min-height: 86px;\n"]);return m=function(){return n},n}function g(){var n=Object(r.a)(["\n    width: 100%;\n    height: 400px;\n\n    @media (min-width: 768px) {\n        height: 450px;\n    }\n"]);return g=function(){return n},n}function h(){var n=Object(r.a)(["\n    border: 1px solid #e1e1e1;\n"]);return h=function(){return n},n}var O=a.a.li(h()),w=a.a.img(g()),v=a.a.h2(m()),j=a.a.p(b()),x=a.a.p(l()),P=a.a.p(p()),y=a.a.button(s());t.a=function(n){var t=n.producto,e=n.productos,r=Object(o.useState)(e)[0],a=Object(o.useContext)(d.a),c=a.firebase,s=a.usuario,p={};return f(i.a.Fragment,null,f(O,null,f(w,{src:t.imagen,alt:"imagen-producto"}),f(v,null,t.nombre),f(j,null,f("span",null,"Categoria:"),"  ",t.categoria),f(x,null,t.descripcion),f(P,null," ",f("span",null,"Precio:")," $",t.precio),f(u.a,{href:"/productos/[id]",as:"/productos/".concat(t.id)},f(y,{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Ver Producto")),s?f(y,{value:t.id,name:"ids",onClick:function(n){return function(n){var t=r.filter((function(t){return t.id===n.target.value}));(p=t[0]).usuario=s.uid,p.cantidad=0,p.cantidad+=1,1===p.cantidad&&c.db.collection("carrito").add(p),console.log(p)}(n)},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Agregar al Carrito"):null))}},HGzH:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productos",function(){return e("KPrw")}])},KPrw:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return m}));var r=e("rePB"),o=e("h4VS"),i=e("q1tI"),a=e.n(i),c=e("5D9J"),u=e("80PL"),d=e("xWvD"),f=e("98W4"),s=a.a.createElement;function p(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function l(){var n=Object(o.a)(["\n\n    margin: 2rem .2rem 0 .2rem;\n\n    @media (min-width: 768px) {\n        margin: 2rem 8rem 0 8rem;\n    }\n    \n    \n    \n"]);return l=function(){return n},n}var b=c.a.ul(l());function m(){var n=Object(i.useState)([]),t=n[0],e=n[1],o=Object(i.useContext)(d.a).firebase;function a(n){var t=n.docs.map((function(n){return function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?p(Object(e),!0).forEach((function(t){Object(r.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}({id:n.id},n.data())}));e(t)}return Object(i.useEffect)((function(){o.db.collection("productos").orderBy("creado","desc").onSnapshot(a)}),[]),s(u.a,null,s(b,{className:"grid md:grid-cols-3 gap-4 "},t.map((function(n){return s(f.a,{key:n.id,producto:n,productos:t})}))))}}},[["HGzH",1,2,3,4,0,5,6]]]);
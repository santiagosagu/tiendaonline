_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"2qVx":function(n,e,t){"use strict";t.r(e);var r=t("o0o1"),o=t.n(r),a=t("HaE+"),c=t("rePB"),i=t("h4VS"),u=t("q1tI"),l=t.n(u),s=t("xWvD"),d=t("nOHt"),f=t("80PL"),p=t("5D9J"),b=l.a.createElement;function m(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function g(){var n=Object(i.a)(["\n    margin: 0 2rem;\n\n    h3 {\n        font-size: 1.5rem;\n    }\n"]);return g=function(){return n},n}function O(){var n=Object(i.a)(["\n    background-color: #e1e1e1;\n    padding: 2rem;\n    border-radius: 1rem;\n    margin: 1rem auto;\n\n    h1 {\n        font-size: 2rem;\n        text-transform: capitalize;\n    }    \n\n    h2 {\n        font-size: 1.5rem;\n        text-transform: capitalize;\n    }\n\n    p {\n        margin-top: 4rem;\n        font-size: 2.5rem;\n        font-weight: bold;\n    }\n"]);return O=function(){return n},n}function v(){var n=Object(i.a)(["\n    width: 100%;\n    margin-bottom: .2rem;\n"]);return v=function(){return n},n}function j(){var n=Object(i.a)(["\n    \n\n    @media (min-width: 768px) {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        margin: 1rem;\n        padding: 1rem;\n        grid-column-gap: 50px;\n    }\n\n    img {\n        width: 100%;\n    }\n"]);return j=function(){return n},n}var w=p.a.div(j()),h=p.a.button(v()),y=p.a.div(O()),x=p.a.div(g());e.default=function(){var n=Object(u.useState)([]),e=n[0],t=n[1],r=Object(u.useState)(!0),i=r[0],p=r[1],g=Object(u.useState)([]),O=g[0],v=g[1],j=Object(d.useRouter)().query.id,P=Object(u.useContext)(s.a),E=P.firebase,_=P.usuario;function D(n){var e=n.docs.map((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){Object(c.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({id:n.id},n.data())}));v(e)}Object(u.useEffect)((function(){E.db.collection("productos").orderBy("creado","desc").onSnapshot(D)}),[]),Object(u.useEffect)((function(){j&&i&&function(){var n=Object(a.a)(o.a.mark((function n(){var e,r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.db.collection("productos").doc(j);case 2:return e=n.sent,n.next=5,e.get();case 5:(r=n.sent).exists?(t(r.data()),p(!1)):(guardarError(!0),p(!1));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[j,e]),console.log(e);var S={};return b(l.a.Fragment,null,b(f.a,null,b(w,null,b("div",null,b("img",{src:e.imagen,alt:"imagen producto"})),b("div",null,b(y,null,b("h1",null,e.nombre),b("h2",null,"categoria: ",e.categoria),b("p",null,b("span",null,"Precio: $",e.precio))),_?b(h,{value:j,name:"ids",onClick:function(n){return function(n){var e=O.filter((function(e){return e.id===n.target.value}));(S=e[0]).usuario=_.uid,S.cantidad=0,S.cantidad+=1,console.log(e),1===S.cantidad&&E.db.collection("carrito").add(S),console.log(S)}(n)},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"agregar al carrito"):null)),b(x,null,b("h3",null,"Descripcion:"),b("p",null,e.descripcion))))}},"VWc+":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productos/[id]",function(){return t("2qVx")}])}},[["VWc+",1,2,3,4,0,5,6]]]);
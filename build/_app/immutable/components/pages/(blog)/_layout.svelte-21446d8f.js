import{S as P,i as Q,s as W,D as X,k as b,a as H,q,l as E,m as C,c as j,r as z,h as m,n as p,b as U,F as c,H as Y,I as Z,J as $,f as ee,t as te,K,u as N}from"../../../chunks/index-cf1cf23b.js";function V(r,t,s){const a=r.slice();return a[3]=t[s],a}function w(r,t,s){const a=r.slice();return a[6]=t[s][0],a[7]=t[s][1],a}function x(r){let t,s,a=r[6]+"",i,f,h;return{c(){t=b("li"),s=b("a"),i=q(a),h=H(),this.h()},l(n){t=E(n,"LI",{});var o=C(t);s=E(o,"A",{href:!0,class:!0});var v=C(s);i=z(v,a),v.forEach(m),h=j(o),o.forEach(m),this.h()},h(){p(s,"href",f="/"+r[6]),p(s,"class","text-neutral-300 hover:text-blue-100 font-semibold transition uppercase")},m(n,o){U(n,t,o),c(t,s),c(s,i),c(t,h)},p(n,o){o&1&&a!==(a=n[6]+"")&&N(i,a),o&1&&f!==(f="/"+n[6])&&p(s,"href",f)},d(n){n&&m(t)}}}function B(r){let t,s,a=r[3].Title+"",i,f,h;return{c(){t=b("li"),s=b("a"),i=q(a),h=H(),this.h()},l(n){t=E(n,"LI",{});var o=C(t);s=E(o,"A",{href:!0,class:!0});var v=C(s);i=z(v,a),v.forEach(m),h=j(o),o.forEach(m),this.h()},h(){p(s,"href",f="/"+(r[3].Categories[0]??"uncategorized")+"/"+r[3].Slug),p(s,"class","text-neutral-300 hover:text-blue-100 font-semibold text-sm transition uppercase")},m(n,o){U(n,t,o),c(t,s),c(s,i),c(t,h)},p(n,o){o&1&&a!==(a=n[3].Title+"")&&N(i,a),o&1&&f!==(f="/"+(n[3].Categories[0]??"uncategorized")+"/"+n[3].Slug)&&p(s,"href",f)},d(n){n&&m(t)}}}function le(r){let t,s,a,i,f,h,n,o,v,O,R,A,L;const T=r[2].default,d=X(T,r,r[1],null);let S=Object.entries(r[0].articles.reduce(G,{})).sort(M).slice(0,6),u=[];for(let l=0;l<S.length;l+=1)u[l]=x(w(r,S,l));let D=r[0].articles.slice(0,5),_=[];for(let l=0;l<D.length;l+=1)_[l]=B(V(r,D,l));return{c(){t=b("div"),d&&d.c(),s=H(),a=b("aside"),i=b("h2"),f=q("Categories"),h=H(),n=b("ul");for(let l=0;l<u.length;l+=1)u[l].c();o=H(),v=b("h2"),O=q("Recent Articles"),R=H(),A=b("ul");for(let l=0;l<_.length;l+=1)_[l].c();this.h()},l(l){t=E(l,"DIV",{class:!0});var g=C(t);d&&d.l(g),s=j(g),a=E(g,"ASIDE",{});var e=C(a);i=E(e,"H2",{class:!0});var k=C(i);f=z(k,"Categories"),k.forEach(m),h=j(e),n=E(e,"UL",{class:!0});var y=C(n);for(let I=0;I<u.length;I+=1)u[I].l(y);y.forEach(m),o=j(e),v=E(e,"H2",{class:!0});var F=C(v);O=z(F,"Recent Articles"),F.forEach(m),R=j(e),A=E(e,"UL",{class:!0});var J=C(A);for(let I=0;I<_.length;I+=1)_[I].l(J);J.forEach(m),e.forEach(m),g.forEach(m),this.h()},h(){p(i,"class","text-2xl font-semibold mb-4"),p(n,"class","space-y-2 mb-6"),p(v,"class","text-2xl font-semibold mb-4"),p(A,"class","space-y-2"),p(t,"class","grid md:grid-cols-[1fr_12rem] lg:grid-cols-[1fr_16rem] gap-4")},m(l,g){U(l,t,g),d&&d.m(t,null),c(t,s),c(t,a),c(a,i),c(i,f),c(a,h),c(a,n);for(let e=0;e<u.length;e+=1)u[e].m(n,null);c(a,o),c(a,v),c(v,O),c(a,R),c(a,A);for(let e=0;e<_.length;e+=1)_[e].m(A,null);L=!0},p(l,[g]){if(d&&d.p&&(!L||g&2)&&Y(d,T,l,l[1],L?$(T,l[1],g,null):Z(l[1]),null),g&1){S=Object.entries(l[0].articles.reduce(G,{})).sort(M).slice(0,6);let e;for(e=0;e<S.length;e+=1){const k=w(l,S,e);u[e]?u[e].p(k,g):(u[e]=x(k),u[e].c(),u[e].m(n,null))}for(;e<u.length;e+=1)u[e].d(1);u.length=S.length}if(g&1){D=l[0].articles.slice(0,5);let e;for(e=0;e<D.length;e+=1){const k=V(l,D,e);_[e]?_[e].p(k,g):(_[e]=B(k),_[e].c(),_[e].m(A,null))}for(;e<_.length;e+=1)_[e].d(1);_.length=D.length}},i(l){L||(ee(d,l),L=!0)},o(l){te(d,l),L=!1},d(l){l&&m(t),d&&d.d(l),K(u,l),K(_,l)}}}const G=(r,t)=>{for(const s of t.Categories)r[s]?r[s]+=1:r[s]=1;return r},M=(r,t)=>t[1]-r[1];function se(r,t,s){let{$$slots:a={},$$scope:i}=t,{data:f}=t;return r.$$set=h=>{"data"in h&&s(0,f=h.data),"$$scope"in h&&s(1,i=h.$$scope)},[f,i,a]}class re extends P{constructor(t){super(),Q(this,t,se,le,W,{data:0})}}export{re as default};

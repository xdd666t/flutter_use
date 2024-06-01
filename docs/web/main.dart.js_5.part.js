((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_5",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,D,G,A={
aYw(d){var x,w,v,u=(d.gm(d)>>>16&255)/255,t=(d.gm(d)>>>8&255)/255,s=(d.gm(d)&255)/255,r=Math.max(u,Math.max(t,s)),q=Math.min(u,Math.min(t,s)),p=r-q,o=d.gm(d),n=B.bx("hue")
if(r===0)n.b=0
else if(r===u)n.b=60*C.d.cQ((t-s)/p,6)
else if(r===t)n.b=60*((s-u)/p+2)
else if(r===s)n.b=60*((u-t)/p+4)
n.b=isNaN(n.b2())?0:n.b2()
x=n.b2()
w=(r+q)/2
v=w===1?0:B.P(p/(1-Math.abs(2*w-1)),0,1)
return new A.D1((o>>>24&255)/255,x,v,w)},
D1:function D1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nx:function nx(d,e){this.ca$=d
this.au$=e
this.a=null},
a1j:function a1j(){},
SC:function SC(d,e,f,g){var _=this
_.ce=null
_.ew=d
_.eg=e
_.B$=f
_.fx=null
_.a=!1
_.b=null
_.c=0
_.e=_.d=null
_.r=_.f=!1
_.w=null
_.x=!1
_.y=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=g
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null},
Sx:function Sx(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cT=_.dH=$
_.fo=!1
_.D=d
_.R=e
_.af=f
_.aN=g
_.J=null
_.K=h
_.X=i
_.a4=j
_.d1$=k
_.a6$=l
_.cB$=m
_.fx=n
_.go=_.fy=!1
_.id=null
_.k1=0
_.a=!1
_.b=null
_.c=0
_.e=_.d=null
_.r=_.f=!1
_.w=null
_.x=!1
_.y=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=o
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null},
aMU(d,e,f,g,h,i,j,k,l){return new A.rB(g,h,!1,d,k,l,j,i,f,null)},
rB:function rB(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.w=g
_.y=h
_.z=i
_.Q=j
_.as=k
_.ax=l
_.a=m},
Im:function Im(d,e){var _=this
_.f=_.e=_.d=!1
_.r=d
_.a=null
_.b=e
_.c=null},
ayF:function ayF(d){this.a=d},
ayD:function ayD(d){this.a=d},
ayy:function ayy(d){this.a=d},
ayz:function ayz(d){this.a=d},
ayx:function ayx(d,e){this.a=d
this.b=e},
ayC:function ayC(d){this.a=d},
ayA:function ayA(d){this.a=d},
ayB:function ayB(d,e){this.a=d
this.b=e},
ayE:function ayE(d,e){this.a=d
this.b=e},
TE:function TE(d,e,f){this.e=d
this.c=e
this.a=f},
aIS(d,e,f,g){return new A.arM(!0,!0,!0,d,B.b1([null,0],y.X,y.q))},
arM:function arM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.f=g
_.r=h},
Mg:function Mg(d){this.a=d},
T0:function T0(){},
aqo:function aqo(d,e,f){this.a=d
this.b=e
this.c=f},
aqp:function aqp(d){this.a=d},
Bi:function Bi(){},
Ti:function Ti(d,e,f,g,h){var _=this
_.e=d
_.r=e
_.w=f
_.c=g
_.a=h},
lv:function lv(d,e){this.c=d
this.a=e},
YP:function YP(d,e){var _=this
_.eK$=d
_.a=null
_.b=e
_.c=null},
a3r:function a3r(){},
aRV(d,e){return C.c9.Ac(0,d,e)}},E,F,I
J=c[1]
B=c[0]
C=c[2]
H=c[53]
D=c[43]
G=c[80]
A=a.updateHolder(c[38],A)
E=c[82]
F=c[50]
I=c[84]
A.D1.prototype={
avl(){var x=this,w=x.d,v=(1-Math.abs(2*w-1))*x.c,u=x.b
return B.b34(x.a,u,v,v*(1-Math.abs(C.d.cQ(u/60,2)-1)),w-v/2)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.D1&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gC(d){var x=this
return B.Z(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){var x=this
return"HSLColor("+B.k(x.a)+", "+B.k(x.b)+", "+B.k(x.c)+", "+B.k(x.d)+")"}}
A.nx.prototype={}
A.a1j.prototype={
ab(d){this.tf(0)}}
A.SC.prototype={
gh8(){return this.ce},
ajz(){if(this.ce!=null)return
this.ce=this.ew},
scM(d,e){var x=this
if(x.ew.j(0,e))return
x.ew=e
x.ce=null
x.a_()},
sbF(d){var x=this
if(x.eg===d)return
x.eg=d
x.ce=null
x.a_()},
br(){this.ajz()
this.Mo()}}
A.Sx.prototype={
es(d){if(!(d.b instanceof A.nx))d.b=new A.nx(null,null)},
br(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=y.k.a(B.u.prototype.ga0.call(i))
if(i.a6$==null){switch(B.bq(i.D).a){case 1:x=new B.T(g.b,g.c)
break
case 0:x=new B.T(g.a,g.d)
break
default:x=h}i.id=x
i.af.ml(0)
i.cT=i.dH=0
i.fo=!1
i.af.mk(0,0)
return}switch(B.bq(i.D).a){case 1:x=new B.by(g.d,g.b)
break
case 0:x=new B.by(g.b,g.d)
break
default:x=h}w=x.a
v=x.b
u=v
t=w
for(x=g.a,s=g.b,r=g.c,q=g.d,p=h;!0;){o=i.af.at
o.toString
n=i.DG(t,u,o)
if(n!==0){o=i.af
m=o.at
m.toString
o.at=m+n
o.ch=!0}else{switch(B.bq(i.D).a){case 1:o=i.cT
o===$&&B.a()
o=B.P(o,r,q)
break
case 0:o=i.cT
o===$&&B.a()
o=B.P(o,x,s)
break
default:o=h}l=i.af.ml(o)
m=i.af
k=i.dH
k===$&&B.a()
j=m.mk(0,Math.max(0,k-o))
if(l&&j){p=o
break}p=o}}switch(B.bq(i.D).a){case 1:x=new B.T(B.P(u,x,s),B.P(p,r,q))
break
case 0:x=new B.T(B.P(p,x,s),B.P(u,r,q))
break
default:x=h}i.id=x},
DG(d,e,f){var x,w,v,u,t,s=this
s.cT=s.dH=0
s.fo=f<0
switch(s.K.a){case 0:x=s.aN
break
case 1:x=d*s.aN
break
default:x=null}s.J=x
w=s.a6$
v=Math.max(0,f)
u=Math.min(0,f)
t=Math.max(0,-f)
x.toString
return s.Js(s.gUC(),-x,w,e,C.h8,t,d,u,d+2*x,d+u,v)},
gWP(){return this.fo},
Zf(d,e){var x=this,w=x.dH
w===$&&B.a()
x.dH=w+e.a
if(e.x)x.fo=!0
w=x.cT
w===$&&B.a()
x.cT=w+e.e},
Kv(d,e,f){var x=d.b
x.toString
y.M.a(x).a=e},
JX(d){var x=d.b
x.toString
x=y.M.a(x).a
x.toString
return this.UM(d,x,C.h8)},
Ld(d,e){var x,w,v,u=this.a6$
for(x=B.l(this).h("an.1"),w=0;u!==d;){w+=u.fx.a
v=u.b
v.toString
u=x.a(v).au$}return w+e},
XE(d){var x,w,v=this.a6$
for(x=B.l(this).h("an.1");v!==d;){v.fx.toString
w=v.b
w.toString
v=x.a(w).au$}return 0},
d_(d,e){var x=this.JX(y.T.a(d))
e.bz(0,x.a,x.b)},
UN(d,e){var x,w,v=d.b
v.toString
v=y.M.a(v).a
v.toString
x=y.S
w=B.oa(x.a(B.u.prototype.ga0.call(d)).a,x.a(B.u.prototype.ga0.call(d)).b)
$label0$0:{if(C.R===w||C.bJ===w){v=e-v
break $label0$0}if(C.T===w){v=this.gq(0).b-e-v
break $label0$0}if(C.aT===w){v=this.gq(0).a-e-v
break $label0$0}v=null}return v},
gHw(){var x,w,v=B.b([],y.O),u=this.cB$
for(x=B.l(this).h("an.1");u!=null;){v.push(u)
w=u.b
w.toString
u=x.a(w).ca$}return v},
gUE(){var x,w,v=B.b([],y.O),u=this.a6$
for(x=B.l(this).h("an.1");u!=null;){v.push(u)
w=u.b
w.toString
u=x.a(w).au$}return v}}
A.rB.prototype={
a1(){return new A.Im(new B.bA(null,y.z),C.j)}}
A.Im.prototype={
ac(){this.aA()
$.bF.p1$.push(new A.ayF(this))
$.aq.aq$.f.a.f.F(0,this.gPi())},
l(){$.aq.aq$.f.a.f.E(0,this.gPi())
this.ar()},
Tb(d){this.yy(new A.ayD(this))},
abn(d){if(this.c==null)return
this.Tb(d)},
a5r(d){if(!this.e)this.yy(new A.ayy(this))},
a5t(d){if(this.e)this.yy(new A.ayz(this))},
a5p(d){var x,w=this
if(w.f!==d){w.yy(new A.ayx(w,d))
x=w.a.Q
if(x!=null)x.$1(w.f)}},
Qk(d,e){var x,w,v,u,t,s,r=this,q=new A.ayC(r),p=new A.ayB(r,new A.ayA(r))
if(d==null){x=r.a
x.toString
w=x}else w=d
v=q.$1(w)
u=p.$1(w)
if(e!=null)e.$0()
x=r.a
x.toString
t=q.$1(x)
x=r.a
x.toString
s=p.$1(x)
if(u!==s)r.a.y.$1(s)
if(v!==t){q=r.a.z
if(q!=null)q.$1(t)}},
yy(d){return this.Qk(null,d)},
aeO(d){return this.Qk(d,null)},
aC(d){this.aS(d)
if(this.a.c!==d.c)$.bF.p1$.push(new A.ayE(this,d))},
ga5n(){var x,w=this.c
w.toString
w=B.d8(w,C.fi)
x=w==null?null:w.ch
$label0$0:{if(C.dF===x||x==null){w=this.a.c
break $label0$0}if(C.hu===x){w=!0
break $label0$0}w=null}return w},
v(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.ga5n()
w=u.a
v=B.kp(B.mS(!1,x,w.ax,t,!0,!0,s,!0,t,u.ga5o(),t,t,t,t),r,u.r,u.ga5q(),u.ga5s(),t)
if(w.c)s=w.w.a!==0
else s=!1
if(s)v=B.oi(w.w,v)
return v}}
A.TE.prototype={
aL(d){var x=d.ak(y.I)
x.toString
x=new A.SC(this.e,x.w,null,B.ak(y.v))
x.aJ()
x.saU(null)
return x},
aO(d,e){var x
e.scM(0,this.e)
x=d.ak(y.I)
x.toString
e.sbF(x.w)}}
A.arM.prototype={
a9q(d){var x,w,v,u=null,t=this.r
if(!t.al(0,d)){x=t.i(0,u)
x.toString
for(w=this.f,v=x;v<w.length;){x=w[v].a
if(x!=null)t.n(0,x,v)
if(J.e(x,d)){t.n(0,u,v+1)
return v}++v}t.n(0,u,v)}else return t.i(0,d)
return u},
Wc(d){return this.a9q(d instanceof D.A_?d.a:d)},
Hp(d,e){var x,w,v,u,t=null
if(e<0||e>=this.f.length)return t
x=this.f[e]
w=x.a
v=w!=null?new D.A_(w):t
x=new B.js(x,t)
u=D.aJO(x,e)
x=u!=null?new D.Dc(u,x,t):x
return new B.p2(new D.vw(new D.A1(x,t),t),v)},
gqW(){return this.f.length},
Lv(d){return this.f!==d.f}}
A.Mg.prototype={
kk(d){return new A.Mg(this.kl(d))},
lQ(d){return!0}}
A.T0.prototype={
amJ(d,e,f,g){var x=this
if(x.x)return new A.Ti(f,e,x.ch,g,null)
return D.aPE(0,f,x.Q,G.ml,null,x.ch,e,g)},
v(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.Um(d),k=n.cx
if(k==null){x=B.d8(d,m)
if(x!=null){w=x.r
v=w.anM(0,0)
u=w.anQ(0,0)
w=n.c===C.aq
k=w?u:v
l=B.DW(l,x.HM(w?v:u))}}t=B.b([k!=null?new A.TE(k,l,m):l],y.p)
w=n.c
s=F.aRN(d,w,!1)
r=n.f
if(r==null)r=F.aOm(d,w)
q=r?B.EB(d):n.e
p=H.aqq(s,n.ch,q,n.at,!1,m,n.r,n.ay,m,n.as,new A.aqo(n,s,t))
o=r&&q!=null?F.aOl(p):p
if(n.ax===I.Qo)return new B.d3(new A.aqp(d),o,m,y.n)
else return o}}
A.Bi.prototype={}
A.Ti.prototype={
aL(d){var x=this.e,w=D.auO(d,x),v=B.ak(y.s)
x=new A.Sx(x,w,this.r,250,G.ml,this.w,v,0,null,null,new B.aQ(),B.ak(y.v))
x.aJ()
x.U(0,null)
return x},
aO(d,e){var x=this.e
e.sdn(x)
x=D.auO(d,x)
e.sVd(x)
e.scj(0,this.r)
e.shp(this.w)}}
A.lv.prototype={
a1(){return new A.YP(null,C.j)}}
A.YP.prototype={
gn5(){return!0},
v(d){this.ta(d)
return this.a.c}}
A.a3r.prototype={
ac(){this.aA()
this.nB()},
dY(){var x=this.eK$
if(x!=null){x.ah()
x.d7()
this.eK$=null}this.lW()}}
var z=a.updateTypes(["N(rB)","~(li)","~(i0)","~(i1)","~(N)","@(j{reviver:D?(D?,D?)?})"])
A.ayF.prototype={
$1(d){var x=$.aq.aq$.f.a.b
if(x==null)x=B.uW()
this.a.Tb(x)},
$S:4}
A.ayD.prototype={
$0(){var x=$.aq.aq$.f.a.b
switch((x==null?B.uW():x).a){case 0:x=!1
break
case 1:x=!0
break
default:x=null}this.a.d=x},
$S:0}
A.ayy.prototype={
$0(){this.a.e=!0},
$S:0}
A.ayz.prototype={
$0(){this.a.e=!1},
$S:0}
A.ayx.prototype={
$0(){this.a.f=this.b},
$S:0}
A.ayC.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+0}
A.ayA.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.d8(w,C.fi)
x=w==null?null:w.ch
$label0$0:{if(C.dF===x||x==null){w=d.c
break $label0$0}if(C.hu===x){w=!0
break $label0$0}w=null}return w},
$S:z+0}
A.ayB.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+0}
A.ayE.prototype={
$1(d){this.a.aeO(this.b)},
$S:4}
A.aqo.prototype={
$2(d,e){return this.a.amJ(d,e,this.b,this.c)},
$S:532}
A.aqp.prototype={
$1(d){var x=B.aMR(this.a)
if(d.d!=null&&x.gbI())x.i8()
return!1},
$S:533};(function installTearOffs(){var x=a._instance_1u,w=a.installStaticTearOff
var v
x(v=A.Im.prototype,"gPi","abn",1)
x(v,"ga5q","a5r",2)
x(v,"ga5s","a5t",3)
x(v,"ga5o","a5p",4)
w(A,"b59",1,function(){return{reviver:null}},["$2$reviver","$1"],["aRV",function(d){return A.aRV(d,null)}],5,0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.D1,B.D)
w(A.a1j,D.lQ)
w(A.nx,A.a1j)
w(A.SC,D.xP)
w(A.Sx,D.tY)
v(B.V,[A.rB,A.lv])
v(B.X,[A.Im,A.a3r])
v(B.c3,[A.ayF,A.ayC,A.ayA,A.ayB,A.ayE,A.aqp])
v(B.c8,[A.ayD,A.ayy,A.ayz,A.ayx])
w(A.TE,B.aV)
w(A.arM,D.Tx)
w(A.Mg,B.lO)
w(A.T0,B.B)
w(A.aqo,B.dw)
w(A.Bi,A.T0)
w(A.Ti,B.ea)
w(A.YP,A.a3r)
x(A.a1j,B.ei)
x(A.a3r,B.mq)})()
B.bT(b.typeUniverse,JSON.parse('{"nx":{"lQ":[],"ei":["cP"],"d4":[]},"SC":{"cP":[],"aM":["cP"],"u":[],"aj":[]},"Sx":{"jQ":["nx"],"C":[],"an":["cP","nx"],"EO":[],"u":[],"aj":[],"an.1":"nx","jQ.0":"nx","an.0":"cP"},"rB":{"V":[],"c":[]},"Im":{"X":["rB"]},"TE":{"aV":[],"ap":[],"c":[]},"T0":{"B":[],"c":[]},"Bi":{"B":[],"c":[]},"Ti":{"ea":[],"ap":[],"c":[]},"lv":{"V":[],"c":[]},"YP":{"X":["lv"]}}'))
var y=(function rtii(){var x=B.J
return{k:x("ax"),s:x("j3"),v:x("cI"),I:x("eu"),O:x("m<cP>"),p:x("m<c>"),z:x("bA<X<V>>"),n:x("d3<jw>"),T:x("cP"),S:x("kF"),M:x("lQ"),q:x("n"),X:x("e9?")}})();(function constants(){E.iH=new A.Mg(null)
E.cz=new B.i(0,3)
E.zA=new B.fb(8,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_5",e:"endPart",h:b})})($__dart_deferred_initializers__,"YivXtGVJGMmwb816AkYhKVmxEOU=");
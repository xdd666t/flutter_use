((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_5",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,D,G,A={
aYA(d){var x,w,v,u=(d.gm(d)>>>16&255)/255,t=(d.gm(d)>>>8&255)/255,s=(d.gm(d)&255)/255,r=Math.max(u,Math.max(t,s)),q=Math.min(u,Math.min(t,s)),p=r-q,o=d.gm(d),n=B.bx("hue")
if(r===0)n.b=0
else if(r===u)n.b=60*C.d.cP((t-s)/p,6)
else if(r===t)n.b=60*((s-u)/p+2)
else if(r===s)n.b=60*((u-t)/p+4)
n.b=isNaN(n.b2())?0:n.b2()
x=n.b2()
w=(r+q)/2
v=w===1?0:B.P(p/(1-Math.abs(2*w-1)),0,1)
return new A.D0((o>>>24&255)/255,x,v,w)},
D0:function D0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nw:function nw(d,e){this.ca$=d
this.au$=e
this.a=null},
a1i:function a1i(){},
SB:function SB(d,e,f,g){var _=this
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
Sw:function Sw(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cS=_.dH=$
_.fo=!1
_.D=d
_.R=e
_.af=f
_.aN=g
_.J=null
_.K=h
_.X=i
_.a4=j
_.d0$=k
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
aMY(d,e,f,g,h,i,j,k,l){return new A.rC(g,h,!1,d,k,l,j,i,f,null)},
rC:function rC(d,e,f,g,h,i,j,k,l,m){var _=this
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
Il:function Il(d,e){var _=this
_.f=_.e=_.d=!1
_.r=d
_.a=null
_.b=e
_.c=null},
ayE:function ayE(d){this.a=d},
ayC:function ayC(d){this.a=d},
ayx:function ayx(d){this.a=d},
ayy:function ayy(d){this.a=d},
ayw:function ayw(d,e){this.a=d
this.b=e},
ayB:function ayB(d){this.a=d},
ayz:function ayz(d){this.a=d},
ayA:function ayA(d,e){this.a=d
this.b=e},
ayD:function ayD(d,e){this.a=d
this.b=e},
TC:function TC(d,e,f){this.e=d
this.c=e
this.a=f},
aIW(d,e,f,g){return new A.arK(!0,!0,!0,d,B.b1([null,0],y.X,y.q))},
arK:function arK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.f=g
_.r=h},
Mf:function Mf(d){this.a=d},
T_:function T_(){},
aqm:function aqm(d,e,f){this.a=d
this.b=e
this.c=f},
aqn:function aqn(d){this.a=d},
Bg:function Bg(){},
Tg:function Tg(d,e,f,g,h){var _=this
_.e=d
_.r=e
_.w=f
_.c=g
_.a=h},
lv:function lv(d,e){this.c=d
this.a=e},
YO:function YO(d,e){var _=this
_.eK$=d
_.a=null
_.b=e
_.c=null},
a3q:function a3q(){},
aRZ(d,e){return C.c9.A8(0,d,e)}},E,F,I
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
A.D0.prototype={
avg(){var x=this,w=x.d,v=(1-Math.abs(2*w-1))*x.c,u=x.b
return B.b38(x.a,u,v,v*(1-Math.abs(C.d.cP(u/60,2)-1)),w-v/2)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.D0&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gC(d){var x=this
return B.Z(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){var x=this
return"HSLColor("+B.k(x.a)+", "+B.k(x.b)+", "+B.k(x.c)+", "+B.k(x.d)+")"}}
A.nw.prototype={}
A.a1i.prototype={
ab(d){this.tc(0)}}
A.SB.prototype={
gh8(){return this.ce},
ajv(){if(this.ce!=null)return
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
br(){this.ajv()
this.Ml()}}
A.Sw.prototype={
es(d){if(!(d.b instanceof A.nw))d.b=new A.nw(null,null)},
br(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=y.k.a(B.u.prototype.ga0.call(i))
if(i.a6$==null){switch(B.bq(i.D).a){case 1:x=new B.T(g.b,g.c)
break
case 0:x=new B.T(g.a,g.d)
break
default:x=h}i.id=x
i.af.mh(0)
i.cS=i.dH=0
i.fo=!1
i.af.mg(0,0)
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
n=i.DD(t,u,o)
if(n!==0){o=i.af
m=o.at
m.toString
o.at=m+n
o.ch=!0}else{switch(B.bq(i.D).a){case 1:o=i.cS
o===$&&B.a()
o=B.P(o,r,q)
break
case 0:o=i.cS
o===$&&B.a()
o=B.P(o,x,s)
break
default:o=h}l=i.af.mh(o)
m=i.af
k=i.dH
k===$&&B.a()
j=m.mg(0,Math.max(0,k-o))
if(l&&j){p=o
break}p=o}}switch(B.bq(i.D).a){case 1:x=new B.T(B.P(u,x,s),B.P(p,r,q))
break
case 0:x=new B.T(B.P(p,x,s),B.P(u,r,q))
break
default:x=h}i.id=x},
DD(d,e,f){var x,w,v,u,t,s=this
s.cS=s.dH=0
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
return s.Jp(s.gUy(),-x,w,e,C.h7,t,d,u,d+2*x,d+u,v)},
gWL(){return this.fo},
Zb(d,e){var x=this,w=x.dH
w===$&&B.a()
x.dH=w+e.a
if(e.x)x.fo=!0
w=x.cS
w===$&&B.a()
x.cS=w+e.e},
Ks(d,e,f){var x=d.b
x.toString
y.M.a(x).a=e},
JU(d){var x=d.b
x.toString
x=y.M.a(x).a
x.toString
return this.UI(d,x,C.h7)},
La(d,e){var x,w,v,u=this.a6$
for(x=B.l(this).h("an.1"),w=0;u!==d;){w+=u.fx.a
v=u.b
v.toString
u=x.a(v).au$}return w+e},
XA(d){var x,w,v=this.a6$
for(x=B.l(this).h("an.1");v!==d;){v.fx.toString
w=v.b
w.toString
v=x.a(w).au$}return 0},
cZ(d,e){var x=this.JU(y.T.a(d))
e.bz(0,x.a,x.b)},
UJ(d,e){var x,w,v=d.b
v.toString
v=y.M.a(v).a
v.toString
x=y.S
w=B.o9(x.a(B.u.prototype.ga0.call(d)).a,x.a(B.u.prototype.ga0.call(d)).b)
$label0$0:{if(C.Q===w||C.bJ===w){v=e-v
break $label0$0}if(C.T===w){v=this.gq(0).b-e-v
break $label0$0}if(C.aT===w){v=this.gq(0).a-e-v
break $label0$0}v=null}return v},
gHt(){var x,w,v=B.b([],y.O),u=this.cB$
for(x=B.l(this).h("an.1");u!=null;){v.push(u)
w=u.b
w.toString
u=x.a(w).ca$}return v},
gUA(){var x,w,v=B.b([],y.O),u=this.a6$
for(x=B.l(this).h("an.1");u!=null;){v.push(u)
w=u.b
w.toString
u=x.a(w).au$}return v}}
A.rC.prototype={
a1(){return new A.Il(new B.bB(null,y.z),C.j)}}
A.Il.prototype={
ac(){this.aA()
$.bF.p1$.push(new A.ayE(this))
$.am.aq$.f.a.f.F(0,this.gPf())},
l(){$.am.aq$.f.a.f.E(0,this.gPf())
this.ar()},
T7(d){this.yu(new A.ayC(this))},
abj(d){if(this.c==null)return
this.T7(d)},
a5n(d){if(!this.e)this.yu(new A.ayx(this))},
a5p(d){if(this.e)this.yu(new A.ayy(this))},
a5l(d){var x,w=this
if(w.f!==d){w.yu(new A.ayw(w,d))
x=w.a.Q
if(x!=null)x.$1(w.f)}},
Qh(d,e){var x,w,v,u,t,s,r=this,q=new A.ayB(r),p=new A.ayA(r,new A.ayz(r))
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
yu(d){return this.Qh(null,d)},
aeK(d){return this.Qh(d,null)},
aC(d){this.aS(d)
if(this.a.c!==d.c)$.bF.p1$.push(new A.ayD(this,d))},
ga5j(){var x,w=this.c
w.toString
w=B.d8(w,C.fh)
x=w==null?null:w.ch
$label0$0:{if(C.dF===x||x==null){w=this.a.c
break $label0$0}if(C.ht===x){w=!0
break $label0$0}w=null}return w},
v(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.ga5j()
w=u.a
v=B.kp(B.mR(!1,x,w.ax,t,!0,!0,s,!0,t,u.ga5k(),t,t,t,t),r,u.r,u.ga5m(),u.ga5o(),t)
if(w.c)s=w.w.a!==0
else s=!1
if(s)v=B.oh(w.w,v)
return v}}
A.TC.prototype={
aL(d){var x=d.ak(y.I)
x.toString
x=new A.SB(this.e,x.w,null,B.aj(y.v))
x.aJ()
x.saU(null)
return x},
aO(d,e){var x
e.scM(0,this.e)
x=d.ak(y.I)
x.toString
e.sbF(x.w)}}
A.arK.prototype={
a9m(d){var x,w,v,u=null,t=this.r
if(!t.al(0,d)){x=t.i(0,u)
x.toString
for(w=this.f,v=x;v<w.length;){x=w[v].a
if(x!=null)t.n(0,x,v)
if(J.e(x,d)){t.n(0,u,v+1)
return v}++v}t.n(0,u,v)}else return t.i(0,d)
return u},
W8(d){return this.a9m(d instanceof D.zY?d.a:d)},
Hm(d,e){var x,w,v,u,t=null
if(e<0||e>=this.f.length)return t
x=this.f[e]
w=x.a
v=w!=null?new D.zY(w):t
x=new B.js(x,t)
u=D.aJS(x,e)
x=u!=null?new D.Db(u,x,t):x
return new B.p2(new D.vw(new D.A_(x,t),t),v)},
gqT(){return this.f.length},
Ls(d){return this.f!==d.f}}
A.Mf.prototype={
kj(d){return new A.Mf(this.kk(d))},
lM(d){return!0}}
A.T_.prototype={
amF(d,e,f,g){var x=this
if(x.x)return new A.Tg(f,e,x.ch,g,null)
return D.aPI(0,f,x.Q,G.mm,null,x.ch,e,g)},
v(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.Ui(d),k=n.cx
if(k==null){x=B.d8(d,m)
if(x!=null){w=x.r
v=w.anI(0,0)
u=w.anM(0,0)
w=n.c===C.aq
k=w?u:v
l=B.DV(l,x.HJ(w?v:u))}}t=B.b([k!=null?new A.TC(k,l,m):l],y.p)
w=n.c
s=F.aRR(d,w,!1)
r=n.f
if(r==null)r=F.aOq(d,w)
q=r?B.EA(d):n.e
p=H.aqo(s,n.ch,q,n.at,!1,m,n.r,n.ay,m,n.as,new A.aqm(n,s,t))
o=r&&q!=null?F.aOp(p):p
if(n.ax===I.Qo)return new B.d3(new A.aqn(d),o,m,y.n)
else return o}}
A.Bg.prototype={}
A.Tg.prototype={
aL(d){var x=this.e,w=D.auN(d,x),v=B.aj(y.s)
x=new A.Sw(x,w,this.r,250,G.mm,this.w,v,0,null,null,new B.aP(),B.aj(y.v))
x.aJ()
x.U(0,null)
return x},
aO(d,e){var x=this.e
e.sdn(x)
x=D.auN(d,x)
e.sV9(x)
e.scj(0,this.r)
e.shp(this.w)}}
A.lv.prototype={
a1(){return new A.YO(null,C.j)}}
A.YO.prototype={
gn1(){return!0},
v(d){this.t7(d)
return this.a.c}}
A.a3q.prototype={
ac(){this.aA()
this.nx()},
dY(){var x=this.eK$
if(x!=null){x.ah()
x.d7()
this.eK$=null}this.lS()}}
var z=a.updateTypes(["N(rC)","~(li)","~(i0)","~(i1)","~(N)","@(j{reviver:D?(D?,D?)?})"])
A.ayE.prototype={
$1(d){var x=$.am.aq$.f.a.b
if(x==null)x=B.uW()
this.a.T7(x)},
$S:3}
A.ayC.prototype={
$0(){var x=$.am.aq$.f.a.b
switch((x==null?B.uW():x).a){case 0:x=!1
break
case 1:x=!0
break
default:x=null}this.a.d=x},
$S:0}
A.ayx.prototype={
$0(){this.a.e=!0},
$S:0}
A.ayy.prototype={
$0(){this.a.e=!1},
$S:0}
A.ayw.prototype={
$0(){this.a.f=this.b},
$S:0}
A.ayB.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+0}
A.ayz.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.d8(w,C.fh)
x=w==null?null:w.ch
$label0$0:{if(C.dF===x||x==null){w=d.c
break $label0$0}if(C.ht===x){w=!0
break $label0$0}w=null}return w},
$S:z+0}
A.ayA.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+0}
A.ayD.prototype={
$1(d){this.a.aeK(this.b)},
$S:3}
A.aqm.prototype={
$2(d,e){return this.a.amF(d,e,this.b,this.c)},
$S:532}
A.aqn.prototype={
$1(d){var x=B.aMV(this.a)
if(d.d!=null&&x.gbI())x.i8()
return!1},
$S:533};(function installTearOffs(){var x=a._instance_1u,w=a.installStaticTearOff
var v
x(v=A.Il.prototype,"gPf","abj",1)
x(v,"ga5m","a5n",2)
x(v,"ga5o","a5p",3)
x(v,"ga5k","a5l",4)
w(A,"b5d",1,function(){return{reviver:null}},["$2$reviver","$1"],["aRZ",function(d){return A.aRZ(d,null)}],5,0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.D0,B.D)
w(A.a1i,D.lQ)
w(A.nw,A.a1i)
w(A.SB,D.xO)
w(A.Sw,D.tY)
v(B.V,[A.rC,A.lv])
v(B.X,[A.Il,A.a3q])
v(B.c3,[A.ayE,A.ayB,A.ayz,A.ayA,A.ayD,A.aqn])
v(B.c8,[A.ayC,A.ayx,A.ayy,A.ayw])
w(A.TC,B.aV)
w(A.arK,D.Tv)
w(A.Mf,B.lO)
w(A.T_,B.B)
w(A.aqm,B.dw)
w(A.Bg,A.T_)
w(A.Tg,B.ea)
w(A.YO,A.a3q)
x(A.a1i,B.ei)
x(A.a3q,B.mq)})()
B.bT(b.typeUniverse,JSON.parse('{"nw":{"lQ":[],"ei":["cP"],"d4":[]},"SB":{"cP":[],"aL":["cP"],"u":[],"ai":[]},"Sw":{"jQ":["nw"],"C":[],"an":["cP","nw"],"EN":[],"u":[],"ai":[],"an.1":"nw","jQ.0":"nw","an.0":"cP"},"rC":{"V":[],"c":[]},"Il":{"X":["rC"]},"TC":{"aV":[],"aq":[],"c":[]},"T_":{"B":[],"c":[]},"Bg":{"B":[],"c":[]},"Tg":{"ea":[],"aq":[],"c":[]},"lv":{"V":[],"c":[]},"YO":{"X":["lv"]}}'))
var y=(function rtii(){var x=B.J
return{k:x("ax"),s:x("j3"),v:x("cI"),I:x("eu"),O:x("m<cP>"),p:x("m<c>"),z:x("bB<X<V>>"),n:x("d3<jw>"),T:x("cP"),S:x("kF"),M:x("lQ"),q:x("n"),X:x("e9?")}})();(function constants(){E.iJ=new A.Mf(null)
E.cz=new B.i(0,3)
E.zB=new B.fa(8,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_5",e:"endPart",h:b})})($__dart_deferred_initializers__,"3qVQIZj1l0Wtx9gRzvzZ3bq7z+E=");
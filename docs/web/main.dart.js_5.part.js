((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_5",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,H,I,D,G,A={
b1w(d){var x,w,v,u=(d.gm(d)>>>16&255)/255,t=(d.gm(d)>>>8&255)/255,s=(d.gm(d)&255)/255,r=Math.max(u,Math.max(t,s)),q=Math.min(u,Math.min(t,s)),p=r-q,o=d.gm(d),n=B.bh("hue")
if(r===0)n.b=0
else if(r===u)n.b=60*C.d.cV((t-s)/p,6)
else if(r===t)n.b=60*((s-u)/p+2)
else if(r===s)n.b=60*((u-t)/p+4)
n.b=isNaN(n.aM())?0:n.aM()
x=n.aM()
w=(r+q)/2
v=w===1?0:B.U(p/(1-Math.abs(2*w-1)),0,1)
return new A.DL((o>>>24&255)/255,x,v,w)},
DL:function DL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nO:function nO(d,e){this.ce$=d
this.ak$=e
this.a=null},
a2Z:function a2Z(){},
Ub:function Ub(d,e,f,g){var _=this
_.eq=null
_.dL=d
_.cN=e
_.fx$=f
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
U6:function U6(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.bz=_.bU=$
_.co=!1
_.D=d
_.a0=e
_.J=f
_.al=g
_.a7=null
_.aB=h
_.aH=i
_.b0=j
_.dV$=k
_.a4$=l
_.cI$=m
_.fy=_.fx=null
_.go=!1
_.k1=_.id=null
_.k2=0
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
_.ch=n
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null},
aQa(d,e,f,g,h,i,j,k,l){return new A.t8(g,h,!1,d,k,l,j,i,f,null)},
t8:function t8(d,e,f,g,h,i,j,k,l,m){var _=this
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
Jg:function Jg(d,e){var _=this
_.f=_.e=_.d=!1
_.r=d
_.a=null
_.b=e
_.c=null},
aBc:function aBc(d){this.a=d},
aBa:function aBa(d){this.a=d},
aB5:function aB5(d){this.a=d},
aB6:function aB6(d){this.a=d},
aB4:function aB4(d,e){this.a=d
this.b=e},
aB9:function aB9(d){this.a=d},
aB7:function aB7(d){this.a=d},
aB8:function aB8(d,e){this.a=d
this.b=e},
aBb:function aBb(d,e){this.a=d
this.b=e},
Vf:function Vf(d,e,f){this.e=d
this.c=e
this.a=f},
aLI(d,e,f,g){return new A.aup(!0,!0,!0,d,B.b1([null,0],y.X,y.q))},
aup:function aup(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.f=g
_.r=h},
Nj:function Nj(d){this.a=d},
UD:function UD(){},
at3:function at3(d,e,f){this.a=d
this.b=e
this.c=f},
at4:function at4(d){this.a=d},
C2:function C2(){},
UX:function UX(d,e,f,g,h){var _=this
_.e=d
_.r=e
_.w=f
_.c=g
_.a=h},
lJ:function lJ(d,e){this.c=d
this.a=e},
a_l:function a_l(d,e){var _=this
_.f2$=d
_.a=null
_.b=e
_.c=null},
a53:function a53(){},
aVN(d,e){return C.cb.Bu(0,d,e)}},E
J=c[1]
B=c[0]
C=c[2]
F=c[50]
H=c[86]
I=c[54]
D=c[44]
G=c[77]
A=a.updateHolder(c[39],A)
E=c[80]
A.DL.prototype={
ayI(){var x=this,w=x.d,v=(1-Math.abs(2*w-1))*x.c,u=x.b
return B.b7g(x.a,u,v,v*(1-Math.abs(C.d.cV(u/60,2)-1)),w-v/2)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.DL&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gB(d){var x=this
return B.a_(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){var x=this
return"HSLColor("+B.i(x.a)+", "+B.i(x.b)+", "+B.i(x.c)+", "+B.i(x.d)+")"}}
A.nO.prototype={}
A.a2Z.prototype={
aa(d){this.ue(0)}}
A.Ub.prototype={
gdE(){return this.eq},
and(){if(this.eq!=null)return
this.eq=this.dL},
sd1(d,e){var x=this
if(x.dL.j(0,e))return
x.dL=e
x.eq=null
x.a2()},
sbM(d){var x=this
if(x.cN===d)return
x.cN=d
x.eq=null
x.a2()},
bs(){this.and()
this.OK()}}
A.U6.prototype={
eF(d){if(!(d.b instanceof A.nO))d.b=new A.nO(null,null)},
bs(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=y.k.a(B.w.prototype.gY.call(l))
if(l.a4$==null){switch(B.bD(l.D).a){case 1:l.id=new B.V(k.b,k.c)
break
case 0:l.id=new B.V(k.a,k.d)
break}l.J.mV(0)
l.bz=l.bU=0
l.co=!1
l.J.mU(0,0)
return}switch(B.bD(l.D).a){case 1:x=k.d
w=k.b
break
case 0:x=k.b
w=k.d
break
default:x=null
w=null}for(v=k.a,u=k.b,t=k.c,s=k.d,r=null;!0;){q=l.J.at
q.toString
p=l.Fp(x,w,q)
if(p!==0){q=l.J
o=q.at
o.toString
q.at=o+p
q.ch=!0}else{switch(B.bD(l.D).a){case 1:q=l.bz
q===$&&B.a()
r=B.U(q,t,s)
break
case 0:q=l.bz
q===$&&B.a()
r=B.U(q,v,u)
break}n=l.J.mV(r)
q=l.J
o=l.bU
o===$&&B.a()
m=q.mU(0,Math.max(0,o-r))
if(n&&m)break}}switch(B.bD(l.D).a){case 1:l.id=new B.V(B.U(w,v,u),B.U(r,t,s))
break
case 0:l.id=new B.V(B.U(r,v,u),B.U(w,t,s))
break}},
Fp(d,e,f){var x,w,v,u,t,s=this
s.bz=s.bU=0
s.co=f<0
switch(s.aB.a){case 0:s.a7=s.al
break
case 1:s.a7=d*s.al
break}x=s.a4$
w=Math.max(0,f)
v=Math.min(0,f)
u=Math.max(0,-f)
t=s.a7
t.toString
return s.Lv(s.gX4(),-t,x,e,C.h8,u,d,v,d+2*t,d+v,w)},
gZz(){return this.co},
a1d(d,e){var x=this,w=x.bU
w===$&&B.a()
x.bU=w+e.a
if(e.x)x.co=!0
w=x.bz
w===$&&B.a()
x.bz=w+e.e},
MH(d,e,f){var x=d.b
x.toString
y.M.a(x).a=e},
M3(d){var x=d.b
x.toString
x=y.M.a(x).a
x.toString
return this.Xf(d,x,C.h8)},
Nr(d,e){var x,w,v,u=this.a4$
for(x=B.n(this).h("aq.1"),w=0;u!==d;){w+=u.fx.a
v=u.b
v.toString
u=x.a(v).ak$}return w+e},
a_x(d){var x,w,v=this.a4$
for(x=B.n(this).h("aq.1");v!==d;){v.fx.toString
w=v.b
w.toString
v=x.a(w).ak$}return 0},
dc(d,e){var x=this.M3(y.T.a(d))
e.aN(0,x.a,x.b)},
Xg(d,e){var x,w=d.b
w.toString
y.M.a(w)
x=y.S
switch(B.mD(x.a(B.w.prototype.gY.call(d)).a,x.a(B.w.prototype.gY.call(d)).b).a){case 2:case 1:w=w.a
w.toString
return e-w
case 0:x=this.gq(0)
w=w.a
w.toString
return x.b-e-w
case 3:x=this.gq(0)
w=w.a
w.toString
return x.a-e-w}},
gJE(){var x,w,v=B.b([],y.O),u=this.cI$
for(x=B.n(this).h("aq.1");u!=null;){v.push(u)
w=u.b
w.toString
u=x.a(w).ce$}return v},
gX6(){var x,w,v=B.b([],y.O),u=this.a4$
for(x=B.n(this).h("aq.1");u!=null;){v.push(u)
w=u.b
w.toString
u=x.a(w).ak$}return v}}
A.t8.prototype={
a1(){return new A.Jg(new B.bw(null,y.z),C.k)}}
A.Jg.prototype={
ac(){this.au()
$.bH.ry$.push(new A.aBc(this))
$.au.J$.f.a.f.E(0,this.gRQ())},
l(){$.au.J$.f.a.f.C(0,this.gRQ())
this.am()},
VE(d){this.zO(new A.aBa(this))},
aeW(d){if(this.c==null)return
this.VE(d)},
a8A(d){if(!this.e)this.zO(new A.aB5(this))},
a8C(d){if(this.e)this.zO(new A.aB6(this))},
a8y(d){var x,w=this
if(w.f!==d){w.zO(new A.aB4(w,d))
x=w.a.Q
if(x!=null)x.$1(w.f)}},
SN(d,e){var x,w,v,u,t,s,r=this,q=new A.aB9(r),p=new A.aB8(r,new A.aB7(r))
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
zO(d){return this.SN(null,d)},
aiq(d){return this.SN(d,null)},
av(d){this.aP(d)
if(this.a.c!==d.c)$.bH.ry$.push(new A.aBb(this,d))},
ga8w(){var x,w=this.c
w.toString
w=B.d8(w,C.fr)
x=w==null?null:w.ch
switch((x==null?C.dH:x).a){case 0:return this.a.c
case 1:return!0}},
A(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.ga8w()
w=u.a
v=B.no(B.p4(!1,x,w.ax,t,!0,!0,s,!0,t,u.ga8x(),t,t,t,t),r,u.r,u.ga8z(),u.ga8B(),t)
if(w.c)s=w.w.a!==0
else s=!1
if(s)v=B.oD(w.w,v)
return v}}
A.Vf.prototype={
aD(d){var x=d.af(y.I)
x.toString
x=new A.Ub(this.e,x.w,null,B.al(y.v))
x.aC()
x.saQ(null)
return x},
aI(d,e){var x
e.sd1(0,this.e)
x=d.af(y.I)
x.toString
e.sbM(x.w)}}
A.aup.prototype={
acV(d){var x,w,v,u=null,t=this.r
if(!t.ah(0,d)){x=t.i(0,u)
x.toString
for(w=this.f,v=x;v<w.length;){x=w[v].a
if(x!=null)t.n(0,x,v)
if(J.e(x,d)){t.n(0,u,v+1)
return v}++v}t.n(0,u,v)}else return t.i(0,d)
return u},
YW(d){return this.acV(d instanceof D.AL?d.a:d)},
Jx(d,e){var x,w,v,u,t=null
if(e<0||e>=this.f.length)return t
x=this.f[e]
w=x.a
v=w!=null?new D.AL(w):t
x=new B.jH(x,t)
u=D.aMK(x,e)
x=u!=null?new D.DX(u,x,t):x
return new B.pm(new D.w8(new D.AM(x,t),t),v)},
grI(){return this.f.length},
NL(d){return this.f!==d.f}}
A.Nj.prototype={
kD(d){return new A.Nj(this.kF(d))},
mr(d){return!0}}
A.UD.prototype={
aqr(d,e,f,g){var x=this
if(x.x)return new A.UX(f,e,x.ch,g,null)
return D.aSY(0,f,x.Q,G.mR,null,x.ch,e,g)},
A(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.WR(d),k=n.cx
if(k==null){x=B.d8(d,m)
if(x!=null){w=x.r
v=w.arw(0,0)
u=w.arA(0,0)
w=n.c===C.aC
k=w?u:v
l=B.xP(l,x.JU(w?v:u),m)}}t=B.b([k!=null?new A.Vf(k,l,m):l],y.p)
w=n.c
s=F.aVF(d,w,!1)
r=n.f
if(r==null)r=F.aRE(d,w)
q=r?B.Fq(d):n.e
p=I.at5(s,n.ch,q,n.at,!1,m,n.r,n.ay,m,n.as,new A.at3(n,s,t))
o=r&&q!=null?F.aRD(p):p
if(n.ax===H.QJ)return new B.df(new A.at4(d),o,m,y.n)
else return o}}
A.C2.prototype={}
A.UX.prototype={
aD(d){var x=this.e,w=D.axv(d,x),v=B.al(y.s)
x=new A.U6(x,w,this.r,250,G.mR,this.w,v,0,null,null,B.al(y.v))
x.aC()
x.R(0,null)
return x},
aI(d,e){var x=this.e
e.sdm(x)
x=D.axv(d,x)
e.sXQ(x)
e.scu(0,this.r)
e.shK(this.w)}}
A.lJ.prototype={
a1(){return new A.a_l(null,C.k)}}
A.a_l.prototype={
gnM(){return!0},
A(d){this.u8(d)
return this.a.c}}
A.a53.prototype={
ac(){this.au()
this.oe()},
ea(){var x=this.f2$
if(x!=null){x.ae()
x.da()
this.f2$=null}this.mw()}}
var z=a.updateTypes(["P(t8)","~(lx)","~(jC)","~(jD)","~(P)","@(k{reviver:H?(H?,H?)?})"])
A.aBc.prototype={
$1(d){var x=$.au.J$.f.a.b
if(x==null)x=B.vy()
this.a.VE(x)},
$S:4}
A.aBa.prototype={
$0(){var x=$.au.J$.f.a.b
switch((x==null?B.vy():x).a){case 0:this.a.d=!1
break
case 1:this.a.d=!0
break}},
$S:0}
A.aB5.prototype={
$0(){this.a.e=!0},
$S:0}
A.aB6.prototype={
$0(){this.a.e=!1},
$S:0}
A.aB4.prototype={
$0(){this.a.f=this.b},
$S:0}
A.aB9.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+0}
A.aB7.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.d8(w,C.fr)
x=w==null?null:w.ch
switch((x==null?C.dH:x).a){case 0:return d.c
case 1:return!0}},
$S:z+0}
A.aB8.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+0}
A.aBb.prototype={
$1(d){this.a.aiq(this.b)},
$S:4}
A.at3.prototype={
$2(d,e){return this.a.aqr(d,e,this.b,this.c)},
$S:540}
A.at4.prototype={
$1(d){var x=B.aQ7(this.a)
if(d.d!=null&&x.gbV())x.ix()
return!1},
$S:541};(function installTearOffs(){var x=a._instance_1u,w=a.installStaticTearOff
var v
x(v=A.Jg.prototype,"gRQ","aeW",1)
x(v,"ga8z","a8A",2)
x(v,"ga8B","a8C",3)
x(v,"ga8x","a8y",4)
w(A,"b9w",1,function(){return{reviver:null}},["$2$reviver","$1"],["aVN",function(d){return A.aVN(d,null)}],5,0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.DL,B.H)
w(A.a2Z,D.m6)
w(A.nO,A.a2Z)
w(A.Ub,D.yz)
w(A.U6,D.uw)
v(B.X,[A.t8,A.lJ])
v(B.a0,[A.Jg,A.a53])
v(B.c_,[A.aBc,A.aB9,A.aB7,A.aB8,A.aBb,A.at4])
v(B.ca,[A.aBa,A.aB5,A.aB6,A.aB4])
w(A.Vf,B.aU)
w(A.aup,D.V8)
w(A.Nj,B.m4)
w(A.UD,B.F)
w(A.at3,B.dx)
w(A.C2,A.UD)
w(A.UX,B.eg)
w(A.a_l,A.a53)
x(A.a2Z,B.er)
x(A.a53,B.mJ)})()
B.bO(b.typeUniverse,JSON.parse('{"nO":{"m6":[],"er":["cN"],"d2":[]},"Ub":{"cN":[],"aL":["cN"],"w":[],"ak":[]},"U6":{"k5":["nO"],"G":[],"aq":["cN","nO"],"FD":[],"w":[],"ak":[],"aq.1":"nO","k5.0":"nO","aq.0":"cN"},"t8":{"X":[],"c":[]},"Jg":{"a0":["t8"]},"Vf":{"aU":[],"as":[],"c":[]},"UD":{"F":[],"c":[]},"C2":{"F":[],"c":[]},"UX":{"eg":[],"as":[],"c":[]},"lJ":{"X":[],"c":[]},"a_l":{"a0":["lJ"]}}'))
var y=(function rtii(){var x=B.E
return{k:x("az"),s:x("jh"),v:x("cG"),I:x("eB"),O:x("m<cN>"),p:x("m<c>"),z:x("bw<a0<X>>"),n:x("df<jK>"),T:x("cN"),S:x("kT"),M:x("m6"),q:x("o"),X:x("fe?")}})();(function constants(){E.mi=new A.Nj(null)
E.nU=new B.a2(8,10,8,10)
E.cI=new B.j(0,3)
E.Ad=new B.fA(8,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_5",e:"endPart",h:b})})($__dart_deferred_initializers__,"XOqdayrZPuML2lx7ObsvDDpMNiE=");
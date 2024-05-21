((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_5",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,H,I,D,G,A={
aYD(d){var x,w,v,u=(d.gm(d)>>>16&255)/255,t=(d.gm(d)>>>8&255)/255,s=(d.gm(d)&255)/255,r=Math.max(u,Math.max(t,s)),q=Math.min(u,Math.min(t,s)),p=r-q,o=d.gm(d),n=B.bx("hue")
if(r===0)n.b=0
else if(r===u)n.b=60*C.d.cP((t-s)/p,6)
else if(r===t)n.b=60*((s-u)/p+2)
else if(r===s)n.b=60*((u-t)/p+4)
n.b=isNaN(n.b2())?0:n.b2()
x=n.b2()
w=(r+q)/2
v=w===1?0:B.O(p/(1-Math.abs(2*w-1)),0,1)
return new A.CY((o>>>24&255)/255,x,v,w)},
CY:function CY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nr:function nr(d,e){this.c7$=d
this.au$=e
this.a=null},
a1a:function a1a(){},
Su:function Su(d,e,f,g){var _=this
_.cc=null
_.ex=d
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
Sp:function Sp(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.cS=_.dH=$
_.fo=!1
_.D=d
_.R=e
_.ag=f
_.aM=g
_.J=null
_.K=h
_.X=i
_.a5=j
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
aMU(d,e,f,g,h,i,j,k,l){return new A.rD(g,h,!1,d,k,l,j,i,f,null)},
rD:function rD(d,e,f,g,h,i,j,k,l,m){var _=this
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
Ie:function Ie(d,e){var _=this
_.f=_.e=_.d=!1
_.r=d
_.a=null
_.b=e
_.c=null},
ayC:function ayC(d){this.a=d},
ayA:function ayA(d){this.a=d},
ayv:function ayv(d){this.a=d},
ayw:function ayw(d){this.a=d},
ayu:function ayu(d,e){this.a=d
this.b=e},
ayz:function ayz(d){this.a=d},
ayx:function ayx(d){this.a=d},
ayy:function ayy(d,e){this.a=d
this.b=e},
ayB:function ayB(d,e){this.a=d
this.b=e},
Tx:function Tx(d,e,f){this.e=d
this.c=e
this.a=f},
aIV(d,e,f,g){return new A.arH(!0,!0,!0,d,B.b3([null,0],y.X,y.q))},
arH:function arH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.f=g
_.r=h},
M7:function M7(d){this.a=d},
ST:function ST(){},
aqk:function aqk(d,e,f){this.a=d
this.b=e
this.c=f},
aql:function aql(d){this.a=d},
Bi:function Bi(){},
Tc:function Tc(d,e,f,g,h){var _=this
_.e=d
_.r=e
_.w=f
_.c=g
_.a=h},
lp:function lp(d,e){this.c=d
this.a=e},
YG:function YG(d,e){var _=this
_.eL$=d
_.a=null
_.b=e
_.c=null},
a3h:function a3h(){},
aRZ(d,e){return C.c9.Ad(0,d,e)}},E
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
A.CY.prototype={
av9(){var x=this,w=x.d,v=(1-Math.abs(2*w-1))*x.c,u=x.b
return B.b39(x.a,u,v,v*(1-Math.abs(C.d.cP(u/60,2)-1)),w-v/2)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.CY&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gC(d){var x=this
return B.Z(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){var x=this
return"HSLColor("+B.k(x.a)+", "+B.k(x.b)+", "+B.k(x.c)+", "+B.k(x.d)+")"}}
A.nr.prototype={}
A.a1a.prototype={
ac(d){this.tc(0)}}
A.Su.prototype={
gh9(){return this.cc},
ajq(){if(this.cc!=null)return
this.cc=this.ex},
scM(d,e){var x=this
if(x.ex.j(0,e))return
x.ex=e
x.cc=null
x.a_()},
sbF(d){var x=this
if(x.eg===d)return
x.eg=d
x.cc=null
x.a_()},
br(){this.ajq()
this.Mr()}}
A.Sp.prototype={
es(d){if(!(d.b instanceof A.nr))d.b=new A.nr(null,null)},
br(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=y.k.a(B.u.prototype.ga0.call(i))
if(i.a6$==null){switch(B.bp(i.D).a){case 1:x=new B.T(g.b,g.c)
break
case 0:x=new B.T(g.a,g.d)
break
default:x=h}i.id=x
i.ag.mj(0)
i.cS=i.dH=0
i.fo=!1
i.ag.mi(0,0)
return}switch(B.bp(i.D).a){case 1:x=new B.by(g.d,g.b)
break
case 0:x=new B.by(g.b,g.d)
break
default:x=h}w=x.a
v=x.b
u=v
t=w
for(x=g.a,s=g.b,r=g.c,q=g.d,p=h;!0;){o=i.ag.at
o.toString
n=i.DH(t,u,o)
if(n!==0){o=i.ag
m=o.at
m.toString
o.at=m+n
o.ch=!0}else{switch(B.bp(i.D).a){case 1:o=i.cS
o===$&&B.a()
o=B.O(o,r,q)
break
case 0:o=i.cS
o===$&&B.a()
o=B.O(o,x,s)
break
default:o=h}l=i.ag.mj(o)
m=i.ag
k=i.dH
k===$&&B.a()
j=m.mi(0,Math.max(0,k-o))
if(l&&j){p=o
break}p=o}}switch(B.bp(i.D).a){case 1:x=new B.T(B.O(u,x,s),B.O(p,r,q))
break
case 0:x=new B.T(B.O(p,x,s),B.O(u,r,q))
break
default:x=h}i.id=x},
DH(d,e,f){var x,w,v,u,t,s=this
s.cS=s.dH=0
s.fo=f<0
switch(s.K.a){case 0:x=s.aM
break
case 1:x=d*s.aM
break
default:x=null}s.J=x
w=s.a6$
v=Math.max(0,f)
u=Math.min(0,f)
t=Math.max(0,-f)
x.toString
return s.Jt(s.gUC(),-x,w,e,C.h7,t,d,u,d+2*x,d+u,v)},
gWP(){return this.fo},
Zd(d,e){var x=this,w=x.dH
w===$&&B.a()
x.dH=w+e.a
if(e.x)x.fo=!0
w=x.cS
w===$&&B.a()
x.cS=w+e.e},
Ky(d,e,f){var x=d.b
x.toString
y.M.a(x).a=e},
JZ(d){var x=d.b
x.toString
x=y.M.a(x).a
x.toString
return this.UM(d,x,C.h7)},
Lh(d,e){var x,w,v,u=this.a6$
for(x=B.l(this).h("an.1"),w=0;u!==d;){w+=u.fx.a
v=u.b
v.toString
u=x.a(v).au$}return w+e},
XE(d){var x,w,v=this.a6$
for(x=B.l(this).h("an.1");v!==d;){v.fx.toString
w=v.b
w.toString
v=x.a(w).au$}return 0},
cY(d,e){var x=this.JZ(y.T.a(d))
e.bz(0,x.a,x.b)},
UN(d,e){var x,w,v=d.b
v.toString
v=y.M.a(v).a
v.toString
x=y.S
w=B.o4(x.a(B.u.prototype.ga0.call(d)).a,x.a(B.u.prototype.ga0.call(d)).b)
$label0$0:{if(C.Q===w||C.bK===w){v=e-v
break $label0$0}if(C.U===w){v=this.gq(0).b-e-v
break $label0$0}if(C.aS===w){v=this.gq(0).a-e-v
break $label0$0}v=null}return v},
gHx(){var x,w,v=B.b([],y.O),u=this.cB$
for(x=B.l(this).h("an.1");u!=null;){v.push(u)
w=u.b
w.toString
u=x.a(w).c7$}return v},
gUE(){var x,w,v=B.b([],y.O),u=this.a6$
for(x=B.l(this).h("an.1");u!=null;){v.push(u)
w=u.b
w.toString
u=x.a(w).au$}return v}}
A.rD.prototype={
a3(){return new A.Ie(new B.bB(null,y.z),C.k)}}
A.Ie.prototype={
ae(){this.aB()
$.bG.p1$.push(new A.ayC(this))
$.am.ar$.f.a.f.F(0,this.gPm())},
l(){$.am.ar$.f.a.f.E(0,this.gPm())
this.aw()},
Td(d){this.yz(new A.ayA(this))},
abk(d){if(this.c==null)return
this.Td(d)},
a5m(d){if(!this.e)this.yz(new A.ayv(this))},
a5o(d){if(this.e)this.yz(new A.ayw(this))},
a5k(d){var x,w=this
if(w.f!==d){w.yz(new A.ayu(w,d))
x=w.a.Q
if(x!=null)x.$1(w.f)}},
Qm(d,e){var x,w,v,u,t,s,r=this,q=new A.ayz(r),p=new A.ayy(r,new A.ayx(r))
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
yz(d){return this.Qm(null,d)},
aeL(d){return this.Qm(d,null)},
aD(d){this.aS(d)
if(this.a.c!==d.c)$.bG.p1$.push(new A.ayB(this,d))},
ga5i(){var x,w=this.c
w.toString
w=B.d6(w,C.fi)
x=w==null?null:w.ch
$label0$0:{if(C.dH===x||x==null){w=this.a.c
break $label0$0}if(C.ht===x){w=!0
break $label0$0}w=null}return w},
A(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.ga5i()
w=u.a
v=B.n1(B.oG(!1,x,w.ax,t,!0,!0,s,!0,t,u.ga5j(),t,t,t,t),r,u.r,u.ga5l(),u.ga5n(),t)
if(w.c)s=w.w.a!==0
else s=!1
if(s)v=B.oc(w.w,v)
return v}}
A.Tx.prototype={
aL(d){var x=d.aj(y.I)
x.toString
x=new A.Su(this.e,x.w,null,B.aj(y.v))
x.aJ()
x.saU(null)
return x},
aN(d,e){var x
e.scM(0,this.e)
x=d.aj(y.I)
x.toString
e.sbF(x.w)}}
A.arH.prototype={
a9n(d){var x,w,v,u=null,t=this.r
if(!t.al(0,d)){x=t.i(0,u)
x.toString
for(w=this.f,v=x;v<w.length;){x=w[v].a
if(x!=null)t.n(0,x,v)
if(J.e(x,d)){t.n(0,u,v+1)
return v}++v}t.n(0,u,v)}else return t.i(0,d)
return u},
Wc(d){return this.a9n(d instanceof D.A1?d.a:d)},
Hq(d,e){var x,w,v,u,t=null
if(e<0||e>=this.f.length)return t
x=this.f[e]
w=x.a
v=w!=null?new D.A1(w):t
x=new B.jr(x,t)
u=D.aJQ(x,e)
x=u!=null?new D.D8(u,x,t):x
return new B.p0(new D.vy(new D.A2(x,t),t),v)},
gqV(){return this.f.length},
Lz(d){return this.f!==d.f}}
A.M7.prototype={
ki(d){return new A.M7(this.kj(d))},
lO(d){return!0}}
A.ST.prototype={
amF(d,e,f,g){var x=this
if(x.x)return new A.Tc(f,e,x.ch,g,null)
return D.aPG(0,f,x.Q,G.mm,null,x.ch,e,g)},
A(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.Um(d),k=n.cx
if(k==null){x=B.d6(d,m)
if(x!=null){w=x.r
v=w.anH(0,0)
u=w.anL(0,0)
w=n.c===C.ap
k=w?u:v
l=B.DR(l,x.HN(w?v:u))}}t=B.b([k!=null?new A.Tx(k,l,m):l],y.p)
w=n.c
s=F.aRR(d,w,!1)
r=n.f
if(r==null)r=F.aOn(d,w)
q=r?B.Ev(d):n.e
p=I.aqm(s,n.ch,q,n.at,!1,m,n.r,n.ay,m,n.as,new A.aqk(n,s,t))
o=r&&q!=null?F.aOm(p):p
if(n.ax===H.Q7)return new B.d1(new A.aql(d),o,m,y.n)
else return o}}
A.Bi.prototype={}
A.Tc.prototype={
aL(d){var x=this.e,w=D.auJ(d,x),v=B.aj(y.s)
x=new A.Sp(x,w,this.r,250,G.mm,this.w,v,0,null,null,new B.aO(),B.aj(y.v))
x.aJ()
x.U(0,null)
return x},
aN(d,e){var x=this.e
e.sdq(x)
x=D.auJ(d,x)
e.sVd(x)
e.sck(0,this.r)
e.shs(this.w)}}
A.lp.prototype={
a3(){return new A.YG(null,C.k)}}
A.YG.prototype={
gn3(){return!0},
A(d){this.t7(d)
return this.a.c}}
A.a3h.prototype={
ae(){this.aB()
this.ny()},
dY(){var x=this.eL$
if(x!=null){x.ah()
x.d7()
this.eL$=null}this.lU()}}
var z=a.updateTypes(["N(rD)","~(ld)","~(jm)","~(jn)","~(N)","@(j{reviver:D?(D?,D?)?})"])
A.ayC.prototype={
$1(d){var x=$.am.ar$.f.a.b
if(x==null)x=B.uY()
this.a.Td(x)},
$S:3}
A.ayA.prototype={
$0(){var x=$.am.ar$.f.a.b
switch((x==null?B.uY():x).a){case 0:x=!1
break
case 1:x=!0
break
default:x=null}this.a.d=x},
$S:0}
A.ayv.prototype={
$0(){this.a.e=!0},
$S:0}
A.ayw.prototype={
$0(){this.a.e=!1},
$S:0}
A.ayu.prototype={
$0(){this.a.f=this.b},
$S:0}
A.ayz.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+0}
A.ayx.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.d6(w,C.fi)
x=w==null?null:w.ch
$label0$0:{if(C.dH===x||x==null){w=d.c
break $label0$0}if(C.ht===x){w=!0
break $label0$0}w=null}return w},
$S:z+0}
A.ayy.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+0}
A.ayB.prototype={
$1(d){this.a.aeL(this.b)},
$S:3}
A.aqk.prototype={
$2(d,e){return this.a.amF(d,e,this.b,this.c)},
$S:533}
A.aql.prototype={
$1(d){var x=B.aMR(this.a)
if(d.d!=null&&x.gbJ())x.i9()
return!1},
$S:534};(function installTearOffs(){var x=a._instance_1u,w=a.installStaticTearOff
var v
x(v=A.Ie.prototype,"gPm","abk",1)
x(v,"ga5l","a5m",2)
x(v,"ga5n","a5o",3)
x(v,"ga5j","a5k",4)
w(A,"b5d",1,function(){return{reviver:null}},["$2$reviver","$1"],["aRZ",function(d){return A.aRZ(d,null)}],5,0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.CY,B.D)
w(A.a1a,D.lK)
w(A.nr,A.a1a)
w(A.Su,D.xS)
w(A.Sp,D.tZ)
v(B.V,[A.rD,A.lp])
v(B.X,[A.Ie,A.a3h])
v(B.bY,[A.ayC,A.ayz,A.ayx,A.ayy,A.ayB,A.aql])
v(B.c8,[A.ayA,A.ayv,A.ayw,A.ayu])
w(A.Tx,B.aV)
w(A.arH,D.Tq)
w(A.M7,B.lI)
w(A.ST,B.C)
w(A.aqk,B.du)
w(A.Bi,A.ST)
w(A.Tc,B.e8)
w(A.YG,A.a3h)
x(A.a1a,B.eh)
x(A.a3h,B.mm)})()
B.bP(b.typeUniverse,JSON.parse('{"nr":{"lK":[],"eh":["cM"],"d2":[]},"Su":{"cM":[],"aL":["cM"],"u":[],"ai":[]},"Sp":{"jO":["nr"],"B":[],"an":["cM","nr"],"EI":[],"u":[],"ai":[],"an.1":"nr","jO.0":"nr","an.0":"cM"},"rD":{"V":[],"c":[]},"Ie":{"X":["rD"]},"Tx":{"aV":[],"aq":[],"c":[]},"ST":{"C":[],"c":[]},"Bi":{"C":[],"c":[]},"Tc":{"e8":[],"aq":[],"c":[]},"lp":{"V":[],"c":[]},"YG":{"X":["lp"]}}'))
var y=(function rtii(){var x=B.E
return{k:x("ax"),s:x("j1"),v:x("cF"),I:x("es"),O:x("m<cM>"),p:x("m<c>"),z:x("bB<X<V>>"),n:x("d1<jv>"),T:x("cM"),S:x("kC"),M:x("lK"),q:x("n"),X:x("f3?")}})();(function constants(){E.lR=new A.M7(null)
E.nm=new B.a0(8,10,8,10)
E.cB=new B.i(0,3)
E.zD=new B.fn(8,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_5",e:"endPart",h:b})})($__dart_deferred_initializers__,"RDHN7mN8KFT6FbdbxsgA6QsJzKI=");
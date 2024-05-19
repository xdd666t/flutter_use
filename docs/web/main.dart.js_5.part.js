((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_5",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,H,I,D,G,A={
b2j(d){var x,w,v,u=(d.gm(d)>>>16&255)/255,t=(d.gm(d)>>>8&255)/255,s=(d.gm(d)&255)/255,r=Math.max(u,Math.max(t,s)),q=Math.min(u,Math.min(t,s)),p=r-q,o=d.gm(d),n=B.bp("hue")
if(r===0)n.b=0
else if(r===u)n.b=60*C.c.cU((t-s)/p,6)
else if(r===t)n.b=60*((s-u)/p+2)
else if(r===s)n.b=60*((u-t)/p+4)
n.b=isNaN(n.b1())?0:n.b1()
x=n.b1()
w=(r+q)/2
v=w===1?0:B.Q(p/(1-Math.abs(2*w-1)),0,1)
return new A.E2((o>>>24&255)/255,x,v,w)},
E2:function E2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nU:function nU(d,e){this.ce$=d
this.au$=e
this.a=null},
a3q:function a3q(){},
Ut:function Ut(d,e,f,g){var _=this
_.cl=null
_.eP=d
_.ew=e
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
Uo:function Uo(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.d6=_.dY=$
_.fI=!1
_.D=d
_.S=e
_.ah=f
_.aN=g
_.J=null
_.K=h
_.X=i
_.a6=j
_.di$=k
_.a8$=l
_.cJ$=m
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
aQX(d,e,f,g,h,i,j,k,l){return new A.tg(g,h,!1,d,k,l,j,i,f,null)},
tg:function tg(d,e,f,g,h,i,j,k,l,m){var _=this
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
JA:function JA(d,e){var _=this
_.f=_.e=_.d=!1
_.r=d
_.a=null
_.b=e
_.c=null},
aBV:function aBV(d){this.a=d},
aBT:function aBT(d){this.a=d},
aBO:function aBO(d){this.a=d},
aBP:function aBP(d){this.a=d},
aBN:function aBN(d,e){this.a=d
this.b=e},
aBS:function aBS(d){this.a=d},
aBQ:function aBQ(d){this.a=d},
aBR:function aBR(d,e){this.a=d
this.b=e},
aBU:function aBU(d,e){this.a=d
this.b=e},
VA:function VA(d,e,f){this.e=d
this.c=e
this.a=f},
aMy(d,e,f,g){return new A.auP(!0,!0,!0,d,B.b1([null,0],y.X,y.q))},
auP:function auP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.f=g
_.r=h},
Ny:function Ny(d){this.a=d},
UV:function UV(){},
atq:function atq(d,e,f){this.a=d
this.b=e
this.c=f},
atr:function atr(d){this.a=d},
Cg:function Cg(){},
Vf:function Vf(d,e,f,g,h){var _=this
_.e=d
_.r=e
_.w=f
_.c=g
_.a=h},
lQ:function lQ(d,e){this.c=d
this.a=e},
a_Q:function a_Q(d,e){var _=this
_.f4$=d
_.a=null
_.b=e
_.c=null},
a5x:function a5x(){},
aWr(d,e){return C.cl.BO(0,d,e)}},E
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
A.E2.prototype={
azA(){var x=this,w=x.d,v=(1-Math.abs(2*w-1))*x.c,u=x.b
return B.b84(x.a,u,v,v*(1-Math.abs(C.c.cU(u/60,2)-1)),w-v/2)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.E2&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gC(d){var x=this
return B.Y(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){var x=this
return"HSLColor("+B.j(x.a)+", "+B.j(x.b)+", "+B.j(x.c)+", "+B.j(x.d)+")"}}
A.nU.prototype={}
A.a3q.prototype={
ad(d){this.un(0)}}
A.Ut.prototype={
ghy(){return this.cl},
anZ(){if(this.cl!=null)return
this.cl=this.eP},
sd_(d,e){var x=this
if(x.eP.j(0,e))return
x.eP=e
x.cl=null
x.a_()},
sbJ(d){var x=this
if(x.ew===d)return
x.ew=d
x.cl=null
x.a_()},
bv(){this.anZ()
this.Pc()}}
A.Uo.prototype={
eK(d){if(!(d.b instanceof A.nU))d.b=new A.nU(null,null)},
bv(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=y.k.a(B.A.prototype.ga0.call(i))
if(i.a8$==null){switch(B.bs(i.D).a){case 1:x=new B.V(g.b,g.c)
break
case 0:x=new B.V(g.a,g.d)
break
default:x=h}i.id=x
i.ah.n4(0)
i.d6=i.dY=0
i.fI=!1
i.ah.n3(0,0)
return}switch(B.bs(i.D).a){case 1:x=new B.br(g.d,g.b)
break
case 0:x=new B.br(g.b,g.d)
break
default:x=h}w=x.a
v=x.b
u=v
t=w
for(x=g.a,s=g.b,r=g.c,q=g.d,p=h;!0;){o=i.ah.at
o.toString
n=i.FE(t,u,o)
if(n!==0){o=i.ah
m=o.at
m.toString
o.at=m+n
o.ch=!0}else{switch(B.bs(i.D).a){case 1:o=i.d6
o===$&&B.a()
o=B.Q(o,r,q)
break
case 0:o=i.d6
o===$&&B.a()
o=B.Q(o,x,s)
break
default:o=h}l=i.ah.n4(o)
m=i.ah
k=i.dY
k===$&&B.a()
j=m.n3(0,Math.max(0,k-o))
if(l&&j){p=o
break}p=o}}switch(B.bs(i.D).a){case 1:x=new B.V(B.Q(u,x,s),B.Q(p,r,q))
break
case 0:x=new B.V(B.Q(p,x,s),B.Q(u,r,q))
break
default:x=h}i.id=x},
FE(d,e,f){var x,w,v,u,t,s=this
s.d6=s.dY=0
s.fI=f<0
switch(s.K.a){case 0:x=s.aN
break
case 1:x=d*s.aN
break
default:x=null}s.J=x
w=s.a8$
v=Math.max(0,f)
u=Math.min(0,f)
t=Math.max(0,-f)
x.toString
return s.M3(s.gXN(),-x,w,e,C.hH,t,d,u,d+2*x,d+u,v)},
ga_g(){return this.fI},
a1U(d,e){var x=this,w=x.dY
w===$&&B.a()
x.dY=w+e.a
if(e.x)x.fI=!0
w=x.d6
w===$&&B.a()
x.d6=w+e.e},
Nc(d,e,f){var x=d.b
x.toString
y.M.a(x).a=e},
MB(d){var x=d.b
x.toString
x=y.M.a(x).a
x.toString
return this.XX(d,x,C.hH)},
NV(d,e){var x,w,v,u=this.a8$
for(x=B.m(this).h("as.1"),w=0;u!==d;){w+=u.fx.a
v=u.b
v.toString
u=x.a(v).au$}return w+e},
a09(d){var x,w,v=this.a8$
for(x=B.m(this).h("as.1");v!==d;){v.fx.toString
w=v.b
w.toString
v=x.a(w).au$}return 0},
df(d,e){var x=this.MB(y.T.a(d))
e.aS(0,x.a,x.b)},
XY(d,e){var x,w,v=d.b
v.toString
v=y.M.a(v).a
v.toString
x=y.S
w=B.oB(x.a(B.A.prototype.ga0.call(d)).a,x.a(B.A.prototype.ga0.call(d)).b)
$label0$0:{if(C.T===w||C.bR===w){v=e-v
break $label0$0}if(C.W===w){v=this.gq(0).b-e-v
break $label0$0}if(C.aX===w){v=this.gq(0).a-e-v
break $label0$0}v=null}return v},
gK3(){var x,w,v=B.b([],y.O),u=this.cJ$
for(x=B.m(this).h("as.1");u!=null;){v.push(u)
w=u.b
w.toString
u=x.a(w).ce$}return v},
gXP(){var x,w,v=B.b([],y.O),u=this.a8$
for(x=B.m(this).h("as.1");u!=null;){v.push(u)
w=u.b
w.toString
u=x.a(w).au$}return v}}
A.tg.prototype={
a4(){return new A.JA(new B.bC(null,y.z),C.k)}}
A.JA.prototype={
ag(){this.aD()
$.bH.p1$.push(new A.aBV(this))
$.aq.ar$.f.a.f.F(0,this.gSn())},
l(){$.aq.ar$.f.a.f.E(0,this.gSn())
this.aw()},
Wi(d){this.A2(new A.aBT(this))},
afE(d){if(this.c==null)return
this.Wi(d)},
a9i(d){if(!this.e)this.A2(new A.aBO(this))},
a9k(d){if(this.e)this.A2(new A.aBP(this))},
a9g(d){var x,w=this
if(w.f!==d){w.A2(new A.aBN(w,d))
x=w.a.Q
if(x!=null)x.$1(w.f)}},
Tn(d,e){var x,w,v,u,t,s,r=this,q=new A.aBS(r),p=new A.aBR(r,new A.aBQ(r))
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
A2(d){return this.Tn(null,d)},
aja(d){return this.Tn(d,null)},
aF(d){this.aT(d)
if(this.a.c!==d.c)$.bH.p1$.push(new A.aBU(this,d))},
ga9e(){var x,w=this.c
w.toString
w=B.dc(w,C.fR)
x=w==null?null:w.ch
$label0$0:{if(C.dY===x||x==null){w=this.a.c
break $label0$0}if(C.ic===x){w=!0
break $label0$0}w=null}return w},
A(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.ga9e()
w=u.a
v=B.nu(B.pd(!1,x,w.ax,t,!0,!0,s,!0,t,u.ga9f(),t,t,t,t),r,u.r,u.ga9h(),u.ga9j(),t)
if(w.c)s=w.w.a!==0
else s=!1
if(s)v=B.oK(w.w,v)
return v}}
A.VA.prototype={
aL(d){var x=d.aj(y.I)
x.toString
x=new A.Ut(this.e,x.w,null,B.am(y.v))
x.aK()
x.saV(null)
return x},
aO(d,e){var x
e.sd_(0,this.e)
x=d.aj(y.I)
x.toString
e.sbJ(x.w)}}
A.auP.prototype={
adC(d){var x,w,v,u=null,t=this.r
if(!t.al(0,d)){x=t.i(0,u)
x.toString
for(w=this.f,v=x;v<w.length;){x=w[v].a
if(x!=null)t.n(0,x,v)
if(J.e(x,d)){t.n(0,u,v+1)
return v}++v}t.n(0,u,v)}else return t.i(0,d)
return u},
ZC(d){return this.adC(d instanceof D.AV?d.a:d)},
JX(d,e){var x,w,v,u,t=null
if(e<0||e>=this.f.length)return t
x=this.f[e]
w=x.a
v=w!=null?new D.AV(w):t
x=new B.jN(x,t)
u=D.aNx(x,e)
x=u!=null?new D.Ee(u,x,t):x
return new B.px(new D.wh(new D.AW(x,t),t),v)},
gt1(){return this.f.length},
Oe(d){return this.f!==d.f}}
A.Ny.prototype={
kO(d){return new A.Ny(this.kP(d))},
mA(d){return!0}}
A.UV.prototype={
ard(d,e,f,g){var x=this
if(x.x)return new A.Vf(f,e,x.ch,g,null)
return D.aTM(0,f,x.Q,G.nt,null,x.ch,e,g)},
A(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.Xx(d),k=n.cx
if(k==null){x=B.dc(d,m)
if(x!=null){w=x.r
v=w.ash(0,0)
u=w.asl(0,0)
w=n.c===C.au
k=w?u:v
l=B.EW(l,x.Kj(w?v:u))}}t=B.b([k!=null?new A.VA(k,l,m):l],y.p)
w=n.c
s=F.aWj(d,w,!1)
r=n.f
if(r==null)r=F.aSr(d,w)
q=r?B.FL(d):n.e
p=I.ats(s,n.ch,q,n.at,!1,m,n.r,n.ay,m,n.as,new A.atq(n,s,t))
o=r&&q!=null?F.aSq(p):p
if(n.ax===H.Rx)return new B.d6(new A.atr(d),o,m,y.n)
else return o}}
A.Cg.prototype={}
A.Vf.prototype={
aL(d){var x=this.e,w=D.ay0(d,x),v=B.am(y.s)
x=new A.Uo(x,w,this.r,250,G.nt,this.w,v,0,null,null,new B.aP(),B.am(y.v))
x.aK()
x.U(0,null)
return x},
aO(d,e){var x=this.e
e.sdL(x)
x=D.ay0(d,x)
e.sYx(x)
e.sct(0,this.r)
e.shS(this.w)}}
A.lQ.prototype={
a4(){return new A.a_Q(null,C.k)}}
A.a_Q.prototype={
gnU(){return!0},
A(d){this.ui(d)
return this.a.c}}
A.a5x.prototype={
ag(){this.aD()
this.oo()},
ee(){var x=this.f4$
if(x!=null){x.ai()
x.dr()
this.f4$=null}this.mF()}}
var z=a.updateTypes(["O(tg)","~(lD)","~(jI)","~(jJ)","~(O)","@(k{reviver:E?(E?,E?)?})"])
A.aBV.prototype={
$1(d){var x=$.aq.ar$.f.a.b
if(x==null)x=B.vF()
this.a.Wi(x)},
$S:3}
A.aBT.prototype={
$0(){var x=$.aq.ar$.f.a.b
switch((x==null?B.vF():x).a){case 0:x=!1
break
case 1:x=!0
break
default:x=null}this.a.d=x},
$S:0}
A.aBO.prototype={
$0(){this.a.e=!0},
$S:0}
A.aBP.prototype={
$0(){this.a.e=!1},
$S:0}
A.aBN.prototype={
$0(){this.a.f=this.b},
$S:0}
A.aBS.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+0}
A.aBQ.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.dc(w,C.fR)
x=w==null?null:w.ch
$label0$0:{if(C.dY===x||x==null){w=d.c
break $label0$0}if(C.ic===x){w=!0
break $label0$0}w=null}return w},
$S:z+0}
A.aBR.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+0}
A.aBU.prototype={
$1(d){this.a.aja(this.b)},
$S:3}
A.atq.prototype={
$2(d,e){return this.a.ard(d,e,this.b,this.c)},
$S:544}
A.atr.prototype={
$1(d){var x=B.aQU(this.a)
if(d.d!=null&&x.gbO())x.iE()
return!1},
$S:545};(function installTearOffs(){var x=a._instance_1u,w=a.installStaticTearOff
var v
x(v=A.JA.prototype,"gSn","afE",1)
x(v,"ga9h","a9i",2)
x(v,"ga9j","a9k",3)
x(v,"ga9f","a9g",4)
w(A,"bal",1,function(){return{reviver:null}},["$2$reviver","$1"],["aWr",function(d){return A.aWr(d,null)}],5,0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.E2,B.E)
w(A.a3q,D.mb)
w(A.nU,A.a3q)
w(A.Ut,D.yF)
w(A.Uo,D.uD)
v(B.W,[A.tg,A.lQ])
v(B.Z,[A.JA,A.a5x])
v(B.c0,[A.aBV,A.aBS,A.aBQ,A.aBR,A.aBU,A.atr])
v(B.cd,[A.aBT,A.aBO,A.aBP,A.aBN])
w(A.VA,B.aY)
w(A.auP,D.Vt)
w(A.Ny,B.m9)
w(A.UV,B.G)
w(A.atq,B.dC)
w(A.Cg,A.UV)
w(A.Vf,B.ek)
w(A.a_Q,A.a5x)
x(A.a3q,B.ev)
x(A.a5x,B.mN)})()
B.bQ(b.typeUniverse,JSON.parse('{"nU":{"mb":[],"ev":["cR"],"d7":[]},"Ut":{"cR":[],"aM":["cR"],"A":[],"al":[]},"Uo":{"k9":["nU"],"F":[],"as":["cR","nU"],"FY":[],"A":[],"al":[],"as.1":"nU","k9.0":"nU","as.0":"cR"},"tg":{"W":[],"c":[]},"JA":{"Z":["tg"]},"VA":{"aY":[],"at":[],"c":[]},"UV":{"G":[],"c":[]},"Cg":{"G":[],"c":[]},"Vf":{"ek":[],"at":[],"c":[]},"lQ":{"W":[],"c":[]},"a_Q":{"Z":["lQ"]}}'))
var y=(function rtii(){var x=B.D
return{k:x("ay"),s:x("jn"),v:x("cK"),I:x("eH"),O:x("l<cR>"),p:x("l<c>"),z:x("bC<Z<W>>"),n:x("d6<jR>"),T:x("cR"),S:x("l0"),M:x("mb"),q:x("n"),X:x("fk?")}})();(function constants(){E.mW=new A.Ny(null)
E.ot=new B.a1(8,10,8,10)
E.cP=new B.i(0,3)
E.AR=new B.fE(8,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_5",e:"endPart",h:b})})($__dart_deferred_initializers__,"Yk9kCSFnlnj1ZpedFevy9IPYvxI=");
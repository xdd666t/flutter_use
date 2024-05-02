((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_5",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,H,I,D,G,A={
aXM(d){var x,w,v,u=(d.gl(d)>>>16&255)/255,t=(d.gl(d)>>>8&255)/255,s=(d.gl(d)&255)/255,r=Math.max(u,Math.max(t,s)),q=Math.min(u,Math.min(t,s)),p=r-q,o=d.gl(d),n=B.bk("hue")
if(r===0)n.b=0
else if(r===u)n.b=60*C.d.cQ((t-s)/p,6)
else if(r===t)n.b=60*((s-u)/p+2)
else if(r===s)n.b=60*((u-t)/p+4)
n.b=isNaN(n.aO())?0:n.aO()
x=n.aO()
w=(r+q)/2
v=w===1?0:B.S(p/(1-Math.abs(2*w-1)),0,1)
return new A.CH((o>>>24&255)/255,x,v,w)},
CH:function CH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nl:function nl(d,e){this.c7$=d
this.ak$=e
this.a=null},
a0J:function a0J(){},
Sc:function Sc(d,e,f,g){var _=this
_.e8=null
_.dq=d
_.cE=e
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
S7:function S7(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.bu=_.bP=$
_.ce=!1
_.C=d
_.Z=e
_.J=f
_.al=g
_.a5=null
_.aB=h
_.aF=i
_.aX=j
_.dC$=k
_.a3$=l
_.cw$=m
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
aMa(d,e,f,g,h,i,j,k,l){return new A.rw(g,h,!1,d,k,l,j,i,f,null)},
rw:function rw(d,e,f,g,h,i,j,k,l,m){var _=this
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
HW:function HW(d,e){var _=this
_.f=_.e=_.d=!1
_.r=d
_.a=null
_.b=e
_.c=null},
axQ:function axQ(d){this.a=d},
axO:function axO(d){this.a=d},
axJ:function axJ(d){this.a=d},
axK:function axK(d){this.a=d},
axI:function axI(d,e){this.a=d
this.b=e},
axN:function axN(d){this.a=d},
axL:function axL(d){this.a=d},
axM:function axM(d,e){this.a=d
this.b=e},
axP:function axP(d,e){this.a=d
this.b=e},
Tc:function Tc(d,e,f){this.e=d
this.c=e
this.a=f},
aI2(d,e,f,g){return new A.are(!0,!0,!0,d,B.b5([null,0],y.X,y.q))},
are:function are(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.f=g
_.r=h},
LR:function LR(d){this.a=d},
SB:function SB(){},
apV:function apV(d,e,f){this.a=d
this.b=e
this.c=f},
apW:function apW(d){this.a=d},
B4:function B4(){},
SU:function SU(d,e,f,g,h){var _=this
_.e=d
_.r=e
_.w=f
_.c=g
_.a=h},
li:function li(d,e){this.c=d
this.a=e},
Yb:function Yb(d,e){var _=this
_.eJ$=d
_.a=null
_.b=e
_.c=null},
a2O:function a2O(){},
aRg(d,e){return C.c0.zV(0,d,e)}},E
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
A.CH.prototype={
aui(){var x=this,w=x.d,v=(1-Math.abs(2*w-1))*x.c,u=x.b
return B.b2h(x.a,u,v,v*(1-Math.abs(C.d.cQ(u/60,2)-1)),w-v/2)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof A.CH&&e.a===x.a&&e.b===x.b&&e.c===x.c&&e.d===x.d},
gD(d){var x=this
return B.a0(x.a,x.b,x.c,x.d,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){var x=this
return"HSLColor("+B.k(x.a)+", "+B.k(x.b)+", "+B.k(x.c)+", "+B.k(x.d)+")"}}
A.nl.prototype={}
A.a0J.prototype={
aa(d){this.t2(0)}}
A.Sc.prototype={
gdj(){return this.e8},
aiI(){if(this.e8!=null)return
this.e8=this.dq},
scO(d,e){var x=this
if(x.dq.j(0,e))return
x.dq=e
x.e8=null
x.a1()},
sbI(d){var x=this
if(x.cE===d)return
x.cE=d
x.e8=null
x.a1()},
bn(){this.aiI()
this.M0()}}
A.S7.prototype={
em(d){if(!(d.b instanceof A.nl))d.b=new A.nl(null,null)},
bn(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=y.k.a(B.u.prototype.gX.call(l))
if(l.a3$==null){switch(B.bA(l.C).a){case 1:l.id=new B.T(k.b,k.c)
break
case 0:l.id=new B.T(k.a,k.d)
break}l.J.m9(0)
l.bu=l.bP=0
l.ce=!1
l.J.m8(0,0)
return}switch(B.bA(l.C).a){case 1:x=k.d
w=k.b
break
case 0:x=k.b
w=k.d
break
default:x=null
w=null}for(v=k.a,u=k.b,t=k.c,s=k.d,r=null;!0;){q=l.J.at
q.toString
p=l.Dw(x,w,q)
if(p!==0){q=l.J
o=q.at
o.toString
q.at=o+p
q.ch=!0}else{switch(B.bA(l.C).a){case 1:q=l.bu
q===$&&B.a()
r=B.S(q,t,s)
break
case 0:q=l.bu
q===$&&B.a()
r=B.S(q,v,u)
break}n=l.J.m9(r)
q=l.J
o=l.bP
o===$&&B.a()
m=q.m8(0,Math.max(0,o-r))
if(n&&m)break}}switch(B.bA(l.C).a){case 1:l.id=new B.T(B.S(w,v,u),B.S(r,t,s))
break
case 0:l.id=new B.T(B.S(r,v,u),B.S(w,t,s))
break}},
Dw(d,e,f){var x,w,v,u,t,s=this
s.bu=s.bP=0
s.ce=f<0
switch(s.aB.a){case 0:s.a5=s.al
break
case 1:s.a5=d*s.al
break}x=s.a3$
w=Math.max(0,f)
v=Math.min(0,f)
u=Math.max(0,-f)
t=s.a5
t.toString
return s.IZ(s.gTV(),-t,x,e,C.fx,u,d,v,d+2*t,d+v,w)},
gW8(){return this.ce},
Yz(d,e){var x=this,w=x.bP
w===$&&B.a()
x.bP=w+e.a
if(e.x)x.ce=!0
w=x.bu
w===$&&B.a()
x.bu=w+e.e},
K6(d,e,f){var x=d.b
x.toString
y.M.a(x).a=e},
Jw(d){var x=d.b
x.toString
x=y.M.a(x).a
x.toString
return this.U5(d,x,C.fx)},
KP(d,e){var x,w,v,u=this.a3$
for(x=B.l(this).h("an.1"),w=0;u!==d;){w+=u.fx.a
v=u.b
v.toString
u=x.a(v).ak$}return w+e},
X2(d){var x,w,v=this.a3$
for(x=B.l(this).h("an.1");v!==d;){v.fx.toString
w=v.b
w.toString
v=x.a(w).ak$}return 0},
cY(d,e){var x=this.Jw(y.T.a(d))
e.bt(0,x.a,x.b)},
U6(d,e){var x,w=d.b
w.toString
y.M.a(w)
x=y.S
switch(B.mc(x.a(B.u.prototype.gX.call(d)).a,x.a(B.u.prototype.gX.call(d)).b).a){case 2:case 1:w=w.a
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
gHa(){var x,w,v=B.b([],y.O),u=this.cw$
for(x=B.l(this).h("an.1");u!=null;){v.push(u)
w=u.b
w.toString
u=x.a(w).c7$}return v},
gTX(){var x,w,v=B.b([],y.O),u=this.a3$
for(x=B.l(this).h("an.1");u!=null;){v.push(u)
w=u.b
w.toString
u=x.a(w).ak$}return v}}
A.rw.prototype={
a0(){return new A.HW(new B.bv(null,y.z),C.k)}}
A.HW.prototype={
ab(){this.aq()
$.bG.ry$.push(new A.axQ(this))
$.at.J$.f.a.f.E(0,this.gOR())},
m(){$.at.J$.f.a.f.B(0,this.gOR())
this.am()},
SB(d){this.yl(new A.axO(this))},
aaF(d){if(this.c==null)return
this.SB(d)},
a4G(d){if(!this.e)this.yl(new A.axJ(this))},
a4I(d){if(this.e)this.yl(new A.axK(this))},
a4E(d){var x,w=this
if(w.f!==d){w.yl(new A.axI(w,d))
x=w.a.Q
if(x!=null)x.$1(w.f)}},
PO(d,e){var x,w,v,u,t,s,r=this,q=new A.axN(r),p=new A.axM(r,new A.axL(r))
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
yl(d){return this.PO(null,d)},
ae3(d){return this.PO(d,null)},
ar(d){this.aN(d)
if(this.a.c!==d.c)$.bG.ry$.push(new A.axP(this,d))},
ga4C(){var x,w=this.c
w.toString
w=B.d2(w,C.eR)
x=w==null?null:w.ch
switch((x==null?C.dn:x).a){case 0:return this.a.c
case 1:return!0}},
A(d){var x,w,v,u=this,t=null,s=u.a,r=s.as
s=s.d
x=u.ga4C()
w=u.a
v=B.mW(B.oy(!1,x,w.ax,t,!0,!0,s,!0,t,u.ga4D(),t,t,t,t),r,u.r,u.ga4F(),u.ga4H(),t)
if(w.c)s=w.w.a!==0
else s=!1
if(s)v=B.o6(w.w,v)
return v}}
A.Tc.prototype={
aD(d){var x=d.af(y.I)
x.toString
x=new A.Sc(this.e,x.w,null,B.aj(y.v))
x.aC()
x.saP(null)
return x},
aG(d,e){var x
e.scO(0,this.e)
x=d.af(y.I)
x.toString
e.sbI(x.w)}}
A.are.prototype={
a8J(d){var x,w,v,u=null,t=this.r
if(!t.ah(0,d)){x=t.i(0,u)
x.toString
for(w=this.f,v=x;v<w.length;){x=w[v].a
if(x!=null)t.n(0,x,v)
if(J.e(x,d)){t.n(0,u,v+1)
return v}++v}t.n(0,u,v)}else return t.i(0,d)
return u},
Vx(d){return this.a8J(d instanceof D.zS?d.a:d)},
H3(d,e){var x,w,v,u,t=null
if(e<0||e>=this.f.length)return t
x=this.f[e]
w=x.a
v=w!=null?new D.zS(w):t
x=new B.jk(x,t)
u=D.aJ2(x,e)
x=u!=null?new D.CS(u,x,t):x
return new B.oR(new D.vp(new D.zT(x,t),t),v)},
gqA(){return this.f.length},
L6(d){return this.f!==d.f}}
A.LR.prototype={
k9(d){return new A.LR(this.kb(d))},
lF(d){return!0}}
A.SB.prototype={
alW(d,e,f,g){var x=this
if(x.x)return new A.SU(f,e,x.ch,g,null)
return D.aOR(0,f,x.Q,G.lJ,null,x.ch,e,g)},
A(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.TH(d),k=n.cx
if(k==null){x=B.d2(d,m)
if(x!=null){w=x.r
v=w.amY(0,0)
u=w.an1(0,0)
w=n.c===C.ax
k=w?u:v
l=B.x5(l,x.Hq(w?v:u),m)}}t=B.b([k!=null?new A.Tc(k,l,m):l],y.p)
w=n.c
s=F.aR8(d,w,!1)
r=n.f
if(r==null)r=F.aNB(d,w)
q=r?B.Eb(d):n.e
p=I.apX(s,n.ch,q,n.at,!1,m,n.r,n.ay,m,n.as,new A.apV(n,s,t))
o=r&&q!=null?F.aNA(p):p
if(n.ax===H.Pj)return new B.d8(new A.apW(d),o,m,y.n)
else return o}}
A.B4.prototype={}
A.SU.prototype={
aD(d){var x=this.e,w=D.au9(d,x),v=B.aj(y.s)
x=new A.S7(x,w,this.r,250,G.lJ,this.w,v,0,null,null,B.aj(y.v))
x.aC()
x.R(0,null)
return x},
aG(d,e){var x=this.e
e.sd7(x)
x=D.au9(d,x)
e.sUx(x)
e.scl(0,this.r)
e.shm(this.w)}}
A.li.prototype={
a0(){return new A.Yb(null,C.k)}}
A.Yb.prototype={
gmW(){return!0},
A(d){this.rY(d)
return this.a.c}}
A.a2O.prototype={
ab(){this.aq()
this.no()},
dR(){var x=this.eJ$
if(x!=null){x.ad()
x.cX()
this.eJ$=null}this.lK()}}
var z=a.updateTypes(["O(rw)","~(l6)","~(jf)","~(jg)","~(O)","@(j{reviver:E?(E?,E?)?})"])
A.axQ.prototype={
$1(d){var x=$.at.J$.f.a.b
if(x==null)x=B.uQ()
this.a.SB(x)},
$S:4}
A.axO.prototype={
$0(){var x=$.at.J$.f.a.b
switch((x==null?B.uQ():x).a){case 0:this.a.d=!1
break
case 1:this.a.d=!0
break}},
$S:0}
A.axJ.prototype={
$0(){this.a.e=!0},
$S:0}
A.axK.prototype={
$0(){this.a.e=!1},
$S:0}
A.axI.prototype={
$0(){this.a.f=this.b},
$S:0}
A.axN.prototype={
$1(d){var x=this.a
return x.e&&d.c&&x.d},
$S:z+0}
A.axL.prototype={
$1(d){var x,w=this.a.c
w.toString
w=B.d2(w,C.eR)
x=w==null?null:w.ch
switch((x==null?C.dn:x).a){case 0:return d.c
case 1:return!0}},
$S:z+0}
A.axM.prototype={
$1(d){var x=this.a
return x.f&&x.d&&this.b.$1(d)},
$S:z+0}
A.axP.prototype={
$1(d){this.a.ae3(this.b)},
$S:4}
A.apV.prototype={
$2(d,e){return this.a.alW(d,e,this.b,this.c)},
$S:529}
A.apW.prototype={
$1(d){var x=B.aM7(this.a)
if(d.d!=null&&x.gbQ())x.i2()
return!1},
$S:530};(function installTearOffs(){var x=a._instance_1u,w=a.installStaticTearOff
var v
x(v=A.HW.prototype,"gOR","aaF",1)
x(v,"ga4F","a4G",2)
x(v,"ga4H","a4I",3)
x(v,"ga4D","a4E",4)
w(A,"b4k",1,function(){return{reviver:null}},["$2$reviver","$1"],["aRg",function(d){return A.aRg(d,null)}],5,0)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.CH,B.E)
w(A.a0J,D.lF)
w(A.nl,A.a0J)
w(A.Sc,D.xM)
w(A.S7,D.tR)
v(B.W,[A.rw,A.li])
v(B.Z,[A.HW,A.a2O])
v(B.bX,[A.axQ,A.axN,A.axL,A.axM,A.axP,A.apW])
v(B.c6,[A.axO,A.axJ,A.axK,A.axI])
w(A.Tc,B.aS)
w(A.are,D.T5)
w(A.LR,B.lD)
w(A.SB,B.B)
w(A.apV,B.dp)
w(A.B4,A.SB)
w(A.SU,B.e4)
w(A.Yb,A.a2O)
x(A.a0J,B.ec)
x(A.a2O,B.mj)})()
B.bM(b.typeUniverse,JSON.parse('{"nl":{"lF":[],"ec":["cH"],"cX":[]},"Sc":{"cH":[],"aK":["cH"],"u":[],"ai":[]},"S7":{"jJ":["nl"],"C":[],"an":["cH","nl"],"Eo":[],"u":[],"ai":[],"an.1":"nl","jJ.0":"nl","an.0":"cH"},"rw":{"W":[],"c":[]},"HW":{"Z":["rw"]},"Tc":{"aS":[],"ap":[],"c":[]},"SB":{"B":[],"c":[]},"B4":{"B":[],"c":[]},"SU":{"e4":[],"ap":[],"c":[]},"li":{"W":[],"c":[]},"Yb":{"Z":["li"]}}'))
var y=(function rtii(){var x=B.D
return{k:x("az"),s:x("iV"),v:x("cB"),I:x("en"),O:x("m<cH>"),p:x("m<c>"),z:x("bv<Z<W>>"),n:x("d8<jn>"),T:x("cH"),S:x("ku"),M:x("lF"),q:x("n"),X:x("eY?")}})();(function constants(){E.lc=new A.LR(null)
E.mM=new B.a1(8,10,8,10)
E.ct=new B.i(0,3)
E.z0=new B.fh(8,null,null,null)})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_5",e:"endPart",h:b})})($__dart_deferred_initializers__,"Kxw4lCOviVDcUAIrBlgXFsrRX5o=");
self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={EJ:function EJ(d,e){this.a=d
this.b=e},EK:function EK(d,e){this.a=d
this.b=e},GM:function GM(d,e,f){this.a=d
this.b=e
this.c=f},lr:function lr(d,e,f){var _=this
_.e=0
_.bI$=d
_.af$=e
_.a=f},PH:function PH(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.B=d
_.K=e
_.M=f
_.av=g
_.aB=h
_.u=i
_.F=j
_.bs=k
_.aU=l
_.c1=!1
_.b8=m
_.ca$=n
_.V$=o
_.bv$=p
_.k1=_.id=null
_.k2=!1
_.k4=_.k3=null
_.ok=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=q
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},Xv:function Xv(){},Xw:function Xw(){},
n1(d,e,f,g,h,i){return new A.S9(g,d,i,h,f,e,null)},
S9:function S9(d,e,f,g,h,i,j){var _=this
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.c=i
_.a=j}},C,B,D
A=a.updateHolder(c[57],A)
C=c[2]
B=c[0]
D=c[91]
A.EJ.prototype={
J(){return"WrapAlignment."+this.b}}
A.EK.prototype={
J(){return"WrapCrossAlignment."+this.b}}
A.GM.prototype={}
A.lr.prototype={}
A.PH.prototype={
sxa(d,e){if(this.B===e)return
this.B=e
this.X()},
shI(d){if(this.K===d)return
this.K=d
this.X()},
sUQ(d,e){if(this.M===e)return
this.M=e
this.X()},
salO(d){if(this.av===d)return
this.av=d
this.X()},
salY(d){if(this.aB===d)return
this.aB=d
this.X()},
safy(d){if(this.u===d)return
this.u=d
this.X()},
dQ(d){if(!(d.e instanceof A.lr))d.e=new A.lr(null,null,C.f)},
dU(d){return this.Ef(d)},
BE(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
BD(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a3v(d,e){switch(this.B.a){case 0:return new B.i(d,e)
case 1:return new B.i(e,d)}},
a3b(d,e,f){var x=e-f
switch(this.u.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
c9(d){return this.a13(d)},
a13(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.B.a){case 0:x=d.b
w=new B.az(0,x,0,1/0)
break
case 1:x=d.d
w=new B.az(0,1/0,0,x)
break
default:w=null
x=0}v=k.V$
for(u=B.n(k).h("aj.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.aGU(v,w)
n=k.BE(o)
m=k.BD(o)
if(p>0&&r+n+k.M>x){t=Math.max(t,r)
s+=q+k.aB
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.M;++p
l=v.e
l.toString
v=u.a(l).af$}s+=q
t=Math.max(t,r)
switch(k.B.a){case 0:return d.bh(new B.T(t,s))
case 1:return d.bh(new B.T(s,t))}},
bo(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.u.prototype.ga0.call(b1))
b1.c1=!1
x=b1.V$
if(x==null){b1.k3=new B.T(B.U(0,b2.a,b2.b),B.U(0,b2.c,b2.d))
return}switch(b1.B.a){case 0:w=b2.b
v=new B.az(0,w,0,1/0)
u=b1.F===C.aT&&!0
t=b1.bs===C.m4&&!0
break
case 1:w=b2.d
v=new B.az(0,1/0,0,w)
u=b1.bs===C.m4&&!0
t=b1.F===C.aT&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.M
r=b1.aB
q=B.b([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.bD(v,!0)
j=x.k3
j.toString
i=b1.BE(j)
j=x.k3
j.toString
h=b1.BD(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.GM(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.af$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.GM(m,l,k))}g=q.length
switch(b1.B.a){case 0:j=b1.k3=b2.bh(new B.T(o,n))
f=j.a
e=j.b
break
case 1:j=b1.k3=b2.bh(new B.T(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.c1=f<o||e<n
d=Math.max(0,e-n)
switch(b1.av.a){case 0:a0=0
a1=0
break
case 1:a0=d
a1=0
break
case 2:a0=d/2
a1=0
break
case 3:a1=g>1?d/(g-1):0
a0=0
break
case 4:a1=d/g
a0=a1/2
break
case 5:a1=d/(g+1)
a0=a1
break
default:a0=0
a1=0}a1+=r
a2=t?e-a0:a0
x=b1.V$
for(a3=0;a3<g;++a3){a4=q[a3]
l=a4.b
k=a4.c
a5=Math.max(0,f-a4.a)
switch(b1.K.a){case 0:a6=0
a7=0
break
case 1:a6=a5
a7=0
break
case 2:a6=a5/2
a7=0
break
case 3:a7=k>1?a5/(k-1):0
a6=0
break
case 4:a7=a5/k
a6=a7/2
break
case 5:a7=a5/(k+1)
a6=a7
break
default:a6=0
a7=0}a7+=s
a8=u?f-a6:a6
if(t)a2-=l
for(;x!=null;){j=x.e
j.toString
p.a(j)
if(j.e!==a3)break
a9=x.k3
a9.toString
i=b1.BE(a9)
a9=x.k3
a9.toString
b0=b1.a3b(t,l,b1.BD(a9))
if(u)a8-=i
j.a=b1.a3v(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.af$}a2=t?a2-a1:a2+(l+a1)}},
cd(d,e){return this.x4(d,e)},
aD(d,e){var x,w=this,v=w.c1&&w.aU!==C.e,u=w.b8
if(v){v=w.cx
v===$&&B.a()
x=w.k3
u.saz(0,d.ky(v,e,new B.I(0,0,0+x.a,0+x.b),w.gPG(),w.aU,u.a))}else{u.saz(0,null)
w.ro(d,e)}},
l(){this.b8.saz(0,null)
this.fe()}}
A.Xv.prototype={
am(d){var x,w,v
this.dF(d)
x=this.V$
for(w=y.e;x!=null;){x.am(d)
v=x.e
v.toString
x=w.a(v).af$}},
ad(d){var x,w,v
this.dh(0)
x=this.V$
for(w=y.e;x!=null;){x.ad(0)
v=x.e
v.toString
x=w.a(v).af$}}}
A.Xw.prototype={}
A.S9.prototype={
aI(d){var x=this,w=B.dB(d)
w=new A.PH(x.e,x.f,x.r,D.bh,x.x,x.y,w,C.d6,C.e,B.al(y.h),0,null,null,B.al(y.d))
w.aG()
w.U(0,null)
return w},
aJ(d,e){var x,w=this
e.sxa(0,w.e)
e.shI(w.f)
e.sUQ(0,w.r)
e.salO(D.bh)
e.salY(w.x)
e.safy(w.y)
x=B.dB(d)
if(e.F!=x){e.F=x
e.X()}if(e.bs!==C.d6){e.bs=C.d6
e.X()}if(C.e!==e.aU){e.aU=C.e
e.aq()
e.b_()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.eu,[A.EJ,A.EK])
u(A.GM,B.B)
u(A.lr,B.nE)
u(A.Xv,B.x)
u(A.Xw,A.Xv)
u(A.PH,A.Xw)
u(A.S9,B.dW)
x(A.Xv,B.aj)
w(A.Xw,B.cR)})()
B.bh(b.typeUniverse,JSON.parse('{"lr":{"eB":[],"eD":["x"],"cQ":[]},"EJ":{"X":[]},"EK":{"X":[]},"PH":{"cR":["x","lr"],"x":[],"aj":["x","lr"],"u":[],"S":[],"ah":[],"aj.1":"lr","cR.1":"lr","aj.0":"x"},"S9":{"dW":[],"ap":[],"c":[]}}'))
var y={a:B.m("az"),h:B.m("i7"),d:B.m("bY"),l:B.m("l<GM>"),e:B.m("lr")};(function constants(){D.bh=new A.EJ(0,"start")
D.SQ=new A.EJ(5,"spaceEvenly")
D.bP=new A.EK(0,"start")
D.SR=new A.EK(2,"center")})()}
$__dart_deferred_initializers__["RV6osIhruRYu1+9z2ttg73ZWS5s="] = $__dart_deferred_initializers__.current

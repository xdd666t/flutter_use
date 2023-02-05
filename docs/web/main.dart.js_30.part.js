self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={EQ:function EQ(d,e){this.a=d
this.b=e},ER:function ER(d,e){this.a=d
this.b=e},GX:function GX(d,e,f){this.a=d
this.b=e
this.c=f},lp:function lp(d,e,f){var _=this
_.e=0
_.bP$=d
_.ae$=e
_.a=f},Ps:function Ps(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.A=d
_.K=e
_.L=f
_.ar=g
_.aA=h
_.u=i
_.F=j
_.bx=k
_.aW=l
_.c5=!1
_.ba=m
_.cg$=n
_.U$=o
_.bA$=p
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
_.c=_.b=null},Xt:function Xt(){},Xu:function Xu(){},
n_(d,e,f,g,h,i){return new A.S0(g,d,i,h,f,e,null)},
S0:function S0(d,e,f,g,h,i,j){var _=this
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
A.EQ.prototype={
I(){return"WrapAlignment."+this.b}}
A.ER.prototype={
I(){return"WrapCrossAlignment."+this.b}}
A.GX.prototype={}
A.lp.prototype={}
A.Ps.prototype={
sxK(d,e){if(this.A===e)return
this.A=e
this.W()},
shZ(d){if(this.K===d)return
this.K=d
this.W()},
sWL(d,e){if(this.L===e)return
this.L=e
this.W()},
sanQ(d){if(this.ar===d)return
this.ar=d
this.W()},
sao_(d){if(this.aA===d)return
this.aA=d
this.W()},
sahv(d){if(this.u===d)return
this.u=d
this.W()},
dX(d){if(!(d.e instanceof A.lp))d.e=new A.lp(null,null,C.f)},
dZ(d){return this.Fv(d)},
CF(d){switch(this.A.a){case 0:return d.a
case 1:return d.b}},
CE(d){switch(this.A.a){case 0:return d.b
case 1:return d.a}},
a5g(d,e){switch(this.A.a){case 0:return new B.j(d,e)
case 1:return new B.j(e,d)}},
a4X(d,e,f){var x=e-f
switch(this.u.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
cf(d){return this.a2Q(d)},
a2Q(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.A.a){case 0:x=d.b
w=new B.ax(0,x,0,1/0)
break
case 1:x=d.d
w=new B.ax(0,1/0,0,x)
break
default:w=null
x=0}v=k.U$
for(u=B.n(k).h("aj.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.aGM(v,w)
n=k.CF(o)
m=k.CE(o)
if(p>0&&r+n+k.L>x){t=Math.max(t,r)
s+=q+k.aA
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.L;++p
l=v.e
l.toString
v=u.a(l).ae$}s+=q
t=Math.max(t,r)
switch(k.A.a){case 0:return d.bm(new B.U(t,s))
case 1:return d.bm(new B.U(s,t))}},
bs(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.u.prototype.ga0.call(b1))
b1.c5=!1
x=b1.U$
if(x==null){b1.k3=new B.U(B.X(0,b2.a,b2.b),B.X(0,b2.c,b2.d))
return}switch(b1.A.a){case 0:w=b2.b
v=new B.ax(0,w,0,1/0)
u=b1.F===C.Z&&!0
t=b1.bx===C.mZ&&!0
break
case 1:w=b2.d
v=new B.ax(0,1/0,0,w)
u=b1.bx===C.mZ&&!0
t=b1.F===C.Z&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.L
r=b1.aA
q=B.b([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.bG(v,!0)
j=x.k3
j.toString
i=b1.CF(j)
j=x.k3
j.toString
h=b1.CE(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.GX(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.ae$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.GX(m,l,k))}g=q.length
switch(b1.A.a){case 0:j=b1.k3=b2.bm(new B.U(o,n))
f=j.a
e=j.b
break
case 1:j=b1.k3=b2.bm(new B.U(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.c5=f<o||e<n
d=Math.max(0,e-n)
switch(b1.ar.a){case 0:a0=0
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
x=b1.U$
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
i=b1.CF(a9)
a9=x.k3
a9.toString
b0=b1.a4X(t,l,b1.CE(a9))
if(u)a8-=i
j.a=b1.a5g(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.ae$}a2=t?a2-a1:a2+(l+a1)}},
cj(d,e){return this.xE(d,e)},
aB(d,e){var x,w=this,v=w.c5&&w.aW!==C.e,u=w.ba
if(v){v=w.cx
v===$&&B.a()
x=w.k3
u.sav(0,d.kS(v,e,new B.w(0,0,0+x.a,0+x.b),w.gRn(),w.aW,u.a))}else{u.sav(0,null)
w.rC(d,e)}},
l(){this.ba.sav(0,null)
this.fp()}}
A.Xt.prototype={
al(d){var x,w,v
this.dL(d)
x=this.U$
for(w=y.e;x!=null;){x.al(d)
v=x.e
v.toString
x=w.a(v).ae$}},
ac(d){var x,w,v
this.dn(0)
x=this.U$
for(w=y.e;x!=null;){x.ac(0)
v=x.e
v.toString
x=w.a(v).ae$}}}
A.Xu.prototype={}
A.S0.prototype={
aH(d){var x=this,w=B.dz(d)
w=new A.Ps(x.e,x.f,x.r,D.bq,x.x,x.y,w,C.dn,C.e,B.ak(y.h),0,null,null,B.ak(y.d))
w.aG()
w.Y(0,null)
return w},
aI(d,e){var x,w=this
e.sxK(0,w.e)
e.shZ(w.f)
e.sWL(0,w.r)
e.sanQ(D.bq)
e.sao_(w.x)
e.sahv(w.y)
x=B.dz(d)
if(e.F!=x){e.F=x
e.W()}if(e.bx!==C.dn){e.bx=C.dn
e.W()}if(C.e!==e.aW){e.aW=C.e
e.ap()
e.b1()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.ew,[A.EQ,A.ER])
u(A.GX,B.C)
u(A.lp,B.nD)
u(A.Xt,B.z)
u(A.Xu,A.Xt)
u(A.Ps,A.Xu)
u(A.S0,B.dX)
x(A.Xt,B.aj)
w(A.Xu,B.cQ)})()
B.be(b.typeUniverse,JSON.parse('{"lp":{"eF":[],"eH":["z"],"cO":[]},"EQ":{"W":[]},"ER":{"W":[]},"Ps":{"cQ":["z","lp"],"z":[],"aj":["z","lp"],"u":[],"T":[],"ah":[],"aj.1":"lp","cQ.1":"lp","aj.0":"z"},"S0":{"dX":[],"ao":[],"c":[]}}'))
var y={a:B.m("ax"),h:B.m("i9"),d:B.m("bU"),l:B.m("l<GX>"),e:B.m("lp")};(function constants(){D.bq=new A.EQ(0,"start")
D.UD=new A.EQ(5,"spaceEvenly")
D.bZ=new A.ER(0,"start")
D.UE=new A.ER(2,"center")})()}
$__dart_deferred_initializers__["TbiR3NVl49i97l06ayGGdMtBRSQ="] = $__dart_deferred_initializers__.current

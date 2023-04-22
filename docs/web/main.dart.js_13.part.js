self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={Fx:function Fx(d,e){this.a=d
this.b=e},Fy:function Fy(d,e){this.a=d
this.b=e},HL:function HL(d,e,f){this.a=d
this.b=e
this.c=f},lK:function lK(d,e,f){var _=this
_.e=0
_.c_$=d
_.aq$=e
_.a=f},Rd:function Rd(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.B=d
_.K=e
_.M=f
_.av=g
_.aB=h
_.v=i
_.F=j
_.br=k
_.b_=l
_.c7=!1
_.b2=m
_.cB$=n
_.a3$=o
_.cg$=p
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
_.c=_.b=null},Zg:function Zg(){},Zh:function Zh(){},
lJ(d,e,f,g,h,i){return new A.TN(g,d,i,h,f,e,null)},
TN:function TN(d,e,f,g,h,i,j){var _=this
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.c=i
_.a=j}},C,B,D
A=a.updateHolder(c[54],A)
C=c[2]
B=c[0]
D=c[78]
A.Fx.prototype={
J(){return"WrapAlignment."+this.b}}
A.Fy.prototype={
J(){return"WrapCrossAlignment."+this.b}}
A.HL.prototype={}
A.lK.prototype={}
A.Rd.prototype={
saig(d,e){if(this.B===e)return
this.B=e
this.Z()},
shS(d){if(this.K===d)return
this.K=d
this.Z()},
sW7(d,e){if(this.M===e)return
this.M=e
this.Z()},
sao_(d){if(this.av===d)return
this.av=d
this.Z()},
sao9(d){if(this.aB===d)return
this.aB=d
this.Z()},
sahL(d){if(this.v===d)return
this.v=d
this.Z()},
dX(d){if(!(d.e instanceof A.lK))d.e=new A.lK(null,null,C.f)},
e1(d){return this.F1(d)},
Cq(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
Cp(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a4Q(d,e){switch(this.B.a){case 0:return new B.i(d,e)
case 1:return new B.i(e,d)}},
a4w(d,e,f){var x=e-f
switch(this.v.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
ce(d){return this.a2m(d)},
a2m(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.B.a){case 0:x=d.b
w=new B.aD(0,x,0,1/0)
break
case 1:x=d.d
w=new B.aD(0,1/0,0,x)
break
default:w=null
x=0}v=k.a3$
for(u=B.l(k).h("ak.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.aK1(v,w)
n=k.Cq(o)
m=k.Cp(o)
if(p>0&&r+n+k.M>x){t=Math.max(t,r)
s+=q+k.aB
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.M;++p
l=v.e
l.toString
v=u.a(l).aq$}s+=q
t=Math.max(t,r)
switch(k.B.a){case 0:return d.bi(new B.S(t,s))
case 1:return d.bi(new B.S(s,t))}},
bl(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.t.prototype.ga_.call(b1))
b1.c7=!1
x=b1.a3$
if(x==null){b1.k3=new B.S(B.V(0,b2.a,b2.b),B.V(0,b2.c,b2.d))
return}switch(b1.B.a){case 0:w=b2.b
v=new B.aD(0,w,0,1/0)
u=b1.F===C.aV&&!0
t=b1.br===C.mh&&!0
break
case 1:w=b2.d
v=new B.aD(0,1/0,0,w)
u=b1.br===C.mh&&!0
t=b1.F===C.aV&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.M
r=b1.aB
q=B.b([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.bC(v,!0)
j=x.k3
j.toString
i=b1.Cq(j)
j=x.k3
j.toString
h=b1.Cp(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.HL(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.aq$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.HL(m,l,k))}g=q.length
switch(b1.B.a){case 0:j=b1.k3=b2.bi(new B.S(o,n))
f=j.a
e=j.b
break
case 1:j=b1.k3=b2.bi(new B.S(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.c7=f<o||e<n
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
x=b1.a3$
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
i=b1.Cq(a9)
a9=x.k3
a9.toString
b0=b1.a4w(t,l,b1.Cp(a9))
if(u)a8-=i
j.a=b1.a4Q(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.aq$}a2=t?a2-a1:a2+(l+a1)}},
cp(d,e){return this.xO(d,e)},
aC(d,e){var x,w=this,v=w.c7&&w.b_!==C.e,u=w.b2
if(v){v=w.cx
v===$&&B.a()
x=w.k3
u.saz(0,d.kG(v,e,new B.I(0,0,0+x.a,0+x.b),w.gQU(),w.b_,u.a))}else{u.saz(0,null)
w.rZ(d,e)}},
l(){this.b2.saz(0,null)
this.eZ()}}
A.Zg.prototype={
ap(d){var x,w,v
this.dP(d)
x=this.a3$
for(w=y.e;x!=null;){x.ap(d)
v=x.e
v.toString
x=w.a(v).aq$}},
ag(d){var x,w,v
this.dg(0)
x=this.a3$
for(w=y.e;x!=null;){x.ag(0)
v=x.e
v.toString
x=w.a(v).aq$}}}
A.Zh.prototype={}
A.TN.prototype={
aG(d){var x=this,w=B.dD(d)
w=new A.Rd(x.e,x.f,x.r,D.be,x.x,x.y,w,C.di,C.e,B.aj(y.h),0,null,null,B.aj(y.d))
w.aD()
w.U(0,null)
return w},
aI(d,e){var x,w=this
e.saig(0,w.e)
e.shS(w.f)
e.sW7(0,w.r)
e.sao_(D.be)
e.sao9(w.x)
e.sahL(w.y)
x=B.dD(d)
if(e.F!=x){e.F=x
e.Z()}if(e.br!==C.di){e.br=C.di
e.Z()}if(C.e!==e.b_){e.b_=C.e
e.ai()
e.b1()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.i2,[A.Fx,A.Fy])
u(A.HL,B.E)
u(A.lK,B.nR)
u(A.Zg,B.G)
u(A.Zh,A.Zg)
u(A.Rd,A.Zh)
u(A.TN,B.e0)
x(A.Zg,B.ak)
w(A.Zh,B.cU)})()
B.bE(b.typeUniverse,JSON.parse('{"lK":{"f7":[],"eA":["G"],"cT":[]},"Fx":{"W":[]},"Fy":{"W":[]},"Rd":{"cU":["G","lK"],"G":[],"ak":["G","lK"],"t":[],"T":[],"ai":[],"ak.1":"lK","cU.1":"lK","ak.0":"G"},"TN":{"e0":[],"ao":[],"c":[]}}'))
var y={a:B.v("aD"),h:B.v("iE"),d:B.v("cf"),l:B.v("m<HL>"),e:B.v("lK")};(function constants(){D.be=new A.Fx(0,"start")
D.UF=new A.Fx(5,"spaceEvenly")
D.bF=new A.Fy(0,"start")
D.UG=new A.Fy(2,"center")})()}
$__dart_deferred_initializers__["z2A/kZzMiHKTWIY7iTuTXOPxJpA="] = $__dart_deferred_initializers__.current

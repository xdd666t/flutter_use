self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={FA:function FA(d,e){this.a=d
this.b=e},FB:function FB(d,e){this.a=d
this.b=e},HK:function HK(d,e,f){this.a=d
this.b=e
this.c=f},lQ:function lQ(d,e,f){var _=this
_.e=0
_.bL$=d
_.ah$=e
_.a=f},Rd:function Rd(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.B=d
_.K=e
_.M=f
_.av=g
_.aB=h
_.v=i
_.F=j
_.br=k
_.b0=l
_.c6=!1
_.b3=m
_.cf$=n
_.Z$=o
_.bu$=p
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
_.c=_.b=null},Zf:function Zf(){},Zg:function Zg(){},
lP(d,e,f,g,h,i){return new A.TM(g,d,i,h,f,e,null)},
TM:function TM(d,e,f,g,h,i,j){var _=this
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.c=i
_.a=j}},C,B,D
A=a.updateHolder(c[59],A)
C=c[2]
B=c[0]
D=c[93]
A.FA.prototype={
J(){return"WrapAlignment."+this.b}}
A.FB.prototype={
J(){return"WrapCrossAlignment."+this.b}}
A.HK.prototype={}
A.lQ.prototype={}
A.Rd.prototype={
saiq(d,e){if(this.B===e)return
this.B=e
this.a_()},
shV(d){if(this.K===d)return
this.K=d
this.a_()},
sWd(d,e){if(this.M===e)return
this.M=e
this.a_()},
saoe(d){if(this.av===d)return
this.av=d
this.a_()},
saoo(d){if(this.aB===d)return
this.aB=d
this.a_()},
sahU(d){if(this.v===d)return
this.v=d
this.a_()},
dT(d){if(!(d.e instanceof A.lQ))d.e=new A.lQ(null,null,C.f)},
dY(d){return this.F3(d)},
Cq(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
Cp(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a4W(d,e){switch(this.B.a){case 0:return new B.i(d,e)
case 1:return new B.i(e,d)}},
a4C(d,e,f){var x=e-f
switch(this.v.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
cc(d){return this.a2s(d)},
a2s(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.B.a){case 0:x=d.b
w=new B.ay(0,x,0,1/0)
break
case 1:x=d.d
w=new B.ay(0,1/0,0,x)
break
default:w=null
x=0}v=k.Z$
for(u=B.m(k).h("ak.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.aK1(v,w)
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
v=u.a(l).ah$}s+=q
t=Math.max(t,r)
switch(k.B.a){case 0:return d.bj(new B.U(t,s))
case 1:return d.bj(new B.U(s,t))}},
bm(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.u.prototype.ga0.call(b1))
b1.c6=!1
x=b1.Z$
if(x==null){b1.k3=new B.U(B.W(0,b2.a,b2.b),B.W(0,b2.c,b2.d))
return}switch(b1.B.a){case 0:w=b2.b
v=new B.ay(0,w,0,1/0)
u=b1.F===C.aV&&!0
t=b1.br===C.mh&&!0
break
case 1:w=b2.d
v=new B.ay(0,1/0,0,w)
u=b1.br===C.mh&&!0
t=b1.F===C.aV&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.M
r=b1.aB
q=B.b([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.bE(v,!0)
j=x.k3
j.toString
i=b1.Cq(j)
j=x.k3
j.toString
h=b1.Cp(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.HK(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.ah$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.HK(m,l,k))}g=q.length
switch(b1.B.a){case 0:j=b1.k3=b2.bj(new B.U(o,n))
f=j.a
e=j.b
break
case 1:j=b1.k3=b2.bj(new B.U(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.c6=f<o||e<n
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
x=b1.Z$
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
b0=b1.a4C(t,l,b1.Cp(a9))
if(u)a8-=i
j.a=b1.a4W(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.ah$}a2=t?a2-a1:a2+(l+a1)}},
ck(d,e){return this.xR(d,e)},
aC(d,e){var x,w=this,v=w.c6&&w.b0!==C.e,u=w.b3
if(v){v=w.cx
v===$&&B.a()
x=w.k3
u.saz(0,d.kM(v,e,new B.I(0,0,0+x.a,0+x.b),w.gQW(),w.b0,u.a))}else{u.saz(0,null)
w.t_(d,e)}},
l(){this.b3.saz(0,null)
this.eY()}}
A.Zf.prototype={
aq(d){var x,w,v
this.dK(d)
x=this.Z$
for(w=y.e;x!=null;){x.aq(d)
v=x.e
v.toString
x=w.a(v).ah$}},
af(d){var x,w,v
this.dc(0)
x=this.Z$
for(w=y.e;x!=null;){x.af(0)
v=x.e
v.toString
x=w.a(v).ah$}}}
A.Zg.prototype={}
A.TM.prototype={
aG(d){var x=this,w=B.dH(d)
w=new A.Rd(x.e,x.f,x.r,D.be,x.x,x.y,w,C.di,C.e,B.aj(y.h),0,null,null,B.aj(y.d))
w.aD()
w.U(0,null)
return w},
aI(d,e){var x,w=this
e.saiq(0,w.e)
e.shV(w.f)
e.sWd(0,w.r)
e.saoe(D.be)
e.saoo(w.x)
e.sahU(w.y)
x=B.dH(d)
if(e.F!=x){e.F=x
e.a_()}if(e.br!==C.di){e.br=C.di
e.a_()}if(C.e!==e.b0){e.b0=C.e
e.aj()
e.b2()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.ew,[A.FA,A.FB])
u(A.HK,B.x)
u(A.lQ,B.o2)
u(A.Zf,B.A)
u(A.Zg,A.Zf)
u(A.Rd,A.Zg)
u(A.TM,B.e7)
x(A.Zf,B.ak)
w(A.Zg,B.cX)})()
B.bj(b.typeUniverse,JSON.parse('{"lQ":{"eD":[],"eF":["A"],"cW":[]},"FA":{"V":[]},"FB":{"V":[]},"Rd":{"cX":["A","lQ"],"A":[],"ak":["A","lQ"],"u":[],"T":[],"ai":[],"ak.1":"lQ","cX.1":"lQ","ak.0":"A"},"TM":{"e7":[],"ao":[],"c":[]}}'))
var y={a:B.n("ay"),h:B.n("iN"),d:B.n("c2"),l:B.n("l<HK>"),e:B.n("lQ")};(function constants(){D.be=new A.FA(0,"start")
D.UD=new A.FA(5,"spaceEvenly")
D.bF=new A.FB(0,"start")
D.UE=new A.FB(2,"center")})()}
$__dart_deferred_initializers__["ViIVFYB2CHdXJyapkP53+gqFA6c="] = $__dart_deferred_initializers__.current

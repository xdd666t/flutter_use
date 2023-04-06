self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={FH:function FH(d,e){this.a=d
this.b=e},FI:function FI(d,e){this.a=d
this.b=e},HR:function HR(d,e,f){this.a=d
this.b=e
this.c=f},lU:function lU(d,e,f){var _=this
_.e=0
_.bM$=d
_.aj$=e
_.a=f},Ro:function Ro(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.B=d
_.K=e
_.M=f
_.aw=g
_.aB=h
_.v=i
_.F=j
_.bs=k
_.aX=l
_.c6=!1
_.b4=m
_.cg$=n
_.Z$=o
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
_.c=_.b=null},Zx:function Zx(){},Zy:function Zy(){},
lT(d,e,f,g,h,i){return new A.U_(g,d,i,h,f,e,null)},
U_:function U_(d,e,f,g,h,i,j){var _=this
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
A.FH.prototype={
J(){return"WrapAlignment."+this.b}}
A.FI.prototype={
J(){return"WrapCrossAlignment."+this.b}}
A.HR.prototype={}
A.lU.prototype={}
A.Ro.prototype={
saiP(d,e){if(this.B===e)return
this.B=e
this.a_()},
shV(d){if(this.K===d)return
this.K=d
this.a_()},
sWp(d,e){if(this.M===e)return
this.M=e
this.a_()},
saoB(d){if(this.aw===d)return
this.aw=d
this.a_()},
saoL(d){if(this.aB===d)return
this.aB=d
this.a_()},
saih(d){if(this.v===d)return
this.v=d
this.a_()},
dU(d){if(!(d.e instanceof A.lU))d.e=new A.lU(null,null,C.f)},
dZ(d){return this.F5(d)},
Cs(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
Cr(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a5f(d,e){switch(this.B.a){case 0:return new B.i(d,e)
case 1:return new B.i(e,d)}},
a4W(d,e,f){var x=e-f
switch(this.v.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
cc(d){return this.a2H(d)},
a2H(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.B.a){case 0:x=d.b
w=new B.aA(0,x,0,1/0)
break
case 1:x=d.d
w=new B.aA(0,1/0,0,x)
break
default:w=null
x=0}v=k.Z$
for(u=B.m(k).h("ak.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.aKw(v,w)
n=k.Cs(o)
m=k.Cr(o)
if(p>0&&r+n+k.M>x){t=Math.max(t,r)
s+=q+k.aB
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.M;++p
l=v.e
l.toString
v=u.a(l).aj$}s+=q
t=Math.max(t,r)
switch(k.B.a){case 0:return d.bj(new B.U(t,s))
case 1:return d.bj(new B.U(s,t))}},
bm(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.u.prototype.ga0.call(b1))
b1.c6=!1
x=b1.Z$
if(x==null){b1.k3=new B.U(B.X(0,b2.a,b2.b),B.X(0,b2.c,b2.d))
return}switch(b1.B.a){case 0:w=b2.b
v=new B.aA(0,w,0,1/0)
u=b1.F===C.aV&&!0
t=b1.bs===C.ml&&!0
break
case 1:w=b2.d
v=new B.aA(0,1/0,0,w)
u=b1.bs===C.ml&&!0
t=b1.F===C.aV&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.M
r=b1.aB
q=B.b([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.bF(v,!0)
j=x.k3
j.toString
i=b1.Cs(j)
j=x.k3
j.toString
h=b1.Cr(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.HR(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.aj$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.HR(m,l,k))}g=q.length
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
switch(b1.aw.a){case 0:a0=0
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
i=b1.Cs(a9)
a9=x.k3
a9.toString
b0=b1.a4W(t,l,b1.Cr(a9))
if(u)a8-=i
j.a=b1.a5f(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.aj$}a2=t?a2-a1:a2+(l+a1)}},
cl(d,e){return this.xS(d,e)},
aC(d,e){var x,w=this,v=w.c6&&w.aX!==C.e,u=w.b4
if(v){v=w.cx
v===$&&B.a()
x=w.k3
u.saA(0,d.kM(v,e,new B.I(0,0,0+x.a,0+x.b),w.gR6(),w.aX,u.a))}else{u.saA(0,null)
w.t0(d,e)}},
l(){this.b4.saA(0,null)
this.f_()}}
A.Zx.prototype={
aq(d){var x,w,v
this.dL(d)
x=this.Z$
for(w=y.e;x!=null;){x.aq(d)
v=x.e
v.toString
x=w.a(v).aj$}},
ag(d){var x,w,v
this.dd(0)
x=this.Z$
for(w=y.e;x!=null;){x.ag(0)
v=x.e
v.toString
x=w.a(v).aj$}}}
A.Zy.prototype={}
A.U_.prototype={
aH(d){var x=this,w=B.dJ(d)
w=new A.Ro(x.e,x.f,x.r,D.bg,x.x,x.y,w,C.dh,C.e,B.aj(y.h),0,null,null,B.aj(y.d))
w.aE()
w.U(0,null)
return w},
aJ(d,e){var x,w=this
e.saiP(0,w.e)
e.shV(w.f)
e.sWp(0,w.r)
e.saoB(D.bg)
e.saoL(w.x)
e.saih(w.y)
x=B.dJ(d)
if(e.F!=x){e.F=x
e.a_()}if(e.bs!==C.dh){e.bs=C.dh
e.a_()}if(C.e!==e.aX){e.aX=C.e
e.al()
e.b2()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.ex,[A.FH,A.FI])
u(A.HR,B.x)
u(A.lU,B.o4)
u(A.Zx,B.F)
u(A.Zy,A.Zx)
u(A.Ro,A.Zy)
u(A.U_,B.e9)
x(A.Zx,B.ak)
w(A.Zy,B.cZ)})()
B.bk(b.typeUniverse,JSON.parse('{"lU":{"eE":[],"eG":["F"],"cY":[]},"FH":{"V":[]},"FI":{"V":[]},"Ro":{"cZ":["F","lU"],"F":[],"ak":["F","lU"],"u":[],"T":[],"ai":[],"ak.1":"lU","cZ.1":"lU","ak.0":"F"},"U_":{"e9":[],"ao":[],"c":[]}}'))
var y={a:B.n("aA"),h:B.n("iN"),d:B.n("c3"),l:B.n("l<HR>"),e:B.n("lU")};(function constants(){D.bg=new A.FH(0,"start")
D.UK=new A.FH(5,"spaceEvenly")
D.bF=new A.FI(0,"start")
D.UL=new A.FI(2,"center")})()}
$__dart_deferred_initializers__["/3G/J9Rx9UwM41EB9wvEf6vovpY="] = $__dart_deferred_initializers__.current

self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={EW:function EW(d,e){this.a=d
this.b=e},EX:function EX(d,e){this.a=d
this.b=e},H_:function H_(d,e,f){this.a=d
this.b=e
this.c=f},ly:function ly(d,e,f){var _=this
_.e=0
_.bI$=d
_.ag$=e
_.a=f},PZ:function PZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.B=d
_.K=e
_.M=f
_.av=g
_.aB=h
_.u=i
_.F=j
_.bs=k
_.aV=l
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
_.c=_.b=null},XN:function XN(){},XO:function XO(){},
n7(d,e,f,g,h,i){return new A.St(g,d,i,h,f,e,null)},
St:function St(d,e,f,g,h,i,j){var _=this
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
A.EW.prototype={
J(){return"WrapAlignment."+this.b}}
A.EX.prototype={
J(){return"WrapCrossAlignment."+this.b}}
A.H_.prototype={}
A.ly.prototype={}
A.PZ.prototype={
sx7(d,e){if(this.B===e)return
this.B=e
this.X()},
shH(d){if(this.K===d)return
this.K=d
this.X()},
sUT(d,e){if(this.M===e)return
this.M=e
this.X()},
salJ(d){if(this.av===d)return
this.av=d
this.X()},
salT(d){if(this.aB===d)return
this.aB=d
this.X()},
safv(d){if(this.u===d)return
this.u=d
this.X()},
dR(d){if(!(d.e instanceof A.ly))d.e=new A.ly(null,null,C.f)},
dW(d){return this.Ee(d)},
BB(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
BA(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
a3w(d,e){switch(this.B.a){case 0:return new B.i(d,e)
case 1:return new B.i(e,d)}},
a3c(d,e,f){var x=e-f
switch(this.u.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
c9(d){return this.a15(d)},
a15(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.B.a){case 0:x=d.b
w=new B.az(0,x,0,1/0)
break
case 1:x=d.d
w=new B.az(0,1/0,0,x)
break
default:w=null
x=0}v=k.V$
for(u=B.n(k).h("aj.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.aHg(v,w)
n=k.BB(o)
m=k.BA(o)
if(p>0&&r+n+k.M>x){t=Math.max(t,r)
s+=q+k.aB
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.M;++p
l=v.e
l.toString
v=u.a(l).ag$}s+=q
t=Math.max(t,r)
switch(k.B.a){case 0:return d.bh(new B.T(t,s))
case 1:return d.bh(new B.T(s,t))}},
bo(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.u.prototype.ga_.call(b1))
b1.c1=!1
x=b1.V$
if(x==null){b1.k3=new B.T(B.V(0,b2.a,b2.b),B.V(0,b2.c,b2.d))
return}switch(b1.B.a){case 0:w=b2.b
v=new B.az(0,w,0,1/0)
u=b1.F===C.aT&&!0
t=b1.bs===C.md&&!0
break
case 1:w=b2.d
v=new B.az(0,1/0,0,w)
u=b1.bs===C.md&&!0
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
i=b1.BB(j)
j=x.k3
j.toString
h=b1.BA(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.H_(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.ag$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.H_(m,l,k))}g=q.length
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
i=b1.BB(a9)
a9=x.k3
a9.toString
b0=b1.a3c(t,l,b1.BA(a9))
if(u)a8-=i
j.a=b1.a3w(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.ag$}a2=t?a2-a1:a2+(l+a1)}},
cd(d,e){return this.x_(d,e)},
aD(d,e){var x,w=this,v=w.c1&&w.aV!==C.e,u=w.b8
if(v){v=w.cx
v===$&&B.a()
x=w.k3
u.saz(0,d.ky(v,e,new B.H(0,0,0+x.a,0+x.b),w.gPG(),w.aV,u.a))}else{u.saz(0,null)
w.rn(d,e)}},
l(){this.b8.saz(0,null)
this.fg()}}
A.XN.prototype={
am(d){var x,w,v
this.dH(d)
x=this.V$
for(w=y.e;x!=null;){x.am(d)
v=x.e
v.toString
x=w.a(v).ag$}},
ae(d){var x,w,v
this.dh(0)
x=this.V$
for(w=y.e;x!=null;){x.ae(0)
v=x.e
v.toString
x=w.a(v).ag$}}}
A.XO.prototype={}
A.St.prototype={
aI(d){var x=this,w=B.dA(d)
w=new A.PZ(x.e,x.f,x.r,D.bl,x.x,x.y,w,C.d8,C.e,B.al(y.h),0,null,null,B.al(y.d))
w.aG()
w.U(0,null)
return w},
aJ(d,e){var x,w=this
e.sx7(0,w.e)
e.shH(w.f)
e.sUT(0,w.r)
e.salJ(D.bl)
e.salT(w.x)
e.safv(w.y)
x=B.dA(d)
if(e.F!=x){e.F=x
e.X()}if(e.bs!==C.d8){e.bs=C.d8
e.X()}if(C.e!==e.aV){e.aV=C.e
e.aq()
e.b_()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.ev,[A.EW,A.EX])
u(A.H_,B.x)
u(A.ly,B.nK)
u(A.XN,B.y)
u(A.XO,A.XN)
u(A.PZ,A.XO)
u(A.St,B.dY)
x(A.XN,B.aj)
w(A.XO,B.cS)})()
B.bi(b.typeUniverse,JSON.parse('{"ly":{"eC":[],"eE":["y"],"cR":[]},"EW":{"U":[]},"EX":{"U":[]},"PZ":{"cS":["y","ly"],"y":[],"aj":["y","ly"],"u":[],"S":[],"ah":[],"aj.1":"ly","cS.1":"ly","aj.0":"y"},"St":{"dY":[],"ar":[],"c":[]}}'))
var y={a:B.m("az"),h:B.m("ia"),d:B.m("c1"),l:B.m("l<H_>"),e:B.m("ly")};(function constants(){D.bl=new A.EW(0,"start")
D.Te=new A.EW(5,"spaceEvenly")
D.bR=new A.EX(0,"start")
D.Tf=new A.EX(2,"center")})()}
$__dart_deferred_initializers__["E8qUNcfdIw7IIEkqemZbdxEgZ0I="] = $__dart_deferred_initializers__.current

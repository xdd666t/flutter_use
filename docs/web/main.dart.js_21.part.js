self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aWH(d,e){return J.J0(d,e)},
aWC(d){if(d.h("p(0,0)").b(B.aLe()))return B.aLe()
return A.aY4()},
aJl(d,e){var w=A.aWC(d)
return new A.DM(w,new A.apA(d),d.h("@<0>").a5(e).h("DM<1,2>"))},
aEe(d,e,f){var w=e==null?new A.apC(f):e
return new A.wZ(d,w,f.h("wZ<0>"))},
Bf:function Bf(){},
Yo:function Yo(){},
di:function di(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
fx:function fx(d,e,f){var _=this
_.d=d
_.a=e
_.c=_.b=null
_.$ti=f},
Yn:function Yn(){},
DM:function DM(d,e,f){var _=this
_.d=null
_.e=d
_.f=e
_.c=_.b=_.a=0
_.$ti=f},
apA:function apA(d){this.a=d},
lA:function lA(){},
ng:function ng(d,e){this.a=d
this.$ti=e},
tX:function tX(d,e){this.a=d
this.$ti=e},
H9:function H9(d,e){this.a=d
this.$ti=e},
ex:function ex(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=null
_.d=f
_.$ti=g},
Hd:function Hd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=null
_.d=f
_.$ti=g},
tW:function tW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=null
_.d=f
_.$ti=g},
wZ:function wZ(d,e,f){var _=this
_.d=null
_.e=d
_.f=e
_.c=_.b=_.a=0
_.$ti=f},
apC:function apC(d){this.a=d},
apB:function apB(d,e){this.a=d
this.b=e},
Ha:function Ha(){},
Hb:function Hb(){},
Hc:function Hc(){},
rk:function rk(d,e,f){this.a=d
this.b=e
this.c=f},
afc:function afc(d){this.a=d},
aXJ(d,e,f){var w,v,u,t,s,r,q=e.b
if(q<=0||e.a<=0||f.b<=0||f.a<=0)return D.Dk
switch(d.a){case 0:w=f
v=e
break
case 1:u=f.a
t=f.b
s=e.a
w=u/t>s/q?new B.T(s*t/q,t):new B.T(u,q*u/s)
v=e
break
case 2:u=f.a
t=f.b
s=e.a
v=u/t>s/q?new B.T(s,s*t/u):new B.T(q*u/t,q)
w=f
break
case 3:q=e.a
u=f.a
t=q*f.b/u
v=new B.T(q,t)
w=new B.T(u,t*u/q)
break
case 4:u=f.b
t=q*f.a/u
v=new B.T(t,q)
w=new B.T(t*u/q,u)
break
case 5:v=new B.T(Math.min(e.a,f.a),Math.min(q,f.b))
w=v
break
case 6:r=e.a/q
u=f.b
w=q>u?new B.T(u*r,u):e
q=f.a
if(w.a>q)w=new B.T(q,q/r)
v=e
break
default:v=null
w=null}return new A.Mj(v,w)},
pP:function pP(d,e){this.a=d
this.b=e},
Mj:function Mj(d,e){this.a=d
this.b=e},
aLO(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(b2.ga3(b2))return
w=b2.a
v=b2.c-w
u=b2.b
t=b2.d-u
s=new B.T(v,t)
r=a8.gbU(a8)
q=a8.gcz(a8)
if(a6==null)a6=D.ze
p=A.aXJ(a6,new B.T(r,q).fb(0,b4),s)
o=p.a.ai(0,b4)
n=p.b
if(b3!==D.co&&n.j(0,s))b3=D.co
m=$.at().ba()
m.sFo(!1)
if(a3!=null)m.sP4(a3)
m.saH(0,B.aH4(0,0,0,b1))
m.soU(a5)
m.sFj(a9)
l=n.a
k=(v-l)/2
j=n.b
i=(t-j)/2
t=a0.a
t=w+(k+(a7?-t:t)*k)
u+=i+a0.b*i
h=new B.I(t,u,t+l,u+j)
g=b3!==D.co||a7
if(g)a1.cD(0)
u=b3===D.co
if(!u)a1.oi(b2)
if(a7){f=-(w+v/2)
a1.bf(0,-f,0)
a1.iZ(0,-1,1)
a1.bf(0,f,0)}e=a0.aix(o,new B.I(0,0,r,q))
if(u)a1.oC(a8,e,h,m)
else for(w=A.aWS(b2,h,b3),v=w.length,d=0;d<w.length;w.length===v||(0,B.Z)(w),++d)a1.oC(a8,e,w[d],m)
if(g)a1.bF(0)},
aWS(d,e,f){var w,v,u,t,s,r,q=e.c,p=e.a,o=q-p,n=e.d,m=e.b,l=n-m,k=f!==D.Es
if(!k||f===D.Et){w=C.d.iC((d.a-p)/o)
v=C.d.hO((d.c-q)/o)}else{w=0
v=0}if(!k||f===D.Eu){u=C.d.iC((d.b-m)/l)
t=C.d.hO((d.d-n)/l)}else{u=0
t=0}q=B.b([],x.A)
for(s=w;s<=v;++s)for(p=s*o,r=u;r<=t;++r)q.push(e.c_(new B.i(p,r*l)))
return q},
qW:function qW(d,e){this.a=d
this.b=e},
aTF(d,e,f){return f},
jC:function jC(){},
acl:function acl(d,e,f){this.a=d
this.b=e
this.c=f},
acm:function acm(d,e,f){this.a=d
this.b=e
this.c=f},
aci:function aci(d,e){this.a=d
this.b=e},
ach:function ach(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acj:function acj(d){this.a=d},
ack:function ack(d,e){this.a=d
this.b=e},
aui:function aui(d,e){var _=this
_.a=d
_.d=_.c=_.b=null
_.f=_.e=!1
_.r=0
_.w=!1
_.x=e},
aIn(d,e,f,g,h){var w=new A.O1(h,g,B.b([],x.h),B.b([],x.u))
w.ZQ(d,e,f,g,h)
return w},
id:function id(d,e,f){this.a=d
this.b=e
this.c=f},
kG:function kG(d,e){this.a=d
this.b=e},
acn:function acn(){this.b=this.a=null},
N8:function N8(d){this.a=d},
qX:function qX(){},
aco:function aco(){},
acp:function acp(){},
O1:function O1(d,e,f,g){var _=this
_.z=_.y=null
_.Q=d
_.as=e
_.at=null
_.ax=$
_.ay=null
_.ch=0
_.CW=null
_.cx=!1
_.a=f
_.d=_.c=_.b=null
_.f=_.e=!1
_.r=0
_.w=!1
_.x=g},
aeN:function aeN(d,e){this.a=d
this.b=e},
aeO:function aeO(d,e){this.a=d
this.b=e},
aeM:function aeM(d){this.a=d},
UW:function UW(){},
UY:function UY(){},
UX:function UX(){},
Pk:function Pk(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
_.K=_.B=null
_.M=d
_.av=e
_.aB=f
_.u=g
_.F=h
_.bs=null
_.aU=i
_.c1=j
_.b8=k
_.ct=l
_.bX=m
_.cu=n
_.da=o
_.f1=p
_.fR=q
_.cj=r
_.aO=s
_.fS=t
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
_.ch=u
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
P9:function P9(d,e,f,g,h,i){var _=this
_.bn=d
_.cp=e
_.q=f
_.P=null
_.ag=g
_.cv=_.bt=null
_.u$=h
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
_.ch=i
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
Pl:function Pl(d,e,f){var _=this
_.q=d
_.u$=e
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
_.ch=f
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
aXK(d,e){switch(e.a){case 0:return d
case 1:return A.aYB(d)}},
j2(d,e,f,g,h,i,j,k,l){var w=g==null?i:g,v=f==null?i:f,u=d==null?g:d
if(u==null)u=i
return new A.Qy(k,j,i,w,h,v,i>0,e,l,u)},
jY:function jY(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o},
Qy:function Qy(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m},
wU:function wU(d,e,f){this.a=d
this.b=e
this.c=f},
QA:function QA(d,e,f){var _=this
_.c=d
_.d=e
_.a=f
_.b=null},
ld:function ld(){},
oO:function oO(d){this.a=d},
mN:function mN(d,e,f){this.bI$=d
this.af$=e
this.a=f},
cp:function cp(){},
ahL:function ahL(){},
ahM:function ahM(d,e){this.a=d
this.b=e},
Yc:function Yc(){},
Yg:function Yg(){},
PA:function PA(d,e,f,g,h,i,j){var _=this
_.dJ=d
_.bk=e
_.bB=f
_.aM=$
_.aK=!0
_.ca$=g
_.V$=h
_.bv$=i
_.id=null
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
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
PB:function PB(){},
jF:function jF(){},
ahR:function ahR(){},
eK:function eK(d,e,f){var _=this
_.b=null
_.c=!1
_.oR$=d
_.bI$=e
_.af$=f
_.a=null},
jQ:function jQ(){},
ahO:function ahO(d,e,f){this.a=d
this.b=e
this.c=f},
ahQ:function ahQ(d,e){this.a=d
this.b=e},
ahP:function ahP(){},
GJ:function GJ(){},
Xo:function Xo(){},
Xp:function Xp(){},
Ye:function Ye(){},
Yf:function Yf(){},
wo:function wo(){},
Xm:function Xm(){},
zE:function zE(d,e){this.a=d
this.b=e},
rL:function rL(){},
ahU:function ahU(){},
ahT:function ahT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CV:function CV(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.f3=d
_.cw=null
_.ki=_.f0=$
_.le=!1
_.B=e
_.K=f
_.M=g
_.av=h
_.aB=null
_.u=i
_.F=j
_.bs=k
_.ca$=l
_.V$=m
_.bv$=n
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
_.ch=o
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
jg:function jg(){},
uq:function uq(d,e){this.c=d
this.a=e},
ET:function ET(d){var _=this
_.d=null
_.e=$
_.f=!1
_.a=null
_.b=d
_.c=null},
asg:function asg(d){this.a=d},
asl:function asl(d){this.a=d},
ask:function ask(d,e){this.a=d
this.b=e},
asi:function asi(d){this.a=d},
asj:function asj(d){this.a=d},
ash:function ash(d){this.a=d},
lP(d,e,f){return new A.uJ(d,f,e,null)},
uJ:function uJ(d,e,f,g){var _=this
_.e=d
_.r=e
_.c=f
_.a=g},
OZ:function OZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.a=t},
B2:function B2(d,e,f){this.e=d
this.c=e
this.a=f},
Lq:function Lq(d,e){this.a=d
this.$ti=e},
fl(d,e,f,g){var w=null
return new A.o7(A.aTF(w,w,new A.rk(d,1,w)),g,f,e,w)},
o7:function o7(d,e,f,g,h){var _=this
_.c=d
_.r=e
_.w=f
_.as=g
_.a=h},
FV:function FV(d){var _=this
_.f=_.e=_.d=null
_.r=!1
_.w=$
_.x=null
_.y=!1
_.z=$
_.a=_.ax=_.at=_.as=_.Q=null
_.b=d
_.c=null},
avd:function avd(d,e,f){this.a=d
this.b=e
this.c=f},
ave:function ave(d){this.a=d},
avf:function avf(d){this.a=d},
avg:function avg(d){this.a=d},
a_6:function a_6(){},
aIx(d,e,f){return new A.w6(d,!0,f,0,B.b([],x.F),$.bo())},
w6:function w6(d,e,f,g,h,i){var _=this
_.z=d
_.Q=e
_.as=f
_.a=g
_.d=h
_.aM$=0
_.aK$=i
_.B$=_.aR$=0
_.M$=_.K$=!1},
rp:function rp(d,e,f,g,h,i){var _=this
_.f=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},
pd:function pd(d,e,f,g,h,i,j,k,l){var _=this
_.K=d
_.M=null
_.av=e
_.k3=0
_.k4=f
_.ok=null
_.r=g
_.w=h
_.x=i
_.y=j
_.Q=_.z=null
_.as=0
_.ax=_.at=null
_.ay=!1
_.ch=!0
_.CW=!1
_.cx=null
_.cy=!1
_.dx=_.db=null
_.dy=k
_.fr=null
_.aM$=0
_.aK$=l
_.B$=_.aR$=0
_.M$=_.K$=!1},
FM:function FM(d,e){this.b=d
this.a=e},
Cp:function Cp(d){this.a=d},
wa:function wa(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
Wf:function Wf(d){var _=this
_.d=0
_.a=null
_.b=d
_.c=null},
awR:function awR(d){this.a=d},
awS:function awS(d,e){this.a=d
this.b=e},
Dd:function Dd(d,e,f){this.a=d
this.b=e
this.$ti=f},
ajS:function ajS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ajR:function ajR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aFb(d,e){return e},
aJi(d,e){var w=A.aJl(x.p,x.d)
return new A.oN(e,w,d,C.N)},
aUb(d,e,f,g,h){if(e===h-1)return g
return g+(g-f)/(e-d+1)*(h-e-1)},
aRP(d,e){return new A.Bm(e,d,null)},
Qw:function Qw(){},
yt:function yt(d){this.a=d},
yu:function yu(d,e){this.c=d
this.a=e},
H0:function H0(d,e){var _=this
_.f=_.e=_.d=null
_.r=!1
_.e5$=d
_.a=null
_.b=e
_.c=null},
ayc:function ayc(d,e){this.a=d
this.b=e},
QD:function QD(){},
jZ:function jZ(){},
oN:function oN(d,e,f,g){var _=this
_.p1=d
_.p2=e
_.p4=_.p3=null
_.R8=!1
_.ay=null
_.ch=!1
_.d=_.c=_.b=_.a=_.CW=null
_.e=$
_.f=f
_.r=null
_.w=g
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
amQ:function amQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
amO:function amO(){},
amP:function amP(d,e){this.a=d
this.b=e},
amN:function amN(d,e,f){this.a=d
this.b=e
this.c=f},
amR:function amR(d,e){this.a=d
this.b=e},
Bm:function Bm(d,e,f){this.f=d
this.b=e
this.a=f},
a_y:function a_y(){},
Qx:function Qx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ya:function Ya(d,e,f){this.f=d
this.d=e
this.a=f},
Yb:function Yb(d,e,f){this.e=d
this.c=e
this.a=f},
Xn:function Xn(d,e,f){var _=this
_.aw=null
_.cS=d
_.cc=null
_.u$=e
_.id=null
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
_.ch=f
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
aJL(d,e,f,g,h,i,j,k){return new A.tt(e,d,j,h,f,g,i,k,null)},
arA(d,e){var w
switch(e.a){case 0:w=d.N(x.I)
w.toString
return F.aCm(w.w)
case 1:return C.C
case 2:w=d.N(x.I)
w.toString
return F.aCm(w.w)
case 3:return C.C}},
tt:function tt(d,e,f,g,h,i,j,k,l){var _=this
_.e=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.c=k
_.a=l},
ZJ:function ZJ(d,e,f){var _=this
_.bB=!1
_.aM=null
_.p1=$
_.p2=d
_.ay=null
_.ch=!1
_.d=_.c=_.b=_.a=_.CW=null
_.e=$
_.f=e
_.r=null
_.w=f
_.z=_.y=null
_.Q=!1
_.as=!0
_.ax=_.at=!1},
a0_:function a0_(){},
a00:function a00(){},
lf(d,e,f,g,h,i,j){var w,v,u,t,s=null,r=$.bg
if(r==null)r=$.bg=B.d2()
w=B.a4j(new A.apr(e,h),s)
$.cb().toString
v=d==null?C.d1:d
u=f==null?C.em:f
t=g==null?s:g
r=r.f
r===$&&B.a()
return r.UD(C.m,s,C.A,v,!0,!1,s,u,t,C.ow,s,s,!0,i===!0,w,j)},
k0(d,e,f,g){var w=0,v=B.F(x.H),u,t,s,r,q
var $async$k0=B.G(function(h,i){if(h===1)return B.C(i,v)
while(true)switch(w){case 0:q=$.bg
if(q==null)q=$.bg=B.d2()
t=B.a4j(new A.aps(e,d),null)
if(f==null){$.cb().toString
s=C.bC}else s=f
$.cb().toString
r=g==null?C.fB:g
q=q.e
q===$&&B.a()
u=q.uq(C.X,null,C.A,C.d1,!1,!1,s,r,C.em,null,!0,!0,new B.Em(!1,t,null))
w=1
break
case 1:return B.D(u,v)}})
return B.E($async$k0,v)},
es(d,e,f,g){var w=0,v=B.F(x.H),u,t
var $async$es=B.G(function(h,i){if(h===1)return B.C(i,v)
while(true)switch(w){case 0:t=$.bg
u=(t==null?$.bg=B.d2():t).ag8(d,e,f,g)
w=1
break
case 1:return B.D(u,v)}})
return B.E($async$es,v)},
apr:function apr(d,e){this.a=d
this.b=e},
aps:function aps(d,e){this.a=d
this.b=e},
aT7(){if(!!self.location)return self.location.href
return null},
arp(){var w=A.aT7()
if(w!=null)return B.p_(w,0,null)
throw B.e(B.ab("'Uri.base' is not supported"))},
aYB(d){switch(d.a){case 0:return C.dU
case 1:return C.lo
case 2:return C.ln}},
aTP(d){var w=d.fc(x.z)
w=w==null?null:w.gaE()
x.m.a(w)
if(w==null)return!1
w=w.r
return w.r.Sc(w.fr.gft()+w.as,w.it(),d)}},B,J,C,E,I,G,F,H,D,K
A=a.updateHolder(c[43],A)
B=c[0]
J=c[1]
C=c[2]
E=c[60]
I=c[107]
G=c[56]
F=c[50]
H=c[97]
D=c[90]
K=c[70]
A.Bf.prototype={
iL(d,e,f){return B.oj(this,e,this.$ti.c,f)},
A(d,e){var w
for(w=this.$ti,w=new A.ex(this,B.b([],w.h("l<di<1>>")),this.c,w.h("@<1>").a5(w.h("di<1>")).h("ex<1,2>"));w.t();)if(J.f(w.gL(w),e))return!0
return!1},
dN(d,e){return B.og(this,!0,this.$ti.c)},
dM(d){return this.dN(d,!0)},
iU(d){return B.r7(this,this.$ti.c)},
gp(d){var w,v=this.$ti,u=new A.ex(this,B.b([],v.h("l<di<1>>")),this.c,v.h("@<1>").a5(v.h("di<1>")).h("ex<1,2>"))
for(w=0;u.t();)++w
return w},
ga3(d){var w=this.$ti
return!new A.ex(this,B.b([],w.h("l<di<1>>")),this.c,w.h("@<1>").a5(w.h("di<1>")).h("ex<1,2>")).t()},
gce(d){return this.d!=null},
fw(d,e){return B.aEc(this,e,this.$ti.c)},
gT(d){var w=this.$ti,v=new A.ex(this,B.b([],w.h("l<di<1>>")),this.c,w.h("@<1>").a5(w.h("di<1>")).h("ex<1,2>"))
if(!v.t())throw B.e(B.ck())
return v.gL(v)},
gac(d){var w,v=this.$ti,u=new A.ex(this,B.b([],v.h("l<di<1>>")),this.c,v.h("@<1>").a5(v.h("di<1>")).h("ex<1,2>"))
if(!u.t())throw B.e(B.ck())
do w=u.gL(u)
while(u.t())
return w},
b6(d,e){var w,v,u,t=this,s="index"
B.fz(e,s,x.p)
B.eJ(e,s)
for(w=t.$ti,w=new A.ex(t,B.b([],w.h("l<di<1>>")),t.c,w.h("@<1>").a5(w.h("di<1>")).h("ex<1,2>")),v=0;w.t();){u=w.gL(w)
if(e===v)return u;++v}throw B.e(B.ds(e,v,t,null,s))},
k(d){return B.aDC(this,"(",")")}}
A.Yo.prototype={
gdC(d){return this.a}}
A.di.prototype={}
A.fx.prototype={
aae(d){var w=this,v=w.$ti
v=new A.fx(d,w.a,v.h("@<1>").a5(v.z[1]).h("fx<1,2>"))
v.b=w.b
v.c=w.c
return v},
k(d){return"MapEntry("+B.k(this.a)+": "+B.k(this.d)+")"},
$iax:1,
gn(d){return this.d}}
A.Yn.prototype={
ka(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.gdG()
if(j==null){l.B1(d,d)
return-1}w=l.gB0()
for(v=k,u=j,t=v,s=t,r=s,q=r;!0;){v=w.$2(u.a,d)
if(v>0){p=u.b
if(p==null)break
v=w.$2(p.a,d)
if(v>0){u.b=p.c
p.c=u
o=p.b
if(o==null){u=p
break}u=p
p=o}if(q==null)r=u
else q.b=u
q=u
u=p}else{if(v<0){n=u.c
if(n==null)break
v=w.$2(n.a,d)
if(v<0){u.c=n.b
n.b=u
m=n.c
if(m==null){u=n
break}u=n
n=m}if(s==null)t=u
else s.c=u}else break
s=u
u=n}}if(s!=null){s.c=u.b
u.b=t}if(q!=null){q.b=u.c
u.c=r}if(l.gdG()!==u){l.sdG(u);++l.c}return v},
abv(d){var w,v,u=d.b
for(w=d;u!=null;w=u,u=v){w.b=u.c
u.c=w
v=u.b}return w},
N8(d){var w,v,u=d.c
for(w=d;u!=null;w=u,u=v){w.c=u.b
u.b=w
v=u.c}return w},
ih(d,e){var w,v,u,t,s=this
if(s.gdG()==null)return null
if(s.ka(e)!==0)return null
w=s.gdG()
v=w.b;--s.a
u=w.c
if(v==null)s.sdG(u)
else{t=s.N8(v)
t.c=u
s.sdG(t)}++s.b
return w},
As(d,e){var w,v=this;++v.a;++v.b
w=v.gdG()
if(w==null){v.sdG(d)
return}if(e<0){d.b=w
d.c=w.c
w.c=null}else{d.c=w
d.b=w.b
w.b=null}v.sdG(d)},
gK9(){var w=this,v=w.gdG()
if(v==null)return null
w.sdG(w.abv(v))
return w.gdG()},
gLp(){var w=this,v=w.gdG()
if(v==null)return null
w.sdG(w.N8(v))
return w.gdG()},
qh(d){return this.Dp(d)&&this.ka(d)===0},
B1(d,e){return this.gB0().$2(d,e)},
Dp(d){return this.gamX().$1(d)}}
A.DM.prototype={
i(d,e){var w=this
if(!w.f.$1(e))return null
if(w.d!=null)if(w.ka(e)===0)return w.d.d
return null},
D(d,e){var w
if(!this.f.$1(e))return null
w=this.ih(0,e)
if(w!=null)return w.d
return null},
m(d,e,f){var w,v=this,u=v.ka(e)
if(u===0){v.d=v.d.aae(f);++v.c
return}w=v.$ti
v.As(new A.fx(f,e,w.h("@<1>").a5(w.z[1]).h("fx<1,2>")),u)},
c4(d,e,f){var w,v,u,t,s=this,r=s.ka(e)
if(r===0)return s.d.d
w=s.b
v=s.c
u=f.$0()
if(w!==s.b)throw B.e(B.bX(s))
if(v!==s.c)r=s.ka(e)
t=s.$ti
s.As(new A.fx(u,e,t.h("@<1>").a5(t.z[1]).h("fx<1,2>")),r)
return u},
ga3(d){return this.d==null},
gce(d){return this.d!=null},
Y(d,e){var w,v,u=this.$ti
u=u.h("@<1>").a5(u.z[1])
w=new A.tW(this,B.b([],u.h("l<fx<1,2>>")),this.c,u.h("tW<1,2>"))
for(;w.t();){v=w.gL(w)
e.$2(v.gdC(v),v.gn(v))}},
gp(d){return this.a},
ae(d,e){return this.qh(e)},
gbO(d){var w=this.$ti
return new A.ng(this,w.h("@<1>").a5(w.h("fx<1,2>")).h("ng<1,2>"))},
gaV(d){var w=this.$ti
return new A.tX(this,w.h("@<1>").a5(w.z[1]).h("tX<1,2>"))},
gfj(d){var w=this.$ti
return new A.H9(this,w.h("@<1>").a5(w.z[1]).h("H9<1,2>"))},
agX(){if(this.d==null)return null
return this.gK9().a},
Rp(){if(this.d==null)return null
return this.gLp().a},
$iaP:1,
B1(d,e){return this.e.$2(d,e)},
Dp(d){return this.f.$1(d)},
gdG(){return this.d},
gB0(){return this.e},
sdG(d){return this.d=d}}
A.lA.prototype={
gL(d){var w=this.b
if(w.length===0){B.n(this).h("lA.T").a(null)
return null}return this.BG(C.b.gac(w))},
t(){var w,v,u=this,t=u.c,s=u.a,r=s.b
if(t!==r){if(t==null){u.c=r
w=s.gdG()
for(t=u.b;w!=null;){t.push(w)
w=w.b}return t.length!==0}throw B.e(B.bX(s))}t=u.b
if(t.length===0)return!1
if(u.d!==s.c){r=C.b.gac(t)
C.b.a2(t)
s.ka(r.a)
r=s.gdG()
r.toString
t.push(r)
u.d=s.c}w=C.b.gac(t)
v=w.c
if(v!=null){for(;v!=null;){t.push(v)
v=v.b}return!0}t.pop()
while(!0){if(!(t.length!==0&&C.b.gac(t).c===w))break
w=t.pop()}return t.length!==0}}
A.ng.prototype={
gp(d){return this.a.a},
ga3(d){return this.a.a===0},
gan(d){var w=this.a,v=this.$ti
return new A.ex(w,B.b([],v.h("l<2>")),w.c,v.h("@<1>").a5(v.z[1]).h("ex<1,2>"))},
A(d,e){return this.a.qh(e)},
iU(d){var w=this.a,v=this.$ti,u=A.aEe(w.e,w.f,v.c)
u.a=w.a
u.d=u.Jw(w.d,v.z[1])
return u}}
A.tX.prototype={
gp(d){return this.a.a},
ga3(d){return this.a.a===0},
gan(d){var w=this.a,v=this.$ti
v=v.h("@<1>").a5(v.z[1])
return new A.Hd(w,B.b([],v.h("l<fx<1,2>>")),w.c,v.h("Hd<1,2>"))}}
A.H9.prototype={
gp(d){return this.a.a},
ga3(d){return this.a.a===0},
gan(d){var w=this.a,v=this.$ti
v=v.h("@<1>").a5(v.z[1])
return new A.tW(w,B.b([],v.h("l<fx<1,2>>")),w.c,v.h("tW<1,2>"))}}
A.ex.prototype={
BG(d){return d.a}}
A.Hd.prototype={
BG(d){return d.d}}
A.tW.prototype={
BG(d){return d}}
A.wZ.prototype={
gan(d){var w=this.$ti
return new A.ex(this,B.b([],w.h("l<di<1>>")),this.c,w.h("@<1>").a5(w.h("di<1>")).h("ex<1,2>"))},
gp(d){return this.a},
ga3(d){return this.d==null},
gce(d){return this.d!=null},
gT(d){if(this.a===0)throw B.e(B.ck())
return this.gK9().a},
gac(d){if(this.a===0)throw B.e(B.ck())
return this.gLp().a},
A(d,e){return this.f.$1(e)&&this.ka(this.$ti.c.a(e))===0},
H(d,e){return this.d7(0,e)},
d7(d,e){var w=this.ka(e)
if(w===0)return!1
this.As(new A.di(e,this.$ti.h("di<1>")),w)
return!0},
D(d,e){if(!this.f.$1(e))return!1
return this.ih(0,this.$ti.c.a(e))!=null},
U(d,e){var w,v
for(w=J.aG(e.ghc()),v=B.n(e),v=v.h("@<1>").a5(v.z[1]).z[1];w.t();)this.d7(0,v.a(w.gL(w)))},
ta(d,e){var w,v=this,u=v.$ti,t=A.aEe(v.e,v.f,u.c)
for(u=new A.ex(v,B.b([],u.h("l<di<1>>")),v.c,u.h("@<1>").a5(u.h("di<1>")).h("ex<1,2>"));u.t();){w=u.gL(u)
if(e.A(0,w))t.d7(0,w)}return t},
Jw(d,e){var w
if(d==null)return null
w=new A.di(d.a,this.$ti.h("di<1>"))
new A.apB(this,e).$2(d,w)
return w},
iU(d){var w=this,v=w.$ti,u=A.aEe(w.e,w.f,v.c)
u.a=w.a
u.d=w.Jw(w.d,v.h("di<1>"))
return u},
k(d){return B.Bd(this,"{","}")},
$iac:1,
$iw:1,
$ibD:1,
B1(d,e){return this.e.$2(d,e)},
Dp(d){return this.f.$1(d)},
gdG(){return this.d},
gB0(){return this.e},
sdG(d){return this.d=d}}
A.Ha.prototype={}
A.Hb.prototype={}
A.Hc.prototype={}
A.rk.prototype={
FO(d){return new B.dO(this,x.i)},
ya(d,e,f){var w=B.aEg(null,x.r)
return A.aIn(new B.i0(w,B.n(w).h("i0<1>")),this.vk(e,null,f,w),e.a,null,e.b)},
yb(d,e){var w=B.aEg(null,x.r)
return A.aIn(new B.i0(w,B.n(w).h("i0<1>")),this.vk(d,e,null,w),d.a,null,d.b)},
vk(d,e,f,g){return this.a7E(d,e,f,g)},
a7E(d,e,f,g){var w=0,v=B.F(x.E),u,t,s
var $async$vk=B.G(function(h,i){if(h===1)return B.C(i,v)
while(true)switch(w){case 0:t=A.arp().a4(d.a)
s=$.at()
u=s.aiE(t,new A.afc(g))
w=1
break
case 1:return B.D(u,v)}})
return B.E($async$vk,v)},
j(d,e){if(e==null)return!1
if(J.a9(e)!==B.Q(this))return!1
return e instanceof A.rk&&e.a===this.a&&e.b===this.b},
gE(d){return B.a6(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){return'NetworkImage("'+this.a+'", scale: '+this.b+")"}}
A.pP.prototype={
J(){return"BoxFit."+this.b}}
A.Mj.prototype={}
A.qW.prototype={
J(){return"ImageRepeat."+this.b}}
A.jC.prototype={
a4(d){var w=new A.acn()
this.a1i(d,new A.acl(this,d,w),new A.acm(this,d,w))
return w},
a1i(d,e,f){var w,v,u,t,s,r={}
r.a=null
r.b=!1
w=new A.aci(r,f)
v=null
try{v=this.FO(d)}catch(s){u=B.an(s)
t=B.aI(s)
w.$2(u,t)
return}v.b9(new A.ach(r,this,e,w),x.H).jk(w)},
tF(d,e,f,g){var w,v
if(e.a!=null){w=$.ms.jp$
w===$&&B.a()
w.S7(0,f,new A.acj(e),g)
return}w=$.ms.jp$
w===$&&B.a()
v=w.S7(0,f,new A.ack(this,f),g)
if(v!=null)e.Hx(v)},
ya(d,e,f){throw B.e(B.ab("Implement loadBuffer for faster image loading"))},
yb(d,e){return this.ya(0,d,$.ms.gaiz())},
k(d){return"ImageConfiguration()"}}
A.aui.prototype={}
A.id.prototype={
iq(d){return new A.id(this.a.iq(0),this.b,this.c)},
gUH(){var w=this.a
return w.gcz(w)*w.gbU(w)*4},
l(){this.a.l()},
k(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.k(0)+" @ "+B.jj(this.b)+"x"},
gE(d){return B.a6(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d,e){var w=this
if(e==null)return!1
if(J.a9(e)!==B.Q(w))return!1
return e instanceof A.id&&e.a===w.a&&e.b===w.b&&e.c==w.c}}
A.kG.prototype={}
A.acn.prototype={
Hx(d){var w,v=this
v.a=d
w=v.b
if(w!=null){v.b=null
d.f=!0
C.b.Y(w,d.gwp(d))
v.a.f=!1}},
S(d,e){var w=this.a
if(w!=null)return w.S(0,e)
w=this.b;(w==null?this.b=B.b([],x.h):w).push(e)},
I(d,e){var w,v=this.a
if(v!=null)return v.I(0,e)
for(w=0;v=this.b,w<v.length;++w)if(J.f(v[w],e)){v=this.b
v.toString
C.b.iQ(v,w)
break}}}
A.N8.prototype={
ZL(d){++this.a.r},
l(){var w=this.a;--w.r
w.vq()
this.a=null}}
A.qX.prototype={
S(d,e){var w,v,u,t,s,r,q,p=this
if(p.w)B.a8(B.aq(y.a))
p.e=!0
p.a.push(e)
s=p.b
if(s!=null)try{s=s.iq(0)
r=p.f
e.a.$2(s,!r)}catch(q){w=B.an(q)
v=B.aI(q)
p.Ss(B.bG("by a synchronously-called image listener"),w,v)}s=p.c
if(s!=null&&e.c!=null)try{r=e.c
r.toString
r.$2(s.a,s.b)}catch(w){u=B.an(w)
t=B.aI(w)
if(!J.f(u,p.c.a))B.dJ(new B.bS(u,t,"image resource service",B.bG("by a synchronously-called image error listener"),null,!1))}},
Fv(){if(this.w)B.a8(B.aq(y.a));++this.r
return new A.N8(this)},
I(d,e){var w,v,u,t,s,r=this
if(r.w)B.a8(B.aq(y.a))
for(w=r.a,v=0;v<w.length;++v)if(J.f(w[v],e)){C.b.iQ(w,v)
break}if(w.length===0){w=r.x
u=B.b(w.slice(0),B.af(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,B.Z)(u),++s)u[s].$0()
C.b.a2(w)
r.vq()}},
vq(){var w,v=this
if(!v.e||v.w||v.a.length!==0||v.r!==0)return
w=v.b
if(w!=null)w.a.l()
v.b=null
v.w=!0},
adw(d){if(this.w)B.a8(B.aq(y.a))
this.x.push(d)},
alg(d){if(this.w)B.a8(B.aq(y.a))
C.b.D(this.x,d)},
Ub(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.w)B.a8(B.aq(y.a))
t=m.b
if(t!=null)t.a.l()
m.b=d
t=m.a
if(t.length===0)return
s=B.aJ(t,!0,x.J)
for(t=s.length,r=d.a,q=d.b,p=d.c,o=0;o<t;++o){w=s[o]
try{w.ak1(new A.id(r.iq(0),q,p),!1)}catch(n){v=B.an(n)
u=B.aI(n)
m.Ss(B.bG("by an image listener"),v,u)}}},
tE(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m="image resource service"
this.c=new B.bS(e,h,m,d,f,g)
s=this.a
r=x.W
q=B.aJ(new B.f0(new B.ao(s,new A.aco(),B.af(s).h("ao<1,~(B,cZ?)?>")),r),!0,r.h("w.E"))
w=!1
for(s=q.length,p=0;p<s;++p){v=q[p]
try{v.$2(e,h)
w=!0}catch(o){u=B.an(o)
t=B.aI(o)
if(!J.f(u,e)){r=B.bG("when reporting an error to an image listener")
n=$.jk()
if(n!=null)n.$1(new B.bS(u,t,m,r,null,!1))}}}if(!w){s=this.c
s.toString
B.dJ(s)}},
Ss(d,e,f){return this.tE(d,e,null,!1,f)},
aly(d){var w,v,u,t
if(this.w)B.a8(B.aq(y.a))
w=this.a
if(w.length!==0){v=x.Y
u=B.aJ(new B.f0(new B.ao(w,new A.acp(),B.af(w).h("ao<1,~(kG)?>")),v),!0,v.h("w.E"))
for(w=u.length,t=0;t<w;++t)u[t].$1(d)}}}
A.O1.prototype={
ZQ(d,e,f,g,h){var w=this
w.d=f
e.h4(w.ga4c(),new A.aeN(w,g),x.H)
w.y=d.mW(w.galx(),new A.aeO(w,g))},
a4d(d){this.z=d
if(this.a.length!==0)this.nL()},
a4_(d){var w,v,u,t=this
t.cx=!1
if(t.a.length===0)return
w=t.ay
if(w!=null){v=t.ax
v===$&&B.a()
v=d.a-v.a>=w.a}else v=!0
if(v){w=t.at
t.K_(new A.id(w.gjw(w).iq(0),t.Q,t.d))
t.ax=d
w=t.at
t.ay=w.gED(w)
w=t.at
w.gjw(w).l()
t.at=null
u=C.k.i9(t.ch,t.z.gxF())
if(t.z.gGr()===-1||u<=t.z.gGr())t.nL()
return}w.toString
v=t.ax
v===$&&B.a()
t.CW=B.cl(new B.aS(C.d.be((w.a-(d.a-v.a))*$.aL3)),new A.aeM(t))},
nL(){var w=0,v=B.F(x.H),u,t=2,s,r=this,q,p,o,n,m
var $async$nL=B.G(function(d,e){if(d===1){s=e
w=t}while(true)switch(w){case 0:n=r.at
if(n!=null)n.gjw(n).l()
r.at=null
t=4
w=7
return B.A(r.z.ni(),$async$nL)
case 7:r.at=e
t=2
w=6
break
case 4:t=3
m=s
q=B.an(m)
p=B.aI(m)
r.tE(B.bG("resolving an image frame"),q,r.as,!0,p)
w=1
break
w=6
break
case 3:w=2
break
case 6:if(r.z.gxF()===1){if(r.a.length===0){w=1
break}n=r.at
r.K_(new A.id(n.gjw(n).iq(0),r.Q,r.d))
n=r.at
n.gjw(n).l()
r.at=null
w=1
break}r.MD()
case 1:return B.D(u,v)
case 2:return B.C(s,v)}})
return B.E($async$nL,v)},
MD(){if(this.cx)return
this.cx=!0
$.bN.zA(this.ga3Z())},
K_(d){this.Ub(d);++this.ch},
S(d,e){var w,v=this
if(v.a.length===0){w=v.z
if(w!=null)w=v.b==null||w.gxF()>1
else w=!1}else w=!1
if(w)v.nL()
v.W2(0,e)},
I(d,e){var w,v=this
v.W3(0,e)
if(v.a.length===0){w=v.CW
if(w!=null)w.al(0)
v.CW=null}},
vq(){var w,v=this
v.W1()
if(v.w){w=v.y
if(w!=null)w.lw(null)
w=v.y
if(w!=null)w.al(0)
v.y=null}}}
A.UW.prototype={}
A.UY.prototype={}
A.UX.prototype={}
A.Pk.prototype={
a70(){var w=this
if(w.B!=null)return
w.B=w.cu
w.K=!1},
Lz(){this.K=this.B=null
this.aq()},
sjw(d,e){var w=this,v=w.M
if(e==v)return
if(e!=null&&v!=null&&e.Ra(v)){e.l()
return}v=w.M
if(v!=null)v.l()
w.M=e
w.aq()
if(w.aB==null||w.u==null)w.X()},
sbU(d,e){if(e==this.aB)return
this.aB=e
this.X()},
scz(d,e){if(e==this.u)return
this.u=e
this.X()},
sTF(d,e){if(e===this.F)return
this.F=e
this.X()},
acE(){this.bs=null},
saH(d,e){return},
spd(d,e){return},
soU(d){if(d===this.b8)return
this.b8=d
this.aq()},
saev(d){return},
sxz(d){if(d==this.bX)return
this.bX=d
this.aq()},
shI(d){if(d.j(0,this.cu))return
this.cu=d
this.Lz()},
salr(d,e){if(e===this.da)return
this.da=e
this.aq()},
saec(d){return},
sFj(d){if(d===this.fR)return
this.fR=d
this.aq()},
sajn(d){return},
sbw(d){if(this.aO==d)return
this.aO=d
this.Lz()},
sFo(d){return},
N5(d){var w,v,u=this,t=u.aB
d=B.ny(u.u,t).mG(d)
t=u.M
if(t==null)return new B.T(B.U(0,d.a,d.b),B.U(0,d.c,d.d))
t=t.gbU(t)
w=u.F
v=u.M
return d.aeG(new B.T(t/w,v.gcz(v)/u.F))},
hR(d){return!0},
c9(d){return this.N5(d)},
bo(){this.k3=this.N5(x.k.a(B.u.prototype.ga0.call(this)))},
am(d){this.dF(d)},
ad(d){this.dh(0)},
aD(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
if(h.M==null)return
h.a70()
w=d.gbW(d)
v=h.k3
u=e.a
t=e.b
s=v.a
v=v.b
r=h.M
r.toString
q=h.av
p=h.F
o=h.bs
n=h.bX
m=h.B
m.toString
l=h.f1
k=h.da
j=h.K
j.toString
i=h.fR
A.aLO(m,w,l,o,q,h.b8,n,j,r,i,!1,1,new B.I(u,t,u+s,t+v),k,p)},
l(){var w=this.M
if(w!=null)w.l()
this.M=null
this.fe()}}
A.P9.prototype={
sDR(d,e){if(this.bn.j(0,e))return
this.bn=e
this.nW()},
sbw(d){if(this.cp==d)return
this.cp=d
this.nW()},
gnM(){var w=this.bn,v=this.k3
return w.cM(new B.I(0,0,0+v.a,0+v.b))},
by(d,e){var w=this
if(w.q!=null){w.hF()
if(!w.P.A(0,e))return!1}return w.i8(d,e)},
aD(d,e){var w,v,u=this,t=u.u$
if(t!=null){w=u.ch
if(u.ag!==C.e){u.hF()
t=u.cx
t===$&&B.a()
v=u.P
w.saz(0,d.Gc(t,e,new B.I(v.a,v.b,v.c,v.d),v,B.er.prototype.ge7.call(u),u.ag,x.b.a(w.a)))}else{d.cK(t,e)
w.saz(0,null)}}else u.ch.saz(0,null)}}
A.Pl.prototype={
sais(d,e){if(e===this.q)return
this.q=e
this.b_()},
fg(d){this.hu(d)
d.k1=this.q
d.d=!0}}
A.jY.prototype={
gRh(){return!1},
qX(d,e,f){if(d==null)d=this.w
switch(B.bE(this.a).a){case 0:return new B.az(f,e,d,d)
case 1:return new B.az(d,d,f,e)}},
adO(){return this.qX(null,1/0,0)},
adP(d,e){return this.qX(null,d,e)},
j(d,e){var w=this
if(e==null)return!1
if(w===e)return!0
if(!(e instanceof A.jY))return!1
return e.a===w.a&&e.b===w.b&&e.d===w.d&&e.f===w.f&&e.r===w.r&&e.w===w.w&&e.x===w.x&&e.y===w.y&&e.Q===w.Q&&e.z===w.z},
gE(d){var w=this
return B.a6(w.a,w.b,w.d,w.f,w.r,w.w,w.x,w.y,w.Q,w.z,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d){var w=this,v=B.b([w.a.k(0),w.b.k(0),w.c.k(0),"scrollOffset: "+C.d.ab(w.d,1),"remainingPaintExtent: "+C.d.ab(w.r,1)],x.s),u=w.f
if(u!==0)v.push("overlap: "+C.d.ab(u,1))
v.push("crossAxisExtent: "+C.d.ab(w.w,1))
v.push("crossAxisDirection: "+w.x.k(0))
v.push("viewportMainAxisExtent: "+C.d.ab(w.y,1))
v.push("remainingCacheExtent: "+C.d.ab(w.Q,1))
v.push("cacheOrigin: "+C.d.ab(w.z,1))
return"SliverConstraints("+C.b.bC(v,", ")+")"}}
A.Qy.prototype={
cB(){return"SliverGeometry"}}
A.wU.prototype={}
A.QA.prototype={
k(d){return B.Q(this.a).k(0)+"@(mainAxis: "+B.k(this.c)+", crossAxis: "+B.k(this.d)+")"}}
A.ld.prototype={
k(d){var w=this.a
return"layoutOffset="+(w==null?"None":C.d.ab(w,1))}}
A.oO.prototype={
k(d){return"paintOffset="+B.k(this.a)}}
A.mN.prototype={}
A.cp.prototype={
ga0(){return x.S.a(B.u.prototype.ga0.call(this))},
glR(){return this.gi_()},
gi_(){var w=this,v=x.S
switch(B.bE(v.a(B.u.prototype.ga0.call(w)).a).a){case 0:return new B.I(0,0,0+w.id.c,0+v.a(B.u.prototype.ga0.call(w)).w)
case 1:return new B.I(0,0,0+v.a(B.u.prototype.ga0.call(w)).w,0+w.id.c)}},
tx(){},
QN(d,e,f){var w=this
if(f>=0&&f<w.id.r&&e>=0&&e<x.S.a(B.u.prototype.ga0.call(w)).w)if(w.Fe(d,e,f)||!1){d.H(0,new A.QA(f,e,w))
return!0}return!1},
Fe(d,e,f){return!1},
hN(d,e,f){var w=d.d,v=d.r,u=w+v
return B.U(B.U(f,w,u)-B.U(e,w,u),0,v)},
mt(d,e,f){var w=d.d,v=w+d.z,u=d.Q,t=w+u
return B.U(B.U(f,v,t)-B.U(e,v,t),0,u)},
oe(d){return 0},
DY(d){return 0},
dj(d,e){},
iF(d,e){}}
A.ahL.prototype={
Kt(d){var w
switch(d.a.a){case 0:case 3:w=!1
break
case 2:case 1:w=!0
break
default:w=null}switch(d.b.a){case 0:break
case 1:w=!w
break}return w},
aic(d,e,f,g){var w,v,u,t,s,r=this,q={},p=x.S,o=r.Kt(p.a(B.u.prototype.ga0.call(r))),n=e.e
n.toString
n=x.D.a(n).a
n.toString
w=n-p.a(B.u.prototype.ga0.call(r)).d
v=r.oe(e)
u=g-w
t=f-v
s=q.a=null
switch(B.bE(p.a(B.u.prototype.ga0.call(r)).a).a){case 0:if(!o){p=e.k3.a
u=p-u
w=r.id.c-p-w}s=new B.i(w,v)
q.a=new B.i(u,t)
break
case 1:if(!o){p=e.k3.b
u=p-u
w=r.id.c-p-w}s=new B.i(v,w)
q.a=new B.i(t,u)
break}return d.adH(new A.ahM(q,e),s)}}
A.Yc.prototype={}
A.Yg.prototype={
ad(d){this.uB(0)}}
A.PA.prototype={
gaiZ(){return x.S.a(B.u.prototype.ga0.call(this)).y*this.dJ},
stS(d){if(this.dJ===d)return
this.dJ=d
this.X()}}
A.PB.prototype={
Tn(d,e){var w,v
if(e>0){w=d/e
v=C.d.be(w)
if(Math.abs(w*e-v*e)<1e-10)return v
return C.d.iC(w)}return 0},
H8(d,e){var w,v
if(e>0){w=d/e-1
v=C.d.be(w)
if(Math.abs(w*e-v*e)<1e-10)return Math.max(0,v)
return Math.max(0,C.d.hO(w))}return 0},
a0B(d){var w,v=this.V$,u=B.n(this).h("aj.1"),t=x.D,s=0
while(!0){if(v!=null){w=v.e
w.toString
w=t.a(w).b
w.toString
w=w<d}else w=!1
if(!w)break;++s
w=v.e
w.toString
v=u.a(w).af$}return s},
a0C(d){var w,v=this.bv$,u=B.n(this).h("aj.1"),t=x.D,s=0
while(!0){if(v!=null){w=v.e
w.toString
w=t.a(w).b
w.toString
w=w>d}else w=!1
if(!w)break;++s
w=v.e
w.toString
v=u.a(w).bI$}return s},
bo(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=x.S.a(B.u.prototype.ga0.call(a4)),a7=a4.bk
a7.R8=!1
w=a4.gaiZ()
v=a6.d
u=v+a6.z
t=u+a6.Q
s=a6.adP(w,w)
r=a4.Tn(u,w)
q=isFinite(t)?a4.H8(t,w):a5
if(a4.V$!=null){p=a4.a0B(r)
a4.mv(p,q!=null?a4.a0C(q):0)}else a4.mv(0,0)
if(a4.V$==null)if(!a4.DE(r,w*r)){o=r<=0?0:a7.gr5()*w
a4.id=A.j2(a5,!1,a5,a5,o,0,0,o,a5)
a7.mz()
return}n=a4.V$
n.toString
n=n.e
n.toString
m=x.D
n=m.a(n).b
n.toString
l=n-1
k=a5
for(;l>=r;--l){j=a4.QY(s)
if(j==null){a4.id=A.j2(a5,!1,a5,a5,0,0,0,0,l*w)
return}n=j.e
n.toString
m.a(n).a=w*l
if(k==null)k=j}if(k==null){a4.V$.fn(s)
k=a4.V$
n=k.e
n.toString
m.a(n).a=w*r}n=k.e
n.toString
n=m.a(n).b
n.toString
l=n+1
n=B.n(a4).h("aj.1")
i=q!=null
while(!0){if(!(!i||l<=q)){h=1/0
break}g=k.e
g.toString
j=n.a(g).af$
if(j!=null){g=j.e
g.toString
g=m.a(g).b
g.toString
g=g!==l}else g=!0
if(g){j=a4.QW(s,k)
if(j==null){h=l*w
break}}else j.fn(s)
g=j.e
g.toString
m.a(g)
f=g.b
f.toString
g.a=w*f;++l
k=j}n=a4.bv$
n.toString
n=n.e
n.toString
n=m.a(n).b
n.toString
e=w*r
d=w*(n+1)
h=Math.min(h,a7.EM(a6,r,n,e,d))
a0=a4.hN(a6,e,d)
a1=a4.mt(a6,e,d)
a2=v+a6.r
a3=isFinite(a2)?a4.H8(a2,w):a5
a4.id=A.j2(a1,a3!=null&&n>=a3||v>0,a5,a5,h,a0,0,h,a5)
if(h===d)a7.R8=!0
a7.mz()}}
A.jF.prototype={$icQ:1}
A.ahR.prototype={
dQ(d){}}
A.eK.prototype={
k(d){var w=this.b,v=this.oR$?"keepAlive; ":""
return"index="+B.k(w)+"; "+v+this.XH(0)}}
A.jQ.prototype={
dQ(d){if(!(d.e instanceof A.eK))d.e=new A.eK(!1,null,null)},
fI(d){var w
this.In(d)
w=d.e
w.toString
if(!x.D.a(w).c)this.bk.El(x.x.a(d))},
Fg(d,e,f){this.A4(0,e,f)},
tl(d,e){var w,v=this,u=d.e
u.toString
x.D.a(u)
if(!u.c){v.VM(d,e)
v.bk.El(d)
v.X()}else{w=v.bB
if(w.i(0,u.b)===d)w.D(0,u.b)
v.bk.El(d)
u=u.b
u.toString
w.m(0,u,d)}},
D(d,e){var w=e.e
w.toString
x.D.a(w)
if(!w.c){this.VN(0,e)
return}this.bB.D(0,w.b)
this.ix(e)},
Ba(d,e){this.Fl(new A.ahO(this,d,e),x.S)},
JD(d){var w,v=this,u=d.e
u.toString
x.D.a(u)
if(u.oR$){v.D(0,d)
w=u.b
w.toString
v.bB.m(0,w,d)
d.e=u
v.In(d)
u.c=!0}else v.bk.Sg(d)},
am(d){var w,v,u
this.Yw(d)
for(w=this.bB,w=w.gaV(w),v=B.n(w),v=v.h("@<1>").a5(v.z[1]),w=new B.cf(J.aG(w.a),w.b,v.h("cf<1,2>")),v=v.z[1];w.t();){u=w.a;(u==null?v.a(u):u).am(d)}},
ad(d){var w,v,u
this.Yx(0)
for(w=this.bB,w=w.gaV(w),v=B.n(w),v=v.h("@<1>").a5(v.z[1]),w=new B.cf(J.aG(w.a),w.b,v.h("cf<1,2>")),v=v.z[1];w.t();){u=w.a;(u==null?v.a(u):u).ad(0)}},
iP(){this.I0()
var w=this.bB
w.gaV(w).Y(0,this.gGm())},
aS(d){var w
this.uy(d)
w=this.bB
w.gaV(w).Y(0,d)},
eN(d){this.uy(d)},
DE(d,e){var w
this.Ba(d,null)
w=this.V$
if(w!=null){w=w.e
w.toString
x.D.a(w).a=e
return!0}this.bk.R8=!0
return!1},
Or(){return this.DE(0,0)},
Fh(d,e){var w,v,u,t=this,s=t.V$
s.toString
s=s.e
s.toString
w=x.D
s=w.a(s).b
s.toString
v=s-1
t.Ba(v,null)
s=t.V$
s.toString
u=s.e
u.toString
u=w.a(u).b
u.toString
if(u===v){s.bD(d,e)
return t.V$}t.bk.R8=!0
return null},
QY(d){return this.Fh(d,!1)},
QX(d,e,f){var w,v,u,t=e.e
t.toString
w=x.D
t=w.a(t).b
t.toString
v=t+1
this.Ba(v,e)
t=e.e
t.toString
u=B.n(this).h("aj.1").a(t).af$
if(u!=null){t=u.e
t.toString
t=w.a(t).b
t.toString
t=t===v}else t=!1
if(t){u.bD(d,f)
return u}this.bk.R8=!0
return null},
QW(d,e){return this.QX(d,e,!1)},
mv(d,e){var w={}
w.a=d
w.b=e
this.Fl(new A.ahQ(w,this),x.S)},
n7(d){switch(B.bE(x.S.a(B.u.prototype.ga0.call(this)).a).a){case 0:return d.k3.a
case 1:return d.k3.b}},
Fe(d,e,f){var w,v,u=this.bv$,t=B.aGJ(d)
for(w=B.n(this).h("aj.1");u!=null;){if(this.aic(t,u,e,f))return!0
v=u.e
v.toString
u=w.a(v).bI$}return!1},
DY(d){var w=d.e
w.toString
return x.D.a(w).a},
pg(d){var w=x._.a(d.e)
return(w==null?null:w.b)!=null&&!this.bB.ae(0,w.b)},
dj(d,e){var w,v,u,t,s,r=this
if(!r.pg(d))e.Ur()
else{w=x.S
v=r.Kt(w.a(B.u.prototype.ga0.call(r)))
u=d.e
u.toString
u=x.D.a(u).a
u.toString
t=u-w.a(B.u.prototype.ga0.call(r)).d
s=r.oe(d)
switch(B.bE(w.a(B.u.prototype.ga0.call(r)).a).a){case 0:e.bf(0,!v?r.id.c-d.k3.a-t:t,s)
break
case 1:e.bf(0,s,!v?r.id.c-d.k3.b-t:t)
break}}},
aD(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null
if(g.V$==null)return
w=x.S
switch(E.lH(w.a(B.u.prototype.ga0.call(g)).a,w.a(B.u.prototype.ga0.call(g)).b)){case C.E:v=e.Z(0,new B.i(0,g.id.c))
u=C.JZ
t=C.cs
s=!0
break
case C.at:v=e
u=C.cs
t=C.bu
s=!1
break
case C.C:v=e
u=C.bu
t=C.cs
s=!1
break
case C.a0:v=e.Z(0,new B.i(g.id.c,0))
u=C.iu
t=C.bu
s=!0
break
default:s=f
v=s
t=v
u=t}r=g.V$
for(q=B.n(g).h("aj.1"),p=x.D;r!=null;){o=r.e
o.toString
o=p.a(o).a
o.toString
n=o-w.a(B.u.prototype.ga0.call(g)).d
m=g.oe(r)
o=v.a
l=u.a
o=o+l*n+t.a*m
k=v.b
j=u.b
k=k+j*n+t.b*m
i=new B.i(o,k)
if(s){h=g.n7(r)
i=new B.i(o+l*h,k+j*h)}if(n<w.a(B.u.prototype.ga0.call(g)).r&&n+g.n7(r)>0)d.cK(r,i)
o=r.e
o.toString
r=q.a(o).af$}}}
A.GJ.prototype={
am(d){var w,v,u
this.dF(d)
w=this.V$
for(v=x.D;w!=null;){w.am(d)
u=w.e
u.toString
w=v.a(u).af$}},
ad(d){var w,v,u
this.dh(0)
w=this.V$
for(v=x.D;w!=null;){w.ad(0)
u=w.e
u.toString
w=v.a(u).af$}}}
A.Xo.prototype={}
A.Xp.prototype={}
A.Ye.prototype={
ad(d){this.uB(0)}}
A.Yf.prototype={}
A.wo.prototype={
gDO(){var w=this,v=x.S
switch(E.lH(v.a(B.u.prototype.ga0.call(w)).a,v.a(B.u.prototype.ga0.call(w)).b)){case C.E:return w.gcV().d
case C.at:return w.gcV().a
case C.C:return w.gcV().b
case C.a0:return w.gcV().c}},
gadK(){var w=this,v=x.S
switch(E.lH(v.a(B.u.prototype.ga0.call(w)).a,v.a(B.u.prototype.ga0.call(w)).b)){case C.E:return w.gcV().b
case C.at:return w.gcV().c
case C.C:return w.gcV().d
case C.a0:return w.gcV().a}},
gafz(){switch(B.bE(x.S.a(B.u.prototype.ga0.call(this)).a).a){case 0:var w=this.gcV()
return w.gbE(w)+w.gbG(w)
case 1:return this.gcV().gdr()}},
dQ(d){if(!(d.e instanceof A.oO))d.e=new A.oO(C.f)},
bo(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.S,a2=a1.a(B.u.prototype.ga0.call(d)),a3=d.gDO()
d.gadK()
w=d.gcV()
w.toString
a1=w.adL(B.bE(a1.a(B.u.prototype.ga0.call(d)).a))
v=d.gafz()
if(d.u$==null){u=d.hN(a2,0,a1)
d.id=A.j2(d.mt(a2,0,a1),!1,a0,a0,a1,Math.min(u,a2.r),0,a1,a0)
return}t=d.hN(a2,0,a3)
s=a2.f
if(s>0)s=Math.max(0,s-t)
w=d.u$
w.toString
r=Math.max(0,a2.d-a3)
q=Math.min(0,a2.z+a3)
p=a2.r
o=d.hN(a2,0,a3)
n=a2.Q
m=d.mt(a2,0,a3)
l=Math.max(0,a2.w-v)
k=a2.a
j=a2.b
w.bD(new A.jY(k,j,a2.c,r,a3+a2.e,s,p-o,l,a2.x,a2.y,q,n-m),!0)
i=d.u$.id
w=i.y
if(w!=null){d.id=A.j2(a0,!1,a0,a0,0,0,0,0,w)
return}w=i.a
r=a3+w
q=a1+w
h=d.hN(a2,r,q)
g=t+h
f=d.mt(a2,0,a3)
e=d.mt(a2,r,q)
r=i.c
o=i.d
u=Math.min(t+Math.max(r,o+h),p)
p=i.b
o=Math.min(g+o,u)
n=Math.min(e+f+i.z,n)
m=i.e
r=Math.max(g+r,t+i.r)
d.id=A.j2(n,i.x,r,o,a1+m,u,p,q,a0)
q=d.u$.e
q.toString
x.v.a(q)
switch(E.lH(k,j)){case C.E:q.a=new B.i(d.gcV().a,d.hN(a2,d.gcV().d+w,d.gcV().d+w+d.gcV().b))
break
case C.at:q.a=new B.i(d.hN(a2,0,d.gcV().a),d.gcV().b)
break
case C.C:q.a=new B.i(d.gcV().a,d.hN(a2,0,d.gcV().b))
break
case C.a0:q.a=new B.i(d.hN(a2,d.gcV().c+w,d.gcV().c+w+d.gcV().a),d.gcV().b)
break}},
Fe(d,e,f){var w,v,u,t,s=this,r=s.u$
if(r!=null&&r.id.r>0){r=r.e
r.toString
x.v.a(r)
w=s.hN(x.S.a(B.u.prototype.ga0.call(s)),0,s.gDO())
v=s.u$
v.toString
v=s.oe(v)
r=r.a
u=s.u$.gaia()
t=r!=null
if(t)d.c.push(new B.yf(new B.i(-r.a,-r.b)))
u.$3$crossAxisPosition$mainAxisPosition(d,e-v,f-w)
if(t)d.yM()}return!1},
oe(d){var w=this,v=x.S
switch(E.lH(v.a(B.u.prototype.ga0.call(w)).a,v.a(B.u.prototype.ga0.call(w)).b)){case C.E:case C.C:return w.gcV().a
case C.a0:case C.at:return w.gcV().b}},
DY(d){return this.gDO()},
dj(d,e){var w=d.e
w.toString
w=x.v.a(w).a
e.bf(0,w.a,w.b)},
aD(d,e){var w,v=this.u$
if(v!=null&&v.id.w){w=v.e
w.toString
d.cK(v,e.Z(0,x.v.a(w).a))}}}
A.Xm.prototype={
am(d){var w
this.dF(d)
w=this.u$
if(w!=null)w.am(d)},
ad(d){var w
this.dh(0)
w=this.u$
if(w!=null)w.ad(0)}}
A.zE.prototype={
J(){return"CacheExtentStyle."+this.b}}
A.rL.prototype={
fg(d){this.hu(d)
d.Ox(I.wQ)},
eN(d){var w=this.gDZ()
new B.b7(w,new A.ahU(),B.bq(w).h("b7<1>")).Y(0,d)},
sdk(d){if(d===this.B)return
this.B=d
this.X()},
sPA(d){if(d===this.K)return
this.K=d
this.X()},
sbY(d,e){var w=this,v=w.M
if(e===v)return
if(w.b!=null)v.I(0,w.gyd())
w.M=e
if(w.b!=null)e.S(0,w.gyd())
w.X()},
sae6(d){if(d==null)d=250
if(d===this.av)return
this.av=d
this.X()},
sae7(d){if(d===this.u)return
this.u=d
this.X()},
shQ(d){var w=this
if(d!==w.F){w.F=d
w.aq()
w.b_()}},
am(d){this.Yy(d)
this.M.S(0,this.gyd())},
ad(d){this.M.I(0,this.gyd())
this.Yz(0)},
geo(){return!0},
Fx(d,e,f,g,h,i,j,k,l,a0,a1){var w,v,u,t,s,r,q,p,o=this,n=A.aXK(o.M.k4,h),m=i+k
for(w=i,v=0;f!=null;){u=a1<=0?0:a1
t=Math.max(e,-u)
s=e-t
f.bD(new A.jY(o.B,h,n,u,v,m-w,Math.max(0,a0-w+i),g,o.K,j,t,Math.max(0,l+s)),!0)
r=f.id
q=r.y
if(q!=null)return q
p=w+r.b
if(r.w||a1>0)o.GL(f,p,h)
else o.GL(f,-a1+i,h)
m=Math.max(p+r.c,m)
q=r.a
a1-=q
v+=q
w+=r.d
q=r.z
if(q!==0){l-=q-s
e=Math.min(t+q,0)}o.SQ(h,r)
f=d.$1(f)}return 0},
ke(d){var w,v,u,t,s,r
switch(this.F.a){case 0:return null
case 1:case 2:case 3:break}w=this.k3
v=0+w.a
u=0+w.b
w=x.S
if(w.a(B.u.prototype.ga0.call(d)).f===0||!isFinite(w.a(B.u.prototype.ga0.call(d)).y))return new B.I(0,0,v,u)
t=w.a(B.u.prototype.ga0.call(d)).y-w.a(B.u.prototype.ga0.call(d)).r+w.a(B.u.prototype.ga0.call(d)).f
switch(E.lH(this.B,w.a(B.u.prototype.ga0.call(d)).b)){case C.C:s=0+t
r=0
break
case C.E:u-=t
r=0
s=0
break
case C.at:r=0+t
s=0
break
case C.a0:v-=t
r=0
s=0
break
default:r=0
s=0}return new B.I(r,s,v,u)},
Ek(d){var w,v=this,u=v.aB
if(u==null){u=v.k3
return new B.I(0,0,0+u.a,0+u.b)}switch(B.bE(v.B).a){case 1:w=v.k3
return new B.I(0,0-u,0+w.a,0+w.b+u)
case 0:w=v.k3
return new B.I(0-u,0,0+w.a+u,0+w.b)}},
aD(d,e){var w,v,u,t=this
if(t.V$==null)return
w=t.gQM()&&t.F!==C.e
v=t.bs
if(w){w=t.cx
w===$&&B.a()
u=t.k3
v.saz(0,d.ky(w,e,new B.I(0,0,0+u.a,0+u.b),t.ga93(),t.F,v.a))}else{v.saz(0,null)
t.LV(d,e)}},
l(){this.bs.saz(0,null)
this.fe()},
LV(d,e){var w,v,u,t,s,r,q
for(w=this.gDZ(),v=w.length,u=e.a,t=e.b,s=0;s<w.length;w.length===v||(0,B.Z)(w),++s){r=w[s]
if(r.id.w){q=this.G4(r)
d.cK(r,new B.i(u+q.a,t+q.b))}}},
cd(d,e){var w,v,u,t,s,r,q=this,p={}
p.a=p.b=null
switch(B.bE(q.B).a){case 1:p.b=e.b
p.a=e.a
break
case 0:p.b=e.a
p.a=e.b
break}w=new A.wU(d.a,d.b,d.c)
for(v=q.gOY(),u=v.length,t=0;t<v.length;v.length===u||(0,B.Z)(v),++t){s=v[t]
if(!s.id.w)continue
r=new B.bt(new Float64Array(16))
r.dg()
q.dj(s,r)
if(d.adI(new A.ahT(p,q,s,w),r))return!0}return!1},
nj(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=d instanceof A.cp
for(w=x.f,v=g,u=d,t=0;u.gao(u)!==h;u=s){s=u.gao(u)
s.toString
w.a(s)
if(u instanceof B.x)v=u
if(s instanceof A.cp){r=s.DY(u)
r.toString
t+=r}else{t=0
f=!1}}if(v!=null){w=v.gao(v)
w.toString
x.T.a(w)
q=x.S.a(B.u.prototype.ga0.call(w)).b
switch(B.bE(h.B).a){case 0:p=v.k3.a
break
case 1:p=v.k3.b
break
default:p=g}if(a0==null)a0=d.gi_()
o=B.hI(d.b4(0,v),a0)}else{if(f){x.T.a(d)
w=x.S
q=w.a(B.u.prototype.ga0.call(d)).b
p=d.id.a
if(a0==null)switch(B.bE(h.B).a){case 0:a0=new B.I(0,0,0+p,0+w.a(B.u.prototype.ga0.call(d)).w)
break
case 1:a0=new B.I(0,0,0+w.a(B.u.prototype.ga0.call(d)).w,0+d.id.a)
break}}else{w=h.M.at
w.toString
a0.toString
return new G.oD(w,a0)}o=a0}x.T.a(u)
switch(E.lH(h.B,q)){case C.E:w=o.d
t+=p-w
n=w-o.b
break
case C.at:w=o.a
t+=w
n=o.c-w
break
case C.C:w=o.b
t+=w
n=o.d-w
break
case C.a0:w=o.c
t+=p-w
n=w-o.a
break
default:n=g}u.id.toString
t=h.Ho(u,t)
m=B.hI(d.b4(0,h),a0)
l=h.Ry(u)
switch(x.S.a(B.u.prototype.ga0.call(u)).b.a){case 0:t-=l
break
case 1:switch(B.bE(h.B).a){case 1:t-=m.d-m.b
break
case 0:t-=m.c-m.a
break}break}w=h.B
switch(B.bE(w).a){case 0:k=h.k3.a-l
break
case 1:k=h.k3.b-l
break
default:k=g}j=t-(k-n)*e
s=h.M.at
s.toString
i=s-j
switch(w.a){case 2:m=m.bf(0,0,i)
break
case 1:m=m.bf(0,i,0)
break
case 0:m=m.bf(0,0,-i)
break
case 3:m=m.bf(0,-i,0)
break}return new G.oD(j,m)},
P5(d,e,f){switch(E.lH(this.B,f)){case C.E:return new B.i(0,this.k3.b-(e+d.id.c))
case C.at:return new B.i(e,0)
case C.C:return new B.i(0,e)
case C.a0:return new B.i(this.k3.a-(e+d.id.c),0)}},
e0(d,e,f,g){var w=this
if(!w.M.r.gmn())return w.uC(d,e,f,g)
w.uC(d,null,f,F.aIZ(d,e,f,w.M,g,w))},
pS(){return this.e0(C.a5,null,C.r,null)},
lT(d){return this.e0(C.a5,null,C.r,d)},
nw(d,e,f){return this.e0(d,null,e,f)},
lU(d,e){return this.e0(C.a5,d,C.r,e)},
$iCM:1}
A.CV.prototype={
dQ(d){if(!(d.e instanceof A.mN))d.e=new A.mN(null,null,C.f)},
sDG(d){if(d===this.f3)return
this.f3=d
this.X()},
sb2(d){if(d==this.cw)return
this.cw=d
this.X()},
gj0(){return!0},
c9(d){return new B.T(B.U(1/0,d.a,d.b),B.U(1/0,d.c,d.d))},
bo(){var w,v,u,t,s,r,q,p,o,n=this
switch(B.bE(n.B).a){case 1:n.M.l3(n.k3.b)
break
case 0:n.M.l3(n.k3.a)
break}if(n.cw==null){n.ki=n.f0=0
n.le=!1
n.M.l2(0,0)
return}switch(B.bE(n.B).a){case 1:w=n.k3
v=w.b
u=w.a
break
case 0:w=n.k3
v=w.a
u=w.b
break
default:v=null
u=null}w=0
do{t=n.M.at
t.toString
s=n.a_D(v,u,t+0)
if(s!==0)n.M.Pt(s)
else{t=n.M
r=n.f0
r===$&&B.a()
q=n.f3
r=Math.min(0,r+v*q)
p=n.ki
p===$&&B.a()
if(t.l2(r,Math.max(0,p-v*(1-q))))break}o=w+1
if(o<10){w=o
continue}else break}while(!0)},
a_D(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.ki=i.f0=0
i.le=!1
w=d*i.f3-f
v=B.U(w,0,d)
u=d-w
t=B.U(u,0,d)
switch(i.u.a){case 0:i.aB=i.av
break
case 1:i.aB=d*i.av
break}s=i.aB
s.toString
r=d+2*s
q=w+s
p=B.U(q,0,r)
o=B.U(r-q,0,r)
n=i.cw.e
n.toString
m=B.n(i).h("aj.1").a(n).bI$
n=m==null
if(!n){l=Math.max(d,w)
k=i.Fx(i.gaeh(),B.U(u,-s,0),m,e,H.o4,t,d,0,p,v,l-d)
if(k!==0)return-k}u=i.cw
s=-w
l=Math.max(0,s)
s=n?Math.min(0,s):0
n=w>=d?w:v
j=i.aB
j.toString
return i.Fx(i.gOW(),B.U(w,-j,0),u,e,H.eK,n,d,s,o,t,l)},
gQM(){return this.le},
SQ(d,e){var w,v=this
switch(d.a){case 0:w=v.ki
w===$&&B.a()
v.ki=w+e.a
break
case 1:w=v.f0
w===$&&B.a()
v.f0=w-e.a
break}if(e.x)v.le=!0},
GL(d,e,f){var w=d.e
w.toString
x.v.a(w).a=this.P5(d,e,f)},
G4(d){var w=d.e
w.toString
return x.v.a(w).a},
Ho(d,e){var w,v,u,t,s=this
switch(x.S.a(B.u.prototype.ga0.call(d)).b.a){case 0:w=s.cw
for(v=B.n(s).h("aj.1"),u=0;w!==d;){u+=w.id.a
t=w.e
t.toString
w=v.a(t).af$}return u+e
case 1:v=s.cw.e
v.toString
t=B.n(s).h("aj.1")
w=t.a(v).bI$
for(u=0;w!==d;){u-=w.id.a
v=w.e
v.toString
w=t.a(v).bI$}return u-e}},
Ry(d){var w,v,u,t=this
switch(x.S.a(B.u.prototype.ga0.call(d)).b.a){case 0:w=t.cw
for(v=B.n(t).h("aj.1");w!==d;){w.id.toString
u=w.e
u.toString
w=v.a(u).af$}return 0
case 1:v=t.cw.e
v.toString
u=B.n(t).h("aj.1")
w=u.a(v).bI$
for(;w!==d;){w.id.toString
v=w.e
v.toString
w=u.a(v).bI$}return 0}},
dj(d,e){var w=d.e
w.toString
w=x.v.a(w).a
e.bf(0,w.a,w.b)},
P6(d,e){var w,v=d.e
v.toString
x.v.a(v)
w=x.S
switch(E.lH(w.a(B.u.prototype.ga0.call(d)).a,w.a(B.u.prototype.ga0.call(d)).b)){case C.C:return e-v.a.b
case C.at:return e-v.a.a
case C.E:return d.id.c-(e-v.a.b)
case C.a0:return d.id.c-(e-v.a.a)}},
gDZ(){var w,v,u=this,t=B.b([],x.O),s=u.V$
if(s==null)return t
for(w=B.n(u).h("aj.1");s!=u.cw;){s.toString
t.push(s)
v=s.e
v.toString
s=w.a(v).af$}s=u.bv$
for(;!0;){s.toString
t.push(s)
if(s===u.cw)return t
v=s.e
v.toString
s=w.a(v).bI$}},
gOY(){var w,v,u,t=this,s=B.b([],x.O)
if(t.V$==null)return s
w=t.cw
for(v=B.n(t).h("aj.1");w!=null;){s.push(w)
u=w.e
u.toString
w=v.a(u).af$}u=t.cw.e
u.toString
w=v.a(u).bI$
for(;w!=null;){s.push(w)
u=w.e
u.toString
w=v.a(u).bI$}return s}}
A.jg.prototype={
am(d){var w,v,u
this.dF(d)
w=this.V$
for(v=B.n(this).h("jg.0");w!=null;){w.am(d)
u=w.e
u.toString
w=v.a(u).af$}},
ad(d){var w,v,u
this.dh(0)
w=this.V$
for(v=B.n(this).h("jg.0");w!=null;){w.ad(0)
u=w.e
u.toString
w=v.a(u).af$}}}
A.uq.prototype={
W(){return new A.ET(C.j)}}
A.ET.prototype={
aa(){this.ap()
this.IY()},
aA(d){this.aN(d)
this.IY()},
IY(){this.e=new B.cY(this.ga_d(),this.a.c,null,x.U)},
l(){var w,v,u=this.d
if(u!=null)for(u=B.mi(u,u.r,B.n(u).c);u.t();){w=u.d
v=this.d.i(0,w)
v.toString
w.I(0,v)}this.ak()},
a_e(d){var w,v=this,u=d.a,t=v.d
if(t==null)t=v.d=B.L(x.e,x.M)
t.m(0,u,v.a1h(u))
t=v.d.i(0,u)
t.toString
u.S(0,t)
if(!v.f){v.f=!0
w=v.Ki()
if(w!=null)v.NY(w)
else $.bN.fr$.push(new A.asg(v))}return!1},
Ki(){var w={},v=this.c
v.toString
w.a=null
v.aS(new A.asl(w))
return x.c.a(w.a)},
NY(d){var w,v
this.c.toString
w=this.f
v=this.e
v===$&&B.a()
d.IT(x.V.a(A.aRP(v,w)))},
a1h(d){return new A.ask(this,d)},
v(d){var w=this.f,v=this.e
v===$&&B.a()
return new A.Bm(w,v,null)}}
A.uJ.prototype={
aI(d){var w=new A.P9(this.e,B.dB(d),null,this.r,null,B.al(x.g))
w.aG()
w.saQ(null)
return w},
aJ(d,e){e.sDR(0,this.e)
e.shQ(this.r)
e.sl7(null)
e.sbw(B.dB(d))}}
A.OZ.prototype={
aI(d){var w=this,v=w.d
v=v==null?null:v.iq(0)
v=new A.Pk(v,w.e,w.f,w.r,w.w,w.x,w.y,w.z,w.Q,w.as,w.at,w.ax,w.ay,w.CW,!1,null,!1,B.al(x.g))
v.aG()
v.acE()
return v},
aJ(d,e){var w=this,v=w.d
e.sjw(0,v==null?null:v.iq(0))
e.av=w.e
e.sbU(0,w.f)
e.scz(0,w.r)
e.sTF(0,w.w)
e.saH(0,w.x)
e.spd(0,w.y)
e.saev(w.Q)
e.sxz(w.as)
e.shI(w.at)
e.salr(0,w.ax)
e.saec(w.ay)
e.sajn(!1)
e.sbw(null)
e.sFj(w.CW)
e.sFo(!1)
e.soU(w.z)},
ow(d){d.sjw(0,null)}}
A.B2.prototype={
aI(d){var w=new A.Pl(this.e,null,B.al(x.g))
w.aG()
w.saQ(null)
return w},
aJ(d,e){e.sais(0,this.e)}}
A.Lq.prototype={
geY(d){var w=this.a
if(w==null)return null
w=w.c
w.toString
return w}}
A.o7.prototype={
W(){return new A.FV(C.j)}}
A.FV.prototype={
aa(){var w=this
w.ap()
$.J.aU$.push(w)
w.z=new A.Lq(w,x.X)},
l(){var w,v=this
C.b.D($.J.aU$,v)
v.abG()
w=v.at
if(w!=null)w.l()
w=v.z
w===$&&B.a()
w.a=null
v.CD(null)
v.ak()},
aZ(){var w,v=this
v.acK()
v.CG()
w=v.c
w.toString
if(B.aEn(w))v.a7D()
else v.Nf(!0)
v.cF()},
aA(d){var w=this
w.aN(d)
if(w.r)w.a.toString
if(!w.a.c.j(0,d.c))w.CG()},
h_(){this.CG()
this.XN()},
acK(){var w=this.c
w.toString
w=B.ea(w)
w=w==null?null:w.z
if(w==null){w=$.Qb.xo$
w===$&&B.a()
w=(w.a&2)!==0}this.w=w},
CG(){var w,v,u,t,s=this,r=s.z
r===$&&B.a()
w=s.a
v=w.c
u=s.c
u.toString
t=w.r
if(t!=null&&w.w!=null){t.toString
w=w.w
w.toString
w=new B.T(t,w)}else w=null
s.acW(new A.Dd(r,v,x.t).a4(B.a0f(u,w)))},
a3r(d){var w=this,v=w.ax
if(v==null||d){w.as=w.Q=null
w.a.toString
v=w.ax=new B.hh(w.ga4W(),null,null)}v.toString
return v},
v4(){return this.a3r(!1)},
a4X(d,e){this.a7(new A.avd(this,d,e))},
CD(d){var w=this.e
$.bN.fr$.push(new A.ave(w))
this.e=d},
acW(d){var w,v,u=this,t=u.d
if(t==null)w=null
else{w=t.a
if(w==null)w=t}v=d.a
if(w===(v==null?d:v))return
if(u.r){t.toString
t.I(0,u.v4())}u.a.toString
u.a7(new A.avf(u))
u.a7(new A.avg(u))
u.d=d
if(u.r)d.S(0,u.v4())},
a7D(){var w,v=this
if(v.r)return
w=v.d
w.toString
w.S(0,v.v4())
w=v.at
if(w!=null)w.l()
v.at=null
v.r=!0},
Nf(d){var w,v,u=this
if(!u.r)return
if(d)if(u.at==null){w=u.d
w=(w==null?null:w.a)!=null}else w=!1
else w=!1
if(w){w=u.d.a
if(w.w)B.a8(B.aq(y.a))
v=new A.N8(w)
v.ZL(w)
u.at=v}w=u.d
w.toString
w.I(0,u.v4())
u.r=!1},
abG(){return this.Nf(!1)},
v(d){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.Q!=null)o.a.toString
w=o.e
v=w==null
u=v?n:w.a
t=v?n:w.c
s=o.a
r=s.r
q=s.w
w=v?n:w.b
if(w==null)w=1
s=s.as
v=o.w
v===$&&B.a()
p=new A.OZ(u,t,r,q,w,n,n,C.dx,n,s,C.m,D.co,n,!1,v,!1,n)
p=B.c8(n,n,p,!1,n,n,!1,n,n,n,!0,n,"",n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
return p}}
A.a_6.prototype={}
A.w6.prototype={
gn6(d){var w=x.L.a(C.b.gbA(this.d))
return w.gn6(w)},
OC(d,e,f){var w=x.L.a(C.b.gbA(this.d))
if(w.M!=null){w.M=d
return B.de(null,x.H)}return w.hK(w.nk(d),e,f)},
Ro(d){var w=x.L.a(C.b.gbA(this.d))
if(w.M!=null){w.M=d
return}w.dB(w.nk(d))},
Py(d,e,f){var w=null,v=new A.pd(this.z,this.as,C.dU,d,e,!0,w,B.eL(!1,x.Z),$.bo())
v.IB(e,w,!0,f,d)
v.IC(e,w,w,!0,f,d)
return v},
am(d){this.Xs(d)
x.L.a(d).stS(this.as)}}
A.rp.prototype={}
A.pd.prototype={
EJ(d,e,f,g,h,i){return this.XC(d,e,f,g,h,null)},
stS(d){var w,v=this
if(v.av===d)return
w=v.gn6(v)
v.av=d
if(w!=null)v.F0(v.nk(w))},
gvh(){var w=this.ax
w.toString
return Math.max(0,w*(this.av-1)/2)},
tY(d,e){var w=Math.max(0,d-this.gvh())/(e*this.av),v=C.d.SC(w)
if(Math.abs(w-v)<1e-10)return v
return w},
nk(d){var w=this.ax
w.toString
return d*w*this.av+this.gvh()},
gn6(d){var w,v,u=this,t=u.at
if(t!=null)w=!(u.z!=null&&u.Q!=null)
else w=!0
if(w)t=null
else{w=u.M
if(w==null){t.toString
w=u.z
w.toString
v=u.Q
v.toString
v=B.U(t,w,v)
w=u.ax
w.toString
w=u.tY(v,w)
t=w}else t=w}return t},
Hm(){var w,v,u=this,t=u.w,s=t.c
s.toString
s=B.afw(s)
if(s!=null){t=t.c
t.toString
w=u.M
if(w==null){w=u.at
w.toString
v=u.ax
v.toString
v=u.tY(w,v)
w=v}s.SX(t,w)}},
Sz(){var w,v,u
if(this.at==null){w=this.w
v=w.c
v.toString
v=B.afw(v)
if(v==null)u=null
else{w=w.c
w.toString
u=v.S9(w)}if(u!=null)this.K=u}},
Hl(){var w,v=this,u=v.M
if(u==null){u=v.at
u.toString
w=v.ax
w.toString
w=v.tY(u,w)
u=w}v.w.e.sn(0,u)
u=$.hm.as$
u===$&&B.a()
u.Qr()},
Sy(d,e){if(e)this.K=d
else this.dB(this.nk(d))},
l3(d){var w,v,u,t,s=this,r=s.ax
r=r!=null?r:null
if(d===r)return!0
s.Xy(d)
w=s.at
w=w!=null?w:null
if(w==null)v=s.K
else if(r===0){u=s.M
u.toString
v=u}else{r.toString
v=s.tY(w,r)}t=s.nk(v)
s.M=d===0?v:null
if(t!==w){s.at=t
return!1}return!0},
ml(d){var w
this.XD(d)
if(!(d instanceof A.pd))return
w=d.M
if(w!=null)this.M=w},
l2(d,e){var w=d+this.gvh()
return this.Xw(w,Math.max(w,e-this.gvh()))},
it(){var w,v,u,t,s,r=this,q=null,p=r.z
if(p!=null&&r.Q!=null)p.toString
else p=q
if(r.z!=null&&r.Q!=null){w=r.Q
w.toString}else w=q
v=r.at
v=v!=null?v:q
u=r.ax
u=u!=null?u:q
t=r.w.a.c
s=r.av
return new A.rp(s,p,w,v,u,t)},
$irp:1}
A.FM.prototype={
ji(d){return new A.FM(!1,this.jj(d))},
gmn(){return this.b}}
A.Cp.prototype={
ji(d){return new A.Cp(this.jj(d))},
a3x(d){var w,v
if(d instanceof A.pd){w=d.gn6(d)
w.toString
return w}w=d.at
w.toString
v=d.ax
v.toString
return w/v},
a3y(d,e){var w
if(d instanceof A.pd)return d.nk(e)
w=d.ax
w.toString
return e*w},
oo(d,e){var w,v,u,t,s,r=this
if(e<=0){w=d.at
w.toString
v=d.z
v.toString
v=w<=v
w=v}else w=!1
if(!w)if(e>=0){w=d.at
w.toString
v=d.Q
v.toString
v=w>=v
w=v}else w=!1
else w=!0
if(w)return r.Xu(d,e)
u=r.gtJ()
t=r.a3x(d)
w=u.c
if(e<-w)t-=0.5
else if(e>w)t+=0.5
s=r.a3y(d,C.d.SC(t))
w=d.at
w.toString
if(s!==w){w=r.gnz()
v=d.at
v.toString
return new E.oF(s,B.yx(w,v-s,e),u)}return null}}
A.wa.prototype={
W(){return new A.Wf(C.j)}}
A.Wf.prototype={
aa(){this.ap()
this.d=this.a.r.z},
a3h(d){var w,v
switch(this.a.e.a){case 0:w=d.N(x.I)
w.toString
v=F.aCm(w.w)
this.a.toString
return v
case 1:return C.C}},
v(d){var w,v,u=this,t=null,s=u.a3h(d),r=u.a.w
if(r==null)r=t
r=new A.Cp(D.Kk.jj(r))
r=new A.FM(!1,t).jj(r)
w=u.a.r
v=E.De(d).Pl(!1)
return new B.cY(new A.awR(u),G.ak2(s,C.w,w,C.z,!1,t,new A.FM(!1,r),t,v,t,new A.awS(u,s)),t,x.R)}}
A.Dd.prototype={
tF(d,e,f,g){var w,v=this
if(e.a==null){w=$.ms.jp$
w===$&&B.a()
w=w.a.i(0,f)!=null||w.b.i(0,f)!=null}else w=!0
if(w){v.b.tF(d,e,f,g)
return}w=v.a
if(w.geY(w)==null)return
w=w.geY(w)
w.toString
if(A.aTP(w)){$.bN.zA(new A.ajS(v,d,e,f,g))
return}v.b.tF(d,e,f,g)},
ya(d,e,f){return this.b.ya(0,e,f)},
yb(d,e){return this.b.yb(d,e)},
FO(d){return this.b.FO(d)}}
A.Qw.prototype={
goK(){return null},
k(d){var w=B.b([],x.s)
this.dm(w)
return"<optimized out>#"+B.cm(this)+"("+C.b.bC(w,", ")+")"},
dm(d){var w,v,u
try{w=this.goK()
if(w!=null)d.push("estimated child count: "+B.k(w))}catch(u){v=B.an(u)
d.push("estimated child count: EXCEPTION ("+J.a9(v).k(0)+")")}}}
A.yt.prototype={}
A.yu.prototype={
W(){return new A.H0(null,C.j)}}
A.H0.prototype={
glM(){return this.r},
aja(d){return new A.ayc(this,d)},
wd(d,e){var w,v=this
if(e){w=v.d;(w==null?v.d=B.ba(x.B):w).H(0,d)}else{w=v.d
if(w!=null)w.D(0,d)}w=v.d
w=w==null?null:w.a!==0
w=w===!0
if(v.r!==w){v.r=w
v.lI()}},
aZ(){var w,v,u,t=this
t.cF()
w=t.c
w.toString
v=B.aE7(w)
w=t.f
if(w!=v){if(w!=null){u=t.e
if(u!=null)new B.bl(u,B.n(u).h("bl<1>")).Y(0,w.gGn(w))}t.f=v
if(v!=null){w=t.e
if(w!=null)new B.bl(w,B.n(w).h("bl<1>")).Y(0,v.gfH(v))}}},
H(d,e){var w,v=this,u=v.aja(e)
e.S(0,u)
w=v.e;(w==null?v.e=B.L(x.B,x.M):w).m(0,e,u)
v.f.H(0,e)
if(e.gn(e).c!==C.d0)v.wd(e,!0)},
D(d,e){var w=this.e
if(w==null)return
w=w.D(0,e)
w.toString
e.I(0,w)
this.f.D(0,e)
this.wd(e,!1)},
l(){var w,v,u=this,t=u.e
if(t!=null){for(t=B.mi(t,t.r,B.n(t).c);t.t();){w=t.d
u.f.D(0,w)
v=u.e.i(0,w)
v.toString
w.I(0,v)}u.e=null}u.d=null
u.ak()},
v(d){var w=this
w.pX(d)
if(w.f==null)return w.a.c
return G.aJ8(w.a.c,w)}}
A.QD.prototype={}
A.jZ.prototype={
c7(d){return A.aJi(this,!1)},
EL(d,e,f,g,h){return null}}
A.oN.prototype={
gC(){return x.q.a(B.bm.prototype.gC.call(this))},
cC(d,e){var w,v,u=this.f
u.toString
x.j.a(u)
this.kN(0,e)
w=e.d
v=u.d
if(w!==v)u=B.Q(w)!==B.Q(v)||w.HH(v)
else u=!1
if(u)this.ht()},
ht(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0={}
e.Ag()
e.p3=null
a0.a=!1
try{m=x.p
w=A.aJl(m,x.d)
v=B.cM(d,d,d,m,x.a)
m=e.f
m.toString
u=x.j.a(m)
t=new A.amQ(a0,e,w,u,v)
for(m=e.p2,l=m.$ti,l=l.h("@<1>").a5(l.h("fx<1,2>")).h("ng<1,2>"),l=B.aJ(new A.ng(m,l),!0,l.h("w.E")),k=l.length,j=x._,i=e.p1,h=0;h<k;++h){s=l[h]
r=m.i(0,s).gaE().a
q=r==null?d:u.d.Qm(r)
g=m.i(0,s).gC()
p=j.a(g==null?d:g.e)
if(p!=null&&p.a!=null){g=p.a
g.toString
J.iy(v,s,g)}if(q!=null&&!J.f(q,s)){if(p!=null)p.a=null
J.iy(w,q,m.i(0,s))
if(i)J.yU(w,s,new A.amO())
m.D(0,s)}else J.yU(w,s,new A.amP(e,s))}e.gC()
l=w
k=B.bq(l)
new A.ng(l,k.h("@<1>").a5(k.h("fx<1,2>")).h("ng<1,2>")).Y(0,t)
if(!a0.a&&e.R8){f=m.Rp()
o=f==null?-1:f
n=o+1
J.iy(w,n,m.i(0,n))
t.$1(n)}}finally{e.p4=null
e.gC()}},
afp(d,e){this.r.r1(this,new A.amN(this,e,d))},
dY(d,e,f){var w,v,u,t,s=null
if(d==null)w=s
else{w=d.gC()
w=w==null?s:w.e}v=x._
v.a(w)
u=this.VV(d,e,f)
if(u==null)t=s
else{t=u.gC()
t=t==null?s:t.e}v.a(t)
if(w!=t&&w!=null&&t!=null)t.a=w.a
return u},
iD(d){this.p2.D(0,d.d)
this.jV(d)},
Sg(d){var w,v=this
v.gC()
w=d.e
w.toString
w=x.D.a(w).b
w.toString
v.r.r1(v,new A.amR(v,w))},
EM(d,e,f,g,h){var w,v,u=this.f
u.toString
w=x.j
v=w.a(u).d.goK()
u=this.f
u.toString
w.a(u)
g.toString
u=u.EL(d,e,f,g,h)
return u==null?A.aUb(e,f,g,h,v):u},
gr5(){var w,v=this.f
v.toString
w=x.j.a(v).d.goK()
return w},
mz(){var w=this.p2
w.agX()
w.Rp()
w=this.f
w.toString
x.j.a(w)},
El(d){var w=d.e
w.toString
x.D.a(w).b=this.p4},
iH(d,e){this.gC().A4(0,x.x.a(d),this.p3)},
iM(d,e,f){this.gC().tl(x.x.a(d),this.p3)},
iR(d,e){this.gC().D(0,x.x.a(d))},
aS(d){var w=this.p2,v=w.$ti
v=v.h("@<1>").a5(v.z[1]).h("tX<1,2>")
v=B.kq(new A.tX(w,v),v.h("w.E"),x.Q)
C.b.Y(B.aJ(v,!0,B.n(v).h("w.E")),d)}}
A.Bm.prototype={
qW(d){var w,v,u=d.e
u.toString
x.C.a(u)
w=this.f
if(u.oR$!==w){u.oR$=w
v=d.gao(d)
if(v instanceof B.u&&!w)v.X()}}}
A.a_y.prototype={
aa(){this.ap()
if(this.r)this.m6()},
dI(){var w=this.e5$
if(w!=null){w.ah()
w.d6()
this.e5$=null}this.jX()}}
A.Qx.prototype={
v(d){var w=this.c,v=B.U(1-w,0,1)
return new A.Yb(v/2,new A.Ya(w,this.e,null),null)}}
A.Ya.prototype={
aI(d){var w=new A.PA(this.f,x.l.a(d),B.L(x.p,x.x),0,null,null,B.al(x.g))
w.aG()
return w},
aJ(d,e){e.stS(this.f)}}
A.Yb.prototype={
aI(d){var w=new A.Xn(this.e,null,B.al(x.g))
w.aG()
return w},
aJ(d,e){e.stS(this.e)}}
A.Xn.prototype={
stS(d){var w=this
if(w.cS===d)return
w.cS=d
w.cc=null
w.X()},
gcV(){return this.cc},
abq(){var w,v,u=this
if(u.cc!=null&&J.f(u.aw,x.S.a(B.u.prototype.ga0.call(u))))return
w=x.S
v=w.a(B.u.prototype.ga0.call(u)).y*u.cS
u.aw=w.a(B.u.prototype.ga0.call(u))
switch(B.bE(w.a(B.u.prototype.ga0.call(u)).a).a){case 0:u.cc=new B.a0(v,0,v,0)
break
case 1:u.cc=new B.a0(0,v,0,v)
break}return},
bo(){this.abq()
this.Iq()}}
A.tt.prototype={
aI(d){var w=this,v=w.e,u=A.arA(d,v),t=w.y,s=B.al(x.w)
if(t==null)t=250
s=new A.CV(w.r,v,u,w.w,t,w.z,w.Q,s,0,null,null,B.al(x.g))
s.aG()
s.U(0,null)
v=s.V$
if(v!=null)s.cw=v
return s},
aJ(d,e){var w=this,v=w.e
e.sdk(v)
v=A.arA(d,v)
e.sPA(v)
e.sDG(w.r)
e.sbY(0,w.w)
e.sae6(w.y)
e.sae7(w.z)
e.shQ(w.Q)},
c7(d){var w=B.cN(x.Q)
return new A.ZJ(w,this,C.N)}}
A.ZJ.prototype={
gC(){return x.K.a(B.hj.prototype.gC.call(this))},
dL(d,e){var w=this
w.bB=!0
w.Wk(d,e)
w.NJ()
w.bB=!1},
cC(d,e){var w=this
w.bB=!0
w.Wn(0,e)
w.NJ()
w.bB=!1},
NJ(){var w,v=this,u=v.f
u.toString
x.P.a(u)
u=v.ghf(v)
w=x.K
if(!u.ga3(u)){u=w.a(B.hj.prototype.gC.call(v))
w=v.ghf(v)
u.sb2(x.y.a(w.gT(w).gC()))
v.aM=0}else{w.a(B.hj.prototype.gC.call(v)).sb2(null)
v.aM=null}},
iH(d,e){var w=this
w.Wj(d,e)
if(!w.bB&&e.b===w.aM)x.K.a(B.hj.prototype.gC.call(w)).sb2(x.y.a(d))},
iM(d,e,f){this.Wl(d,e,f)},
iR(d,e){var w=this
w.Wm(d,e)
if(!w.bB&&x.K.a(B.hj.prototype.gC.call(w)).cw===d)x.K.a(B.hj.prototype.gC.call(w)).sb2(null)}}
A.a0_.prototype={}
A.a00.prototype={}
var z=a.updateTypes(["H(B?)","~(hh)","~(jY)","~(dM)","~(kG)","~(kt)","~(aS)","H(wU{crossAxisPosition!W,mainAxisPosition!W})","~(iT,i)","~({curve:e5,descendant:u?,duration:aS,rect:I?})","H(r2)","~(id,H)","tt(r,fW)","~(x)","p(@,@)","p(c,p)"])
A.apA.prototype={
$1(d){return this.a.b(d)},
$S:57}
A.apC.prototype={
$1(d){return this.a.b(d)},
$S:57}
A.apB.prototype={
$2(d,e){var w,v,u,t,s,r=this.a.$ti.h("di<1>")
do{w=d.b
v=d.c
if(w!=null){u=new A.di(w.a,r)
e.b=u
this.$2(w,u)}t=v!=null
if(t){s=new A.di(v.a,r)
e.c=s
e=s
d=v}}while(t)},
$S(){return this.a.$ti.a5(this.b).h("~(1,di<2>)")}}
A.afc.prototype={
$2(d,e){this.a.H(0,new A.kG(d,e))},
$S:327}
A.acl.prototype={
$2(d,e){this.a.tF(this.b,this.c,d,e)},
$S(){return B.n(this.a).h("~(jC.T,~(B,cZ?))")}}
A.acm.prototype={
$3(d,e,f){return this.T_(d,e,f)},
T_(d,e,f){var w=0,v=B.F(x.H),u=this,t
var $async$$3=B.G(function(g,h){if(g===1)return B.C(h,v)
while(true)switch(w){case 0:w=2
return B.A(null,$async$$3)
case 2:t=u.c
if(t.a==null)t.Hx(new A.aui(B.b([],x.h),B.b([],x.u)))
t=t.a
t.toString
t.tE(B.bG("while resolving an image"),e,null,!0,f)
return B.D(null,v)}})
return B.E($async$$3,v)},
$S(){return B.n(this.a).h("aa<~>(jC.T?,B,cZ?)")}}
A.aci.prototype={
SZ(d,e){var w=0,v=B.F(x.H),u,t=this,s
var $async$$2=B.G(function(f,g){if(f===1)return B.C(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}t.b.$3(s.a,d,e)
s.b=!0
case 1:return B.D(u,v)}})
return B.E($async$$2,v)},
$2(d,e){return this.SZ(d,e)},
$S:328}
A.ach.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=B.an(u)
v=B.aI(u)
t.d.$2(w,v)}},
$S(){return B.n(this.b).h("aH(jC.T)")}}
A.acj.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:131}
A.ack.prototype={
$0(){return this.a.yb(this.b,$.ms.gaiC())},
$S:131}
A.aco.prototype={
$1(d){return d.c},
$S:330}
A.acp.prototype={
$1(d){return d.b},
$S:331}
A.aeN.prototype={
$2(d,e){this.a.tE(B.bG("resolving an image codec"),d,this.b,!0,e)},
$S:41}
A.aeO.prototype={
$2(d,e){this.a.tE(B.bG("loading an image"),d,this.b,!0,e)},
$S:41}
A.aeM.prototype={
$0(){this.a.MD()},
$S:0}
A.ahM.prototype={
$1(d){return this.b.by(d,this.a.a)},
$S:132}
A.ahO.prototype={
$1(d){var w=this.a,v=w.bB,u=this.b,t=this.c
if(v.ae(0,u)){v=v.D(0,u)
v.toString
u=v.e
u.toString
x.D.a(u)
w.ix(v)
v.e=u
w.A4(0,v,t)
u.c=!1}else w.bk.afp(u,t)},
$S:z+2}
A.ahQ.prototype={
$1(d){var w,v,u
for(w=this.a,v=this.b;w.a>0;){u=v.V$
u.toString
v.JD(u);--w.a}for(;w.b>0;){u=v.bv$
u.toString
v.JD(u);--w.b}w=v.bB
w=w.gaV(w)
u=B.n(w).h("b7<w.E>")
C.b.Y(B.aJ(new B.b7(w,new A.ahP(),u),!0,u.h("w.E")),v.bk.gald())},
$S:z+2}
A.ahP.prototype={
$1(d){var w=d.e
w.toString
return!x.D.a(w).oR$},
$S:333}
A.ahU.prototype={
$1(d){var w=d.id
return w.w||w.z>0},
$S:334}
A.ahT.prototype={
$1(d){var w=this,v=w.c,u=w.a,t=w.b.P6(v,u.b)
return v.QN(w.d,u.a,t)},
$S:132}
A.asg.prototype={
$1(d){var w,v=this.a
if(v.c==null)return
w=v.Ki()
w.toString
v.NY(w)},
$S:2}
A.asl.prototype={
$1(d){this.a.a=d},
$S:11}
A.ask.prototype={
$0(){var w=this.a
w.d.D(0,this.b)
if(w.d.a===0)if($.bN.go$.a<3)w.a7(new A.asi(w))
else{w.f=!1
B.h3(new A.asj(w))}},
$S:0}
A.asi.prototype={
$0(){this.a.f=!1},
$S:0}
A.asj.prototype={
$0(){var w=this.a
if(w.c!=null&&w.d.a===0)w.a7(new A.ash(w))},
$S:0}
A.ash.prototype={
$0(){},
$S:0}
A.avd.prototype={
$0(){var w,v=this.a
v.CD(this.b)
v.as=v.Q=v.f=null
w=v.x
v.x=w==null?0:w+1
v.y=C.eL.zw(v.y,this.c)},
$S:0}
A.ave.prototype={
$1(d){var w=this.a
if(w!=null)w.a.l()
return null},
$S:2}
A.avf.prototype={
$0(){this.a.CD(null)},
$S:0}
A.avg.prototype={
$0(){var w=this.a
w.x=w.f=null
w.y=!1},
$S:0}
A.awR.prototype={
$1(d){var w,v,u,t,s
if(d.ek$===0&&this.a.a.y!=null&&d instanceof B.hQ){w=x.o.a(d.a)
v=w.c
v.toString
u=w.a
u.toString
t=w.b
t.toString
t=Math.max(0,B.U(v,u,t))
u=w.d
u.toString
s=C.d.be(t/Math.max(1,u*w.f))
v=this.a
if(s!==v.d){v.d=s
v.a.y.$1(s)}}return!1},
$S:133}
A.awS.prototype={
$2(d,e){var w=this.a.a
return A.aJL(0,this.b,0,D.AP,null,C.w,e,B.b([new A.Qx(w.r.as,!0,w.z,null)],x.G))},
$S:z+12}
A.ajS.prototype={
$1(d){var w=this
B.h3(new A.ajR(w.a,w.b,w.c,w.d,w.e))},
$S:2}
A.ajR.prototype={
$0(){var w=this
return w.a.tF(w.b,w.c,w.d,w.e)},
$S:0}
A.ayc.prototype={
$0(){var w=this.b,v=this.a
if(w.gn(w).c!==C.d0)v.wd(w,!0)
else v.wd(w,!1)},
$S:0}
A.amQ.prototype={
$1(d){var w,v,u,t,s=this,r=s.b
r.p4=d
u=r.p2
if(u.i(0,d)!=null&&!J.f(u.i(0,d),s.c.i(0,d))){u.m(0,d,r.dY(u.i(0,d),null,d))
s.a.a=!0}w=r.dY(s.c.i(0,d),s.d.d.DT(r,d),d)
if(w!=null){t=s.a
t.a=t.a||!J.f(u.i(0,d),w)
u.m(0,d,w)
u=w.gC().e
u.toString
v=x.D.a(u)
if(d===0)v.a=0
else{u=s.e
if(u.ae(0,d))v.a=u.i(0,d)}if(!v.c)r.p3=x.N.a(w.gC())}else{s.a.a=!0
u.D(0,d)}},
$S:31}
A.amO.prototype={
$0(){return null},
$S:5}
A.amP.prototype={
$0(){return this.a.p2.i(0,this.b)},
$S:336}
A.amN.prototype={
$0(){var w,v,u,t=this,s=t.a
s.p3=t.b==null?null:x.N.a(s.p2.i(0,t.c-1).gC())
w=null
try{u=s.f
u.toString
v=x.j.a(u)
u=s.p4=t.c
w=s.dY(s.p2.i(0,u),v.d.DT(s,u),u)}finally{s.p4=null}u=t.c
s=s.p2
if(w!=null)s.m(0,u,w)
else s.D(0,u)},
$S:0}
A.amR.prototype={
$0(){var w,v,u,t=this
try{v=t.a
u=v.p4=t.b
w=v.dY(v.p2.i(0,u),null,u)}finally{t.a.p4=null}t.a.p2.D(0,t.b)},
$S:0}
A.apr.prototype={
$1(d){var w=this.a
if(w!=null)w=w.$1(d)
else{w=$.bg
if(w==null)w=$.bg=B.d2()
w=w.ajf(this.b)}return w},
$S:4}
A.aps.prototype={
$1(d){var w=this.a
if(w!=null)w=w.$1(d)
else{w=$.bg
if(w==null)w=$.bg=B.d2()
w=w.amc(this.b)}return w},
$S:4};(function aliases(){var w=A.qX.prototype
w.W2=w.S
w.W3=w.I
w.W1=w.vq
w=A.ld.prototype
w.XH=w.k
w=A.eK.prototype
w.XI=w.k
w=A.GJ.prototype
w.Yw=w.am
w.Yx=w.ad
w=A.wo.prototype
w.Iq=w.bo
w=A.jg.prototype
w.Yy=w.am
w.Yz=w.ad
w=A.jZ.prototype
w.XJ=w.EL})();(function installTearOffs(){var w=a._static_2,v=a._instance_1i,u=a._instance_1u,t=a.installInstanceTearOff,s=a._instance_2u
w(A,"aY4","aWH",14)
v(A.Bf.prototype,"gis","A",0)
v(A.wZ.prototype,"gis","A",0)
var r
v(r=A.qX.prototype,"gwp","S",1)
u(r,"galx","aly",4)
u(r=A.O1.prototype,"ga4c","a4d",5)
u(r,"ga3Z","a4_",6)
v(r,"gwp","S",1)
t(A.cp.prototype,"gaia",0,1,null,["$3$crossAxisPosition$mainAxisPosition"],["QN"],7,0,0)
s(r=A.rL.prototype,"ga93","LV",8)
t(r,"gpR",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["e0","pS","lT","nw","lU"],9,0,0)
u(A.ET.prototype,"ga_d","a_e",10)
s(A.FV.prototype,"ga4W","a4X",11)
w(A,"b3p","aFb",15)
v(r=A.H0.prototype,"gfH","H",3)
v(r,"gGn","D",3)
u(A.oN.prototype,"gald","Sg",13)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.B,[A.Bf,A.Yo,A.Yn,A.lA,A.jC,A.Mj,A.UX,A.id,A.UW,A.UY,A.N8,A.Yc,A.ahL,A.jF,A.ahR,A.Lq,A.Qw])
u(A.Yo,[A.di,A.fx])
u(A.Yn,[A.Ha,A.Hb])
t(A.DM,A.Ha)
u(B.b5,[A.apA,A.apC,A.acm,A.ach,A.aco,A.acp,A.ahM,A.ahO,A.ahQ,A.ahP,A.ahU,A.ahT,A.asg,A.asl,A.ave,A.awR,A.ajS,A.amQ,A.apr,A.aps])
u(B.ac,[A.ng,A.tX,A.H9])
u(A.lA,[A.ex,A.Hd,A.tW])
t(A.Hc,A.Hb)
t(A.wZ,A.Hc)
u(B.cK,[A.apB,A.afc,A.acl,A.aci,A.aeN,A.aeO,A.awS])
u(A.jC,[A.rk,A.Dd])
u(B.eu,[A.pP,A.qW,A.zE])
u(B.by,[A.acj,A.ack,A.aeM,A.ask,A.asi,A.asj,A.ash,A.avd,A.avf,A.avg,A.ajR,A.ayc,A.amO,A.amP,A.amN,A.amR])
t(A.qX,A.UX)
u(A.qX,[A.aui,A.O1])
t(A.kG,A.UW)
t(A.acn,A.UY)
u(B.x,[A.Pk,A.jg])
t(A.P9,B.pg)
t(A.Pl,B.iW)
t(A.jY,B.KI)
t(A.Qy,A.Yc)
t(A.wU,B.iJ)
t(A.QA,B.hf)
u(B.cQ,[A.ld,A.oO])
t(A.Yg,A.oO)
t(A.mN,A.Yg)
t(A.cp,B.u)
u(A.cp,[A.GJ,A.Xm])
t(A.Xo,A.GJ)
t(A.Xp,A.Xo)
t(A.jQ,A.Xp)
t(A.PB,A.jQ)
t(A.PA,A.PB)
t(A.Ye,A.ld)
t(A.Yf,A.Ye)
t(A.eK,A.Yf)
t(A.wo,A.Xm)
t(A.rL,A.jg)
t(A.CV,A.rL)
u(B.R,[A.uq,A.o7,A.wa,A.yu])
u(B.V,[A.ET,A.a_6,A.Wf,A.a_y])
u(B.aV,[A.uJ,A.B2,A.Yb])
t(A.OZ,B.r5)
t(A.FV,A.a_6)
t(A.w6,B.rW)
t(A.rp,B.AF)
t(A.pd,B.rX)
u(E.lb,[A.FM,A.Cp])
t(A.yt,B.dh)
t(A.H0,A.a_y)
t(A.QD,B.ap)
t(A.jZ,A.QD)
t(A.oN,B.bm)
t(A.Bm,B.eI)
t(A.Qx,B.M)
t(A.Ya,A.jZ)
t(A.Xn,A.wo)
t(A.tt,B.dW)
t(A.a0_,B.hj)
t(A.a00,A.a0_)
t(A.ZJ,A.a00)
w(A.Ha,B.b2)
w(A.Hb,A.Bf)
w(A.Hc,B.mK)
w(A.UW,B.av)
w(A.UY,B.av)
w(A.UX,B.av)
w(A.Yc,B.av)
v(A.Yg,B.eD)
v(A.GJ,B.aj)
w(A.Xo,A.ahL)
w(A.Xp,A.ahR)
v(A.Ye,B.eD)
w(A.Yf,A.jF)
v(A.Xm,B.aR)
v(A.jg,B.aj)
w(A.a_6,B.dE)
v(A.a_y,K.lL)
w(A.a0_,B.Ch)
w(A.a00,F.RZ)})()
B.bh(b.typeUniverse,JSON.parse('{"fx":{"ax":["1","2"]},"DM":{"b2":["1","2"],"aP":["1","2"],"b2.V":"2","b2.K":"1"},"ng":{"ac":["1"],"w":["1"],"w.E":"1"},"tX":{"ac":["2"],"w":["2"],"w.E":"2"},"H9":{"ac":["ax<1,2>"],"w":["ax<1,2>"],"w.E":"ax<1,2>"},"ex":{"lA":["1","2","1"],"lA.T":"1"},"Hd":{"lA":["1","fx<1,2>","2"],"lA.T":"2"},"tW":{"lA":["1","fx<1,2>","ax<1,2>"],"lA.T":"ax<1,2>"},"wZ":{"mK":["1"],"bD":["1"],"Bf":["1"],"ac":["1"],"w":["1"]},"rk":{"jC":["aDQ"],"jC.T":"aDQ"},"pP":{"X":[]},"qW":{"X":[]},"aDQ":{"jC":["aDQ"]},"Pk":{"x":[],"u":[],"S":[],"ah":[]},"P9":{"x":[],"aR":["x"],"u":[],"S":[],"ah":[]},"Pl":{"x":[],"aR":["x"],"u":[],"S":[],"ah":[]},"wU":{"iJ":[]},"mN":{"oO":[],"eD":["cp"],"cQ":[]},"QA":{"hf":["cp"]},"ld":{"cQ":[]},"oO":{"cQ":[]},"cp":{"u":[],"S":[],"ah":[]},"PA":{"jQ":[],"cp":[],"aj":["x","eK"],"u":[],"S":[],"ah":[],"aj.1":"eK","aj.0":"x"},"PB":{"jQ":[],"cp":[],"aj":["x","eK"],"u":[],"S":[],"ah":[]},"jF":{"cQ":[]},"eK":{"ld":[],"eD":["x"],"jF":[],"cQ":[]},"jQ":{"cp":[],"aj":["x","eK"],"u":[],"S":[],"ah":[]},"wo":{"cp":[],"aR":["cp"],"u":[],"S":[],"ah":[]},"zE":{"X":[]},"rL":{"jg":["1"],"x":[],"aj":["cp","1"],"CM":[],"u":[],"S":[],"ah":[]},"CV":{"jg":["mN"],"x":[],"aj":["cp","mN"],"CM":[],"u":[],"S":[],"ah":[],"aj.1":"mN","jg.0":"mN","aj.0":"cp"},"uq":{"R":[],"c":[]},"ET":{"V":["uq"]},"uJ":{"aV":[],"ap":[],"c":[]},"OZ":{"ap":[],"c":[]},"B2":{"aV":[],"ap":[],"c":[]},"o7":{"R":[],"c":[]},"FV":{"V":["o7"],"dE":[]},"wa":{"R":[],"c":[]},"w6":{"aC":[],"a7":[]},"rp":{"jU":[]},"pd":{"j0":[],"rp":[],"fW":[],"aC":[],"a7":[],"jU":[]},"Wf":{"V":["wa"]},"Dd":{"jC":["1"],"jC.T":"1"},"yu":{"R":[],"c":[]},"yt":{"dh":["dU"],"dU":[],"dh.T":"dU"},"H0":{"V":["yu"]},"QD":{"ap":[],"c":[]},"jZ":{"ap":[],"c":[]},"oN":{"bm":[],"aw":[],"r":[]},"Bm":{"eI":["jF"],"b_":[],"c":[],"eI.T":"jF"},"Qx":{"M":[],"c":[]},"Ya":{"jZ":[],"ap":[],"c":[]},"Yb":{"aV":[],"ap":[],"c":[]},"Xn":{"cp":[],"aR":["cp"],"u":[],"S":[],"ah":[]},"tt":{"dW":[],"ap":[],"c":[]},"ZJ":{"bm":[],"aw":[],"r":[]}}'))
B.i4(b.typeUniverse,JSON.parse('{"Yo":2,"Yn":2,"Ha":2,"Hb":1,"Hc":1,"rL":1}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x=(function rtii(){var w=B.m
return{k:w("az"),w:w("i7"),E:w("kt"),g:w("bY"),I:w("dd"),X:w("Lq<V<o7>>"),Q:w("aw"),r:w("kG"),J:w("hh"),h:w("l<hh>"),A:w("l<I>"),O:w("l<cp>"),F:w("l<j0>"),s:w("l<j>"),G:w("l<c>"),u:w("l<~()>"),C:w("jF"),e:w("a7"),U:w("cY<r2>"),R:w("cY<ec>"),o:w("rp"),V:w("eI<jF>"),x:w("x"),f:w("u"),T:w("cp"),q:w("jQ"),K:w("CV"),t:w("Dd<B>"),B:w("dM"),S:w("jY"),l:w("oN"),D:w("eK"),j:w("jZ"),v:w("oO"),i:w("dO<rk>"),P:w("tt"),W:w("f0<~(B,cZ?)>"),Y:w("f0<~(kG)>"),L:w("pd"),z:w("ne"),Z:w("H"),a:w("W"),p:w("p"),b:w("nB?"),d:w("aw?"),c:w("rr<jF>?"),N:w("x?"),y:w("cp?"),_:w("eK?"),m:w("ne?"),H:w("~"),M:w("~()")}})();(function constants(){D.zc=new A.pP(0,"fill")
D.de=new A.pP(2,"cover")
D.zd=new A.pP(3,"fitWidth")
D.ze=new A.pP(6,"scaleDown")
D.co=new A.qW(3,"noRepeat")
D.mU=new A.zE(0,"pixel")
D.AP=new A.zE(1,"viewport")
D.Dk=new A.Mj(C.o,C.o)
D.Es=new A.qW(0,"repeat")
D.Et=new A.qW(1,"repeatX")
D.Eu=new A.qW(2,"repeatY")
D.Kk=new A.Cp(null)})()}
$__dart_deferred_initializers__["mmXG17zorOf7dEqBqHbUYyZwOM4="] = $__dart_deferred_initializers__.current

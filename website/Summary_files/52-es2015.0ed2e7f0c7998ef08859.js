(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{CQai:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("LRne"),o=n("jhtA"),i=n("vkgz"),r=n("8Y7J"),c=n("iInd");let d=(()=>{class e{constructor(e,t){this._router=e,this._permission=t}canActivate(e,t){return Object(a.a)(this._permission.isBoostaUser).pipe(Object(i.a)(e=>{e||this._router.navigate(["main"])}))}}return e.ngInjectableDef=r["\u0275\u0275defineInjectable"]({factory:function(){return new e(r["\u0275\u0275inject"](c.o),r["\u0275\u0275inject"](o.a))},token:e,providedIn:"root"}),e})()},"wsn/":function(e,t,n){"use strict";n.r(t);var a=n("8Y7J");class o{}var i=n("pMnS"),r=n("iInd"),c=n("3XXW"),d=n("DQLy"),l=n("u47t"),s=n("SxV6"),u=n("1G5W"),p=n("jhtA"),m=n("XNiG"),h=n("ICBH"),b=n("+9kx"),j=n("IPBt");class g{constructor(e,t,n,a,o,i){this._navigationService=e,this._store=t,this._permission=n,this._dialog=a,this._joyrideService=o,this._onBoarding=i,this._destroy$=new m.b,this._onBoarding.joyrideService=this._joyrideService,this._store.pipe(Object(d.x)(l.b),Object(s.a)()).subscribe(e=>{this.startFullTourForUser(e)})}ngOnInit(){}ngAfterViewInit(){}ngOnDestroy(){this._destroy$.next(),this._destroy$.complete()}startFullTourForUser(e){!this._onBoarding.checkTour(b.b.PART_1,e.me.onBoarding)&&this._permission.canUserAddProject?this._showConfirmOnBoardingModal("Do you want to know how to create your first project?",()=>this._onBoarding.startFullTour(),()=>this._onBoarding.showRepeatOnBoardingStep()):this._onBoarding.checkTour(b.b.PART_2,e.me.onBoarding)||this._showConfirmOnBoardingModal("Do you want to see the tutorial on the example of a demo project?",()=>this._onBoarding.startTourDemoProject(),()=>this._onBoarding.showRepeatOnBoardingStep())}_showConfirmOnBoardingModal(e,t,n){let a=this._dialog.open(h.a,{disableClose:!0});a.componentInstance.confirmTitle="Tutorial",a.componentInstance.confirmMessage=e,a.componentInstance.confirmButtonText="YES",a.componentInstance.cancelButtonText="NO",a.afterClosed().pipe(Object(u.a)(this._destroy$)).subscribe(e=>{e?"function"==typeof t&&t():(this._onBoarding.dispatchInsertAction({date:(new Date).toISOString(),tourName:b.b.PART_1,fulfilled:!0}),this._onBoarding.dispatchInsertAction({date:(new Date).toISOString(),tourName:b.b.PART_2,fulfilled:!0}),"function"==typeof n&&n())})}}var f=n("s6ns"),_=a["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;flex:1;max-width:100%}"]],data:{}});function v(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),a["\u0275did"](1,212992,null,0,r.t,[r.b,a.ViewContainerRef,a.ComponentFactoryResolver,[8,null],a.ChangeDetectorRef],null,null)],(function(e,t){e(t,1,0)}),null)}class I{constructor(){}ngOnInit(){}}var y=a["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{max-width:100%}"]],data:{}});function M(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"app-main-container",[],null,null,null,v,_)),a["\u0275did"](1,4440064,null,0,g,[c.a,d.n,p.a,f.e,j.a,b.a],null,null)],(function(e,t){e(t,1,0)}),null)}function P(e){return a["\u0275vid"](0,[(e()(),a["\u0275eld"](0,0,null,null,1,"app-main-view",[],null,null,null,M,y)),a["\u0275did"](1,114688,null,0,I,[],null,null)],(function(e,t){e(t,1,0)}),null)}var A=a["\u0275ccf"]("app-main-view",I,P,{},{},[]),w=n("Z2B9"),E=n("NcP4"),C=n("wyvQ"),O=n("t68o"),N=n("ZTvU"),L=n("SVse"),F=n("s7LF"),R=n("TSSN"),T=n("/q54"),D=n("POq0"),B=n("QQfA"),k=n("IP0z"),S=n("Mz6y"),x=n("cUpR"),U=n("Xd0L"),z=n("gavF"),J=n("LRne"),V=n("Nq0R"),G=n("vkgz");let Z=(()=>{class e{constructor(e,t,n){this._auth=e,this._router=t,this._permission=n}canActivate(e,t){return Object(J.a)(!this._permission.isUnregistered).pipe(Object(G.a)(e=>{e||this._auth.logout()}))}}return e.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new e(a["\u0275\u0275inject"](V.a),a["\u0275\u0275inject"](r.o),a["\u0275\u0275inject"](p.a))},token:e,providedIn:"root"}),e})();var Q=n("HDdC");let H=(()=>{class e{constructor(e,t,n,a,o){this._auth=e,this._router=t,this._location=n,this._userPermissions=a,this._store=o}canActivate(e,t){return new Q.a(t=>{const n=e.paramMap.get("projectId");n&&!this._userPermissions.canEdit(+n)?(t.next(!1),t.complete(),this._router.navigate(["main"])):(t.next(!0),t.complete())})}}return e.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new e(a["\u0275\u0275inject"](V.a),a["\u0275\u0275inject"](r.o),a["\u0275\u0275inject"](L.Location),a["\u0275\u0275inject"](p.a),a["\u0275\u0275inject"](d.n))},token:e,providedIn:"root"}),e})();var q=n("TGPU");let W=(()=>{class e{constructor(e,t){this._router=e,this._permission=t}canActivate(e,t){return Object(J.a)(this._permission.canUserAddProject).pipe(Object(G.a)(e=>{e||this._router.navigate(["main"])}))}}return e.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new e(a["\u0275\u0275inject"](r.o),a["\u0275\u0275inject"](p.a))},token:e,providedIn:"root"}),e})(),X=(()=>{class e{constructor(e,t){this._router=e,this._permission=t}canActivate(e,t){return Object(J.a)(this._permission.isSuperAdmin).pipe(Object(G.a)(e=>{e||this._router.navigate(["main"])}))}}return e.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new e(a["\u0275\u0275inject"](r.o),a["\u0275\u0275inject"](p.a))},token:e,providedIn:"root"}),e})();var Y=n("rDBO"),$=n("AytR"),K=n("CQai"),ee=n("nh+H");let te=(()=>{class e{constructor(e,t,n,a){this._auth=e,this._router=t,this._permission=n,this._dialog=a}canActivate(e,t){const n=e.paramMap.get("projectId");return!(+n!==$.a.demoProjectId&&this._permission.isExpiredProject(+n)&&!this._permission.isExpiredFreeTrial&&(this._dialog.open(ee.a),1))}}return e.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new e(a["\u0275\u0275inject"](V.a),a["\u0275\u0275inject"](r.o),a["\u0275\u0275inject"](p.a),a["\u0275\u0275inject"](f.e))},token:e,providedIn:"root"}),e})(),ne=(()=>{class e{constructor(e,t){this._router=e,this._permission=t}canActivate(e,t){return Object(J.a)(!this._permission.isExpiredFreeTrial).pipe(Object(G.a)(e=>{e||this._router.navigate(["/main/pricing"])}))}}return e.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new e(a["\u0275\u0275inject"](r.o),a["\u0275\u0275inject"](p.a))},token:e,providedIn:"root"}),e})(),ae=(()=>{class e{constructor(e,t){this._router=e,this._permission=t}canActivate(e,t){return Object(J.a)(!this._permission.isGuest).pipe(Object(G.a)(e=>{e||this._router.navigate(["main"])}))}}return e.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new e(a["\u0275\u0275inject"](r.o),a["\u0275\u0275inject"](p.a))},token:e,providedIn:"root"}),e})(),oe=(()=>{class e{constructor(e,t){this._router=e,this._permission=t}canActivate(e,t){return Object(J.a)(!this._permission.isFreeUser).pipe(Object(G.a)(e=>{e||this._router.navigate(["main"])}))}}return e.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new e(a["\u0275\u0275inject"](r.o),a["\u0275\u0275inject"](p.a))},token:e,providedIn:"root"}),e})(),ie=(()=>{class e{constructor(e){this._router=e}canActivate(e,t){return Object(J.a)(!1).pipe(Object(G.a)(()=>{this._router.navigate(["main"])}))}}return e.ngInjectableDef=a["\u0275\u0275defineInjectable"]({factory:function(){return new e(a["\u0275\u0275inject"](r.o))},token:e,providedIn:"root"}),e})();const re=()=>Promise.all([n.e(3),n.e(4),n.e(8),n.e(15),n.e(12),n.e(16),n.e(20),n.e(17),n.e(0),n.e(28)]).then(n.bind(null,"eng9")).then(e=>e.EditorModuleNgFactory),ce={moduleEnable:$.a.createProjectModuleEnabled,name:"Creat project"},de=()=>Promise.all([n.e(3),n.e(4),n.e(8),n.e(15),n.e(12),n.e(16),n.e(20),n.e(17),n.e(0),n.e(28)]).then(n.bind(null,"eng9")).then(e=>e.EditorModuleNgFactory),le={moduleEnable:$.a.editProjectModuleEnabled,name:"Edit project"},se=()=>Promise.all([n.e(3),n.e(7),n.e(4),n.e(12),n.e(16),n.e(17),n.e(0),n.e(30)]).then(n.bind(null,"Vt2M")).then(e=>e.EditorNewModuleNgFactory),ue={moduleEnable:$.a.createProjectNewModuleEnabled,name:"Create project"},pe=()=>Promise.all([n.e(3),n.e(7),n.e(4),n.e(12),n.e(16),n.e(17),n.e(0),n.e(30)]).then(n.bind(null,"Vt2M")).then(e=>e.EditorNewModuleNgFactory),me={moduleEnable:$.a.editProjectNewModuleEnabled,name:"Edit project"},he=()=>Promise.all([n.e(3),n.e(11),n.e(27),n.e(36)]).then(n.bind(null,"YK+w")).then(e=>e.DashboardModuleNgFactory),be={moduleEnable:$.a.dashboardModuleEnabled,name:"Projects"},je=()=>Promise.all([n.e(1),n.e(2),n.e(5),n.e(3),n.e(9),n.e(7),n.e(15),n.e(21),n.e(27),n.e(0),n.e(43)]).then(n.bind(null,"bdvJ")).then(e=>e.ListProjectsModuleNgFactory),ge={moduleEnable:$.a.projectsListModuleEnabled,name:"Projects list"},fe=()=>Promise.all([n.e(3),n.e(15),n.e(25),n.e(0),n.e(35)]).then(n.bind(null,"AeBJ")).then(e=>e.ProjectModuleNgFactory),_e={moduleEnable:$.a.projectModuleEnabled,name:"Project"},ve=()=>Promise.all([n.e(1),n.e(2),n.e(5),n.e(3),n.e(9),n.e(7),n.e(0),n.e(46)]).then(n.bind(null,"seWe")).then(e=>e.NotificationsModuleNgFactory),Ie={moduleEnable:$.a.notificationsModuleEnabled,name:"Notifications"},ye=()=>Promise.all([n.e(1),n.e(2),n.e(5),n.e(3),n.e(9),n.e(45)]).then(n.bind(null,"Rm09")).then(e=>e.SyncControlModuleNgFactory),Me={moduleEnable:$.a.syncControlModuleEnabled,name:"Sync control"},Pe=()=>Promise.all([n.e(1),n.e(2),n.e(5),n.e(3),n.e(8),n.e(15),n.e(16),n.e(0),n.e(40)]).then(n.bind(null,"PVuU")).then(e=>e.AdminPanelModuleNgFactory),Ae={moduleEnable:$.a.adminPanelModuleEnabled,name:"Admin panel"},we=()=>Promise.all([n.e(7),n.e(24),n.e(25),n.e(59)]).then(n.bind(null,"KRGu")).then(e=>e.SeoReportModuleNgFactory),Ee={moduleEnable:$.a.seoReportModuleEnabled,name:"Seo report"},Ce=()=>n.e(58).then(n.bind(null,"vjym")).then(e=>e.SeoReportLandingModuleNgFactory),Oe={moduleEnable:$.a.seoReportModuleEnabled,name:"Seo reports land"},Ne=()=>n.e(47).then(n.bind(null,"PmPi")).then(e=>e.CrawlerDomainTreeGraphModuleNgFactory),Le={moduleEnable:!0,name:"Domain tree graph"},Fe=()=>n.e(54).then(n.bind(null,"pTZz")).then(e=>e.AccountModuleNgFactory),Re={moduleEnable:$.a.accountPageModuleEnabled,name:"Account"},Te=()=>n.e(55).then(n.bind(null,"kLDf")).then(e=>e.PricingModuleNgFactory),De={moduleEnable:$.a.accountPageModuleEnabled,name:"Pricing"};class Be{}var ke=n("3JeX"),Se=n("YqZA"),xe=n("kZCR"),Ue=n("/HVE"),ze=n("Fwaw"),Je=n("Gi4r"),Ve=n("BzsH"),Ge=n("JADR"),Ze=n("02hT"),Qe=n("MF/J"),He=n("ouWZ"),qe=n("IT/a"),We=n("VDRc"),Xe=n("ura0"),Ye=n("Nhcz"),$e=n("u9T3"),Ke=n("5GAg"),et=n("zMNK"),tt=n("hOhj"),nt=n("Zv/1"),at=n("Q+lL"),ot=n("niqm"),it=n("HsOI"),rt=n("oapL"),ct=n("ZwOa"),dt=n("W5yJ"),lt=n("Vk5I"),st=n("8Xlu"),ut=n("Q/Rc"),pt=n("umwn"),mt=n("gRv/"),ht=n("WGHS"),bt=n("4Tq0"),jt=n("3tDr"),gt=n("Btno");n.d(t,"MainModuleNgFactory",(function(){return ft}));var ft=a["\u0275cmf"](o,[],(function(e){return a["\u0275mod"]([a["\u0275mpd"](512,a.ComponentFactoryResolver,a["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,A,w.a,E.a,C.a,O.a,N.a]],[3,a.ComponentFactoryResolver],a.NgModuleRef]),a["\u0275mpd"](4608,L.NgLocalization,L.NgLocaleLocalization,[a.LOCALE_ID,[2,L["\u0275angular_packages_common_common_a"]]]),a["\u0275mpd"](4608,F.z,F.z,[]),a["\u0275mpd"](4608,F.e,F.e,[]),a["\u0275mpd"](4608,R.h,R.g,[]),a["\u0275mpd"](4608,R.c,R.f,[]),a["\u0275mpd"](4608,R.j,R.d,[]),a["\u0275mpd"](4608,R.b,R.a,[]),a["\u0275mpd"](4608,R.k,R.k,[R.l,R.h,R.c,R.j,R.b,R.m,R.n]),a["\u0275mpd"](5120,a.APP_BOOTSTRAP_LISTENER,(function(e,t){return[T.k(e,t)]}),[L.DOCUMENT,a.PLATFORM_ID]),a["\u0275mpd"](4608,D.c,D.c,[]),a["\u0275mpd"](4608,B.c,B.c,[B.i,B.e,a.ComponentFactoryResolver,B.h,B.f,a.Injector,a.NgZone,L.DOCUMENT,k.b,[2,L.Location]]),a["\u0275mpd"](5120,B.j,B.k,[B.c]),a["\u0275mpd"](5120,S.b,S.c,[B.c]),a["\u0275mpd"](4608,x.f,U.c,[[2,U.g],[2,U.l]]),a["\u0275mpd"](5120,f.c,f.d,[B.c]),a["\u0275mpd"](135680,f.e,f.e,[B.c,a.Injector,[2,L.Location],[2,f.b],f.c,[3,f.e],B.e]),a["\u0275mpd"](4608,U.b,U.b,[]),a["\u0275mpd"](5120,z.c,z.j,[B.c]),a["\u0275mpd"](1073742336,L.CommonModule,L.CommonModule,[]),a["\u0275mpd"](1073742336,r.s,r.s,[[2,r.y],[2,r.o]]),a["\u0275mpd"](1073742336,Be,Be,[]),a["\u0275mpd"](1073742336,F.y,F.y,[]),a["\u0275mpd"](1073742336,F.l,F.l,[]),a["\u0275mpd"](1073742336,F.u,F.u,[]),a["\u0275mpd"](1073742336,ke.a,ke.a,[]),a["\u0275mpd"](1073742336,Se.a,Se.a,[]),a["\u0275mpd"](1073742336,xe.a,xe.a,[]),a["\u0275mpd"](1073742336,k.a,k.a,[]),a["\u0275mpd"](1073742336,U.l,U.l,[[2,U.d],[2,x.g]]),a["\u0275mpd"](1073742336,Ue.b,Ue.b,[]),a["\u0275mpd"](1073742336,U.v,U.v,[]),a["\u0275mpd"](1073742336,ze.c,ze.c,[]),a["\u0275mpd"](1073742336,Je.c,Je.c,[]),a["\u0275mpd"](1073742336,Ve.b,Ve.b,[]),a["\u0275mpd"](1073742336,Ge.a,Ge.a,[]),a["\u0275mpd"](1073742336,Ze.b,Ze.b,[]),a["\u0275mpd"](1073742336,R.i,R.i,[]),a["\u0275mpd"](1073742336,Qe.a,Qe.a,[]),a["\u0275mpd"](1073742336,He.a,He.a,[]),a["\u0275mpd"](1073742336,qe.a,qe.a,[]),a["\u0275mpd"](1073742336,T.c,T.c,[]),a["\u0275mpd"](1073742336,We.d,We.d,[]),a["\u0275mpd"](1073742336,Xe.c,Xe.c,[]),a["\u0275mpd"](1073742336,Ye.a,Ye.a,[]),a["\u0275mpd"](1073742336,$e.a,$e.a,[[2,T.h],a.PLATFORM_ID]),a["\u0275mpd"](1073742336,D.d,D.d,[]),a["\u0275mpd"](1073742336,Ke.a,Ke.a,[]),a["\u0275mpd"](1073742336,et.g,et.g,[]),a["\u0275mpd"](1073742336,tt.g,tt.g,[]),a["\u0275mpd"](1073742336,B.g,B.g,[]),a["\u0275mpd"](1073742336,S.e,S.e,[]),a["\u0275mpd"](1073742336,nt.a,nt.a,[]),a["\u0275mpd"](1073742336,U.m,U.m,[]),a["\u0275mpd"](1073742336,U.t,U.t,[]),a["\u0275mpd"](1073742336,at.c,at.c,[]),a["\u0275mpd"](1073742336,ot.a,ot.a,[]),a["\u0275mpd"](1073742336,f.i,f.i,[]),a["\u0275mpd"](1073742336,it.e,it.e,[]),a["\u0275mpd"](1073742336,rt.c,rt.c,[]),a["\u0275mpd"](1073742336,ct.c,ct.c,[]),a["\u0275mpd"](1073742336,dt.c,dt.c,[]),a["\u0275mpd"](1073742336,lt.a,lt.a,[]),a["\u0275mpd"](1073742336,st.a,st.a,[]),a["\u0275mpd"](1073742336,ut.a,ut.a,[]),a["\u0275mpd"](1073742336,pt.a,pt.a,[]),a["\u0275mpd"](1073742336,mt.a,mt.a,[]),a["\u0275mpd"](1073742336,z.i,z.i,[]),a["\u0275mpd"](1073742336,z.f,z.f,[]),a["\u0275mpd"](1073742336,ht.a,ht.a,[]),a["\u0275mpd"](1073742336,bt.a,bt.a,[]),a["\u0275mpd"](1073742336,jt.a,jt.a,[]),a["\u0275mpd"](1073742336,gt.a,gt.a,[]),a["\u0275mpd"](1073742336,o,o,[]),a["\u0275mpd"](1024,r.m,(function(){return[[{path:"",component:I,resolve:{colors:q.a},children:[{path:"",redirectTo:"dashboard",pathMatch:"prefix"},{path:"create-project-pro",loadChildren:re,canActivate:[ie,W,Z,ae,oe],canLoad:[Y.a],data:ce},{path:"edit-project-pro/:projectId",loadChildren:de,canActivate:[H,Z,ae,oe],canLoad:[Y.a],data:le},{path:"create-project",loadChildren:se,canActivate:[W,Z,ne],canLoad:[Y.a],data:ue},{path:"edit-project/:projectId",loadChildren:pe,canActivate:[H,Z,ne],canLoad:[Y.a],data:me},{path:"dashboard",loadChildren:he,canActivate:[Z],canLoad:[Y.a],data:be},{path:"list",loadChildren:je,canActivate:[Z,ae],canLoad:[Y.a],data:ge},{path:"project/:projectId",loadChildren:fe,canActivate:[te,ne],canLoad:[Y.a],data:_e},{path:"notifications",loadChildren:ve,canActivate:[Z,K.a],canLoad:[Y.a],data:Ie},{path:"sync-control",loadChildren:ye,canActivate:[X],canLoad:[Y.a],data:Me},{path:"admin-panel",loadChildren:Pe,canActivate:[X],canLoad:[Y.a],data:Ae},{path:"seo-report",loadChildren:we,canActivate:[],canLoad:[Y.a],data:Ee},{path:"seo-reports-land",loadChildren:Ce,canLoad:[Y.a],data:Oe},{path:"crawler-domain-tree-graph/:crawlerToken",loadChildren:Ne,canActivate:[],canLoad:[Y.a],data:Le},{path:"account",loadChildren:Fe,canActivate:[Z],canLoad:[Y.a],data:Re},{path:"pricing",loadChildren:Te,canActivate:[Z],canLoad:[Y.a],data:De}]}],[]]}),[]),a["\u0275mpd"](256,R.n,void 0,[]),a["\u0275mpd"](256,R.m,void 0,[])])}))}}]);
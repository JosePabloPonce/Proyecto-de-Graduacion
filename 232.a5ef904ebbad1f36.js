"use strict";(self.webpackChunkFrontend=self.webpackChunkFrontend||[]).push([[232],{232:(A,d,e)=>{e.r(d),e.d(d,{HistoryListModule:()=>C});var u=e(6814),c=e(1567),l=e(5861),t=e(5879),g=e(7337),p=e(9862);let h=(()=>{class o{constructor(n){this.http=n}getConteos(){return this.http.get(`${g.N.baseUrl}datos`)}getHV(n){return this.http.get(`${g.N.baseUrl}total/${n}`)}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(p.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var m=e(833),i=e(7983);const f=function(o){return["/history-details",o]};function Z(o,r){if(1&o&&(t.TgZ(0,"tr")(1,"td",7),t._uU(2),t.qZA(),t.TgZ(3,"td",7),t._uU(4),t.qZA(),t.TgZ(5,"td",7),t._uU(6),t.qZA(),t.TgZ(7,"td",7),t._uU(8),t.qZA(),t.TgZ(9,"td",7),t._uU(10),t.qZA(),t.TgZ(11,"td",7)(12,"a",10),t._uU(13,"Ver mas"),t.qZA()()()),2&o){const n=r.$implicit;t.xp6(2),t.Oqu(n.cepa),t.xp6(2),t.Oqu(n.generacion),t.xp6(2),t.Oqu(n.codigo_crianza),t.xp6(2),t.Oqu(n.especie),t.xp6(2),t.Oqu(n.total_huevos_intactos),t.xp6(2),t.Q6J("routerLink",t.VKq(6,f,n.id))}}const y=function(){return{x:"1500px"}},v=[{path:"",component:(()=>{class o{getTotalHV(n){var s=this;return(0,l.Z)(function*(){return(yield s.randomUserService.getHV(n).toPromise())[0].HV})()}getConteos(){var n=this;return(0,l.Z)(function*(){n.loading=!0;const s=yield n.randomUserService.getConteos().toPromise();for(let a of s){const L=yield n.getTotalHV(a.id);a.total_huevos_intactos=L}n.listOfData=s,n.loading=!1})()}constructor(n){this.randomUserService=n,this.results=11,this.loading=!0,this.listOfData=[]}ngOnInit(){this.getConteos()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(h))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-history-list"]],decls:25,vars:5,consts:[[1,"container-fluid","color",2,"min-height","100%"],[1,"container",2,"padding-bottom","10px","padding-top","100px"],[2,"height","100%"],[1,"text-center",2,"margin-bottom","50px","color","#f2f9f1"],["nzTableLayout","fixed",3,"nzLoading","nzScroll","nzData"],["editRowTable","","basicTable",""],[1,"custom-header"],["nzAlign","center"],[1,"custom-body"],[4,"ngFor","ngForOf"],[2,"font-weight","bold","color","rgb(232, 255, 238)","text-decoration","underline","color","#388e3c","border-radius","5px",3,"routerLink"]],template:function(n,s){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-navbar"),t.TgZ(3,"div",2)(4,"h1",3),t._uU(5," Historial de Detecciones "),t.qZA(),t.TgZ(6,"nz-table",4,5)(9,"thead")(10,"tr",6)(11,"th",7),t._uU(12,"Cepa"),t.qZA(),t.TgZ(13,"th",7),t._uU(14,"Generaci\xf3n"),t.qZA(),t.TgZ(15,"th",7),t._uU(16,"C\xf3digo Crianza"),t.qZA(),t.TgZ(17,"th",7),t._uU(18,"Especie"),t.qZA(),t.TgZ(19,"th",7),t._uU(20,"Total Huevos Viables"),t.qZA(),t.TgZ(21,"th",7),t._uU(22,"Mas"),t.qZA()()(),t.TgZ(23,"tbody",8),t.YNc(24,Z,14,8,"tr",9),t.qZA()()()()()),2&n){const a=t.MAs(8);t.xp6(6),t.Q6J("nzLoading",s.loading)("nzScroll",t.DdM(4,y))("nzData",s.listOfData),t.xp6(18),t.Q6J("ngForOf",a.data)}},dependencies:[u.sg,c.rH,m.S,i.N8,i.Uo,i._C,i.Om,i.p0,i.$Z,i.UX],styles:[".color[_ngcontent-%COMP%]{background-color:#8bc34a}.custom-header[_ngcontent-%COMP%]{background-color:#388e3c}.custom-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#388e3c;color:#f2f9f1}.custom-body[_ngcontent-%COMP%]{background-color:#ddeedf}"]}),o})()}];let T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(v),c.Bz]}),o})();var U=e(2552),H=e(6161);let C=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,T,U.m,i.HQ,H.uK]}),o})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"e9/s":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("9AJC"),i=u("pMnS"),d=u("gIcY"),a=u("4GxJ"),r=u("Ip0R"),s=u("K+Kt"),p=u("scma"),c=u("AytR"),g=u("t/Na"),m=function(){function l(l){this.http=l}return l.prototype.DeliveriesAndReturnsReport=function(l){return this.http.post(c.a.apiURL+"Operation/DeliveriesAndReturnsReport",l)},l.ngInjectableDef=e.defineInjectable({factory:function(){return new l(e.inject(g.c))},token:l,providedIn:"root"}),l}(),v=u("K9Ia"),h=function(){function l(l,n){this.serviceApi=l,this.patterns=n,this.sinImputarValue="B",this.dtOptions={},this.dtTrigger=new v.a,this.item={Address:null,Code:null,CustmerName:null,DateFrom:null,DateTo:null,IsDeliverd:null,Mobile:null,ShipmentDt:null}}return l.prototype.ngAfterViewInit=function(){this.dtTrigger.next(),this.dtElement.dtInstance.then(function(l){l.state.clear()})},l.prototype.refreshDataSource=function(l){var n=this;this.dtElement.dtInstance.then(function(u){u.destroy(),n.list=l,n.dtTrigger.next()})},l.prototype.save=function(){var l=this;this.item.IsDeliverd="D"===this.sinImputarValue||"R"!==this.sinImputarValue&&null,this.serviceApi.DeliveriesAndReturnsReport(this.item).subscribe(function(n){l.list=n})},l.prototype.print=function(){var l=new jsPDF,n={"#editor":function(l,n){return!0}},u=document.getElementById("user");setTimeout(function(){l.fromHTML(u,15,15,{width:190,elementHandlers:n},function(){window.open(l.output("bloburl"),"_blank")})},0)},l.prototype.ngOnInit=function(){this.dtOptions={pagingType:"full_numbers",stateSave:!0}},l}(),C=e["\u0275crt"]({encapsulation:2,styles:[],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function f(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](2,null,["",""])),(l()(),e["\u0275eld"](3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e["\u0275ted"](4,null,["",""])),(l()(),e["\u0275eld"](5,0,null,null,1,"td",[["class","center"]],null,null,null,null,null)),(l()(),e["\u0275ted"](6,null,[""," - "," -"," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.Code),l(n,4,0,n.context.$implicit.ShipmentValue),l(n,6,0,n.context.$implicit.ShipmentDt.day,n.context.$implicit.ShipmentDt.month,n.context.$implicit.ShipmentDt.year)})}function b(l){return e["\u0275vid"](0,[e["\u0275qud"](402653184,1,{detailsForm:0}),(l()(),e["\u0275eld"](1,0,null,null,169,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,147,"form",[["class","row"],["name","detailsForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e["\u0275nov"](l,4).onSubmit(u)&&t),"reset"===n&&(t=!1!==e["\u0275nov"](l,4).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.save()&&t),t},null,null)),e["\u0275did"](3,16384,null,0,d.v,[],null,null),e["\u0275did"](4,4210688,[[1,4],["detailsForm",4]],0,d.m,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,d.b,null,[d.m]),e["\u0275did"](6,16384,null,0,d.l,[[4,d.b]],null,null),(l()(),e["\u0275eld"](7,0,null,null,142,"div",[["class","col col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,141,"div",[["class","card mb-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](9,0,null,null,139,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,138,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,16,"div",[["class","col-xl-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,2,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Date From "])),(l()(),e["\u0275ted"](-1,null,[": "])),(l()(),e["\u0275eld"](15,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,11,"div",[["class","input-group datepicker-input"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,16777216,null,null,8,"input",[["class","form-control"],["name","dp"],["ngbDatepicker",""],["placeholder","yyyy-mm-dd"]],[[8,"disabled",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,18)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,18).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,18)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,18)._compositionEnd(u.target.value)&&t),"input"===n&&(t=!1!==e["\u0275nov"](l,20).manualDateChange(u.target.value)&&t),"change"===n&&(t=!1!==e["\u0275nov"](l,20).manualDateChange(u.target.value,!0)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,20).onBlur()&&t),"ngModelChange"===n&&(t=!1!==(o.item.DateFrom=u)&&t),t},null,null)),e["\u0275did"](18,16384,null,0,d.c,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["\u0275prd"](512,null,a.tb,a.tb,[a.i,a.s]),e["\u0275did"](20,671744,[["dd",4]],0,a.y,[a.p,e.ElementRef,e.ViewContainerRef,e.Renderer2,e.ComponentFactoryResolver,e.NgZone,a.tb,a.i,a.o,r.DOCUMENT],null,null),e["\u0275prd"](1024,null,d.h,function(l){return[l]},[a.y]),e["\u0275prd"](1024,null,d.i,function(l,n){return[l,n]},[d.c,a.y]),e["\u0275did"](23,671744,[["FromDT",4]],0,d.n,[[2,d.b],[6,d.h],[8,null],[6,d.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.j,null,[d.n]),e["\u0275did"](25,16384,null,0,d.k,[[4,d.j]],null,null),(l()(),e["\u0275eld"](26,0,null,null,1,"button",[["class","input-group-addon"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,20).toggle()&&t),t},null,null)),(l()(),e["\u0275eld"](27,0,null,null,0,"span",[["class","fa fa-calendar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](28,0,null,null,16,"div",[["class","col-xl-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,2,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Date To "])),(l()(),e["\u0275ted"](-1,null,[": "])),(l()(),e["\u0275eld"](32,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](33,0,null,null,11,"div",[["class","input-group datepicker-input"]],null,null,null,null,null)),(l()(),e["\u0275eld"](34,16777216,null,null,8,"input",[["class","form-control"],["name","dp"],["ngbDatepicker",""],["placeholder","yyyy-mm-dd"]],[[8,"disabled",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,35)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,35).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,35)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,35)._compositionEnd(u.target.value)&&t),"input"===n&&(t=!1!==e["\u0275nov"](l,37).manualDateChange(u.target.value)&&t),"change"===n&&(t=!1!==e["\u0275nov"](l,37).manualDateChange(u.target.value,!0)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,37).onBlur()&&t),"ngModelChange"===n&&(t=!1!==(o.item.DateTo=u)&&t),t},null,null)),e["\u0275did"](35,16384,null,0,d.c,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["\u0275prd"](512,null,a.tb,a.tb,[a.i,a.s]),e["\u0275did"](37,671744,[["ddt",4]],0,a.y,[a.p,e.ElementRef,e.ViewContainerRef,e.Renderer2,e.ComponentFactoryResolver,e.NgZone,a.tb,a.i,a.o,r.DOCUMENT],null,null),e["\u0275prd"](1024,null,d.h,function(l){return[l]},[a.y]),e["\u0275prd"](1024,null,d.i,function(l,n){return[l,n]},[d.c,a.y]),e["\u0275did"](40,671744,[["ToDT",4]],0,d.n,[[2,d.b],[6,d.h],[8,null],[6,d.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.j,null,[d.n]),e["\u0275did"](42,16384,null,0,d.k,[[4,d.j]],null,null),(l()(),e["\u0275eld"](43,0,null,null,1,"button",[["class","input-group-addon"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,37).toggle()&&t),t},null,null)),(l()(),e["\u0275eld"](44,0,null,null,0,"span",[["class","fa fa-calendar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](45,0,null,null,11,"div",[["class","col-xl-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Code"])),(l()(),e["\u0275eld"](48,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](49,0,null,null,7,"input",[["autofocus",""],["class","form-control"],["name","Code"],["type","text"]],[[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,50)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,50).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,50)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,50)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.item.Code=u)&&t),t},null,null)),e["\u0275did"](50,16384,null,0,d.c,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["\u0275did"](51,540672,null,0,d.p,[],{pattern:[0,"pattern"]},null),e["\u0275prd"](1024,null,d.h,function(l){return[l]},[d.p]),e["\u0275prd"](1024,null,d.i,function(l){return[l]},[d.c]),e["\u0275did"](54,671744,[["Code",4]],0,d.n,[[2,d.b],[6,d.h],[8,null],[6,d.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.j,null,[d.n]),e["\u0275did"](56,16384,null,0,d.k,[[4,d.j]],null,null),(l()(),e["\u0275eld"](57,0,null,null,11,"div",[["class","col-xl-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](58,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Name"])),(l()(),e["\u0275eld"](60,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](61,0,null,null,7,"input",[["autofocus",""],["class","form-control"],["name","NameEn"],["type","text"]],[[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,62)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,62).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,62)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,62)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.item.CustmerName=u)&&t),t},null,null)),e["\u0275did"](62,16384,null,0,d.c,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["\u0275did"](63,540672,null,0,d.p,[],{pattern:[0,"pattern"]},null),e["\u0275prd"](1024,null,d.h,function(l){return[l]},[d.p]),e["\u0275prd"](1024,null,d.i,function(l){return[l]},[d.c]),e["\u0275did"](66,671744,[["NameEn",4]],0,d.n,[[2,d.b],[6,d.h],[8,null],[6,d.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.j,null,[d.n]),e["\u0275did"](68,16384,null,0,d.k,[[4,d.j]],null,null),(l()(),e["\u0275eld"](69,0,null,null,11,"div",[["class","col-xl-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](70,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Address"])),(l()(),e["\u0275eld"](72,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](73,0,null,null,7,"input",[["autofocus",""],["class","form-control"],["name","Address"],["type","text"]],[[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,74)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,74).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,74)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,74)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.item.Address=u)&&t),t},null,null)),e["\u0275did"](74,16384,null,0,d.c,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["\u0275did"](75,540672,null,0,d.p,[],{pattern:[0,"pattern"]},null),e["\u0275prd"](1024,null,d.h,function(l){return[l]},[d.p]),e["\u0275prd"](1024,null,d.i,function(l){return[l]},[d.c]),e["\u0275did"](78,671744,[["Address",4]],0,d.n,[[2,d.b],[6,d.h],[8,null],[6,d.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.j,null,[d.n]),e["\u0275did"](80,16384,null,0,d.k,[[4,d.j]],null,null),(l()(),e["\u0275eld"](81,0,null,null,11,"div",[["class","col-xl-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](82,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Phone Number"])),(l()(),e["\u0275eld"](84,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](85,0,null,null,7,"input",[["autofocus",""],["class","form-control"],["name","Mobile"],["type","text"]],[[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,86)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,86).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,86)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,86)._compositionEnd(u.target.value)&&t),"ngModelChange"===n&&(t=!1!==(o.item.Mobile=u)&&t),t},null,null)),e["\u0275did"](86,16384,null,0,d.c,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["\u0275did"](87,540672,null,0,d.p,[],{pattern:[0,"pattern"]},null),e["\u0275prd"](1024,null,d.h,function(l){return[l]},[d.p]),e["\u0275prd"](1024,null,d.i,function(l){return[l]},[d.c]),e["\u0275did"](90,671744,[["Mobile",4]],0,d.n,[[2,d.b],[6,d.h],[8,null],[6,d.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.j,null,[d.n]),e["\u0275did"](92,16384,null,0,d.k,[[4,d.j]],null,null),(l()(),e["\u0275eld"](93,0,null,null,15,"div",[["class","col-xl-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](94,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Shipment Date "])),(l()(),e["\u0275eld"](96,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](97,0,null,null,11,"div",[["class","input-group datepicker-input"]],null,null,null,null,null)),(l()(),e["\u0275eld"](98,16777216,null,null,8,"input",[["class","form-control"],["name","dp"],["ngbDatepicker",""],["placeholder","yyyy-mm-dd"]],[[8,"disabled",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,99)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,99).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,99)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,99)._compositionEnd(u.target.value)&&t),"input"===n&&(t=!1!==e["\u0275nov"](l,101).manualDateChange(u.target.value)&&t),"change"===n&&(t=!1!==e["\u0275nov"](l,101).manualDateChange(u.target.value,!0)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,101).onBlur()&&t),"ngModelChange"===n&&(t=!1!==(o.item.ShipmentDt=u)&&t),t},null,null)),e["\u0275did"](99,16384,null,0,d.c,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["\u0275prd"](512,null,a.tb,a.tb,[a.i,a.s]),e["\u0275did"](101,671744,[["d",4]],0,a.y,[a.p,e.ElementRef,e.ViewContainerRef,e.Renderer2,e.ComponentFactoryResolver,e.NgZone,a.tb,a.i,a.o,r.DOCUMENT],null,null),e["\u0275prd"](1024,null,d.h,function(l){return[l]},[a.y]),e["\u0275prd"](1024,null,d.i,function(l,n){return[l,n]},[d.c,a.y]),e["\u0275did"](104,671744,[["ShipmentDt",4]],0,d.n,[[2,d.b],[6,d.h],[8,null],[6,d.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.j,null,[d.n]),e["\u0275did"](106,16384,null,0,d.k,[[4,d.j]],null,null),(l()(),e["\u0275eld"](107,0,null,null,1,"button",[["class","input-group-addon"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,101).toggle()&&t),t},null,null)),(l()(),e["\u0275eld"](108,0,null,null,0,"span",[["class","fa fa-calendar"]],null,null,null,null,null)),(l()(),e["\u0275eld"](109,0,null,null,33,"div",[["class","col-xl-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](110,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" state "])),(l()(),e["\u0275eld"](112,0,null,null,30,"div",[["class","form-group"],["style","padding-top: 5px"]],null,null,null,null,null)),(l()(),e["\u0275eld"](113,0,null,null,8,"label",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275eld"](114,0,null,null,6,"input",[["id","option1"],["name","options"],["type","radio"],["value","D"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,115)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,115).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,115)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,115)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e["\u0275nov"](l,116).onChange()&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,116).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.sinImputarValue=u)&&t),t},null,null)),e["\u0275did"](115,16384,null,0,d.c,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["\u0275did"](116,212992,null,0,d.q,[e.Renderer2,e.ElementRef,d.w,e.Injector],{name:[0,"name"],value:[1,"value"]},null),e["\u0275prd"](1024,null,d.i,function(l,n){return[l,n]},[d.c,d.q]),e["\u0275did"](118,671744,null,0,d.n,[[2,d.b],[8,null],[8,null],[6,d.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.j,null,[d.n]),e["\u0275did"](120,16384,null,0,d.k,[[4,d.j]],null,null),(l()(),e["\u0275ted"](-1,null,[" Deliveries "])),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](123,0,null,null,8,"label",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275eld"](124,0,null,null,6,"input",[["id","option2"],["name","options"],["type","radio"],["value","R"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,125)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,125).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,125)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,125)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e["\u0275nov"](l,126).onChange()&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,126).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.sinImputarValue=u)&&t),t},null,null)),e["\u0275did"](125,16384,null,0,d.c,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["\u0275did"](126,212992,null,0,d.q,[e.Renderer2,e.ElementRef,d.w,e.Injector],{name:[0,"name"],value:[1,"value"]},null),e["\u0275prd"](1024,null,d.i,function(l,n){return[l,n]},[d.c,d.q]),e["\u0275did"](128,671744,null,0,d.n,[[2,d.b],[8,null],[8,null],[6,d.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.j,null,[d.n]),e["\u0275did"](130,16384,null,0,d.k,[[4,d.j]],null,null),(l()(),e["\u0275ted"](-1,null,[" Returns "])),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](133,0,null,null,8,"label",[["class",""]],null,null,null,null,null)),(l()(),e["\u0275eld"](134,0,null,null,6,"input",[["id","option3"],["name","options"],["type","radio"],["value","B"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,o=l.component;return"input"===n&&(t=!1!==e["\u0275nov"](l,135)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,135).onTouched()&&t),"compositionstart"===n&&(t=!1!==e["\u0275nov"](l,135)._compositionStart()&&t),"compositionend"===n&&(t=!1!==e["\u0275nov"](l,135)._compositionEnd(u.target.value)&&t),"change"===n&&(t=!1!==e["\u0275nov"](l,136).onChange()&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,136).onTouched()&&t),"ngModelChange"===n&&(t=!1!==(o.sinImputarValue=u)&&t),t},null,null)),e["\u0275did"](135,16384,null,0,d.c,[e.Renderer2,e.ElementRef,[2,d.a]],null,null),e["\u0275did"](136,212992,null,0,d.q,[e.Renderer2,e.ElementRef,d.w,e.Injector],{name:[0,"name"],value:[1,"value"]},null),e["\u0275prd"](1024,null,d.i,function(l,n){return[l,n]},[d.c,d.q]),e["\u0275did"](138,671744,null,0,d.n,[[2,d.b],[8,null],[8,null],[6,d.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,d.j,null,[d.n]),e["\u0275did"](140,16384,null,0,d.k,[[4,d.j]],null,null),(l()(),e["\u0275ted"](-1,null,[" Both "])),(l()(),e["\u0275ted"](-1,null,[" \xa0 "])),(l()(),e["\u0275eld"](143,0,null,null,5,"div",[["class","col-xl-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](144,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](145,0,null,null,3,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](146,0,null,null,2,"button",[["class","btn btn-success"],["style","margin-top: 30px"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Search "])),(l()(),e["\u0275eld"](148,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-floppy-o"]],null,null,null,null,null)),(l()(),e["\u0275eld"](149,0,null,null,0,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),e["\u0275eld"](150,0,null,null,20,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](151,0,null,null,14,"div",[["class","popup card-body"],["id","user"]],null,null,null,null,null)),(l()(),e["\u0275eld"](152,0,null,null,13,"div",[["class","details"]],null,null,null,null,null)),(l()(),e["\u0275eld"](153,0,null,null,12,"table",[["class","table table-striped row-border hover"],["datatable",""]],null,null,null,null,null)),e["\u0275did"](154,212992,null,0,s.a,[e.ElementRef],{dtOptions:[0,"dtOptions"],dtTrigger:[1,"dtTrigger"]},null),(l()(),e["\u0275eld"](155,0,null,null,7,"thead",[["id","table"]],null,null,null,null,null)),(l()(),e["\u0275eld"](156,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](157,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Code"])),(l()(),e["\u0275eld"](159,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Shipment Value"])),(l()(),e["\u0275eld"](161,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Shipment Date"])),(l()(),e["\u0275eld"](163,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](165,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](166,0,null,null,4,"div",[["class","card-footer"]],null,null,null,null,null)),(l()(),e["\u0275eld"](167,0,null,null,3,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),e["\u0275eld"](168,0,null,null,2,"button",[["class","btn btn-success"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.print()&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Print "])),(l()(),e["\u0275eld"](170,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-print"]],null,null,null,null,null))],function(l,n){var u=n.component;l(n,23,0,"dp",u.item.DateFrom),l(n,40,0,"dp",u.item.DateTo),l(n,51,0,e["\u0275inlineInterpolate"](1,"",u.patterns.Alphanumeric,"")),l(n,54,0,"Code",u.item.Code),l(n,63,0,e["\u0275inlineInterpolate"](1,"",u.patterns.Alphanumeric,"")),l(n,66,0,"NameEn",u.item.CustmerName),l(n,75,0,e["\u0275inlineInterpolate"](1,"",u.patterns.Alphanumeric,"")),l(n,78,0,"Address",u.item.Address),l(n,87,0,e["\u0275inlineInterpolate"](1,"",u.patterns.Alphanumeric,"")),l(n,90,0,"Mobile",u.item.Mobile),l(n,104,0,"dp",u.item.ShipmentDt),l(n,116,0,"options","D"),l(n,118,0,"options",u.sinImputarValue),l(n,126,0,"options","R"),l(n,128,0,"options",u.sinImputarValue),l(n,136,0,"options","B"),l(n,138,0,"options",u.sinImputarValue),l(n,154,0,u.dtOptions,u.dtTrigger),l(n,165,0,u.list)},function(l,n){l(n,1,0,void 0),l(n,2,0,e["\u0275nov"](n,6).ngClassUntouched,e["\u0275nov"](n,6).ngClassTouched,e["\u0275nov"](n,6).ngClassPristine,e["\u0275nov"](n,6).ngClassDirty,e["\u0275nov"](n,6).ngClassValid,e["\u0275nov"](n,6).ngClassInvalid,e["\u0275nov"](n,6).ngClassPending),l(n,17,0,e["\u0275nov"](n,20).disabled,e["\u0275nov"](n,25).ngClassUntouched,e["\u0275nov"](n,25).ngClassTouched,e["\u0275nov"](n,25).ngClassPristine,e["\u0275nov"](n,25).ngClassDirty,e["\u0275nov"](n,25).ngClassValid,e["\u0275nov"](n,25).ngClassInvalid,e["\u0275nov"](n,25).ngClassPending),l(n,34,0,e["\u0275nov"](n,37).disabled,e["\u0275nov"](n,42).ngClassUntouched,e["\u0275nov"](n,42).ngClassTouched,e["\u0275nov"](n,42).ngClassPristine,e["\u0275nov"](n,42).ngClassDirty,e["\u0275nov"](n,42).ngClassValid,e["\u0275nov"](n,42).ngClassInvalid,e["\u0275nov"](n,42).ngClassPending),l(n,49,0,e["\u0275nov"](n,51).pattern?e["\u0275nov"](n,51).pattern:null,e["\u0275nov"](n,56).ngClassUntouched,e["\u0275nov"](n,56).ngClassTouched,e["\u0275nov"](n,56).ngClassPristine,e["\u0275nov"](n,56).ngClassDirty,e["\u0275nov"](n,56).ngClassValid,e["\u0275nov"](n,56).ngClassInvalid,e["\u0275nov"](n,56).ngClassPending),l(n,61,0,e["\u0275nov"](n,63).pattern?e["\u0275nov"](n,63).pattern:null,e["\u0275nov"](n,68).ngClassUntouched,e["\u0275nov"](n,68).ngClassTouched,e["\u0275nov"](n,68).ngClassPristine,e["\u0275nov"](n,68).ngClassDirty,e["\u0275nov"](n,68).ngClassValid,e["\u0275nov"](n,68).ngClassInvalid,e["\u0275nov"](n,68).ngClassPending),l(n,73,0,e["\u0275nov"](n,75).pattern?e["\u0275nov"](n,75).pattern:null,e["\u0275nov"](n,80).ngClassUntouched,e["\u0275nov"](n,80).ngClassTouched,e["\u0275nov"](n,80).ngClassPristine,e["\u0275nov"](n,80).ngClassDirty,e["\u0275nov"](n,80).ngClassValid,e["\u0275nov"](n,80).ngClassInvalid,e["\u0275nov"](n,80).ngClassPending),l(n,85,0,e["\u0275nov"](n,87).pattern?e["\u0275nov"](n,87).pattern:null,e["\u0275nov"](n,92).ngClassUntouched,e["\u0275nov"](n,92).ngClassTouched,e["\u0275nov"](n,92).ngClassPristine,e["\u0275nov"](n,92).ngClassDirty,e["\u0275nov"](n,92).ngClassValid,e["\u0275nov"](n,92).ngClassInvalid,e["\u0275nov"](n,92).ngClassPending),l(n,98,0,e["\u0275nov"](n,101).disabled,e["\u0275nov"](n,106).ngClassUntouched,e["\u0275nov"](n,106).ngClassTouched,e["\u0275nov"](n,106).ngClassPristine,e["\u0275nov"](n,106).ngClassDirty,e["\u0275nov"](n,106).ngClassValid,e["\u0275nov"](n,106).ngClassInvalid,e["\u0275nov"](n,106).ngClassPending),l(n,114,0,e["\u0275nov"](n,120).ngClassUntouched,e["\u0275nov"](n,120).ngClassTouched,e["\u0275nov"](n,120).ngClassPristine,e["\u0275nov"](n,120).ngClassDirty,e["\u0275nov"](n,120).ngClassValid,e["\u0275nov"](n,120).ngClassInvalid,e["\u0275nov"](n,120).ngClassPending),l(n,124,0,e["\u0275nov"](n,130).ngClassUntouched,e["\u0275nov"](n,130).ngClassTouched,e["\u0275nov"](n,130).ngClassPristine,e["\u0275nov"](n,130).ngClassDirty,e["\u0275nov"](n,130).ngClassValid,e["\u0275nov"](n,130).ngClassInvalid,e["\u0275nov"](n,130).ngClassPending),l(n,134,0,e["\u0275nov"](n,140).ngClassUntouched,e["\u0275nov"](n,140).ngClassTouched,e["\u0275nov"](n,140).ngClassPristine,e["\u0275nov"](n,140).ngClassDirty,e["\u0275nov"](n,140).ngClassValid,e["\u0275nov"](n,140).ngClassInvalid,e["\u0275nov"](n,140).ngClassPending),l(n,146,0,e["\u0275nov"](n,4).invalid)})}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"deliveries-and-returns-page",[],null,null,null,b,C)),e["\u0275did"](1,4308992,null,0,h,[m,p.a],null,null)],function(l,n){l(n,1,0)},null)}var R=e["\u0275ccf"]("deliveries-and-returns-page",h,y,{},{},[]),D=u("xK8f"),I=u("uUQW"),T=u("fCu2"),M=u("Xe8C"),E=u("ZYCi"),_=function(){return function(){}}(),S=u("axVG"),k=u("+Sv0"),j=u("Fo5n");u.d(n,"DeliveriesAndReturnsModuleNgFactory",function(){return V});var V=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.b,i.a,R,D.a,I.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,d.d,d.d,[]),e["\u0275mpd"](4608,d.w,d.w,[]),e["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[e.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](5120,T.e,T.c,[T.b]),e["\u0275mpd"](4608,M.a,M.a,[]),e["\u0275mpd"](4608,m,m,[g.c]),e["\u0275mpd"](1073742336,d.t,d.t,[]),e["\u0275mpd"](1073742336,d.r,d.r,[]),e["\u0275mpd"](1073742336,d.g,d.g,[]),e["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),e["\u0275mpd"](1073742336,a.t,a.t,[]),e["\u0275mpd"](1073742336,E.o,E.o,[[2,E.u],[2,E.l]]),e["\u0275mpd"](1073742336,_,_,[]),e["\u0275mpd"](1073742336,S.a,S.a,[]),e["\u0275mpd"](1073742336,k.a,k.a,[]),e["\u0275mpd"](1073742336,j.c,j.c,[]),e["\u0275mpd"](1073742336,T.a,T.a,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,E.j,function(){return[[{path:"",component:h}]]},[]),e["\u0275mpd"](256,T.b,{confirmButtonType:"danger"},[])])})}}]);
import{b as Q,c as G}from"./chunk-IEMUFTIR.js";import{P as A,Q as j,V as U,Wa as Z,X as W,Xa as P,Ya as q,ea as $,wb as H}from"./chunk-H4FLD7FE.js";import{$b as v,Gb as x,Hb as a,I as p,Ib as M,Ja as S,Jb as l,Lb as T,Lc as V,Ma as D,Oc as u,Sb as C,Xb as f,Yb as m,Zb as z,_b as g,ga as s,gc as c,la as y,lb as r,lc as O,mb as o,mc as F,na as E,nc as L,pc as w,q as b,qc as _,tb as N,ub as I,w as k,yc as R}from"./chunk-E7CUTTOV.js";var te=["switchElement"];function ie(t,h){t&1&&z(0,"span",3)}function ne(t,h){if(t&1&&(g(0),w(1),v()),t&2){let e=c(2);r(),_(e.nzCheckedChildren)}}function oe(t,h){if(t&1&&a(0,ne,2,1,"ng-container",6),t&2){let e=c();l("nzStringTemplateOutlet",e.nzCheckedChildren)}}function se(t,h){if(t&1&&(g(0),w(1),v()),t&2){let e=c(2);r(),_(e.nzUnCheckedChildren)}}function re(t,h){if(t&1&&a(0,se,2,1,"ng-container",6),t&2){let e=c();l("nzStringTemplateOutlet",e.nzUnCheckedChildren)}}var ae="switch",ce=(()=>{class t{updateValue(e){this.isChecked!==e&&(this.isChecked=e,this.onChange(this.isChecked))}focus(){this.focusMonitor.focusVia(this.switchElement.nativeElement,"keyboard")}blur(){this.switchElement.nativeElement.blur()}constructor(e,i,n,d,B,J){this.nzConfigService=e,this.host=i,this.ngZone=n,this.cdr=d,this.focusMonitor=B,this.directionality=J,this._nzModuleName=ae,this.isChecked=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzLoading=!1,this.nzDisabled=!1,this.nzControl=!1,this.nzCheckedChildren=null,this.nzUnCheckedChildren=null,this.nzSize="default",this.nzId=null,this.dir="ltr",this.destroy$=new b,this.isNzDisableFirstChange=!0}ngOnInit(){this.directionality.change.pipe(s(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{p(this.host.nativeElement,"click").pipe(s(this.destroy$)).subscribe(e=>{e.preventDefault(),!(this.nzControl||this.nzDisabled||this.nzLoading)&&this.ngZone.run(()=>{this.updateValue(!this.isChecked),this.cdr.markForCheck()})}),p(this.switchElement.nativeElement,"keydown").pipe(s(this.destroy$)).subscribe(e=>{if(this.nzControl||this.nzDisabled||this.nzLoading)return;let{keyCode:i}=e;i!==37&&i!==39&&i!==32&&i!==13||(e.preventDefault(),this.ngZone.run(()=>{i===37?this.updateValue(!1):i===39?this.updateValue(!0):(i===32||i===13)&&this.updateValue(!this.isChecked),this.cdr.markForCheck()}))})})}ngAfterViewInit(){this.focusMonitor.monitor(this.switchElement.nativeElement,!0).pipe(s(this.destroy$)).subscribe(e=>{e||Promise.resolve().then(()=>this.onTouched())})}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),this.destroy$.next(),this.destroy$.complete()}writeValue(e){this.isChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}static{this.\u0275fac=function(i){return new(i||t)(o(A),o(D),o(S),o(V),o(H),o($))}}static{this.\u0275cmp=N({type:t,selectors:[["nz-switch"]],viewQuery:function(i,n){if(i&1&&O(te,7),i&2){let d;F(d=L())&&(n.switchElement=d.first)}},inputs:{nzLoading:[2,"nzLoading","nzLoading",u],nzDisabled:[2,"nzDisabled","nzDisabled",u],nzControl:[2,"nzControl","nzControl",u],nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize",nzId:"nzId"},exportAs:["nzSwitch"],features:[R([{provide:q,useExisting:y(()=>t),multi:!0}]),x],decls:8,vars:15,consts:[["switchElement",""],["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode"],[1,"ant-switch-handle"],["nz-icon","","nzType","loading",1,"ant-switch-loading-icon"],[1,"ant-switch-inner"],[1,"ant-click-animating-node"],[4,"nzStringTemplateOutlet"]],template:function(i,n){i&1&&(f(0,"button",1,0)(2,"span",2),a(3,ie,1,0,"span",3),m(),f(4,"span",4),a(5,oe,1,1,"ng-container")(6,re,1,1,"ng-container"),m(),z(7,"div",5),m()),i&2&&(T("ant-switch-checked",n.isChecked)("ant-switch-loading",n.nzLoading)("ant-switch-disabled",n.nzDisabled)("ant-switch-small",n.nzSize==="small")("ant-switch-rtl",n.dir==="rtl"),l("disabled",n.nzDisabled)("nzWaveExtraNode",!0),M("id",n.nzId),r(3),C(n.nzLoading?3:-1),r(2),C(n.isChecked?5:6))},dependencies:[G,Q,W,U,P,Z],encapsulation:2,changeDetection:0})}}return k([j()],t.prototype,"nzSize",void 0),t})(),Me=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=I({type:t})}static{this.\u0275inj=E({imports:[ce]})}}return t})();export{ce as a,Me as b};

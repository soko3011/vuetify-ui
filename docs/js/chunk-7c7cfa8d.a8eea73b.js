(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c7cfa8d"],{"0b5e":function(t,e,r){t.exports=r.p+"img/corevollogo.f30900b3.png"},b319:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"elevation-00",attrs:{flat:"",color:"grey darken-4",dark:""}},[r("v-card-text",[r("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{outlined:"",label:"Email",rules:[t.required("email"),t.emailFormat()]},model:{value:t.userInfo.email,callback:function(e){t.$set(t.userInfo,"email",e)},expression:"userInfo.email"}}),r("v-text-field",{attrs:{outlined:"",label:"Password",type:t.showPassword?"text":"password",counter:"true",rules:[t.required("password"),t.minLength("password",8)]},model:{value:t.userInfo.password,callback:function(e){t.$set(t.userInfo,"password",e)},expression:"userInfo.password"}},[t.showPassword?r("v-icon",{attrs:{slot:"append",color:"red"},on:{click:function(e){t.showPassword=!t.showPassword}},slot:"append"},[t._v("mdi-eye")]):r("v-icon",{attrs:{slot:"append",color:"red"},on:{click:function(e){t.showPassword=!t.showPassword}},slot:"append"},[t._v("mdi-eye-off")])],1),t.hasName?r("v-text-field",{attrs:{outlined:"",label:"Confirm Password",type:t.showPassword?"text":"password",counter:"true",rules:[t.required("confirmPassword"),t.minLength("confirmPassword",8)]},model:{value:t.userInfo.confirmPassword,callback:function(e){t.$set(t.userInfo,"confirmPassword",e)},expression:"userInfo.confirmPassword"}},[t.showPassword?r("v-icon",{attrs:{slot:"append",color:"red"},on:{click:function(e){t.showPassword=!t.showPassword}},slot:"append"},[t._v("mdi-eye")]):r("v-icon",{attrs:{slot:"append",color:"red"},on:{click:function(e){t.showPassword=!t.showPassword}},slot:"append"},[t._v("mdi-eye-off")])],1):t._e()],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{staticClass:"mb-5",attrs:{width:"300",rounded:"",color:"red darken-2","x-large":""},on:{click:function(e){return t.submitForm(t.userInfo)}}},[t._v(t._s(t.buttonText))]),r("v-spacer")],1)],1)},s=[],a=(r("96cf"),r("1da1")),o=r("5530"),i=(r("99af"),function(t){return function(e){return e&&e.length>0||"You must input a ".concat(t)}}),u=function(t,e){return function(r){return r&&r.length>=e||"".concat(t," must be at least ").concat(e," characters")}},c=function(t,e){return function(r){return r&&r.length<=e||"".concat(t," must be less than ").concat(e," characters")}},d=function(){var t=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,24})+$/;return function(e){return e&&t.test(e)||"Must be a valid email"}},l={required:i,minLength:u,maxLength:c,emailFormat:d},f={created:function(){this.setUserTimezone()},data:function(){return Object(o["a"])({valid:!1,showPassword:!1,userInfo:{email:"",password:"",confirmPassword:"",timezone:""}},l)},props:["submitForm","buttonText","hasName","title"],methods:{setUserTimezone:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getBrowserTimezone");case 2:t.userInfo.timezone=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},h=f,m=r("2877"),p=r("6544"),w=r.n(p),v=r("8336"),b=r("b0af"),g=r("99d9"),x=(r("4de4"),r("7db0"),r("4160"),r("caad"),r("07ac"),r("2532"),r("159b"),r("58df")),_=r("7e2b"),P=r("3206"),k=Object(x["a"])(_["a"],Object(P["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=r(t)))})):n.valid=r(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(o["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),V=r("132d"),$=r("2fa4"),y=r("8654"),B=Object(m["a"])(h,n,s,!1,null,"418bd1a5",null);e["a"]=B.exports;w()(B,{VBtn:v["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["c"],VForm:k,VIcon:V["a"],VSpacer:$["a"],VTextField:y["a"]})},c650:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"grey darken-4"},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[n("v-toolbar",{staticClass:"mb-10",attrs:{prominent:"",flat:"",color:"grey darken-4",src:r("0b5e")}}),n("UserAuthForm",{attrs:{submitForm:t.registerUser,buttonText:"Register",hasName:"true",title:"Register"}})],1)],1)],1)},s=[],a=(r("96cf"),r("1da1")),o=r("b319"),i={components:{UserAuthForm:o["a"]},methods:{registerUser:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$store.dispatch("register",t);case 2:n=r.sent,n.error?e.$store.dispatch("setSnackbar",{text:n.error,centered:!0}):(e.$store.dispatch("setSnackbar",{text:"Welcome "+n.UserName,top:!0}),e.$router.push("/settings"));case 4:case"end":return r.stop()}}),r)})))()}}},u=i,c=r("2877"),d=r("6544"),l=r.n(d),f=r("7496"),h=r("62ad"),m=r("0fd9"),p=r("71d9"),w=Object(c["a"])(u,n,s,!1,null,"64359a03",null);e["default"]=w.exports;l()(w,{VApp:f["a"],VCol:h["a"],VRow:m["a"],VToolbar:p["a"]})}}]);
//# sourceMappingURL=chunk-7c7cfa8d.a8eea73b.js.map
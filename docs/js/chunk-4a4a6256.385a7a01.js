(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a4a6256"],{"626d":function(t,e,a){},"7e48":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{staticClass:"mb-6",attrs:{dark:"",dense:"",color:"#126496"}},[a("v-icon",[t._v("mdi-dots-hexagon")]),a("v-toolbar-title",{staticClass:"ml-3"},[t._v("DASHBOARD")]),a("v-spacer"),a("v-dialog",{attrs:{persistent:"","max-width":"700",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({},"v-icon",n,!1),r),[t._v("mdi-dots-vertical")])]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-card",{attrs:{color:"grey lighten-1"}},[a("v-container",[a("v-row",{staticClass:"mr-5",attrs:{dense:""}},t._l(t.menuColHeaders,(function(e,r){return a("v-col",{key:r,attrs:{cols:"3"}},[a("h4",{staticClass:"ml-5 green--text text--darken-3",attrs:{align:"center",justify:"center"}},[t._v(" "+t._s(e)+" ")])])})),1),a("v-row",{staticClass:"mr-5",attrs:{dense:""}},t._l(t.setupMenu,(function(e,r){return a("v-col",{key:r,attrs:{cols:"3"}},[a("draggable",t._b({attrs:{list:e,move:t.onMove},on:{start:function(e){t.isDragging=!0},end:function(e){t.isDragging=!1}}},"draggable",t.dragOptions,!1),t._l(e,(function(e){return a("v-card",{key:e.Cross,staticClass:"ma-5",attrs:{width:"150",elevation:"5"}},[a("v-switch",{staticClass:"ml-2",attrs:{label:e.Cross,color:"#126496"},on:{change:function(e){return t.createMenuColumns()}},model:{value:e.Show,callback:function(a){t.$set(e,"Show",a)},expression:"item.Show"}})],1)})),1)],1)})),1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){t.menu=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.saveSetup}},[t._v("Save")]),a("v-spacer")],1)],1)],1)],1),a("v-row",{attrs:{"no-gutters":""}},t._l(t.activeSurfs,(function(e){return a("v-col",{key:e.Cross,attrs:{cols:"12",lg:"4",md:"6"}},[a("v-card",{staticClass:"ma-5",style:t.zoomLevel,attrs:{rounded:"",color:"grey lighten-3",flat:"",width:"600"}},[a("v-btn",{attrs:{absolute:"",ripple:"","x-small":"",fab:"",top:"",right:"",color:t.getWarningColor(e),elevation:"21",dark:""},on:{click:function(a){return t.gotoDvi(e)}}},[a("v-icon",[t._v(" "+t._s(t.batteryIcon(t.getWarningColor(e))))])],1),a("DashBoardSurf",{staticClass:"ma-0",attrs:{apidata:t.singleSurf(e),headerData:t.getHeader(e),footerData:t.getFooter(e),warningColor:t.getWarningColor(e)}}),a("h6",{attrs:{align:"center",justify:"center"}},[t._v(t._s(t.getFooter(e)))]),a("h6",{attrs:{align:"center",justify:"center"}},[t._v(t._s(t.getExpiryCut(e)))])],1)],1)})),1)],1)},n=[],s=(a("99af"),a("4de4"),a("7db0"),a("d81d"),a("c7cd"),a("15fd")),o=a("2909"),i=a("5530"),c=a("b85c"),u=(a("96cf"),a("1da1")),l=a("1a20"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"spreadsheet",staticClass:"jTable"})},h=[],f=(a("4160"),a("c975"),a("b64b"),a("07ac"),a("159b"),a("c4fc"),a("0179")),p=a.n(f),g=a("ee67"),v={name:"dashboardsuf",created:function(){},data:function(){return{alphabet:g.alphabet}},props:{apidata:{type:Array},headerData:{type:String},footerData:{type:String},warningColor:{type:String}},computed:{tableHeaders:function(){return Object.keys(this.apidata[0])},tableData:function(){var t=[];return this.apidata.forEach((function(e){t.push(Object.values(e))})),t.push([]),t},config:function(){return{data:this.tableData,colHeaders:this.tableHeaders,tableOverflow:!1,columnSorting:!1,colWidths:[60,50,100,55,55,55,55,55,65,65],allowInsertRow:!1,columns:this.setReadOnly(),contextMenu:function(t,e,a,r){},nestedHeaders:[[{title:this.headerData,colspan:this.tableHeaders.length}]]}}},methods:{cellId:function(t,e){return"".concat(this.alphabet[t].toUpperCase()).concat(e)},setReadOnly:function(){for(var t=[],e=0;e<this.tableHeaders.length;e++)t.push({readOnly:!0});return t},FormatTable:function(t,e){e.hideIndex();for(var a=1;a<=e.rows.length;a++)for(var r=0;r<e.headers.length;r++)e.setStyle(this.cellId(r,a),"color","black");for(var n=this.tableHeaders.indexOf("ATM"),s=this.tableHeaders.indexOf("Term"),o=1;o<=t.length;o++)e.setStyle(this.cellId(n,o),"background-color","#D2DEE9"),e.setStyle(this.cellId(n,o),"font-weight","bold"),e.setStyle(this.cellId(s,o),"color","#000080"),e.setStyle(this.cellId(s,o),"font-weight","bold"),o>9&&e.setStyle(this.cellId(n,o),"background-color","#EDFAFD");for(r=0;r<e.headers.length;r++)e.setStyle(this.cellId(r,e.rows.length),"background-color",this.warningColor)}},mounted:function(){var t=p()(this.$refs.spreadsheet,this.config);this.FormatTable(this.apidata,t),Object.assign(this,{jExcelObj:t}),document.documentElement.style.setProperty("--warning-color","".concat(this.warningColor))},watch:{apidata:function(){this.jExcelObj.setData(this.tableData),this.FormatTable(this.tableData,this.jExcelObj)}}},b=v,C=(a("c8d7"),a("2877")),m=Object(C["a"])(b,d,h,!1,null,null,null),S=m.exports,w=a("c1df"),y=a.n(w),D=a("310e"),x=a.n(D),O=a("5caf"),M=(a("f0c4"),a("2f62")),k={created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a,r,n,s,o,i,u,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].GetDashBoardSurfs({userName:t.$store.state.currentUser});case 3:if(a=e.sent,r=JSON.parse(a.data.dashBoardSurfs),null!==t.userPrefs){n=Object(c["a"])(t.userPrefs);try{for(n.s();!(s=n.n()).done;)o=s.value,i=r.find((function(t){return t.Cross===o.Cross})),i.Show=void 0!==i?o.Show:i.Show,t.surfs.push(i)}catch(h){n.e(h)}finally{n.f()}}else{u=Object(c["a"])(r);try{for(u.s();!(d=u.n()).done;)o=d.value,t.surfs.push(o)}catch(h){u.e(h)}finally{u.f()}}e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$store.dispatch("setSnackbar",{text:"".concat(e.t0," source: DashBoard.vue-created"),top:!0});case 11:t.createMenuColumns();case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},data:function(){return{singleDviInputs:[],isDragging:!1,delayedDragging:!1,surfs:[],menu:!1,window:{width:0,height:0},firstWarningColor:"#2DCA61",secondWarningColor:"#71B7F9",thirdWarningColor:"#FC6949",setupMenu:{firstCol:[],secondCol:[],thirdCol:[],inactive:[]},menuColHeaders:["COLUMN ONE","COLUMN TWO","COLUMN THREE","INACTIVE"]}},components:{DashBoardSurf:S,Draggable:x.a,TreeView:O["a"]},computed:Object(i["a"])(Object(i["a"])({},Object(M["b"])({dashBoardUpdate:function(t){return t.dashBoardUpdate},userPrefs:function(t){return t.dashBoardPrefs}})),{},{dragOptions:function(){return{animation:0,group:"description",disabled:!1,ghostClass:"ghost"}},zoomLevel:function(){var t=window.innerWidth>1700?"90%":"72%";return{zoom:t}},activeSurfs:function(){return this.surfs.filter((function(t){return!0===t.Show}))}}),methods:{createMenuColumns:function(){this.setupMenu.firstCol=[],this.setupMenu.secondCol=[],this.setupMenu.thirdCol=[],this.setupMenu.inactive=[];for(var t=this.surfs.filter((function(t){return!0===t.Show})),e=0;e<t.length;e+=3)void 0!==t[e]&&this.setupMenu.firstCol.push(t[e]),void 0!==t[e+1]&&this.setupMenu.secondCol.push(t[e+1]),void 0!==t[e+2]&&this.setupMenu.thirdCol.push(t[e+2]);this.setupMenu.inactive=this.surfs.filter((function(t){return!1===t.Show}))},recombineSurfs:function(){for(var t=Math.max(this.setupMenu.firstCol.length,this.setupMenu.secondCol.length,this.setupMenu.thirdCol.length),e=[],a=0;a<t;a++)void 0!==this.setupMenu.firstCol[a]&&e.push(this.setupMenu.firstCol[a]),void 0!==this.setupMenu.secondCol[a]&&e.push(this.setupMenu.secondCol[a]),void 0!==this.setupMenu.thirdCol[a]&&e.push(this.setupMenu.thirdCol[a]);return e.push.apply(e,Object(o["a"])(this.setupMenu.inactive)),e},onMove:function(t){var e=t.relatedContext,a=t.draggedContext,r=e.element,n=a.element;return(!r||!r.fixed)&&!n.fixed},saveSetup:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=t.recombineSurfs().map((function(t){var e=t.Cross,a=t.Show;return{Cross:e,Show:a}})),e.next=4,l["a"].saveUserDashBoardPrefs({UserName:t.$store.state.currentUser,DashBoardUI:JSON.stringify(a)});case 4:e.sent,t.$store.dispatch("setSnackbar",{text:"DashBoard Layout Saved",centered:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$store.dispatch("setSnackbar",{text:"".concat(e.t0," source: DashBoard.vue-saveSetup"),bottom:!0});case 11:t.menu=!1;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},gotoDvi:function(t){this.$store.dispatch("setActivecross",t),this.$router.push({name:"Dvi",params:{ccyPair:t.Cross}})},singleSurf:function(t){return JSON.parse(t.Surface).map((function(t){t.DK_EFF,t.IPV_ATM,t.SFLY25,t.SFLY10;var e=Object(s["a"])(t,["DK_EFF","IPV_ATM","SFLY25","SFLY10"]);return Object(i["a"])({},e)}))},getHeader:function(t){var e=t.Cross,a=JSON.parse(t.LastUpdate),r=a.Spot;return"".concat(e," ").concat(r)},getExpiryCut:function(t){return"".concat(t.ExpCut," CUT")},getFooter:function(t){var e=JSON.parse(t.LastUpdate),a="Last Updated : "+e.Time;return a},getWarningColor:function(t){var e=JSON.parse(t.LastUpdate),a=y()(e.Time,"DD/MM/YYYY, h:mm:ss").toDate(),r=new Date,n=r-a,s=12e5,o=24e5,i=n<=s?this.firstWarningColor:n<=o?this.secondWarningColor:this.thirdWarningColor;return i},batteryIcon:function(t){return t===this.firstWarningColor?"mdi-battery-high":t===this.secondWarningColor?"mdi-battery-medium":t===this.thirdWarningColor?"mdi-battery-low":void 0}},watch:{dashBoardUpdate:function(){var t=this;this.surfs.map((function(e){return e.Cross===t.dashBoardUpdate.Cross&&(console.log(e),console.log(t.dashBoardUpdate),e.Surface=t.dashBoardUpdate.Surface,e.LastUpdate=t.dashBoardUpdate.LastUpdate,e.ExpCut=t.dashBoardUpdate.ExpCut),e}))},isDragging:function(t){var e=this;t?this.delayedDragging=!0:(this.$nextTick((function(){e.delayedDragging=!1})),this.surfs=this.recombineSurfs())}}},_=k,j=a("6544"),U=a.n(j),B=a("8336"),E=a("b0af"),I=a("99d9"),T=a("62ad"),F=a("a523"),L=a("169a"),V=a("132d"),W=a("0fd9"),H=a("2fa4"),N=a("b73d"),$=a("71d9"),A=a("2a7f"),R=Object(C["a"])(_,r,n,!1,null,null,null);e["default"]=R.exports;U()(R,{VBtn:B["a"],VCard:E["a"],VCardActions:I["a"],VCol:T["a"],VContainer:F["a"],VDialog:L["a"],VIcon:V["a"],VRow:W["a"],VSpacer:H["a"],VSwitch:N["a"],VToolbar:$["a"],VToolbarTitle:A["a"]})},c8d7:function(t,e,a){"use strict";var r=a("626d"),n=a.n(r);n.a}}]);
//# sourceMappingURL=chunk-4a4a6256.385a7a01.js.map
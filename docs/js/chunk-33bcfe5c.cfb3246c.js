(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33bcfe5c"],{"4fad":function(t,e,r){var a=r("23e7"),s=r("6f53").entries;a({target:"Object",stat:!0},{entries:function(t){return s(t)}})},"7e48":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.dataReturned?r("div",[r("div",{staticClass:"d-flex flex-wrap",style:t.zoomLevel},t._l(Object.keys(this.surfs),(function(e,a){return r("div",{key:a,staticClass:"ma-3",attrs:{rounded:"",color:"grey lighten-3"}},[r("v-toolbar",{staticClass:"mb-0 mr-2",attrs:{dark:"",height:"30",color:"blue-grey darken-0"}},[r("v-spacer"),r("v-toolbar-title",{staticClass:"text-subtitle-2"},[t._v(" "+t._s(t.GetHeader(e))+" ")]),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",{attrs:{color:"blue lighten-4"},on:{click:function(r){return t.gotoDvi(e)}}},[t._v("mdi-circle-edit-outline")])],1)],1),r("DashBoardSurf",{staticClass:"ma-0",attrs:{apidata:t.SingleSurf(e)}}),r("v-system-bar",{staticClass:"mt-n2 mr-2",attrs:{height:"5",color:t.GetWarningColor(e)}}),r("h6",{staticClass:"float-right mr-2"},[t._v(t._s(t.GetFooter(e)))])],1)})),0)]):t._e()])},s=[],n=(r("4de4"),r("d81d"),r("b0c0"),r("4fad"),r("c1f9"),r("ac1f"),r("466d"),r("5530")),i=r("15fd"),o=r("3835"),c=r("1a20"),u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"spreadsheet"})},l=[],f=(r("c4fc"),r("0179")),d=r.n(f),h=r("5053"),p={name:"dashboardsuf",created:function(){},data:function(){return{}},props:{apidata:{type:Array}},computed:{config:function(){return{columnSorting:!1,colWidths:[50,50,100,55,55,55,55,55],allowInsertRow:!1}},jExcelOptions:function(){return h["b"](this.apidata,this.config)}},methods:{FormatTable:function(t,e){e.hideIndex();for(var r=0;r<t.length;r++){var a=r+1,s="B"+a,n="D"+a;e.setStyle(n,"background-color","#D2DEE9"),e.setStyle(n,"font-weight","bold"),e.setStyle(s,"color","#000080"),e.setStyle(s,"font-weight","bold"),a>9&&e.setStyle(n,"background-color","#EDFAFD")}}},mounted:function(){var t=d()(this.$refs.spreadsheet,this.jExcelOptions);this.FormatTable(this.apidata,t),Object.assign(this,{jExcelObj:t})},watch:{apidata:function(){this.jExcelObj.setData(h["c"](this.apidata)),this.FormatTable(this.apidata,this.jExcelObj)}}},v=p,m=r("2877"),b=Object(m["a"])(v,u,l,!1,null,null,null),g=b.exports,S={data:function(){return{surfs:[],dataReturned:!1}},props:{ccyPair:{type:String,default:null}},components:{DashBoardSurf:g},computed:{zoomLevel:function(){var t=window.innerWidth>1700?"90%":"70%";return{zoom:t}}},created:function(){var t=this;console.log(this.$store.state.currentUser),c["a"].GetDashBoardSurfs({userName:this.$store.state.currentUser}).then((function(e){t.surfs=JSON.parse(e.data.dashBoardSurfs),console.log(t.surfs),console.log(t.ccyPair),null!==t.ccyPair&&(t.surfs=Object.fromEntries(Object.entries(t.surfs).filter((function(e){var r=Object(o["a"])(e,1),a=r[0];return a===t.ccyPair})))),t.dataReturned=!0})).catch((function(t){alert(t.name)}))},methods:{gotoDvi:function(t){this.$store.dispatch("setActivecross",t),this.$router.push({name:"Dvi",params:{ccyPair:t}})},SingleSurf:function(t){var e=[{}];return void 0!==this.surfs[t]&&(e=JSON.parse(this.surfs[t][0]),e=e.map((function(t){t.DK_EFF,t.IPV_ATM,t.RR_MULT,t.S_FLY_MULT,t.SFLY25,t.SFLY10;var e=Object(i["a"])(t,["DK_EFF","IPV_ATM","RR_MULT","S_FLY_MULT","SFLY25","SFLY10"]);return Object(n["a"])({},e)}))),e},GetHeader:function(t){var e=t;if(void 0!==this.surfs[t]){var r=JSON.parse(this.surfs[t][1]),a=r.Spot;e=e+" "+a}return e},GetFooter:function(t){if(void 0!==this.surfs[t]){var e=JSON.parse(this.surfs[t][1]),r="Last Updated : "+e.Time;return r}},GetWarningColor:function(t){var e="secondary";if(void 0!==this.surfs[t]){var r=JSON.parse(this.surfs[t][1]),a=this.parseTime(r.Time),s=new Date,n=s-a,i=3e5,o=6e5,c=9e5;e=n<=i?"blue lighten-3":n<=o?"green lighten-3":n<=c?"orange lighten-3":"red lighten-3"}return e},parseTime:function(t){var e=t.match(/(\d+):(\d+)(?: )?(am|pm)?/i),r=parseInt(e[1],10),a=parseInt(e[2],10),s=e[3]?e[3].toUpperCase():null;"AM"===s&&12==r&&(r=0),"PM"===s&&12!=r&&(r+=12);var n=new Date;return n.setHours(0,0,0,0),n.setHours(n.getHours()+r),n.setMinutes(n.getMinutes()+a),n}},watch:{ccyPair:function(){var t=this;c["a"].GetDashBoardSurfs().then((function(e){var r=JSON.parse(e.data.dashBoardSurfs);t.surfs=Object.fromEntries(Object.entries(r).filter((function(e){var r=Object(o["a"])(e,1),a=r[0];return a===t.ccyPair})))})).catch((function(t){alert(t.name)}))}}},O=S,y=r("6544"),j=r.n(y),_=r("8336"),w=r("132d"),D=r("2fa4"),F=r("afd9"),T=r("71d9"),E=r("2a7f"),L=Object(m["a"])(O,a,s,!1,null,null,null);e["default"]=L.exports;j()(L,{VBtn:_["a"],VIcon:w["a"],VSpacer:D["a"],VSystemBar:F["a"],VToolbar:T["a"],VToolbarTitle:E["a"]})},c1f9:function(t,e,r){var a=r("23e7"),s=r("2266"),n=r("8418");a({target:"Object",stat:!0},{fromEntries:function(t){var e={};return s(t,(function(t,r){n(e,t,r)}),void 0,!0),e}})}}]);
//# sourceMappingURL=chunk-33bcfe5c.cfb3246c.js.map
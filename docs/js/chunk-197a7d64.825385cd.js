(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-197a7d64"],{"9e6b":function(t,e,n){},dc8f:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex flex-row mb-5 flex-nowrap"},[n("v-toolbar",{attrs:{color:"#385F73","min-width":"400",collapse:""}},[n("v-spacer"),n("div",{staticClass:"d-flex flex-column"},[n("h4",{staticClass:"font-weight-medium text-center text-uppercase grey--text text--lighten-3"},[t._v(" corevolFX DAY WEIGHT SETTINGS "),n("v-btn",{staticClass:"mb-4",attrs:{icon:"","x-small":""}},[n("PopUpModal",{attrs:{inputData:t.availableCurrencies,icon:"mdi-dots-hexagon",color:"green lighten-3",small:!0,title:"Select Ccy"},on:{selection:t.changeCcy}})],1)],1),n("h4",{staticClass:"font-weight-light text-center text-uppercase green--text text--lighten-3",attrs:{align:"center",justify:"center"}},[t._v(" "+t._s(t.currentCcy)+" ")])]),n("v-spacer")],1)],1),n("div",{staticClass:"d-flex flex-row flex-nowrap"},[n("v-card",{staticClass:"d-flex flex-column dwCol mr-3",attrs:{"min-width":"225"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item-group",{attrs:{color:"blue"}},[n("v-subheader",[t._v("SELECT")]),n("v-list-item",{on:{click:function(e){t.currListToggle=!t.currListToggle}}},[n("v-list-item-action",[n("v-btn",{attrs:{ripple:"",small:"",icon:""}},[n("v-icon",{attrs:{color:"#385F73"}},[t._v("mdi-expand-all")])],1),n("ModalNoButton",{attrs:{inputData:t.availableCurrencies,title:"Select Ccy",vmodel:t.currListToggle},on:{setvmodel:function(e){return t.currListToggle=e},selection:t.changeCcy}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v("SELECT CURRENCY")])],1)],1),n("v-subheader",[t._v("EVENTS")]),n("v-list-item",{on:{click:function(e){t.dialog=!t.dialog}}},[n("v-list-item-action",[n("v-btn",{attrs:{ripple:"",small:"",icon:""}},[n("v-icon",{attrs:{color:"#126496"}},[t._v("mdi-calendar-star")])],1)],1),n("v-list-item-content",[n("v-list-item-title",[t._v("AVAILABLE EVENTS")])],1)],1),n("v-subheader",[t._v("BUILD")]),n("v-list-item",{on:{click:t.buildProductionList}},[n("v-list-item-action",[n("v-btn",{attrs:{ripple:"",small:"",icon:""}},[n("v-icon",{attrs:{color:"yellow darken-3"}},[t._v("mdi-lightning-bolt-outline")])],1)],1),n("v-list-item-content",[n("v-list-item-title",[t._v("BUILD PRODUCTION LIST")])],1)],1),n("v-subheader",[t._v("SAVE")]),n("v-list-item",{on:{click:t.saveEventsToDB}},[n("v-list-item-action",[n("v-btn",{attrs:{ripple:"",small:"",icon:""}},[n("v-icon",{attrs:{color:"green lighten-3"}},[t._v("mdi-content-save")])],1)],1),n("v-list-item-content",[n("v-list-item-title",[t._v("SAVE EVENTS TO DB")])],1)],1)],1)],1)],1),n("div",{staticClass:"dwContainer"},[n("div",{ref:"selectedEventsByCcyTable"}),n("div",{ref:"productionListTable"})]),n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{"max-width":"410"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("div",{ref:"eventsByCcyTable"})])],1)],1)])},s=[],a=(n("99af"),n("4de4"),n("4160"),n("caad"),n("d81d"),n("45fc"),n("d3b7"),n("25f0"),n("2532"),n("159b"),n("96cf"),n("1da1")),c=n("0179"),r=n.n(c),o=n("5053"),l=n("f98f"),d=n("0cd9"),u=n("cd71"),v=n("c1df"),y=n.n(v),h={name:"DayWgtSetup",components:{PopUpModal:d["a"],ModalNoButton:u["a"]},created:function(){var t=this;l["a"].GetAvailableCurr().then((function(e){t.availableCurrencies=JSON.parse(e.data.availableCurrencies)})),window.addEventListener("resize",this.handleResize),this.handleResize()},data:function(){return{currListToggle:!1,availableCurrencies:[],currentCcy:"SELECT CCY",selectedEventsByCcy:[],productionList:[],eventsByCcy:[],dialog:!1,window:{width:0,height:0}}},computed:{configEventsByCcy:function(){return{data:this.eventsByCcy,columnSorting:!1,onchange:this.onChangeByCcyEvents,tableOverflow:!1,allowInsertRow:!1,contextMenu:function(t,e,n,i){},columns:[{type:"checkbox",title:"IncludeEvent",width:90},{type:"text",title:"EventName",width:320}],nestedHeaders:[[{title:"AVAILABLE EVENTS",colspan:2}]]}},configSelectedEventsByCcy:function(){return{data:this.selectedEventsByCcy,columnSorting:!1,onchange:this.onChangeSelectedEventsByCcy,tableOverflow:!1,allowInsertRow:!1,contextMenu:function(t,e,n,i){},columns:[{type:"checkbox",title:"IncludeEvent",width:90},{type:"text",title:"EventName",width:310},{type:"text",title:"EventWgt",width:90}],nestedHeaders:[[{title:"SELECTED EVENTS",colspan:3}]]}},configProductionList:function(){return{data:this.formattedProductionList,columnSorting:!1,tableOverflow:!1,allowInsertRow:!1,contextMenu:function(t,e,n,i){},columns:[{type:"text",title:"Event",width:175},{type:"text",title:"Date",width:175},{type:"text",title:"DayWgt",width:75},{type:"text",title:"Time",width:100}],nestedHeaders:[[{title:"PRODUCTION LIST",colspan:4}]]}},formattedProductionList:function(){return this.productionList.map((function(t){return t.Date=y()(t.Date).format("DD-MMM-YYYY"),t}))}},methods:{dev:function(){},handleResize:function(){this.window.width=window.innerWidth-100,this.window.height=window.innerHeight-95,this.setContainerDimensions()},setContainerDimensions:function(){document.documentElement.style.setProperty("--main-width","".concat(this.window.width,"px")),document.documentElement.style.setProperty("--main-height","".concat(this.window.height,"px")),document.documentElement.style.setProperty("--dwCol-height","".concat(this.window.height-70,"px"))},getEvents:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l["a"].GetEvents({Ccy:t});case 3:i=n.sent,e.eventsByCcy=JSON.parse(i.data.eventsByCcy),e.selectedEventsByCcy=JSON.parse(i.data.selectedEvents),e.productionList=JSON.parse(i.data.productionList),e.currentCcy=t,n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](0),alert(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},changeCcy:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.getEvents(t);case 2:null===e.selectedEventsByCcy&&(e.selectedEventsByCcy=[]),null===e.productionList&&(e.productionList=[]),e.updateEventsByCcyWithSelectedEvents(),e.selectedEventsByCcyTable.setData(e.selectedEventsByCcy),e.productionListTable.setData(e.formattedProductionList);case 7:case"end":return n.stop()}}),n)})))()},buildProductionList:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.selectedEventsByCcy.length){e.next=3;break}return t.$store.dispatch("setSnackbar",{text:" Select Events Before Building List",top:!0}),e.abrupt("return");case 3:return e.prev=3,e.next=6,l["a"].BuildProductionList({Ccy:t.currentCcy,EventNames:t.selectedEventsByCcy.map((function(t){return t.EventName}))});case 6:n=e.sent,i=JSON.parse(n.data.selectedEvents),t.productionList=[],i.forEach((function(e){var n=t.selectedEventsByCcy.filter((function(t){return t.EventName===e.Title}))[0].EventWgt;e.Time.includes(":")||(e.Time="00:00"),t.productionList.push({Event:e.Title,Date:y()(e.Date).format("DD-MMM-YYYY"),DayWgt:n,Time:e.Time})})),t.productionListTable.setData(o["a"](t.productionList)),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](3),alert(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))()},onChangeByCcyEvents:function(t,e,n,i){var s=n,a=i;if("0"===s){var c={EventName:this.eventsByCcyTable.getValueFromCoords(parseInt(1),parseInt(a)),EventWgt:1,IncludeEvent:!0},r=this.selectedEventsByCcy.some((function(t){return t.EventName===c.EventName}));r?this.selectedEventsByCcy=this.selectedEventsByCcy.filter((function(t){return t.EventName!=c.EventName})):this.selectedEventsByCcy.push(c),this.selectedEventsByCcyTable.setData(this.selectedEventsByCcy)}},onChangeSelectedEventsByCcy:function(t,e,n,i){var s=n,a=i;if("0"===s){var c=this.selectedEventsByCcyTable.getValueFromCoords(parseInt(1),parseInt(a)),r=this.selectedEventsByCcyTable.getValueFromCoords(parseInt(0),parseInt(a));r||(this.selectedEventsByCcy=this.selectedEventsByCcy.filter((function(t){return t.EventName!=c})),this.updateEventsByCcyWithSelectedEvents(),this.selectedEventsByCcyTable.setData(this.selectedEventsByCcy),this.eventsByCcyTable.setData(this.eventsByCcy))}if("2"===s){var o=this.selectedEventsByCcyTable.getValueFromCoords(parseInt(2),parseInt(a));this.selectedEventsByCcy[a].EventWgt=parseFloat(o)}},saveEventsToDB:function(){var t=this,e={ccy:this.currentCcy,selectedEvents:JSON.stringify(this.selectedEventsByCcy),productionList:JSON.stringify(this.productionList)};l["a"].SaveDataToDB(e).then((function(e){t.$store.dispatch("setSnackbar",{text:"Database Upadated With ".concat(t.currentCcy," Events List "),centered:!0})})).catch((function(e){!0===e.toString().includes("403")&&(e="Admin Rights Required"),t.$store.dispatch("setSnackbar",{text:"".concat(t.currentCcy," events: ").concat(e," "),centered:!0})}))},updateEventsByCcyWithSelectedEvents:function(){var t=this;this.eventsByCcy.forEach((function(e){var n=t.selectedEventsByCcy.some((function(t){return t.EventName===e.EventName}));e.IncludeEvent=!0===n}))}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getEvents("USD");case 2:t.updateEventsByCcyWithSelectedEvents(),n=r()(t.$refs["selectedEventsByCcyTable"],t.configSelectedEventsByCcy),n.hideIndex(),Object.assign(t,{selectedEventsByCcyTable:n}),i=r()(t.$refs["productionListTable"],t.configProductionList),i.hideIndex(),Object.assign(t,{productionListTable:i});case 9:case"end":return e.stop()}}),e)})))()},watch:{dialog:function(){var t=this;setTimeout((function(){r.a.destroy(t.$refs["eventsByCcyTable"],!1);var e=r()(t.$refs["eventsByCcyTable"],t.configEventsByCcy);e.hideIndex(),Object.assign(t,{eventsByCcyTable:e})}),500)}}},f=h,p=(n("e766"),n("2877")),m=n("6544"),E=n.n(m),C=n("8336"),g=n("b0af"),b=n("169a"),w=n("132d"),B=n("8860"),T=n("da13"),x=n("1800"),L=n("5d23"),S=n("1baa"),D=n("0fd9"),I=n("2fa4"),N=n("e0c7"),V=n("71d9"),O=Object(p["a"])(f,i,s,!1,null,null,null);e["default"]=O.exports;E()(O,{VBtn:C["a"],VCard:g["a"],VDialog:b["a"],VIcon:w["a"],VList:B["a"],VListItem:T["a"],VListItemAction:x["a"],VListItemContent:L["a"],VListItemGroup:S["a"],VListItemTitle:L["b"],VRow:D["a"],VSpacer:I["a"],VSubheader:N["a"],VToolbar:V["a"]})},e766:function(t,e,n){"use strict";var i=n("9e6b"),s=n.n(i);s.a},f98f:function(t,e,n){"use strict";var i=n("4a4a");e["a"]={GetAvailableCurr:function(){return i["b"].get("GetAvailableCurr")},GetEvents:function(t){return i["b"].post("GetEvents",t)},BuildProductionList:function(t){return i["b"].post("BuildProductionList",t)},SaveDataToDB:function(t){return i["b"].post("SaveDataToDB",t)},refreshEventsFromApi:function(){return i["b"].get("RefreshEventsFromApi")}}}}]);
//# sourceMappingURL=chunk-197a7d64.825385cd.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[10,6],{706:function(t,e,o){"use strict";o.r(e);var n=o(246),r=o(243),c={props:{block:{type:Boolean,default:!1},color:{type:String,default:null},disabled:{type:Boolean,default:!1},icon:{type:String,default:null},label:{type:String,default:"Label"},largeIcon:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},type:{type:String,default:"button"}},methods:{action:function(){this.$emit("action")}}},l=o(8),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"text-none",attrs:{color:t.color,block:t.block,disabled:t.disabled,icon:!!t.icon,outlined:t.outlined,rounded:"",type:t.type},on:{click:t.action}},[t.icon?e(r.a,{attrs:{large:t.largeIcon,left:""},domProps:{textContent:t._s("mdi-".concat(t.icon))}}):[t._v("\n    "+t._s(t.label)+"\n  ")]],2)}),[],!1,null,null,null);e.default=component.exports},869:function(t,e,o){"use strict";o.r(e);var n=o(850),r=o(849),c=(o(18),o(17),o(21),o(5),o(24),o(14),o(25),o(75)),l=o(3),d=o(260),m=o(259);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var y={data:function(){return{idFormSelected:0}},methods:{selectForm:function(t){this.idFormSelected=t}},watch:{idFormSelected:function(t){switch(this.idFormSelected=0,t){case 1:$nuxt.$emit("dialog",{isDialog:!0,nameComponent:"FormPageCurriculumAcademicBackgroundBasicEducation",titleDialog:"Añadir educación básica"});break;case 2:$nuxt.$emit("dialog",{isDialog:!0,nameComponent:"FormPageCurriculumAcademicBackgroundHigherEducation",titleDialog:"Añadir educación superior"});break;case 3:$nuxt.$emit("dialog",{isDialog:!0,nameComponent:"FormPageCurriculumAcademicBackgroundLanguage",titleDialog:"Añadir idioma"})}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.a)(Object(c.a)(m.b),{path:"curriculum_store",mut:"curriculum_store/setProperty"}))},O=y,h=o(8),component=Object(h.a)(O,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{dense:""}},[e(n.a,{staticClass:"mb-6",attrs:{cols:"12"}},[e("Button",{staticClass:"white--text",attrs:{block:"",label:"Añadir educación básica",color:"#5FA52D"},on:{action:function(e){return t.selectForm(1)}}})],1),t._v(" "),e(n.a,{staticClass:"mb-6",attrs:{cols:"12"}},[e("Button",{staticClass:"white--text",attrs:{block:"",label:"Añadir educación superior",color:"#5FA52D"},on:{action:function(e){return t.selectForm(2)}}})],1),t._v(" "),e(n.a,{staticClass:"mb-6",attrs:{cols:"12"}},[e("Button",{staticClass:"white--text",attrs:{block:"",label:"Añadir idioma",color:"#5FA52D"},on:{action:function(e){return t.selectForm(3)}}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:o(706).default})}}]);
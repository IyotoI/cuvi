(window.webpackJsonp=window.webpackJsonp||[]).push([[10,6],{640:function(t,e,n){"use strict";n.r(e);var r=n(246),o=n(243),c={props:{block:{type:Boolean,default:!1},color:{type:String,default:null},disabled:{type:Boolean,default:!1},icon:{type:String,default:null},label:{type:String,default:"Label"},largeIcon:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},type:{type:String,default:"button"}},methods:{action:function(){this.$emit("action")}}},l=n(81),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"text-none",attrs:{color:t.color,block:t.block,disabled:t.disabled,icon:!!t.icon,outlined:t.outlined,rounded:"",type:t.type},on:{click:t.action}},[t.icon?e(o.a,{attrs:{large:t.largeIcon,left:""},domProps:{textContent:t._s("mdi-".concat(t.icon))}}):[t._v("\n    "+t._s(t.label)+"\n  ")]],2)}),[],!1,null,null,null);e.default=component.exports},651:function(t,e,n){"use strict";var r=n(3),o=(n(46),n(67),n(255),n(19),n(6),n(12),n(61),n(103),n(16),n(14),n(20),n(21),n(13)),c=n(157),l=n(254);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},794:function(t,e,n){"use strict";n.r(e);var r=n(777),o=n(651),c=n(776),l={data:function(){return{idFormSelected:0}},methods:{selectForm:function(t){this.idFormSelected=t}},watch:{idFormSelected:function(t){switch(this.idFormSelected=0,t){case 1:$nuxt.$emit("dialog",{isDialog:!0,nameComponent:"FormPageCurriculumAcademicBackgroundBasicEducation",titleDialog:"Añadir educación básica"});break;case 2:$nuxt.$emit("dialog",{isDialog:!0,nameComponent:"FormPageCurriculumAcademicBackgroundHigherEducation",titleDialog:"Añadir educación superior"});break;case 3:$nuxt.$emit("dialog",{isDialog:!0,nameComponent:"FormPageCurriculumAcademicBackgroundLanguage",titleDialog:"Añadir idioma"})}}}},d=n(81),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e(o.a,[e(c.a,{attrs:{dense:""}},[e(r.a,{staticClass:"mb-6",attrs:{cols:"12"}},[e("Button",{staticClass:"white--text",attrs:{block:"",label:"Añadir educación básica",color:"#5FA52D"},on:{action:function(e){return t.selectForm(1)}}})],1),t._v(" "),e(r.a,{staticClass:"mb-6",attrs:{cols:"12"}},[e("Button",{staticClass:"white--text",attrs:{block:"",label:"Añadir educación superior",color:"#5FA52D"},on:{action:function(e){return t.selectForm(2)}}})],1),t._v(" "),e(r.a,{staticClass:"mb-6",attrs:{cols:"12"}},[e("Button",{staticClass:"white--text",attrs:{block:"",label:"Añadir idioma",color:"#5FA52D"},on:{action:function(e){return t.selectForm(3)}}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(640).default})}}]);
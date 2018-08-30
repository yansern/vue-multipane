var LAYOUT_HORIZONTAL="horizontal",LAYOUT_VERTICAL="vertical",__vue_module__={name:"multipane",props:{layout:{type:String,default:LAYOUT_VERTICAL}},data:function(){return{isResizing:!1}},computed:{classnames:function(){return["multipane","layout-"+this.layout.slice(0,1),this.isResizing?"is-resizing":""]},cursor:function(){return this.isResizing?this.layout==LAYOUT_VERTICAL?"col-resize":"row-resize":""},userSelect:function(){return this.isResizing?"none":""}},methods:{onMouseDown:function(e){var t=e.target;if(t.className&&"string"==typeof t.className&&t.className.match("multipane-resizer")){var i,n;e.preventDefault(),"touchstart"==e.type?(i=e.touches[0].pageX,n=e.touches[0].pageY):(i=e.pageX,n=e.pageY);var s=this,o=s.$el,a=s.layout,u=Boolean(t.className.match("affect-follower")),r=t.previousElementSibling;u&&(r=t.nextElementSibling);var l=r.offsetWidth,c=r.offsetHeight,p=!!(r.style.width+"").match("%"),d=window.addEventListener,m=window.removeEventListener,h=function(e,t){if(void 0===t&&(t=0),u&&(t=-t),a==LAYOUT_VERTICAL){var i=o.clientWidth,n=e+t;return r.style.width=p?n/i*100+"%":n+"px"}if(a==LAYOUT_HORIZONTAL){var s=o.clientHeight,l=e+t;return r.style.height=p?l/s*100+"%":l+"px"}};s.isResizing=!0;var _=h();s.$emit("paneResizeStart",r,t,_);var f=function(e){var o,u;"touchmove"==e.type?(o=e.touches[0].pageX,u=e.touches[0].pageY):(e.preventDefault(),o=e.pageX,u=e.pageY),_=a==LAYOUT_VERTICAL?h(l,o-i):h(c,u-n),s.$emit("paneResize",r,t,_)},v=function(){_=h(a==LAYOUT_VERTICAL?r.clientWidth:r.clientHeight),s.isResizing=!1,m("mousemove",f),m("mouseup",v),m("touchmove",f),m("touchend",v),s.$emit("paneResizeStop",r,t,_)};d("mousemove",f),d("mouseup",v),d("touchmove",f),d("touchend",v)}}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),i=".multipane { display: flex; } .multipane.layout-h { flex-direction: column; } .multipane.layout-v { flex-direction: row; } .multipane > div { position: relative; z-index: 1; } .multipane-resizer { display: block; position: relative; z-index: 2; } .layout-h > .multipane-resizer { width: 100%; height: 10px; margin-top: -10px; top: 5px; cursor: row-resize; } .layout-v > .multipane-resizer { width: 10px; height: 100%; margin-left: -10px; left: 5px; cursor: col-resize; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i)),e.appendChild(t)}}();var __$__vue_module__=Object.assign(__vue_module__,{render:function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.classnames,style:{cursor:this.cursor,userSelect:this.userSelect},on:{mousedown:this.onMouseDown,touchstart:this.onMouseDown}},[this._t("default")],2)},staticRenderFns:[]});__$__vue_module__.prototype=__vue_module__.prototype,function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText="":t.appendChild(document.createTextNode("")),e.appendChild(t)}}();var MultipaneResizer={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.classnames},[this._t("default")],2)},staticRenderFns:[],name:"multipane-resizer",props:{affectFollower:{type:Boolean,default:!1}},computed:{classnames:function(){return["multipane-resizer",this.affectFollower?"affect-follower":""]}}};"undefined"!=typeof window&&window.Vue&&(window.Vue.component("multipane",__$__vue_module__),window.Vue.component("multipane-resizer",MultipaneResizer));export{__$__vue_module__ as Multipane,MultipaneResizer};

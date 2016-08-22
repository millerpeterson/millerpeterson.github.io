// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__16896__auto__ = (function (){var and__16884__auto__ = typeof ReactDOM !== 'undefined';
if(and__16884__auto__){
return ReactDOM;
} else {
return and__16884__auto__;
}
})();
if(cljs.core.truth_(or__16896__auto__)){
return or__16896__auto__;
} else {
var and__16884__auto__ = typeof require !== 'undefined';
if(and__16884__auto__){
return require("react-dom");
} else {
return and__16884__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_18607 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_18607){
return (function (){
var _STAR_always_update_STAR_18608 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_18608;
}});})(_STAR_always_update_STAR_18607))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_18607;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args18609 = [];
var len__17954__auto___18612 = arguments.length;
var i__17955__auto___18613 = (0);
while(true){
if((i__17955__auto___18613 < len__17954__auto___18612)){
args18609.push((arguments[i__17955__auto___18613]));

var G__18614 = (i__17955__auto___18613 + (1));
i__17955__auto___18613 = G__18614;
continue;
} else {
}
break;
}

var G__18611 = args18609.length;
switch (G__18611) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18609.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__18620_18624 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__18621_18625 = null;
var count__18622_18626 = (0);
var i__18623_18627 = (0);
while(true){
if((i__18623_18627 < count__18622_18626)){
var v_18628 = cljs.core._nth.call(null,chunk__18621_18625,i__18623_18627);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_18628);

var G__18629 = seq__18620_18624;
var G__18630 = chunk__18621_18625;
var G__18631 = count__18622_18626;
var G__18632 = (i__18623_18627 + (1));
seq__18620_18624 = G__18629;
chunk__18621_18625 = G__18630;
count__18622_18626 = G__18631;
i__18623_18627 = G__18632;
continue;
} else {
var temp__4425__auto___18633 = cljs.core.seq.call(null,seq__18620_18624);
if(temp__4425__auto___18633){
var seq__18620_18634__$1 = temp__4425__auto___18633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18620_18634__$1)){
var c__17699__auto___18635 = cljs.core.chunk_first.call(null,seq__18620_18634__$1);
var G__18636 = cljs.core.chunk_rest.call(null,seq__18620_18634__$1);
var G__18637 = c__17699__auto___18635;
var G__18638 = cljs.core.count.call(null,c__17699__auto___18635);
var G__18639 = (0);
seq__18620_18624 = G__18636;
chunk__18621_18625 = G__18637;
count__18622_18626 = G__18638;
i__18623_18627 = G__18639;
continue;
} else {
var v_18640 = cljs.core.first.call(null,seq__18620_18634__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_18640);

var G__18641 = cljs.core.next.call(null,seq__18620_18634__$1);
var G__18642 = null;
var G__18643 = (0);
var G__18644 = (0);
seq__18620_18624 = G__18641;
chunk__18621_18625 = G__18642;
count__18622_18626 = G__18643;
i__18623_18627 = G__18644;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1466538815262
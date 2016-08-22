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
reagent.dom.dom = (function (){var or__17095__auto__ = (function (){var and__17083__auto__ = typeof ReactDOM !== 'undefined';
if(and__17083__auto__){
return ReactDOM;
} else {
return and__17083__auto__;
}
})();
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
var and__17083__auto__ = typeof require !== 'undefined';
if(and__17083__auto__){
return require("react-dom");
} else {
return and__17083__auto__;
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
var _STAR_always_update_STAR_23435 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_23435){
return (function (){
var _STAR_always_update_STAR_23436 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23436;
}});})(_STAR_always_update_STAR_23435))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23435;
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
var args23437 = [];
var len__18153__auto___23440 = arguments.length;
var i__18154__auto___23441 = (0);
while(true){
if((i__18154__auto___23441 < len__18153__auto___23440)){
args23437.push((arguments[i__18154__auto___23441]));

var G__23442 = (i__18154__auto___23441 + (1));
i__18154__auto___23441 = G__23442;
continue;
} else {
}
break;
}

var G__23439 = args23437.length;
switch (G__23439) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23437.length)].join('')));

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
var seq__23448_23452 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__23449_23453 = null;
var count__23450_23454 = (0);
var i__23451_23455 = (0);
while(true){
if((i__23451_23455 < count__23450_23454)){
var v_23456 = cljs.core._nth.call(null,chunk__23449_23453,i__23451_23455);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_23456);

var G__23457 = seq__23448_23452;
var G__23458 = chunk__23449_23453;
var G__23459 = count__23450_23454;
var G__23460 = (i__23451_23455 + (1));
seq__23448_23452 = G__23457;
chunk__23449_23453 = G__23458;
count__23450_23454 = G__23459;
i__23451_23455 = G__23460;
continue;
} else {
var temp__4425__auto___23461 = cljs.core.seq.call(null,seq__23448_23452);
if(temp__4425__auto___23461){
var seq__23448_23462__$1 = temp__4425__auto___23461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23448_23462__$1)){
var c__17898__auto___23463 = cljs.core.chunk_first.call(null,seq__23448_23462__$1);
var G__23464 = cljs.core.chunk_rest.call(null,seq__23448_23462__$1);
var G__23465 = c__17898__auto___23463;
var G__23466 = cljs.core.count.call(null,c__17898__auto___23463);
var G__23467 = (0);
seq__23448_23452 = G__23464;
chunk__23449_23453 = G__23465;
count__23450_23454 = G__23466;
i__23451_23455 = G__23467;
continue;
} else {
var v_23468 = cljs.core.first.call(null,seq__23448_23462__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_23468);

var G__23469 = cljs.core.next.call(null,seq__23448_23462__$1);
var G__23470 = null;
var G__23471 = (0);
var G__23472 = (0);
seq__23448_23452 = G__23469;
chunk__23449_23453 = G__23470;
count__23450_23454 = G__23471;
i__23451_23455 = G__23472;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map
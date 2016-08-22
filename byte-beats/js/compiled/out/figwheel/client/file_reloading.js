// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16852__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16852__auto__){
return or__16852__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16852__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21988_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21988_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__21993 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21994 = null;
var count__21995 = (0);
var i__21996 = (0);
while(true){
if((i__21996 < count__21995)){
var n = cljs.core._nth.call(null,chunk__21994,i__21996);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21997 = seq__21993;
var G__21998 = chunk__21994;
var G__21999 = count__21995;
var G__22000 = (i__21996 + (1));
seq__21993 = G__21997;
chunk__21994 = G__21998;
count__21995 = G__21999;
i__21996 = G__22000;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21993);
if(temp__4425__auto__){
var seq__21993__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21993__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__21993__$1);
var G__22001 = cljs.core.chunk_rest.call(null,seq__21993__$1);
var G__22002 = c__17655__auto__;
var G__22003 = cljs.core.count.call(null,c__17655__auto__);
var G__22004 = (0);
seq__21993 = G__22001;
chunk__21994 = G__22002;
count__21995 = G__22003;
i__21996 = G__22004;
continue;
} else {
var n = cljs.core.first.call(null,seq__21993__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22005 = cljs.core.next.call(null,seq__21993__$1);
var G__22006 = null;
var G__22007 = (0);
var G__22008 = (0);
seq__21993 = G__22005;
chunk__21994 = G__22006;
count__21995 = G__22007;
i__21996 = G__22008;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22047_22054 = cljs.core.seq.call(null,deps);
var chunk__22048_22055 = null;
var count__22049_22056 = (0);
var i__22050_22057 = (0);
while(true){
if((i__22050_22057 < count__22049_22056)){
var dep_22058 = cljs.core._nth.call(null,chunk__22048_22055,i__22050_22057);
topo_sort_helper_STAR_.call(null,dep_22058,(depth + (1)),state);

var G__22059 = seq__22047_22054;
var G__22060 = chunk__22048_22055;
var G__22061 = count__22049_22056;
var G__22062 = (i__22050_22057 + (1));
seq__22047_22054 = G__22059;
chunk__22048_22055 = G__22060;
count__22049_22056 = G__22061;
i__22050_22057 = G__22062;
continue;
} else {
var temp__4425__auto___22063 = cljs.core.seq.call(null,seq__22047_22054);
if(temp__4425__auto___22063){
var seq__22047_22064__$1 = temp__4425__auto___22063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22047_22064__$1)){
var c__17655__auto___22065 = cljs.core.chunk_first.call(null,seq__22047_22064__$1);
var G__22066 = cljs.core.chunk_rest.call(null,seq__22047_22064__$1);
var G__22067 = c__17655__auto___22065;
var G__22068 = cljs.core.count.call(null,c__17655__auto___22065);
var G__22069 = (0);
seq__22047_22054 = G__22066;
chunk__22048_22055 = G__22067;
count__22049_22056 = G__22068;
i__22050_22057 = G__22069;
continue;
} else {
var dep_22070 = cljs.core.first.call(null,seq__22047_22064__$1);
topo_sort_helper_STAR_.call(null,dep_22070,(depth + (1)),state);

var G__22071 = cljs.core.next.call(null,seq__22047_22064__$1);
var G__22072 = null;
var G__22073 = (0);
var G__22074 = (0);
seq__22047_22054 = G__22071;
chunk__22048_22055 = G__22072;
count__22049_22056 = G__22073;
i__22050_22057 = G__22074;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22051){
var vec__22053 = p__22051;
var x = cljs.core.nth.call(null,vec__22053,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22053,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22053,x,xs,get_deps__$1){
return (function (p1__22009_SHARP_){
return clojure.set.difference.call(null,p1__22009_SHARP_,x);
});})(vec__22053,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22087 = cljs.core.seq.call(null,provides);
var chunk__22088 = null;
var count__22089 = (0);
var i__22090 = (0);
while(true){
if((i__22090 < count__22089)){
var prov = cljs.core._nth.call(null,chunk__22088,i__22090);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22091_22099 = cljs.core.seq.call(null,requires);
var chunk__22092_22100 = null;
var count__22093_22101 = (0);
var i__22094_22102 = (0);
while(true){
if((i__22094_22102 < count__22093_22101)){
var req_22103 = cljs.core._nth.call(null,chunk__22092_22100,i__22094_22102);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22103,prov);

var G__22104 = seq__22091_22099;
var G__22105 = chunk__22092_22100;
var G__22106 = count__22093_22101;
var G__22107 = (i__22094_22102 + (1));
seq__22091_22099 = G__22104;
chunk__22092_22100 = G__22105;
count__22093_22101 = G__22106;
i__22094_22102 = G__22107;
continue;
} else {
var temp__4425__auto___22108 = cljs.core.seq.call(null,seq__22091_22099);
if(temp__4425__auto___22108){
var seq__22091_22109__$1 = temp__4425__auto___22108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22091_22109__$1)){
var c__17655__auto___22110 = cljs.core.chunk_first.call(null,seq__22091_22109__$1);
var G__22111 = cljs.core.chunk_rest.call(null,seq__22091_22109__$1);
var G__22112 = c__17655__auto___22110;
var G__22113 = cljs.core.count.call(null,c__17655__auto___22110);
var G__22114 = (0);
seq__22091_22099 = G__22111;
chunk__22092_22100 = G__22112;
count__22093_22101 = G__22113;
i__22094_22102 = G__22114;
continue;
} else {
var req_22115 = cljs.core.first.call(null,seq__22091_22109__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22115,prov);

var G__22116 = cljs.core.next.call(null,seq__22091_22109__$1);
var G__22117 = null;
var G__22118 = (0);
var G__22119 = (0);
seq__22091_22099 = G__22116;
chunk__22092_22100 = G__22117;
count__22093_22101 = G__22118;
i__22094_22102 = G__22119;
continue;
}
} else {
}
}
break;
}

var G__22120 = seq__22087;
var G__22121 = chunk__22088;
var G__22122 = count__22089;
var G__22123 = (i__22090 + (1));
seq__22087 = G__22120;
chunk__22088 = G__22121;
count__22089 = G__22122;
i__22090 = G__22123;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22087);
if(temp__4425__auto__){
var seq__22087__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22087__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__22087__$1);
var G__22124 = cljs.core.chunk_rest.call(null,seq__22087__$1);
var G__22125 = c__17655__auto__;
var G__22126 = cljs.core.count.call(null,c__17655__auto__);
var G__22127 = (0);
seq__22087 = G__22124;
chunk__22088 = G__22125;
count__22089 = G__22126;
i__22090 = G__22127;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22087__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22095_22128 = cljs.core.seq.call(null,requires);
var chunk__22096_22129 = null;
var count__22097_22130 = (0);
var i__22098_22131 = (0);
while(true){
if((i__22098_22131 < count__22097_22130)){
var req_22132 = cljs.core._nth.call(null,chunk__22096_22129,i__22098_22131);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22132,prov);

var G__22133 = seq__22095_22128;
var G__22134 = chunk__22096_22129;
var G__22135 = count__22097_22130;
var G__22136 = (i__22098_22131 + (1));
seq__22095_22128 = G__22133;
chunk__22096_22129 = G__22134;
count__22097_22130 = G__22135;
i__22098_22131 = G__22136;
continue;
} else {
var temp__4425__auto___22137__$1 = cljs.core.seq.call(null,seq__22095_22128);
if(temp__4425__auto___22137__$1){
var seq__22095_22138__$1 = temp__4425__auto___22137__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22095_22138__$1)){
var c__17655__auto___22139 = cljs.core.chunk_first.call(null,seq__22095_22138__$1);
var G__22140 = cljs.core.chunk_rest.call(null,seq__22095_22138__$1);
var G__22141 = c__17655__auto___22139;
var G__22142 = cljs.core.count.call(null,c__17655__auto___22139);
var G__22143 = (0);
seq__22095_22128 = G__22140;
chunk__22096_22129 = G__22141;
count__22097_22130 = G__22142;
i__22098_22131 = G__22143;
continue;
} else {
var req_22144 = cljs.core.first.call(null,seq__22095_22138__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22144,prov);

var G__22145 = cljs.core.next.call(null,seq__22095_22138__$1);
var G__22146 = null;
var G__22147 = (0);
var G__22148 = (0);
seq__22095_22128 = G__22145;
chunk__22096_22129 = G__22146;
count__22097_22130 = G__22147;
i__22098_22131 = G__22148;
continue;
}
} else {
}
}
break;
}

var G__22149 = cljs.core.next.call(null,seq__22087__$1);
var G__22150 = null;
var G__22151 = (0);
var G__22152 = (0);
seq__22087 = G__22149;
chunk__22088 = G__22150;
count__22089 = G__22151;
i__22090 = G__22152;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22157_22161 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22158_22162 = null;
var count__22159_22163 = (0);
var i__22160_22164 = (0);
while(true){
if((i__22160_22164 < count__22159_22163)){
var ns_22165 = cljs.core._nth.call(null,chunk__22158_22162,i__22160_22164);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22165);

var G__22166 = seq__22157_22161;
var G__22167 = chunk__22158_22162;
var G__22168 = count__22159_22163;
var G__22169 = (i__22160_22164 + (1));
seq__22157_22161 = G__22166;
chunk__22158_22162 = G__22167;
count__22159_22163 = G__22168;
i__22160_22164 = G__22169;
continue;
} else {
var temp__4425__auto___22170 = cljs.core.seq.call(null,seq__22157_22161);
if(temp__4425__auto___22170){
var seq__22157_22171__$1 = temp__4425__auto___22170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22157_22171__$1)){
var c__17655__auto___22172 = cljs.core.chunk_first.call(null,seq__22157_22171__$1);
var G__22173 = cljs.core.chunk_rest.call(null,seq__22157_22171__$1);
var G__22174 = c__17655__auto___22172;
var G__22175 = cljs.core.count.call(null,c__17655__auto___22172);
var G__22176 = (0);
seq__22157_22161 = G__22173;
chunk__22158_22162 = G__22174;
count__22159_22163 = G__22175;
i__22160_22164 = G__22176;
continue;
} else {
var ns_22177 = cljs.core.first.call(null,seq__22157_22171__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22177);

var G__22178 = cljs.core.next.call(null,seq__22157_22171__$1);
var G__22179 = null;
var G__22180 = (0);
var G__22181 = (0);
seq__22157_22161 = G__22178;
chunk__22158_22162 = G__22179;
count__22159_22163 = G__22180;
i__22160_22164 = G__22181;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16852__auto__ = goog.require__;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22182__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22183__i = 0, G__22183__a = new Array(arguments.length -  0);
while (G__22183__i < G__22183__a.length) {G__22183__a[G__22183__i] = arguments[G__22183__i + 0]; ++G__22183__i;}
  args = new cljs.core.IndexedSeq(G__22183__a,0);
} 
return G__22182__delegate.call(this,args);};
G__22182.cljs$lang$maxFixedArity = 0;
G__22182.cljs$lang$applyTo = (function (arglist__22184){
var args = cljs.core.seq(arglist__22184);
return G__22182__delegate(args);
});
G__22182.cljs$core$IFn$_invoke$arity$variadic = G__22182__delegate;
return G__22182;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22186 = cljs.core._EQ_;
var expr__22187 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22186.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22187))){
var path_parts = ((function (pred__22186,expr__22187){
return (function (p1__22185_SHARP_){
return clojure.string.split.call(null,p1__22185_SHARP_,/[\/\\]/);
});})(pred__22186,expr__22187))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22186,expr__22187){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22189){if((e22189 instanceof Error)){
var e = e22189;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22189;

}
}})());
});
;})(path_parts,sep,root,pred__22186,expr__22187))
} else {
if(cljs.core.truth_(pred__22186.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22187))){
return ((function (pred__22186,expr__22187){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22186,expr__22187){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22186,expr__22187))
);

return deferred.addErrback(((function (deferred,pred__22186,expr__22187){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22186,expr__22187))
);
});
;})(pred__22186,expr__22187))
} else {
return ((function (pred__22186,expr__22187){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22186,expr__22187))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22190,callback){
var map__22193 = p__22190;
var map__22193__$1 = ((((!((map__22193 == null)))?((((map__22193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22193):map__22193);
var file_msg = map__22193__$1;
var request_url = cljs.core.get.call(null,map__22193__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22193,map__22193__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22193,map__22193__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto__){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto__){
return (function (state_22217){
var state_val_22218 = (state_22217[(1)]);
if((state_val_22218 === (7))){
var inst_22213 = (state_22217[(2)]);
var state_22217__$1 = state_22217;
var statearr_22219_22239 = state_22217__$1;
(statearr_22219_22239[(2)] = inst_22213);

(statearr_22219_22239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (1))){
var state_22217__$1 = state_22217;
var statearr_22220_22240 = state_22217__$1;
(statearr_22220_22240[(2)] = null);

(statearr_22220_22240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (4))){
var inst_22197 = (state_22217[(7)]);
var inst_22197__$1 = (state_22217[(2)]);
var state_22217__$1 = (function (){var statearr_22221 = state_22217;
(statearr_22221[(7)] = inst_22197__$1);

return statearr_22221;
})();
if(cljs.core.truth_(inst_22197__$1)){
var statearr_22222_22241 = state_22217__$1;
(statearr_22222_22241[(1)] = (5));

} else {
var statearr_22223_22242 = state_22217__$1;
(statearr_22223_22242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (6))){
var state_22217__$1 = state_22217;
var statearr_22224_22243 = state_22217__$1;
(statearr_22224_22243[(2)] = null);

(statearr_22224_22243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (3))){
var inst_22215 = (state_22217[(2)]);
var state_22217__$1 = state_22217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22217__$1,inst_22215);
} else {
if((state_val_22218 === (2))){
var state_22217__$1 = state_22217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22217__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22218 === (11))){
var inst_22209 = (state_22217[(2)]);
var state_22217__$1 = (function (){var statearr_22225 = state_22217;
(statearr_22225[(8)] = inst_22209);

return statearr_22225;
})();
var statearr_22226_22244 = state_22217__$1;
(statearr_22226_22244[(2)] = null);

(statearr_22226_22244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (9))){
var inst_22203 = (state_22217[(9)]);
var inst_22201 = (state_22217[(10)]);
var inst_22205 = inst_22203.call(null,inst_22201);
var state_22217__$1 = state_22217;
var statearr_22227_22245 = state_22217__$1;
(statearr_22227_22245[(2)] = inst_22205);

(statearr_22227_22245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (5))){
var inst_22197 = (state_22217[(7)]);
var inst_22199 = figwheel.client.file_reloading.blocking_load.call(null,inst_22197);
var state_22217__$1 = state_22217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22217__$1,(8),inst_22199);
} else {
if((state_val_22218 === (10))){
var inst_22201 = (state_22217[(10)]);
var inst_22207 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22201);
var state_22217__$1 = state_22217;
var statearr_22228_22246 = state_22217__$1;
(statearr_22228_22246[(2)] = inst_22207);

(statearr_22228_22246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (8))){
var inst_22203 = (state_22217[(9)]);
var inst_22197 = (state_22217[(7)]);
var inst_22201 = (state_22217[(2)]);
var inst_22202 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22203__$1 = cljs.core.get.call(null,inst_22202,inst_22197);
var state_22217__$1 = (function (){var statearr_22229 = state_22217;
(statearr_22229[(9)] = inst_22203__$1);

(statearr_22229[(10)] = inst_22201);

return statearr_22229;
})();
if(cljs.core.truth_(inst_22203__$1)){
var statearr_22230_22247 = state_22217__$1;
(statearr_22230_22247[(1)] = (9));

} else {
var statearr_22231_22248 = state_22217__$1;
(statearr_22231_22248[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19045__auto__))
;
return ((function (switch__18865__auto__,c__19045__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18866__auto__ = null;
var figwheel$client$file_reloading$state_machine__18866__auto____0 = (function (){
var statearr_22235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22235[(0)] = figwheel$client$file_reloading$state_machine__18866__auto__);

(statearr_22235[(1)] = (1));

return statearr_22235;
});
var figwheel$client$file_reloading$state_machine__18866__auto____1 = (function (state_22217){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_22217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e22236){if((e22236 instanceof Object)){
var ex__18869__auto__ = e22236;
var statearr_22237_22249 = state_22217;
(statearr_22237_22249[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22250 = state_22217;
state_22217 = G__22250;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18866__auto__ = function(state_22217){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18866__auto____1.call(this,state_22217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18866__auto____0;
figwheel$client$file_reloading$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18866__auto____1;
return figwheel$client$file_reloading$state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto__))
})();
var state__19047__auto__ = (function (){var statearr_22238 = f__19046__auto__.call(null);
(statearr_22238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto__);

return statearr_22238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto__))
);

return c__19045__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22251,callback){
var map__22254 = p__22251;
var map__22254__$1 = ((((!((map__22254 == null)))?((((map__22254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22254):map__22254);
var file_msg = map__22254__$1;
var namespace = cljs.core.get.call(null,map__22254__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22254,map__22254__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22254,map__22254__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22256){
var map__22259 = p__22256;
var map__22259__$1 = ((((!((map__22259 == null)))?((((map__22259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22259):map__22259);
var file_msg = map__22259__$1;
var namespace = cljs.core.get.call(null,map__22259__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16840__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16840__auto__){
var or__16852__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
var or__16852__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16852__auto____$1)){
return or__16852__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16840__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22261,callback){
var map__22264 = p__22261;
var map__22264__$1 = ((((!((map__22264 == null)))?((((map__22264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22264):map__22264);
var file_msg = map__22264__$1;
var request_url = cljs.core.get.call(null,map__22264__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22264__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19045__auto___22352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___22352,out){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___22352,out){
return (function (state_22334){
var state_val_22335 = (state_22334[(1)]);
if((state_val_22335 === (1))){
var inst_22312 = cljs.core.nth.call(null,files,(0),null);
var inst_22313 = cljs.core.nthnext.call(null,files,(1));
var inst_22314 = files;
var state_22334__$1 = (function (){var statearr_22336 = state_22334;
(statearr_22336[(7)] = inst_22314);

(statearr_22336[(8)] = inst_22312);

(statearr_22336[(9)] = inst_22313);

return statearr_22336;
})();
var statearr_22337_22353 = state_22334__$1;
(statearr_22337_22353[(2)] = null);

(statearr_22337_22353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22335 === (2))){
var inst_22314 = (state_22334[(7)]);
var inst_22317 = (state_22334[(10)]);
var inst_22317__$1 = cljs.core.nth.call(null,inst_22314,(0),null);
var inst_22318 = cljs.core.nthnext.call(null,inst_22314,(1));
var inst_22319 = (inst_22317__$1 == null);
var inst_22320 = cljs.core.not.call(null,inst_22319);
var state_22334__$1 = (function (){var statearr_22338 = state_22334;
(statearr_22338[(11)] = inst_22318);

(statearr_22338[(10)] = inst_22317__$1);

return statearr_22338;
})();
if(inst_22320){
var statearr_22339_22354 = state_22334__$1;
(statearr_22339_22354[(1)] = (4));

} else {
var statearr_22340_22355 = state_22334__$1;
(statearr_22340_22355[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22335 === (3))){
var inst_22332 = (state_22334[(2)]);
var state_22334__$1 = state_22334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22334__$1,inst_22332);
} else {
if((state_val_22335 === (4))){
var inst_22317 = (state_22334[(10)]);
var inst_22322 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22317);
var state_22334__$1 = state_22334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22334__$1,(7),inst_22322);
} else {
if((state_val_22335 === (5))){
var inst_22328 = cljs.core.async.close_BANG_.call(null,out);
var state_22334__$1 = state_22334;
var statearr_22341_22356 = state_22334__$1;
(statearr_22341_22356[(2)] = inst_22328);

(statearr_22341_22356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22335 === (6))){
var inst_22330 = (state_22334[(2)]);
var state_22334__$1 = state_22334;
var statearr_22342_22357 = state_22334__$1;
(statearr_22342_22357[(2)] = inst_22330);

(statearr_22342_22357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22335 === (7))){
var inst_22318 = (state_22334[(11)]);
var inst_22324 = (state_22334[(2)]);
var inst_22325 = cljs.core.async.put_BANG_.call(null,out,inst_22324);
var inst_22314 = inst_22318;
var state_22334__$1 = (function (){var statearr_22343 = state_22334;
(statearr_22343[(7)] = inst_22314);

(statearr_22343[(12)] = inst_22325);

return statearr_22343;
})();
var statearr_22344_22358 = state_22334__$1;
(statearr_22344_22358[(2)] = null);

(statearr_22344_22358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19045__auto___22352,out))
;
return ((function (switch__18865__auto__,c__19045__auto___22352,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18866__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18866__auto____0 = (function (){
var statearr_22348 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22348[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18866__auto__);

(statearr_22348[(1)] = (1));

return statearr_22348;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18866__auto____1 = (function (state_22334){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_22334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e22349){if((e22349 instanceof Object)){
var ex__18869__auto__ = e22349;
var statearr_22350_22359 = state_22334;
(statearr_22350_22359[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22360 = state_22334;
state_22334 = G__22360;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18866__auto__ = function(state_22334){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18866__auto____1.call(this,state_22334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18866__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18866__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___22352,out))
})();
var state__19047__auto__ = (function (){var statearr_22351 = f__19046__auto__.call(null);
(statearr_22351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___22352);

return statearr_22351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___22352,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22361,opts){
var map__22365 = p__22361;
var map__22365__$1 = ((((!((map__22365 == null)))?((((map__22365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22365):map__22365);
var eval_body__$1 = cljs.core.get.call(null,map__22365__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22365__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16840__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16840__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16840__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22367){var e = e22367;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22368_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22368_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22373){
var vec__22374 = p__22373;
var k = cljs.core.nth.call(null,vec__22374,(0),null);
var v = cljs.core.nth.call(null,vec__22374,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22375){
var vec__22376 = p__22375;
var k = cljs.core.nth.call(null,vec__22376,(0),null);
var v = cljs.core.nth.call(null,vec__22376,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22380,p__22381){
var map__22628 = p__22380;
var map__22628__$1 = ((((!((map__22628 == null)))?((((map__22628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22628):map__22628);
var opts = map__22628__$1;
var before_jsload = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22628__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22629 = p__22381;
var map__22629__$1 = ((((!((map__22629 == null)))?((((map__22629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22629):map__22629);
var msg = map__22629__$1;
var files = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22629__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22782){
var state_val_22783 = (state_22782[(1)]);
if((state_val_22783 === (7))){
var inst_22643 = (state_22782[(7)]);
var inst_22646 = (state_22782[(8)]);
var inst_22644 = (state_22782[(9)]);
var inst_22645 = (state_22782[(10)]);
var inst_22651 = cljs.core._nth.call(null,inst_22644,inst_22646);
var inst_22652 = figwheel.client.file_reloading.eval_body.call(null,inst_22651,opts);
var inst_22653 = (inst_22646 + (1));
var tmp22784 = inst_22643;
var tmp22785 = inst_22644;
var tmp22786 = inst_22645;
var inst_22643__$1 = tmp22784;
var inst_22644__$1 = tmp22785;
var inst_22645__$1 = tmp22786;
var inst_22646__$1 = inst_22653;
var state_22782__$1 = (function (){var statearr_22787 = state_22782;
(statearr_22787[(7)] = inst_22643__$1);

(statearr_22787[(8)] = inst_22646__$1);

(statearr_22787[(11)] = inst_22652);

(statearr_22787[(9)] = inst_22644__$1);

(statearr_22787[(10)] = inst_22645__$1);

return statearr_22787;
})();
var statearr_22788_22874 = state_22782__$1;
(statearr_22788_22874[(2)] = null);

(statearr_22788_22874[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (20))){
var inst_22686 = (state_22782[(12)]);
var inst_22694 = figwheel.client.file_reloading.sort_files.call(null,inst_22686);
var state_22782__$1 = state_22782;
var statearr_22789_22875 = state_22782__$1;
(statearr_22789_22875[(2)] = inst_22694);

(statearr_22789_22875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (27))){
var state_22782__$1 = state_22782;
var statearr_22790_22876 = state_22782__$1;
(statearr_22790_22876[(2)] = null);

(statearr_22790_22876[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (1))){
var inst_22635 = (state_22782[(13)]);
var inst_22632 = before_jsload.call(null,files);
var inst_22633 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22634 = (function (){return ((function (inst_22635,inst_22632,inst_22633,state_val_22783,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22377_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22377_SHARP_);
});
;})(inst_22635,inst_22632,inst_22633,state_val_22783,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22635__$1 = cljs.core.filter.call(null,inst_22634,files);
var inst_22636 = cljs.core.not_empty.call(null,inst_22635__$1);
var state_22782__$1 = (function (){var statearr_22791 = state_22782;
(statearr_22791[(13)] = inst_22635__$1);

(statearr_22791[(14)] = inst_22632);

(statearr_22791[(15)] = inst_22633);

return statearr_22791;
})();
if(cljs.core.truth_(inst_22636)){
var statearr_22792_22877 = state_22782__$1;
(statearr_22792_22877[(1)] = (2));

} else {
var statearr_22793_22878 = state_22782__$1;
(statearr_22793_22878[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (24))){
var state_22782__$1 = state_22782;
var statearr_22794_22879 = state_22782__$1;
(statearr_22794_22879[(2)] = null);

(statearr_22794_22879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (39))){
var inst_22736 = (state_22782[(16)]);
var state_22782__$1 = state_22782;
var statearr_22795_22880 = state_22782__$1;
(statearr_22795_22880[(2)] = inst_22736);

(statearr_22795_22880[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (46))){
var inst_22777 = (state_22782[(2)]);
var state_22782__$1 = state_22782;
var statearr_22796_22881 = state_22782__$1;
(statearr_22796_22881[(2)] = inst_22777);

(statearr_22796_22881[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (4))){
var inst_22680 = (state_22782[(2)]);
var inst_22681 = cljs.core.List.EMPTY;
var inst_22682 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22681);
var inst_22683 = (function (){return ((function (inst_22680,inst_22681,inst_22682,state_val_22783,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22378_SHARP_){
var and__16840__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22378_SHARP_);
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22378_SHARP_));
} else {
return and__16840__auto__;
}
});
;})(inst_22680,inst_22681,inst_22682,state_val_22783,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22684 = cljs.core.filter.call(null,inst_22683,files);
var inst_22685 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22686 = cljs.core.concat.call(null,inst_22684,inst_22685);
var state_22782__$1 = (function (){var statearr_22797 = state_22782;
(statearr_22797[(17)] = inst_22680);

(statearr_22797[(18)] = inst_22682);

(statearr_22797[(12)] = inst_22686);

return statearr_22797;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22798_22882 = state_22782__$1;
(statearr_22798_22882[(1)] = (16));

} else {
var statearr_22799_22883 = state_22782__$1;
(statearr_22799_22883[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (15))){
var inst_22670 = (state_22782[(2)]);
var state_22782__$1 = state_22782;
var statearr_22800_22884 = state_22782__$1;
(statearr_22800_22884[(2)] = inst_22670);

(statearr_22800_22884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (21))){
var inst_22696 = (state_22782[(19)]);
var inst_22696__$1 = (state_22782[(2)]);
var inst_22697 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22696__$1);
var state_22782__$1 = (function (){var statearr_22801 = state_22782;
(statearr_22801[(19)] = inst_22696__$1);

return statearr_22801;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22782__$1,(22),inst_22697);
} else {
if((state_val_22783 === (31))){
var inst_22780 = (state_22782[(2)]);
var state_22782__$1 = state_22782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22782__$1,inst_22780);
} else {
if((state_val_22783 === (32))){
var inst_22736 = (state_22782[(16)]);
var inst_22741 = inst_22736.cljs$lang$protocol_mask$partition0$;
var inst_22742 = (inst_22741 & (64));
var inst_22743 = inst_22736.cljs$core$ISeq$;
var inst_22744 = (inst_22742) || (inst_22743);
var state_22782__$1 = state_22782;
if(cljs.core.truth_(inst_22744)){
var statearr_22802_22885 = state_22782__$1;
(statearr_22802_22885[(1)] = (35));

} else {
var statearr_22803_22886 = state_22782__$1;
(statearr_22803_22886[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (40))){
var inst_22757 = (state_22782[(20)]);
var inst_22756 = (state_22782[(2)]);
var inst_22757__$1 = cljs.core.get.call(null,inst_22756,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22758 = cljs.core.get.call(null,inst_22756,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22759 = cljs.core.not_empty.call(null,inst_22757__$1);
var state_22782__$1 = (function (){var statearr_22804 = state_22782;
(statearr_22804[(21)] = inst_22758);

(statearr_22804[(20)] = inst_22757__$1);

return statearr_22804;
})();
if(cljs.core.truth_(inst_22759)){
var statearr_22805_22887 = state_22782__$1;
(statearr_22805_22887[(1)] = (41));

} else {
var statearr_22806_22888 = state_22782__$1;
(statearr_22806_22888[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (33))){
var state_22782__$1 = state_22782;
var statearr_22807_22889 = state_22782__$1;
(statearr_22807_22889[(2)] = false);

(statearr_22807_22889[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (13))){
var inst_22656 = (state_22782[(22)]);
var inst_22660 = cljs.core.chunk_first.call(null,inst_22656);
var inst_22661 = cljs.core.chunk_rest.call(null,inst_22656);
var inst_22662 = cljs.core.count.call(null,inst_22660);
var inst_22643 = inst_22661;
var inst_22644 = inst_22660;
var inst_22645 = inst_22662;
var inst_22646 = (0);
var state_22782__$1 = (function (){var statearr_22808 = state_22782;
(statearr_22808[(7)] = inst_22643);

(statearr_22808[(8)] = inst_22646);

(statearr_22808[(9)] = inst_22644);

(statearr_22808[(10)] = inst_22645);

return statearr_22808;
})();
var statearr_22809_22890 = state_22782__$1;
(statearr_22809_22890[(2)] = null);

(statearr_22809_22890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (22))){
var inst_22699 = (state_22782[(23)]);
var inst_22704 = (state_22782[(24)]);
var inst_22700 = (state_22782[(25)]);
var inst_22696 = (state_22782[(19)]);
var inst_22699__$1 = (state_22782[(2)]);
var inst_22700__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22699__$1);
var inst_22701 = (function (){var all_files = inst_22696;
var res_SINGLEQUOTE_ = inst_22699__$1;
var res = inst_22700__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22699,inst_22704,inst_22700,inst_22696,inst_22699__$1,inst_22700__$1,state_val_22783,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22379_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22379_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22699,inst_22704,inst_22700,inst_22696,inst_22699__$1,inst_22700__$1,state_val_22783,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22702 = cljs.core.filter.call(null,inst_22701,inst_22699__$1);
var inst_22703 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22704__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22703);
var inst_22705 = cljs.core.not_empty.call(null,inst_22704__$1);
var state_22782__$1 = (function (){var statearr_22810 = state_22782;
(statearr_22810[(26)] = inst_22702);

(statearr_22810[(23)] = inst_22699__$1);

(statearr_22810[(24)] = inst_22704__$1);

(statearr_22810[(25)] = inst_22700__$1);

return statearr_22810;
})();
if(cljs.core.truth_(inst_22705)){
var statearr_22811_22891 = state_22782__$1;
(statearr_22811_22891[(1)] = (23));

} else {
var statearr_22812_22892 = state_22782__$1;
(statearr_22812_22892[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (36))){
var state_22782__$1 = state_22782;
var statearr_22813_22893 = state_22782__$1;
(statearr_22813_22893[(2)] = false);

(statearr_22813_22893[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (41))){
var inst_22757 = (state_22782[(20)]);
var inst_22761 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22762 = cljs.core.map.call(null,inst_22761,inst_22757);
var inst_22763 = cljs.core.pr_str.call(null,inst_22762);
var inst_22764 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22763)].join('');
var inst_22765 = figwheel.client.utils.log.call(null,inst_22764);
var state_22782__$1 = state_22782;
var statearr_22814_22894 = state_22782__$1;
(statearr_22814_22894[(2)] = inst_22765);

(statearr_22814_22894[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (43))){
var inst_22758 = (state_22782[(21)]);
var inst_22768 = (state_22782[(2)]);
var inst_22769 = cljs.core.not_empty.call(null,inst_22758);
var state_22782__$1 = (function (){var statearr_22815 = state_22782;
(statearr_22815[(27)] = inst_22768);

return statearr_22815;
})();
if(cljs.core.truth_(inst_22769)){
var statearr_22816_22895 = state_22782__$1;
(statearr_22816_22895[(1)] = (44));

} else {
var statearr_22817_22896 = state_22782__$1;
(statearr_22817_22896[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (29))){
var inst_22702 = (state_22782[(26)]);
var inst_22699 = (state_22782[(23)]);
var inst_22704 = (state_22782[(24)]);
var inst_22700 = (state_22782[(25)]);
var inst_22736 = (state_22782[(16)]);
var inst_22696 = (state_22782[(19)]);
var inst_22732 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22735 = (function (){var all_files = inst_22696;
var res_SINGLEQUOTE_ = inst_22699;
var res = inst_22700;
var files_not_loaded = inst_22702;
var dependencies_that_loaded = inst_22704;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22702,inst_22699,inst_22704,inst_22700,inst_22736,inst_22696,inst_22732,state_val_22783,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22734){
var map__22818 = p__22734;
var map__22818__$1 = ((((!((map__22818 == null)))?((((map__22818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22818):map__22818);
var namespace = cljs.core.get.call(null,map__22818__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22702,inst_22699,inst_22704,inst_22700,inst_22736,inst_22696,inst_22732,state_val_22783,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22736__$1 = cljs.core.group_by.call(null,inst_22735,inst_22702);
var inst_22738 = (inst_22736__$1 == null);
var inst_22739 = cljs.core.not.call(null,inst_22738);
var state_22782__$1 = (function (){var statearr_22820 = state_22782;
(statearr_22820[(16)] = inst_22736__$1);

(statearr_22820[(28)] = inst_22732);

return statearr_22820;
})();
if(inst_22739){
var statearr_22821_22897 = state_22782__$1;
(statearr_22821_22897[(1)] = (32));

} else {
var statearr_22822_22898 = state_22782__$1;
(statearr_22822_22898[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (44))){
var inst_22758 = (state_22782[(21)]);
var inst_22771 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22758);
var inst_22772 = cljs.core.pr_str.call(null,inst_22771);
var inst_22773 = [cljs.core.str("not required: "),cljs.core.str(inst_22772)].join('');
var inst_22774 = figwheel.client.utils.log.call(null,inst_22773);
var state_22782__$1 = state_22782;
var statearr_22823_22899 = state_22782__$1;
(statearr_22823_22899[(2)] = inst_22774);

(statearr_22823_22899[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (6))){
var inst_22677 = (state_22782[(2)]);
var state_22782__$1 = state_22782;
var statearr_22824_22900 = state_22782__$1;
(statearr_22824_22900[(2)] = inst_22677);

(statearr_22824_22900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (28))){
var inst_22702 = (state_22782[(26)]);
var inst_22729 = (state_22782[(2)]);
var inst_22730 = cljs.core.not_empty.call(null,inst_22702);
var state_22782__$1 = (function (){var statearr_22825 = state_22782;
(statearr_22825[(29)] = inst_22729);

return statearr_22825;
})();
if(cljs.core.truth_(inst_22730)){
var statearr_22826_22901 = state_22782__$1;
(statearr_22826_22901[(1)] = (29));

} else {
var statearr_22827_22902 = state_22782__$1;
(statearr_22827_22902[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (25))){
var inst_22700 = (state_22782[(25)]);
var inst_22716 = (state_22782[(2)]);
var inst_22717 = cljs.core.not_empty.call(null,inst_22700);
var state_22782__$1 = (function (){var statearr_22828 = state_22782;
(statearr_22828[(30)] = inst_22716);

return statearr_22828;
})();
if(cljs.core.truth_(inst_22717)){
var statearr_22829_22903 = state_22782__$1;
(statearr_22829_22903[(1)] = (26));

} else {
var statearr_22830_22904 = state_22782__$1;
(statearr_22830_22904[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (34))){
var inst_22751 = (state_22782[(2)]);
var state_22782__$1 = state_22782;
if(cljs.core.truth_(inst_22751)){
var statearr_22831_22905 = state_22782__$1;
(statearr_22831_22905[(1)] = (38));

} else {
var statearr_22832_22906 = state_22782__$1;
(statearr_22832_22906[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (17))){
var state_22782__$1 = state_22782;
var statearr_22833_22907 = state_22782__$1;
(statearr_22833_22907[(2)] = recompile_dependents);

(statearr_22833_22907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (3))){
var state_22782__$1 = state_22782;
var statearr_22834_22908 = state_22782__$1;
(statearr_22834_22908[(2)] = null);

(statearr_22834_22908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (12))){
var inst_22673 = (state_22782[(2)]);
var state_22782__$1 = state_22782;
var statearr_22835_22909 = state_22782__$1;
(statearr_22835_22909[(2)] = inst_22673);

(statearr_22835_22909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (2))){
var inst_22635 = (state_22782[(13)]);
var inst_22642 = cljs.core.seq.call(null,inst_22635);
var inst_22643 = inst_22642;
var inst_22644 = null;
var inst_22645 = (0);
var inst_22646 = (0);
var state_22782__$1 = (function (){var statearr_22836 = state_22782;
(statearr_22836[(7)] = inst_22643);

(statearr_22836[(8)] = inst_22646);

(statearr_22836[(9)] = inst_22644);

(statearr_22836[(10)] = inst_22645);

return statearr_22836;
})();
var statearr_22837_22910 = state_22782__$1;
(statearr_22837_22910[(2)] = null);

(statearr_22837_22910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (23))){
var inst_22702 = (state_22782[(26)]);
var inst_22699 = (state_22782[(23)]);
var inst_22704 = (state_22782[(24)]);
var inst_22700 = (state_22782[(25)]);
var inst_22696 = (state_22782[(19)]);
var inst_22707 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22709 = (function (){var all_files = inst_22696;
var res_SINGLEQUOTE_ = inst_22699;
var res = inst_22700;
var files_not_loaded = inst_22702;
var dependencies_that_loaded = inst_22704;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22702,inst_22699,inst_22704,inst_22700,inst_22696,inst_22707,state_val_22783,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22708){
var map__22838 = p__22708;
var map__22838__$1 = ((((!((map__22838 == null)))?((((map__22838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22838):map__22838);
var request_url = cljs.core.get.call(null,map__22838__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22702,inst_22699,inst_22704,inst_22700,inst_22696,inst_22707,state_val_22783,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22710 = cljs.core.reverse.call(null,inst_22704);
var inst_22711 = cljs.core.map.call(null,inst_22709,inst_22710);
var inst_22712 = cljs.core.pr_str.call(null,inst_22711);
var inst_22713 = figwheel.client.utils.log.call(null,inst_22712);
var state_22782__$1 = (function (){var statearr_22840 = state_22782;
(statearr_22840[(31)] = inst_22707);

return statearr_22840;
})();
var statearr_22841_22911 = state_22782__$1;
(statearr_22841_22911[(2)] = inst_22713);

(statearr_22841_22911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (35))){
var state_22782__$1 = state_22782;
var statearr_22842_22912 = state_22782__$1;
(statearr_22842_22912[(2)] = true);

(statearr_22842_22912[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (19))){
var inst_22686 = (state_22782[(12)]);
var inst_22692 = figwheel.client.file_reloading.expand_files.call(null,inst_22686);
var state_22782__$1 = state_22782;
var statearr_22843_22913 = state_22782__$1;
(statearr_22843_22913[(2)] = inst_22692);

(statearr_22843_22913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (11))){
var state_22782__$1 = state_22782;
var statearr_22844_22914 = state_22782__$1;
(statearr_22844_22914[(2)] = null);

(statearr_22844_22914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (9))){
var inst_22675 = (state_22782[(2)]);
var state_22782__$1 = state_22782;
var statearr_22845_22915 = state_22782__$1;
(statearr_22845_22915[(2)] = inst_22675);

(statearr_22845_22915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (5))){
var inst_22646 = (state_22782[(8)]);
var inst_22645 = (state_22782[(10)]);
var inst_22648 = (inst_22646 < inst_22645);
var inst_22649 = inst_22648;
var state_22782__$1 = state_22782;
if(cljs.core.truth_(inst_22649)){
var statearr_22846_22916 = state_22782__$1;
(statearr_22846_22916[(1)] = (7));

} else {
var statearr_22847_22917 = state_22782__$1;
(statearr_22847_22917[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (14))){
var inst_22656 = (state_22782[(22)]);
var inst_22665 = cljs.core.first.call(null,inst_22656);
var inst_22666 = figwheel.client.file_reloading.eval_body.call(null,inst_22665,opts);
var inst_22667 = cljs.core.next.call(null,inst_22656);
var inst_22643 = inst_22667;
var inst_22644 = null;
var inst_22645 = (0);
var inst_22646 = (0);
var state_22782__$1 = (function (){var statearr_22848 = state_22782;
(statearr_22848[(7)] = inst_22643);

(statearr_22848[(8)] = inst_22646);

(statearr_22848[(32)] = inst_22666);

(statearr_22848[(9)] = inst_22644);

(statearr_22848[(10)] = inst_22645);

return statearr_22848;
})();
var statearr_22849_22918 = state_22782__$1;
(statearr_22849_22918[(2)] = null);

(statearr_22849_22918[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (45))){
var state_22782__$1 = state_22782;
var statearr_22850_22919 = state_22782__$1;
(statearr_22850_22919[(2)] = null);

(statearr_22850_22919[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (26))){
var inst_22702 = (state_22782[(26)]);
var inst_22699 = (state_22782[(23)]);
var inst_22704 = (state_22782[(24)]);
var inst_22700 = (state_22782[(25)]);
var inst_22696 = (state_22782[(19)]);
var inst_22719 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22721 = (function (){var all_files = inst_22696;
var res_SINGLEQUOTE_ = inst_22699;
var res = inst_22700;
var files_not_loaded = inst_22702;
var dependencies_that_loaded = inst_22704;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22702,inst_22699,inst_22704,inst_22700,inst_22696,inst_22719,state_val_22783,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22720){
var map__22851 = p__22720;
var map__22851__$1 = ((((!((map__22851 == null)))?((((map__22851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22851):map__22851);
var namespace = cljs.core.get.call(null,map__22851__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22851__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22702,inst_22699,inst_22704,inst_22700,inst_22696,inst_22719,state_val_22783,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22722 = cljs.core.map.call(null,inst_22721,inst_22700);
var inst_22723 = cljs.core.pr_str.call(null,inst_22722);
var inst_22724 = figwheel.client.utils.log.call(null,inst_22723);
var inst_22725 = (function (){var all_files = inst_22696;
var res_SINGLEQUOTE_ = inst_22699;
var res = inst_22700;
var files_not_loaded = inst_22702;
var dependencies_that_loaded = inst_22704;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22702,inst_22699,inst_22704,inst_22700,inst_22696,inst_22719,inst_22721,inst_22722,inst_22723,inst_22724,state_val_22783,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22702,inst_22699,inst_22704,inst_22700,inst_22696,inst_22719,inst_22721,inst_22722,inst_22723,inst_22724,state_val_22783,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22726 = setTimeout(inst_22725,(10));
var state_22782__$1 = (function (){var statearr_22853 = state_22782;
(statearr_22853[(33)] = inst_22724);

(statearr_22853[(34)] = inst_22719);

return statearr_22853;
})();
var statearr_22854_22920 = state_22782__$1;
(statearr_22854_22920[(2)] = inst_22726);

(statearr_22854_22920[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (16))){
var state_22782__$1 = state_22782;
var statearr_22855_22921 = state_22782__$1;
(statearr_22855_22921[(2)] = reload_dependents);

(statearr_22855_22921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (38))){
var inst_22736 = (state_22782[(16)]);
var inst_22753 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22736);
var state_22782__$1 = state_22782;
var statearr_22856_22922 = state_22782__$1;
(statearr_22856_22922[(2)] = inst_22753);

(statearr_22856_22922[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (30))){
var state_22782__$1 = state_22782;
var statearr_22857_22923 = state_22782__$1;
(statearr_22857_22923[(2)] = null);

(statearr_22857_22923[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (10))){
var inst_22656 = (state_22782[(22)]);
var inst_22658 = cljs.core.chunked_seq_QMARK_.call(null,inst_22656);
var state_22782__$1 = state_22782;
if(inst_22658){
var statearr_22858_22924 = state_22782__$1;
(statearr_22858_22924[(1)] = (13));

} else {
var statearr_22859_22925 = state_22782__$1;
(statearr_22859_22925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (18))){
var inst_22690 = (state_22782[(2)]);
var state_22782__$1 = state_22782;
if(cljs.core.truth_(inst_22690)){
var statearr_22860_22926 = state_22782__$1;
(statearr_22860_22926[(1)] = (19));

} else {
var statearr_22861_22927 = state_22782__$1;
(statearr_22861_22927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (42))){
var state_22782__$1 = state_22782;
var statearr_22862_22928 = state_22782__$1;
(statearr_22862_22928[(2)] = null);

(statearr_22862_22928[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (37))){
var inst_22748 = (state_22782[(2)]);
var state_22782__$1 = state_22782;
var statearr_22863_22929 = state_22782__$1;
(statearr_22863_22929[(2)] = inst_22748);

(statearr_22863_22929[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22783 === (8))){
var inst_22643 = (state_22782[(7)]);
var inst_22656 = (state_22782[(22)]);
var inst_22656__$1 = cljs.core.seq.call(null,inst_22643);
var state_22782__$1 = (function (){var statearr_22864 = state_22782;
(statearr_22864[(22)] = inst_22656__$1);

return statearr_22864;
})();
if(inst_22656__$1){
var statearr_22865_22930 = state_22782__$1;
(statearr_22865_22930[(1)] = (10));

} else {
var statearr_22866_22931 = state_22782__$1;
(statearr_22866_22931[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18865__auto__,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18866__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18866__auto____0 = (function (){
var statearr_22870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22870[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18866__auto__);

(statearr_22870[(1)] = (1));

return statearr_22870;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18866__auto____1 = (function (state_22782){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_22782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e22871){if((e22871 instanceof Object)){
var ex__18869__auto__ = e22871;
var statearr_22872_22932 = state_22782;
(statearr_22872_22932[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22933 = state_22782;
state_22782 = G__22933;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18866__auto__ = function(state_22782){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18866__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18866__auto____1.call(this,state_22782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18866__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18866__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19047__auto__ = (function (){var statearr_22873 = f__19046__auto__.call(null);
(statearr_22873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto__);

return statearr_22873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto__,map__22628,map__22628__$1,opts,before_jsload,on_jsload,reload_dependents,map__22629,map__22629__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19045__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22936,link){
var map__22939 = p__22936;
var map__22939__$1 = ((((!((map__22939 == null)))?((((map__22939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22939):map__22939);
var file = cljs.core.get.call(null,map__22939__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__22939,map__22939__$1,file){
return (function (p1__22934_SHARP_,p2__22935_SHARP_){
if(cljs.core._EQ_.call(null,p1__22934_SHARP_,p2__22935_SHARP_)){
return p1__22934_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__22939,map__22939__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22945){
var map__22946 = p__22945;
var map__22946__$1 = ((((!((map__22946 == null)))?((((map__22946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22946):map__22946);
var match_length = cljs.core.get.call(null,map__22946__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22946__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22941_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22941_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args22948 = [];
var len__17910__auto___22951 = arguments.length;
var i__17911__auto___22952 = (0);
while(true){
if((i__17911__auto___22952 < len__17910__auto___22951)){
args22948.push((arguments[i__17911__auto___22952]));

var G__22953 = (i__17911__auto___22952 + (1));
i__17911__auto___22952 = G__22953;
continue;
} else {
}
break;
}

var G__22950 = args22948.length;
switch (G__22950) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22948.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22955_SHARP_,p2__22956_SHARP_){
return cljs.core.assoc.call(null,p1__22955_SHARP_,cljs.core.get.call(null,p2__22956_SHARP_,key),p2__22956_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22957){
var map__22960 = p__22957;
var map__22960__$1 = ((((!((map__22960 == null)))?((((map__22960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22960):map__22960);
var f_data = map__22960__$1;
var file = cljs.core.get.call(null,map__22960__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22962,files_msg){
var map__22969 = p__22962;
var map__22969__$1 = ((((!((map__22969 == null)))?((((map__22969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22969):map__22969);
var opts = map__22969__$1;
var on_cssload = cljs.core.get.call(null,map__22969__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22971_22975 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22972_22976 = null;
var count__22973_22977 = (0);
var i__22974_22978 = (0);
while(true){
if((i__22974_22978 < count__22973_22977)){
var f_22979 = cljs.core._nth.call(null,chunk__22972_22976,i__22974_22978);
figwheel.client.file_reloading.reload_css_file.call(null,f_22979);

var G__22980 = seq__22971_22975;
var G__22981 = chunk__22972_22976;
var G__22982 = count__22973_22977;
var G__22983 = (i__22974_22978 + (1));
seq__22971_22975 = G__22980;
chunk__22972_22976 = G__22981;
count__22973_22977 = G__22982;
i__22974_22978 = G__22983;
continue;
} else {
var temp__4425__auto___22984 = cljs.core.seq.call(null,seq__22971_22975);
if(temp__4425__auto___22984){
var seq__22971_22985__$1 = temp__4425__auto___22984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22971_22985__$1)){
var c__17655__auto___22986 = cljs.core.chunk_first.call(null,seq__22971_22985__$1);
var G__22987 = cljs.core.chunk_rest.call(null,seq__22971_22985__$1);
var G__22988 = c__17655__auto___22986;
var G__22989 = cljs.core.count.call(null,c__17655__auto___22986);
var G__22990 = (0);
seq__22971_22975 = G__22987;
chunk__22972_22976 = G__22988;
count__22973_22977 = G__22989;
i__22974_22978 = G__22990;
continue;
} else {
var f_22991 = cljs.core.first.call(null,seq__22971_22985__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22991);

var G__22992 = cljs.core.next.call(null,seq__22971_22985__$1);
var G__22993 = null;
var G__22994 = (0);
var G__22995 = (0);
seq__22971_22975 = G__22992;
chunk__22972_22976 = G__22993;
count__22973_22977 = G__22994;
i__22974_22978 = G__22995;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__22969,map__22969__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__22969,map__22969__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1454366812671
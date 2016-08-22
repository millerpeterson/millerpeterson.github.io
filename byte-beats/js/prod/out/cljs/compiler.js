// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__20112 = s;
var map__20112__$1 = ((((!((map__20112 == null)))?((((map__20112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20112):map__20112);
var name = cljs.core.get.call(null,map__20112__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__20112__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__20115 = info;
var map__20116 = G__20115;
var map__20116__$1 = ((((!((map__20116 == null)))?((((map__20116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20116):map__20116);
var shadow = cljs.core.get.call(null,map__20116__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__20115__$1 = G__20115;
while(true){
var d__$2 = d__$1;
var map__20118 = G__20115__$1;
var map__20118__$1 = ((((!((map__20118 == null)))?((((map__20118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20118):map__20118);
var shadow__$1 = cljs.core.get.call(null,map__20118__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__20120 = (d__$2 + (1));
var G__20121 = shadow__$1;
d__$1 = G__20120;
G__20115__$1 = G__20121;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.munge;
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__20122){
var map__20127 = p__20122;
var map__20127__$1 = ((((!((map__20127 == null)))?((((map__20127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20127):map__20127);
var name_var = map__20127__$1;
var name = cljs.core.get.call(null,map__20127__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__20127__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__20129 = info;
var map__20129__$1 = ((((!((map__20129 == null)))?((((map__20129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20129):map__20129);
var ns = cljs.core.get.call(null,map__20129__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__20129__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args20131 = [];
var len__18153__auto___20134 = arguments.length;
var i__18154__auto___20135 = (0);
while(true){
if((i__18154__auto___20135 < len__18153__auto___20134)){
args20131.push((arguments[i__18154__auto___20135]));

var G__20136 = (i__18154__auto___20135 + (1));
i__18154__auto___20135 = G__20136;
continue;
} else {
}
break;
}

var G__20133 = args20131.length;
switch (G__20133) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20131.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__20139 = cp;
switch (G__20139) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__20145_20149 = cljs.core.seq.call(null,s);
var chunk__20146_20150 = null;
var count__20147_20151 = (0);
var i__20148_20152 = (0);
while(true){
if((i__20148_20152 < count__20147_20151)){
var c_20153 = cljs.core._nth.call(null,chunk__20146_20150,i__20148_20152);
sb.append(cljs.compiler.escape_char.call(null,c_20153));

var G__20154 = seq__20145_20149;
var G__20155 = chunk__20146_20150;
var G__20156 = count__20147_20151;
var G__20157 = (i__20148_20152 + (1));
seq__20145_20149 = G__20154;
chunk__20146_20150 = G__20155;
count__20147_20151 = G__20156;
i__20148_20152 = G__20157;
continue;
} else {
var temp__4425__auto___20158 = cljs.core.seq.call(null,seq__20145_20149);
if(temp__4425__auto___20158){
var seq__20145_20159__$1 = temp__4425__auto___20158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20145_20159__$1)){
var c__17898__auto___20160 = cljs.core.chunk_first.call(null,seq__20145_20159__$1);
var G__20161 = cljs.core.chunk_rest.call(null,seq__20145_20159__$1);
var G__20162 = c__17898__auto___20160;
var G__20163 = cljs.core.count.call(null,c__17898__auto___20160);
var G__20164 = (0);
seq__20145_20149 = G__20161;
chunk__20146_20150 = G__20162;
count__20147_20151 = G__20163;
i__20148_20152 = G__20164;
continue;
} else {
var c_20165 = cljs.core.first.call(null,seq__20145_20159__$1);
sb.append(cljs.compiler.escape_char.call(null,c_20165));

var G__20166 = cljs.core.next.call(null,seq__20145_20159__$1);
var G__20167 = null;
var G__20168 = (0);
var G__20169 = (0);
seq__20145_20149 = G__20166;
chunk__20146_20150 = G__20167;
count__20147_20151 = G__20168;
i__20148_20152 = G__20169;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__18008__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18009__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18010__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18012__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18012__auto__,method_table__18008__auto__,prefer_table__18009__auto__,method_cache__18010__auto__,cached_hierarchy__18011__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__18679__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__18679__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__20175_20180 = ast;
var map__20175_20181__$1 = ((((!((map__20175_20180 == null)))?((((map__20175_20180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20175_20180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20175_20180):map__20175_20180);
var env_20182 = cljs.core.get.call(null,map__20175_20181__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_20182))){
var map__20177_20183 = env_20182;
var map__20177_20184__$1 = ((((!((map__20177_20183 == null)))?((((map__20177_20183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20177_20183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20177_20183):map__20177_20183);
var line_20185 = cljs.core.get.call(null,map__20177_20184__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20186 = cljs.core.get.call(null,map__20177_20184__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__20177_20183,map__20177_20184__$1,line_20185,column_20186,map__20175_20180,map__20175_20181__$1,env_20182,val__18679__auto__){
return (function (m){
var minfo = (function (){var G__20179 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__20179__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__20179,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__20179);
return G__20179__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_20185 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__20177_20183,map__20177_20184__$1,line_20185,column_20186,map__20175_20180,map__20175_20181__$1,env_20182,val__18679__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_20186)?(column_20186 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__20177_20183,map__20177_20184__$1,line_20185,column_20186,map__20175_20180,map__20175_20181__$1,env_20182,val__18679__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__20177_20183,map__20177_20184__$1,line_20185,column_20186,map__20175_20180,map__20175_20181__$1,env_20182,val__18679__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__20177_20183,map__20177_20184__$1,line_20185,column_20186,map__20175_20180,map__20175_20181__$1,env_20182,val__18679__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__20177_20183,map__20177_20184__$1,line_20185,column_20186,map__20175_20180,map__20175_20181__$1,env_20182,val__18679__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__18679__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__18160__auto__ = [];
var len__18153__auto___20193 = arguments.length;
var i__18154__auto___20194 = (0);
while(true){
if((i__18154__auto___20194 < len__18153__auto___20193)){
args__18160__auto__.push((arguments[i__18154__auto___20194]));

var G__20195 = (i__18154__auto___20194 + (1));
i__18154__auto___20194 = G__20195;
continue;
} else {
}
break;
}

var argseq__18161__auto__ = ((((0) < args__18160__auto__.length))?(new cljs.core.IndexedSeq(args__18160__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__18161__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__20189_20196 = cljs.core.seq.call(null,xs);
var chunk__20190_20197 = null;
var count__20191_20198 = (0);
var i__20192_20199 = (0);
while(true){
if((i__20192_20199 < count__20191_20198)){
var x_20200 = cljs.core._nth.call(null,chunk__20190_20197,i__20192_20199);
if((x_20200 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_20200)){
cljs.compiler.emit.call(null,x_20200);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_20200)){
cljs.core.apply.call(null,cljs.compiler.emits,x_20200);
} else {
if(goog.isFunction(x_20200)){
x_20200.call(null);
} else {
var s_20201 = cljs.core.print_str.call(null,x_20200);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__20189_20196,chunk__20190_20197,count__20191_20198,i__20192_20199,s_20201,x_20200){
return (function (p1__20187_SHARP_){
return (p1__20187_SHARP_ + cljs.core.count.call(null,s_20201));
});})(seq__20189_20196,chunk__20190_20197,count__20191_20198,i__20192_20199,s_20201,x_20200))
);
}

cljs.core.print.call(null,s_20201);

}
}
}
}

var G__20202 = seq__20189_20196;
var G__20203 = chunk__20190_20197;
var G__20204 = count__20191_20198;
var G__20205 = (i__20192_20199 + (1));
seq__20189_20196 = G__20202;
chunk__20190_20197 = G__20203;
count__20191_20198 = G__20204;
i__20192_20199 = G__20205;
continue;
} else {
var temp__4425__auto___20206 = cljs.core.seq.call(null,seq__20189_20196);
if(temp__4425__auto___20206){
var seq__20189_20207__$1 = temp__4425__auto___20206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20189_20207__$1)){
var c__17898__auto___20208 = cljs.core.chunk_first.call(null,seq__20189_20207__$1);
var G__20209 = cljs.core.chunk_rest.call(null,seq__20189_20207__$1);
var G__20210 = c__17898__auto___20208;
var G__20211 = cljs.core.count.call(null,c__17898__auto___20208);
var G__20212 = (0);
seq__20189_20196 = G__20209;
chunk__20190_20197 = G__20210;
count__20191_20198 = G__20211;
i__20192_20199 = G__20212;
continue;
} else {
var x_20213 = cljs.core.first.call(null,seq__20189_20207__$1);
if((x_20213 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_20213)){
cljs.compiler.emit.call(null,x_20213);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_20213)){
cljs.core.apply.call(null,cljs.compiler.emits,x_20213);
} else {
if(goog.isFunction(x_20213)){
x_20213.call(null);
} else {
var s_20214 = cljs.core.print_str.call(null,x_20213);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__20189_20196,chunk__20190_20197,count__20191_20198,i__20192_20199,s_20214,x_20213,seq__20189_20207__$1,temp__4425__auto___20206){
return (function (p1__20187_SHARP_){
return (p1__20187_SHARP_ + cljs.core.count.call(null,s_20214));
});})(seq__20189_20196,chunk__20190_20197,count__20191_20198,i__20192_20199,s_20214,x_20213,seq__20189_20207__$1,temp__4425__auto___20206))
);
}

cljs.core.print.call(null,s_20214);

}
}
}
}

var G__20215 = cljs.core.next.call(null,seq__20189_20207__$1);
var G__20216 = null;
var G__20217 = (0);
var G__20218 = (0);
seq__20189_20196 = G__20215;
chunk__20190_20197 = G__20216;
count__20191_20198 = G__20217;
i__20192_20199 = G__20218;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq20188){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20188));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__18160__auto__ = [];
var len__18153__auto___20223 = arguments.length;
var i__18154__auto___20224 = (0);
while(true){
if((i__18154__auto___20224 < len__18153__auto___20223)){
args__18160__auto__.push((arguments[i__18154__auto___20224]));

var G__20225 = (i__18154__auto___20224 + (1));
i__18154__auto___20224 = G__20225;
continue;
} else {
}
break;
}

var argseq__18161__auto__ = ((((0) < args__18160__auto__.length))?(new cljs.core.IndexedSeq(args__18160__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__18161__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__20220){
var map__20221 = p__20220;
var map__20221__$1 = ((((!((map__20221 == null)))?((((map__20221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20221):map__20221);
var m = map__20221__$1;
var gen_line = cljs.core.get.call(null,map__20221__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq20219){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20219));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__18069__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_20228_20230 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_20229_20231 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_20228_20230,_STAR_print_fn_STAR_20229_20231,sb__18069__auto__){
return (function (x__18070__auto__){
return sb__18069__auto__.append(x__18070__auto__);
});})(_STAR_print_newline_STAR_20228_20230,_STAR_print_fn_STAR_20229_20231,sb__18069__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20229_20231;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20228_20230;
}
return [cljs.core.str(sb__18069__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__18008__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18009__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18010__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18011__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18012__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18012__auto__,method_table__18008__auto__,prefer_table__18009__auto__,method_cache__18010__auto__,cached_hierarchy__18011__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,x);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__20232 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__20232,(0),null);
var flags = cljs.core.nth.call(null,vec__20232,(1),null);
var pattern = cljs.core.nth.call(null,vec__20232,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__20234){
var map__20235 = p__20234;
var map__20235__$1 = ((((!((map__20235 == null)))?((((map__20235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20235):map__20235);
var arg = map__20235__$1;
var info = cljs.core.get.call(null,map__20235__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__20235__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__20235__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__17095__auto__ = js_module_name;
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__20237 = info__$1;
var G__20237__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__20237):G__20237);
return G__20237__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__20238){
var map__20239 = p__20238;
var map__20239__$1 = ((((!((map__20239 == null)))?((((map__20239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20239):map__20239);
var arg = map__20239__$1;
var env = cljs.core.get.call(null,map__20239__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__20239__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__20239__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__20239__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__20241 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__20241__$1 = ((((!((map__20241 == null)))?((((map__20241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20241):map__20241);
var name = cljs.core.get.call(null,map__20241__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__20243){
var map__20244 = p__20243;
var map__20244__$1 = ((((!((map__20244 == null)))?((((map__20244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20244):map__20244);
var expr = cljs.core.get.call(null,map__20244__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__20244__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__20244__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__20246_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__20246_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__20247){
var map__20248 = p__20247;
var map__20248__$1 = ((((!((map__20248 == null)))?((((map__20248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20248):map__20248);
var env = cljs.core.get.call(null,map__20248__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__20248__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__20248__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__20250){
var map__20251 = p__20250;
var map__20251__$1 = ((((!((map__20251 == null)))?((((map__20251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20251):map__20251);
var items = cljs.core.get.call(null,map__20251__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__20251__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__20253){
var map__20254 = p__20253;
var map__20254__$1 = ((((!((map__20254 == null)))?((((map__20254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20254):map__20254);
var items = cljs.core.get.call(null,map__20254__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__20254__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_20256 = cljs.core.count.call(null,items);
if((cnt_20256 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_20256,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__20257_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__20257_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__20258){
var map__20259 = p__20258;
var map__20259__$1 = ((((!((map__20259 == null)))?((((map__20259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20259):map__20259);
var items = cljs.core.get.call(null,map__20259__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__20259__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__20261){
var map__20262 = p__20261;
var map__20262__$1 = ((((!((map__20262 == null)))?((((map__20262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20262):map__20262);
var items = cljs.core.get.call(null,map__20262__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__20262__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__20262__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___20272 = cljs.core.seq.call(null,items);
if(temp__4425__auto___20272){
var items_20273__$1 = temp__4425__auto___20272;
var vec__20264_20274 = items_20273__$1;
var vec__20265_20275 = cljs.core.nth.call(null,vec__20264_20274,(0),null);
var k_20276 = cljs.core.nth.call(null,vec__20265_20275,(0),null);
var v_20277 = cljs.core.nth.call(null,vec__20265_20275,(1),null);
var r_20278 = cljs.core.nthnext.call(null,vec__20264_20274,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_20276),"\": ",v_20277);

var seq__20266_20279 = cljs.core.seq.call(null,r_20278);
var chunk__20267_20280 = null;
var count__20268_20281 = (0);
var i__20269_20282 = (0);
while(true){
if((i__20269_20282 < count__20268_20281)){
var vec__20270_20283 = cljs.core._nth.call(null,chunk__20267_20280,i__20269_20282);
var k_20284__$1 = cljs.core.nth.call(null,vec__20270_20283,(0),null);
var v_20285__$1 = cljs.core.nth.call(null,vec__20270_20283,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_20284__$1),"\": ",v_20285__$1);

var G__20286 = seq__20266_20279;
var G__20287 = chunk__20267_20280;
var G__20288 = count__20268_20281;
var G__20289 = (i__20269_20282 + (1));
seq__20266_20279 = G__20286;
chunk__20267_20280 = G__20287;
count__20268_20281 = G__20288;
i__20269_20282 = G__20289;
continue;
} else {
var temp__4425__auto___20290__$1 = cljs.core.seq.call(null,seq__20266_20279);
if(temp__4425__auto___20290__$1){
var seq__20266_20291__$1 = temp__4425__auto___20290__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20266_20291__$1)){
var c__17898__auto___20292 = cljs.core.chunk_first.call(null,seq__20266_20291__$1);
var G__20293 = cljs.core.chunk_rest.call(null,seq__20266_20291__$1);
var G__20294 = c__17898__auto___20292;
var G__20295 = cljs.core.count.call(null,c__17898__auto___20292);
var G__20296 = (0);
seq__20266_20279 = G__20293;
chunk__20267_20280 = G__20294;
count__20268_20281 = G__20295;
i__20269_20282 = G__20296;
continue;
} else {
var vec__20271_20297 = cljs.core.first.call(null,seq__20266_20291__$1);
var k_20298__$1 = cljs.core.nth.call(null,vec__20271_20297,(0),null);
var v_20299__$1 = cljs.core.nth.call(null,vec__20271_20297,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_20298__$1),"\": ",v_20299__$1);

var G__20300 = cljs.core.next.call(null,seq__20266_20291__$1);
var G__20301 = null;
var G__20302 = (0);
var G__20303 = (0);
seq__20266_20279 = G__20300;
chunk__20267_20280 = G__20301;
count__20268_20281 = G__20302;
i__20269_20282 = G__20303;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__20304){
var map__20305 = p__20304;
var map__20305__$1 = ((((!((map__20305 == null)))?((((map__20305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20305):map__20305);
var form = cljs.core.get.call(null,map__20305__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__20305__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__20307){
var map__20310 = p__20307;
var map__20310__$1 = ((((!((map__20310 == null)))?((((map__20310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20310):map__20310);
var op = cljs.core.get.call(null,map__20310__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__20310__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__17083__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__17083__auto__){
var and__17083__auto____$1 = form;
if(cljs.core.truth_(and__17083__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__17083__auto____$1;
}
} else {
return and__17083__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__20312){
var map__20315 = p__20312;
var map__20315__$1 = ((((!((map__20315 == null)))?((((map__20315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20315):map__20315);
var op = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__20315__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__17095__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__20317){
var map__20318 = p__20317;
var map__20318__$1 = ((((!((map__20318 == null)))?((((map__20318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20318):map__20318);
var test = cljs.core.get.call(null,map__20318__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__20318__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__20318__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__20318__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__20318__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__17095__auto__ = unchecked;
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__20320){
var map__20321 = p__20320;
var map__20321__$1 = ((((!((map__20321 == null)))?((((map__20321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20321):map__20321);
var v = cljs.core.get.call(null,map__20321__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__20321__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__20321__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__20321__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__20321__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__20323_20337 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__20324_20338 = null;
var count__20325_20339 = (0);
var i__20326_20340 = (0);
while(true){
if((i__20326_20340 < count__20325_20339)){
var vec__20327_20341 = cljs.core._nth.call(null,chunk__20324_20338,i__20326_20340);
var ts_20342 = cljs.core.nth.call(null,vec__20327_20341,(0),null);
var then_20343 = cljs.core.nth.call(null,vec__20327_20341,(1),null);
var seq__20328_20344 = cljs.core.seq.call(null,ts_20342);
var chunk__20329_20345 = null;
var count__20330_20346 = (0);
var i__20331_20347 = (0);
while(true){
if((i__20331_20347 < count__20330_20346)){
var test_20348 = cljs.core._nth.call(null,chunk__20329_20345,i__20331_20347);
cljs.compiler.emitln.call(null,"case ",test_20348,":");

var G__20349 = seq__20328_20344;
var G__20350 = chunk__20329_20345;
var G__20351 = count__20330_20346;
var G__20352 = (i__20331_20347 + (1));
seq__20328_20344 = G__20349;
chunk__20329_20345 = G__20350;
count__20330_20346 = G__20351;
i__20331_20347 = G__20352;
continue;
} else {
var temp__4425__auto___20353 = cljs.core.seq.call(null,seq__20328_20344);
if(temp__4425__auto___20353){
var seq__20328_20354__$1 = temp__4425__auto___20353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20328_20354__$1)){
var c__17898__auto___20355 = cljs.core.chunk_first.call(null,seq__20328_20354__$1);
var G__20356 = cljs.core.chunk_rest.call(null,seq__20328_20354__$1);
var G__20357 = c__17898__auto___20355;
var G__20358 = cljs.core.count.call(null,c__17898__auto___20355);
var G__20359 = (0);
seq__20328_20344 = G__20356;
chunk__20329_20345 = G__20357;
count__20330_20346 = G__20358;
i__20331_20347 = G__20359;
continue;
} else {
var test_20360 = cljs.core.first.call(null,seq__20328_20354__$1);
cljs.compiler.emitln.call(null,"case ",test_20360,":");

var G__20361 = cljs.core.next.call(null,seq__20328_20354__$1);
var G__20362 = null;
var G__20363 = (0);
var G__20364 = (0);
seq__20328_20344 = G__20361;
chunk__20329_20345 = G__20362;
count__20330_20346 = G__20363;
i__20331_20347 = G__20364;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_20343);
} else {
cljs.compiler.emitln.call(null,then_20343);
}

cljs.compiler.emitln.call(null,"break;");

var G__20365 = seq__20323_20337;
var G__20366 = chunk__20324_20338;
var G__20367 = count__20325_20339;
var G__20368 = (i__20326_20340 + (1));
seq__20323_20337 = G__20365;
chunk__20324_20338 = G__20366;
count__20325_20339 = G__20367;
i__20326_20340 = G__20368;
continue;
} else {
var temp__4425__auto___20369 = cljs.core.seq.call(null,seq__20323_20337);
if(temp__4425__auto___20369){
var seq__20323_20370__$1 = temp__4425__auto___20369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20323_20370__$1)){
var c__17898__auto___20371 = cljs.core.chunk_first.call(null,seq__20323_20370__$1);
var G__20372 = cljs.core.chunk_rest.call(null,seq__20323_20370__$1);
var G__20373 = c__17898__auto___20371;
var G__20374 = cljs.core.count.call(null,c__17898__auto___20371);
var G__20375 = (0);
seq__20323_20337 = G__20372;
chunk__20324_20338 = G__20373;
count__20325_20339 = G__20374;
i__20326_20340 = G__20375;
continue;
} else {
var vec__20332_20376 = cljs.core.first.call(null,seq__20323_20370__$1);
var ts_20377 = cljs.core.nth.call(null,vec__20332_20376,(0),null);
var then_20378 = cljs.core.nth.call(null,vec__20332_20376,(1),null);
var seq__20333_20379 = cljs.core.seq.call(null,ts_20377);
var chunk__20334_20380 = null;
var count__20335_20381 = (0);
var i__20336_20382 = (0);
while(true){
if((i__20336_20382 < count__20335_20381)){
var test_20383 = cljs.core._nth.call(null,chunk__20334_20380,i__20336_20382);
cljs.compiler.emitln.call(null,"case ",test_20383,":");

var G__20384 = seq__20333_20379;
var G__20385 = chunk__20334_20380;
var G__20386 = count__20335_20381;
var G__20387 = (i__20336_20382 + (1));
seq__20333_20379 = G__20384;
chunk__20334_20380 = G__20385;
count__20335_20381 = G__20386;
i__20336_20382 = G__20387;
continue;
} else {
var temp__4425__auto___20388__$1 = cljs.core.seq.call(null,seq__20333_20379);
if(temp__4425__auto___20388__$1){
var seq__20333_20389__$1 = temp__4425__auto___20388__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20333_20389__$1)){
var c__17898__auto___20390 = cljs.core.chunk_first.call(null,seq__20333_20389__$1);
var G__20391 = cljs.core.chunk_rest.call(null,seq__20333_20389__$1);
var G__20392 = c__17898__auto___20390;
var G__20393 = cljs.core.count.call(null,c__17898__auto___20390);
var G__20394 = (0);
seq__20333_20379 = G__20391;
chunk__20334_20380 = G__20392;
count__20335_20381 = G__20393;
i__20336_20382 = G__20394;
continue;
} else {
var test_20395 = cljs.core.first.call(null,seq__20333_20389__$1);
cljs.compiler.emitln.call(null,"case ",test_20395,":");

var G__20396 = cljs.core.next.call(null,seq__20333_20389__$1);
var G__20397 = null;
var G__20398 = (0);
var G__20399 = (0);
seq__20333_20379 = G__20396;
chunk__20334_20380 = G__20397;
count__20335_20381 = G__20398;
i__20336_20382 = G__20399;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_20378);
} else {
cljs.compiler.emitln.call(null,then_20378);
}

cljs.compiler.emitln.call(null,"break;");

var G__20400 = cljs.core.next.call(null,seq__20323_20370__$1);
var G__20401 = null;
var G__20402 = (0);
var G__20403 = (0);
seq__20323_20337 = G__20400;
chunk__20324_20338 = G__20401;
count__20325_20339 = G__20402;
i__20326_20340 = G__20403;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__20404){
var map__20405 = p__20404;
var map__20405__$1 = ((((!((map__20405 == null)))?((((map__20405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20405):map__20405);
var throw$ = cljs.core.get.call(null,map__20405__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__20405__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__20410 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__20410,(0),null);
var rstr = cljs.core.nth.call(null,vec__20410,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__20410,fstr,rstr,ret_t,axstr){
return (function (p1__20407_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__20407_SHARP_);
});})(idx,vec__20410,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__20411 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__20411__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__20411),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__20411);
return G__20411__$1;
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__20412_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__20412_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__20415 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__20415,(0),null);
var ts = cljs.core.nth.call(null,vec__20415,(1),null);
var n = cljs.core.nth.call(null,vec__20415,(2),null);
var xs = cljs.core.nthnext.call(null,vec__20415,(3));
if(cljs.core.truth_((function (){var and__17083__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__17083__auto__){
var and__17083__auto____$1 = ts;
if(cljs.core.truth_(and__17083__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__17083__auto____$1;
}
} else {
return and__17083__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__20416 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__20416,(0),null);
var ts = cljs.core.nth.call(null,vec__20416,(1),null);
var xs = cljs.core.nthnext.call(null,vec__20416,(2));
if(cljs.core.truth_((function (){var and__17083__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__17083__auto__){
var and__17083__auto____$1 = ts;
if(cljs.core.truth_(and__17083__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__17083__auto____$1;
}
} else {
return and__17083__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args20418 = [];
var len__18153__auto___20445 = arguments.length;
var i__18154__auto___20446 = (0);
while(true){
if((i__18154__auto___20446 < len__18153__auto___20445)){
args20418.push((arguments[i__18154__auto___20446]));

var G__20447 = (i__18154__auto___20446 + (1));
i__18154__auto___20446 = G__20447;
continue;
} else {
}
break;
}

var G__20420 = args20418.length;
switch (G__20420) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20418.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__20436 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__20417_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__20417_SHARP_);
} else {
return p1__20417_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__20436,(0),null);
var ys = cljs.core.nthnext.call(null,vec__20436,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__20437 = cljs.core.seq.call(null,ys);
var chunk__20438 = null;
var count__20439 = (0);
var i__20440 = (0);
while(true){
if((i__20440 < count__20439)){
var next_line = cljs.core._nth.call(null,chunk__20438,i__20440);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__20449 = seq__20437;
var G__20450 = chunk__20438;
var G__20451 = count__20439;
var G__20452 = (i__20440 + (1));
seq__20437 = G__20449;
chunk__20438 = G__20450;
count__20439 = G__20451;
i__20440 = G__20452;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20437);
if(temp__4425__auto__){
var seq__20437__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20437__$1)){
var c__17898__auto__ = cljs.core.chunk_first.call(null,seq__20437__$1);
var G__20453 = cljs.core.chunk_rest.call(null,seq__20437__$1);
var G__20454 = c__17898__auto__;
var G__20455 = cljs.core.count.call(null,c__17898__auto__);
var G__20456 = (0);
seq__20437 = G__20453;
chunk__20438 = G__20454;
count__20439 = G__20455;
i__20440 = G__20456;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__20437__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__20457 = cljs.core.next.call(null,seq__20437__$1);
var G__20458 = null;
var G__20459 = (0);
var G__20460 = (0);
seq__20437 = G__20457;
chunk__20438 = G__20458;
count__20439 = G__20459;
i__20440 = G__20460;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__20441_20461 = cljs.core.seq.call(null,docs__$2);
var chunk__20442_20462 = null;
var count__20443_20463 = (0);
var i__20444_20464 = (0);
while(true){
if((i__20444_20464 < count__20443_20463)){
var e_20465 = cljs.core._nth.call(null,chunk__20442_20462,i__20444_20464);
if(cljs.core.truth_(e_20465)){
print_comment_lines.call(null,e_20465);
} else {
}

var G__20466 = seq__20441_20461;
var G__20467 = chunk__20442_20462;
var G__20468 = count__20443_20463;
var G__20469 = (i__20444_20464 + (1));
seq__20441_20461 = G__20466;
chunk__20442_20462 = G__20467;
count__20443_20463 = G__20468;
i__20444_20464 = G__20469;
continue;
} else {
var temp__4425__auto___20470 = cljs.core.seq.call(null,seq__20441_20461);
if(temp__4425__auto___20470){
var seq__20441_20471__$1 = temp__4425__auto___20470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20441_20471__$1)){
var c__17898__auto___20472 = cljs.core.chunk_first.call(null,seq__20441_20471__$1);
var G__20473 = cljs.core.chunk_rest.call(null,seq__20441_20471__$1);
var G__20474 = c__17898__auto___20472;
var G__20475 = cljs.core.count.call(null,c__17898__auto___20472);
var G__20476 = (0);
seq__20441_20461 = G__20473;
chunk__20442_20462 = G__20474;
count__20443_20463 = G__20475;
i__20444_20464 = G__20476;
continue;
} else {
var e_20477 = cljs.core.first.call(null,seq__20441_20471__$1);
if(cljs.core.truth_(e_20477)){
print_comment_lines.call(null,e_20477);
} else {
}

var G__20478 = cljs.core.next.call(null,seq__20441_20471__$1);
var G__20479 = null;
var G__20480 = (0);
var G__20481 = (0);
seq__20441_20461 = G__20478;
chunk__20442_20462 = G__20479;
count__20443_20463 = G__20480;
i__20444_20464 = G__20481;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__17083__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__20483_SHARP_){
return goog.string.startsWith(p1__20483_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__17083__auto__)){
var and__17083__auto____$1 = opts;
if(cljs.core.truth_(and__17083__auto____$1)){
var and__17083__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__17083__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__17083__auto____$2;
}
} else {
return and__17083__auto____$1;
}
} else {
return and__17083__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__20484){
var map__20485 = p__20484;
var map__20485__$1 = ((((!((map__20485 == null)))?((((map__20485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20485):map__20485);
var name = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__17083__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__17083__auto__)){
return test;
} else {
return and__17083__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__20487){
var map__20504 = p__20487;
var map__20504__$1 = ((((!((map__20504 == null)))?((((map__20504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20504):map__20504);
var name = cljs.core.get.call(null,map__20504__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__20504__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__20504__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__20506_20520 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__20507_20521 = null;
var count__20508_20522 = (0);
var i__20509_20523 = (0);
while(true){
if((i__20509_20523 < count__20508_20522)){
var vec__20510_20524 = cljs.core._nth.call(null,chunk__20507_20521,i__20509_20523);
var i_20525 = cljs.core.nth.call(null,vec__20510_20524,(0),null);
var param_20526 = cljs.core.nth.call(null,vec__20510_20524,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_20526);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__20527 = seq__20506_20520;
var G__20528 = chunk__20507_20521;
var G__20529 = count__20508_20522;
var G__20530 = (i__20509_20523 + (1));
seq__20506_20520 = G__20527;
chunk__20507_20521 = G__20528;
count__20508_20522 = G__20529;
i__20509_20523 = G__20530;
continue;
} else {
var temp__4425__auto___20531 = cljs.core.seq.call(null,seq__20506_20520);
if(temp__4425__auto___20531){
var seq__20506_20532__$1 = temp__4425__auto___20531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20506_20532__$1)){
var c__17898__auto___20533 = cljs.core.chunk_first.call(null,seq__20506_20532__$1);
var G__20534 = cljs.core.chunk_rest.call(null,seq__20506_20532__$1);
var G__20535 = c__17898__auto___20533;
var G__20536 = cljs.core.count.call(null,c__17898__auto___20533);
var G__20537 = (0);
seq__20506_20520 = G__20534;
chunk__20507_20521 = G__20535;
count__20508_20522 = G__20536;
i__20509_20523 = G__20537;
continue;
} else {
var vec__20511_20538 = cljs.core.first.call(null,seq__20506_20532__$1);
var i_20539 = cljs.core.nth.call(null,vec__20511_20538,(0),null);
var param_20540 = cljs.core.nth.call(null,vec__20511_20538,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_20540);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__20541 = cljs.core.next.call(null,seq__20506_20532__$1);
var G__20542 = null;
var G__20543 = (0);
var G__20544 = (0);
seq__20506_20520 = G__20541;
chunk__20507_20521 = G__20542;
count__20508_20522 = G__20543;
i__20509_20523 = G__20544;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__20512_20545 = cljs.core.seq.call(null,params);
var chunk__20513_20546 = null;
var count__20514_20547 = (0);
var i__20515_20548 = (0);
while(true){
if((i__20515_20548 < count__20514_20547)){
var param_20549 = cljs.core._nth.call(null,chunk__20513_20546,i__20515_20548);
cljs.compiler.emit.call(null,param_20549);

if(cljs.core._EQ_.call(null,param_20549,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20550 = seq__20512_20545;
var G__20551 = chunk__20513_20546;
var G__20552 = count__20514_20547;
var G__20553 = (i__20515_20548 + (1));
seq__20512_20545 = G__20550;
chunk__20513_20546 = G__20551;
count__20514_20547 = G__20552;
i__20515_20548 = G__20553;
continue;
} else {
var temp__4425__auto___20554 = cljs.core.seq.call(null,seq__20512_20545);
if(temp__4425__auto___20554){
var seq__20512_20555__$1 = temp__4425__auto___20554;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20512_20555__$1)){
var c__17898__auto___20556 = cljs.core.chunk_first.call(null,seq__20512_20555__$1);
var G__20557 = cljs.core.chunk_rest.call(null,seq__20512_20555__$1);
var G__20558 = c__17898__auto___20556;
var G__20559 = cljs.core.count.call(null,c__17898__auto___20556);
var G__20560 = (0);
seq__20512_20545 = G__20557;
chunk__20513_20546 = G__20558;
count__20514_20547 = G__20559;
i__20515_20548 = G__20560;
continue;
} else {
var param_20561 = cljs.core.first.call(null,seq__20512_20555__$1);
cljs.compiler.emit.call(null,param_20561);

if(cljs.core._EQ_.call(null,param_20561,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20562 = cljs.core.next.call(null,seq__20512_20555__$1);
var G__20563 = null;
var G__20564 = (0);
var G__20565 = (0);
seq__20512_20545 = G__20562;
chunk__20513_20546 = G__20563;
count__20514_20547 = G__20564;
i__20515_20548 = G__20565;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__20516_20566 = cljs.core.seq.call(null,params);
var chunk__20517_20567 = null;
var count__20518_20568 = (0);
var i__20519_20569 = (0);
while(true){
if((i__20519_20569 < count__20518_20568)){
var param_20570 = cljs.core._nth.call(null,chunk__20517_20567,i__20519_20569);
cljs.compiler.emit.call(null,param_20570);

if(cljs.core._EQ_.call(null,param_20570,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20571 = seq__20516_20566;
var G__20572 = chunk__20517_20567;
var G__20573 = count__20518_20568;
var G__20574 = (i__20519_20569 + (1));
seq__20516_20566 = G__20571;
chunk__20517_20567 = G__20572;
count__20518_20568 = G__20573;
i__20519_20569 = G__20574;
continue;
} else {
var temp__4425__auto___20575 = cljs.core.seq.call(null,seq__20516_20566);
if(temp__4425__auto___20575){
var seq__20516_20576__$1 = temp__4425__auto___20575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20516_20576__$1)){
var c__17898__auto___20577 = cljs.core.chunk_first.call(null,seq__20516_20576__$1);
var G__20578 = cljs.core.chunk_rest.call(null,seq__20516_20576__$1);
var G__20579 = c__17898__auto___20577;
var G__20580 = cljs.core.count.call(null,c__17898__auto___20577);
var G__20581 = (0);
seq__20516_20566 = G__20578;
chunk__20517_20567 = G__20579;
count__20518_20568 = G__20580;
i__20519_20569 = G__20581;
continue;
} else {
var param_20582 = cljs.core.first.call(null,seq__20516_20576__$1);
cljs.compiler.emit.call(null,param_20582);

if(cljs.core._EQ_.call(null,param_20582,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20583 = cljs.core.next.call(null,seq__20516_20576__$1);
var G__20584 = null;
var G__20585 = (0);
var G__20586 = (0);
seq__20516_20566 = G__20583;
chunk__20517_20567 = G__20584;
count__20518_20568 = G__20585;
i__20519_20569 = G__20586;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__20591 = cljs.core.seq.call(null,params);
var chunk__20592 = null;
var count__20593 = (0);
var i__20594 = (0);
while(true){
if((i__20594 < count__20593)){
var param = cljs.core._nth.call(null,chunk__20592,i__20594);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20595 = seq__20591;
var G__20596 = chunk__20592;
var G__20597 = count__20593;
var G__20598 = (i__20594 + (1));
seq__20591 = G__20595;
chunk__20592 = G__20596;
count__20593 = G__20597;
i__20594 = G__20598;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20591);
if(temp__4425__auto__){
var seq__20591__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20591__$1)){
var c__17898__auto__ = cljs.core.chunk_first.call(null,seq__20591__$1);
var G__20599 = cljs.core.chunk_rest.call(null,seq__20591__$1);
var G__20600 = c__17898__auto__;
var G__20601 = cljs.core.count.call(null,c__17898__auto__);
var G__20602 = (0);
seq__20591 = G__20599;
chunk__20592 = G__20600;
count__20593 = G__20601;
i__20594 = G__20602;
continue;
} else {
var param = cljs.core.first.call(null,seq__20591__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20603 = cljs.core.next.call(null,seq__20591__$1);
var G__20604 = null;
var G__20605 = (0);
var G__20606 = (0);
seq__20591 = G__20603;
chunk__20592 = G__20604;
count__20593 = G__20605;
i__20594 = G__20606;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__20607){
var map__20610 = p__20607;
var map__20610__$1 = ((((!((map__20610 == null)))?((((map__20610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20610):map__20610);
var type = cljs.core.get.call(null,map__20610__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__20610__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__20610__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__20610__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__20610__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20610__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__20610__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__20610__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))))].join('')));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__20612){
var map__20623 = p__20612;
var map__20623__$1 = ((((!((map__20623 == null)))?((((map__20623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20623):map__20623);
var f = map__20623__$1;
var type = cljs.core.get.call(null,map__20623__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__20623__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__20623__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__20623__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__20623__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20623__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__20623__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__20623__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_20633__$1 = (function (){var or__17095__auto__ = name;
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_20634 = cljs.compiler.munge.call(null,name_20633__$1);
var delegate_name_20635 = [cljs.core.str(mname_20634),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_20635," = function (");

var seq__20625_20636 = cljs.core.seq.call(null,params);
var chunk__20626_20637 = null;
var count__20627_20638 = (0);
var i__20628_20639 = (0);
while(true){
if((i__20628_20639 < count__20627_20638)){
var param_20640 = cljs.core._nth.call(null,chunk__20626_20637,i__20628_20639);
cljs.compiler.emit.call(null,param_20640);

if(cljs.core._EQ_.call(null,param_20640,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20641 = seq__20625_20636;
var G__20642 = chunk__20626_20637;
var G__20643 = count__20627_20638;
var G__20644 = (i__20628_20639 + (1));
seq__20625_20636 = G__20641;
chunk__20626_20637 = G__20642;
count__20627_20638 = G__20643;
i__20628_20639 = G__20644;
continue;
} else {
var temp__4425__auto___20645 = cljs.core.seq.call(null,seq__20625_20636);
if(temp__4425__auto___20645){
var seq__20625_20646__$1 = temp__4425__auto___20645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20625_20646__$1)){
var c__17898__auto___20647 = cljs.core.chunk_first.call(null,seq__20625_20646__$1);
var G__20648 = cljs.core.chunk_rest.call(null,seq__20625_20646__$1);
var G__20649 = c__17898__auto___20647;
var G__20650 = cljs.core.count.call(null,c__17898__auto___20647);
var G__20651 = (0);
seq__20625_20636 = G__20648;
chunk__20626_20637 = G__20649;
count__20627_20638 = G__20650;
i__20628_20639 = G__20651;
continue;
} else {
var param_20652 = cljs.core.first.call(null,seq__20625_20646__$1);
cljs.compiler.emit.call(null,param_20652);

if(cljs.core._EQ_.call(null,param_20652,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20653 = cljs.core.next.call(null,seq__20625_20646__$1);
var G__20654 = null;
var G__20655 = (0);
var G__20656 = (0);
seq__20625_20636 = G__20653;
chunk__20626_20637 = G__20654;
count__20627_20638 = G__20655;
i__20628_20639 = G__20656;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_20634," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_20657 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_20657,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_20635,".call(this,");

var seq__20629_20658 = cljs.core.seq.call(null,params);
var chunk__20630_20659 = null;
var count__20631_20660 = (0);
var i__20632_20661 = (0);
while(true){
if((i__20632_20661 < count__20631_20660)){
var param_20662 = cljs.core._nth.call(null,chunk__20630_20659,i__20632_20661);
cljs.compiler.emit.call(null,param_20662);

if(cljs.core._EQ_.call(null,param_20662,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20663 = seq__20629_20658;
var G__20664 = chunk__20630_20659;
var G__20665 = count__20631_20660;
var G__20666 = (i__20632_20661 + (1));
seq__20629_20658 = G__20663;
chunk__20630_20659 = G__20664;
count__20631_20660 = G__20665;
i__20632_20661 = G__20666;
continue;
} else {
var temp__4425__auto___20667 = cljs.core.seq.call(null,seq__20629_20658);
if(temp__4425__auto___20667){
var seq__20629_20668__$1 = temp__4425__auto___20667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20629_20668__$1)){
var c__17898__auto___20669 = cljs.core.chunk_first.call(null,seq__20629_20668__$1);
var G__20670 = cljs.core.chunk_rest.call(null,seq__20629_20668__$1);
var G__20671 = c__17898__auto___20669;
var G__20672 = cljs.core.count.call(null,c__17898__auto___20669);
var G__20673 = (0);
seq__20629_20658 = G__20670;
chunk__20630_20659 = G__20671;
count__20631_20660 = G__20672;
i__20632_20661 = G__20673;
continue;
} else {
var param_20674 = cljs.core.first.call(null,seq__20629_20668__$1);
cljs.compiler.emit.call(null,param_20674);

if(cljs.core._EQ_.call(null,param_20674,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20675 = cljs.core.next.call(null,seq__20629_20668__$1);
var G__20676 = null;
var G__20677 = (0);
var G__20678 = (0);
seq__20629_20658 = G__20675;
chunk__20630_20659 = G__20676;
count__20631_20660 = G__20677;
i__20632_20661 = G__20678;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_20634,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_20634,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_20633__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_20634,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_20635,";");

cljs.compiler.emitln.call(null,"return ",mname_20634,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__20682){
var map__20683 = p__20682;
var map__20683__$1 = ((((!((map__20683 == null)))?((((map__20683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20683):map__20683);
var name = cljs.core.get.call(null,map__20683__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__20683__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__20683__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__20683__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__20683__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__20683__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__20683__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__20683,map__20683__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20679_SHARP_){
var and__17083__auto__ = p1__20679_SHARP_;
if(cljs.core.truth_(and__17083__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__20679_SHARP_));
} else {
return and__17083__auto__;
}
});})(map__20683,map__20683__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_20704__$1 = (function (){var or__17095__auto__ = name;
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_20705 = cljs.compiler.munge.call(null,name_20704__$1);
var maxparams_20706 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_20707 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_20704__$1,mname_20705,maxparams_20706,loop_locals,map__20683,map__20683__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_20705),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_20704__$1,mname_20705,maxparams_20706,loop_locals,map__20683,map__20683__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_20708 = cljs.core.sort_by.call(null,((function (name_20704__$1,mname_20705,maxparams_20706,mmap_20707,loop_locals,map__20683,map__20683__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20680_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20680_SHARP_)));
});})(name_20704__$1,mname_20705,maxparams_20706,mmap_20707,loop_locals,map__20683,map__20683__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_20707));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_20705," = null;");

var seq__20685_20709 = cljs.core.seq.call(null,ms_20708);
var chunk__20686_20710 = null;
var count__20687_20711 = (0);
var i__20688_20712 = (0);
while(true){
if((i__20688_20712 < count__20687_20711)){
var vec__20689_20713 = cljs.core._nth.call(null,chunk__20686_20710,i__20688_20712);
var n_20714 = cljs.core.nth.call(null,vec__20689_20713,(0),null);
var meth_20715 = cljs.core.nth.call(null,vec__20689_20713,(1),null);
cljs.compiler.emits.call(null,"var ",n_20714," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20715))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_20715);
} else {
cljs.compiler.emit_fn_method.call(null,meth_20715);
}

cljs.compiler.emitln.call(null,";");

var G__20716 = seq__20685_20709;
var G__20717 = chunk__20686_20710;
var G__20718 = count__20687_20711;
var G__20719 = (i__20688_20712 + (1));
seq__20685_20709 = G__20716;
chunk__20686_20710 = G__20717;
count__20687_20711 = G__20718;
i__20688_20712 = G__20719;
continue;
} else {
var temp__4425__auto___20720 = cljs.core.seq.call(null,seq__20685_20709);
if(temp__4425__auto___20720){
var seq__20685_20721__$1 = temp__4425__auto___20720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20685_20721__$1)){
var c__17898__auto___20722 = cljs.core.chunk_first.call(null,seq__20685_20721__$1);
var G__20723 = cljs.core.chunk_rest.call(null,seq__20685_20721__$1);
var G__20724 = c__17898__auto___20722;
var G__20725 = cljs.core.count.call(null,c__17898__auto___20722);
var G__20726 = (0);
seq__20685_20709 = G__20723;
chunk__20686_20710 = G__20724;
count__20687_20711 = G__20725;
i__20688_20712 = G__20726;
continue;
} else {
var vec__20690_20727 = cljs.core.first.call(null,seq__20685_20721__$1);
var n_20728 = cljs.core.nth.call(null,vec__20690_20727,(0),null);
var meth_20729 = cljs.core.nth.call(null,vec__20690_20727,(1),null);
cljs.compiler.emits.call(null,"var ",n_20728," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20729))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_20729);
} else {
cljs.compiler.emit_fn_method.call(null,meth_20729);
}

cljs.compiler.emitln.call(null,";");

var G__20730 = cljs.core.next.call(null,seq__20685_20721__$1);
var G__20731 = null;
var G__20732 = (0);
var G__20733 = (0);
seq__20685_20709 = G__20730;
chunk__20686_20710 = G__20731;
count__20687_20711 = G__20732;
i__20688_20712 = G__20733;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_20705," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_20706),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_20706)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_20706));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__20691_20734 = cljs.core.seq.call(null,ms_20708);
var chunk__20692_20735 = null;
var count__20693_20736 = (0);
var i__20694_20737 = (0);
while(true){
if((i__20694_20737 < count__20693_20736)){
var vec__20695_20738 = cljs.core._nth.call(null,chunk__20692_20735,i__20694_20737);
var n_20739 = cljs.core.nth.call(null,vec__20695_20738,(0),null);
var meth_20740 = cljs.core.nth.call(null,vec__20695_20738,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20740))){
cljs.compiler.emitln.call(null,"default:");

var restarg_20741 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_20741," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_20742 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_20741," = new cljs.core.IndexedSeq(",a_20742,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_20739,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_20706)),(((cljs.core.count.call(null,maxparams_20706) > (1)))?", ":null),restarg_20741,");");
} else {
var pcnt_20743 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20740));
cljs.compiler.emitln.call(null,"case ",pcnt_20743,":");

cljs.compiler.emitln.call(null,"return ",n_20739,".call(this",(((pcnt_20743 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_20743,maxparams_20706))),",")),");");
}

var G__20744 = seq__20691_20734;
var G__20745 = chunk__20692_20735;
var G__20746 = count__20693_20736;
var G__20747 = (i__20694_20737 + (1));
seq__20691_20734 = G__20744;
chunk__20692_20735 = G__20745;
count__20693_20736 = G__20746;
i__20694_20737 = G__20747;
continue;
} else {
var temp__4425__auto___20748 = cljs.core.seq.call(null,seq__20691_20734);
if(temp__4425__auto___20748){
var seq__20691_20749__$1 = temp__4425__auto___20748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20691_20749__$1)){
var c__17898__auto___20750 = cljs.core.chunk_first.call(null,seq__20691_20749__$1);
var G__20751 = cljs.core.chunk_rest.call(null,seq__20691_20749__$1);
var G__20752 = c__17898__auto___20750;
var G__20753 = cljs.core.count.call(null,c__17898__auto___20750);
var G__20754 = (0);
seq__20691_20734 = G__20751;
chunk__20692_20735 = G__20752;
count__20693_20736 = G__20753;
i__20694_20737 = G__20754;
continue;
} else {
var vec__20696_20755 = cljs.core.first.call(null,seq__20691_20749__$1);
var n_20756 = cljs.core.nth.call(null,vec__20696_20755,(0),null);
var meth_20757 = cljs.core.nth.call(null,vec__20696_20755,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20757))){
cljs.compiler.emitln.call(null,"default:");

var restarg_20758 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_20758," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_20759 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_20758," = new cljs.core.IndexedSeq(",a_20759,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_20756,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_20706)),(((cljs.core.count.call(null,maxparams_20706) > (1)))?", ":null),restarg_20758,");");
} else {
var pcnt_20760 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20757));
cljs.compiler.emitln.call(null,"case ",pcnt_20760,":");

cljs.compiler.emitln.call(null,"return ",n_20756,".call(this",(((pcnt_20760 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_20760,maxparams_20706))),",")),");");
}

var G__20761 = cljs.core.next.call(null,seq__20691_20749__$1);
var G__20762 = null;
var G__20763 = (0);
var G__20764 = (0);
seq__20691_20734 = G__20761;
chunk__20692_20735 = G__20762;
count__20693_20736 = G__20763;
i__20694_20737 = G__20764;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_20705,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_20705,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_20704__$1,mname_20705,maxparams_20706,mmap_20707,ms_20708,loop_locals,map__20683,map__20683__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20681_SHARP_){
var vec__20697 = p1__20681_SHARP_;
var n = cljs.core.nth.call(null,vec__20697,(0),null);
var m = cljs.core.nth.call(null,vec__20697,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_20704__$1,mname_20705,maxparams_20706,mmap_20707,ms_20708,loop_locals,map__20683,map__20683__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_20708),".cljs$lang$applyTo;");
} else {
}

var seq__20698_20765 = cljs.core.seq.call(null,ms_20708);
var chunk__20699_20766 = null;
var count__20700_20767 = (0);
var i__20701_20768 = (0);
while(true){
if((i__20701_20768 < count__20700_20767)){
var vec__20702_20769 = cljs.core._nth.call(null,chunk__20699_20766,i__20701_20768);
var n_20770 = cljs.core.nth.call(null,vec__20702_20769,(0),null);
var meth_20771 = cljs.core.nth.call(null,vec__20702_20769,(1),null);
var c_20772 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20771));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20771))){
cljs.compiler.emitln.call(null,mname_20705,".cljs$core$IFn$_invoke$arity$variadic = ",n_20770,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_20705,".cljs$core$IFn$_invoke$arity$",c_20772," = ",n_20770,";");
}

var G__20773 = seq__20698_20765;
var G__20774 = chunk__20699_20766;
var G__20775 = count__20700_20767;
var G__20776 = (i__20701_20768 + (1));
seq__20698_20765 = G__20773;
chunk__20699_20766 = G__20774;
count__20700_20767 = G__20775;
i__20701_20768 = G__20776;
continue;
} else {
var temp__4425__auto___20777 = cljs.core.seq.call(null,seq__20698_20765);
if(temp__4425__auto___20777){
var seq__20698_20778__$1 = temp__4425__auto___20777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20698_20778__$1)){
var c__17898__auto___20779 = cljs.core.chunk_first.call(null,seq__20698_20778__$1);
var G__20780 = cljs.core.chunk_rest.call(null,seq__20698_20778__$1);
var G__20781 = c__17898__auto___20779;
var G__20782 = cljs.core.count.call(null,c__17898__auto___20779);
var G__20783 = (0);
seq__20698_20765 = G__20780;
chunk__20699_20766 = G__20781;
count__20700_20767 = G__20782;
i__20701_20768 = G__20783;
continue;
} else {
var vec__20703_20784 = cljs.core.first.call(null,seq__20698_20778__$1);
var n_20785 = cljs.core.nth.call(null,vec__20703_20784,(0),null);
var meth_20786 = cljs.core.nth.call(null,vec__20703_20784,(1),null);
var c_20787 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20786));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20786))){
cljs.compiler.emitln.call(null,mname_20705,".cljs$core$IFn$_invoke$arity$variadic = ",n_20785,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_20705,".cljs$core$IFn$_invoke$arity$",c_20787," = ",n_20785,";");
}

var G__20788 = cljs.core.next.call(null,seq__20698_20778__$1);
var G__20789 = null;
var G__20790 = (0);
var G__20791 = (0);
seq__20698_20765 = G__20788;
chunk__20699_20766 = G__20789;
count__20700_20767 = G__20790;
i__20701_20768 = G__20791;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_20705,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__20792){
var map__20793 = p__20792;
var map__20793__$1 = ((((!((map__20793 == null)))?((((map__20793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20793):map__20793);
var statements = cljs.core.get.call(null,map__20793__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__20793__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__20793__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__17083__auto__ = statements;
if(cljs.core.truth_(and__17083__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__17083__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__20795_20799 = cljs.core.seq.call(null,statements);
var chunk__20796_20800 = null;
var count__20797_20801 = (0);
var i__20798_20802 = (0);
while(true){
if((i__20798_20802 < count__20797_20801)){
var s_20803 = cljs.core._nth.call(null,chunk__20796_20800,i__20798_20802);
cljs.compiler.emitln.call(null,s_20803);

var G__20804 = seq__20795_20799;
var G__20805 = chunk__20796_20800;
var G__20806 = count__20797_20801;
var G__20807 = (i__20798_20802 + (1));
seq__20795_20799 = G__20804;
chunk__20796_20800 = G__20805;
count__20797_20801 = G__20806;
i__20798_20802 = G__20807;
continue;
} else {
var temp__4425__auto___20808 = cljs.core.seq.call(null,seq__20795_20799);
if(temp__4425__auto___20808){
var seq__20795_20809__$1 = temp__4425__auto___20808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20795_20809__$1)){
var c__17898__auto___20810 = cljs.core.chunk_first.call(null,seq__20795_20809__$1);
var G__20811 = cljs.core.chunk_rest.call(null,seq__20795_20809__$1);
var G__20812 = c__17898__auto___20810;
var G__20813 = cljs.core.count.call(null,c__17898__auto___20810);
var G__20814 = (0);
seq__20795_20799 = G__20811;
chunk__20796_20800 = G__20812;
count__20797_20801 = G__20813;
i__20798_20802 = G__20814;
continue;
} else {
var s_20815 = cljs.core.first.call(null,seq__20795_20809__$1);
cljs.compiler.emitln.call(null,s_20815);

var G__20816 = cljs.core.next.call(null,seq__20795_20809__$1);
var G__20817 = null;
var G__20818 = (0);
var G__20819 = (0);
seq__20795_20799 = G__20816;
chunk__20796_20800 = G__20817;
count__20797_20801 = G__20818;
i__20798_20802 = G__20819;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__17083__auto__ = statements;
if(cljs.core.truth_(and__17083__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__17083__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__20820){
var map__20821 = p__20820;
var map__20821__$1 = ((((!((map__20821 == null)))?((((map__20821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20821):map__20821);
var env = cljs.core.get.call(null,map__20821__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__20821__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__20821__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__20821__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__20821__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__17095__auto__ = name;
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))))].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__20823,is_loop){
var map__20835 = p__20823;
var map__20835__$1 = ((((!((map__20835 == null)))?((((map__20835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20835):map__20835);
var bindings = cljs.core.get.call(null,map__20835__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__20835__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20835__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_20837_20846 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_20837_20846,context,map__20835,map__20835__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_20837_20846,context,map__20835,map__20835__$1,bindings,expr,env))
,bindings):null));

try{var seq__20838_20847 = cljs.core.seq.call(null,bindings);
var chunk__20839_20848 = null;
var count__20840_20849 = (0);
var i__20841_20850 = (0);
while(true){
if((i__20841_20850 < count__20840_20849)){
var map__20842_20851 = cljs.core._nth.call(null,chunk__20839_20848,i__20841_20850);
var map__20842_20852__$1 = ((((!((map__20842_20851 == null)))?((((map__20842_20851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20842_20851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20842_20851):map__20842_20851);
var binding_20853 = map__20842_20852__$1;
var init_20854 = cljs.core.get.call(null,map__20842_20852__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_20853);

cljs.compiler.emitln.call(null," = ",init_20854,";");

var G__20855 = seq__20838_20847;
var G__20856 = chunk__20839_20848;
var G__20857 = count__20840_20849;
var G__20858 = (i__20841_20850 + (1));
seq__20838_20847 = G__20855;
chunk__20839_20848 = G__20856;
count__20840_20849 = G__20857;
i__20841_20850 = G__20858;
continue;
} else {
var temp__4425__auto___20859 = cljs.core.seq.call(null,seq__20838_20847);
if(temp__4425__auto___20859){
var seq__20838_20860__$1 = temp__4425__auto___20859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20838_20860__$1)){
var c__17898__auto___20861 = cljs.core.chunk_first.call(null,seq__20838_20860__$1);
var G__20862 = cljs.core.chunk_rest.call(null,seq__20838_20860__$1);
var G__20863 = c__17898__auto___20861;
var G__20864 = cljs.core.count.call(null,c__17898__auto___20861);
var G__20865 = (0);
seq__20838_20847 = G__20862;
chunk__20839_20848 = G__20863;
count__20840_20849 = G__20864;
i__20841_20850 = G__20865;
continue;
} else {
var map__20844_20866 = cljs.core.first.call(null,seq__20838_20860__$1);
var map__20844_20867__$1 = ((((!((map__20844_20866 == null)))?((((map__20844_20866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20844_20866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20844_20866):map__20844_20866);
var binding_20868 = map__20844_20867__$1;
var init_20869 = cljs.core.get.call(null,map__20844_20867__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_20868);

cljs.compiler.emitln.call(null," = ",init_20869,";");

var G__20870 = cljs.core.next.call(null,seq__20838_20860__$1);
var G__20871 = null;
var G__20872 = (0);
var G__20873 = (0);
seq__20838_20847 = G__20870;
chunk__20839_20848 = G__20871;
count__20840_20849 = G__20872;
i__20841_20850 = G__20873;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_20837_20846;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__20874){
var map__20875 = p__20874;
var map__20875__$1 = ((((!((map__20875 == null)))?((((map__20875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20875):map__20875);
var frame = cljs.core.get.call(null,map__20875__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__20875__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__20875__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__17998__auto___20877 = cljs.core.count.call(null,exprs);
var i_20878 = (0);
while(true){
if((i_20878 < n__17998__auto___20877)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_20878)," = ",exprs.call(null,i_20878),";");

var G__20879 = (i_20878 + (1));
i_20878 = G__20879;
continue;
} else {
}
break;
}

var n__17998__auto___20880 = cljs.core.count.call(null,exprs);
var i_20881 = (0);
while(true){
if((i_20881 < n__17998__auto___20880)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_20881))," = ",temps.call(null,i_20881),";");

var G__20882 = (i_20881 + (1));
i_20881 = G__20882;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__20883){
var map__20884 = p__20883;
var map__20884__$1 = ((((!((map__20884 == null)))?((((map__20884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20884):map__20884);
var bindings = cljs.core.get.call(null,map__20884__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__20884__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20884__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__20886_20894 = cljs.core.seq.call(null,bindings);
var chunk__20887_20895 = null;
var count__20888_20896 = (0);
var i__20889_20897 = (0);
while(true){
if((i__20889_20897 < count__20888_20896)){
var map__20890_20898 = cljs.core._nth.call(null,chunk__20887_20895,i__20889_20897);
var map__20890_20899__$1 = ((((!((map__20890_20898 == null)))?((((map__20890_20898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20890_20898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20890_20898):map__20890_20898);
var binding_20900 = map__20890_20899__$1;
var init_20901 = cljs.core.get.call(null,map__20890_20899__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_20900)," = ",init_20901,";");

var G__20902 = seq__20886_20894;
var G__20903 = chunk__20887_20895;
var G__20904 = count__20888_20896;
var G__20905 = (i__20889_20897 + (1));
seq__20886_20894 = G__20902;
chunk__20887_20895 = G__20903;
count__20888_20896 = G__20904;
i__20889_20897 = G__20905;
continue;
} else {
var temp__4425__auto___20906 = cljs.core.seq.call(null,seq__20886_20894);
if(temp__4425__auto___20906){
var seq__20886_20907__$1 = temp__4425__auto___20906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20886_20907__$1)){
var c__17898__auto___20908 = cljs.core.chunk_first.call(null,seq__20886_20907__$1);
var G__20909 = cljs.core.chunk_rest.call(null,seq__20886_20907__$1);
var G__20910 = c__17898__auto___20908;
var G__20911 = cljs.core.count.call(null,c__17898__auto___20908);
var G__20912 = (0);
seq__20886_20894 = G__20909;
chunk__20887_20895 = G__20910;
count__20888_20896 = G__20911;
i__20889_20897 = G__20912;
continue;
} else {
var map__20892_20913 = cljs.core.first.call(null,seq__20886_20907__$1);
var map__20892_20914__$1 = ((((!((map__20892_20913 == null)))?((((map__20892_20913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20892_20913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20892_20913):map__20892_20913);
var binding_20915 = map__20892_20914__$1;
var init_20916 = cljs.core.get.call(null,map__20892_20914__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_20915)," = ",init_20916,";");

var G__20917 = cljs.core.next.call(null,seq__20886_20907__$1);
var G__20918 = null;
var G__20919 = (0);
var G__20920 = (0);
seq__20886_20894 = G__20917;
chunk__20887_20895 = G__20918;
count__20888_20896 = G__20919;
i__20889_20897 = G__20920;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__20923){
var map__20924 = p__20923;
var map__20924__$1 = ((((!((map__20924 == null)))?((((map__20924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20924):map__20924);
var expr = map__20924__$1;
var f = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__20924__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__17083__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__17083__auto__)){
var and__17083__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__17083__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__17083__auto____$1;
}
} else {
return and__17083__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__17083__auto__ = protocol;
if(cljs.core.truth_(and__17083__auto__)){
var and__17083__auto____$1 = tag;
if(cljs.core.truth_(and__17083__auto____$1)){
var or__17095__auto__ = (function (){var and__17083__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__17083__auto____$2)){
var and__17083__auto____$3 = protocol;
if(cljs.core.truth_(and__17083__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__17083__auto____$3;
}
} else {
return and__17083__auto____$2;
}
})();
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
var and__17083__auto____$2 = (function (){var or__17095__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__17095__auto____$1)){
return or__17095__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__17083__auto____$2)){
var or__17095__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__17095__auto____$1){
return or__17095__auto____$1;
} else {
var and__17083__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__17083__auto____$3){
var and__17083__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__17083__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__17083__auto____$4;
}
} else {
return and__17083__auto____$3;
}
}
} else {
return and__17083__auto____$2;
}
}
} else {
return and__17083__auto____$1;
}
} else {
return and__17083__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__17095__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__17095__auto__){
return or__17095__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__20926 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__17083__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__17083__auto__)){
return (arity > mfa);
} else {
return and__17083__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20924,map__20924__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20924,map__20924__$1,expr,f,args,env){
return (function (p1__20921_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__20921_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20924,map__20924__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20924,map__20924__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20924,map__20924__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20924,map__20924__$1,expr,f,args,env){
return (function (p1__20922_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__20922_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20924,map__20924__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20924,map__20924__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__20926,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__20926,(1),null);
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_20927 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_20927,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_20928 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_20928,args)),(((mfa_20928 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_20928,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__17095__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
var or__17095__auto____$1 = js_QMARK_;
if(or__17095__auto____$1){
return or__17095__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__17083__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__17083__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__17083__auto__;
}
})())){
var fprop_20929 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_20929," ? ",f__$1,fprop_20929,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__20930){
var map__20931 = p__20930;
var map__20931__$1 = ((((!((map__20931 == null)))?((((map__20931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20931):map__20931);
var ctor = cljs.core.get.call(null,map__20931__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__20931__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__20931__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__20933){
var map__20934 = p__20933;
var map__20934__$1 = ((((!((map__20934 == null)))?((((map__20934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20934):map__20934);
var target = cljs.core.get.call(null,map__20934__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__20934__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__20934__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__20940_20944 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__20941_20945 = null;
var count__20942_20946 = (0);
var i__20943_20947 = (0);
while(true){
if((i__20943_20947 < count__20942_20946)){
var lib_20948 = cljs.core._nth.call(null,chunk__20941_20945,i__20943_20947);
if(cljs.core.truth_((function (){var or__17095__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20948),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20948),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__17095__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20948),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20948),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20948),"');");

}
}

var G__20949 = seq__20940_20944;
var G__20950 = chunk__20941_20945;
var G__20951 = count__20942_20946;
var G__20952 = (i__20943_20947 + (1));
seq__20940_20944 = G__20949;
chunk__20941_20945 = G__20950;
count__20942_20946 = G__20951;
i__20943_20947 = G__20952;
continue;
} else {
var temp__4425__auto___20953 = cljs.core.seq.call(null,seq__20940_20944);
if(temp__4425__auto___20953){
var seq__20940_20954__$1 = temp__4425__auto___20953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20940_20954__$1)){
var c__17898__auto___20955 = cljs.core.chunk_first.call(null,seq__20940_20954__$1);
var G__20956 = cljs.core.chunk_rest.call(null,seq__20940_20954__$1);
var G__20957 = c__17898__auto___20955;
var G__20958 = cljs.core.count.call(null,c__17898__auto___20955);
var G__20959 = (0);
seq__20940_20944 = G__20956;
chunk__20941_20945 = G__20957;
count__20942_20946 = G__20958;
i__20943_20947 = G__20959;
continue;
} else {
var lib_20960 = cljs.core.first.call(null,seq__20940_20954__$1);
if(cljs.core.truth_((function (){var or__17095__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20960),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20960),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__17095__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20960),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20960),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20960),"');");

}
}

var G__20961 = cljs.core.next.call(null,seq__20940_20954__$1);
var G__20962 = null;
var G__20963 = (0);
var G__20964 = (0);
seq__20940_20944 = G__20961;
chunk__20941_20945 = G__20962;
count__20942_20946 = G__20963;
i__20943_20947 = G__20964;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__20965){
var map__20966 = p__20965;
var map__20966__$1 = ((((!((map__20966 == null)))?((((map__20966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20966):map__20966);
var name = cljs.core.get.call(null,map__20966__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__20966__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__20966__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__20966__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__20966__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__20966__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__20968){
var map__20969 = p__20968;
var map__20969__$1 = ((((!((map__20969 == null)))?((((map__20969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20969):map__20969);
var t = cljs.core.get.call(null,map__20969__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__20969__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__20969__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__20969__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__20969__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__20971_20985 = cljs.core.seq.call(null,protocols);
var chunk__20972_20986 = null;
var count__20973_20987 = (0);
var i__20974_20988 = (0);
while(true){
if((i__20974_20988 < count__20973_20987)){
var protocol_20989 = cljs.core._nth.call(null,chunk__20972_20986,i__20974_20988);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_20989)].join('')),"}");

var G__20990 = seq__20971_20985;
var G__20991 = chunk__20972_20986;
var G__20992 = count__20973_20987;
var G__20993 = (i__20974_20988 + (1));
seq__20971_20985 = G__20990;
chunk__20972_20986 = G__20991;
count__20973_20987 = G__20992;
i__20974_20988 = G__20993;
continue;
} else {
var temp__4425__auto___20994 = cljs.core.seq.call(null,seq__20971_20985);
if(temp__4425__auto___20994){
var seq__20971_20995__$1 = temp__4425__auto___20994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20971_20995__$1)){
var c__17898__auto___20996 = cljs.core.chunk_first.call(null,seq__20971_20995__$1);
var G__20997 = cljs.core.chunk_rest.call(null,seq__20971_20995__$1);
var G__20998 = c__17898__auto___20996;
var G__20999 = cljs.core.count.call(null,c__17898__auto___20996);
var G__21000 = (0);
seq__20971_20985 = G__20997;
chunk__20972_20986 = G__20998;
count__20973_20987 = G__20999;
i__20974_20988 = G__21000;
continue;
} else {
var protocol_21001 = cljs.core.first.call(null,seq__20971_20995__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_21001)].join('')),"}");

var G__21002 = cljs.core.next.call(null,seq__20971_20995__$1);
var G__21003 = null;
var G__21004 = (0);
var G__21005 = (0);
seq__20971_20985 = G__21002;
chunk__20972_20986 = G__21003;
count__20973_20987 = G__21004;
i__20974_20988 = G__21005;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__20975_21006 = cljs.core.seq.call(null,fields__$1);
var chunk__20976_21007 = null;
var count__20977_21008 = (0);
var i__20978_21009 = (0);
while(true){
if((i__20978_21009 < count__20977_21008)){
var fld_21010 = cljs.core._nth.call(null,chunk__20976_21007,i__20978_21009);
cljs.compiler.emitln.call(null,"this.",fld_21010," = ",fld_21010,";");

var G__21011 = seq__20975_21006;
var G__21012 = chunk__20976_21007;
var G__21013 = count__20977_21008;
var G__21014 = (i__20978_21009 + (1));
seq__20975_21006 = G__21011;
chunk__20976_21007 = G__21012;
count__20977_21008 = G__21013;
i__20978_21009 = G__21014;
continue;
} else {
var temp__4425__auto___21015 = cljs.core.seq.call(null,seq__20975_21006);
if(temp__4425__auto___21015){
var seq__20975_21016__$1 = temp__4425__auto___21015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20975_21016__$1)){
var c__17898__auto___21017 = cljs.core.chunk_first.call(null,seq__20975_21016__$1);
var G__21018 = cljs.core.chunk_rest.call(null,seq__20975_21016__$1);
var G__21019 = c__17898__auto___21017;
var G__21020 = cljs.core.count.call(null,c__17898__auto___21017);
var G__21021 = (0);
seq__20975_21006 = G__21018;
chunk__20976_21007 = G__21019;
count__20977_21008 = G__21020;
i__20978_21009 = G__21021;
continue;
} else {
var fld_21022 = cljs.core.first.call(null,seq__20975_21016__$1);
cljs.compiler.emitln.call(null,"this.",fld_21022," = ",fld_21022,";");

var G__21023 = cljs.core.next.call(null,seq__20975_21016__$1);
var G__21024 = null;
var G__21025 = (0);
var G__21026 = (0);
seq__20975_21006 = G__21023;
chunk__20976_21007 = G__21024;
count__20977_21008 = G__21025;
i__20978_21009 = G__21026;
continue;
}
} else {
}
}
break;
}

var seq__20979_21027 = cljs.core.seq.call(null,pmasks);
var chunk__20980_21028 = null;
var count__20981_21029 = (0);
var i__20982_21030 = (0);
while(true){
if((i__20982_21030 < count__20981_21029)){
var vec__20983_21031 = cljs.core._nth.call(null,chunk__20980_21028,i__20982_21030);
var pno_21032 = cljs.core.nth.call(null,vec__20983_21031,(0),null);
var pmask_21033 = cljs.core.nth.call(null,vec__20983_21031,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_21032,"$ = ",pmask_21033,";");

var G__21034 = seq__20979_21027;
var G__21035 = chunk__20980_21028;
var G__21036 = count__20981_21029;
var G__21037 = (i__20982_21030 + (1));
seq__20979_21027 = G__21034;
chunk__20980_21028 = G__21035;
count__20981_21029 = G__21036;
i__20982_21030 = G__21037;
continue;
} else {
var temp__4425__auto___21038 = cljs.core.seq.call(null,seq__20979_21027);
if(temp__4425__auto___21038){
var seq__20979_21039__$1 = temp__4425__auto___21038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20979_21039__$1)){
var c__17898__auto___21040 = cljs.core.chunk_first.call(null,seq__20979_21039__$1);
var G__21041 = cljs.core.chunk_rest.call(null,seq__20979_21039__$1);
var G__21042 = c__17898__auto___21040;
var G__21043 = cljs.core.count.call(null,c__17898__auto___21040);
var G__21044 = (0);
seq__20979_21027 = G__21041;
chunk__20980_21028 = G__21042;
count__20981_21029 = G__21043;
i__20982_21030 = G__21044;
continue;
} else {
var vec__20984_21045 = cljs.core.first.call(null,seq__20979_21039__$1);
var pno_21046 = cljs.core.nth.call(null,vec__20984_21045,(0),null);
var pmask_21047 = cljs.core.nth.call(null,vec__20984_21045,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_21046,"$ = ",pmask_21047,";");

var G__21048 = cljs.core.next.call(null,seq__20979_21039__$1);
var G__21049 = null;
var G__21050 = (0);
var G__21051 = (0);
seq__20979_21027 = G__21048;
chunk__20980_21028 = G__21049;
count__20981_21029 = G__21050;
i__20982_21030 = G__21051;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__21052){
var map__21053 = p__21052;
var map__21053__$1 = ((((!((map__21053 == null)))?((((map__21053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21053):map__21053);
var t = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__21053__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__21055_21069 = cljs.core.seq.call(null,protocols);
var chunk__21056_21070 = null;
var count__21057_21071 = (0);
var i__21058_21072 = (0);
while(true){
if((i__21058_21072 < count__21057_21071)){
var protocol_21073 = cljs.core._nth.call(null,chunk__21056_21070,i__21058_21072);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_21073)].join('')),"}");

var G__21074 = seq__21055_21069;
var G__21075 = chunk__21056_21070;
var G__21076 = count__21057_21071;
var G__21077 = (i__21058_21072 + (1));
seq__21055_21069 = G__21074;
chunk__21056_21070 = G__21075;
count__21057_21071 = G__21076;
i__21058_21072 = G__21077;
continue;
} else {
var temp__4425__auto___21078 = cljs.core.seq.call(null,seq__21055_21069);
if(temp__4425__auto___21078){
var seq__21055_21079__$1 = temp__4425__auto___21078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21055_21079__$1)){
var c__17898__auto___21080 = cljs.core.chunk_first.call(null,seq__21055_21079__$1);
var G__21081 = cljs.core.chunk_rest.call(null,seq__21055_21079__$1);
var G__21082 = c__17898__auto___21080;
var G__21083 = cljs.core.count.call(null,c__17898__auto___21080);
var G__21084 = (0);
seq__21055_21069 = G__21081;
chunk__21056_21070 = G__21082;
count__21057_21071 = G__21083;
i__21058_21072 = G__21084;
continue;
} else {
var protocol_21085 = cljs.core.first.call(null,seq__21055_21079__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_21085)].join('')),"}");

var G__21086 = cljs.core.next.call(null,seq__21055_21079__$1);
var G__21087 = null;
var G__21088 = (0);
var G__21089 = (0);
seq__21055_21069 = G__21086;
chunk__21056_21070 = G__21087;
count__21057_21071 = G__21088;
i__21058_21072 = G__21089;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__21059_21090 = cljs.core.seq.call(null,fields__$1);
var chunk__21060_21091 = null;
var count__21061_21092 = (0);
var i__21062_21093 = (0);
while(true){
if((i__21062_21093 < count__21061_21092)){
var fld_21094 = cljs.core._nth.call(null,chunk__21060_21091,i__21062_21093);
cljs.compiler.emitln.call(null,"this.",fld_21094," = ",fld_21094,";");

var G__21095 = seq__21059_21090;
var G__21096 = chunk__21060_21091;
var G__21097 = count__21061_21092;
var G__21098 = (i__21062_21093 + (1));
seq__21059_21090 = G__21095;
chunk__21060_21091 = G__21096;
count__21061_21092 = G__21097;
i__21062_21093 = G__21098;
continue;
} else {
var temp__4425__auto___21099 = cljs.core.seq.call(null,seq__21059_21090);
if(temp__4425__auto___21099){
var seq__21059_21100__$1 = temp__4425__auto___21099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21059_21100__$1)){
var c__17898__auto___21101 = cljs.core.chunk_first.call(null,seq__21059_21100__$1);
var G__21102 = cljs.core.chunk_rest.call(null,seq__21059_21100__$1);
var G__21103 = c__17898__auto___21101;
var G__21104 = cljs.core.count.call(null,c__17898__auto___21101);
var G__21105 = (0);
seq__21059_21090 = G__21102;
chunk__21060_21091 = G__21103;
count__21061_21092 = G__21104;
i__21062_21093 = G__21105;
continue;
} else {
var fld_21106 = cljs.core.first.call(null,seq__21059_21100__$1);
cljs.compiler.emitln.call(null,"this.",fld_21106," = ",fld_21106,";");

var G__21107 = cljs.core.next.call(null,seq__21059_21100__$1);
var G__21108 = null;
var G__21109 = (0);
var G__21110 = (0);
seq__21059_21090 = G__21107;
chunk__21060_21091 = G__21108;
count__21061_21092 = G__21109;
i__21062_21093 = G__21110;
continue;
}
} else {
}
}
break;
}

var seq__21063_21111 = cljs.core.seq.call(null,pmasks);
var chunk__21064_21112 = null;
var count__21065_21113 = (0);
var i__21066_21114 = (0);
while(true){
if((i__21066_21114 < count__21065_21113)){
var vec__21067_21115 = cljs.core._nth.call(null,chunk__21064_21112,i__21066_21114);
var pno_21116 = cljs.core.nth.call(null,vec__21067_21115,(0),null);
var pmask_21117 = cljs.core.nth.call(null,vec__21067_21115,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_21116,"$ = ",pmask_21117,";");

var G__21118 = seq__21063_21111;
var G__21119 = chunk__21064_21112;
var G__21120 = count__21065_21113;
var G__21121 = (i__21066_21114 + (1));
seq__21063_21111 = G__21118;
chunk__21064_21112 = G__21119;
count__21065_21113 = G__21120;
i__21066_21114 = G__21121;
continue;
} else {
var temp__4425__auto___21122 = cljs.core.seq.call(null,seq__21063_21111);
if(temp__4425__auto___21122){
var seq__21063_21123__$1 = temp__4425__auto___21122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21063_21123__$1)){
var c__17898__auto___21124 = cljs.core.chunk_first.call(null,seq__21063_21123__$1);
var G__21125 = cljs.core.chunk_rest.call(null,seq__21063_21123__$1);
var G__21126 = c__17898__auto___21124;
var G__21127 = cljs.core.count.call(null,c__17898__auto___21124);
var G__21128 = (0);
seq__21063_21111 = G__21125;
chunk__21064_21112 = G__21126;
count__21065_21113 = G__21127;
i__21066_21114 = G__21128;
continue;
} else {
var vec__21068_21129 = cljs.core.first.call(null,seq__21063_21123__$1);
var pno_21130 = cljs.core.nth.call(null,vec__21068_21129,(0),null);
var pmask_21131 = cljs.core.nth.call(null,vec__21068_21129,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_21130,"$ = ",pmask_21131,";");

var G__21132 = cljs.core.next.call(null,seq__21063_21123__$1);
var G__21133 = null;
var G__21134 = (0);
var G__21135 = (0);
seq__21063_21111 = G__21132;
chunk__21064_21112 = G__21133;
count__21065_21113 = G__21134;
i__21066_21114 = G__21135;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__21136){
var map__21137 = p__21136;
var map__21137__$1 = ((((!((map__21137 == null)))?((((map__21137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21137):map__21137);
var target = cljs.core.get.call(null,map__21137__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__21137__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__21137__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__21137__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__21137__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__21139){
var map__21140 = p__21139;
var map__21140__$1 = ((((!((map__21140 == null)))?((((map__21140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21140):map__21140);
var op = cljs.core.get.call(null,map__21140__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__21140__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__21140__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__21140__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__21140__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__17083__auto__ = code;
if(cljs.core.truth_(and__17083__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__17083__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__20096__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__20096__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__21150 = cljs.core.seq.call(null,table);
var chunk__21151 = null;
var count__21152 = (0);
var i__21153 = (0);
while(true){
if((i__21153 < count__21152)){
var vec__21154 = cljs.core._nth.call(null,chunk__21151,i__21153);
var sym = cljs.core.nth.call(null,vec__21154,(0),null);
var value = cljs.core.nth.call(null,vec__21154,(1),null);
var ns_21156 = cljs.core.namespace.call(null,sym);
var name_21157 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__21158 = seq__21150;
var G__21159 = chunk__21151;
var G__21160 = count__21152;
var G__21161 = (i__21153 + (1));
seq__21150 = G__21158;
chunk__21151 = G__21159;
count__21152 = G__21160;
i__21153 = G__21161;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21150);
if(temp__4425__auto__){
var seq__21150__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21150__$1)){
var c__17898__auto__ = cljs.core.chunk_first.call(null,seq__21150__$1);
var G__21162 = cljs.core.chunk_rest.call(null,seq__21150__$1);
var G__21163 = c__17898__auto__;
var G__21164 = cljs.core.count.call(null,c__17898__auto__);
var G__21165 = (0);
seq__21150 = G__21162;
chunk__21151 = G__21163;
count__21152 = G__21164;
i__21153 = G__21165;
continue;
} else {
var vec__21155 = cljs.core.first.call(null,seq__21150__$1);
var sym = cljs.core.nth.call(null,vec__21155,(0),null);
var value = cljs.core.nth.call(null,vec__21155,(1),null);
var ns_21166 = cljs.core.namespace.call(null,sym);
var name_21167 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__21168 = cljs.core.next.call(null,seq__21150__$1);
var G__21169 = null;
var G__21170 = (0);
var G__21171 = (0);
seq__21150 = G__21168;
chunk__21151 = G__21169;
count__21152 = G__21170;
i__21153 = G__21171;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map
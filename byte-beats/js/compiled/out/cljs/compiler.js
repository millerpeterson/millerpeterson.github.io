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
var map__19646 = s;
var map__19646__$1 = ((((!((map__19646 == null)))?((((map__19646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19646):map__19646);
var name = cljs.core.get.call(null,map__19646__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__19646__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__19649 = info;
var map__19650 = G__19649;
var map__19650__$1 = ((((!((map__19650 == null)))?((((map__19650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19650):map__19650);
var shadow = cljs.core.get.call(null,map__19650__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__19649__$1 = G__19649;
while(true){
var d__$2 = d__$1;
var map__19652 = G__19649__$1;
var map__19652__$1 = ((((!((map__19652 == null)))?((((map__19652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19652):map__19652);
var shadow__$1 = cljs.core.get.call(null,map__19652__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__19654 = (d__$2 + (1));
var G__19655 = shadow__$1;
d__$1 = G__19654;
G__19649__$1 = G__19655;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__19656){
var map__19661 = p__19656;
var map__19661__$1 = ((((!((map__19661 == null)))?((((map__19661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19661):map__19661);
var name_var = map__19661__$1;
var name = cljs.core.get.call(null,map__19661__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__19661__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__19663 = info;
var map__19663__$1 = ((((!((map__19663 == null)))?((((map__19663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19663):map__19663);
var ns = cljs.core.get.call(null,map__19663__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__19663__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args19665 = [];
var len__17910__auto___19668 = arguments.length;
var i__17911__auto___19669 = (0);
while(true){
if((i__17911__auto___19669 < len__17910__auto___19668)){
args19665.push((arguments[i__17911__auto___19669]));

var G__19670 = (i__17911__auto___19669 + (1));
i__17911__auto___19669 = G__19670;
continue;
} else {
}
break;
}

var G__19667 = args19665.length;
switch (G__19667) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19665.length)].join('')));

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
var G__19673 = cp;
switch (G__19673) {
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
var seq__19679_19683 = cljs.core.seq.call(null,s);
var chunk__19680_19684 = null;
var count__19681_19685 = (0);
var i__19682_19686 = (0);
while(true){
if((i__19682_19686 < count__19681_19685)){
var c_19687 = cljs.core._nth.call(null,chunk__19680_19684,i__19682_19686);
sb.append(cljs.compiler.escape_char.call(null,c_19687));

var G__19688 = seq__19679_19683;
var G__19689 = chunk__19680_19684;
var G__19690 = count__19681_19685;
var G__19691 = (i__19682_19686 + (1));
seq__19679_19683 = G__19688;
chunk__19680_19684 = G__19689;
count__19681_19685 = G__19690;
i__19682_19686 = G__19691;
continue;
} else {
var temp__4425__auto___19692 = cljs.core.seq.call(null,seq__19679_19683);
if(temp__4425__auto___19692){
var seq__19679_19693__$1 = temp__4425__auto___19692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19679_19693__$1)){
var c__17655__auto___19694 = cljs.core.chunk_first.call(null,seq__19679_19693__$1);
var G__19695 = cljs.core.chunk_rest.call(null,seq__19679_19693__$1);
var G__19696 = c__17655__auto___19694;
var G__19697 = cljs.core.count.call(null,c__17655__auto___19694);
var G__19698 = (0);
seq__19679_19683 = G__19695;
chunk__19680_19684 = G__19696;
count__19681_19685 = G__19697;
i__19682_19686 = G__19698;
continue;
} else {
var c_19699 = cljs.core.first.call(null,seq__19679_19693__$1);
sb.append(cljs.compiler.escape_char.call(null,c_19699));

var G__19700 = cljs.core.next.call(null,seq__19679_19693__$1);
var G__19701 = null;
var G__19702 = (0);
var G__19703 = (0);
seq__19679_19683 = G__19700;
chunk__19680_19684 = G__19701;
count__19681_19685 = G__19702;
i__19682_19686 = G__19703;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__17765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17769__auto__,method_table__17765__auto__,prefer_table__17766__auto__,method_cache__17767__auto__,cached_hierarchy__17768__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__18213__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__18213__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__19709_19714 = ast;
var map__19709_19715__$1 = ((((!((map__19709_19714 == null)))?((((map__19709_19714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19709_19714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19709_19714):map__19709_19714);
var env_19716 = cljs.core.get.call(null,map__19709_19715__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_19716))){
var map__19711_19717 = env_19716;
var map__19711_19718__$1 = ((((!((map__19711_19717 == null)))?((((map__19711_19717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19711_19717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19711_19717):map__19711_19717);
var line_19719 = cljs.core.get.call(null,map__19711_19718__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_19720 = cljs.core.get.call(null,map__19711_19718__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__19711_19717,map__19711_19718__$1,line_19719,column_19720,map__19709_19714,map__19709_19715__$1,env_19716,val__18213__auto__){
return (function (m){
var minfo = (function (){var G__19713 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__19713__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__19713,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__19713);
return G__19713__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_19719 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__19711_19717,map__19711_19718__$1,line_19719,column_19720,map__19709_19714,map__19709_19715__$1,env_19716,val__18213__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_19720)?(column_19720 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__19711_19717,map__19711_19718__$1,line_19719,column_19720,map__19709_19714,map__19709_19715__$1,env_19716,val__18213__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__19711_19717,map__19711_19718__$1,line_19719,column_19720,map__19709_19714,map__19709_19715__$1,env_19716,val__18213__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__19711_19717,map__19711_19718__$1,line_19719,column_19720,map__19709_19714,map__19709_19715__$1,env_19716,val__18213__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__19711_19717,map__19711_19718__$1,line_19719,column_19720,map__19709_19714,map__19709_19715__$1,env_19716,val__18213__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__18213__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__17917__auto__ = [];
var len__17910__auto___19727 = arguments.length;
var i__17911__auto___19728 = (0);
while(true){
if((i__17911__auto___19728 < len__17910__auto___19727)){
args__17917__auto__.push((arguments[i__17911__auto___19728]));

var G__19729 = (i__17911__auto___19728 + (1));
i__17911__auto___19728 = G__19729;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((0) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__17918__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__19723_19730 = cljs.core.seq.call(null,xs);
var chunk__19724_19731 = null;
var count__19725_19732 = (0);
var i__19726_19733 = (0);
while(true){
if((i__19726_19733 < count__19725_19732)){
var x_19734 = cljs.core._nth.call(null,chunk__19724_19731,i__19726_19733);
if((x_19734 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_19734)){
cljs.compiler.emit.call(null,x_19734);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_19734)){
cljs.core.apply.call(null,cljs.compiler.emits,x_19734);
} else {
if(goog.isFunction(x_19734)){
x_19734.call(null);
} else {
var s_19735 = cljs.core.print_str.call(null,x_19734);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__19723_19730,chunk__19724_19731,count__19725_19732,i__19726_19733,s_19735,x_19734){
return (function (p1__19721_SHARP_){
return (p1__19721_SHARP_ + cljs.core.count.call(null,s_19735));
});})(seq__19723_19730,chunk__19724_19731,count__19725_19732,i__19726_19733,s_19735,x_19734))
);
}

cljs.core.print.call(null,s_19735);

}
}
}
}

var G__19736 = seq__19723_19730;
var G__19737 = chunk__19724_19731;
var G__19738 = count__19725_19732;
var G__19739 = (i__19726_19733 + (1));
seq__19723_19730 = G__19736;
chunk__19724_19731 = G__19737;
count__19725_19732 = G__19738;
i__19726_19733 = G__19739;
continue;
} else {
var temp__4425__auto___19740 = cljs.core.seq.call(null,seq__19723_19730);
if(temp__4425__auto___19740){
var seq__19723_19741__$1 = temp__4425__auto___19740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19723_19741__$1)){
var c__17655__auto___19742 = cljs.core.chunk_first.call(null,seq__19723_19741__$1);
var G__19743 = cljs.core.chunk_rest.call(null,seq__19723_19741__$1);
var G__19744 = c__17655__auto___19742;
var G__19745 = cljs.core.count.call(null,c__17655__auto___19742);
var G__19746 = (0);
seq__19723_19730 = G__19743;
chunk__19724_19731 = G__19744;
count__19725_19732 = G__19745;
i__19726_19733 = G__19746;
continue;
} else {
var x_19747 = cljs.core.first.call(null,seq__19723_19741__$1);
if((x_19747 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_19747)){
cljs.compiler.emit.call(null,x_19747);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_19747)){
cljs.core.apply.call(null,cljs.compiler.emits,x_19747);
} else {
if(goog.isFunction(x_19747)){
x_19747.call(null);
} else {
var s_19748 = cljs.core.print_str.call(null,x_19747);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__19723_19730,chunk__19724_19731,count__19725_19732,i__19726_19733,s_19748,x_19747,seq__19723_19741__$1,temp__4425__auto___19740){
return (function (p1__19721_SHARP_){
return (p1__19721_SHARP_ + cljs.core.count.call(null,s_19748));
});})(seq__19723_19730,chunk__19724_19731,count__19725_19732,i__19726_19733,s_19748,x_19747,seq__19723_19741__$1,temp__4425__auto___19740))
);
}

cljs.core.print.call(null,s_19748);

}
}
}
}

var G__19749 = cljs.core.next.call(null,seq__19723_19741__$1);
var G__19750 = null;
var G__19751 = (0);
var G__19752 = (0);
seq__19723_19730 = G__19749;
chunk__19724_19731 = G__19750;
count__19725_19732 = G__19751;
i__19726_19733 = G__19752;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq19722){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19722));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__17917__auto__ = [];
var len__17910__auto___19757 = arguments.length;
var i__17911__auto___19758 = (0);
while(true){
if((i__17911__auto___19758 < len__17910__auto___19757)){
args__17917__auto__.push((arguments[i__17911__auto___19758]));

var G__19759 = (i__17911__auto___19758 + (1));
i__17911__auto___19758 = G__19759;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((0) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__17918__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__19754){
var map__19755 = p__19754;
var map__19755__$1 = ((((!((map__19755 == null)))?((((map__19755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19755):map__19755);
var m = map__19755__$1;
var gen_line = cljs.core.get.call(null,map__19755__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq19753){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19753));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__17826__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_19762_19764 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_19763_19765 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_19762_19764,_STAR_print_fn_STAR_19763_19765,sb__17826__auto__){
return (function (x__17827__auto__){
return sb__17826__auto__.append(x__17827__auto__);
});})(_STAR_print_newline_STAR_19762_19764,_STAR_print_fn_STAR_19763_19765,sb__17826__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_19763_19765;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_19762_19764;
}
return [cljs.core.str(sb__17826__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__17765__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17766__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17767__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17768__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17769__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17769__auto__,method_table__17765__auto__,prefer_table__17766__auto__,method_cache__17767__auto__,cached_hierarchy__17768__auto__));
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
var vec__19766 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__19766,(0),null);
var flags = cljs.core.nth.call(null,vec__19766,(1),null);
var pattern = cljs.core.nth.call(null,vec__19766,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__19768){
var map__19769 = p__19768;
var map__19769__$1 = ((((!((map__19769 == null)))?((((map__19769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19769):map__19769);
var arg = map__19769__$1;
var info = cljs.core.get.call(null,map__19769__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__19769__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__19769__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__16852__auto__ = js_module_name;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
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
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__19771 = info__$1;
var G__19771__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__19771):G__19771);
return G__19771__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__19772){
var map__19773 = p__19772;
var map__19773__$1 = ((((!((map__19773 == null)))?((((map__19773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19773):map__19773);
var arg = map__19773__$1;
var env = cljs.core.get.call(null,map__19773__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__19773__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__19773__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__19773__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__19775 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__19775__$1 = ((((!((map__19775 == null)))?((((map__19775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19775):map__19775);
var name = cljs.core.get.call(null,map__19775__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__19777){
var map__19778 = p__19777;
var map__19778__$1 = ((((!((map__19778 == null)))?((((map__19778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19778):map__19778);
var expr = cljs.core.get.call(null,map__19778__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__19778__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__19778__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__19780_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__19780_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__19781){
var map__19782 = p__19781;
var map__19782__$1 = ((((!((map__19782 == null)))?((((map__19782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19782):map__19782);
var env = cljs.core.get.call(null,map__19782__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__19782__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__19782__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__19784){
var map__19785 = p__19784;
var map__19785__$1 = ((((!((map__19785 == null)))?((((map__19785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19785):map__19785);
var items = cljs.core.get.call(null,map__19785__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__19785__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__19787){
var map__19788 = p__19787;
var map__19788__$1 = ((((!((map__19788 == null)))?((((map__19788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19788):map__19788);
var items = cljs.core.get.call(null,map__19788__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__19788__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_19790 = cljs.core.count.call(null,items);
if((cnt_19790 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_19790,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__19791_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__19791_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__19792){
var map__19793 = p__19792;
var map__19793__$1 = ((((!((map__19793 == null)))?((((map__19793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19793):map__19793);
var items = cljs.core.get.call(null,map__19793__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__19793__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__19795){
var map__19796 = p__19795;
var map__19796__$1 = ((((!((map__19796 == null)))?((((map__19796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19796):map__19796);
var items = cljs.core.get.call(null,map__19796__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__19796__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__19796__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___19806 = cljs.core.seq.call(null,items);
if(temp__4425__auto___19806){
var items_19807__$1 = temp__4425__auto___19806;
var vec__19798_19808 = items_19807__$1;
var vec__19799_19809 = cljs.core.nth.call(null,vec__19798_19808,(0),null);
var k_19810 = cljs.core.nth.call(null,vec__19799_19809,(0),null);
var v_19811 = cljs.core.nth.call(null,vec__19799_19809,(1),null);
var r_19812 = cljs.core.nthnext.call(null,vec__19798_19808,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_19810),"\": ",v_19811);

var seq__19800_19813 = cljs.core.seq.call(null,r_19812);
var chunk__19801_19814 = null;
var count__19802_19815 = (0);
var i__19803_19816 = (0);
while(true){
if((i__19803_19816 < count__19802_19815)){
var vec__19804_19817 = cljs.core._nth.call(null,chunk__19801_19814,i__19803_19816);
var k_19818__$1 = cljs.core.nth.call(null,vec__19804_19817,(0),null);
var v_19819__$1 = cljs.core.nth.call(null,vec__19804_19817,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_19818__$1),"\": ",v_19819__$1);

var G__19820 = seq__19800_19813;
var G__19821 = chunk__19801_19814;
var G__19822 = count__19802_19815;
var G__19823 = (i__19803_19816 + (1));
seq__19800_19813 = G__19820;
chunk__19801_19814 = G__19821;
count__19802_19815 = G__19822;
i__19803_19816 = G__19823;
continue;
} else {
var temp__4425__auto___19824__$1 = cljs.core.seq.call(null,seq__19800_19813);
if(temp__4425__auto___19824__$1){
var seq__19800_19825__$1 = temp__4425__auto___19824__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19800_19825__$1)){
var c__17655__auto___19826 = cljs.core.chunk_first.call(null,seq__19800_19825__$1);
var G__19827 = cljs.core.chunk_rest.call(null,seq__19800_19825__$1);
var G__19828 = c__17655__auto___19826;
var G__19829 = cljs.core.count.call(null,c__17655__auto___19826);
var G__19830 = (0);
seq__19800_19813 = G__19827;
chunk__19801_19814 = G__19828;
count__19802_19815 = G__19829;
i__19803_19816 = G__19830;
continue;
} else {
var vec__19805_19831 = cljs.core.first.call(null,seq__19800_19825__$1);
var k_19832__$1 = cljs.core.nth.call(null,vec__19805_19831,(0),null);
var v_19833__$1 = cljs.core.nth.call(null,vec__19805_19831,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_19832__$1),"\": ",v_19833__$1);

var G__19834 = cljs.core.next.call(null,seq__19800_19825__$1);
var G__19835 = null;
var G__19836 = (0);
var G__19837 = (0);
seq__19800_19813 = G__19834;
chunk__19801_19814 = G__19835;
count__19802_19815 = G__19836;
i__19803_19816 = G__19837;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__19838){
var map__19839 = p__19838;
var map__19839__$1 = ((((!((map__19839 == null)))?((((map__19839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19839):map__19839);
var form = cljs.core.get.call(null,map__19839__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__19839__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__19841){
var map__19844 = p__19841;
var map__19844__$1 = ((((!((map__19844 == null)))?((((map__19844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19844):map__19844);
var op = cljs.core.get.call(null,map__19844__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__19844__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__16840__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__16840__auto__){
var and__16840__auto____$1 = form;
if(cljs.core.truth_(and__16840__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__16840__auto____$1;
}
} else {
return and__16840__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__19846){
var map__19849 = p__19846;
var map__19849__$1 = ((((!((map__19849 == null)))?((((map__19849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19849):map__19849);
var op = cljs.core.get.call(null,map__19849__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__19849__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__16852__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__19851){
var map__19852 = p__19851;
var map__19852__$1 = ((((!((map__19852 == null)))?((((map__19852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19852):map__19852);
var test = cljs.core.get.call(null,map__19852__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__19852__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__19852__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__19852__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__19852__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__16852__auto__ = unchecked;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__19854){
var map__19855 = p__19854;
var map__19855__$1 = ((((!((map__19855 == null)))?((((map__19855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19855):map__19855);
var v = cljs.core.get.call(null,map__19855__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__19855__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__19855__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__19855__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__19855__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__19857_19871 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__19858_19872 = null;
var count__19859_19873 = (0);
var i__19860_19874 = (0);
while(true){
if((i__19860_19874 < count__19859_19873)){
var vec__19861_19875 = cljs.core._nth.call(null,chunk__19858_19872,i__19860_19874);
var ts_19876 = cljs.core.nth.call(null,vec__19861_19875,(0),null);
var then_19877 = cljs.core.nth.call(null,vec__19861_19875,(1),null);
var seq__19862_19878 = cljs.core.seq.call(null,ts_19876);
var chunk__19863_19879 = null;
var count__19864_19880 = (0);
var i__19865_19881 = (0);
while(true){
if((i__19865_19881 < count__19864_19880)){
var test_19882 = cljs.core._nth.call(null,chunk__19863_19879,i__19865_19881);
cljs.compiler.emitln.call(null,"case ",test_19882,":");

var G__19883 = seq__19862_19878;
var G__19884 = chunk__19863_19879;
var G__19885 = count__19864_19880;
var G__19886 = (i__19865_19881 + (1));
seq__19862_19878 = G__19883;
chunk__19863_19879 = G__19884;
count__19864_19880 = G__19885;
i__19865_19881 = G__19886;
continue;
} else {
var temp__4425__auto___19887 = cljs.core.seq.call(null,seq__19862_19878);
if(temp__4425__auto___19887){
var seq__19862_19888__$1 = temp__4425__auto___19887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19862_19888__$1)){
var c__17655__auto___19889 = cljs.core.chunk_first.call(null,seq__19862_19888__$1);
var G__19890 = cljs.core.chunk_rest.call(null,seq__19862_19888__$1);
var G__19891 = c__17655__auto___19889;
var G__19892 = cljs.core.count.call(null,c__17655__auto___19889);
var G__19893 = (0);
seq__19862_19878 = G__19890;
chunk__19863_19879 = G__19891;
count__19864_19880 = G__19892;
i__19865_19881 = G__19893;
continue;
} else {
var test_19894 = cljs.core.first.call(null,seq__19862_19888__$1);
cljs.compiler.emitln.call(null,"case ",test_19894,":");

var G__19895 = cljs.core.next.call(null,seq__19862_19888__$1);
var G__19896 = null;
var G__19897 = (0);
var G__19898 = (0);
seq__19862_19878 = G__19895;
chunk__19863_19879 = G__19896;
count__19864_19880 = G__19897;
i__19865_19881 = G__19898;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_19877);
} else {
cljs.compiler.emitln.call(null,then_19877);
}

cljs.compiler.emitln.call(null,"break;");

var G__19899 = seq__19857_19871;
var G__19900 = chunk__19858_19872;
var G__19901 = count__19859_19873;
var G__19902 = (i__19860_19874 + (1));
seq__19857_19871 = G__19899;
chunk__19858_19872 = G__19900;
count__19859_19873 = G__19901;
i__19860_19874 = G__19902;
continue;
} else {
var temp__4425__auto___19903 = cljs.core.seq.call(null,seq__19857_19871);
if(temp__4425__auto___19903){
var seq__19857_19904__$1 = temp__4425__auto___19903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19857_19904__$1)){
var c__17655__auto___19905 = cljs.core.chunk_first.call(null,seq__19857_19904__$1);
var G__19906 = cljs.core.chunk_rest.call(null,seq__19857_19904__$1);
var G__19907 = c__17655__auto___19905;
var G__19908 = cljs.core.count.call(null,c__17655__auto___19905);
var G__19909 = (0);
seq__19857_19871 = G__19906;
chunk__19858_19872 = G__19907;
count__19859_19873 = G__19908;
i__19860_19874 = G__19909;
continue;
} else {
var vec__19866_19910 = cljs.core.first.call(null,seq__19857_19904__$1);
var ts_19911 = cljs.core.nth.call(null,vec__19866_19910,(0),null);
var then_19912 = cljs.core.nth.call(null,vec__19866_19910,(1),null);
var seq__19867_19913 = cljs.core.seq.call(null,ts_19911);
var chunk__19868_19914 = null;
var count__19869_19915 = (0);
var i__19870_19916 = (0);
while(true){
if((i__19870_19916 < count__19869_19915)){
var test_19917 = cljs.core._nth.call(null,chunk__19868_19914,i__19870_19916);
cljs.compiler.emitln.call(null,"case ",test_19917,":");

var G__19918 = seq__19867_19913;
var G__19919 = chunk__19868_19914;
var G__19920 = count__19869_19915;
var G__19921 = (i__19870_19916 + (1));
seq__19867_19913 = G__19918;
chunk__19868_19914 = G__19919;
count__19869_19915 = G__19920;
i__19870_19916 = G__19921;
continue;
} else {
var temp__4425__auto___19922__$1 = cljs.core.seq.call(null,seq__19867_19913);
if(temp__4425__auto___19922__$1){
var seq__19867_19923__$1 = temp__4425__auto___19922__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19867_19923__$1)){
var c__17655__auto___19924 = cljs.core.chunk_first.call(null,seq__19867_19923__$1);
var G__19925 = cljs.core.chunk_rest.call(null,seq__19867_19923__$1);
var G__19926 = c__17655__auto___19924;
var G__19927 = cljs.core.count.call(null,c__17655__auto___19924);
var G__19928 = (0);
seq__19867_19913 = G__19925;
chunk__19868_19914 = G__19926;
count__19869_19915 = G__19927;
i__19870_19916 = G__19928;
continue;
} else {
var test_19929 = cljs.core.first.call(null,seq__19867_19923__$1);
cljs.compiler.emitln.call(null,"case ",test_19929,":");

var G__19930 = cljs.core.next.call(null,seq__19867_19923__$1);
var G__19931 = null;
var G__19932 = (0);
var G__19933 = (0);
seq__19867_19913 = G__19930;
chunk__19868_19914 = G__19931;
count__19869_19915 = G__19932;
i__19870_19916 = G__19933;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_19912);
} else {
cljs.compiler.emitln.call(null,then_19912);
}

cljs.compiler.emitln.call(null,"break;");

var G__19934 = cljs.core.next.call(null,seq__19857_19904__$1);
var G__19935 = null;
var G__19936 = (0);
var G__19937 = (0);
seq__19857_19871 = G__19934;
chunk__19858_19872 = G__19935;
count__19859_19873 = G__19936;
i__19860_19874 = G__19937;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__19938){
var map__19939 = p__19938;
var map__19939__$1 = ((((!((map__19939 == null)))?((((map__19939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19939):map__19939);
var throw$ = cljs.core.get.call(null,map__19939__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__19939__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__19944 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__19944,(0),null);
var rstr = cljs.core.nth.call(null,vec__19944,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__19944,fstr,rstr,ret_t,axstr){
return (function (p1__19941_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__19941_SHARP_);
});})(idx,vec__19944,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__19945 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__19945__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__19945),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__19945);
return G__19945__$1;
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
return (function (p1__19946_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__19946_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__19949 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__19949,(0),null);
var ts = cljs.core.nth.call(null,vec__19949,(1),null);
var n = cljs.core.nth.call(null,vec__19949,(2),null);
var xs = cljs.core.nthnext.call(null,vec__19949,(3));
if(cljs.core.truth_((function (){var and__16840__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__16840__auto__){
var and__16840__auto____$1 = ts;
if(cljs.core.truth_(and__16840__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__16840__auto____$1;
}
} else {
return and__16840__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__19950 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__19950,(0),null);
var ts = cljs.core.nth.call(null,vec__19950,(1),null);
var xs = cljs.core.nthnext.call(null,vec__19950,(2));
if(cljs.core.truth_((function (){var and__16840__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__16840__auto__){
var and__16840__auto____$1 = ts;
if(cljs.core.truth_(and__16840__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__16840__auto____$1;
}
} else {
return and__16840__auto__;
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
var args19952 = [];
var len__17910__auto___19979 = arguments.length;
var i__17911__auto___19980 = (0);
while(true){
if((i__17911__auto___19980 < len__17910__auto___19979)){
args19952.push((arguments[i__17911__auto___19980]));

var G__19981 = (i__17911__auto___19980 + (1));
i__17911__auto___19980 = G__19981;
continue;
} else {
}
break;
}

var G__19954 = args19952.length;
switch (G__19954) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19952.length)].join('')));

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
var vec__19970 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__19951_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__19951_SHARP_);
} else {
return p1__19951_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__19970,(0),null);
var ys = cljs.core.nthnext.call(null,vec__19970,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__19971 = cljs.core.seq.call(null,ys);
var chunk__19972 = null;
var count__19973 = (0);
var i__19974 = (0);
while(true){
if((i__19974 < count__19973)){
var next_line = cljs.core._nth.call(null,chunk__19972,i__19974);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__19983 = seq__19971;
var G__19984 = chunk__19972;
var G__19985 = count__19973;
var G__19986 = (i__19974 + (1));
seq__19971 = G__19983;
chunk__19972 = G__19984;
count__19973 = G__19985;
i__19974 = G__19986;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19971);
if(temp__4425__auto__){
var seq__19971__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19971__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__19971__$1);
var G__19987 = cljs.core.chunk_rest.call(null,seq__19971__$1);
var G__19988 = c__17655__auto__;
var G__19989 = cljs.core.count.call(null,c__17655__auto__);
var G__19990 = (0);
seq__19971 = G__19987;
chunk__19972 = G__19988;
count__19973 = G__19989;
i__19974 = G__19990;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__19971__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__19991 = cljs.core.next.call(null,seq__19971__$1);
var G__19992 = null;
var G__19993 = (0);
var G__19994 = (0);
seq__19971 = G__19991;
chunk__19972 = G__19992;
count__19973 = G__19993;
i__19974 = G__19994;
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

var seq__19975_19995 = cljs.core.seq.call(null,docs__$2);
var chunk__19976_19996 = null;
var count__19977_19997 = (0);
var i__19978_19998 = (0);
while(true){
if((i__19978_19998 < count__19977_19997)){
var e_19999 = cljs.core._nth.call(null,chunk__19976_19996,i__19978_19998);
if(cljs.core.truth_(e_19999)){
print_comment_lines.call(null,e_19999);
} else {
}

var G__20000 = seq__19975_19995;
var G__20001 = chunk__19976_19996;
var G__20002 = count__19977_19997;
var G__20003 = (i__19978_19998 + (1));
seq__19975_19995 = G__20000;
chunk__19976_19996 = G__20001;
count__19977_19997 = G__20002;
i__19978_19998 = G__20003;
continue;
} else {
var temp__4425__auto___20004 = cljs.core.seq.call(null,seq__19975_19995);
if(temp__4425__auto___20004){
var seq__19975_20005__$1 = temp__4425__auto___20004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19975_20005__$1)){
var c__17655__auto___20006 = cljs.core.chunk_first.call(null,seq__19975_20005__$1);
var G__20007 = cljs.core.chunk_rest.call(null,seq__19975_20005__$1);
var G__20008 = c__17655__auto___20006;
var G__20009 = cljs.core.count.call(null,c__17655__auto___20006);
var G__20010 = (0);
seq__19975_19995 = G__20007;
chunk__19976_19996 = G__20008;
count__19977_19997 = G__20009;
i__19978_19998 = G__20010;
continue;
} else {
var e_20011 = cljs.core.first.call(null,seq__19975_20005__$1);
if(cljs.core.truth_(e_20011)){
print_comment_lines.call(null,e_20011);
} else {
}

var G__20012 = cljs.core.next.call(null,seq__19975_20005__$1);
var G__20013 = null;
var G__20014 = (0);
var G__20015 = (0);
seq__19975_19995 = G__20012;
chunk__19976_19996 = G__20013;
count__19977_19997 = G__20014;
i__19978_19998 = G__20015;
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
var and__16840__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__20017_SHARP_){
return goog.string.startsWith(p1__20017_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__16840__auto__)){
var and__16840__auto____$1 = opts;
if(cljs.core.truth_(and__16840__auto____$1)){
var and__16840__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__16840__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__16840__auto____$2;
}
} else {
return and__16840__auto____$1;
}
} else {
return and__16840__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__20018){
var map__20019 = p__20018;
var map__20019__$1 = ((((!((map__20019 == null)))?((((map__20019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20019):map__20019);
var name = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__20019__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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

if(cljs.core.truth_((function (){var and__16840__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__16840__auto__)){
return test;
} else {
return and__16840__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__20021){
var map__20038 = p__20021;
var map__20038__$1 = ((((!((map__20038 == null)))?((((map__20038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20038):map__20038);
var name = cljs.core.get.call(null,map__20038__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__20038__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__20038__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__20040_20054 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__20041_20055 = null;
var count__20042_20056 = (0);
var i__20043_20057 = (0);
while(true){
if((i__20043_20057 < count__20042_20056)){
var vec__20044_20058 = cljs.core._nth.call(null,chunk__20041_20055,i__20043_20057);
var i_20059 = cljs.core.nth.call(null,vec__20044_20058,(0),null);
var param_20060 = cljs.core.nth.call(null,vec__20044_20058,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_20060);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__20061 = seq__20040_20054;
var G__20062 = chunk__20041_20055;
var G__20063 = count__20042_20056;
var G__20064 = (i__20043_20057 + (1));
seq__20040_20054 = G__20061;
chunk__20041_20055 = G__20062;
count__20042_20056 = G__20063;
i__20043_20057 = G__20064;
continue;
} else {
var temp__4425__auto___20065 = cljs.core.seq.call(null,seq__20040_20054);
if(temp__4425__auto___20065){
var seq__20040_20066__$1 = temp__4425__auto___20065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20040_20066__$1)){
var c__17655__auto___20067 = cljs.core.chunk_first.call(null,seq__20040_20066__$1);
var G__20068 = cljs.core.chunk_rest.call(null,seq__20040_20066__$1);
var G__20069 = c__17655__auto___20067;
var G__20070 = cljs.core.count.call(null,c__17655__auto___20067);
var G__20071 = (0);
seq__20040_20054 = G__20068;
chunk__20041_20055 = G__20069;
count__20042_20056 = G__20070;
i__20043_20057 = G__20071;
continue;
} else {
var vec__20045_20072 = cljs.core.first.call(null,seq__20040_20066__$1);
var i_20073 = cljs.core.nth.call(null,vec__20045_20072,(0),null);
var param_20074 = cljs.core.nth.call(null,vec__20045_20072,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_20074);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__20075 = cljs.core.next.call(null,seq__20040_20066__$1);
var G__20076 = null;
var G__20077 = (0);
var G__20078 = (0);
seq__20040_20054 = G__20075;
chunk__20041_20055 = G__20076;
count__20042_20056 = G__20077;
i__20043_20057 = G__20078;
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

var seq__20046_20079 = cljs.core.seq.call(null,params);
var chunk__20047_20080 = null;
var count__20048_20081 = (0);
var i__20049_20082 = (0);
while(true){
if((i__20049_20082 < count__20048_20081)){
var param_20083 = cljs.core._nth.call(null,chunk__20047_20080,i__20049_20082);
cljs.compiler.emit.call(null,param_20083);

if(cljs.core._EQ_.call(null,param_20083,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20084 = seq__20046_20079;
var G__20085 = chunk__20047_20080;
var G__20086 = count__20048_20081;
var G__20087 = (i__20049_20082 + (1));
seq__20046_20079 = G__20084;
chunk__20047_20080 = G__20085;
count__20048_20081 = G__20086;
i__20049_20082 = G__20087;
continue;
} else {
var temp__4425__auto___20088 = cljs.core.seq.call(null,seq__20046_20079);
if(temp__4425__auto___20088){
var seq__20046_20089__$1 = temp__4425__auto___20088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20046_20089__$1)){
var c__17655__auto___20090 = cljs.core.chunk_first.call(null,seq__20046_20089__$1);
var G__20091 = cljs.core.chunk_rest.call(null,seq__20046_20089__$1);
var G__20092 = c__17655__auto___20090;
var G__20093 = cljs.core.count.call(null,c__17655__auto___20090);
var G__20094 = (0);
seq__20046_20079 = G__20091;
chunk__20047_20080 = G__20092;
count__20048_20081 = G__20093;
i__20049_20082 = G__20094;
continue;
} else {
var param_20095 = cljs.core.first.call(null,seq__20046_20089__$1);
cljs.compiler.emit.call(null,param_20095);

if(cljs.core._EQ_.call(null,param_20095,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20096 = cljs.core.next.call(null,seq__20046_20089__$1);
var G__20097 = null;
var G__20098 = (0);
var G__20099 = (0);
seq__20046_20079 = G__20096;
chunk__20047_20080 = G__20097;
count__20048_20081 = G__20098;
i__20049_20082 = G__20099;
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

var seq__20050_20100 = cljs.core.seq.call(null,params);
var chunk__20051_20101 = null;
var count__20052_20102 = (0);
var i__20053_20103 = (0);
while(true){
if((i__20053_20103 < count__20052_20102)){
var param_20104 = cljs.core._nth.call(null,chunk__20051_20101,i__20053_20103);
cljs.compiler.emit.call(null,param_20104);

if(cljs.core._EQ_.call(null,param_20104,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20105 = seq__20050_20100;
var G__20106 = chunk__20051_20101;
var G__20107 = count__20052_20102;
var G__20108 = (i__20053_20103 + (1));
seq__20050_20100 = G__20105;
chunk__20051_20101 = G__20106;
count__20052_20102 = G__20107;
i__20053_20103 = G__20108;
continue;
} else {
var temp__4425__auto___20109 = cljs.core.seq.call(null,seq__20050_20100);
if(temp__4425__auto___20109){
var seq__20050_20110__$1 = temp__4425__auto___20109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20050_20110__$1)){
var c__17655__auto___20111 = cljs.core.chunk_first.call(null,seq__20050_20110__$1);
var G__20112 = cljs.core.chunk_rest.call(null,seq__20050_20110__$1);
var G__20113 = c__17655__auto___20111;
var G__20114 = cljs.core.count.call(null,c__17655__auto___20111);
var G__20115 = (0);
seq__20050_20100 = G__20112;
chunk__20051_20101 = G__20113;
count__20052_20102 = G__20114;
i__20053_20103 = G__20115;
continue;
} else {
var param_20116 = cljs.core.first.call(null,seq__20050_20110__$1);
cljs.compiler.emit.call(null,param_20116);

if(cljs.core._EQ_.call(null,param_20116,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20117 = cljs.core.next.call(null,seq__20050_20110__$1);
var G__20118 = null;
var G__20119 = (0);
var G__20120 = (0);
seq__20050_20100 = G__20117;
chunk__20051_20101 = G__20118;
count__20052_20102 = G__20119;
i__20053_20103 = G__20120;
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
var seq__20125 = cljs.core.seq.call(null,params);
var chunk__20126 = null;
var count__20127 = (0);
var i__20128 = (0);
while(true){
if((i__20128 < count__20127)){
var param = cljs.core._nth.call(null,chunk__20126,i__20128);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20129 = seq__20125;
var G__20130 = chunk__20126;
var G__20131 = count__20127;
var G__20132 = (i__20128 + (1));
seq__20125 = G__20129;
chunk__20126 = G__20130;
count__20127 = G__20131;
i__20128 = G__20132;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20125);
if(temp__4425__auto__){
var seq__20125__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20125__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__20125__$1);
var G__20133 = cljs.core.chunk_rest.call(null,seq__20125__$1);
var G__20134 = c__17655__auto__;
var G__20135 = cljs.core.count.call(null,c__17655__auto__);
var G__20136 = (0);
seq__20125 = G__20133;
chunk__20126 = G__20134;
count__20127 = G__20135;
i__20128 = G__20136;
continue;
} else {
var param = cljs.core.first.call(null,seq__20125__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20137 = cljs.core.next.call(null,seq__20125__$1);
var G__20138 = null;
var G__20139 = (0);
var G__20140 = (0);
seq__20125 = G__20137;
chunk__20126 = G__20138;
count__20127 = G__20139;
i__20128 = G__20140;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__20141){
var map__20144 = p__20141;
var map__20144__$1 = ((((!((map__20144 == null)))?((((map__20144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20144):map__20144);
var type = cljs.core.get.call(null,map__20144__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__20144__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__20144__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__20144__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__20144__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20144__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__20144__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__20144__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__20146){
var map__20157 = p__20146;
var map__20157__$1 = ((((!((map__20157 == null)))?((((map__20157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20157):map__20157);
var f = map__20157__$1;
var type = cljs.core.get.call(null,map__20157__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__20157__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__20157__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__20157__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__20157__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20157__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__20157__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__20157__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_20167__$1 = (function (){var or__16852__auto__ = name;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_20168 = cljs.compiler.munge.call(null,name_20167__$1);
var delegate_name_20169 = [cljs.core.str(mname_20168),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_20169," = function (");

var seq__20159_20170 = cljs.core.seq.call(null,params);
var chunk__20160_20171 = null;
var count__20161_20172 = (0);
var i__20162_20173 = (0);
while(true){
if((i__20162_20173 < count__20161_20172)){
var param_20174 = cljs.core._nth.call(null,chunk__20160_20171,i__20162_20173);
cljs.compiler.emit.call(null,param_20174);

if(cljs.core._EQ_.call(null,param_20174,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20175 = seq__20159_20170;
var G__20176 = chunk__20160_20171;
var G__20177 = count__20161_20172;
var G__20178 = (i__20162_20173 + (1));
seq__20159_20170 = G__20175;
chunk__20160_20171 = G__20176;
count__20161_20172 = G__20177;
i__20162_20173 = G__20178;
continue;
} else {
var temp__4425__auto___20179 = cljs.core.seq.call(null,seq__20159_20170);
if(temp__4425__auto___20179){
var seq__20159_20180__$1 = temp__4425__auto___20179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20159_20180__$1)){
var c__17655__auto___20181 = cljs.core.chunk_first.call(null,seq__20159_20180__$1);
var G__20182 = cljs.core.chunk_rest.call(null,seq__20159_20180__$1);
var G__20183 = c__17655__auto___20181;
var G__20184 = cljs.core.count.call(null,c__17655__auto___20181);
var G__20185 = (0);
seq__20159_20170 = G__20182;
chunk__20160_20171 = G__20183;
count__20161_20172 = G__20184;
i__20162_20173 = G__20185;
continue;
} else {
var param_20186 = cljs.core.first.call(null,seq__20159_20180__$1);
cljs.compiler.emit.call(null,param_20186);

if(cljs.core._EQ_.call(null,param_20186,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20187 = cljs.core.next.call(null,seq__20159_20180__$1);
var G__20188 = null;
var G__20189 = (0);
var G__20190 = (0);
seq__20159_20170 = G__20187;
chunk__20160_20171 = G__20188;
count__20161_20172 = G__20189;
i__20162_20173 = G__20190;
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

cljs.compiler.emitln.call(null,"var ",mname_20168," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_20191 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_20191,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_20169,".call(this,");

var seq__20163_20192 = cljs.core.seq.call(null,params);
var chunk__20164_20193 = null;
var count__20165_20194 = (0);
var i__20166_20195 = (0);
while(true){
if((i__20166_20195 < count__20165_20194)){
var param_20196 = cljs.core._nth.call(null,chunk__20164_20193,i__20166_20195);
cljs.compiler.emit.call(null,param_20196);

if(cljs.core._EQ_.call(null,param_20196,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20197 = seq__20163_20192;
var G__20198 = chunk__20164_20193;
var G__20199 = count__20165_20194;
var G__20200 = (i__20166_20195 + (1));
seq__20163_20192 = G__20197;
chunk__20164_20193 = G__20198;
count__20165_20194 = G__20199;
i__20166_20195 = G__20200;
continue;
} else {
var temp__4425__auto___20201 = cljs.core.seq.call(null,seq__20163_20192);
if(temp__4425__auto___20201){
var seq__20163_20202__$1 = temp__4425__auto___20201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20163_20202__$1)){
var c__17655__auto___20203 = cljs.core.chunk_first.call(null,seq__20163_20202__$1);
var G__20204 = cljs.core.chunk_rest.call(null,seq__20163_20202__$1);
var G__20205 = c__17655__auto___20203;
var G__20206 = cljs.core.count.call(null,c__17655__auto___20203);
var G__20207 = (0);
seq__20163_20192 = G__20204;
chunk__20164_20193 = G__20205;
count__20165_20194 = G__20206;
i__20166_20195 = G__20207;
continue;
} else {
var param_20208 = cljs.core.first.call(null,seq__20163_20202__$1);
cljs.compiler.emit.call(null,param_20208);

if(cljs.core._EQ_.call(null,param_20208,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__20209 = cljs.core.next.call(null,seq__20163_20202__$1);
var G__20210 = null;
var G__20211 = (0);
var G__20212 = (0);
seq__20163_20192 = G__20209;
chunk__20164_20193 = G__20210;
count__20165_20194 = G__20211;
i__20166_20195 = G__20212;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_20168,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_20168,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_20167__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_20168,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_20169,";");

cljs.compiler.emitln.call(null,"return ",mname_20168,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__20216){
var map__20217 = p__20216;
var map__20217__$1 = ((((!((map__20217 == null)))?((((map__20217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20217):map__20217);
var name = cljs.core.get.call(null,map__20217__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__20217__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__20217__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__20217__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__20217__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__20217__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__20217__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__20217,map__20217__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20213_SHARP_){
var and__16840__auto__ = p1__20213_SHARP_;
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__20213_SHARP_));
} else {
return and__16840__auto__;
}
});})(map__20217,map__20217__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_20238__$1 = (function (){var or__16852__auto__ = name;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_20239 = cljs.compiler.munge.call(null,name_20238__$1);
var maxparams_20240 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_20241 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_20238__$1,mname_20239,maxparams_20240,loop_locals,map__20217,map__20217__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_20239),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_20238__$1,mname_20239,maxparams_20240,loop_locals,map__20217,map__20217__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_20242 = cljs.core.sort_by.call(null,((function (name_20238__$1,mname_20239,maxparams_20240,mmap_20241,loop_locals,map__20217,map__20217__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20214_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__20214_SHARP_)));
});})(name_20238__$1,mname_20239,maxparams_20240,mmap_20241,loop_locals,map__20217,map__20217__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_20241));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_20239," = null;");

var seq__20219_20243 = cljs.core.seq.call(null,ms_20242);
var chunk__20220_20244 = null;
var count__20221_20245 = (0);
var i__20222_20246 = (0);
while(true){
if((i__20222_20246 < count__20221_20245)){
var vec__20223_20247 = cljs.core._nth.call(null,chunk__20220_20244,i__20222_20246);
var n_20248 = cljs.core.nth.call(null,vec__20223_20247,(0),null);
var meth_20249 = cljs.core.nth.call(null,vec__20223_20247,(1),null);
cljs.compiler.emits.call(null,"var ",n_20248," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20249))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_20249);
} else {
cljs.compiler.emit_fn_method.call(null,meth_20249);
}

cljs.compiler.emitln.call(null,";");

var G__20250 = seq__20219_20243;
var G__20251 = chunk__20220_20244;
var G__20252 = count__20221_20245;
var G__20253 = (i__20222_20246 + (1));
seq__20219_20243 = G__20250;
chunk__20220_20244 = G__20251;
count__20221_20245 = G__20252;
i__20222_20246 = G__20253;
continue;
} else {
var temp__4425__auto___20254 = cljs.core.seq.call(null,seq__20219_20243);
if(temp__4425__auto___20254){
var seq__20219_20255__$1 = temp__4425__auto___20254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20219_20255__$1)){
var c__17655__auto___20256 = cljs.core.chunk_first.call(null,seq__20219_20255__$1);
var G__20257 = cljs.core.chunk_rest.call(null,seq__20219_20255__$1);
var G__20258 = c__17655__auto___20256;
var G__20259 = cljs.core.count.call(null,c__17655__auto___20256);
var G__20260 = (0);
seq__20219_20243 = G__20257;
chunk__20220_20244 = G__20258;
count__20221_20245 = G__20259;
i__20222_20246 = G__20260;
continue;
} else {
var vec__20224_20261 = cljs.core.first.call(null,seq__20219_20255__$1);
var n_20262 = cljs.core.nth.call(null,vec__20224_20261,(0),null);
var meth_20263 = cljs.core.nth.call(null,vec__20224_20261,(1),null);
cljs.compiler.emits.call(null,"var ",n_20262," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20263))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_20263);
} else {
cljs.compiler.emit_fn_method.call(null,meth_20263);
}

cljs.compiler.emitln.call(null,";");

var G__20264 = cljs.core.next.call(null,seq__20219_20255__$1);
var G__20265 = null;
var G__20266 = (0);
var G__20267 = (0);
seq__20219_20243 = G__20264;
chunk__20220_20244 = G__20265;
count__20221_20245 = G__20266;
i__20222_20246 = G__20267;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_20239," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_20240),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_20240)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_20240));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__20225_20268 = cljs.core.seq.call(null,ms_20242);
var chunk__20226_20269 = null;
var count__20227_20270 = (0);
var i__20228_20271 = (0);
while(true){
if((i__20228_20271 < count__20227_20270)){
var vec__20229_20272 = cljs.core._nth.call(null,chunk__20226_20269,i__20228_20271);
var n_20273 = cljs.core.nth.call(null,vec__20229_20272,(0),null);
var meth_20274 = cljs.core.nth.call(null,vec__20229_20272,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20274))){
cljs.compiler.emitln.call(null,"default:");

var restarg_20275 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_20275," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_20276 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_20275," = new cljs.core.IndexedSeq(",a_20276,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_20273,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_20240)),(((cljs.core.count.call(null,maxparams_20240) > (1)))?", ":null),restarg_20275,");");
} else {
var pcnt_20277 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20274));
cljs.compiler.emitln.call(null,"case ",pcnt_20277,":");

cljs.compiler.emitln.call(null,"return ",n_20273,".call(this",(((pcnt_20277 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_20277,maxparams_20240))),",")),");");
}

var G__20278 = seq__20225_20268;
var G__20279 = chunk__20226_20269;
var G__20280 = count__20227_20270;
var G__20281 = (i__20228_20271 + (1));
seq__20225_20268 = G__20278;
chunk__20226_20269 = G__20279;
count__20227_20270 = G__20280;
i__20228_20271 = G__20281;
continue;
} else {
var temp__4425__auto___20282 = cljs.core.seq.call(null,seq__20225_20268);
if(temp__4425__auto___20282){
var seq__20225_20283__$1 = temp__4425__auto___20282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20225_20283__$1)){
var c__17655__auto___20284 = cljs.core.chunk_first.call(null,seq__20225_20283__$1);
var G__20285 = cljs.core.chunk_rest.call(null,seq__20225_20283__$1);
var G__20286 = c__17655__auto___20284;
var G__20287 = cljs.core.count.call(null,c__17655__auto___20284);
var G__20288 = (0);
seq__20225_20268 = G__20285;
chunk__20226_20269 = G__20286;
count__20227_20270 = G__20287;
i__20228_20271 = G__20288;
continue;
} else {
var vec__20230_20289 = cljs.core.first.call(null,seq__20225_20283__$1);
var n_20290 = cljs.core.nth.call(null,vec__20230_20289,(0),null);
var meth_20291 = cljs.core.nth.call(null,vec__20230_20289,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20291))){
cljs.compiler.emitln.call(null,"default:");

var restarg_20292 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_20292," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_20293 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_20292," = new cljs.core.IndexedSeq(",a_20293,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_20290,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_20240)),(((cljs.core.count.call(null,maxparams_20240) > (1)))?", ":null),restarg_20292,");");
} else {
var pcnt_20294 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20291));
cljs.compiler.emitln.call(null,"case ",pcnt_20294,":");

cljs.compiler.emitln.call(null,"return ",n_20290,".call(this",(((pcnt_20294 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_20294,maxparams_20240))),",")),");");
}

var G__20295 = cljs.core.next.call(null,seq__20225_20283__$1);
var G__20296 = null;
var G__20297 = (0);
var G__20298 = (0);
seq__20225_20268 = G__20295;
chunk__20226_20269 = G__20296;
count__20227_20270 = G__20297;
i__20228_20271 = G__20298;
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
cljs.compiler.emitln.call(null,mname_20239,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_20239,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_20238__$1,mname_20239,maxparams_20240,mmap_20241,ms_20242,loop_locals,map__20217,map__20217__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__20215_SHARP_){
var vec__20231 = p1__20215_SHARP_;
var n = cljs.core.nth.call(null,vec__20231,(0),null);
var m = cljs.core.nth.call(null,vec__20231,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_20238__$1,mname_20239,maxparams_20240,mmap_20241,ms_20242,loop_locals,map__20217,map__20217__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_20242),".cljs$lang$applyTo;");
} else {
}

var seq__20232_20299 = cljs.core.seq.call(null,ms_20242);
var chunk__20233_20300 = null;
var count__20234_20301 = (0);
var i__20235_20302 = (0);
while(true){
if((i__20235_20302 < count__20234_20301)){
var vec__20236_20303 = cljs.core._nth.call(null,chunk__20233_20300,i__20235_20302);
var n_20304 = cljs.core.nth.call(null,vec__20236_20303,(0),null);
var meth_20305 = cljs.core.nth.call(null,vec__20236_20303,(1),null);
var c_20306 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20305));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20305))){
cljs.compiler.emitln.call(null,mname_20239,".cljs$core$IFn$_invoke$arity$variadic = ",n_20304,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_20239,".cljs$core$IFn$_invoke$arity$",c_20306," = ",n_20304,";");
}

var G__20307 = seq__20232_20299;
var G__20308 = chunk__20233_20300;
var G__20309 = count__20234_20301;
var G__20310 = (i__20235_20302 + (1));
seq__20232_20299 = G__20307;
chunk__20233_20300 = G__20308;
count__20234_20301 = G__20309;
i__20235_20302 = G__20310;
continue;
} else {
var temp__4425__auto___20311 = cljs.core.seq.call(null,seq__20232_20299);
if(temp__4425__auto___20311){
var seq__20232_20312__$1 = temp__4425__auto___20311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20232_20312__$1)){
var c__17655__auto___20313 = cljs.core.chunk_first.call(null,seq__20232_20312__$1);
var G__20314 = cljs.core.chunk_rest.call(null,seq__20232_20312__$1);
var G__20315 = c__17655__auto___20313;
var G__20316 = cljs.core.count.call(null,c__17655__auto___20313);
var G__20317 = (0);
seq__20232_20299 = G__20314;
chunk__20233_20300 = G__20315;
count__20234_20301 = G__20316;
i__20235_20302 = G__20317;
continue;
} else {
var vec__20237_20318 = cljs.core.first.call(null,seq__20232_20312__$1);
var n_20319 = cljs.core.nth.call(null,vec__20237_20318,(0),null);
var meth_20320 = cljs.core.nth.call(null,vec__20237_20318,(1),null);
var c_20321 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_20320));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_20320))){
cljs.compiler.emitln.call(null,mname_20239,".cljs$core$IFn$_invoke$arity$variadic = ",n_20319,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_20239,".cljs$core$IFn$_invoke$arity$",c_20321," = ",n_20319,";");
}

var G__20322 = cljs.core.next.call(null,seq__20232_20312__$1);
var G__20323 = null;
var G__20324 = (0);
var G__20325 = (0);
seq__20232_20299 = G__20322;
chunk__20233_20300 = G__20323;
count__20234_20301 = G__20324;
i__20235_20302 = G__20325;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_20239,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__20326){
var map__20327 = p__20326;
var map__20327__$1 = ((((!((map__20327 == null)))?((((map__20327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20327):map__20327);
var statements = cljs.core.get.call(null,map__20327__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__20327__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__20327__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__16840__auto__ = statements;
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__16840__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__20329_20333 = cljs.core.seq.call(null,statements);
var chunk__20330_20334 = null;
var count__20331_20335 = (0);
var i__20332_20336 = (0);
while(true){
if((i__20332_20336 < count__20331_20335)){
var s_20337 = cljs.core._nth.call(null,chunk__20330_20334,i__20332_20336);
cljs.compiler.emitln.call(null,s_20337);

var G__20338 = seq__20329_20333;
var G__20339 = chunk__20330_20334;
var G__20340 = count__20331_20335;
var G__20341 = (i__20332_20336 + (1));
seq__20329_20333 = G__20338;
chunk__20330_20334 = G__20339;
count__20331_20335 = G__20340;
i__20332_20336 = G__20341;
continue;
} else {
var temp__4425__auto___20342 = cljs.core.seq.call(null,seq__20329_20333);
if(temp__4425__auto___20342){
var seq__20329_20343__$1 = temp__4425__auto___20342;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20329_20343__$1)){
var c__17655__auto___20344 = cljs.core.chunk_first.call(null,seq__20329_20343__$1);
var G__20345 = cljs.core.chunk_rest.call(null,seq__20329_20343__$1);
var G__20346 = c__17655__auto___20344;
var G__20347 = cljs.core.count.call(null,c__17655__auto___20344);
var G__20348 = (0);
seq__20329_20333 = G__20345;
chunk__20330_20334 = G__20346;
count__20331_20335 = G__20347;
i__20332_20336 = G__20348;
continue;
} else {
var s_20349 = cljs.core.first.call(null,seq__20329_20343__$1);
cljs.compiler.emitln.call(null,s_20349);

var G__20350 = cljs.core.next.call(null,seq__20329_20343__$1);
var G__20351 = null;
var G__20352 = (0);
var G__20353 = (0);
seq__20329_20333 = G__20350;
chunk__20330_20334 = G__20351;
count__20331_20335 = G__20352;
i__20332_20336 = G__20353;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__16840__auto__ = statements;
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__16840__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__20354){
var map__20355 = p__20354;
var map__20355__$1 = ((((!((map__20355 == null)))?((((map__20355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20355):map__20355);
var env = cljs.core.get.call(null,map__20355__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__20355__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__20355__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__20355__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__20355__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__16852__auto__ = name;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__20357,is_loop){
var map__20369 = p__20357;
var map__20369__$1 = ((((!((map__20369 == null)))?((((map__20369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20369):map__20369);
var bindings = cljs.core.get.call(null,map__20369__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__20369__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20369__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_20371_20380 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_20371_20380,context,map__20369,map__20369__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_20371_20380,context,map__20369,map__20369__$1,bindings,expr,env))
,bindings):null));

try{var seq__20372_20381 = cljs.core.seq.call(null,bindings);
var chunk__20373_20382 = null;
var count__20374_20383 = (0);
var i__20375_20384 = (0);
while(true){
if((i__20375_20384 < count__20374_20383)){
var map__20376_20385 = cljs.core._nth.call(null,chunk__20373_20382,i__20375_20384);
var map__20376_20386__$1 = ((((!((map__20376_20385 == null)))?((((map__20376_20385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20376_20385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20376_20385):map__20376_20385);
var binding_20387 = map__20376_20386__$1;
var init_20388 = cljs.core.get.call(null,map__20376_20386__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_20387);

cljs.compiler.emitln.call(null," = ",init_20388,";");

var G__20389 = seq__20372_20381;
var G__20390 = chunk__20373_20382;
var G__20391 = count__20374_20383;
var G__20392 = (i__20375_20384 + (1));
seq__20372_20381 = G__20389;
chunk__20373_20382 = G__20390;
count__20374_20383 = G__20391;
i__20375_20384 = G__20392;
continue;
} else {
var temp__4425__auto___20393 = cljs.core.seq.call(null,seq__20372_20381);
if(temp__4425__auto___20393){
var seq__20372_20394__$1 = temp__4425__auto___20393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20372_20394__$1)){
var c__17655__auto___20395 = cljs.core.chunk_first.call(null,seq__20372_20394__$1);
var G__20396 = cljs.core.chunk_rest.call(null,seq__20372_20394__$1);
var G__20397 = c__17655__auto___20395;
var G__20398 = cljs.core.count.call(null,c__17655__auto___20395);
var G__20399 = (0);
seq__20372_20381 = G__20396;
chunk__20373_20382 = G__20397;
count__20374_20383 = G__20398;
i__20375_20384 = G__20399;
continue;
} else {
var map__20378_20400 = cljs.core.first.call(null,seq__20372_20394__$1);
var map__20378_20401__$1 = ((((!((map__20378_20400 == null)))?((((map__20378_20400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20378_20400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20378_20400):map__20378_20400);
var binding_20402 = map__20378_20401__$1;
var init_20403 = cljs.core.get.call(null,map__20378_20401__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_20402);

cljs.compiler.emitln.call(null," = ",init_20403,";");

var G__20404 = cljs.core.next.call(null,seq__20372_20394__$1);
var G__20405 = null;
var G__20406 = (0);
var G__20407 = (0);
seq__20372_20381 = G__20404;
chunk__20373_20382 = G__20405;
count__20374_20383 = G__20406;
i__20375_20384 = G__20407;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_20371_20380;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__20408){
var map__20409 = p__20408;
var map__20409__$1 = ((((!((map__20409 == null)))?((((map__20409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20409):map__20409);
var frame = cljs.core.get.call(null,map__20409__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__20409__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__20409__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__17755__auto___20411 = cljs.core.count.call(null,exprs);
var i_20412 = (0);
while(true){
if((i_20412 < n__17755__auto___20411)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_20412)," = ",exprs.call(null,i_20412),";");

var G__20413 = (i_20412 + (1));
i_20412 = G__20413;
continue;
} else {
}
break;
}

var n__17755__auto___20414 = cljs.core.count.call(null,exprs);
var i_20415 = (0);
while(true){
if((i_20415 < n__17755__auto___20414)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_20415))," = ",temps.call(null,i_20415),";");

var G__20416 = (i_20415 + (1));
i_20415 = G__20416;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__20417){
var map__20418 = p__20417;
var map__20418__$1 = ((((!((map__20418 == null)))?((((map__20418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20418):map__20418);
var bindings = cljs.core.get.call(null,map__20418__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__20418__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__20418__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__20420_20428 = cljs.core.seq.call(null,bindings);
var chunk__20421_20429 = null;
var count__20422_20430 = (0);
var i__20423_20431 = (0);
while(true){
if((i__20423_20431 < count__20422_20430)){
var map__20424_20432 = cljs.core._nth.call(null,chunk__20421_20429,i__20423_20431);
var map__20424_20433__$1 = ((((!((map__20424_20432 == null)))?((((map__20424_20432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20424_20432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20424_20432):map__20424_20432);
var binding_20434 = map__20424_20433__$1;
var init_20435 = cljs.core.get.call(null,map__20424_20433__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_20434)," = ",init_20435,";");

var G__20436 = seq__20420_20428;
var G__20437 = chunk__20421_20429;
var G__20438 = count__20422_20430;
var G__20439 = (i__20423_20431 + (1));
seq__20420_20428 = G__20436;
chunk__20421_20429 = G__20437;
count__20422_20430 = G__20438;
i__20423_20431 = G__20439;
continue;
} else {
var temp__4425__auto___20440 = cljs.core.seq.call(null,seq__20420_20428);
if(temp__4425__auto___20440){
var seq__20420_20441__$1 = temp__4425__auto___20440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20420_20441__$1)){
var c__17655__auto___20442 = cljs.core.chunk_first.call(null,seq__20420_20441__$1);
var G__20443 = cljs.core.chunk_rest.call(null,seq__20420_20441__$1);
var G__20444 = c__17655__auto___20442;
var G__20445 = cljs.core.count.call(null,c__17655__auto___20442);
var G__20446 = (0);
seq__20420_20428 = G__20443;
chunk__20421_20429 = G__20444;
count__20422_20430 = G__20445;
i__20423_20431 = G__20446;
continue;
} else {
var map__20426_20447 = cljs.core.first.call(null,seq__20420_20441__$1);
var map__20426_20448__$1 = ((((!((map__20426_20447 == null)))?((((map__20426_20447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20426_20447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20426_20447):map__20426_20447);
var binding_20449 = map__20426_20448__$1;
var init_20450 = cljs.core.get.call(null,map__20426_20448__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_20449)," = ",init_20450,";");

var G__20451 = cljs.core.next.call(null,seq__20420_20441__$1);
var G__20452 = null;
var G__20453 = (0);
var G__20454 = (0);
seq__20420_20428 = G__20451;
chunk__20421_20429 = G__20452;
count__20422_20430 = G__20453;
i__20423_20431 = G__20454;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__20457){
var map__20458 = p__20457;
var map__20458__$1 = ((((!((map__20458 == null)))?((((map__20458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20458):map__20458);
var expr = map__20458__$1;
var f = cljs.core.get.call(null,map__20458__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__20458__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__20458__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__16840__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__16840__auto__)){
var and__16840__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__16840__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__16840__auto____$1;
}
} else {
return and__16840__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__16840__auto__ = protocol;
if(cljs.core.truth_(and__16840__auto__)){
var and__16840__auto____$1 = tag;
if(cljs.core.truth_(and__16840__auto____$1)){
var or__16852__auto__ = (function (){var and__16840__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__16840__auto____$2)){
var and__16840__auto____$3 = protocol;
if(cljs.core.truth_(and__16840__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__16840__auto____$3;
}
} else {
return and__16840__auto____$2;
}
})();
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
var and__16840__auto____$2 = (function (){var or__16852__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__16852__auto____$1)){
return or__16852__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__16840__auto____$2)){
var or__16852__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__16852__auto____$1){
return or__16852__auto____$1;
} else {
var and__16840__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__16840__auto____$3){
var and__16840__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__16840__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__16840__auto____$4;
}
} else {
return and__16840__auto____$3;
}
}
} else {
return and__16840__auto____$2;
}
}
} else {
return and__16840__auto____$1;
}
} else {
return and__16840__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__16852__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__16852__auto__){
return or__16852__auto__;
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
var vec__20460 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__16840__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__16840__auto__)){
return (arity > mfa);
} else {
return and__16840__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20458,map__20458__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20458,map__20458__$1,expr,f,args,env){
return (function (p1__20455_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__20455_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20458,map__20458__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20458,map__20458__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20458,map__20458__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20458,map__20458__$1,expr,f,args,env){
return (function (p1__20456_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__20456_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20458,map__20458__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__20458,map__20458__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__20460,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__20460,(1),null);
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_20461 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_20461,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_20462 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_20462,args)),(((mfa_20462 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_20462,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__16852__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
var or__16852__auto____$1 = js_QMARK_;
if(or__16852__auto____$1){
return or__16852__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__16840__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__16840__auto__;
}
})())){
var fprop_20463 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_20463," ? ",f__$1,fprop_20463,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__20464){
var map__20465 = p__20464;
var map__20465__$1 = ((((!((map__20465 == null)))?((((map__20465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20465):map__20465);
var ctor = cljs.core.get.call(null,map__20465__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__20465__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__20465__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__20467){
var map__20468 = p__20467;
var map__20468__$1 = ((((!((map__20468 == null)))?((((map__20468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20468):map__20468);
var target = cljs.core.get.call(null,map__20468__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__20468__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__20468__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
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

var seq__20474_20478 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__20475_20479 = null;
var count__20476_20480 = (0);
var i__20477_20481 = (0);
while(true){
if((i__20477_20481 < count__20476_20480)){
var lib_20482 = cljs.core._nth.call(null,chunk__20475_20479,i__20477_20481);
if(cljs.core.truth_((function (){var or__16852__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20482),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20482),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__16852__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20482),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20482),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20482),"');");

}
}

var G__20483 = seq__20474_20478;
var G__20484 = chunk__20475_20479;
var G__20485 = count__20476_20480;
var G__20486 = (i__20477_20481 + (1));
seq__20474_20478 = G__20483;
chunk__20475_20479 = G__20484;
count__20476_20480 = G__20485;
i__20477_20481 = G__20486;
continue;
} else {
var temp__4425__auto___20487 = cljs.core.seq.call(null,seq__20474_20478);
if(temp__4425__auto___20487){
var seq__20474_20488__$1 = temp__4425__auto___20487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20474_20488__$1)){
var c__17655__auto___20489 = cljs.core.chunk_first.call(null,seq__20474_20488__$1);
var G__20490 = cljs.core.chunk_rest.call(null,seq__20474_20488__$1);
var G__20491 = c__17655__auto___20489;
var G__20492 = cljs.core.count.call(null,c__17655__auto___20489);
var G__20493 = (0);
seq__20474_20478 = G__20490;
chunk__20475_20479 = G__20491;
count__20476_20480 = G__20492;
i__20477_20481 = G__20493;
continue;
} else {
var lib_20494 = cljs.core.first.call(null,seq__20474_20488__$1);
if(cljs.core.truth_((function (){var or__16852__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20494),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20494),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__16852__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_20494),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20494),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_20494),"');");

}
}

var G__20495 = cljs.core.next.call(null,seq__20474_20488__$1);
var G__20496 = null;
var G__20497 = (0);
var G__20498 = (0);
seq__20474_20478 = G__20495;
chunk__20475_20479 = G__20496;
count__20476_20480 = G__20497;
i__20477_20481 = G__20498;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__20499){
var map__20500 = p__20499;
var map__20500__$1 = ((((!((map__20500 == null)))?((((map__20500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20500):map__20500);
var name = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__20500__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__20502){
var map__20503 = p__20502;
var map__20503__$1 = ((((!((map__20503 == null)))?((((map__20503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20503):map__20503);
var t = cljs.core.get.call(null,map__20503__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__20503__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__20503__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__20503__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__20503__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__20505_20519 = cljs.core.seq.call(null,protocols);
var chunk__20506_20520 = null;
var count__20507_20521 = (0);
var i__20508_20522 = (0);
while(true){
if((i__20508_20522 < count__20507_20521)){
var protocol_20523 = cljs.core._nth.call(null,chunk__20506_20520,i__20508_20522);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_20523)].join('')),"}");

var G__20524 = seq__20505_20519;
var G__20525 = chunk__20506_20520;
var G__20526 = count__20507_20521;
var G__20527 = (i__20508_20522 + (1));
seq__20505_20519 = G__20524;
chunk__20506_20520 = G__20525;
count__20507_20521 = G__20526;
i__20508_20522 = G__20527;
continue;
} else {
var temp__4425__auto___20528 = cljs.core.seq.call(null,seq__20505_20519);
if(temp__4425__auto___20528){
var seq__20505_20529__$1 = temp__4425__auto___20528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20505_20529__$1)){
var c__17655__auto___20530 = cljs.core.chunk_first.call(null,seq__20505_20529__$1);
var G__20531 = cljs.core.chunk_rest.call(null,seq__20505_20529__$1);
var G__20532 = c__17655__auto___20530;
var G__20533 = cljs.core.count.call(null,c__17655__auto___20530);
var G__20534 = (0);
seq__20505_20519 = G__20531;
chunk__20506_20520 = G__20532;
count__20507_20521 = G__20533;
i__20508_20522 = G__20534;
continue;
} else {
var protocol_20535 = cljs.core.first.call(null,seq__20505_20529__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_20535)].join('')),"}");

var G__20536 = cljs.core.next.call(null,seq__20505_20529__$1);
var G__20537 = null;
var G__20538 = (0);
var G__20539 = (0);
seq__20505_20519 = G__20536;
chunk__20506_20520 = G__20537;
count__20507_20521 = G__20538;
i__20508_20522 = G__20539;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__20509_20540 = cljs.core.seq.call(null,fields__$1);
var chunk__20510_20541 = null;
var count__20511_20542 = (0);
var i__20512_20543 = (0);
while(true){
if((i__20512_20543 < count__20511_20542)){
var fld_20544 = cljs.core._nth.call(null,chunk__20510_20541,i__20512_20543);
cljs.compiler.emitln.call(null,"this.",fld_20544," = ",fld_20544,";");

var G__20545 = seq__20509_20540;
var G__20546 = chunk__20510_20541;
var G__20547 = count__20511_20542;
var G__20548 = (i__20512_20543 + (1));
seq__20509_20540 = G__20545;
chunk__20510_20541 = G__20546;
count__20511_20542 = G__20547;
i__20512_20543 = G__20548;
continue;
} else {
var temp__4425__auto___20549 = cljs.core.seq.call(null,seq__20509_20540);
if(temp__4425__auto___20549){
var seq__20509_20550__$1 = temp__4425__auto___20549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20509_20550__$1)){
var c__17655__auto___20551 = cljs.core.chunk_first.call(null,seq__20509_20550__$1);
var G__20552 = cljs.core.chunk_rest.call(null,seq__20509_20550__$1);
var G__20553 = c__17655__auto___20551;
var G__20554 = cljs.core.count.call(null,c__17655__auto___20551);
var G__20555 = (0);
seq__20509_20540 = G__20552;
chunk__20510_20541 = G__20553;
count__20511_20542 = G__20554;
i__20512_20543 = G__20555;
continue;
} else {
var fld_20556 = cljs.core.first.call(null,seq__20509_20550__$1);
cljs.compiler.emitln.call(null,"this.",fld_20556," = ",fld_20556,";");

var G__20557 = cljs.core.next.call(null,seq__20509_20550__$1);
var G__20558 = null;
var G__20559 = (0);
var G__20560 = (0);
seq__20509_20540 = G__20557;
chunk__20510_20541 = G__20558;
count__20511_20542 = G__20559;
i__20512_20543 = G__20560;
continue;
}
} else {
}
}
break;
}

var seq__20513_20561 = cljs.core.seq.call(null,pmasks);
var chunk__20514_20562 = null;
var count__20515_20563 = (0);
var i__20516_20564 = (0);
while(true){
if((i__20516_20564 < count__20515_20563)){
var vec__20517_20565 = cljs.core._nth.call(null,chunk__20514_20562,i__20516_20564);
var pno_20566 = cljs.core.nth.call(null,vec__20517_20565,(0),null);
var pmask_20567 = cljs.core.nth.call(null,vec__20517_20565,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20566,"$ = ",pmask_20567,";");

var G__20568 = seq__20513_20561;
var G__20569 = chunk__20514_20562;
var G__20570 = count__20515_20563;
var G__20571 = (i__20516_20564 + (1));
seq__20513_20561 = G__20568;
chunk__20514_20562 = G__20569;
count__20515_20563 = G__20570;
i__20516_20564 = G__20571;
continue;
} else {
var temp__4425__auto___20572 = cljs.core.seq.call(null,seq__20513_20561);
if(temp__4425__auto___20572){
var seq__20513_20573__$1 = temp__4425__auto___20572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20513_20573__$1)){
var c__17655__auto___20574 = cljs.core.chunk_first.call(null,seq__20513_20573__$1);
var G__20575 = cljs.core.chunk_rest.call(null,seq__20513_20573__$1);
var G__20576 = c__17655__auto___20574;
var G__20577 = cljs.core.count.call(null,c__17655__auto___20574);
var G__20578 = (0);
seq__20513_20561 = G__20575;
chunk__20514_20562 = G__20576;
count__20515_20563 = G__20577;
i__20516_20564 = G__20578;
continue;
} else {
var vec__20518_20579 = cljs.core.first.call(null,seq__20513_20573__$1);
var pno_20580 = cljs.core.nth.call(null,vec__20518_20579,(0),null);
var pmask_20581 = cljs.core.nth.call(null,vec__20518_20579,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20580,"$ = ",pmask_20581,";");

var G__20582 = cljs.core.next.call(null,seq__20513_20573__$1);
var G__20583 = null;
var G__20584 = (0);
var G__20585 = (0);
seq__20513_20561 = G__20582;
chunk__20514_20562 = G__20583;
count__20515_20563 = G__20584;
i__20516_20564 = G__20585;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__20586){
var map__20587 = p__20586;
var map__20587__$1 = ((((!((map__20587 == null)))?((((map__20587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20587):map__20587);
var t = cljs.core.get.call(null,map__20587__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__20587__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__20587__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__20587__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__20587__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__20589_20603 = cljs.core.seq.call(null,protocols);
var chunk__20590_20604 = null;
var count__20591_20605 = (0);
var i__20592_20606 = (0);
while(true){
if((i__20592_20606 < count__20591_20605)){
var protocol_20607 = cljs.core._nth.call(null,chunk__20590_20604,i__20592_20606);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_20607)].join('')),"}");

var G__20608 = seq__20589_20603;
var G__20609 = chunk__20590_20604;
var G__20610 = count__20591_20605;
var G__20611 = (i__20592_20606 + (1));
seq__20589_20603 = G__20608;
chunk__20590_20604 = G__20609;
count__20591_20605 = G__20610;
i__20592_20606 = G__20611;
continue;
} else {
var temp__4425__auto___20612 = cljs.core.seq.call(null,seq__20589_20603);
if(temp__4425__auto___20612){
var seq__20589_20613__$1 = temp__4425__auto___20612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20589_20613__$1)){
var c__17655__auto___20614 = cljs.core.chunk_first.call(null,seq__20589_20613__$1);
var G__20615 = cljs.core.chunk_rest.call(null,seq__20589_20613__$1);
var G__20616 = c__17655__auto___20614;
var G__20617 = cljs.core.count.call(null,c__17655__auto___20614);
var G__20618 = (0);
seq__20589_20603 = G__20615;
chunk__20590_20604 = G__20616;
count__20591_20605 = G__20617;
i__20592_20606 = G__20618;
continue;
} else {
var protocol_20619 = cljs.core.first.call(null,seq__20589_20613__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_20619)].join('')),"}");

var G__20620 = cljs.core.next.call(null,seq__20589_20613__$1);
var G__20621 = null;
var G__20622 = (0);
var G__20623 = (0);
seq__20589_20603 = G__20620;
chunk__20590_20604 = G__20621;
count__20591_20605 = G__20622;
i__20592_20606 = G__20623;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__20593_20624 = cljs.core.seq.call(null,fields__$1);
var chunk__20594_20625 = null;
var count__20595_20626 = (0);
var i__20596_20627 = (0);
while(true){
if((i__20596_20627 < count__20595_20626)){
var fld_20628 = cljs.core._nth.call(null,chunk__20594_20625,i__20596_20627);
cljs.compiler.emitln.call(null,"this.",fld_20628," = ",fld_20628,";");

var G__20629 = seq__20593_20624;
var G__20630 = chunk__20594_20625;
var G__20631 = count__20595_20626;
var G__20632 = (i__20596_20627 + (1));
seq__20593_20624 = G__20629;
chunk__20594_20625 = G__20630;
count__20595_20626 = G__20631;
i__20596_20627 = G__20632;
continue;
} else {
var temp__4425__auto___20633 = cljs.core.seq.call(null,seq__20593_20624);
if(temp__4425__auto___20633){
var seq__20593_20634__$1 = temp__4425__auto___20633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20593_20634__$1)){
var c__17655__auto___20635 = cljs.core.chunk_first.call(null,seq__20593_20634__$1);
var G__20636 = cljs.core.chunk_rest.call(null,seq__20593_20634__$1);
var G__20637 = c__17655__auto___20635;
var G__20638 = cljs.core.count.call(null,c__17655__auto___20635);
var G__20639 = (0);
seq__20593_20624 = G__20636;
chunk__20594_20625 = G__20637;
count__20595_20626 = G__20638;
i__20596_20627 = G__20639;
continue;
} else {
var fld_20640 = cljs.core.first.call(null,seq__20593_20634__$1);
cljs.compiler.emitln.call(null,"this.",fld_20640," = ",fld_20640,";");

var G__20641 = cljs.core.next.call(null,seq__20593_20634__$1);
var G__20642 = null;
var G__20643 = (0);
var G__20644 = (0);
seq__20593_20624 = G__20641;
chunk__20594_20625 = G__20642;
count__20595_20626 = G__20643;
i__20596_20627 = G__20644;
continue;
}
} else {
}
}
break;
}

var seq__20597_20645 = cljs.core.seq.call(null,pmasks);
var chunk__20598_20646 = null;
var count__20599_20647 = (0);
var i__20600_20648 = (0);
while(true){
if((i__20600_20648 < count__20599_20647)){
var vec__20601_20649 = cljs.core._nth.call(null,chunk__20598_20646,i__20600_20648);
var pno_20650 = cljs.core.nth.call(null,vec__20601_20649,(0),null);
var pmask_20651 = cljs.core.nth.call(null,vec__20601_20649,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20650,"$ = ",pmask_20651,";");

var G__20652 = seq__20597_20645;
var G__20653 = chunk__20598_20646;
var G__20654 = count__20599_20647;
var G__20655 = (i__20600_20648 + (1));
seq__20597_20645 = G__20652;
chunk__20598_20646 = G__20653;
count__20599_20647 = G__20654;
i__20600_20648 = G__20655;
continue;
} else {
var temp__4425__auto___20656 = cljs.core.seq.call(null,seq__20597_20645);
if(temp__4425__auto___20656){
var seq__20597_20657__$1 = temp__4425__auto___20656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20597_20657__$1)){
var c__17655__auto___20658 = cljs.core.chunk_first.call(null,seq__20597_20657__$1);
var G__20659 = cljs.core.chunk_rest.call(null,seq__20597_20657__$1);
var G__20660 = c__17655__auto___20658;
var G__20661 = cljs.core.count.call(null,c__17655__auto___20658);
var G__20662 = (0);
seq__20597_20645 = G__20659;
chunk__20598_20646 = G__20660;
count__20599_20647 = G__20661;
i__20600_20648 = G__20662;
continue;
} else {
var vec__20602_20663 = cljs.core.first.call(null,seq__20597_20657__$1);
var pno_20664 = cljs.core.nth.call(null,vec__20602_20663,(0),null);
var pmask_20665 = cljs.core.nth.call(null,vec__20602_20663,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_20664,"$ = ",pmask_20665,";");

var G__20666 = cljs.core.next.call(null,seq__20597_20657__$1);
var G__20667 = null;
var G__20668 = (0);
var G__20669 = (0);
seq__20597_20645 = G__20666;
chunk__20598_20646 = G__20667;
count__20599_20647 = G__20668;
i__20600_20648 = G__20669;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__20670){
var map__20671 = p__20670;
var map__20671__$1 = ((((!((map__20671 == null)))?((((map__20671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20671):map__20671);
var target = cljs.core.get.call(null,map__20671__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__20671__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__20671__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__20671__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__20671__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__20673){
var map__20674 = p__20673;
var map__20674__$1 = ((((!((map__20674 == null)))?((((map__20674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20674):map__20674);
var op = cljs.core.get.call(null,map__20674__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__20674__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__20674__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__20674__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__20674__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__16840__auto__ = code;
if(cljs.core.truth_(and__16840__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__16840__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__19630__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__19630__auto__))){
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
var seq__20684 = cljs.core.seq.call(null,table);
var chunk__20685 = null;
var count__20686 = (0);
var i__20687 = (0);
while(true){
if((i__20687 < count__20686)){
var vec__20688 = cljs.core._nth.call(null,chunk__20685,i__20687);
var sym = cljs.core.nth.call(null,vec__20688,(0),null);
var value = cljs.core.nth.call(null,vec__20688,(1),null);
var ns_20690 = cljs.core.namespace.call(null,sym);
var name_20691 = cljs.core.name.call(null,sym);
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

var G__20692 = seq__20684;
var G__20693 = chunk__20685;
var G__20694 = count__20686;
var G__20695 = (i__20687 + (1));
seq__20684 = G__20692;
chunk__20685 = G__20693;
count__20686 = G__20694;
i__20687 = G__20695;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20684);
if(temp__4425__auto__){
var seq__20684__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20684__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__20684__$1);
var G__20696 = cljs.core.chunk_rest.call(null,seq__20684__$1);
var G__20697 = c__17655__auto__;
var G__20698 = cljs.core.count.call(null,c__17655__auto__);
var G__20699 = (0);
seq__20684 = G__20696;
chunk__20685 = G__20697;
count__20686 = G__20698;
i__20687 = G__20699;
continue;
} else {
var vec__20689 = cljs.core.first.call(null,seq__20684__$1);
var sym = cljs.core.nth.call(null,vec__20689,(0),null);
var value = cljs.core.nth.call(null,vec__20689,(1),null);
var ns_20700 = cljs.core.namespace.call(null,sym);
var name_20701 = cljs.core.name.call(null,sym);
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

var G__20702 = cljs.core.next.call(null,seq__20684__$1);
var G__20703 = null;
var G__20704 = (0);
var G__20705 = (0);
seq__20684 = G__20702;
chunk__20685 = G__20703;
count__20686 = G__20704;
i__20687 = G__20705;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map?rel=1455042799357
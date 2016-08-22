// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__18956){
var vec__18957 = p__18956;
var i = cljs.core.nth.call(null,vec__18957,(0),null);
var v = cljs.core.nth.call(null,vec__18957,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__18959 = seg;
var gcol = cljs.core.nth.call(null,vec__18959,(0),null);
var source = cljs.core.nth.call(null,vec__18959,(1),null);
var line = cljs.core.nth.call(null,vec__18959,(2),null);
var col = cljs.core.nth.call(null,vec__18959,(3),null);
var name = cljs.core.nth.call(null,vec__18959,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__18962 = seg;
var gcol = cljs.core.nth.call(null,vec__18962,(0),null);
var source = cljs.core.nth.call(null,vec__18962,(1),null);
var line = cljs.core.nth.call(null,vec__18962,(2),null);
var col = cljs.core.nth.call(null,vec__18962,(3),null);
var name = cljs.core.nth.call(null,vec__18962,(4),null);
var vec__18963 = relseg;
var rgcol = cljs.core.nth.call(null,vec__18963,(0),null);
var rsource = cljs.core.nth.call(null,vec__18963,(1),null);
var rline = cljs.core.nth.call(null,vec__18963,(2),null);
var rcol = cljs.core.nth.call(null,vec__18963,(3),null);
var rname = cljs.core.nth.call(null,vec__18963,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__16852__auto__ = source;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__16852__auto__ = line;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__16852__auto__ = col;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__16852__auto__ = name;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__18966 = segmap;
var map__18966__$1 = ((((!((map__18966 == null)))?((((map__18966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18966):map__18966);
var gcol = cljs.core.get.call(null,map__18966__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__18966__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__18966__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__18966__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__18966__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__18966,map__18966__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__18966,map__18966__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__18966,map__18966__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__18966,map__18966__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__18966,map__18966__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__18966,map__18966__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args18968 = [];
var len__17910__auto___18972 = arguments.length;
var i__17911__auto___18973 = (0);
while(true){
if((i__17911__auto___18973 < len__17910__auto___18972)){
args18968.push((arguments[i__17911__auto___18973]));

var G__18974 = (i__17911__auto___18973 + (1));
i__17911__auto___18973 = G__18974;
continue;
} else {
}
break;
}

var G__18970 = args18968.length;
switch (G__18970) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18968.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__18971 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__18976 = cljs.core.next.call(null,segs__$1);
var G__18977 = nrelseg;
var G__18978 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__18976;
relseg__$1 = G__18977;
result__$1 = G__18978;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__18971,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__18971,(1),null);
var G__18979 = (gline + (1));
var G__18980 = cljs.core.next.call(null,lines__$1);
var G__18981 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__18982 = result__$1;
gline = G__18979;
lines__$1 = G__18980;
relseg = G__18981;
result = G__18982;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__18986 = segmap;
var map__18986__$1 = ((((!((map__18986 == null)))?((((map__18986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18986):map__18986);
var gcol = cljs.core.get.call(null,map__18986__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__18986__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__18986__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__18986__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__18986__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__18986,map__18986__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__18986,map__18986__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__18983_SHARP_){
return cljs.core.conj.call(null,p1__18983_SHARP_,d__$1);
});})(map__18986,map__18986__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__18986,map__18986__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args18988 = [];
var len__17910__auto___18992 = arguments.length;
var i__17911__auto___18993 = (0);
while(true){
if((i__17911__auto___18993 < len__17910__auto___18992)){
args18988.push((arguments[i__17911__auto___18993]));

var G__18994 = (i__17911__auto___18993 + (1));
i__17911__auto___18993 = G__18994;
continue;
} else {
}
break;
}

var G__18990 = args18988.length;
switch (G__18990) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18988.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__18991 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__18996 = cljs.core.next.call(null,segs__$1);
var G__18997 = nrelseg;
var G__18998 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__18996;
relseg__$1 = G__18997;
result__$1 = G__18998;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__18991,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__18991,(1),null);
var G__18999 = (gline + (1));
var G__19000 = cljs.core.next.call(null,lines__$1);
var G__19001 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__19002 = result__$1;
gline = G__18999;
lines__$1 = G__19000;
relseg = G__19001;
result = G__19002;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__19009){
var vec__19010 = p__19009;
var _ = cljs.core.nth.call(null,vec__19010,(0),null);
var source = cljs.core.nth.call(null,vec__19010,(1),null);
var line = cljs.core.nth.call(null,vec__19010,(2),null);
var col = cljs.core.nth.call(null,vec__19010,(3),null);
var name = cljs.core.nth.call(null,vec__19010,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__19011){
var vec__19012 = p__19011;
var gcol = cljs.core.nth.call(null,vec__19012,(0),null);
var sidx = cljs.core.nth.call(null,vec__19012,(1),null);
var line = cljs.core.nth.call(null,vec__19012,(2),null);
var col = cljs.core.nth.call(null,vec__19012,(3),null);
var name = cljs.core.nth.call(null,vec__19012,(4),null);
var seg = vec__19012;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__19012,gcol,sidx,line,col,name,seg,relseg){
return (function (p__19013){
var vec__19014 = p__19013;
var _ = cljs.core.nth.call(null,vec__19014,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__19014,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__19014,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__19014,(3),null);
var lname = cljs.core.nth.call(null,vec__19014,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__16852__auto__ = name;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__19012,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__16852__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__19068 = cljs.core.seq.call(null,infos);
var chunk__19069 = null;
var count__19070 = (0);
var i__19071 = (0);
while(true){
if((i__19071 < count__19070)){
var info = cljs.core._nth.call(null,chunk__19069,i__19071);
var segv_19118 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_19119 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_19120 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_19119 > (lc_19120 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__19068,chunk__19069,count__19070,i__19071,segv_19118,gline_19119,lc_19120,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_19119 - (lc_19120 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_19118], null));
});})(seq__19068,chunk__19069,count__19070,i__19071,segv_19118,gline_19119,lc_19120,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__19068,chunk__19069,count__19070,i__19071,segv_19118,gline_19119,lc_19120,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19119], null),cljs.core.conj,segv_19118);
});})(seq__19068,chunk__19069,count__19070,i__19071,segv_19118,gline_19119,lc_19120,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__19121 = seq__19068;
var G__19122 = chunk__19069;
var G__19123 = count__19070;
var G__19124 = (i__19071 + (1));
seq__19068 = G__19121;
chunk__19069 = G__19122;
count__19070 = G__19123;
i__19071 = G__19124;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19068);
if(temp__4425__auto__){
var seq__19068__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19068__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__19068__$1);
var G__19125 = cljs.core.chunk_rest.call(null,seq__19068__$1);
var G__19126 = c__17655__auto__;
var G__19127 = cljs.core.count.call(null,c__17655__auto__);
var G__19128 = (0);
seq__19068 = G__19125;
chunk__19069 = G__19126;
count__19070 = G__19127;
i__19071 = G__19128;
continue;
} else {
var info = cljs.core.first.call(null,seq__19068__$1);
var segv_19129 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_19130 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_19131 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_19130 > (lc_19131 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__19068,chunk__19069,count__19070,i__19071,segv_19129,gline_19130,lc_19131,info,seq__19068__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_19130 - (lc_19131 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_19129], null));
});})(seq__19068,chunk__19069,count__19070,i__19071,segv_19129,gline_19130,lc_19131,info,seq__19068__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__19068,chunk__19069,count__19070,i__19071,segv_19129,gline_19130,lc_19131,info,seq__19068__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19130], null),cljs.core.conj,segv_19129);
});})(seq__19068,chunk__19069,count__19070,i__19071,segv_19129,gline_19130,lc_19131,info,seq__19068__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__19132 = cljs.core.next.call(null,seq__19068__$1);
var G__19133 = null;
var G__19134 = (0);
var G__19135 = (0);
seq__19068 = G__19132;
chunk__19069 = G__19133;
count__19070 = G__19134;
i__19071 = G__19135;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__19072_19136 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__19073_19137 = null;
var count__19074_19138 = (0);
var i__19075_19139 = (0);
while(true){
if((i__19075_19139 < count__19074_19138)){
var vec__19076_19140 = cljs.core._nth.call(null,chunk__19073_19137,i__19075_19139);
var source_idx_19141 = cljs.core.nth.call(null,vec__19076_19140,(0),null);
var vec__19077_19142 = cljs.core.nth.call(null,vec__19076_19140,(1),null);
var __19143 = cljs.core.nth.call(null,vec__19077_19142,(0),null);
var lines_19144__$1 = cljs.core.nth.call(null,vec__19077_19142,(1),null);
var seq__19078_19145 = cljs.core.seq.call(null,lines_19144__$1);
var chunk__19079_19146 = null;
var count__19080_19147 = (0);
var i__19081_19148 = (0);
while(true){
if((i__19081_19148 < count__19080_19147)){
var vec__19082_19149 = cljs.core._nth.call(null,chunk__19079_19146,i__19081_19148);
var line_19150 = cljs.core.nth.call(null,vec__19082_19149,(0),null);
var cols_19151 = cljs.core.nth.call(null,vec__19082_19149,(1),null);
var seq__19083_19152 = cljs.core.seq.call(null,cols_19151);
var chunk__19084_19153 = null;
var count__19085_19154 = (0);
var i__19086_19155 = (0);
while(true){
if((i__19086_19155 < count__19085_19154)){
var vec__19087_19156 = cljs.core._nth.call(null,chunk__19084_19153,i__19086_19155);
var col_19157 = cljs.core.nth.call(null,vec__19087_19156,(0),null);
var infos_19158 = cljs.core.nth.call(null,vec__19087_19156,(1),null);
encode_cols.call(null,infos_19158,source_idx_19141,line_19150,col_19157);

var G__19159 = seq__19083_19152;
var G__19160 = chunk__19084_19153;
var G__19161 = count__19085_19154;
var G__19162 = (i__19086_19155 + (1));
seq__19083_19152 = G__19159;
chunk__19084_19153 = G__19160;
count__19085_19154 = G__19161;
i__19086_19155 = G__19162;
continue;
} else {
var temp__4425__auto___19163 = cljs.core.seq.call(null,seq__19083_19152);
if(temp__4425__auto___19163){
var seq__19083_19164__$1 = temp__4425__auto___19163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19083_19164__$1)){
var c__17655__auto___19165 = cljs.core.chunk_first.call(null,seq__19083_19164__$1);
var G__19166 = cljs.core.chunk_rest.call(null,seq__19083_19164__$1);
var G__19167 = c__17655__auto___19165;
var G__19168 = cljs.core.count.call(null,c__17655__auto___19165);
var G__19169 = (0);
seq__19083_19152 = G__19166;
chunk__19084_19153 = G__19167;
count__19085_19154 = G__19168;
i__19086_19155 = G__19169;
continue;
} else {
var vec__19088_19170 = cljs.core.first.call(null,seq__19083_19164__$1);
var col_19171 = cljs.core.nth.call(null,vec__19088_19170,(0),null);
var infos_19172 = cljs.core.nth.call(null,vec__19088_19170,(1),null);
encode_cols.call(null,infos_19172,source_idx_19141,line_19150,col_19171);

var G__19173 = cljs.core.next.call(null,seq__19083_19164__$1);
var G__19174 = null;
var G__19175 = (0);
var G__19176 = (0);
seq__19083_19152 = G__19173;
chunk__19084_19153 = G__19174;
count__19085_19154 = G__19175;
i__19086_19155 = G__19176;
continue;
}
} else {
}
}
break;
}

var G__19177 = seq__19078_19145;
var G__19178 = chunk__19079_19146;
var G__19179 = count__19080_19147;
var G__19180 = (i__19081_19148 + (1));
seq__19078_19145 = G__19177;
chunk__19079_19146 = G__19178;
count__19080_19147 = G__19179;
i__19081_19148 = G__19180;
continue;
} else {
var temp__4425__auto___19181 = cljs.core.seq.call(null,seq__19078_19145);
if(temp__4425__auto___19181){
var seq__19078_19182__$1 = temp__4425__auto___19181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19078_19182__$1)){
var c__17655__auto___19183 = cljs.core.chunk_first.call(null,seq__19078_19182__$1);
var G__19184 = cljs.core.chunk_rest.call(null,seq__19078_19182__$1);
var G__19185 = c__17655__auto___19183;
var G__19186 = cljs.core.count.call(null,c__17655__auto___19183);
var G__19187 = (0);
seq__19078_19145 = G__19184;
chunk__19079_19146 = G__19185;
count__19080_19147 = G__19186;
i__19081_19148 = G__19187;
continue;
} else {
var vec__19089_19188 = cljs.core.first.call(null,seq__19078_19182__$1);
var line_19189 = cljs.core.nth.call(null,vec__19089_19188,(0),null);
var cols_19190 = cljs.core.nth.call(null,vec__19089_19188,(1),null);
var seq__19090_19191 = cljs.core.seq.call(null,cols_19190);
var chunk__19091_19192 = null;
var count__19092_19193 = (0);
var i__19093_19194 = (0);
while(true){
if((i__19093_19194 < count__19092_19193)){
var vec__19094_19195 = cljs.core._nth.call(null,chunk__19091_19192,i__19093_19194);
var col_19196 = cljs.core.nth.call(null,vec__19094_19195,(0),null);
var infos_19197 = cljs.core.nth.call(null,vec__19094_19195,(1),null);
encode_cols.call(null,infos_19197,source_idx_19141,line_19189,col_19196);

var G__19198 = seq__19090_19191;
var G__19199 = chunk__19091_19192;
var G__19200 = count__19092_19193;
var G__19201 = (i__19093_19194 + (1));
seq__19090_19191 = G__19198;
chunk__19091_19192 = G__19199;
count__19092_19193 = G__19200;
i__19093_19194 = G__19201;
continue;
} else {
var temp__4425__auto___19202__$1 = cljs.core.seq.call(null,seq__19090_19191);
if(temp__4425__auto___19202__$1){
var seq__19090_19203__$1 = temp__4425__auto___19202__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19090_19203__$1)){
var c__17655__auto___19204 = cljs.core.chunk_first.call(null,seq__19090_19203__$1);
var G__19205 = cljs.core.chunk_rest.call(null,seq__19090_19203__$1);
var G__19206 = c__17655__auto___19204;
var G__19207 = cljs.core.count.call(null,c__17655__auto___19204);
var G__19208 = (0);
seq__19090_19191 = G__19205;
chunk__19091_19192 = G__19206;
count__19092_19193 = G__19207;
i__19093_19194 = G__19208;
continue;
} else {
var vec__19095_19209 = cljs.core.first.call(null,seq__19090_19203__$1);
var col_19210 = cljs.core.nth.call(null,vec__19095_19209,(0),null);
var infos_19211 = cljs.core.nth.call(null,vec__19095_19209,(1),null);
encode_cols.call(null,infos_19211,source_idx_19141,line_19189,col_19210);

var G__19212 = cljs.core.next.call(null,seq__19090_19203__$1);
var G__19213 = null;
var G__19214 = (0);
var G__19215 = (0);
seq__19090_19191 = G__19212;
chunk__19091_19192 = G__19213;
count__19092_19193 = G__19214;
i__19093_19194 = G__19215;
continue;
}
} else {
}
}
break;
}

var G__19216 = cljs.core.next.call(null,seq__19078_19182__$1);
var G__19217 = null;
var G__19218 = (0);
var G__19219 = (0);
seq__19078_19145 = G__19216;
chunk__19079_19146 = G__19217;
count__19080_19147 = G__19218;
i__19081_19148 = G__19219;
continue;
}
} else {
}
}
break;
}

var G__19220 = seq__19072_19136;
var G__19221 = chunk__19073_19137;
var G__19222 = count__19074_19138;
var G__19223 = (i__19075_19139 + (1));
seq__19072_19136 = G__19220;
chunk__19073_19137 = G__19221;
count__19074_19138 = G__19222;
i__19075_19139 = G__19223;
continue;
} else {
var temp__4425__auto___19224 = cljs.core.seq.call(null,seq__19072_19136);
if(temp__4425__auto___19224){
var seq__19072_19225__$1 = temp__4425__auto___19224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19072_19225__$1)){
var c__17655__auto___19226 = cljs.core.chunk_first.call(null,seq__19072_19225__$1);
var G__19227 = cljs.core.chunk_rest.call(null,seq__19072_19225__$1);
var G__19228 = c__17655__auto___19226;
var G__19229 = cljs.core.count.call(null,c__17655__auto___19226);
var G__19230 = (0);
seq__19072_19136 = G__19227;
chunk__19073_19137 = G__19228;
count__19074_19138 = G__19229;
i__19075_19139 = G__19230;
continue;
} else {
var vec__19096_19231 = cljs.core.first.call(null,seq__19072_19225__$1);
var source_idx_19232 = cljs.core.nth.call(null,vec__19096_19231,(0),null);
var vec__19097_19233 = cljs.core.nth.call(null,vec__19096_19231,(1),null);
var __19234 = cljs.core.nth.call(null,vec__19097_19233,(0),null);
var lines_19235__$1 = cljs.core.nth.call(null,vec__19097_19233,(1),null);
var seq__19098_19236 = cljs.core.seq.call(null,lines_19235__$1);
var chunk__19099_19237 = null;
var count__19100_19238 = (0);
var i__19101_19239 = (0);
while(true){
if((i__19101_19239 < count__19100_19238)){
var vec__19102_19240 = cljs.core._nth.call(null,chunk__19099_19237,i__19101_19239);
var line_19241 = cljs.core.nth.call(null,vec__19102_19240,(0),null);
var cols_19242 = cljs.core.nth.call(null,vec__19102_19240,(1),null);
var seq__19103_19243 = cljs.core.seq.call(null,cols_19242);
var chunk__19104_19244 = null;
var count__19105_19245 = (0);
var i__19106_19246 = (0);
while(true){
if((i__19106_19246 < count__19105_19245)){
var vec__19107_19247 = cljs.core._nth.call(null,chunk__19104_19244,i__19106_19246);
var col_19248 = cljs.core.nth.call(null,vec__19107_19247,(0),null);
var infos_19249 = cljs.core.nth.call(null,vec__19107_19247,(1),null);
encode_cols.call(null,infos_19249,source_idx_19232,line_19241,col_19248);

var G__19250 = seq__19103_19243;
var G__19251 = chunk__19104_19244;
var G__19252 = count__19105_19245;
var G__19253 = (i__19106_19246 + (1));
seq__19103_19243 = G__19250;
chunk__19104_19244 = G__19251;
count__19105_19245 = G__19252;
i__19106_19246 = G__19253;
continue;
} else {
var temp__4425__auto___19254__$1 = cljs.core.seq.call(null,seq__19103_19243);
if(temp__4425__auto___19254__$1){
var seq__19103_19255__$1 = temp__4425__auto___19254__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19103_19255__$1)){
var c__17655__auto___19256 = cljs.core.chunk_first.call(null,seq__19103_19255__$1);
var G__19257 = cljs.core.chunk_rest.call(null,seq__19103_19255__$1);
var G__19258 = c__17655__auto___19256;
var G__19259 = cljs.core.count.call(null,c__17655__auto___19256);
var G__19260 = (0);
seq__19103_19243 = G__19257;
chunk__19104_19244 = G__19258;
count__19105_19245 = G__19259;
i__19106_19246 = G__19260;
continue;
} else {
var vec__19108_19261 = cljs.core.first.call(null,seq__19103_19255__$1);
var col_19262 = cljs.core.nth.call(null,vec__19108_19261,(0),null);
var infos_19263 = cljs.core.nth.call(null,vec__19108_19261,(1),null);
encode_cols.call(null,infos_19263,source_idx_19232,line_19241,col_19262);

var G__19264 = cljs.core.next.call(null,seq__19103_19255__$1);
var G__19265 = null;
var G__19266 = (0);
var G__19267 = (0);
seq__19103_19243 = G__19264;
chunk__19104_19244 = G__19265;
count__19105_19245 = G__19266;
i__19106_19246 = G__19267;
continue;
}
} else {
}
}
break;
}

var G__19268 = seq__19098_19236;
var G__19269 = chunk__19099_19237;
var G__19270 = count__19100_19238;
var G__19271 = (i__19101_19239 + (1));
seq__19098_19236 = G__19268;
chunk__19099_19237 = G__19269;
count__19100_19238 = G__19270;
i__19101_19239 = G__19271;
continue;
} else {
var temp__4425__auto___19272__$1 = cljs.core.seq.call(null,seq__19098_19236);
if(temp__4425__auto___19272__$1){
var seq__19098_19273__$1 = temp__4425__auto___19272__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19098_19273__$1)){
var c__17655__auto___19274 = cljs.core.chunk_first.call(null,seq__19098_19273__$1);
var G__19275 = cljs.core.chunk_rest.call(null,seq__19098_19273__$1);
var G__19276 = c__17655__auto___19274;
var G__19277 = cljs.core.count.call(null,c__17655__auto___19274);
var G__19278 = (0);
seq__19098_19236 = G__19275;
chunk__19099_19237 = G__19276;
count__19100_19238 = G__19277;
i__19101_19239 = G__19278;
continue;
} else {
var vec__19109_19279 = cljs.core.first.call(null,seq__19098_19273__$1);
var line_19280 = cljs.core.nth.call(null,vec__19109_19279,(0),null);
var cols_19281 = cljs.core.nth.call(null,vec__19109_19279,(1),null);
var seq__19110_19282 = cljs.core.seq.call(null,cols_19281);
var chunk__19111_19283 = null;
var count__19112_19284 = (0);
var i__19113_19285 = (0);
while(true){
if((i__19113_19285 < count__19112_19284)){
var vec__19114_19286 = cljs.core._nth.call(null,chunk__19111_19283,i__19113_19285);
var col_19287 = cljs.core.nth.call(null,vec__19114_19286,(0),null);
var infos_19288 = cljs.core.nth.call(null,vec__19114_19286,(1),null);
encode_cols.call(null,infos_19288,source_idx_19232,line_19280,col_19287);

var G__19289 = seq__19110_19282;
var G__19290 = chunk__19111_19283;
var G__19291 = count__19112_19284;
var G__19292 = (i__19113_19285 + (1));
seq__19110_19282 = G__19289;
chunk__19111_19283 = G__19290;
count__19112_19284 = G__19291;
i__19113_19285 = G__19292;
continue;
} else {
var temp__4425__auto___19293__$2 = cljs.core.seq.call(null,seq__19110_19282);
if(temp__4425__auto___19293__$2){
var seq__19110_19294__$1 = temp__4425__auto___19293__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19110_19294__$1)){
var c__17655__auto___19295 = cljs.core.chunk_first.call(null,seq__19110_19294__$1);
var G__19296 = cljs.core.chunk_rest.call(null,seq__19110_19294__$1);
var G__19297 = c__17655__auto___19295;
var G__19298 = cljs.core.count.call(null,c__17655__auto___19295);
var G__19299 = (0);
seq__19110_19282 = G__19296;
chunk__19111_19283 = G__19297;
count__19112_19284 = G__19298;
i__19113_19285 = G__19299;
continue;
} else {
var vec__19115_19300 = cljs.core.first.call(null,seq__19110_19294__$1);
var col_19301 = cljs.core.nth.call(null,vec__19115_19300,(0),null);
var infos_19302 = cljs.core.nth.call(null,vec__19115_19300,(1),null);
encode_cols.call(null,infos_19302,source_idx_19232,line_19280,col_19301);

var G__19303 = cljs.core.next.call(null,seq__19110_19294__$1);
var G__19304 = null;
var G__19305 = (0);
var G__19306 = (0);
seq__19110_19282 = G__19303;
chunk__19111_19283 = G__19304;
count__19112_19284 = G__19305;
i__19113_19285 = G__19306;
continue;
}
} else {
}
}
break;
}

var G__19307 = cljs.core.next.call(null,seq__19098_19273__$1);
var G__19308 = null;
var G__19309 = (0);
var G__19310 = (0);
seq__19098_19236 = G__19307;
chunk__19099_19237 = G__19308;
count__19100_19238 = G__19309;
i__19101_19239 = G__19310;
continue;
}
} else {
}
}
break;
}

var G__19311 = cljs.core.next.call(null,seq__19072_19225__$1);
var G__19312 = null;
var G__19313 = (0);
var G__19314 = (0);
seq__19072_19136 = G__19311;
chunk__19073_19137 = G__19312;
count__19074_19138 = G__19313;
i__19075_19139 = G__19314;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__19116 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__19015_SHARP_){
return [cljs.core.str(p1__19015_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__19016_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__19016_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__19017_SHARP_){
return clojure.string.join.call(null,",",p1__19017_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__19116__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__19117 = G__19116;
goog.object.set(G__19117,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__19117;
})():G__19116);
return G__19116__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__19320 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__19320,(0),null);
var col_map = cljs.core.nth.call(null,vec__19320,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__19321 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__19321,(0),null);
var infos = cljs.core.nth.call(null,vec__19321,(1),null);
var G__19325 = cljs.core.next.call(null,col_map_seq);
var G__19326 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__19321,col,infos,vec__19320,line,col_map){
return (function (v,p__19322){
var map__19323 = p__19322;
var map__19323__$1 = ((((!((map__19323 == null)))?((((map__19323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19323):map__19323);
var gline = cljs.core.get.call(null,map__19323__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__19323__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__19321,col,infos,vec__19320,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__19325;
new_cols = G__19326;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__19327 = cljs.core.next.call(null,line_map_seq);
var G__19328 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__19327;
new_lines = G__19328;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__19379_19429 = cljs.core.seq.call(null,reverse_map);
var chunk__19380_19430 = null;
var count__19381_19431 = (0);
var i__19382_19432 = (0);
while(true){
if((i__19382_19432 < count__19381_19431)){
var vec__19383_19433 = cljs.core._nth.call(null,chunk__19380_19430,i__19382_19432);
var line_19434 = cljs.core.nth.call(null,vec__19383_19433,(0),null);
var columns_19435 = cljs.core.nth.call(null,vec__19383_19433,(1),null);
var seq__19384_19436 = cljs.core.seq.call(null,columns_19435);
var chunk__19385_19437 = null;
var count__19386_19438 = (0);
var i__19387_19439 = (0);
while(true){
if((i__19387_19439 < count__19386_19438)){
var vec__19388_19440 = cljs.core._nth.call(null,chunk__19385_19437,i__19387_19439);
var column_19441 = cljs.core.nth.call(null,vec__19388_19440,(0),null);
var column_info_19442 = cljs.core.nth.call(null,vec__19388_19440,(1),null);
var seq__19389_19443 = cljs.core.seq.call(null,column_info_19442);
var chunk__19390_19444 = null;
var count__19391_19445 = (0);
var i__19392_19446 = (0);
while(true){
if((i__19392_19446 < count__19391_19445)){
var map__19393_19447 = cljs.core._nth.call(null,chunk__19390_19444,i__19392_19446);
var map__19393_19448__$1 = ((((!((map__19393_19447 == null)))?((((map__19393_19447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19393_19447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19393_19447):map__19393_19447);
var gline_19449 = cljs.core.get.call(null,map__19393_19448__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19450 = cljs.core.get.call(null,map__19393_19448__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19451 = cljs.core.get.call(null,map__19393_19448__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19449], null),cljs.core.fnil.call(null,((function (seq__19389_19443,chunk__19390_19444,count__19391_19445,i__19392_19446,seq__19384_19436,chunk__19385_19437,count__19386_19438,i__19387_19439,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19393_19447,map__19393_19448__$1,gline_19449,gcol_19450,name_19451,vec__19388_19440,column_19441,column_info_19442,vec__19383_19433,line_19434,columns_19435,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19441], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19434,new cljs.core.Keyword(null,"col","col",-1959363084),column_19441,new cljs.core.Keyword(null,"name","name",1843675177),name_19451], null));
});})(seq__19389_19443,chunk__19390_19444,count__19391_19445,i__19392_19446,seq__19384_19436,chunk__19385_19437,count__19386_19438,i__19387_19439,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19393_19447,map__19393_19448__$1,gline_19449,gcol_19450,name_19451,vec__19388_19440,column_19441,column_info_19442,vec__19383_19433,line_19434,columns_19435,inverted))
,cljs.core.sorted_map.call(null)));

var G__19452 = seq__19389_19443;
var G__19453 = chunk__19390_19444;
var G__19454 = count__19391_19445;
var G__19455 = (i__19392_19446 + (1));
seq__19389_19443 = G__19452;
chunk__19390_19444 = G__19453;
count__19391_19445 = G__19454;
i__19392_19446 = G__19455;
continue;
} else {
var temp__4425__auto___19456 = cljs.core.seq.call(null,seq__19389_19443);
if(temp__4425__auto___19456){
var seq__19389_19457__$1 = temp__4425__auto___19456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19389_19457__$1)){
var c__17655__auto___19458 = cljs.core.chunk_first.call(null,seq__19389_19457__$1);
var G__19459 = cljs.core.chunk_rest.call(null,seq__19389_19457__$1);
var G__19460 = c__17655__auto___19458;
var G__19461 = cljs.core.count.call(null,c__17655__auto___19458);
var G__19462 = (0);
seq__19389_19443 = G__19459;
chunk__19390_19444 = G__19460;
count__19391_19445 = G__19461;
i__19392_19446 = G__19462;
continue;
} else {
var map__19395_19463 = cljs.core.first.call(null,seq__19389_19457__$1);
var map__19395_19464__$1 = ((((!((map__19395_19463 == null)))?((((map__19395_19463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19395_19463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19395_19463):map__19395_19463);
var gline_19465 = cljs.core.get.call(null,map__19395_19464__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19466 = cljs.core.get.call(null,map__19395_19464__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19467 = cljs.core.get.call(null,map__19395_19464__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19465], null),cljs.core.fnil.call(null,((function (seq__19389_19443,chunk__19390_19444,count__19391_19445,i__19392_19446,seq__19384_19436,chunk__19385_19437,count__19386_19438,i__19387_19439,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19395_19463,map__19395_19464__$1,gline_19465,gcol_19466,name_19467,seq__19389_19457__$1,temp__4425__auto___19456,vec__19388_19440,column_19441,column_info_19442,vec__19383_19433,line_19434,columns_19435,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19441], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19434,new cljs.core.Keyword(null,"col","col",-1959363084),column_19441,new cljs.core.Keyword(null,"name","name",1843675177),name_19467], null));
});})(seq__19389_19443,chunk__19390_19444,count__19391_19445,i__19392_19446,seq__19384_19436,chunk__19385_19437,count__19386_19438,i__19387_19439,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19395_19463,map__19395_19464__$1,gline_19465,gcol_19466,name_19467,seq__19389_19457__$1,temp__4425__auto___19456,vec__19388_19440,column_19441,column_info_19442,vec__19383_19433,line_19434,columns_19435,inverted))
,cljs.core.sorted_map.call(null)));

var G__19468 = cljs.core.next.call(null,seq__19389_19457__$1);
var G__19469 = null;
var G__19470 = (0);
var G__19471 = (0);
seq__19389_19443 = G__19468;
chunk__19390_19444 = G__19469;
count__19391_19445 = G__19470;
i__19392_19446 = G__19471;
continue;
}
} else {
}
}
break;
}

var G__19472 = seq__19384_19436;
var G__19473 = chunk__19385_19437;
var G__19474 = count__19386_19438;
var G__19475 = (i__19387_19439 + (1));
seq__19384_19436 = G__19472;
chunk__19385_19437 = G__19473;
count__19386_19438 = G__19474;
i__19387_19439 = G__19475;
continue;
} else {
var temp__4425__auto___19476 = cljs.core.seq.call(null,seq__19384_19436);
if(temp__4425__auto___19476){
var seq__19384_19477__$1 = temp__4425__auto___19476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19384_19477__$1)){
var c__17655__auto___19478 = cljs.core.chunk_first.call(null,seq__19384_19477__$1);
var G__19479 = cljs.core.chunk_rest.call(null,seq__19384_19477__$1);
var G__19480 = c__17655__auto___19478;
var G__19481 = cljs.core.count.call(null,c__17655__auto___19478);
var G__19482 = (0);
seq__19384_19436 = G__19479;
chunk__19385_19437 = G__19480;
count__19386_19438 = G__19481;
i__19387_19439 = G__19482;
continue;
} else {
var vec__19397_19483 = cljs.core.first.call(null,seq__19384_19477__$1);
var column_19484 = cljs.core.nth.call(null,vec__19397_19483,(0),null);
var column_info_19485 = cljs.core.nth.call(null,vec__19397_19483,(1),null);
var seq__19398_19486 = cljs.core.seq.call(null,column_info_19485);
var chunk__19399_19487 = null;
var count__19400_19488 = (0);
var i__19401_19489 = (0);
while(true){
if((i__19401_19489 < count__19400_19488)){
var map__19402_19490 = cljs.core._nth.call(null,chunk__19399_19487,i__19401_19489);
var map__19402_19491__$1 = ((((!((map__19402_19490 == null)))?((((map__19402_19490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19402_19490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19402_19490):map__19402_19490);
var gline_19492 = cljs.core.get.call(null,map__19402_19491__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19493 = cljs.core.get.call(null,map__19402_19491__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19494 = cljs.core.get.call(null,map__19402_19491__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19492], null),cljs.core.fnil.call(null,((function (seq__19398_19486,chunk__19399_19487,count__19400_19488,i__19401_19489,seq__19384_19436,chunk__19385_19437,count__19386_19438,i__19387_19439,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19402_19490,map__19402_19491__$1,gline_19492,gcol_19493,name_19494,vec__19397_19483,column_19484,column_info_19485,seq__19384_19477__$1,temp__4425__auto___19476,vec__19383_19433,line_19434,columns_19435,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19484], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19434,new cljs.core.Keyword(null,"col","col",-1959363084),column_19484,new cljs.core.Keyword(null,"name","name",1843675177),name_19494], null));
});})(seq__19398_19486,chunk__19399_19487,count__19400_19488,i__19401_19489,seq__19384_19436,chunk__19385_19437,count__19386_19438,i__19387_19439,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19402_19490,map__19402_19491__$1,gline_19492,gcol_19493,name_19494,vec__19397_19483,column_19484,column_info_19485,seq__19384_19477__$1,temp__4425__auto___19476,vec__19383_19433,line_19434,columns_19435,inverted))
,cljs.core.sorted_map.call(null)));

var G__19495 = seq__19398_19486;
var G__19496 = chunk__19399_19487;
var G__19497 = count__19400_19488;
var G__19498 = (i__19401_19489 + (1));
seq__19398_19486 = G__19495;
chunk__19399_19487 = G__19496;
count__19400_19488 = G__19497;
i__19401_19489 = G__19498;
continue;
} else {
var temp__4425__auto___19499__$1 = cljs.core.seq.call(null,seq__19398_19486);
if(temp__4425__auto___19499__$1){
var seq__19398_19500__$1 = temp__4425__auto___19499__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19398_19500__$1)){
var c__17655__auto___19501 = cljs.core.chunk_first.call(null,seq__19398_19500__$1);
var G__19502 = cljs.core.chunk_rest.call(null,seq__19398_19500__$1);
var G__19503 = c__17655__auto___19501;
var G__19504 = cljs.core.count.call(null,c__17655__auto___19501);
var G__19505 = (0);
seq__19398_19486 = G__19502;
chunk__19399_19487 = G__19503;
count__19400_19488 = G__19504;
i__19401_19489 = G__19505;
continue;
} else {
var map__19404_19506 = cljs.core.first.call(null,seq__19398_19500__$1);
var map__19404_19507__$1 = ((((!((map__19404_19506 == null)))?((((map__19404_19506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19404_19506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19404_19506):map__19404_19506);
var gline_19508 = cljs.core.get.call(null,map__19404_19507__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19509 = cljs.core.get.call(null,map__19404_19507__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19510 = cljs.core.get.call(null,map__19404_19507__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19508], null),cljs.core.fnil.call(null,((function (seq__19398_19486,chunk__19399_19487,count__19400_19488,i__19401_19489,seq__19384_19436,chunk__19385_19437,count__19386_19438,i__19387_19439,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19404_19506,map__19404_19507__$1,gline_19508,gcol_19509,name_19510,seq__19398_19500__$1,temp__4425__auto___19499__$1,vec__19397_19483,column_19484,column_info_19485,seq__19384_19477__$1,temp__4425__auto___19476,vec__19383_19433,line_19434,columns_19435,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19484], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19434,new cljs.core.Keyword(null,"col","col",-1959363084),column_19484,new cljs.core.Keyword(null,"name","name",1843675177),name_19510], null));
});})(seq__19398_19486,chunk__19399_19487,count__19400_19488,i__19401_19489,seq__19384_19436,chunk__19385_19437,count__19386_19438,i__19387_19439,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19404_19506,map__19404_19507__$1,gline_19508,gcol_19509,name_19510,seq__19398_19500__$1,temp__4425__auto___19499__$1,vec__19397_19483,column_19484,column_info_19485,seq__19384_19477__$1,temp__4425__auto___19476,vec__19383_19433,line_19434,columns_19435,inverted))
,cljs.core.sorted_map.call(null)));

var G__19511 = cljs.core.next.call(null,seq__19398_19500__$1);
var G__19512 = null;
var G__19513 = (0);
var G__19514 = (0);
seq__19398_19486 = G__19511;
chunk__19399_19487 = G__19512;
count__19400_19488 = G__19513;
i__19401_19489 = G__19514;
continue;
}
} else {
}
}
break;
}

var G__19515 = cljs.core.next.call(null,seq__19384_19477__$1);
var G__19516 = null;
var G__19517 = (0);
var G__19518 = (0);
seq__19384_19436 = G__19515;
chunk__19385_19437 = G__19516;
count__19386_19438 = G__19517;
i__19387_19439 = G__19518;
continue;
}
} else {
}
}
break;
}

var G__19519 = seq__19379_19429;
var G__19520 = chunk__19380_19430;
var G__19521 = count__19381_19431;
var G__19522 = (i__19382_19432 + (1));
seq__19379_19429 = G__19519;
chunk__19380_19430 = G__19520;
count__19381_19431 = G__19521;
i__19382_19432 = G__19522;
continue;
} else {
var temp__4425__auto___19523 = cljs.core.seq.call(null,seq__19379_19429);
if(temp__4425__auto___19523){
var seq__19379_19524__$1 = temp__4425__auto___19523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19379_19524__$1)){
var c__17655__auto___19525 = cljs.core.chunk_first.call(null,seq__19379_19524__$1);
var G__19526 = cljs.core.chunk_rest.call(null,seq__19379_19524__$1);
var G__19527 = c__17655__auto___19525;
var G__19528 = cljs.core.count.call(null,c__17655__auto___19525);
var G__19529 = (0);
seq__19379_19429 = G__19526;
chunk__19380_19430 = G__19527;
count__19381_19431 = G__19528;
i__19382_19432 = G__19529;
continue;
} else {
var vec__19406_19530 = cljs.core.first.call(null,seq__19379_19524__$1);
var line_19531 = cljs.core.nth.call(null,vec__19406_19530,(0),null);
var columns_19532 = cljs.core.nth.call(null,vec__19406_19530,(1),null);
var seq__19407_19533 = cljs.core.seq.call(null,columns_19532);
var chunk__19408_19534 = null;
var count__19409_19535 = (0);
var i__19410_19536 = (0);
while(true){
if((i__19410_19536 < count__19409_19535)){
var vec__19411_19537 = cljs.core._nth.call(null,chunk__19408_19534,i__19410_19536);
var column_19538 = cljs.core.nth.call(null,vec__19411_19537,(0),null);
var column_info_19539 = cljs.core.nth.call(null,vec__19411_19537,(1),null);
var seq__19412_19540 = cljs.core.seq.call(null,column_info_19539);
var chunk__19413_19541 = null;
var count__19414_19542 = (0);
var i__19415_19543 = (0);
while(true){
if((i__19415_19543 < count__19414_19542)){
var map__19416_19544 = cljs.core._nth.call(null,chunk__19413_19541,i__19415_19543);
var map__19416_19545__$1 = ((((!((map__19416_19544 == null)))?((((map__19416_19544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19416_19544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19416_19544):map__19416_19544);
var gline_19546 = cljs.core.get.call(null,map__19416_19545__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19547 = cljs.core.get.call(null,map__19416_19545__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19548 = cljs.core.get.call(null,map__19416_19545__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19546], null),cljs.core.fnil.call(null,((function (seq__19412_19540,chunk__19413_19541,count__19414_19542,i__19415_19543,seq__19407_19533,chunk__19408_19534,count__19409_19535,i__19410_19536,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19416_19544,map__19416_19545__$1,gline_19546,gcol_19547,name_19548,vec__19411_19537,column_19538,column_info_19539,vec__19406_19530,line_19531,columns_19532,seq__19379_19524__$1,temp__4425__auto___19523,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19538], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19531,new cljs.core.Keyword(null,"col","col",-1959363084),column_19538,new cljs.core.Keyword(null,"name","name",1843675177),name_19548], null));
});})(seq__19412_19540,chunk__19413_19541,count__19414_19542,i__19415_19543,seq__19407_19533,chunk__19408_19534,count__19409_19535,i__19410_19536,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19416_19544,map__19416_19545__$1,gline_19546,gcol_19547,name_19548,vec__19411_19537,column_19538,column_info_19539,vec__19406_19530,line_19531,columns_19532,seq__19379_19524__$1,temp__4425__auto___19523,inverted))
,cljs.core.sorted_map.call(null)));

var G__19549 = seq__19412_19540;
var G__19550 = chunk__19413_19541;
var G__19551 = count__19414_19542;
var G__19552 = (i__19415_19543 + (1));
seq__19412_19540 = G__19549;
chunk__19413_19541 = G__19550;
count__19414_19542 = G__19551;
i__19415_19543 = G__19552;
continue;
} else {
var temp__4425__auto___19553__$1 = cljs.core.seq.call(null,seq__19412_19540);
if(temp__4425__auto___19553__$1){
var seq__19412_19554__$1 = temp__4425__auto___19553__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19412_19554__$1)){
var c__17655__auto___19555 = cljs.core.chunk_first.call(null,seq__19412_19554__$1);
var G__19556 = cljs.core.chunk_rest.call(null,seq__19412_19554__$1);
var G__19557 = c__17655__auto___19555;
var G__19558 = cljs.core.count.call(null,c__17655__auto___19555);
var G__19559 = (0);
seq__19412_19540 = G__19556;
chunk__19413_19541 = G__19557;
count__19414_19542 = G__19558;
i__19415_19543 = G__19559;
continue;
} else {
var map__19418_19560 = cljs.core.first.call(null,seq__19412_19554__$1);
var map__19418_19561__$1 = ((((!((map__19418_19560 == null)))?((((map__19418_19560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19418_19560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19418_19560):map__19418_19560);
var gline_19562 = cljs.core.get.call(null,map__19418_19561__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19563 = cljs.core.get.call(null,map__19418_19561__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19564 = cljs.core.get.call(null,map__19418_19561__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19562], null),cljs.core.fnil.call(null,((function (seq__19412_19540,chunk__19413_19541,count__19414_19542,i__19415_19543,seq__19407_19533,chunk__19408_19534,count__19409_19535,i__19410_19536,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19418_19560,map__19418_19561__$1,gline_19562,gcol_19563,name_19564,seq__19412_19554__$1,temp__4425__auto___19553__$1,vec__19411_19537,column_19538,column_info_19539,vec__19406_19530,line_19531,columns_19532,seq__19379_19524__$1,temp__4425__auto___19523,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19538], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19531,new cljs.core.Keyword(null,"col","col",-1959363084),column_19538,new cljs.core.Keyword(null,"name","name",1843675177),name_19564], null));
});})(seq__19412_19540,chunk__19413_19541,count__19414_19542,i__19415_19543,seq__19407_19533,chunk__19408_19534,count__19409_19535,i__19410_19536,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19418_19560,map__19418_19561__$1,gline_19562,gcol_19563,name_19564,seq__19412_19554__$1,temp__4425__auto___19553__$1,vec__19411_19537,column_19538,column_info_19539,vec__19406_19530,line_19531,columns_19532,seq__19379_19524__$1,temp__4425__auto___19523,inverted))
,cljs.core.sorted_map.call(null)));

var G__19565 = cljs.core.next.call(null,seq__19412_19554__$1);
var G__19566 = null;
var G__19567 = (0);
var G__19568 = (0);
seq__19412_19540 = G__19565;
chunk__19413_19541 = G__19566;
count__19414_19542 = G__19567;
i__19415_19543 = G__19568;
continue;
}
} else {
}
}
break;
}

var G__19569 = seq__19407_19533;
var G__19570 = chunk__19408_19534;
var G__19571 = count__19409_19535;
var G__19572 = (i__19410_19536 + (1));
seq__19407_19533 = G__19569;
chunk__19408_19534 = G__19570;
count__19409_19535 = G__19571;
i__19410_19536 = G__19572;
continue;
} else {
var temp__4425__auto___19573__$1 = cljs.core.seq.call(null,seq__19407_19533);
if(temp__4425__auto___19573__$1){
var seq__19407_19574__$1 = temp__4425__auto___19573__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19407_19574__$1)){
var c__17655__auto___19575 = cljs.core.chunk_first.call(null,seq__19407_19574__$1);
var G__19576 = cljs.core.chunk_rest.call(null,seq__19407_19574__$1);
var G__19577 = c__17655__auto___19575;
var G__19578 = cljs.core.count.call(null,c__17655__auto___19575);
var G__19579 = (0);
seq__19407_19533 = G__19576;
chunk__19408_19534 = G__19577;
count__19409_19535 = G__19578;
i__19410_19536 = G__19579;
continue;
} else {
var vec__19420_19580 = cljs.core.first.call(null,seq__19407_19574__$1);
var column_19581 = cljs.core.nth.call(null,vec__19420_19580,(0),null);
var column_info_19582 = cljs.core.nth.call(null,vec__19420_19580,(1),null);
var seq__19421_19583 = cljs.core.seq.call(null,column_info_19582);
var chunk__19422_19584 = null;
var count__19423_19585 = (0);
var i__19424_19586 = (0);
while(true){
if((i__19424_19586 < count__19423_19585)){
var map__19425_19587 = cljs.core._nth.call(null,chunk__19422_19584,i__19424_19586);
var map__19425_19588__$1 = ((((!((map__19425_19587 == null)))?((((map__19425_19587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19425_19587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19425_19587):map__19425_19587);
var gline_19589 = cljs.core.get.call(null,map__19425_19588__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19590 = cljs.core.get.call(null,map__19425_19588__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19591 = cljs.core.get.call(null,map__19425_19588__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19589], null),cljs.core.fnil.call(null,((function (seq__19421_19583,chunk__19422_19584,count__19423_19585,i__19424_19586,seq__19407_19533,chunk__19408_19534,count__19409_19535,i__19410_19536,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19425_19587,map__19425_19588__$1,gline_19589,gcol_19590,name_19591,vec__19420_19580,column_19581,column_info_19582,seq__19407_19574__$1,temp__4425__auto___19573__$1,vec__19406_19530,line_19531,columns_19532,seq__19379_19524__$1,temp__4425__auto___19523,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19581], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19531,new cljs.core.Keyword(null,"col","col",-1959363084),column_19581,new cljs.core.Keyword(null,"name","name",1843675177),name_19591], null));
});})(seq__19421_19583,chunk__19422_19584,count__19423_19585,i__19424_19586,seq__19407_19533,chunk__19408_19534,count__19409_19535,i__19410_19536,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19425_19587,map__19425_19588__$1,gline_19589,gcol_19590,name_19591,vec__19420_19580,column_19581,column_info_19582,seq__19407_19574__$1,temp__4425__auto___19573__$1,vec__19406_19530,line_19531,columns_19532,seq__19379_19524__$1,temp__4425__auto___19523,inverted))
,cljs.core.sorted_map.call(null)));

var G__19592 = seq__19421_19583;
var G__19593 = chunk__19422_19584;
var G__19594 = count__19423_19585;
var G__19595 = (i__19424_19586 + (1));
seq__19421_19583 = G__19592;
chunk__19422_19584 = G__19593;
count__19423_19585 = G__19594;
i__19424_19586 = G__19595;
continue;
} else {
var temp__4425__auto___19596__$2 = cljs.core.seq.call(null,seq__19421_19583);
if(temp__4425__auto___19596__$2){
var seq__19421_19597__$1 = temp__4425__auto___19596__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19421_19597__$1)){
var c__17655__auto___19598 = cljs.core.chunk_first.call(null,seq__19421_19597__$1);
var G__19599 = cljs.core.chunk_rest.call(null,seq__19421_19597__$1);
var G__19600 = c__17655__auto___19598;
var G__19601 = cljs.core.count.call(null,c__17655__auto___19598);
var G__19602 = (0);
seq__19421_19583 = G__19599;
chunk__19422_19584 = G__19600;
count__19423_19585 = G__19601;
i__19424_19586 = G__19602;
continue;
} else {
var map__19427_19603 = cljs.core.first.call(null,seq__19421_19597__$1);
var map__19427_19604__$1 = ((((!((map__19427_19603 == null)))?((((map__19427_19603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19427_19603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19427_19603):map__19427_19603);
var gline_19605 = cljs.core.get.call(null,map__19427_19604__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19606 = cljs.core.get.call(null,map__19427_19604__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19607 = cljs.core.get.call(null,map__19427_19604__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19605], null),cljs.core.fnil.call(null,((function (seq__19421_19583,chunk__19422_19584,count__19423_19585,i__19424_19586,seq__19407_19533,chunk__19408_19534,count__19409_19535,i__19410_19536,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19427_19603,map__19427_19604__$1,gline_19605,gcol_19606,name_19607,seq__19421_19597__$1,temp__4425__auto___19596__$2,vec__19420_19580,column_19581,column_info_19582,seq__19407_19574__$1,temp__4425__auto___19573__$1,vec__19406_19530,line_19531,columns_19532,seq__19379_19524__$1,temp__4425__auto___19523,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19581], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19531,new cljs.core.Keyword(null,"col","col",-1959363084),column_19581,new cljs.core.Keyword(null,"name","name",1843675177),name_19607], null));
});})(seq__19421_19583,chunk__19422_19584,count__19423_19585,i__19424_19586,seq__19407_19533,chunk__19408_19534,count__19409_19535,i__19410_19536,seq__19379_19429,chunk__19380_19430,count__19381_19431,i__19382_19432,map__19427_19603,map__19427_19604__$1,gline_19605,gcol_19606,name_19607,seq__19421_19597__$1,temp__4425__auto___19596__$2,vec__19420_19580,column_19581,column_info_19582,seq__19407_19574__$1,temp__4425__auto___19573__$1,vec__19406_19530,line_19531,columns_19532,seq__19379_19524__$1,temp__4425__auto___19523,inverted))
,cljs.core.sorted_map.call(null)));

var G__19608 = cljs.core.next.call(null,seq__19421_19597__$1);
var G__19609 = null;
var G__19610 = (0);
var G__19611 = (0);
seq__19421_19583 = G__19608;
chunk__19422_19584 = G__19609;
count__19423_19585 = G__19610;
i__19424_19586 = G__19611;
continue;
}
} else {
}
}
break;
}

var G__19612 = cljs.core.next.call(null,seq__19407_19574__$1);
var G__19613 = null;
var G__19614 = (0);
var G__19615 = (0);
seq__19407_19533 = G__19612;
chunk__19408_19534 = G__19613;
count__19409_19535 = G__19614;
i__19410_19536 = G__19615;
continue;
}
} else {
}
}
break;
}

var G__19616 = cljs.core.next.call(null,seq__19379_19524__$1);
var G__19617 = null;
var G__19618 = (0);
var G__19619 = (0);
seq__19379_19429 = G__19616;
chunk__19380_19430 = G__19617;
count__19381_19431 = G__19618;
i__19382_19432 = G__19619;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1455042798651
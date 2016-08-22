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
return cljs.core.reduce.call(null,(function (m,p__19422){
var vec__19423 = p__19422;
var i = cljs.core.nth.call(null,vec__19423,(0),null);
var v = cljs.core.nth.call(null,vec__19423,(1),null);
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
var vec__19425 = seg;
var gcol = cljs.core.nth.call(null,vec__19425,(0),null);
var source = cljs.core.nth.call(null,vec__19425,(1),null);
var line = cljs.core.nth.call(null,vec__19425,(2),null);
var col = cljs.core.nth.call(null,vec__19425,(3),null);
var name = cljs.core.nth.call(null,vec__19425,(4),null);
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
var vec__19428 = seg;
var gcol = cljs.core.nth.call(null,vec__19428,(0),null);
var source = cljs.core.nth.call(null,vec__19428,(1),null);
var line = cljs.core.nth.call(null,vec__19428,(2),null);
var col = cljs.core.nth.call(null,vec__19428,(3),null);
var name = cljs.core.nth.call(null,vec__19428,(4),null);
var vec__19429 = relseg;
var rgcol = cljs.core.nth.call(null,vec__19429,(0),null);
var rsource = cljs.core.nth.call(null,vec__19429,(1),null);
var rline = cljs.core.nth.call(null,vec__19429,(2),null);
var rcol = cljs.core.nth.call(null,vec__19429,(3),null);
var rname = cljs.core.nth.call(null,vec__19429,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__17095__auto__ = source;
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__17095__auto__ = line;
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__17095__auto__ = col;
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__17095__auto__ = name;
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
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
var map__19432 = segmap;
var map__19432__$1 = ((((!((map__19432 == null)))?((((map__19432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19432):map__19432);
var gcol = cljs.core.get.call(null,map__19432__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__19432__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__19432__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__19432__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__19432__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__19432,map__19432__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__19432,map__19432__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__19432,map__19432__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__19432,map__19432__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__19432,map__19432__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__19432,map__19432__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args19434 = [];
var len__18153__auto___19438 = arguments.length;
var i__18154__auto___19439 = (0);
while(true){
if((i__18154__auto___19439 < len__18153__auto___19438)){
args19434.push((arguments[i__18154__auto___19439]));

var G__19440 = (i__18154__auto___19439 + (1));
i__18154__auto___19439 = G__19440;
continue;
} else {
}
break;
}

var G__19436 = args19434.length;
switch (G__19436) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19434.length)].join('')));

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
var vec__19437 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__19442 = cljs.core.next.call(null,segs__$1);
var G__19443 = nrelseg;
var G__19444 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__19442;
relseg__$1 = G__19443;
result__$1 = G__19444;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__19437,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__19437,(1),null);
var G__19445 = (gline + (1));
var G__19446 = cljs.core.next.call(null,lines__$1);
var G__19447 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__19448 = result__$1;
gline = G__19445;
lines__$1 = G__19446;
relseg = G__19447;
result = G__19448;
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
var map__19452 = segmap;
var map__19452__$1 = ((((!((map__19452 == null)))?((((map__19452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19452):map__19452);
var gcol = cljs.core.get.call(null,map__19452__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__19452__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__19452__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__19452__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__19452__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__19452,map__19452__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__19452,map__19452__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__19449_SHARP_){
return cljs.core.conj.call(null,p1__19449_SHARP_,d__$1);
});})(map__19452,map__19452__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__19452,map__19452__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args19454 = [];
var len__18153__auto___19458 = arguments.length;
var i__18154__auto___19459 = (0);
while(true){
if((i__18154__auto___19459 < len__18153__auto___19458)){
args19454.push((arguments[i__18154__auto___19459]));

var G__19460 = (i__18154__auto___19459 + (1));
i__18154__auto___19459 = G__19460;
continue;
} else {
}
break;
}

var G__19456 = args19454.length;
switch (G__19456) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19454.length)].join('')));

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
var vec__19457 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__19462 = cljs.core.next.call(null,segs__$1);
var G__19463 = nrelseg;
var G__19464 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__19462;
relseg__$1 = G__19463;
result__$1 = G__19464;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__19457,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__19457,(1),null);
var G__19465 = (gline + (1));
var G__19466 = cljs.core.next.call(null,lines__$1);
var G__19467 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__19468 = result__$1;
gline = G__19465;
lines__$1 = G__19466;
relseg = G__19467;
result = G__19468;
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
return (function (p__19475){
var vec__19476 = p__19475;
var _ = cljs.core.nth.call(null,vec__19476,(0),null);
var source = cljs.core.nth.call(null,vec__19476,(1),null);
var line = cljs.core.nth.call(null,vec__19476,(2),null);
var col = cljs.core.nth.call(null,vec__19476,(3),null);
var name = cljs.core.nth.call(null,vec__19476,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__19477){
var vec__19478 = p__19477;
var gcol = cljs.core.nth.call(null,vec__19478,(0),null);
var sidx = cljs.core.nth.call(null,vec__19478,(1),null);
var line = cljs.core.nth.call(null,vec__19478,(2),null);
var col = cljs.core.nth.call(null,vec__19478,(3),null);
var name = cljs.core.nth.call(null,vec__19478,(4),null);
var seg = vec__19478;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__19478,gcol,sidx,line,col,name,seg,relseg){
return (function (p__19479){
var vec__19480 = p__19479;
var _ = cljs.core.nth.call(null,vec__19480,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__19480,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__19480,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__19480,(3),null);
var lname = cljs.core.nth.call(null,vec__19480,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__17095__auto__ = name;
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__19478,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__17095__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17095__auto__)){
return or__17095__auto__;
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
var seq__19534 = cljs.core.seq.call(null,infos);
var chunk__19535 = null;
var count__19536 = (0);
var i__19537 = (0);
while(true){
if((i__19537 < count__19536)){
var info = cljs.core._nth.call(null,chunk__19535,i__19537);
var segv_19584 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_19585 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_19586 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_19585 > (lc_19586 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__19534,chunk__19535,count__19536,i__19537,segv_19584,gline_19585,lc_19586,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_19585 - (lc_19586 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_19584], null));
});})(seq__19534,chunk__19535,count__19536,i__19537,segv_19584,gline_19585,lc_19586,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__19534,chunk__19535,count__19536,i__19537,segv_19584,gline_19585,lc_19586,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19585], null),cljs.core.conj,segv_19584);
});})(seq__19534,chunk__19535,count__19536,i__19537,segv_19584,gline_19585,lc_19586,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__19587 = seq__19534;
var G__19588 = chunk__19535;
var G__19589 = count__19536;
var G__19590 = (i__19537 + (1));
seq__19534 = G__19587;
chunk__19535 = G__19588;
count__19536 = G__19589;
i__19537 = G__19590;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19534);
if(temp__4425__auto__){
var seq__19534__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19534__$1)){
var c__17898__auto__ = cljs.core.chunk_first.call(null,seq__19534__$1);
var G__19591 = cljs.core.chunk_rest.call(null,seq__19534__$1);
var G__19592 = c__17898__auto__;
var G__19593 = cljs.core.count.call(null,c__17898__auto__);
var G__19594 = (0);
seq__19534 = G__19591;
chunk__19535 = G__19592;
count__19536 = G__19593;
i__19537 = G__19594;
continue;
} else {
var info = cljs.core.first.call(null,seq__19534__$1);
var segv_19595 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_19596 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_19597 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_19596 > (lc_19597 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__19534,chunk__19535,count__19536,i__19537,segv_19595,gline_19596,lc_19597,info,seq__19534__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_19596 - (lc_19597 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_19595], null));
});})(seq__19534,chunk__19535,count__19536,i__19537,segv_19595,gline_19596,lc_19597,info,seq__19534__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__19534,chunk__19535,count__19536,i__19537,segv_19595,gline_19596,lc_19597,info,seq__19534__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19596], null),cljs.core.conj,segv_19595);
});})(seq__19534,chunk__19535,count__19536,i__19537,segv_19595,gline_19596,lc_19597,info,seq__19534__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__19598 = cljs.core.next.call(null,seq__19534__$1);
var G__19599 = null;
var G__19600 = (0);
var G__19601 = (0);
seq__19534 = G__19598;
chunk__19535 = G__19599;
count__19536 = G__19600;
i__19537 = G__19601;
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
var seq__19538_19602 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__19539_19603 = null;
var count__19540_19604 = (0);
var i__19541_19605 = (0);
while(true){
if((i__19541_19605 < count__19540_19604)){
var vec__19542_19606 = cljs.core._nth.call(null,chunk__19539_19603,i__19541_19605);
var source_idx_19607 = cljs.core.nth.call(null,vec__19542_19606,(0),null);
var vec__19543_19608 = cljs.core.nth.call(null,vec__19542_19606,(1),null);
var __19609 = cljs.core.nth.call(null,vec__19543_19608,(0),null);
var lines_19610__$1 = cljs.core.nth.call(null,vec__19543_19608,(1),null);
var seq__19544_19611 = cljs.core.seq.call(null,lines_19610__$1);
var chunk__19545_19612 = null;
var count__19546_19613 = (0);
var i__19547_19614 = (0);
while(true){
if((i__19547_19614 < count__19546_19613)){
var vec__19548_19615 = cljs.core._nth.call(null,chunk__19545_19612,i__19547_19614);
var line_19616 = cljs.core.nth.call(null,vec__19548_19615,(0),null);
var cols_19617 = cljs.core.nth.call(null,vec__19548_19615,(1),null);
var seq__19549_19618 = cljs.core.seq.call(null,cols_19617);
var chunk__19550_19619 = null;
var count__19551_19620 = (0);
var i__19552_19621 = (0);
while(true){
if((i__19552_19621 < count__19551_19620)){
var vec__19553_19622 = cljs.core._nth.call(null,chunk__19550_19619,i__19552_19621);
var col_19623 = cljs.core.nth.call(null,vec__19553_19622,(0),null);
var infos_19624 = cljs.core.nth.call(null,vec__19553_19622,(1),null);
encode_cols.call(null,infos_19624,source_idx_19607,line_19616,col_19623);

var G__19625 = seq__19549_19618;
var G__19626 = chunk__19550_19619;
var G__19627 = count__19551_19620;
var G__19628 = (i__19552_19621 + (1));
seq__19549_19618 = G__19625;
chunk__19550_19619 = G__19626;
count__19551_19620 = G__19627;
i__19552_19621 = G__19628;
continue;
} else {
var temp__4425__auto___19629 = cljs.core.seq.call(null,seq__19549_19618);
if(temp__4425__auto___19629){
var seq__19549_19630__$1 = temp__4425__auto___19629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19549_19630__$1)){
var c__17898__auto___19631 = cljs.core.chunk_first.call(null,seq__19549_19630__$1);
var G__19632 = cljs.core.chunk_rest.call(null,seq__19549_19630__$1);
var G__19633 = c__17898__auto___19631;
var G__19634 = cljs.core.count.call(null,c__17898__auto___19631);
var G__19635 = (0);
seq__19549_19618 = G__19632;
chunk__19550_19619 = G__19633;
count__19551_19620 = G__19634;
i__19552_19621 = G__19635;
continue;
} else {
var vec__19554_19636 = cljs.core.first.call(null,seq__19549_19630__$1);
var col_19637 = cljs.core.nth.call(null,vec__19554_19636,(0),null);
var infos_19638 = cljs.core.nth.call(null,vec__19554_19636,(1),null);
encode_cols.call(null,infos_19638,source_idx_19607,line_19616,col_19637);

var G__19639 = cljs.core.next.call(null,seq__19549_19630__$1);
var G__19640 = null;
var G__19641 = (0);
var G__19642 = (0);
seq__19549_19618 = G__19639;
chunk__19550_19619 = G__19640;
count__19551_19620 = G__19641;
i__19552_19621 = G__19642;
continue;
}
} else {
}
}
break;
}

var G__19643 = seq__19544_19611;
var G__19644 = chunk__19545_19612;
var G__19645 = count__19546_19613;
var G__19646 = (i__19547_19614 + (1));
seq__19544_19611 = G__19643;
chunk__19545_19612 = G__19644;
count__19546_19613 = G__19645;
i__19547_19614 = G__19646;
continue;
} else {
var temp__4425__auto___19647 = cljs.core.seq.call(null,seq__19544_19611);
if(temp__4425__auto___19647){
var seq__19544_19648__$1 = temp__4425__auto___19647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19544_19648__$1)){
var c__17898__auto___19649 = cljs.core.chunk_first.call(null,seq__19544_19648__$1);
var G__19650 = cljs.core.chunk_rest.call(null,seq__19544_19648__$1);
var G__19651 = c__17898__auto___19649;
var G__19652 = cljs.core.count.call(null,c__17898__auto___19649);
var G__19653 = (0);
seq__19544_19611 = G__19650;
chunk__19545_19612 = G__19651;
count__19546_19613 = G__19652;
i__19547_19614 = G__19653;
continue;
} else {
var vec__19555_19654 = cljs.core.first.call(null,seq__19544_19648__$1);
var line_19655 = cljs.core.nth.call(null,vec__19555_19654,(0),null);
var cols_19656 = cljs.core.nth.call(null,vec__19555_19654,(1),null);
var seq__19556_19657 = cljs.core.seq.call(null,cols_19656);
var chunk__19557_19658 = null;
var count__19558_19659 = (0);
var i__19559_19660 = (0);
while(true){
if((i__19559_19660 < count__19558_19659)){
var vec__19560_19661 = cljs.core._nth.call(null,chunk__19557_19658,i__19559_19660);
var col_19662 = cljs.core.nth.call(null,vec__19560_19661,(0),null);
var infos_19663 = cljs.core.nth.call(null,vec__19560_19661,(1),null);
encode_cols.call(null,infos_19663,source_idx_19607,line_19655,col_19662);

var G__19664 = seq__19556_19657;
var G__19665 = chunk__19557_19658;
var G__19666 = count__19558_19659;
var G__19667 = (i__19559_19660 + (1));
seq__19556_19657 = G__19664;
chunk__19557_19658 = G__19665;
count__19558_19659 = G__19666;
i__19559_19660 = G__19667;
continue;
} else {
var temp__4425__auto___19668__$1 = cljs.core.seq.call(null,seq__19556_19657);
if(temp__4425__auto___19668__$1){
var seq__19556_19669__$1 = temp__4425__auto___19668__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19556_19669__$1)){
var c__17898__auto___19670 = cljs.core.chunk_first.call(null,seq__19556_19669__$1);
var G__19671 = cljs.core.chunk_rest.call(null,seq__19556_19669__$1);
var G__19672 = c__17898__auto___19670;
var G__19673 = cljs.core.count.call(null,c__17898__auto___19670);
var G__19674 = (0);
seq__19556_19657 = G__19671;
chunk__19557_19658 = G__19672;
count__19558_19659 = G__19673;
i__19559_19660 = G__19674;
continue;
} else {
var vec__19561_19675 = cljs.core.first.call(null,seq__19556_19669__$1);
var col_19676 = cljs.core.nth.call(null,vec__19561_19675,(0),null);
var infos_19677 = cljs.core.nth.call(null,vec__19561_19675,(1),null);
encode_cols.call(null,infos_19677,source_idx_19607,line_19655,col_19676);

var G__19678 = cljs.core.next.call(null,seq__19556_19669__$1);
var G__19679 = null;
var G__19680 = (0);
var G__19681 = (0);
seq__19556_19657 = G__19678;
chunk__19557_19658 = G__19679;
count__19558_19659 = G__19680;
i__19559_19660 = G__19681;
continue;
}
} else {
}
}
break;
}

var G__19682 = cljs.core.next.call(null,seq__19544_19648__$1);
var G__19683 = null;
var G__19684 = (0);
var G__19685 = (0);
seq__19544_19611 = G__19682;
chunk__19545_19612 = G__19683;
count__19546_19613 = G__19684;
i__19547_19614 = G__19685;
continue;
}
} else {
}
}
break;
}

var G__19686 = seq__19538_19602;
var G__19687 = chunk__19539_19603;
var G__19688 = count__19540_19604;
var G__19689 = (i__19541_19605 + (1));
seq__19538_19602 = G__19686;
chunk__19539_19603 = G__19687;
count__19540_19604 = G__19688;
i__19541_19605 = G__19689;
continue;
} else {
var temp__4425__auto___19690 = cljs.core.seq.call(null,seq__19538_19602);
if(temp__4425__auto___19690){
var seq__19538_19691__$1 = temp__4425__auto___19690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19538_19691__$1)){
var c__17898__auto___19692 = cljs.core.chunk_first.call(null,seq__19538_19691__$1);
var G__19693 = cljs.core.chunk_rest.call(null,seq__19538_19691__$1);
var G__19694 = c__17898__auto___19692;
var G__19695 = cljs.core.count.call(null,c__17898__auto___19692);
var G__19696 = (0);
seq__19538_19602 = G__19693;
chunk__19539_19603 = G__19694;
count__19540_19604 = G__19695;
i__19541_19605 = G__19696;
continue;
} else {
var vec__19562_19697 = cljs.core.first.call(null,seq__19538_19691__$1);
var source_idx_19698 = cljs.core.nth.call(null,vec__19562_19697,(0),null);
var vec__19563_19699 = cljs.core.nth.call(null,vec__19562_19697,(1),null);
var __19700 = cljs.core.nth.call(null,vec__19563_19699,(0),null);
var lines_19701__$1 = cljs.core.nth.call(null,vec__19563_19699,(1),null);
var seq__19564_19702 = cljs.core.seq.call(null,lines_19701__$1);
var chunk__19565_19703 = null;
var count__19566_19704 = (0);
var i__19567_19705 = (0);
while(true){
if((i__19567_19705 < count__19566_19704)){
var vec__19568_19706 = cljs.core._nth.call(null,chunk__19565_19703,i__19567_19705);
var line_19707 = cljs.core.nth.call(null,vec__19568_19706,(0),null);
var cols_19708 = cljs.core.nth.call(null,vec__19568_19706,(1),null);
var seq__19569_19709 = cljs.core.seq.call(null,cols_19708);
var chunk__19570_19710 = null;
var count__19571_19711 = (0);
var i__19572_19712 = (0);
while(true){
if((i__19572_19712 < count__19571_19711)){
var vec__19573_19713 = cljs.core._nth.call(null,chunk__19570_19710,i__19572_19712);
var col_19714 = cljs.core.nth.call(null,vec__19573_19713,(0),null);
var infos_19715 = cljs.core.nth.call(null,vec__19573_19713,(1),null);
encode_cols.call(null,infos_19715,source_idx_19698,line_19707,col_19714);

var G__19716 = seq__19569_19709;
var G__19717 = chunk__19570_19710;
var G__19718 = count__19571_19711;
var G__19719 = (i__19572_19712 + (1));
seq__19569_19709 = G__19716;
chunk__19570_19710 = G__19717;
count__19571_19711 = G__19718;
i__19572_19712 = G__19719;
continue;
} else {
var temp__4425__auto___19720__$1 = cljs.core.seq.call(null,seq__19569_19709);
if(temp__4425__auto___19720__$1){
var seq__19569_19721__$1 = temp__4425__auto___19720__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19569_19721__$1)){
var c__17898__auto___19722 = cljs.core.chunk_first.call(null,seq__19569_19721__$1);
var G__19723 = cljs.core.chunk_rest.call(null,seq__19569_19721__$1);
var G__19724 = c__17898__auto___19722;
var G__19725 = cljs.core.count.call(null,c__17898__auto___19722);
var G__19726 = (0);
seq__19569_19709 = G__19723;
chunk__19570_19710 = G__19724;
count__19571_19711 = G__19725;
i__19572_19712 = G__19726;
continue;
} else {
var vec__19574_19727 = cljs.core.first.call(null,seq__19569_19721__$1);
var col_19728 = cljs.core.nth.call(null,vec__19574_19727,(0),null);
var infos_19729 = cljs.core.nth.call(null,vec__19574_19727,(1),null);
encode_cols.call(null,infos_19729,source_idx_19698,line_19707,col_19728);

var G__19730 = cljs.core.next.call(null,seq__19569_19721__$1);
var G__19731 = null;
var G__19732 = (0);
var G__19733 = (0);
seq__19569_19709 = G__19730;
chunk__19570_19710 = G__19731;
count__19571_19711 = G__19732;
i__19572_19712 = G__19733;
continue;
}
} else {
}
}
break;
}

var G__19734 = seq__19564_19702;
var G__19735 = chunk__19565_19703;
var G__19736 = count__19566_19704;
var G__19737 = (i__19567_19705 + (1));
seq__19564_19702 = G__19734;
chunk__19565_19703 = G__19735;
count__19566_19704 = G__19736;
i__19567_19705 = G__19737;
continue;
} else {
var temp__4425__auto___19738__$1 = cljs.core.seq.call(null,seq__19564_19702);
if(temp__4425__auto___19738__$1){
var seq__19564_19739__$1 = temp__4425__auto___19738__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19564_19739__$1)){
var c__17898__auto___19740 = cljs.core.chunk_first.call(null,seq__19564_19739__$1);
var G__19741 = cljs.core.chunk_rest.call(null,seq__19564_19739__$1);
var G__19742 = c__17898__auto___19740;
var G__19743 = cljs.core.count.call(null,c__17898__auto___19740);
var G__19744 = (0);
seq__19564_19702 = G__19741;
chunk__19565_19703 = G__19742;
count__19566_19704 = G__19743;
i__19567_19705 = G__19744;
continue;
} else {
var vec__19575_19745 = cljs.core.first.call(null,seq__19564_19739__$1);
var line_19746 = cljs.core.nth.call(null,vec__19575_19745,(0),null);
var cols_19747 = cljs.core.nth.call(null,vec__19575_19745,(1),null);
var seq__19576_19748 = cljs.core.seq.call(null,cols_19747);
var chunk__19577_19749 = null;
var count__19578_19750 = (0);
var i__19579_19751 = (0);
while(true){
if((i__19579_19751 < count__19578_19750)){
var vec__19580_19752 = cljs.core._nth.call(null,chunk__19577_19749,i__19579_19751);
var col_19753 = cljs.core.nth.call(null,vec__19580_19752,(0),null);
var infos_19754 = cljs.core.nth.call(null,vec__19580_19752,(1),null);
encode_cols.call(null,infos_19754,source_idx_19698,line_19746,col_19753);

var G__19755 = seq__19576_19748;
var G__19756 = chunk__19577_19749;
var G__19757 = count__19578_19750;
var G__19758 = (i__19579_19751 + (1));
seq__19576_19748 = G__19755;
chunk__19577_19749 = G__19756;
count__19578_19750 = G__19757;
i__19579_19751 = G__19758;
continue;
} else {
var temp__4425__auto___19759__$2 = cljs.core.seq.call(null,seq__19576_19748);
if(temp__4425__auto___19759__$2){
var seq__19576_19760__$1 = temp__4425__auto___19759__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19576_19760__$1)){
var c__17898__auto___19761 = cljs.core.chunk_first.call(null,seq__19576_19760__$1);
var G__19762 = cljs.core.chunk_rest.call(null,seq__19576_19760__$1);
var G__19763 = c__17898__auto___19761;
var G__19764 = cljs.core.count.call(null,c__17898__auto___19761);
var G__19765 = (0);
seq__19576_19748 = G__19762;
chunk__19577_19749 = G__19763;
count__19578_19750 = G__19764;
i__19579_19751 = G__19765;
continue;
} else {
var vec__19581_19766 = cljs.core.first.call(null,seq__19576_19760__$1);
var col_19767 = cljs.core.nth.call(null,vec__19581_19766,(0),null);
var infos_19768 = cljs.core.nth.call(null,vec__19581_19766,(1),null);
encode_cols.call(null,infos_19768,source_idx_19698,line_19746,col_19767);

var G__19769 = cljs.core.next.call(null,seq__19576_19760__$1);
var G__19770 = null;
var G__19771 = (0);
var G__19772 = (0);
seq__19576_19748 = G__19769;
chunk__19577_19749 = G__19770;
count__19578_19750 = G__19771;
i__19579_19751 = G__19772;
continue;
}
} else {
}
}
break;
}

var G__19773 = cljs.core.next.call(null,seq__19564_19739__$1);
var G__19774 = null;
var G__19775 = (0);
var G__19776 = (0);
seq__19564_19702 = G__19773;
chunk__19565_19703 = G__19774;
count__19566_19704 = G__19775;
i__19567_19705 = G__19776;
continue;
}
} else {
}
}
break;
}

var G__19777 = cljs.core.next.call(null,seq__19538_19691__$1);
var G__19778 = null;
var G__19779 = (0);
var G__19780 = (0);
seq__19538_19602 = G__19777;
chunk__19539_19603 = G__19778;
count__19540_19604 = G__19779;
i__19541_19605 = G__19780;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__19582 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__19481_SHARP_){
return [cljs.core.str(p1__19481_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__19482_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__19482_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__19483_SHARP_){
return clojure.string.join.call(null,",",p1__19483_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__19582__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__19583 = G__19582;
goog.object.set(G__19583,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__19583;
})():G__19582);
return G__19582__$1;
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
var vec__19786 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__19786,(0),null);
var col_map = cljs.core.nth.call(null,vec__19786,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__19787 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__19787,(0),null);
var infos = cljs.core.nth.call(null,vec__19787,(1),null);
var G__19791 = cljs.core.next.call(null,col_map_seq);
var G__19792 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__19787,col,infos,vec__19786,line,col_map){
return (function (v,p__19788){
var map__19789 = p__19788;
var map__19789__$1 = ((((!((map__19789 == null)))?((((map__19789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19789):map__19789);
var gline = cljs.core.get.call(null,map__19789__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__19789__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__19787,col,infos,vec__19786,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__19791;
new_cols = G__19792;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__19793 = cljs.core.next.call(null,line_map_seq);
var G__19794 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__19793;
new_lines = G__19794;
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
var seq__19845_19895 = cljs.core.seq.call(null,reverse_map);
var chunk__19846_19896 = null;
var count__19847_19897 = (0);
var i__19848_19898 = (0);
while(true){
if((i__19848_19898 < count__19847_19897)){
var vec__19849_19899 = cljs.core._nth.call(null,chunk__19846_19896,i__19848_19898);
var line_19900 = cljs.core.nth.call(null,vec__19849_19899,(0),null);
var columns_19901 = cljs.core.nth.call(null,vec__19849_19899,(1),null);
var seq__19850_19902 = cljs.core.seq.call(null,columns_19901);
var chunk__19851_19903 = null;
var count__19852_19904 = (0);
var i__19853_19905 = (0);
while(true){
if((i__19853_19905 < count__19852_19904)){
var vec__19854_19906 = cljs.core._nth.call(null,chunk__19851_19903,i__19853_19905);
var column_19907 = cljs.core.nth.call(null,vec__19854_19906,(0),null);
var column_info_19908 = cljs.core.nth.call(null,vec__19854_19906,(1),null);
var seq__19855_19909 = cljs.core.seq.call(null,column_info_19908);
var chunk__19856_19910 = null;
var count__19857_19911 = (0);
var i__19858_19912 = (0);
while(true){
if((i__19858_19912 < count__19857_19911)){
var map__19859_19913 = cljs.core._nth.call(null,chunk__19856_19910,i__19858_19912);
var map__19859_19914__$1 = ((((!((map__19859_19913 == null)))?((((map__19859_19913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19859_19913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19859_19913):map__19859_19913);
var gline_19915 = cljs.core.get.call(null,map__19859_19914__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19916 = cljs.core.get.call(null,map__19859_19914__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19917 = cljs.core.get.call(null,map__19859_19914__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19915], null),cljs.core.fnil.call(null,((function (seq__19855_19909,chunk__19856_19910,count__19857_19911,i__19858_19912,seq__19850_19902,chunk__19851_19903,count__19852_19904,i__19853_19905,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19859_19913,map__19859_19914__$1,gline_19915,gcol_19916,name_19917,vec__19854_19906,column_19907,column_info_19908,vec__19849_19899,line_19900,columns_19901,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19907], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19900,new cljs.core.Keyword(null,"col","col",-1959363084),column_19907,new cljs.core.Keyword(null,"name","name",1843675177),name_19917], null));
});})(seq__19855_19909,chunk__19856_19910,count__19857_19911,i__19858_19912,seq__19850_19902,chunk__19851_19903,count__19852_19904,i__19853_19905,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19859_19913,map__19859_19914__$1,gline_19915,gcol_19916,name_19917,vec__19854_19906,column_19907,column_info_19908,vec__19849_19899,line_19900,columns_19901,inverted))
,cljs.core.sorted_map.call(null)));

var G__19918 = seq__19855_19909;
var G__19919 = chunk__19856_19910;
var G__19920 = count__19857_19911;
var G__19921 = (i__19858_19912 + (1));
seq__19855_19909 = G__19918;
chunk__19856_19910 = G__19919;
count__19857_19911 = G__19920;
i__19858_19912 = G__19921;
continue;
} else {
var temp__4425__auto___19922 = cljs.core.seq.call(null,seq__19855_19909);
if(temp__4425__auto___19922){
var seq__19855_19923__$1 = temp__4425__auto___19922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19855_19923__$1)){
var c__17898__auto___19924 = cljs.core.chunk_first.call(null,seq__19855_19923__$1);
var G__19925 = cljs.core.chunk_rest.call(null,seq__19855_19923__$1);
var G__19926 = c__17898__auto___19924;
var G__19927 = cljs.core.count.call(null,c__17898__auto___19924);
var G__19928 = (0);
seq__19855_19909 = G__19925;
chunk__19856_19910 = G__19926;
count__19857_19911 = G__19927;
i__19858_19912 = G__19928;
continue;
} else {
var map__19861_19929 = cljs.core.first.call(null,seq__19855_19923__$1);
var map__19861_19930__$1 = ((((!((map__19861_19929 == null)))?((((map__19861_19929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19861_19929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19861_19929):map__19861_19929);
var gline_19931 = cljs.core.get.call(null,map__19861_19930__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19932 = cljs.core.get.call(null,map__19861_19930__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19933 = cljs.core.get.call(null,map__19861_19930__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19931], null),cljs.core.fnil.call(null,((function (seq__19855_19909,chunk__19856_19910,count__19857_19911,i__19858_19912,seq__19850_19902,chunk__19851_19903,count__19852_19904,i__19853_19905,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19861_19929,map__19861_19930__$1,gline_19931,gcol_19932,name_19933,seq__19855_19923__$1,temp__4425__auto___19922,vec__19854_19906,column_19907,column_info_19908,vec__19849_19899,line_19900,columns_19901,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19907], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19900,new cljs.core.Keyword(null,"col","col",-1959363084),column_19907,new cljs.core.Keyword(null,"name","name",1843675177),name_19933], null));
});})(seq__19855_19909,chunk__19856_19910,count__19857_19911,i__19858_19912,seq__19850_19902,chunk__19851_19903,count__19852_19904,i__19853_19905,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19861_19929,map__19861_19930__$1,gline_19931,gcol_19932,name_19933,seq__19855_19923__$1,temp__4425__auto___19922,vec__19854_19906,column_19907,column_info_19908,vec__19849_19899,line_19900,columns_19901,inverted))
,cljs.core.sorted_map.call(null)));

var G__19934 = cljs.core.next.call(null,seq__19855_19923__$1);
var G__19935 = null;
var G__19936 = (0);
var G__19937 = (0);
seq__19855_19909 = G__19934;
chunk__19856_19910 = G__19935;
count__19857_19911 = G__19936;
i__19858_19912 = G__19937;
continue;
}
} else {
}
}
break;
}

var G__19938 = seq__19850_19902;
var G__19939 = chunk__19851_19903;
var G__19940 = count__19852_19904;
var G__19941 = (i__19853_19905 + (1));
seq__19850_19902 = G__19938;
chunk__19851_19903 = G__19939;
count__19852_19904 = G__19940;
i__19853_19905 = G__19941;
continue;
} else {
var temp__4425__auto___19942 = cljs.core.seq.call(null,seq__19850_19902);
if(temp__4425__auto___19942){
var seq__19850_19943__$1 = temp__4425__auto___19942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19850_19943__$1)){
var c__17898__auto___19944 = cljs.core.chunk_first.call(null,seq__19850_19943__$1);
var G__19945 = cljs.core.chunk_rest.call(null,seq__19850_19943__$1);
var G__19946 = c__17898__auto___19944;
var G__19947 = cljs.core.count.call(null,c__17898__auto___19944);
var G__19948 = (0);
seq__19850_19902 = G__19945;
chunk__19851_19903 = G__19946;
count__19852_19904 = G__19947;
i__19853_19905 = G__19948;
continue;
} else {
var vec__19863_19949 = cljs.core.first.call(null,seq__19850_19943__$1);
var column_19950 = cljs.core.nth.call(null,vec__19863_19949,(0),null);
var column_info_19951 = cljs.core.nth.call(null,vec__19863_19949,(1),null);
var seq__19864_19952 = cljs.core.seq.call(null,column_info_19951);
var chunk__19865_19953 = null;
var count__19866_19954 = (0);
var i__19867_19955 = (0);
while(true){
if((i__19867_19955 < count__19866_19954)){
var map__19868_19956 = cljs.core._nth.call(null,chunk__19865_19953,i__19867_19955);
var map__19868_19957__$1 = ((((!((map__19868_19956 == null)))?((((map__19868_19956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19868_19956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19868_19956):map__19868_19956);
var gline_19958 = cljs.core.get.call(null,map__19868_19957__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19959 = cljs.core.get.call(null,map__19868_19957__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19960 = cljs.core.get.call(null,map__19868_19957__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19958], null),cljs.core.fnil.call(null,((function (seq__19864_19952,chunk__19865_19953,count__19866_19954,i__19867_19955,seq__19850_19902,chunk__19851_19903,count__19852_19904,i__19853_19905,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19868_19956,map__19868_19957__$1,gline_19958,gcol_19959,name_19960,vec__19863_19949,column_19950,column_info_19951,seq__19850_19943__$1,temp__4425__auto___19942,vec__19849_19899,line_19900,columns_19901,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19950], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19900,new cljs.core.Keyword(null,"col","col",-1959363084),column_19950,new cljs.core.Keyword(null,"name","name",1843675177),name_19960], null));
});})(seq__19864_19952,chunk__19865_19953,count__19866_19954,i__19867_19955,seq__19850_19902,chunk__19851_19903,count__19852_19904,i__19853_19905,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19868_19956,map__19868_19957__$1,gline_19958,gcol_19959,name_19960,vec__19863_19949,column_19950,column_info_19951,seq__19850_19943__$1,temp__4425__auto___19942,vec__19849_19899,line_19900,columns_19901,inverted))
,cljs.core.sorted_map.call(null)));

var G__19961 = seq__19864_19952;
var G__19962 = chunk__19865_19953;
var G__19963 = count__19866_19954;
var G__19964 = (i__19867_19955 + (1));
seq__19864_19952 = G__19961;
chunk__19865_19953 = G__19962;
count__19866_19954 = G__19963;
i__19867_19955 = G__19964;
continue;
} else {
var temp__4425__auto___19965__$1 = cljs.core.seq.call(null,seq__19864_19952);
if(temp__4425__auto___19965__$1){
var seq__19864_19966__$1 = temp__4425__auto___19965__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19864_19966__$1)){
var c__17898__auto___19967 = cljs.core.chunk_first.call(null,seq__19864_19966__$1);
var G__19968 = cljs.core.chunk_rest.call(null,seq__19864_19966__$1);
var G__19969 = c__17898__auto___19967;
var G__19970 = cljs.core.count.call(null,c__17898__auto___19967);
var G__19971 = (0);
seq__19864_19952 = G__19968;
chunk__19865_19953 = G__19969;
count__19866_19954 = G__19970;
i__19867_19955 = G__19971;
continue;
} else {
var map__19870_19972 = cljs.core.first.call(null,seq__19864_19966__$1);
var map__19870_19973__$1 = ((((!((map__19870_19972 == null)))?((((map__19870_19972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19870_19972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19870_19972):map__19870_19972);
var gline_19974 = cljs.core.get.call(null,map__19870_19973__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_19975 = cljs.core.get.call(null,map__19870_19973__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_19976 = cljs.core.get.call(null,map__19870_19973__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_19974], null),cljs.core.fnil.call(null,((function (seq__19864_19952,chunk__19865_19953,count__19866_19954,i__19867_19955,seq__19850_19902,chunk__19851_19903,count__19852_19904,i__19853_19905,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19870_19972,map__19870_19973__$1,gline_19974,gcol_19975,name_19976,seq__19864_19966__$1,temp__4425__auto___19965__$1,vec__19863_19949,column_19950,column_info_19951,seq__19850_19943__$1,temp__4425__auto___19942,vec__19849_19899,line_19900,columns_19901,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_19950], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19900,new cljs.core.Keyword(null,"col","col",-1959363084),column_19950,new cljs.core.Keyword(null,"name","name",1843675177),name_19976], null));
});})(seq__19864_19952,chunk__19865_19953,count__19866_19954,i__19867_19955,seq__19850_19902,chunk__19851_19903,count__19852_19904,i__19853_19905,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19870_19972,map__19870_19973__$1,gline_19974,gcol_19975,name_19976,seq__19864_19966__$1,temp__4425__auto___19965__$1,vec__19863_19949,column_19950,column_info_19951,seq__19850_19943__$1,temp__4425__auto___19942,vec__19849_19899,line_19900,columns_19901,inverted))
,cljs.core.sorted_map.call(null)));

var G__19977 = cljs.core.next.call(null,seq__19864_19966__$1);
var G__19978 = null;
var G__19979 = (0);
var G__19980 = (0);
seq__19864_19952 = G__19977;
chunk__19865_19953 = G__19978;
count__19866_19954 = G__19979;
i__19867_19955 = G__19980;
continue;
}
} else {
}
}
break;
}

var G__19981 = cljs.core.next.call(null,seq__19850_19943__$1);
var G__19982 = null;
var G__19983 = (0);
var G__19984 = (0);
seq__19850_19902 = G__19981;
chunk__19851_19903 = G__19982;
count__19852_19904 = G__19983;
i__19853_19905 = G__19984;
continue;
}
} else {
}
}
break;
}

var G__19985 = seq__19845_19895;
var G__19986 = chunk__19846_19896;
var G__19987 = count__19847_19897;
var G__19988 = (i__19848_19898 + (1));
seq__19845_19895 = G__19985;
chunk__19846_19896 = G__19986;
count__19847_19897 = G__19987;
i__19848_19898 = G__19988;
continue;
} else {
var temp__4425__auto___19989 = cljs.core.seq.call(null,seq__19845_19895);
if(temp__4425__auto___19989){
var seq__19845_19990__$1 = temp__4425__auto___19989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19845_19990__$1)){
var c__17898__auto___19991 = cljs.core.chunk_first.call(null,seq__19845_19990__$1);
var G__19992 = cljs.core.chunk_rest.call(null,seq__19845_19990__$1);
var G__19993 = c__17898__auto___19991;
var G__19994 = cljs.core.count.call(null,c__17898__auto___19991);
var G__19995 = (0);
seq__19845_19895 = G__19992;
chunk__19846_19896 = G__19993;
count__19847_19897 = G__19994;
i__19848_19898 = G__19995;
continue;
} else {
var vec__19872_19996 = cljs.core.first.call(null,seq__19845_19990__$1);
var line_19997 = cljs.core.nth.call(null,vec__19872_19996,(0),null);
var columns_19998 = cljs.core.nth.call(null,vec__19872_19996,(1),null);
var seq__19873_19999 = cljs.core.seq.call(null,columns_19998);
var chunk__19874_20000 = null;
var count__19875_20001 = (0);
var i__19876_20002 = (0);
while(true){
if((i__19876_20002 < count__19875_20001)){
var vec__19877_20003 = cljs.core._nth.call(null,chunk__19874_20000,i__19876_20002);
var column_20004 = cljs.core.nth.call(null,vec__19877_20003,(0),null);
var column_info_20005 = cljs.core.nth.call(null,vec__19877_20003,(1),null);
var seq__19878_20006 = cljs.core.seq.call(null,column_info_20005);
var chunk__19879_20007 = null;
var count__19880_20008 = (0);
var i__19881_20009 = (0);
while(true){
if((i__19881_20009 < count__19880_20008)){
var map__19882_20010 = cljs.core._nth.call(null,chunk__19879_20007,i__19881_20009);
var map__19882_20011__$1 = ((((!((map__19882_20010 == null)))?((((map__19882_20010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19882_20010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19882_20010):map__19882_20010);
var gline_20012 = cljs.core.get.call(null,map__19882_20011__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20013 = cljs.core.get.call(null,map__19882_20011__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20014 = cljs.core.get.call(null,map__19882_20011__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20012], null),cljs.core.fnil.call(null,((function (seq__19878_20006,chunk__19879_20007,count__19880_20008,i__19881_20009,seq__19873_19999,chunk__19874_20000,count__19875_20001,i__19876_20002,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19882_20010,map__19882_20011__$1,gline_20012,gcol_20013,name_20014,vec__19877_20003,column_20004,column_info_20005,vec__19872_19996,line_19997,columns_19998,seq__19845_19990__$1,temp__4425__auto___19989,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_20004], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19997,new cljs.core.Keyword(null,"col","col",-1959363084),column_20004,new cljs.core.Keyword(null,"name","name",1843675177),name_20014], null));
});})(seq__19878_20006,chunk__19879_20007,count__19880_20008,i__19881_20009,seq__19873_19999,chunk__19874_20000,count__19875_20001,i__19876_20002,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19882_20010,map__19882_20011__$1,gline_20012,gcol_20013,name_20014,vec__19877_20003,column_20004,column_info_20005,vec__19872_19996,line_19997,columns_19998,seq__19845_19990__$1,temp__4425__auto___19989,inverted))
,cljs.core.sorted_map.call(null)));

var G__20015 = seq__19878_20006;
var G__20016 = chunk__19879_20007;
var G__20017 = count__19880_20008;
var G__20018 = (i__19881_20009 + (1));
seq__19878_20006 = G__20015;
chunk__19879_20007 = G__20016;
count__19880_20008 = G__20017;
i__19881_20009 = G__20018;
continue;
} else {
var temp__4425__auto___20019__$1 = cljs.core.seq.call(null,seq__19878_20006);
if(temp__4425__auto___20019__$1){
var seq__19878_20020__$1 = temp__4425__auto___20019__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19878_20020__$1)){
var c__17898__auto___20021 = cljs.core.chunk_first.call(null,seq__19878_20020__$1);
var G__20022 = cljs.core.chunk_rest.call(null,seq__19878_20020__$1);
var G__20023 = c__17898__auto___20021;
var G__20024 = cljs.core.count.call(null,c__17898__auto___20021);
var G__20025 = (0);
seq__19878_20006 = G__20022;
chunk__19879_20007 = G__20023;
count__19880_20008 = G__20024;
i__19881_20009 = G__20025;
continue;
} else {
var map__19884_20026 = cljs.core.first.call(null,seq__19878_20020__$1);
var map__19884_20027__$1 = ((((!((map__19884_20026 == null)))?((((map__19884_20026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19884_20026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19884_20026):map__19884_20026);
var gline_20028 = cljs.core.get.call(null,map__19884_20027__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20029 = cljs.core.get.call(null,map__19884_20027__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20030 = cljs.core.get.call(null,map__19884_20027__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20028], null),cljs.core.fnil.call(null,((function (seq__19878_20006,chunk__19879_20007,count__19880_20008,i__19881_20009,seq__19873_19999,chunk__19874_20000,count__19875_20001,i__19876_20002,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19884_20026,map__19884_20027__$1,gline_20028,gcol_20029,name_20030,seq__19878_20020__$1,temp__4425__auto___20019__$1,vec__19877_20003,column_20004,column_info_20005,vec__19872_19996,line_19997,columns_19998,seq__19845_19990__$1,temp__4425__auto___19989,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_20004], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19997,new cljs.core.Keyword(null,"col","col",-1959363084),column_20004,new cljs.core.Keyword(null,"name","name",1843675177),name_20030], null));
});})(seq__19878_20006,chunk__19879_20007,count__19880_20008,i__19881_20009,seq__19873_19999,chunk__19874_20000,count__19875_20001,i__19876_20002,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19884_20026,map__19884_20027__$1,gline_20028,gcol_20029,name_20030,seq__19878_20020__$1,temp__4425__auto___20019__$1,vec__19877_20003,column_20004,column_info_20005,vec__19872_19996,line_19997,columns_19998,seq__19845_19990__$1,temp__4425__auto___19989,inverted))
,cljs.core.sorted_map.call(null)));

var G__20031 = cljs.core.next.call(null,seq__19878_20020__$1);
var G__20032 = null;
var G__20033 = (0);
var G__20034 = (0);
seq__19878_20006 = G__20031;
chunk__19879_20007 = G__20032;
count__19880_20008 = G__20033;
i__19881_20009 = G__20034;
continue;
}
} else {
}
}
break;
}

var G__20035 = seq__19873_19999;
var G__20036 = chunk__19874_20000;
var G__20037 = count__19875_20001;
var G__20038 = (i__19876_20002 + (1));
seq__19873_19999 = G__20035;
chunk__19874_20000 = G__20036;
count__19875_20001 = G__20037;
i__19876_20002 = G__20038;
continue;
} else {
var temp__4425__auto___20039__$1 = cljs.core.seq.call(null,seq__19873_19999);
if(temp__4425__auto___20039__$1){
var seq__19873_20040__$1 = temp__4425__auto___20039__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19873_20040__$1)){
var c__17898__auto___20041 = cljs.core.chunk_first.call(null,seq__19873_20040__$1);
var G__20042 = cljs.core.chunk_rest.call(null,seq__19873_20040__$1);
var G__20043 = c__17898__auto___20041;
var G__20044 = cljs.core.count.call(null,c__17898__auto___20041);
var G__20045 = (0);
seq__19873_19999 = G__20042;
chunk__19874_20000 = G__20043;
count__19875_20001 = G__20044;
i__19876_20002 = G__20045;
continue;
} else {
var vec__19886_20046 = cljs.core.first.call(null,seq__19873_20040__$1);
var column_20047 = cljs.core.nth.call(null,vec__19886_20046,(0),null);
var column_info_20048 = cljs.core.nth.call(null,vec__19886_20046,(1),null);
var seq__19887_20049 = cljs.core.seq.call(null,column_info_20048);
var chunk__19888_20050 = null;
var count__19889_20051 = (0);
var i__19890_20052 = (0);
while(true){
if((i__19890_20052 < count__19889_20051)){
var map__19891_20053 = cljs.core._nth.call(null,chunk__19888_20050,i__19890_20052);
var map__19891_20054__$1 = ((((!((map__19891_20053 == null)))?((((map__19891_20053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19891_20053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19891_20053):map__19891_20053);
var gline_20055 = cljs.core.get.call(null,map__19891_20054__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20056 = cljs.core.get.call(null,map__19891_20054__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20057 = cljs.core.get.call(null,map__19891_20054__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20055], null),cljs.core.fnil.call(null,((function (seq__19887_20049,chunk__19888_20050,count__19889_20051,i__19890_20052,seq__19873_19999,chunk__19874_20000,count__19875_20001,i__19876_20002,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19891_20053,map__19891_20054__$1,gline_20055,gcol_20056,name_20057,vec__19886_20046,column_20047,column_info_20048,seq__19873_20040__$1,temp__4425__auto___20039__$1,vec__19872_19996,line_19997,columns_19998,seq__19845_19990__$1,temp__4425__auto___19989,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_20047], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19997,new cljs.core.Keyword(null,"col","col",-1959363084),column_20047,new cljs.core.Keyword(null,"name","name",1843675177),name_20057], null));
});})(seq__19887_20049,chunk__19888_20050,count__19889_20051,i__19890_20052,seq__19873_19999,chunk__19874_20000,count__19875_20001,i__19876_20002,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19891_20053,map__19891_20054__$1,gline_20055,gcol_20056,name_20057,vec__19886_20046,column_20047,column_info_20048,seq__19873_20040__$1,temp__4425__auto___20039__$1,vec__19872_19996,line_19997,columns_19998,seq__19845_19990__$1,temp__4425__auto___19989,inverted))
,cljs.core.sorted_map.call(null)));

var G__20058 = seq__19887_20049;
var G__20059 = chunk__19888_20050;
var G__20060 = count__19889_20051;
var G__20061 = (i__19890_20052 + (1));
seq__19887_20049 = G__20058;
chunk__19888_20050 = G__20059;
count__19889_20051 = G__20060;
i__19890_20052 = G__20061;
continue;
} else {
var temp__4425__auto___20062__$2 = cljs.core.seq.call(null,seq__19887_20049);
if(temp__4425__auto___20062__$2){
var seq__19887_20063__$1 = temp__4425__auto___20062__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19887_20063__$1)){
var c__17898__auto___20064 = cljs.core.chunk_first.call(null,seq__19887_20063__$1);
var G__20065 = cljs.core.chunk_rest.call(null,seq__19887_20063__$1);
var G__20066 = c__17898__auto___20064;
var G__20067 = cljs.core.count.call(null,c__17898__auto___20064);
var G__20068 = (0);
seq__19887_20049 = G__20065;
chunk__19888_20050 = G__20066;
count__19889_20051 = G__20067;
i__19890_20052 = G__20068;
continue;
} else {
var map__19893_20069 = cljs.core.first.call(null,seq__19887_20063__$1);
var map__19893_20070__$1 = ((((!((map__19893_20069 == null)))?((((map__19893_20069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19893_20069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19893_20069):map__19893_20069);
var gline_20071 = cljs.core.get.call(null,map__19893_20070__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_20072 = cljs.core.get.call(null,map__19893_20070__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_20073 = cljs.core.get.call(null,map__19893_20070__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_20071], null),cljs.core.fnil.call(null,((function (seq__19887_20049,chunk__19888_20050,count__19889_20051,i__19890_20052,seq__19873_19999,chunk__19874_20000,count__19875_20001,i__19876_20002,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19893_20069,map__19893_20070__$1,gline_20071,gcol_20072,name_20073,seq__19887_20063__$1,temp__4425__auto___20062__$2,vec__19886_20046,column_20047,column_info_20048,seq__19873_20040__$1,temp__4425__auto___20039__$1,vec__19872_19996,line_19997,columns_19998,seq__19845_19990__$1,temp__4425__auto___19989,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_20047], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_19997,new cljs.core.Keyword(null,"col","col",-1959363084),column_20047,new cljs.core.Keyword(null,"name","name",1843675177),name_20073], null));
});})(seq__19887_20049,chunk__19888_20050,count__19889_20051,i__19890_20052,seq__19873_19999,chunk__19874_20000,count__19875_20001,i__19876_20002,seq__19845_19895,chunk__19846_19896,count__19847_19897,i__19848_19898,map__19893_20069,map__19893_20070__$1,gline_20071,gcol_20072,name_20073,seq__19887_20063__$1,temp__4425__auto___20062__$2,vec__19886_20046,column_20047,column_info_20048,seq__19873_20040__$1,temp__4425__auto___20039__$1,vec__19872_19996,line_19997,columns_19998,seq__19845_19990__$1,temp__4425__auto___19989,inverted))
,cljs.core.sorted_map.call(null)));

var G__20074 = cljs.core.next.call(null,seq__19887_20063__$1);
var G__20075 = null;
var G__20076 = (0);
var G__20077 = (0);
seq__19887_20049 = G__20074;
chunk__19888_20050 = G__20075;
count__19889_20051 = G__20076;
i__19890_20052 = G__20077;
continue;
}
} else {
}
}
break;
}

var G__20078 = cljs.core.next.call(null,seq__19873_20040__$1);
var G__20079 = null;
var G__20080 = (0);
var G__20081 = (0);
seq__19873_19999 = G__20078;
chunk__19874_20000 = G__20079;
count__19875_20001 = G__20080;
i__19876_20002 = G__20081;
continue;
}
} else {
}
}
break;
}

var G__20082 = cljs.core.next.call(null,seq__19845_19990__$1);
var G__20083 = null;
var G__20084 = (0);
var G__20085 = (0);
seq__19845_19895 = G__20082;
chunk__19846_19896 = G__20083;
count__19847_19897 = G__20084;
i__19848_19898 = G__20085;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
// Compiled by ClojureScript 1.7.170 {}
goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.call(null,index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.call(null,"\n",cljs.core.get.call(null,text,counter))){
var G__24215 = (line + (1));
var G__24216 = (1);
var G__24217 = (counter + (1));
line = G__24215;
col = G__24216;
counter = G__24217;
continue;
} else {
var G__24218 = line;
var G__24219 = (col + (1));
var G__24220 = (counter + (1));
line = G__24218;
col = G__24219;
counter = G__24220;
continue;

}
}
break;
}
});
instaparse.failure.newline_chars_QMARK_ = (function instaparse$failure$newline_chars_QMARK_(c){
return cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["\n",null,"\r",null], null), null).call(null,c));
});
/**
 * Like the line-seq that comes with clojure, but operates directly on
 * a string instead of a BufferedReader. Probably slow.
 */
instaparse.failure.line_seq = (function instaparse$failure$line_seq(s){
if(cljs.core.empty_QMARK_.call(null,s)){
return null;
} else {
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.mapcat.call(null,(function (coll){
if(cljs.core.truth_(instaparse.failure.newline_chars_QMARK_.call(null,cljs.core.first.call(null,coll)))){
return cljs.core.map.call(null,cljs.core.constantly.call(null,cljs.core.PersistentVector.EMPTY),coll);
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,coll);
}
}),cljs.core.partition_by.call(null,instaparse.failure.newline_chars_QMARK_,clojure.string.replace.call(null,s,"\r\n","\n"))));
}
});
/**
 * Returns nth line of text, 1-based
 */
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
try{return cljs.core.nth.call(null,instaparse.failure.line_seq.call(null,text),(n - (1)));
}catch (e24222){if((e24222 instanceof Error)){
var e = e24222;
return "";
} else {
throw e24222;

}
}});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.repeat.call(null,(n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.call(null,failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line.call(null,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.call(null,"NOT ");

return cljs.core.print.call(null,new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.call(null,instaparse.print.char_range__GT_str.call(null,r));
} else {
if((r instanceof RegExp)){
return cljs.core.print.call(null,instaparse.print.regexp__GT_str.call(null,r));
} else {
return cljs.core.pr.call(null,r);

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__24223){
var map__24234 = p__24223;
var map__24234__$1 = ((((!((map__24234 == null)))?((((map__24234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24234):map__24234);
var line = cljs.core.get.call(null,map__24234__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__24234__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__24234__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__24234__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.call(null,"Parse error at line",line,", column",column,":\n");

cljs.core.println.call(null,text);

cljs.core.println.call(null,instaparse.failure.marker.call(null,column));

var full_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count.call(null,full_reasons) + cljs.core.count.call(null,partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.call(null,(1),total)){
cljs.core.println.call(null,"Expected:");
} else {
cljs.core.println.call(null,"Expected one of:");

}
}

var seq__24236_24244 = cljs.core.seq.call(null,full_reasons);
var chunk__24237_24245 = null;
var count__24238_24246 = (0);
var i__24239_24247 = (0);
while(true){
if((i__24239_24247 < count__24238_24246)){
var r_24248 = cljs.core._nth.call(null,chunk__24237_24245,i__24239_24247);
instaparse.failure.print_reason.call(null,r_24248);

cljs.core.println.call(null," (followed by end-of-string)");

var G__24249 = seq__24236_24244;
var G__24250 = chunk__24237_24245;
var G__24251 = count__24238_24246;
var G__24252 = (i__24239_24247 + (1));
seq__24236_24244 = G__24249;
chunk__24237_24245 = G__24250;
count__24238_24246 = G__24251;
i__24239_24247 = G__24252;
continue;
} else {
var temp__4425__auto___24253 = cljs.core.seq.call(null,seq__24236_24244);
if(temp__4425__auto___24253){
var seq__24236_24254__$1 = temp__4425__auto___24253;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24236_24254__$1)){
var c__17655__auto___24255 = cljs.core.chunk_first.call(null,seq__24236_24254__$1);
var G__24256 = cljs.core.chunk_rest.call(null,seq__24236_24254__$1);
var G__24257 = c__17655__auto___24255;
var G__24258 = cljs.core.count.call(null,c__17655__auto___24255);
var G__24259 = (0);
seq__24236_24244 = G__24256;
chunk__24237_24245 = G__24257;
count__24238_24246 = G__24258;
i__24239_24247 = G__24259;
continue;
} else {
var r_24260 = cljs.core.first.call(null,seq__24236_24254__$1);
instaparse.failure.print_reason.call(null,r_24260);

cljs.core.println.call(null," (followed by end-of-string)");

var G__24261 = cljs.core.next.call(null,seq__24236_24254__$1);
var G__24262 = null;
var G__24263 = (0);
var G__24264 = (0);
seq__24236_24244 = G__24261;
chunk__24237_24245 = G__24262;
count__24238_24246 = G__24263;
i__24239_24247 = G__24264;
continue;
}
} else {
}
}
break;
}

var seq__24240 = cljs.core.seq.call(null,partial_reasons);
var chunk__24241 = null;
var count__24242 = (0);
var i__24243 = (0);
while(true){
if((i__24243 < count__24242)){
var r = cljs.core._nth.call(null,chunk__24241,i__24243);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__24265 = seq__24240;
var G__24266 = chunk__24241;
var G__24267 = count__24242;
var G__24268 = (i__24243 + (1));
seq__24240 = G__24265;
chunk__24241 = G__24266;
count__24242 = G__24267;
i__24243 = G__24268;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24240);
if(temp__4425__auto__){
var seq__24240__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24240__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__24240__$1);
var G__24269 = cljs.core.chunk_rest.call(null,seq__24240__$1);
var G__24270 = c__17655__auto__;
var G__24271 = cljs.core.count.call(null,c__17655__auto__);
var G__24272 = (0);
seq__24240 = G__24269;
chunk__24241 = G__24270;
count__24242 = G__24271;
i__24243 = G__24272;
continue;
} else {
var r = cljs.core.first.call(null,seq__24240__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__24273 = cljs.core.next.call(null,seq__24240__$1);
var G__24274 = null;
var G__24275 = (0);
var G__24276 = (0);
seq__24240 = G__24273;
chunk__24241 = G__24274;
count__24242 = G__24275;
i__24243 = G__24276;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map?rel=1455043062586
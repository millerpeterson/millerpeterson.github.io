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
var G__23049 = (line + (1));
var G__23050 = (1);
var G__23051 = (counter + (1));
line = G__23049;
col = G__23050;
counter = G__23051;
continue;
} else {
var G__23052 = line;
var G__23053 = (col + (1));
var G__23054 = (counter + (1));
line = G__23052;
col = G__23053;
counter = G__23054;
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
}catch (e23056){if((e23056 instanceof Error)){
var e = e23056;
return "";
} else {
throw e23056;

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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__23057){
var map__23068 = p__23057;
var map__23068__$1 = ((((!((map__23068 == null)))?((((map__23068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23068):map__23068);
var line = cljs.core.get.call(null,map__23068__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__23068__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__23068__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__23068__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__23070_23078 = cljs.core.seq.call(null,full_reasons);
var chunk__23071_23079 = null;
var count__23072_23080 = (0);
var i__23073_23081 = (0);
while(true){
if((i__23073_23081 < count__23072_23080)){
var r_23082 = cljs.core._nth.call(null,chunk__23071_23079,i__23073_23081);
instaparse.failure.print_reason.call(null,r_23082);

cljs.core.println.call(null," (followed by end-of-string)");

var G__23083 = seq__23070_23078;
var G__23084 = chunk__23071_23079;
var G__23085 = count__23072_23080;
var G__23086 = (i__23073_23081 + (1));
seq__23070_23078 = G__23083;
chunk__23071_23079 = G__23084;
count__23072_23080 = G__23085;
i__23073_23081 = G__23086;
continue;
} else {
var temp__4425__auto___23087 = cljs.core.seq.call(null,seq__23070_23078);
if(temp__4425__auto___23087){
var seq__23070_23088__$1 = temp__4425__auto___23087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23070_23088__$1)){
var c__17898__auto___23089 = cljs.core.chunk_first.call(null,seq__23070_23088__$1);
var G__23090 = cljs.core.chunk_rest.call(null,seq__23070_23088__$1);
var G__23091 = c__17898__auto___23089;
var G__23092 = cljs.core.count.call(null,c__17898__auto___23089);
var G__23093 = (0);
seq__23070_23078 = G__23090;
chunk__23071_23079 = G__23091;
count__23072_23080 = G__23092;
i__23073_23081 = G__23093;
continue;
} else {
var r_23094 = cljs.core.first.call(null,seq__23070_23088__$1);
instaparse.failure.print_reason.call(null,r_23094);

cljs.core.println.call(null," (followed by end-of-string)");

var G__23095 = cljs.core.next.call(null,seq__23070_23088__$1);
var G__23096 = null;
var G__23097 = (0);
var G__23098 = (0);
seq__23070_23078 = G__23095;
chunk__23071_23079 = G__23096;
count__23072_23080 = G__23097;
i__23073_23081 = G__23098;
continue;
}
} else {
}
}
break;
}

var seq__23074 = cljs.core.seq.call(null,partial_reasons);
var chunk__23075 = null;
var count__23076 = (0);
var i__23077 = (0);
while(true){
if((i__23077 < count__23076)){
var r = cljs.core._nth.call(null,chunk__23075,i__23077);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__23099 = seq__23074;
var G__23100 = chunk__23075;
var G__23101 = count__23076;
var G__23102 = (i__23077 + (1));
seq__23074 = G__23099;
chunk__23075 = G__23100;
count__23076 = G__23101;
i__23077 = G__23102;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23074);
if(temp__4425__auto__){
var seq__23074__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23074__$1)){
var c__17898__auto__ = cljs.core.chunk_first.call(null,seq__23074__$1);
var G__23103 = cljs.core.chunk_rest.call(null,seq__23074__$1);
var G__23104 = c__17898__auto__;
var G__23105 = cljs.core.count.call(null,c__17898__auto__);
var G__23106 = (0);
seq__23074 = G__23103;
chunk__23075 = G__23104;
count__23076 = G__23105;
i__23077 = G__23106;
continue;
} else {
var r = cljs.core.first.call(null,seq__23074__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);

var G__23107 = cljs.core.next.call(null,seq__23074__$1);
var G__23108 = null;
var G__23109 = (0);
var G__23110 = (0);
seq__23074 = G__23107;
chunk__23075 = G__23108;
count__23076 = G__23109;
i__23077 = G__23110;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map
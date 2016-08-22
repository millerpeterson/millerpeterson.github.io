// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23012_23026 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23013_23027 = null;
var count__23014_23028 = (0);
var i__23015_23029 = (0);
while(true){
if((i__23015_23029 < count__23014_23028)){
var f_23030 = cljs.core._nth.call(null,chunk__23013_23027,i__23015_23029);
cljs.core.println.call(null,"  ",f_23030);

var G__23031 = seq__23012_23026;
var G__23032 = chunk__23013_23027;
var G__23033 = count__23014_23028;
var G__23034 = (i__23015_23029 + (1));
seq__23012_23026 = G__23031;
chunk__23013_23027 = G__23032;
count__23014_23028 = G__23033;
i__23015_23029 = G__23034;
continue;
} else {
var temp__4425__auto___23035 = cljs.core.seq.call(null,seq__23012_23026);
if(temp__4425__auto___23035){
var seq__23012_23036__$1 = temp__4425__auto___23035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23012_23036__$1)){
var c__17655__auto___23037 = cljs.core.chunk_first.call(null,seq__23012_23036__$1);
var G__23038 = cljs.core.chunk_rest.call(null,seq__23012_23036__$1);
var G__23039 = c__17655__auto___23037;
var G__23040 = cljs.core.count.call(null,c__17655__auto___23037);
var G__23041 = (0);
seq__23012_23026 = G__23038;
chunk__23013_23027 = G__23039;
count__23014_23028 = G__23040;
i__23015_23029 = G__23041;
continue;
} else {
var f_23042 = cljs.core.first.call(null,seq__23012_23036__$1);
cljs.core.println.call(null,"  ",f_23042);

var G__23043 = cljs.core.next.call(null,seq__23012_23036__$1);
var G__23044 = null;
var G__23045 = (0);
var G__23046 = (0);
seq__23012_23026 = G__23043;
chunk__23013_23027 = G__23044;
count__23014_23028 = G__23045;
i__23015_23029 = G__23046;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23047 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16852__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23047);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23047)))?cljs.core.second.call(null,arglists_23047):arglists_23047));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23016 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23017 = null;
var count__23018 = (0);
var i__23019 = (0);
while(true){
if((i__23019 < count__23018)){
var vec__23020 = cljs.core._nth.call(null,chunk__23017,i__23019);
var name = cljs.core.nth.call(null,vec__23020,(0),null);
var map__23021 = cljs.core.nth.call(null,vec__23020,(1),null);
var map__23021__$1 = ((((!((map__23021 == null)))?((((map__23021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23021):map__23021);
var doc = cljs.core.get.call(null,map__23021__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23021__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23048 = seq__23016;
var G__23049 = chunk__23017;
var G__23050 = count__23018;
var G__23051 = (i__23019 + (1));
seq__23016 = G__23048;
chunk__23017 = G__23049;
count__23018 = G__23050;
i__23019 = G__23051;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23016);
if(temp__4425__auto__){
var seq__23016__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23016__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__23016__$1);
var G__23052 = cljs.core.chunk_rest.call(null,seq__23016__$1);
var G__23053 = c__17655__auto__;
var G__23054 = cljs.core.count.call(null,c__17655__auto__);
var G__23055 = (0);
seq__23016 = G__23052;
chunk__23017 = G__23053;
count__23018 = G__23054;
i__23019 = G__23055;
continue;
} else {
var vec__23023 = cljs.core.first.call(null,seq__23016__$1);
var name = cljs.core.nth.call(null,vec__23023,(0),null);
var map__23024 = cljs.core.nth.call(null,vec__23023,(1),null);
var map__23024__$1 = ((((!((map__23024 == null)))?((((map__23024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23024):map__23024);
var doc = cljs.core.get.call(null,map__23024__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23024__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23056 = cljs.core.next.call(null,seq__23016__$1);
var G__23057 = null;
var G__23058 = (0);
var G__23059 = (0);
seq__23016 = G__23056;
chunk__23017 = G__23057;
count__23018 = G__23058;
i__23019 = G__23059;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1454366812758
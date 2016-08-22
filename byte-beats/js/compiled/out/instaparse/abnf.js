// Compiled by ClojureScript 1.7.170 {}
goog.provide('instaparse.abnf');
goog.require('cljs.core');
goog.require('instaparse.transform');
goog.require('instaparse.combinators_source');
goog.require('instaparse.gll');
goog.require('instaparse.cfg');
goog.require('instaparse.reduction');
goog.require('goog.string.format');
/**
 * This is normally set to false, in which case the non-terminals
 * are treated as case-sensitive, which is NOT the norm
 * for ABNF grammars. If you really want case-insensitivity,
 * bind this to true, in which case all non-terminals
 * will be converted to upper-case internally (which
 * you'll have to keep in mind when transforming).
 */
instaparse.abnf._STAR_case_insensitive_STAR_ = false;
instaparse.abnf.abnf_core = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"CRLF","CRLF",11418756),new cljs.core.Keyword(null,"HTAB","HTAB",11392612),new cljs.core.Keyword(null,"LWSP","LWSP",782998598),new cljs.core.Keyword(null,"LF","LF",1177033158),new cljs.core.Keyword(null,"VCHAR","VCHAR",1962437706),new cljs.core.Keyword(null,"DIGIT","DIGIT",341251338),new cljs.core.Keyword(null,"SP","SP",124290284),new cljs.core.Keyword(null,"HEXDIG","HEXDIG",-200221072),new cljs.core.Keyword(null,"CTL","CTL",-9995632),new cljs.core.Keyword(null,"DQUOTE","DQUOTE",-571169808),new cljs.core.Keyword(null,"WSP","WSP",-1046948716),new cljs.core.Keyword(null,"CR","CR",-1654295403),new cljs.core.Keyword(null,"OCTET","OCTET",-743420682),new cljs.core.Keyword(null,"ALPHA","ALPHA",-1463859144),new cljs.core.Keyword(null,"CHAR","CHAR",-1280338086),new cljs.core.Keyword(null,"BIT","BIT",-1854474115)],[instaparse.combinators_source.string.call(null,"\r\n"),instaparse.combinators_source.string.call(null,"\t"),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.alt.call(null,instaparse.combinators_source.string.call(null," "),instaparse.combinators_source.string.call(null,"\t")),instaparse.combinators_source.star.call(null,instaparse.combinators_source.cat.call(null,instaparse.combinators_source.string.call(null,"\r\n"),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.string.call(null," "),instaparse.combinators_source.string.call(null,"\t"))))),instaparse.combinators_source.string.call(null,"\n"),instaparse.combinators_source.regexp.call(null,"[\\u0021-\\u007E]"),instaparse.combinators_source.regexp.call(null,"[0-9]"),instaparse.combinators_source.string.call(null," "),instaparse.combinators_source.regexp.call(null,"[0-9a-fA-F]"),instaparse.combinators_source.regexp.call(null,"[\\u0000-\\u001F|\\u007F]"),instaparse.combinators_source.string.call(null,"\""),instaparse.combinators_source.alt.call(null,instaparse.combinators_source.string.call(null," "),instaparse.combinators_source.string.call(null,"\t")),instaparse.combinators_source.string.call(null,"\r"),instaparse.combinators_source.regexp.call(null,"[\\u0000-\\u00FF]"),instaparse.combinators_source.regexp.call(null,"[a-zA-Z]"),instaparse.combinators_source.regexp.call(null,"[\\u0001-\\u007F]"),instaparse.combinators_source.regexp.call(null,"[01]")]);
instaparse.abnf.abnf_grammar = "\n<rulelist> = <opt-whitespace> (rule | hide-tag-rule)+;\nrule = rulename-left <defined-as> alternation <opt-whitespace>;\nhide-tag-rule = hide-tag <defined-as> alternation <opt-whitespace>;\nrulename-left = rulename;\nrulename-right = rulename;\n<rulename> = #'[a-zA-Z][-a-zA-Z0-9]*';\n<hide-tag> = <'<' opt-whitespace> rulename-left <opt-whitespace '>'>;\ndefined-as = <opt-whitespace> ('=' | '=/') <opt-whitespace>;\nalternation = concatenation (<opt-whitespace '/' opt-whitespace> concatenation)*;\nconcatenation = repetition (<whitespace> repetition)*;\nrepetition = [repeat] <opt-whitespace> element;\nrepeat = NUM | (NUM? '*' NUM?);\n<element> = rulename-right | group | hide | option | char-val | num-val\n          | look | neg | regexp;\nlook = <'&' opt-whitespace> element;\nneg = <'!' opt-whitespace> element;\n<group> = <'(' opt-whitespace> alternation <opt-whitespace ')'>;\noption = <'[' opt-whitespace> alternation <opt-whitespace ']'>;\nhide = <'<' opt-whitespace> alternation <opt-whitespace '>'>;\nchar-val = <'\\u0022'> #'[\\u0020-\\u0021\\u0023-\\u007E]'* <'\\u0022'> (* double-quoted strings *)\n         | <'\\u0027'> #'[\\u0020-\\u0026(-~]'* <'\\u0027'>;  (* single-quoted strings *)\n<num-val> = <'%'> (bin-val | dec-val | hex-val);\nbin-val = <'b'> bin-char\n          [ (<'.'> bin-char)+ | ('-' bin-char) ];\nbin-char = ('0' | '1')+;\ndec-val = <'d'> dec-char\n          [ (<'.'> dec-char)+ | ('-' dec-char) ];\ndec-char = DIGIT+;\nhex-val = <'x'> hex-char\n          [ (<'.'> hex-char)+ | ('-' hex-char) ];\nhex-char = HEXDIG+;\nNUM = DIGIT+;\n<DIGIT> = #'[0-9]';\n<HEXDIG> = #'[0-9a-fA-F]';\nopt-whitespace = #'\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*';\nwhitespace = #'\\s+(?:;.*?\\u000D?\\u000A\\s*)*';\nregexp = #\"#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'\"\n       | #\"#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\"\"\n";
/**
 * Formats a string using goog.string.format.
 */
instaparse.abnf.format = (function instaparse$abnf$format(var_args){
var args__17917__auto__ = [];
var len__17910__auto___24675 = arguments.length;
var i__17911__auto___24676 = (0);
while(true){
if((i__17911__auto___24676 < len__17910__auto___24675)){
args__17917__auto__.push((arguments[i__17911__auto___24676]));

var G__24677 = (i__17911__auto___24676 + (1));
i__17911__auto___24676 = G__24677;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((1) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((1)),(0))):null);
return instaparse.abnf.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17918__auto__);
});

instaparse.abnf.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

instaparse.abnf.format.cljs$lang$maxFixedArity = (1);

instaparse.abnf.format.cljs$lang$applyTo = (function (seq24673){
var G__24674 = cljs.core.first.call(null,seq24673);
var seq24673__$1 = cljs.core.next.call(null,seq24673);
return instaparse.abnf.format.cljs$core$IFn$_invoke$arity$variadic(G__24674,seq24673__$1);
});
instaparse.abnf.get_char_combinator = (function instaparse$abnf$get_char_combinator(var_args){
var args__17917__auto__ = [];
var len__17910__auto___24684 = arguments.length;
var i__17911__auto___24685 = (0);
while(true){
if((i__17911__auto___24685 < len__17910__auto___24684)){
args__17917__auto__.push((arguments[i__17911__auto___24685]));

var G__24686 = (i__17911__auto___24685 + (1));
i__17911__auto___24685 = G__24686;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((0) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((0)),(0))):null);
return instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic(argseq__17918__auto__);
});

instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic = (function (nums){
if(cljs.core._EQ_.call(null,"-",cljs.core.second.call(null,nums))){
var vec__24679 = nums;
var lo = cljs.core.nth.call(null,vec__24679,(0),null);
var _ = cljs.core.nth.call(null,vec__24679,(1),null);
var hi = cljs.core.nth.call(null,vec__24679,(2),null);
return instaparse.combinators_source.unicode_char.call(null,lo,hi);
} else {
return cljs.core.apply.call(null,instaparse.combinators_source.cat,(function (){var iter__17624__auto__ = (function instaparse$abnf$iter__24680(s__24681){
return (new cljs.core.LazySeq(null,(function (){
var s__24681__$1 = s__24681;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24681__$1);
if(temp__4425__auto__){
var s__24681__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24681__$2)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,s__24681__$2);
var size__17623__auto__ = cljs.core.count.call(null,c__17622__auto__);
var b__24683 = cljs.core.chunk_buffer.call(null,size__17623__auto__);
if((function (){var i__24682 = (0);
while(true){
if((i__24682 < size__17623__auto__)){
var n = cljs.core._nth.call(null,c__17622__auto__,i__24682);
cljs.core.chunk_append.call(null,b__24683,instaparse.combinators_source.unicode_char.call(null,n));

var G__24687 = (i__24682 + (1));
i__24682 = G__24687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24683),instaparse$abnf$iter__24680.call(null,cljs.core.chunk_rest.call(null,s__24681__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24683),null);
}
} else {
var n = cljs.core.first.call(null,s__24681__$2);
return cljs.core.cons.call(null,instaparse.combinators_source.unicode_char.call(null,n),instaparse$abnf$iter__24680.call(null,cljs.core.rest.call(null,s__24681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17624__auto__.call(null,nums);
})());

}
});

instaparse.abnf.get_char_combinator.cljs$lang$maxFixedArity = (0);

instaparse.abnf.get_char_combinator.cljs$lang$applyTo = (function (seq24678){
return instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24678));
});
/**
 * Restricts map to certain keys
 */
instaparse.abnf.project = (function instaparse$abnf$project(m,ks){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17624__auto__ = (function instaparse$abnf$project_$_iter__24692(s__24693){
return (new cljs.core.LazySeq(null,(function (){
var s__24693__$1 = s__24693;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24693__$1);
if(temp__4425__auto__){
var s__24693__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24693__$2)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,s__24693__$2);
var size__17623__auto__ = cljs.core.count.call(null,c__17622__auto__);
var b__24695 = cljs.core.chunk_buffer.call(null,size__17623__auto__);
if((function (){var i__24694 = (0);
while(true){
if((i__24694 < size__17623__auto__)){
var k = cljs.core._nth.call(null,c__17622__auto__,i__24694);
if(cljs.core.contains_QMARK_.call(null,m,k)){
cljs.core.chunk_append.call(null,b__24695,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,m.call(null,k)], null));

var G__24696 = (i__24694 + (1));
i__24694 = G__24696;
continue;
} else {
var G__24697 = (i__24694 + (1));
i__24694 = G__24697;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24695),instaparse$abnf$project_$_iter__24692.call(null,cljs.core.chunk_rest.call(null,s__24693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24695),null);
}
} else {
var k = cljs.core.first.call(null,s__24693__$2);
if(cljs.core.contains_QMARK_.call(null,m,k)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,m.call(null,k)], null),instaparse$abnf$project_$_iter__24692.call(null,cljs.core.rest.call(null,s__24693__$2)));
} else {
var G__24698 = cljs.core.rest.call(null,s__24693__$2);
s__24693__$1 = G__24698;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17624__auto__.call(null,ks);
})());
});
/**
 * Merges abnf-core map in with parsed grammar map
 */
instaparse.abnf.merge_core = (function instaparse$abnf$merge_core(grammar_map){
return cljs.core.merge.call(null,instaparse.abnf.project.call(null,instaparse.abnf.abnf_core,cljs.core.distinct.call(null,cljs.core.mapcat.call(null,instaparse.cfg.seq_nt,cljs.core.vals.call(null,grammar_map)))),grammar_map);
});
/**
 * Tests whether parser was constructed with hide-tag
 */
instaparse.abnf.hide_tag_QMARK_ = (function instaparse$abnf$hide_tag_QMARK_(p){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(p),instaparse.reduction.raw_non_terminal_reduction);
});
instaparse.abnf.alt_preserving_hide_tag = (function instaparse$abnf$alt_preserving_hide_tag(p1,p2){
var hide_tag_p1_QMARK_ = instaparse.abnf.hide_tag_QMARK_.call(null,p1);
var hide_tag_p2_QMARK_ = instaparse.abnf.hide_tag_QMARK_.call(null,p2);
if(cljs.core.truth_((function (){var and__16840__auto__ = hide_tag_p1_QMARK_;
if(cljs.core.truth_(and__16840__auto__)){
return hide_tag_p2_QMARK_;
} else {
return and__16840__auto__;
}
})())){
return instaparse.combinators_source.hide_tag.call(null,instaparse.combinators_source.alt.call(null,cljs.core.dissoc.call(null,p1,new cljs.core.Keyword(null,"red","red",-969428204)),cljs.core.dissoc.call(null,p2,new cljs.core.Keyword(null,"red","red",-969428204))));
} else {
if(cljs.core.truth_(hide_tag_p1_QMARK_)){
return instaparse.combinators_source.hide_tag.call(null,instaparse.combinators_source.alt.call(null,cljs.core.dissoc.call(null,p1,new cljs.core.Keyword(null,"red","red",-969428204)),p2));
} else {
if(cljs.core.truth_(hide_tag_p2_QMARK_)){
return instaparse.combinators_source.hide_tag.call(null,instaparse.combinators_source.alt.call(null,p1,cljs.core.dissoc.call(null,p2,new cljs.core.Keyword(null,"red","red",-969428204))));
} else {
return instaparse.combinators_source.alt.call(null,p1,p2);

}
}
}
});
instaparse.abnf.abnf_transformer = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"neg","neg",1800032960),new cljs.core.Keyword(null,"hide-tag-rule","hide-tag-rule",150267589),new cljs.core.Keyword(null,"look","look",-539441433),new cljs.core.Keyword(null,"bin-char","bin-char",-1662780697),new cljs.core.Keyword(null,"rule","rule",729973257),new cljs.core.Keyword(null,"rulename-right","rulename-right",1125609193),new cljs.core.Keyword(null,"NUM","NUM",-218662260),new cljs.core.Keyword(null,"char-val","char-val",1408617933),new cljs.core.Keyword(null,"hide","hide",-596913169),new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.Keyword(null,"hex-char","hex-char",764443568),new cljs.core.Keyword(null,"bin-val","bin-val",1705209105),new cljs.core.Keyword(null,"dec-val","dec-val",-1263870894),new cljs.core.Keyword(null,"concatenation","concatenation",-951369614),new cljs.core.Keyword(null,"alternation","alternation",-1162147630),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"repetition","repetition",1938392115),new cljs.core.Keyword(null,"rulename-left","rulename-left",-1824251564),new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.Keyword(null,"hex-val","hex-val",1267737401),new cljs.core.Keyword(null,"dec-char","dec-char",-646625154)],[instaparse.combinators_source.neg,(function (tag,rule){
return cljs.core.PersistentArrayMap.fromArray([tag,instaparse.combinators_source.hide_tag.call(null,rule)], true, false);
}),instaparse.combinators_source.look,(function() { 
var G__24703__delegate = function (cs){
return parseInt(cljs.core.apply.call(null,cljs.core.str,cs),(2));
};
var G__24703 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__24704__i = 0, G__24704__a = new Array(arguments.length -  0);
while (G__24704__i < G__24704__a.length) {G__24704__a[G__24704__i] = arguments[G__24704__i + 0]; ++G__24704__i;}
  cs = new cljs.core.IndexedSeq(G__24704__a,0);
} 
return G__24703__delegate.call(this,cs);};
G__24703.cljs$lang$maxFixedArity = 0;
G__24703.cljs$lang$applyTo = (function (arglist__24705){
var cs = cljs.core.seq(arglist__24705);
return G__24703__delegate(cs);
});
G__24703.cljs$core$IFn$_invoke$arity$variadic = G__24703__delegate;
return G__24703;
})()
,cljs.core.hash_map,(function() { 
var G__24706__delegate = function (rest__24700_SHARP_){
if(cljs.core.truth_(instaparse.abnf._STAR_case_insensitive_STAR_)){
return instaparse.combinators_source.nt.call(null,cljs.core.keyword.call(null,clojure.string.upper_case.call(null,cljs.core.apply.call(null,cljs.core.str,rest__24700_SHARP_))));
} else {
return instaparse.combinators_source.nt.call(null,cljs.core.keyword.call(null,cljs.core.apply.call(null,cljs.core.str,rest__24700_SHARP_)));
}
};
var G__24706 = function (var_args){
var rest__24700_SHARP_ = null;
if (arguments.length > 0) {
var G__24707__i = 0, G__24707__a = new Array(arguments.length -  0);
while (G__24707__i < G__24707__a.length) {G__24707__a[G__24707__i] = arguments[G__24707__i + 0]; ++G__24707__i;}
  rest__24700_SHARP_ = new cljs.core.IndexedSeq(G__24707__a,0);
} 
return G__24706__delegate.call(this,rest__24700_SHARP_);};
G__24706.cljs$lang$maxFixedArity = 0;
G__24706.cljs$lang$applyTo = (function (arglist__24708){
var rest__24700_SHARP_ = cljs.core.seq(arglist__24708);
return G__24706__delegate(rest__24700_SHARP_);
});
G__24706.cljs$core$IFn$_invoke$arity$variadic = G__24706__delegate;
return G__24706;
})()
,(function() { 
var G__24709__delegate = function (rest__24701_SHARP_){
return parseInt(cljs.core.apply.call(null,cljs.core.str,rest__24701_SHARP_));
};
var G__24709 = function (var_args){
var rest__24701_SHARP_ = null;
if (arguments.length > 0) {
var G__24710__i = 0, G__24710__a = new Array(arguments.length -  0);
while (G__24710__i < G__24710__a.length) {G__24710__a[G__24710__i] = arguments[G__24710__i + 0]; ++G__24710__i;}
  rest__24701_SHARP_ = new cljs.core.IndexedSeq(G__24710__a,0);
} 
return G__24709__delegate.call(this,rest__24701_SHARP_);};
G__24709.cljs$lang$maxFixedArity = 0;
G__24709.cljs$lang$applyTo = (function (arglist__24711){
var rest__24701_SHARP_ = cljs.core.seq(arglist__24711);
return G__24709__delegate(rest__24701_SHARP_);
});
G__24709.cljs$core$IFn$_invoke$arity$variadic = G__24709__delegate;
return G__24709;
})()
,(function() { 
var G__24712__delegate = function (cs){
return instaparse.combinators_source.string_ci.call(null,cljs.core.apply.call(null,cljs.core.str,cs));
};
var G__24712 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__24713__i = 0, G__24713__a = new Array(arguments.length -  0);
while (G__24713__i < G__24713__a.length) {G__24713__a[G__24713__i] = arguments[G__24713__i + 0]; ++G__24713__i;}
  cs = new cljs.core.IndexedSeq(G__24713__a,0);
} 
return G__24712__delegate.call(this,cs);};
G__24712.cljs$lang$maxFixedArity = 0;
G__24712.cljs$lang$applyTo = (function (arglist__24714){
var cs = cljs.core.seq(arglist__24714);
return G__24712__delegate(cs);
});
G__24712.cljs$core$IFn$_invoke$arity$variadic = G__24712__delegate;
return G__24712;
})()
,instaparse.combinators_source.hide,instaparse.combinators_source.opt,(function() { 
var G__24715__delegate = function (cs){
return parseInt(cljs.core.apply.call(null,cljs.core.str,cs),(16));
};
var G__24715 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__24716__i = 0, G__24716__a = new Array(arguments.length -  0);
while (G__24716__i < G__24716__a.length) {G__24716__a[G__24716__i] = arguments[G__24716__i + 0]; ++G__24716__i;}
  cs = new cljs.core.IndexedSeq(G__24716__a,0);
} 
return G__24715__delegate.call(this,cs);};
G__24715.cljs$lang$maxFixedArity = 0;
G__24715.cljs$lang$applyTo = (function (arglist__24717){
var cs = cljs.core.seq(arglist__24717);
return G__24715__delegate(cs);
});
G__24715.cljs$core$IFn$_invoke$arity$variadic = G__24715__delegate;
return G__24715;
})()
,instaparse.abnf.get_char_combinator,instaparse.abnf.get_char_combinator,instaparse.combinators_source.cat,instaparse.combinators_source.alt,cljs.core.comp.call(null,instaparse.combinators_source.regexp,instaparse.cfg.process_regexp),(function() {
var G__24718 = null;
var G__24718__1 = (function (element){
return element;
});
var G__24718__2 = (function (repeat,element){
if(cljs.core.empty_QMARK_.call(null,repeat)){
return instaparse.combinators_source.star.call(null,element);
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,repeat),(2))){
return instaparse.combinators_source.rep.call(null,new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(repeat),new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(repeat),element);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(repeat),(1))){
return instaparse.combinators_source.plus.call(null,element);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(repeat),(1))){
return instaparse.combinators_source.opt.call(null,element);
} else {
return instaparse.combinators_source.rep.call(null,(function (){var or__16852__auto__ = new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(repeat);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return (0);
}
})(),(function (){var or__16852__auto__ = new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(repeat);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return Infinity;
}
})(),element);

}
}
}
}
});
G__24718 = function(repeat,element){
switch(arguments.length){
case 1:
return G__24718__1.call(this,repeat);
case 2:
return G__24718__2.call(this,repeat,element);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24718.cljs$core$IFn$_invoke$arity$1 = G__24718__1;
G__24718.cljs$core$IFn$_invoke$arity$2 = G__24718__2;
return G__24718;
})()
,(function() { 
var G__24719__delegate = function (rest__24699_SHARP_){
if(cljs.core.truth_(instaparse.abnf._STAR_case_insensitive_STAR_)){
return cljs.core.keyword.call(null,clojure.string.upper_case.call(null,cljs.core.apply.call(null,cljs.core.str,rest__24699_SHARP_)));
} else {
return cljs.core.keyword.call(null,cljs.core.apply.call(null,cljs.core.str,rest__24699_SHARP_));
}
};
var G__24719 = function (var_args){
var rest__24699_SHARP_ = null;
if (arguments.length > 0) {
var G__24720__i = 0, G__24720__a = new Array(arguments.length -  0);
while (G__24720__i < G__24720__a.length) {G__24720__a[G__24720__i] = arguments[G__24720__i + 0]; ++G__24720__i;}
  rest__24699_SHARP_ = new cljs.core.IndexedSeq(G__24720__a,0);
} 
return G__24719__delegate.call(this,rest__24699_SHARP_);};
G__24719.cljs$lang$maxFixedArity = 0;
G__24719.cljs$lang$applyTo = (function (arglist__24721){
var rest__24699_SHARP_ = cljs.core.seq(arglist__24721);
return G__24719__delegate(rest__24699_SHARP_);
});
G__24719.cljs$core$IFn$_invoke$arity$variadic = G__24719__delegate;
return G__24719;
})()
,(function() { 
var G__24722__delegate = function (items){
var G__24702 = cljs.core.count.call(null,items);
switch (G__24702) {
case (1):
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,items),"*")){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"low","low",-1601362409),cljs.core.first.call(null,items),new cljs.core.Keyword(null,"high","high",2027297808),cljs.core.first.call(null,items)], null);

}

break;
case (2):
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,items),"*")){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"high","high",2027297808),cljs.core.second.call(null,items)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"low","low",-1601362409),cljs.core.first.call(null,items)], null);

}

break;
case (3):
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"low","low",-1601362409),cljs.core.first.call(null,items),new cljs.core.Keyword(null,"high","high",2027297808),cljs.core.nth.call(null,items,(2))], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.count.call(null,items))].join('')));

}
};
var G__24722 = function (var_args){
var items = null;
if (arguments.length > 0) {
var G__24724__i = 0, G__24724__a = new Array(arguments.length -  0);
while (G__24724__i < G__24724__a.length) {G__24724__a[G__24724__i] = arguments[G__24724__i + 0]; ++G__24724__i;}
  items = new cljs.core.IndexedSeq(G__24724__a,0);
} 
return G__24722__delegate.call(this,items);};
G__24722.cljs$lang$maxFixedArity = 0;
G__24722.cljs$lang$applyTo = (function (arglist__24725){
var items = cljs.core.seq(arglist__24725);
return G__24722__delegate(items);
});
G__24722.cljs$core$IFn$_invoke$arity$variadic = G__24722__delegate;
return G__24722;
})()
,instaparse.abnf.get_char_combinator,(function() { 
var G__24726__delegate = function (cs){
return parseInt(cljs.core.apply.call(null,cljs.core.str,cs));
};
var G__24726 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__24727__i = 0, G__24727__a = new Array(arguments.length -  0);
while (G__24727__i < G__24727__a.length) {G__24727__a[G__24727__i] = arguments[G__24727__i + 0]; ++G__24727__i;}
  cs = new cljs.core.IndexedSeq(G__24727__a,0);
} 
return G__24726__delegate.call(this,cs);};
G__24726.cljs$lang$maxFixedArity = 0;
G__24726.cljs$lang$applyTo = (function (arglist__24728){
var cs = cljs.core.seq(arglist__24728);
return G__24726__delegate(cs);
});
G__24726.cljs$core$IFn$_invoke$arity$variadic = G__24726__delegate;
return G__24726;
})()
]);
instaparse.abnf.abnf_parser = instaparse.reduction.apply_standard_reductions.call(null,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),instaparse.cfg.ebnf.call(null,instaparse.abnf.abnf_grammar));
instaparse.abnf.rules__GT_grammar_map = (function instaparse$abnf$rules__GT_grammar_map(rules){
return instaparse.abnf.merge_core.call(null,cljs.core.apply.call(null,cljs.core.merge_with,instaparse.abnf.alt_preserving_hide_tag,rules));
});
/**
 * Takes an ABNF grammar specification string and returns the combinator version.
 *   If you give it the right-hand side of a rule, it will return the combinator equivalent.
 *   If you give it a series of rules, it will give you back a grammar map.   
 *   Useful for combining with other combinators.
 */
instaparse.abnf.abnf = (function instaparse$abnf$abnf(spec){
if(cljs.core.truth_(cljs.core.re_find.call(null,/=/,spec))){
var rule_tree = instaparse.gll.parse.call(null,instaparse.abnf.abnf_parser,new cljs.core.Keyword(null,"rulelist","rulelist",-1871218473),spec,false);
if((rule_tree instanceof instaparse.gll.Failure)){
throw [cljs.core.str("Error parsing grammar specification:\n"),cljs.core.str((function (){var sb__17826__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_24733_24737 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_24734_24738 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_24733_24737,_STAR_print_fn_STAR_24734_24738,sb__17826__auto__,rule_tree){
return (function (x__17827__auto__){
return sb__17826__auto__.append(x__17827__auto__);
});})(_STAR_print_newline_STAR_24733_24737,_STAR_print_fn_STAR_24734_24738,sb__17826__auto__,rule_tree))
;

try{cljs.core.println.call(null,rule_tree);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24734_24738;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24733_24737;
}
return [cljs.core.str(sb__17826__auto__)].join('');
})())].join('');
} else {
return instaparse.abnf.rules__GT_grammar_map.call(null,instaparse.transform.transform.call(null,instaparse.abnf.abnf_transformer,rule_tree));
}
} else {
var rhs_tree = instaparse.gll.parse.call(null,instaparse.abnf.abnf_parser,new cljs.core.Keyword(null,"alternation","alternation",-1162147630),spec,false);
if((rhs_tree instanceof instaparse.gll.Failure)){
throw [cljs.core.str("Error parsing grammar specification:\n"),cljs.core.str((function (){var sb__17826__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_24735_24739 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_24736_24740 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_24735_24739,_STAR_print_fn_STAR_24736_24740,sb__17826__auto__,rhs_tree){
return (function (x__17827__auto__){
return sb__17826__auto__.append(x__17827__auto__);
});})(_STAR_print_newline_STAR_24735_24739,_STAR_print_fn_STAR_24736_24740,sb__17826__auto__,rhs_tree))
;

try{cljs.core.println.call(null,rhs_tree);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24736_24740;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24735_24739;
}
return [cljs.core.str(sb__17826__auto__)].join('');
})())].join('');
} else {
return instaparse.transform.transform.call(null,instaparse.abnf.abnf_transformer,rhs_tree);
}
}
});
instaparse.abnf.build_parser = (function instaparse$abnf$build_parser(spec,output_format){
var rule_tree = instaparse.gll.parse.call(null,instaparse.abnf.abnf_parser,new cljs.core.Keyword(null,"rulelist","rulelist",-1871218473),spec,false);
if((rule_tree instanceof instaparse.gll.Failure)){
throw [cljs.core.str("Error parsing grammar specification:\n"),cljs.core.str((function (){var sb__17826__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_24743_24745 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_24744_24746 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_24743_24745,_STAR_print_fn_STAR_24744_24746,sb__17826__auto__,rule_tree){
return (function (x__17827__auto__){
return sb__17826__auto__.append(x__17827__auto__);
});})(_STAR_print_newline_STAR_24743_24745,_STAR_print_fn_STAR_24744_24746,sb__17826__auto__,rule_tree))
;

try{cljs.core.println.call(null,rule_tree);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24744_24746;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24743_24745;
}
return [cljs.core.str(sb__17826__auto__)].join('');
})())].join('');
} else {
var rules = instaparse.transform.transform.call(null,instaparse.abnf.abnf_transformer,rule_tree);
var grammar_map = instaparse.abnf.rules__GT_grammar_map.call(null,rules);
var start_production = cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.first.call(null,rules)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grammar","grammar",1881328267),instaparse.cfg.check_grammar.call(null,instaparse.reduction.apply_standard_reductions.call(null,output_format,grammar_map)),new cljs.core.Keyword(null,"start-production","start-production",687546537),start_production,new cljs.core.Keyword(null,"output-format","output-format",-1826382676),output_format], null);
}
});

//# sourceMappingURL=abnf.js.map?rel=1455043063795
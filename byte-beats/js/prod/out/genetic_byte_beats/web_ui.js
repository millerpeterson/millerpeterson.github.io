// Compiled by ClojureScript 1.7.170 {}
goog.provide('genetic_byte_beats.web_ui');
goog.require('cljs.core');
goog.require('genetic_byte_beats.forms.erlehmann');
goog.require('genetic_byte_beats.forms.evolved');
goog.require('genetic_byte_beats.parsing');
goog.require('reagent.core');
genetic_byte_beats.web_ui.play_controls = (function genetic_byte_beats$web_ui$play_controls(history,commands){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return new cljs.core.Keyword(null,"play-and-print","play-and-print",-1813151368).cljs$core$IFn$_invoke$arity$1(commands).call(null,cljs.core.last.call(null,cljs.core.deref.call(null,history)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-large"], null),"Play"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(commands),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-large"], null),"Stop"], null)], null);
});
genetic_byte_beats.web_ui.genetic_controls = (function genetic_byte_beats$web_ui$genetic_controls(_,commands){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return new cljs.core.Keyword(null,"breed","breed",385957731).cljs$core$IFn$_invoke$arity$1(commands).call(null,cljs.core.into.call(null,genetic_byte_beats.forms.erlehmann.forms,genetic_byte_beats.forms.evolved.forms));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-large"], null),"Crossover"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return new cljs.core.Keyword(null,"mutate","mutate",1422419038).cljs$core$IFn$_invoke$arity$1(commands).call(null,new cljs.core.Keyword(null,"perturb","perturb",-1003869674));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-large"], null),"Mutate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return new cljs.core.Keyword(null,"mutate","mutate",1422419038).cljs$core$IFn$_invoke$arity$1(commands).call(null,new cljs.core.Keyword(null,"complexify","complexify",2001169465));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-large"], null),"Complexify"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return new cljs.core.Keyword(null,"mutate","mutate",1422419038).cljs$core$IFn$_invoke$arity$1(commands).call(null,new cljs.core.Keyword(null,"simplify","simplify",-599213465));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-large"], null),"Simplify"], null)], null);
});
genetic_byte_beats.web_ui.history_controls = (function genetic_byte_beats$web_ui$history_controls(history,commands){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return new cljs.core.Keyword(null,"undo","undo",-1818036302).cljs$core$IFn$_invoke$arity$1(commands).call(null);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-large"], null),"Undo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
new cljs.core.Keyword(null,"new-line","new-line",1060819447).cljs$core$IFn$_invoke$arity$1(commands).call(null,cljs.core.into.call(null,genetic_byte_beats.forms.erlehmann.forms,genetic_byte_beats.forms.evolved.forms));

return new cljs.core.Keyword(null,"play-and-print","play-and-print",-1813151368).cljs$core$IFn$_invoke$arity$1(commands).call(null,cljs.core.first.call(null,cljs.core.deref.call(null,history)));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary btn-large"], null),"New Line"], null)], null);
});
genetic_byte_beats.web_ui.cell_history = (function genetic_byte_beats$web_ui$cell_history(history){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"cell-history"], null),(function (){var iter__17867__auto__ = (function genetic_byte_beats$web_ui$cell_history_$_iter__24201(s__24202){
return (new cljs.core.LazySeq(null,(function (){
var s__24202__$1 = s__24202;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24202__$1);
if(temp__4425__auto__){
var s__24202__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24202__$2)){
var c__17865__auto__ = cljs.core.chunk_first.call(null,s__24202__$2);
var size__17866__auto__ = cljs.core.count.call(null,c__17865__auto__);
var b__24204 = cljs.core.chunk_buffer.call(null,size__17866__auto__);
if((function (){var i__24203 = (0);
while(true){
if((i__24203 < size__17866__auto__)){
var cell_ast = cljs.core._nth.call(null,c__17865__auto__,i__24203);
cljs.core.chunk_append.call(null,b__24204,(function (){var form_string = genetic_byte_beats.parsing.string_from_ast.call(null,cell_ast);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),form_string], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),form_string], null));
})());

var G__24205 = (i__24203 + (1));
i__24203 = G__24205;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24204),genetic_byte_beats$web_ui$cell_history_$_iter__24201.call(null,cljs.core.chunk_rest.call(null,s__24202__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24204),null);
}
} else {
var cell_ast = cljs.core.first.call(null,s__24202__$2);
return cljs.core.cons.call(null,(function (){var form_string = genetic_byte_beats.parsing.string_from_ast.call(null,cell_ast);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),form_string], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),form_string], null));
})(),genetic_byte_beats$web_ui$cell_history_$_iter__24201.call(null,cljs.core.rest.call(null,s__24202__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17867__auto__.call(null,cljs.core.reverse.call(null,cljs.core.deref.call(null,history)));
})()], null);
});
genetic_byte_beats.web_ui.app = (function genetic_byte_beats$web_ui$app(history,commands){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [genetic_byte_beats.web_ui.play_controls,history,commands], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [genetic_byte_beats.web_ui.genetic_controls,history,commands], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [genetic_byte_beats.web_ui.history_controls,history,commands], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [genetic_byte_beats.web_ui.cell_history,history], null)], null);
});
genetic_byte_beats.web_ui.run = (function genetic_byte_beats$web_ui$run(history,commands){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [genetic_byte_beats.web_ui.app,history,commands], null),document.getElementById("app"));
});
goog.exportSymbol('genetic_byte_beats.web_ui.run', genetic_byte_beats.web_ui.run);

//# sourceMappingURL=web_ui.js.map
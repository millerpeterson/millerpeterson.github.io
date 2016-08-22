// Compiled by ClojureScript 1.7.170 {}
goog.provide('genetic_byte_beats.io');
goog.require('cljs.core');
goog.require('cljs.js');
genetic_byte_beats.io.fill_buffer_BANG_ = (function genetic_byte_beats$io$fill_buffer_BANG_(out_buff,buffer_sample_gen){

var buff_size = out_buff.length;
var buff_positions = cljs.core.range.call(null,(0),buff_size);
var samples = out_buff.getChannelData((0));
var seq__23904 = cljs.core.seq.call(null,buff_positions);
var chunk__23905 = null;
var count__23906 = (0);
var i__23907 = (0);
while(true){
if((i__23907 < count__23906)){
var buff_index = cljs.core._nth.call(null,chunk__23905,i__23907);
(samples[buff_index] = buffer_sample_gen.call(null,buff_index));

var G__23908 = seq__23904;
var G__23909 = chunk__23905;
var G__23910 = count__23906;
var G__23911 = (i__23907 + (1));
seq__23904 = G__23908;
chunk__23905 = G__23909;
count__23906 = G__23910;
i__23907 = G__23911;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23904);
if(temp__4425__auto__){
var seq__23904__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23904__$1)){
var c__17898__auto__ = cljs.core.chunk_first.call(null,seq__23904__$1);
var G__23912 = cljs.core.chunk_rest.call(null,seq__23904__$1);
var G__23913 = c__17898__auto__;
var G__23914 = cljs.core.count.call(null,c__17898__auto__);
var G__23915 = (0);
seq__23904 = G__23912;
chunk__23905 = G__23913;
count__23906 = G__23914;
i__23907 = G__23915;
continue;
} else {
var buff_index = cljs.core.first.call(null,seq__23904__$1);
(samples[buff_index] = buffer_sample_gen.call(null,buff_index));

var G__23916 = cljs.core.next.call(null,seq__23904__$1);
var G__23917 = null;
var G__23918 = (0);
var G__23919 = (0);
seq__23904 = G__23916;
chunk__23905 = G__23917;
count__23906 = G__23918;
i__23907 = G__23919;
continue;
}
} else {
return null;
}
}
break;
}
});
genetic_byte_beats.io.folded_amp = (function genetic_byte_beats$io$folded_amp(val){

var folded = cljs.core.mod.call(null,val,(255));
return (((2) * (folded / 255.0)) - (1));
});
genetic_byte_beats.io.audio_event_processor = (function genetic_byte_beats$io$audio_event_processor(clock_ref,sample_gen,rate_ratio){

return (function (ap_event){
var out_buff = ap_event.outputBuffer;
var buffer_sample_gen = ((function (out_buff){
return (function (buff_index){
var clock_rel_t = (buff_index + cljs.core.deref.call(null,clock_ref));
var rate_adjusted_t = Math.floor((clock_rel_t / rate_ratio));
return sample_gen.call(null,rate_adjusted_t);
});})(out_buff))
;
genetic_byte_beats.io.fill_buffer_BANG_.call(null,out_buff,cljs.core.comp.call(null,genetic_byte_beats.io.folded_amp,buffer_sample_gen));

return cljs.core.swap_BANG_.call(null,clock_ref,((function (out_buff,buffer_sample_gen){
return (function (p1__23920_SHARP_){
return (p1__23920_SHARP_ + out_buff.length);
});})(out_buff,buffer_sample_gen))
);
});
});
/**
 * Create a web audio context.
 */
genetic_byte_beats.io.context = (function genetic_byte_beats$io$context(){
return (new AudioContext());
});
genetic_byte_beats.io.script_processor_node = (function genetic_byte_beats$io$script_processor_node(ctx,buff_size,num_input_chan,num_output_chan){

return ctx.createScriptProcessor(buff_size,num_input_chan,num_output_chan);
});
genetic_byte_beats.io.configure_node_processor = (function genetic_byte_beats$io$configure_node_processor(node,processor_fn){

node.onaudioprocess = processor_fn;

return node;
});
genetic_byte_beats.io.volume_node = (function genetic_byte_beats$io$volume_node(ctx,start_gain){

var node = ctx.createGain();
node.gain.value = start_gain;

return node;
});
/**
 * Return a function for generating sample values from the AST of a gen formula.
 */
genetic_byte_beats.io.sample_gen_func = (function genetic_byte_beats$io$sample_gen_func(gen_ast){
var func_def = cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null)], null),cljs.core._conj.call(null,cljs.core.List.EMPTY,gen_ast)));
return cljs.js.eval.call(null,cljs.js.empty_state.call(null),func_def,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"source-map","source-map",1706252311),true,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),cljs.core.identity);
});

//# sourceMappingURL=io.js.map
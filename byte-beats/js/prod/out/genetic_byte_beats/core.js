// Compiled by ClojureScript 1.7.170 {}
goog.provide('genetic_byte_beats.core');
goog.require('cljs.core');
goog.require('genetic_byte_beats.gene_ops');
goog.require('reagent.core');
goog.require('genetic_byte_beats.io');
goog.require('genetic_byte_beats.forms.evolved');
goog.require('genetic_byte_beats.forms.erlehmann');
goog.require('genetic_byte_beats.web_ui');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof genetic_byte_beats.core.ctx !== 'undefined'){
} else {
genetic_byte_beats.core.ctx = genetic_byte_beats.io.context.call(null);
}
if(typeof genetic_byte_beats.core.vol_node !== 'undefined'){
} else {
genetic_byte_beats.core.vol_node = genetic_byte_beats.io.volume_node.call(null,genetic_byte_beats.core.ctx,0.5);
}
if(typeof genetic_byte_beats.core.processor_node !== 'undefined'){
} else {
genetic_byte_beats.core.processor_node = genetic_byte_beats.io.script_processor_node.call(null,genetic_byte_beats.core.ctx,(4096),(1),(1));
}
if(typeof genetic_byte_beats.core.clock !== 'undefined'){
} else {
genetic_byte_beats.core.clock = cljs.core.atom.call(null,(0));
}
if(typeof genetic_byte_beats.core.history !== 'undefined'){
} else {
genetic_byte_beats.core.history = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
/**
 * Reset formula clock.
 */
genetic_byte_beats.core.reset_clock = (function genetic_byte_beats$core$reset_clock(){
return cljs.core.reset_BANG_.call(null,genetic_byte_beats.core.clock,(0));
});
/**
 * Adjust volume.
 */
genetic_byte_beats.core.volume = (function genetic_byte_beats$core$volume(v){
return genetic_byte_beats.core.vol_node.gain.value = v;
});
/**
 * Start playback for a sample generating function at a given sample rate.
 */
genetic_byte_beats.core.play = (function genetic_byte_beats$core$play(var_args){
var args24208 = [];
var len__18153__auto___24211 = arguments.length;
var i__18154__auto___24212 = (0);
while(true){
if((i__18154__auto___24212 < len__18153__auto___24211)){
args24208.push((arguments[i__18154__auto___24212]));

var G__24213 = (i__18154__auto___24212 + (1));
i__18154__auto___24212 = G__24213;
continue;
} else {
}
break;
}

var G__24210 = args24208.length;
switch (G__24210) {
case 1:
return genetic_byte_beats.core.play.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return genetic_byte_beats.core.play.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24208.length)].join('')));

}
});

genetic_byte_beats.core.play.cljs$core$IFn$_invoke$arity$1 = (function (gen_func){
return genetic_byte_beats.core.play.call(null,gen_func,(8000));
});

genetic_byte_beats.core.play.cljs$core$IFn$_invoke$arity$2 = (function (gen_func,sample_rate){
genetic_byte_beats.core.reset_clock.call(null);

var rate_ratio = (genetic_byte_beats.core.ctx.sampleRate / sample_rate);
var event_processor = genetic_byte_beats.io.audio_event_processor.call(null,genetic_byte_beats.core.clock,gen_func,rate_ratio);
genetic_byte_beats.io.configure_node_processor.call(null,genetic_byte_beats.core.processor_node,event_processor);

genetic_byte_beats.core.vol_node.connect(genetic_byte_beats.core.ctx.destination);

return genetic_byte_beats.core.processor_node.connect(genetic_byte_beats.core.vol_node);
});

genetic_byte_beats.core.play.cljs$lang$maxFixedArity = 2;
/**
 * Stop playback of the current sample generating function.
 */
genetic_byte_beats.core.stop = (function genetic_byte_beats$core$stop(){
genetic_byte_beats.core.processor_node.disconnect(genetic_byte_beats.core.vol_node);

return genetic_byte_beats.core.vol_node.disconnect(genetic_byte_beats.core.ctx.destination);
});
/**
 * Play an AST and print it.
 */
genetic_byte_beats.core.play_and_print = (function genetic_byte_beats$core$play_and_print(ast){
genetic_byte_beats.core.play.call(null,genetic_byte_beats.io.sample_gen_func.call(null,ast));

return cljs.core.println.call(null,ast);
});
/**
 * Create a new cell line, starting with a random formula
 *   bred from two random parents from a given group of formulas.
 */
genetic_byte_beats.core.new_line = (function genetic_byte_beats$core$new_line(forms){
var starter = genetic_byte_beats.gene_ops.random_child.call(null,forms);
return cljs.core.reset_BANG_.call(null,genetic_byte_beats.core.history,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[starter],null)));
});
/**
 * Add a new cell to the line by mutating the last
 *   formula then playing it.
 */
genetic_byte_beats.core.mutate = (function genetic_byte_beats$core$mutate(method){
var mutated = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"complexify","complexify",2001169465),method))?genetic_byte_beats.gene_ops.mutate_complexify.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,genetic_byte_beats.core.history))):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"simplify","simplify",-599213465),method))?genetic_byte_beats.gene_ops.mutate_simplify.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,genetic_byte_beats.core.history))):genetic_byte_beats.gene_ops.mutate_perturb.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,genetic_byte_beats.core.history)))
));
cljs.core.swap_BANG_.call(null,genetic_byte_beats.core.history,((function (mutated){
return (function (p1__24215_SHARP_){
return cljs.core.conj.call(null,p1__24215_SHARP_,mutated);
});})(mutated))
);

return genetic_byte_beats.core.play_and_print.call(null,mutated);
});
genetic_byte_beats.core.breed = (function genetic_byte_beats$core$breed(mate_forms){

var bred = genetic_byte_beats.gene_ops.crossover.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,genetic_byte_beats.core.history)),cljs.core.rand_nth.call(null,mate_forms));
cljs.core.swap_BANG_.call(null,genetic_byte_beats.core.history,((function (bred){
return (function (p1__24216_SHARP_){
return cljs.core.conj.call(null,p1__24216_SHARP_,bred);
});})(bred))
);

return genetic_byte_beats.core.play_and_print.call(null,bred);
});
genetic_byte_beats.core.undo = (function genetic_byte_beats$core$undo(){

if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,genetic_byte_beats.core.history))){
return null;
} else {
cljs.core.swap_BANG_.call(null,genetic_byte_beats.core.history,cljs.core.pop);

return genetic_byte_beats.core.play_and_print.call(null,cljs.core.last.call(null,cljs.core.deref.call(null,genetic_byte_beats.core.history)));
}
});
genetic_byte_beats.core.start_web_ui = (function genetic_byte_beats$core$start_web_ui(){
return genetic_byte_beats.web_ui.run.call(null,genetic_byte_beats.core.history,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"breed","breed",385957731),genetic_byte_beats.core.breed,new cljs.core.Keyword(null,"mutate","mutate",1422419038),genetic_byte_beats.core.mutate,new cljs.core.Keyword(null,"undo","undo",-1818036302),genetic_byte_beats.core.undo,new cljs.core.Keyword(null,"play-and-print","play-and-print",-1813151368),genetic_byte_beats.core.play_and_print,new cljs.core.Keyword(null,"new-line","new-line",1060819447),genetic_byte_beats.core.new_line,new cljs.core.Keyword(null,"stop","stop",-2140911342),genetic_byte_beats.core.stop], null));
});
genetic_byte_beats.core.on_js_reload = (function genetic_byte_beats$core$on_js_reload(){
return genetic_byte_beats.core.start_web_ui.call(null);
});
genetic_byte_beats.core.start_web_ui.call(null);

//# sourceMappingURL=core.js.map
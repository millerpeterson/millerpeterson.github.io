// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23431 = cljs.core._EQ_;
var expr__23432 = (function (){var or__16852__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e23435){if((e23435 instanceof Error)){
var e = e23435;
return false;
} else {
throw e23435;

}
}})();
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23431.call(null,"true",expr__23432))){
return true;
} else {
if(cljs.core.truth_(pred__23431.call(null,"false",expr__23432))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23432)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e23437){if((e23437 instanceof Error)){
var e = e23437;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e23437;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17917__auto__ = [];
var len__17910__auto___23439 = arguments.length;
var i__17911__auto___23440 = (0);
while(true){
if((i__17911__auto___23440 < len__17910__auto___23439)){
args__17917__auto__.push((arguments[i__17911__auto___23440]));

var G__23441 = (i__17911__auto___23440 + (1));
i__17911__auto___23440 = G__23441;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((0) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17918__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23438){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23438));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23442){
var map__23445 = p__23442;
var map__23445__$1 = ((((!((map__23445 == null)))?((((map__23445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23445):map__23445);
var message = cljs.core.get.call(null,map__23445__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23445__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16852__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16840__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16840__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16840__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19045__auto___23607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___23607,ch){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___23607,ch){
return (function (state_23576){
var state_val_23577 = (state_23576[(1)]);
if((state_val_23577 === (7))){
var inst_23572 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
var statearr_23578_23608 = state_23576__$1;
(statearr_23578_23608[(2)] = inst_23572);

(statearr_23578_23608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (1))){
var state_23576__$1 = state_23576;
var statearr_23579_23609 = state_23576__$1;
(statearr_23579_23609[(2)] = null);

(statearr_23579_23609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (4))){
var inst_23529 = (state_23576[(7)]);
var inst_23529__$1 = (state_23576[(2)]);
var state_23576__$1 = (function (){var statearr_23580 = state_23576;
(statearr_23580[(7)] = inst_23529__$1);

return statearr_23580;
})();
if(cljs.core.truth_(inst_23529__$1)){
var statearr_23581_23610 = state_23576__$1;
(statearr_23581_23610[(1)] = (5));

} else {
var statearr_23582_23611 = state_23576__$1;
(statearr_23582_23611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (15))){
var inst_23536 = (state_23576[(8)]);
var inst_23551 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23536);
var inst_23552 = cljs.core.first.call(null,inst_23551);
var inst_23553 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23552);
var inst_23554 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23553)].join('');
var inst_23555 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23554);
var state_23576__$1 = state_23576;
var statearr_23583_23612 = state_23576__$1;
(statearr_23583_23612[(2)] = inst_23555);

(statearr_23583_23612[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (13))){
var inst_23560 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
var statearr_23584_23613 = state_23576__$1;
(statearr_23584_23613[(2)] = inst_23560);

(statearr_23584_23613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (6))){
var state_23576__$1 = state_23576;
var statearr_23585_23614 = state_23576__$1;
(statearr_23585_23614[(2)] = null);

(statearr_23585_23614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (17))){
var inst_23558 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
var statearr_23586_23615 = state_23576__$1;
(statearr_23586_23615[(2)] = inst_23558);

(statearr_23586_23615[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (3))){
var inst_23574 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23576__$1,inst_23574);
} else {
if((state_val_23577 === (12))){
var inst_23535 = (state_23576[(9)]);
var inst_23549 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23535,opts);
var state_23576__$1 = state_23576;
if(cljs.core.truth_(inst_23549)){
var statearr_23587_23616 = state_23576__$1;
(statearr_23587_23616[(1)] = (15));

} else {
var statearr_23588_23617 = state_23576__$1;
(statearr_23588_23617[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (2))){
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23576__$1,(4),ch);
} else {
if((state_val_23577 === (11))){
var inst_23536 = (state_23576[(8)]);
var inst_23541 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23542 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23536);
var inst_23543 = cljs.core.async.timeout.call(null,(1000));
var inst_23544 = [inst_23542,inst_23543];
var inst_23545 = (new cljs.core.PersistentVector(null,2,(5),inst_23541,inst_23544,null));
var state_23576__$1 = state_23576;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23576__$1,(14),inst_23545);
} else {
if((state_val_23577 === (9))){
var inst_23536 = (state_23576[(8)]);
var inst_23562 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23563 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23536);
var inst_23564 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23563);
var inst_23565 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23564)].join('');
var inst_23566 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23565);
var state_23576__$1 = (function (){var statearr_23589 = state_23576;
(statearr_23589[(10)] = inst_23562);

return statearr_23589;
})();
var statearr_23590_23618 = state_23576__$1;
(statearr_23590_23618[(2)] = inst_23566);

(statearr_23590_23618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (5))){
var inst_23529 = (state_23576[(7)]);
var inst_23531 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23532 = (new cljs.core.PersistentArrayMap(null,2,inst_23531,null));
var inst_23533 = (new cljs.core.PersistentHashSet(null,inst_23532,null));
var inst_23534 = figwheel.client.focus_msgs.call(null,inst_23533,inst_23529);
var inst_23535 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23534);
var inst_23536 = cljs.core.first.call(null,inst_23534);
var inst_23537 = figwheel.client.autoload_QMARK_.call(null);
var state_23576__$1 = (function (){var statearr_23591 = state_23576;
(statearr_23591[(9)] = inst_23535);

(statearr_23591[(8)] = inst_23536);

return statearr_23591;
})();
if(cljs.core.truth_(inst_23537)){
var statearr_23592_23619 = state_23576__$1;
(statearr_23592_23619[(1)] = (8));

} else {
var statearr_23593_23620 = state_23576__$1;
(statearr_23593_23620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (14))){
var inst_23547 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
var statearr_23594_23621 = state_23576__$1;
(statearr_23594_23621[(2)] = inst_23547);

(statearr_23594_23621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (16))){
var state_23576__$1 = state_23576;
var statearr_23595_23622 = state_23576__$1;
(statearr_23595_23622[(2)] = null);

(statearr_23595_23622[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (10))){
var inst_23568 = (state_23576[(2)]);
var state_23576__$1 = (function (){var statearr_23596 = state_23576;
(statearr_23596[(11)] = inst_23568);

return statearr_23596;
})();
var statearr_23597_23623 = state_23576__$1;
(statearr_23597_23623[(2)] = null);

(statearr_23597_23623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (8))){
var inst_23535 = (state_23576[(9)]);
var inst_23539 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23535,opts);
var state_23576__$1 = state_23576;
if(cljs.core.truth_(inst_23539)){
var statearr_23598_23624 = state_23576__$1;
(statearr_23598_23624[(1)] = (11));

} else {
var statearr_23599_23625 = state_23576__$1;
(statearr_23599_23625[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19045__auto___23607,ch))
;
return ((function (switch__18865__auto__,c__19045__auto___23607,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18866__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18866__auto____0 = (function (){
var statearr_23603 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23603[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18866__auto__);

(statearr_23603[(1)] = (1));

return statearr_23603;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18866__auto____1 = (function (state_23576){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_23576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e23604){if((e23604 instanceof Object)){
var ex__18869__auto__ = e23604;
var statearr_23605_23626 = state_23576;
(statearr_23605_23626[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23627 = state_23576;
state_23576 = G__23627;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18866__auto__ = function(state_23576){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18866__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18866__auto____1.call(this,state_23576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18866__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18866__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___23607,ch))
})();
var state__19047__auto__ = (function (){var statearr_23606 = f__19046__auto__.call(null);
(statearr_23606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___23607);

return statearr_23606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___23607,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23628_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23628_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_23635 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23635){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23633 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23634 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23634;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23633;
}}catch (e23632){if((e23632 instanceof Error)){
var e = e23632;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23635], null));
} else {
var e = e23632;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23635))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23636){
var map__23643 = p__23636;
var map__23643__$1 = ((((!((map__23643 == null)))?((((map__23643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23643):map__23643);
var opts = map__23643__$1;
var build_id = cljs.core.get.call(null,map__23643__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23643,map__23643__$1,opts,build_id){
return (function (p__23645){
var vec__23646 = p__23645;
var map__23647 = cljs.core.nth.call(null,vec__23646,(0),null);
var map__23647__$1 = ((((!((map__23647 == null)))?((((map__23647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23647):map__23647);
var msg = map__23647__$1;
var msg_name = cljs.core.get.call(null,map__23647__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23646,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23646,map__23647,map__23647__$1,msg,msg_name,_,map__23643,map__23643__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23646,map__23647,map__23647__$1,msg,msg_name,_,map__23643,map__23643__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23643,map__23643__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23653){
var vec__23654 = p__23653;
var map__23655 = cljs.core.nth.call(null,vec__23654,(0),null);
var map__23655__$1 = ((((!((map__23655 == null)))?((((map__23655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23655):map__23655);
var msg = map__23655__$1;
var msg_name = cljs.core.get.call(null,map__23655__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23654,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23657){
var map__23667 = p__23657;
var map__23667__$1 = ((((!((map__23667 == null)))?((((map__23667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23667):map__23667);
var on_compile_warning = cljs.core.get.call(null,map__23667__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23667__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23667,map__23667__$1,on_compile_warning,on_compile_fail){
return (function (p__23669){
var vec__23670 = p__23669;
var map__23671 = cljs.core.nth.call(null,vec__23670,(0),null);
var map__23671__$1 = ((((!((map__23671 == null)))?((((map__23671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23671):map__23671);
var msg = map__23671__$1;
var msg_name = cljs.core.get.call(null,map__23671__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23670,(1));
var pred__23673 = cljs.core._EQ_;
var expr__23674 = msg_name;
if(cljs.core.truth_(pred__23673.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23674))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23673.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23674))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23667,map__23667__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto__,msg_hist,msg_names,msg){
return (function (state_23890){
var state_val_23891 = (state_23890[(1)]);
if((state_val_23891 === (7))){
var inst_23814 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
if(cljs.core.truth_(inst_23814)){
var statearr_23892_23938 = state_23890__$1;
(statearr_23892_23938[(1)] = (8));

} else {
var statearr_23893_23939 = state_23890__$1;
(statearr_23893_23939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (20))){
var inst_23884 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23894_23940 = state_23890__$1;
(statearr_23894_23940[(2)] = inst_23884);

(statearr_23894_23940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (27))){
var inst_23880 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23895_23941 = state_23890__$1;
(statearr_23895_23941[(2)] = inst_23880);

(statearr_23895_23941[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (1))){
var inst_23807 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23890__$1 = state_23890;
if(cljs.core.truth_(inst_23807)){
var statearr_23896_23942 = state_23890__$1;
(statearr_23896_23942[(1)] = (2));

} else {
var statearr_23897_23943 = state_23890__$1;
(statearr_23897_23943[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (24))){
var inst_23882 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23898_23944 = state_23890__$1;
(statearr_23898_23944[(2)] = inst_23882);

(statearr_23898_23944[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (4))){
var inst_23888 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23890__$1,inst_23888);
} else {
if((state_val_23891 === (15))){
var inst_23886 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23899_23945 = state_23890__$1;
(statearr_23899_23945[(2)] = inst_23886);

(statearr_23899_23945[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (21))){
var inst_23845 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23900_23946 = state_23890__$1;
(statearr_23900_23946[(2)] = inst_23845);

(statearr_23900_23946[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (31))){
var inst_23869 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23890__$1 = state_23890;
if(cljs.core.truth_(inst_23869)){
var statearr_23901_23947 = state_23890__$1;
(statearr_23901_23947[(1)] = (34));

} else {
var statearr_23902_23948 = state_23890__$1;
(statearr_23902_23948[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (32))){
var inst_23878 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23903_23949 = state_23890__$1;
(statearr_23903_23949[(2)] = inst_23878);

(statearr_23903_23949[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (33))){
var inst_23867 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23904_23950 = state_23890__$1;
(statearr_23904_23950[(2)] = inst_23867);

(statearr_23904_23950[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (13))){
var inst_23828 = figwheel.client.heads_up.clear.call(null);
var state_23890__$1 = state_23890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23890__$1,(16),inst_23828);
} else {
if((state_val_23891 === (22))){
var inst_23849 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23850 = figwheel.client.heads_up.append_message.call(null,inst_23849);
var state_23890__$1 = state_23890;
var statearr_23905_23951 = state_23890__$1;
(statearr_23905_23951[(2)] = inst_23850);

(statearr_23905_23951[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (36))){
var inst_23876 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23906_23952 = state_23890__$1;
(statearr_23906_23952[(2)] = inst_23876);

(statearr_23906_23952[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (29))){
var inst_23860 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23907_23953 = state_23890__$1;
(statearr_23907_23953[(2)] = inst_23860);

(statearr_23907_23953[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (6))){
var inst_23809 = (state_23890[(7)]);
var state_23890__$1 = state_23890;
var statearr_23908_23954 = state_23890__$1;
(statearr_23908_23954[(2)] = inst_23809);

(statearr_23908_23954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (28))){
var inst_23856 = (state_23890[(2)]);
var inst_23857 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23858 = figwheel.client.heads_up.display_warning.call(null,inst_23857);
var state_23890__$1 = (function (){var statearr_23909 = state_23890;
(statearr_23909[(8)] = inst_23856);

return statearr_23909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23890__$1,(29),inst_23858);
} else {
if((state_val_23891 === (25))){
var inst_23854 = figwheel.client.heads_up.clear.call(null);
var state_23890__$1 = state_23890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23890__$1,(28),inst_23854);
} else {
if((state_val_23891 === (34))){
var inst_23871 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23890__$1 = state_23890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23890__$1,(37),inst_23871);
} else {
if((state_val_23891 === (17))){
var inst_23836 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23910_23955 = state_23890__$1;
(statearr_23910_23955[(2)] = inst_23836);

(statearr_23910_23955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (3))){
var inst_23826 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23890__$1 = state_23890;
if(cljs.core.truth_(inst_23826)){
var statearr_23911_23956 = state_23890__$1;
(statearr_23911_23956[(1)] = (13));

} else {
var statearr_23912_23957 = state_23890__$1;
(statearr_23912_23957[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (12))){
var inst_23822 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23913_23958 = state_23890__$1;
(statearr_23913_23958[(2)] = inst_23822);

(statearr_23913_23958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (2))){
var inst_23809 = (state_23890[(7)]);
var inst_23809__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23890__$1 = (function (){var statearr_23914 = state_23890;
(statearr_23914[(7)] = inst_23809__$1);

return statearr_23914;
})();
if(cljs.core.truth_(inst_23809__$1)){
var statearr_23915_23959 = state_23890__$1;
(statearr_23915_23959[(1)] = (5));

} else {
var statearr_23916_23960 = state_23890__$1;
(statearr_23916_23960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (23))){
var inst_23852 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23890__$1 = state_23890;
if(cljs.core.truth_(inst_23852)){
var statearr_23917_23961 = state_23890__$1;
(statearr_23917_23961[(1)] = (25));

} else {
var statearr_23918_23962 = state_23890__$1;
(statearr_23918_23962[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (35))){
var state_23890__$1 = state_23890;
var statearr_23919_23963 = state_23890__$1;
(statearr_23919_23963[(2)] = null);

(statearr_23919_23963[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (19))){
var inst_23847 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23890__$1 = state_23890;
if(cljs.core.truth_(inst_23847)){
var statearr_23920_23964 = state_23890__$1;
(statearr_23920_23964[(1)] = (22));

} else {
var statearr_23921_23965 = state_23890__$1;
(statearr_23921_23965[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (11))){
var inst_23818 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23922_23966 = state_23890__$1;
(statearr_23922_23966[(2)] = inst_23818);

(statearr_23922_23966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (9))){
var inst_23820 = figwheel.client.heads_up.clear.call(null);
var state_23890__$1 = state_23890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23890__$1,(12),inst_23820);
} else {
if((state_val_23891 === (5))){
var inst_23811 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23890__$1 = state_23890;
var statearr_23923_23967 = state_23890__$1;
(statearr_23923_23967[(2)] = inst_23811);

(statearr_23923_23967[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (14))){
var inst_23838 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23890__$1 = state_23890;
if(cljs.core.truth_(inst_23838)){
var statearr_23924_23968 = state_23890__$1;
(statearr_23924_23968[(1)] = (18));

} else {
var statearr_23925_23969 = state_23890__$1;
(statearr_23925_23969[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (26))){
var inst_23862 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23890__$1 = state_23890;
if(cljs.core.truth_(inst_23862)){
var statearr_23926_23970 = state_23890__$1;
(statearr_23926_23970[(1)] = (30));

} else {
var statearr_23927_23971 = state_23890__$1;
(statearr_23927_23971[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (16))){
var inst_23830 = (state_23890[(2)]);
var inst_23831 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23832 = figwheel.client.format_messages.call(null,inst_23831);
var inst_23833 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23834 = figwheel.client.heads_up.display_error.call(null,inst_23832,inst_23833);
var state_23890__$1 = (function (){var statearr_23928 = state_23890;
(statearr_23928[(9)] = inst_23830);

return statearr_23928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23890__$1,(17),inst_23834);
} else {
if((state_val_23891 === (30))){
var inst_23864 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23865 = figwheel.client.heads_up.display_warning.call(null,inst_23864);
var state_23890__$1 = state_23890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23890__$1,(33),inst_23865);
} else {
if((state_val_23891 === (10))){
var inst_23824 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23929_23972 = state_23890__$1;
(statearr_23929_23972[(2)] = inst_23824);

(statearr_23929_23972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (18))){
var inst_23840 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23841 = figwheel.client.format_messages.call(null,inst_23840);
var inst_23842 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23843 = figwheel.client.heads_up.display_error.call(null,inst_23841,inst_23842);
var state_23890__$1 = state_23890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23890__$1,(21),inst_23843);
} else {
if((state_val_23891 === (37))){
var inst_23873 = (state_23890[(2)]);
var state_23890__$1 = state_23890;
var statearr_23930_23973 = state_23890__$1;
(statearr_23930_23973[(2)] = inst_23873);

(statearr_23930_23973[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23891 === (8))){
var inst_23816 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23890__$1 = state_23890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23890__$1,(11),inst_23816);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19045__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18865__auto__,c__19045__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18866__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18866__auto____0 = (function (){
var statearr_23934 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23934[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18866__auto__);

(statearr_23934[(1)] = (1));

return statearr_23934;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18866__auto____1 = (function (state_23890){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_23890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e23935){if((e23935 instanceof Object)){
var ex__18869__auto__ = e23935;
var statearr_23936_23974 = state_23890;
(statearr_23936_23974[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23975 = state_23890;
state_23890 = G__23975;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18866__auto__ = function(state_23890){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18866__auto____1.call(this,state_23890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18866__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18866__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto__,msg_hist,msg_names,msg))
})();
var state__19047__auto__ = (function (){var statearr_23937 = f__19046__auto__.call(null);
(statearr_23937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto__);

return statearr_23937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto__,msg_hist,msg_names,msg))
);

return c__19045__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19045__auto___24038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___24038,ch){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___24038,ch){
return (function (state_24021){
var state_val_24022 = (state_24021[(1)]);
if((state_val_24022 === (1))){
var state_24021__$1 = state_24021;
var statearr_24023_24039 = state_24021__$1;
(statearr_24023_24039[(2)] = null);

(statearr_24023_24039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (2))){
var state_24021__$1 = state_24021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24021__$1,(4),ch);
} else {
if((state_val_24022 === (3))){
var inst_24019 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24021__$1,inst_24019);
} else {
if((state_val_24022 === (4))){
var inst_24009 = (state_24021[(7)]);
var inst_24009__$1 = (state_24021[(2)]);
var state_24021__$1 = (function (){var statearr_24024 = state_24021;
(statearr_24024[(7)] = inst_24009__$1);

return statearr_24024;
})();
if(cljs.core.truth_(inst_24009__$1)){
var statearr_24025_24040 = state_24021__$1;
(statearr_24025_24040[(1)] = (5));

} else {
var statearr_24026_24041 = state_24021__$1;
(statearr_24026_24041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (5))){
var inst_24009 = (state_24021[(7)]);
var inst_24011 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24009);
var state_24021__$1 = state_24021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24021__$1,(8),inst_24011);
} else {
if((state_val_24022 === (6))){
var state_24021__$1 = state_24021;
var statearr_24027_24042 = state_24021__$1;
(statearr_24027_24042[(2)] = null);

(statearr_24027_24042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (7))){
var inst_24017 = (state_24021[(2)]);
var state_24021__$1 = state_24021;
var statearr_24028_24043 = state_24021__$1;
(statearr_24028_24043[(2)] = inst_24017);

(statearr_24028_24043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24022 === (8))){
var inst_24013 = (state_24021[(2)]);
var state_24021__$1 = (function (){var statearr_24029 = state_24021;
(statearr_24029[(8)] = inst_24013);

return statearr_24029;
})();
var statearr_24030_24044 = state_24021__$1;
(statearr_24030_24044[(2)] = null);

(statearr_24030_24044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19045__auto___24038,ch))
;
return ((function (switch__18865__auto__,c__19045__auto___24038,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18866__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18866__auto____0 = (function (){
var statearr_24034 = [null,null,null,null,null,null,null,null,null];
(statearr_24034[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18866__auto__);

(statearr_24034[(1)] = (1));

return statearr_24034;
});
var figwheel$client$heads_up_plugin_$_state_machine__18866__auto____1 = (function (state_24021){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_24021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e24035){if((e24035 instanceof Object)){
var ex__18869__auto__ = e24035;
var statearr_24036_24045 = state_24021;
(statearr_24036_24045[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24046 = state_24021;
state_24021 = G__24046;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18866__auto__ = function(state_24021){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18866__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18866__auto____1.call(this,state_24021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18866__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18866__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___24038,ch))
})();
var state__19047__auto__ = (function (){var statearr_24037 = f__19046__auto__.call(null);
(statearr_24037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___24038);

return statearr_24037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___24038,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto__){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto__){
return (function (state_24067){
var state_val_24068 = (state_24067[(1)]);
if((state_val_24068 === (1))){
var inst_24062 = cljs.core.async.timeout.call(null,(3000));
var state_24067__$1 = state_24067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24067__$1,(2),inst_24062);
} else {
if((state_val_24068 === (2))){
var inst_24064 = (state_24067[(2)]);
var inst_24065 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24067__$1 = (function (){var statearr_24069 = state_24067;
(statearr_24069[(7)] = inst_24064);

return statearr_24069;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24067__$1,inst_24065);
} else {
return null;
}
}
});})(c__19045__auto__))
;
return ((function (switch__18865__auto__,c__19045__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18866__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18866__auto____0 = (function (){
var statearr_24073 = [null,null,null,null,null,null,null,null];
(statearr_24073[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18866__auto__);

(statearr_24073[(1)] = (1));

return statearr_24073;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18866__auto____1 = (function (state_24067){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_24067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e24074){if((e24074 instanceof Object)){
var ex__18869__auto__ = e24074;
var statearr_24075_24077 = state_24067;
(statearr_24075_24077[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24078 = state_24067;
state_24067 = G__24078;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18866__auto__ = function(state_24067){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18866__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18866__auto____1.call(this,state_24067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18866__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18866__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto__))
})();
var state__19047__auto__ = (function (){var statearr_24076 = f__19046__auto__.call(null);
(statearr_24076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto__);

return statearr_24076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto__))
);

return c__19045__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24079){
var map__24086 = p__24079;
var map__24086__$1 = ((((!((map__24086 == null)))?((((map__24086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24086):map__24086);
var ed = map__24086__$1;
var formatted_exception = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24088_24092 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24089_24093 = null;
var count__24090_24094 = (0);
var i__24091_24095 = (0);
while(true){
if((i__24091_24095 < count__24090_24094)){
var msg_24096 = cljs.core._nth.call(null,chunk__24089_24093,i__24091_24095);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24096);

var G__24097 = seq__24088_24092;
var G__24098 = chunk__24089_24093;
var G__24099 = count__24090_24094;
var G__24100 = (i__24091_24095 + (1));
seq__24088_24092 = G__24097;
chunk__24089_24093 = G__24098;
count__24090_24094 = G__24099;
i__24091_24095 = G__24100;
continue;
} else {
var temp__4425__auto___24101 = cljs.core.seq.call(null,seq__24088_24092);
if(temp__4425__auto___24101){
var seq__24088_24102__$1 = temp__4425__auto___24101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24088_24102__$1)){
var c__17655__auto___24103 = cljs.core.chunk_first.call(null,seq__24088_24102__$1);
var G__24104 = cljs.core.chunk_rest.call(null,seq__24088_24102__$1);
var G__24105 = c__17655__auto___24103;
var G__24106 = cljs.core.count.call(null,c__17655__auto___24103);
var G__24107 = (0);
seq__24088_24092 = G__24104;
chunk__24089_24093 = G__24105;
count__24090_24094 = G__24106;
i__24091_24095 = G__24107;
continue;
} else {
var msg_24108 = cljs.core.first.call(null,seq__24088_24102__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24108);

var G__24109 = cljs.core.next.call(null,seq__24088_24102__$1);
var G__24110 = null;
var G__24111 = (0);
var G__24112 = (0);
seq__24088_24092 = G__24109;
chunk__24089_24093 = G__24110;
count__24090_24094 = G__24111;
i__24091_24095 = G__24112;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24113){
var map__24116 = p__24113;
var map__24116__$1 = ((((!((map__24116 == null)))?((((map__24116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24116):map__24116);
var w = map__24116__$1;
var message = cljs.core.get.call(null,map__24116__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16840__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16840__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16840__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24124 = cljs.core.seq.call(null,plugins);
var chunk__24125 = null;
var count__24126 = (0);
var i__24127 = (0);
while(true){
if((i__24127 < count__24126)){
var vec__24128 = cljs.core._nth.call(null,chunk__24125,i__24127);
var k = cljs.core.nth.call(null,vec__24128,(0),null);
var plugin = cljs.core.nth.call(null,vec__24128,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24130 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24124,chunk__24125,count__24126,i__24127,pl_24130,vec__24128,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24130.call(null,msg_hist);
});})(seq__24124,chunk__24125,count__24126,i__24127,pl_24130,vec__24128,k,plugin))
);
} else {
}

var G__24131 = seq__24124;
var G__24132 = chunk__24125;
var G__24133 = count__24126;
var G__24134 = (i__24127 + (1));
seq__24124 = G__24131;
chunk__24125 = G__24132;
count__24126 = G__24133;
i__24127 = G__24134;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24124);
if(temp__4425__auto__){
var seq__24124__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24124__$1)){
var c__17655__auto__ = cljs.core.chunk_first.call(null,seq__24124__$1);
var G__24135 = cljs.core.chunk_rest.call(null,seq__24124__$1);
var G__24136 = c__17655__auto__;
var G__24137 = cljs.core.count.call(null,c__17655__auto__);
var G__24138 = (0);
seq__24124 = G__24135;
chunk__24125 = G__24136;
count__24126 = G__24137;
i__24127 = G__24138;
continue;
} else {
var vec__24129 = cljs.core.first.call(null,seq__24124__$1);
var k = cljs.core.nth.call(null,vec__24129,(0),null);
var plugin = cljs.core.nth.call(null,vec__24129,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24139 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24124,chunk__24125,count__24126,i__24127,pl_24139,vec__24129,k,plugin,seq__24124__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24139.call(null,msg_hist);
});})(seq__24124,chunk__24125,count__24126,i__24127,pl_24139,vec__24129,k,plugin,seq__24124__$1,temp__4425__auto__))
);
} else {
}

var G__24140 = cljs.core.next.call(null,seq__24124__$1);
var G__24141 = null;
var G__24142 = (0);
var G__24143 = (0);
seq__24124 = G__24140;
chunk__24125 = G__24141;
count__24126 = G__24142;
i__24127 = G__24143;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24144 = [];
var len__17910__auto___24147 = arguments.length;
var i__17911__auto___24148 = (0);
while(true){
if((i__17911__auto___24148 < len__17910__auto___24147)){
args24144.push((arguments[i__17911__auto___24148]));

var G__24149 = (i__17911__auto___24148 + (1));
i__17911__auto___24148 = G__24149;
continue;
} else {
}
break;
}

var G__24146 = args24144.length;
switch (G__24146) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24144.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17917__auto__ = [];
var len__17910__auto___24155 = arguments.length;
var i__17911__auto___24156 = (0);
while(true){
if((i__17911__auto___24156 < len__17910__auto___24155)){
args__17917__auto__.push((arguments[i__17911__auto___24156]));

var G__24157 = (i__17911__auto___24156 + (1));
i__17911__auto___24156 = G__24157;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((0) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17918__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24152){
var map__24153 = p__24152;
var map__24153__$1 = ((((!((map__24153 == null)))?((((map__24153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24153):map__24153);
var opts = map__24153__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24151){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24151));
});

//# sourceMappingURL=client.js.map?rel=1454366813553
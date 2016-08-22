// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19090 = [];
var len__17910__auto___19096 = arguments.length;
var i__17911__auto___19097 = (0);
while(true){
if((i__17911__auto___19097 < len__17910__auto___19096)){
args19090.push((arguments[i__17911__auto___19097]));

var G__19098 = (i__17911__auto___19097 + (1));
i__17911__auto___19097 = G__19098;
continue;
} else {
}
break;
}

var G__19092 = args19090.length;
switch (G__19092) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19090.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19093 = (function (f,blockable,meta19094){
this.f = f;
this.blockable = blockable;
this.meta19094 = meta19094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19095,meta19094__$1){
var self__ = this;
var _19095__$1 = this;
return (new cljs.core.async.t_cljs$core$async19093(self__.f,self__.blockable,meta19094__$1));
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19095){
var self__ = this;
var _19095__$1 = this;
return self__.meta19094;
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19094","meta19094",1743645898,null)], null);
});

cljs.core.async.t_cljs$core$async19093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19093";

cljs.core.async.t_cljs$core$async19093.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async19093");
});

cljs.core.async.__GT_t_cljs$core$async19093 = (function cljs$core$async$__GT_t_cljs$core$async19093(f__$1,blockable__$1,meta19094){
return (new cljs.core.async.t_cljs$core$async19093(f__$1,blockable__$1,meta19094));
});

}

return (new cljs.core.async.t_cljs$core$async19093(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19102 = [];
var len__17910__auto___19105 = arguments.length;
var i__17911__auto___19106 = (0);
while(true){
if((i__17911__auto___19106 < len__17910__auto___19105)){
args19102.push((arguments[i__17911__auto___19106]));

var G__19107 = (i__17911__auto___19106 + (1));
i__17911__auto___19106 = G__19107;
continue;
} else {
}
break;
}

var G__19104 = args19102.length;
switch (G__19104) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19102.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19109 = [];
var len__17910__auto___19112 = arguments.length;
var i__17911__auto___19113 = (0);
while(true){
if((i__17911__auto___19113 < len__17910__auto___19112)){
args19109.push((arguments[i__17911__auto___19113]));

var G__19114 = (i__17911__auto___19113 + (1));
i__17911__auto___19113 = G__19114;
continue;
} else {
}
break;
}

var G__19111 = args19109.length;
switch (G__19111) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19109.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19116 = [];
var len__17910__auto___19119 = arguments.length;
var i__17911__auto___19120 = (0);
while(true){
if((i__17911__auto___19120 < len__17910__auto___19119)){
args19116.push((arguments[i__17911__auto___19120]));

var G__19121 = (i__17911__auto___19120 + (1));
i__17911__auto___19120 = G__19121;
continue;
} else {
}
break;
}

var G__19118 = args19116.length;
switch (G__19118) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19116.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19123 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19123);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19123,ret){
return (function (){
return fn1.call(null,val_19123);
});})(val_19123,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19124 = [];
var len__17910__auto___19127 = arguments.length;
var i__17911__auto___19128 = (0);
while(true){
if((i__17911__auto___19128 < len__17910__auto___19127)){
args19124.push((arguments[i__17911__auto___19128]));

var G__19129 = (i__17911__auto___19128 + (1));
i__17911__auto___19128 = G__19129;
continue;
} else {
}
break;
}

var G__19126 = args19124.length;
switch (G__19126) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19124.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17755__auto___19131 = n;
var x_19132 = (0);
while(true){
if((x_19132 < n__17755__auto___19131)){
(a[x_19132] = (0));

var G__19133 = (x_19132 + (1));
x_19132 = G__19133;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19134 = (i + (1));
i = G__19134;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19138 = (function (alt_flag,flag,meta19139){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19139 = meta19139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19140,meta19139__$1){
var self__ = this;
var _19140__$1 = this;
return (new cljs.core.async.t_cljs$core$async19138(self__.alt_flag,self__.flag,meta19139__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19140){
var self__ = this;
var _19140__$1 = this;
return self__.meta19139;
});})(flag))
;

cljs.core.async.t_cljs$core$async19138.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19138.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19138.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19139","meta19139",200969998,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19138";

cljs.core.async.t_cljs$core$async19138.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async19138");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19138 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19138(alt_flag__$1,flag__$1,meta19139){
return (new cljs.core.async.t_cljs$core$async19138(alt_flag__$1,flag__$1,meta19139));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19138(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19144 = (function (alt_handler,flag,cb,meta19145){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19145 = meta19145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19146,meta19145__$1){
var self__ = this;
var _19146__$1 = this;
return (new cljs.core.async.t_cljs$core$async19144(self__.alt_handler,self__.flag,self__.cb,meta19145__$1));
});

cljs.core.async.t_cljs$core$async19144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19146){
var self__ = this;
var _19146__$1 = this;
return self__.meta19145;
});

cljs.core.async.t_cljs$core$async19144.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19144.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19145","meta19145",1581581577,null)], null);
});

cljs.core.async.t_cljs$core$async19144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19144";

cljs.core.async.t_cljs$core$async19144.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async19144");
});

cljs.core.async.__GT_t_cljs$core$async19144 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19144(alt_handler__$1,flag__$1,cb__$1,meta19145){
return (new cljs.core.async.t_cljs$core$async19144(alt_handler__$1,flag__$1,cb__$1,meta19145));
});

}

return (new cljs.core.async.t_cljs$core$async19144(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19147_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19147_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19148_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19148_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16852__auto__ = wport;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19149 = (i + (1));
i = G__19149;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16852__auto__ = ret;
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16840__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16840__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16840__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17917__auto__ = [];
var len__17910__auto___19155 = arguments.length;
var i__17911__auto___19156 = (0);
while(true){
if((i__17911__auto___19156 < len__17910__auto___19155)){
args__17917__auto__.push((arguments[i__17911__auto___19156]));

var G__19157 = (i__17911__auto___19156 + (1));
i__17911__auto___19156 = G__19157;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((1) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17918__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19152){
var map__19153 = p__19152;
var map__19153__$1 = ((((!((map__19153 == null)))?((((map__19153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19153):map__19153);
var opts = map__19153__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19150){
var G__19151 = cljs.core.first.call(null,seq19150);
var seq19150__$1 = cljs.core.next.call(null,seq19150);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19151,seq19150__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19158 = [];
var len__17910__auto___19208 = arguments.length;
var i__17911__auto___19209 = (0);
while(true){
if((i__17911__auto___19209 < len__17910__auto___19208)){
args19158.push((arguments[i__17911__auto___19209]));

var G__19210 = (i__17911__auto___19209 + (1));
i__17911__auto___19209 = G__19210;
continue;
} else {
}
break;
}

var G__19160 = args19158.length;
switch (G__19160) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19158.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19045__auto___19212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___19212){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___19212){
return (function (state_19184){
var state_val_19185 = (state_19184[(1)]);
if((state_val_19185 === (7))){
var inst_19180 = (state_19184[(2)]);
var state_19184__$1 = state_19184;
var statearr_19186_19213 = state_19184__$1;
(statearr_19186_19213[(2)] = inst_19180);

(statearr_19186_19213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (1))){
var state_19184__$1 = state_19184;
var statearr_19187_19214 = state_19184__$1;
(statearr_19187_19214[(2)] = null);

(statearr_19187_19214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (4))){
var inst_19163 = (state_19184[(7)]);
var inst_19163__$1 = (state_19184[(2)]);
var inst_19164 = (inst_19163__$1 == null);
var state_19184__$1 = (function (){var statearr_19188 = state_19184;
(statearr_19188[(7)] = inst_19163__$1);

return statearr_19188;
})();
if(cljs.core.truth_(inst_19164)){
var statearr_19189_19215 = state_19184__$1;
(statearr_19189_19215[(1)] = (5));

} else {
var statearr_19190_19216 = state_19184__$1;
(statearr_19190_19216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (13))){
var state_19184__$1 = state_19184;
var statearr_19191_19217 = state_19184__$1;
(statearr_19191_19217[(2)] = null);

(statearr_19191_19217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (6))){
var inst_19163 = (state_19184[(7)]);
var state_19184__$1 = state_19184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19184__$1,(11),to,inst_19163);
} else {
if((state_val_19185 === (3))){
var inst_19182 = (state_19184[(2)]);
var state_19184__$1 = state_19184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19184__$1,inst_19182);
} else {
if((state_val_19185 === (12))){
var state_19184__$1 = state_19184;
var statearr_19192_19218 = state_19184__$1;
(statearr_19192_19218[(2)] = null);

(statearr_19192_19218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (2))){
var state_19184__$1 = state_19184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19184__$1,(4),from);
} else {
if((state_val_19185 === (11))){
var inst_19173 = (state_19184[(2)]);
var state_19184__$1 = state_19184;
if(cljs.core.truth_(inst_19173)){
var statearr_19193_19219 = state_19184__$1;
(statearr_19193_19219[(1)] = (12));

} else {
var statearr_19194_19220 = state_19184__$1;
(statearr_19194_19220[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (9))){
var state_19184__$1 = state_19184;
var statearr_19195_19221 = state_19184__$1;
(statearr_19195_19221[(2)] = null);

(statearr_19195_19221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (5))){
var state_19184__$1 = state_19184;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19196_19222 = state_19184__$1;
(statearr_19196_19222[(1)] = (8));

} else {
var statearr_19197_19223 = state_19184__$1;
(statearr_19197_19223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (14))){
var inst_19178 = (state_19184[(2)]);
var state_19184__$1 = state_19184;
var statearr_19198_19224 = state_19184__$1;
(statearr_19198_19224[(2)] = inst_19178);

(statearr_19198_19224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (10))){
var inst_19170 = (state_19184[(2)]);
var state_19184__$1 = state_19184;
var statearr_19199_19225 = state_19184__$1;
(statearr_19199_19225[(2)] = inst_19170);

(statearr_19199_19225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19185 === (8))){
var inst_19167 = cljs.core.async.close_BANG_.call(null,to);
var state_19184__$1 = state_19184;
var statearr_19200_19226 = state_19184__$1;
(statearr_19200_19226[(2)] = inst_19167);

(statearr_19200_19226[(1)] = (10));


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
});})(c__19045__auto___19212))
;
return ((function (switch__18865__auto__,c__19045__auto___19212){
return (function() {
var cljs$core$async$state_machine__18866__auto__ = null;
var cljs$core$async$state_machine__18866__auto____0 = (function (){
var statearr_19204 = [null,null,null,null,null,null,null,null];
(statearr_19204[(0)] = cljs$core$async$state_machine__18866__auto__);

(statearr_19204[(1)] = (1));

return statearr_19204;
});
var cljs$core$async$state_machine__18866__auto____1 = (function (state_19184){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_19184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e19205){if((e19205 instanceof Object)){
var ex__18869__auto__ = e19205;
var statearr_19206_19227 = state_19184;
(statearr_19206_19227[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19228 = state_19184;
state_19184 = G__19228;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$state_machine__18866__auto__ = function(state_19184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18866__auto____1.call(this,state_19184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18866__auto____0;
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18866__auto____1;
return cljs$core$async$state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___19212))
})();
var state__19047__auto__ = (function (){var statearr_19207 = f__19046__auto__.call(null);
(statearr_19207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___19212);

return statearr_19207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___19212))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19412){
var vec__19413 = p__19412;
var v = cljs.core.nth.call(null,vec__19413,(0),null);
var p = cljs.core.nth.call(null,vec__19413,(1),null);
var job = vec__19413;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19045__auto___19595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___19595,res,vec__19413,v,p,job,jobs,results){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___19595,res,vec__19413,v,p,job,jobs,results){
return (function (state_19418){
var state_val_19419 = (state_19418[(1)]);
if((state_val_19419 === (1))){
var state_19418__$1 = state_19418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19418__$1,(2),res,v);
} else {
if((state_val_19419 === (2))){
var inst_19415 = (state_19418[(2)]);
var inst_19416 = cljs.core.async.close_BANG_.call(null,res);
var state_19418__$1 = (function (){var statearr_19420 = state_19418;
(statearr_19420[(7)] = inst_19415);

return statearr_19420;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19418__$1,inst_19416);
} else {
return null;
}
}
});})(c__19045__auto___19595,res,vec__19413,v,p,job,jobs,results))
;
return ((function (switch__18865__auto__,c__19045__auto___19595,res,vec__19413,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0 = (function (){
var statearr_19424 = [null,null,null,null,null,null,null,null];
(statearr_19424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__);

(statearr_19424[(1)] = (1));

return statearr_19424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1 = (function (state_19418){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_19418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e19425){if((e19425 instanceof Object)){
var ex__18869__auto__ = e19425;
var statearr_19426_19596 = state_19418;
(statearr_19426_19596[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19597 = state_19418;
state_19418 = G__19597;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__ = function(state_19418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1.call(this,state_19418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___19595,res,vec__19413,v,p,job,jobs,results))
})();
var state__19047__auto__ = (function (){var statearr_19427 = f__19046__auto__.call(null);
(statearr_19427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___19595);

return statearr_19427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___19595,res,vec__19413,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19428){
var vec__19429 = p__19428;
var v = cljs.core.nth.call(null,vec__19429,(0),null);
var p = cljs.core.nth.call(null,vec__19429,(1),null);
var job = vec__19429;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17755__auto___19598 = n;
var __19599 = (0);
while(true){
if((__19599 < n__17755__auto___19598)){
var G__19430_19600 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19430_19600) {
case "compute":
var c__19045__auto___19602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19599,c__19045__auto___19602,G__19430_19600,n__17755__auto___19598,jobs,results,process,async){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (__19599,c__19045__auto___19602,G__19430_19600,n__17755__auto___19598,jobs,results,process,async){
return (function (state_19443){
var state_val_19444 = (state_19443[(1)]);
if((state_val_19444 === (1))){
var state_19443__$1 = state_19443;
var statearr_19445_19603 = state_19443__$1;
(statearr_19445_19603[(2)] = null);

(statearr_19445_19603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19444 === (2))){
var state_19443__$1 = state_19443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19443__$1,(4),jobs);
} else {
if((state_val_19444 === (3))){
var inst_19441 = (state_19443[(2)]);
var state_19443__$1 = state_19443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19443__$1,inst_19441);
} else {
if((state_val_19444 === (4))){
var inst_19433 = (state_19443[(2)]);
var inst_19434 = process.call(null,inst_19433);
var state_19443__$1 = state_19443;
if(cljs.core.truth_(inst_19434)){
var statearr_19446_19604 = state_19443__$1;
(statearr_19446_19604[(1)] = (5));

} else {
var statearr_19447_19605 = state_19443__$1;
(statearr_19447_19605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19444 === (5))){
var state_19443__$1 = state_19443;
var statearr_19448_19606 = state_19443__$1;
(statearr_19448_19606[(2)] = null);

(statearr_19448_19606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19444 === (6))){
var state_19443__$1 = state_19443;
var statearr_19449_19607 = state_19443__$1;
(statearr_19449_19607[(2)] = null);

(statearr_19449_19607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19444 === (7))){
var inst_19439 = (state_19443[(2)]);
var state_19443__$1 = state_19443;
var statearr_19450_19608 = state_19443__$1;
(statearr_19450_19608[(2)] = inst_19439);

(statearr_19450_19608[(1)] = (3));


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
});})(__19599,c__19045__auto___19602,G__19430_19600,n__17755__auto___19598,jobs,results,process,async))
;
return ((function (__19599,switch__18865__auto__,c__19045__auto___19602,G__19430_19600,n__17755__auto___19598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0 = (function (){
var statearr_19454 = [null,null,null,null,null,null,null];
(statearr_19454[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__);

(statearr_19454[(1)] = (1));

return statearr_19454;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1 = (function (state_19443){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_19443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e19455){if((e19455 instanceof Object)){
var ex__18869__auto__ = e19455;
var statearr_19456_19609 = state_19443;
(statearr_19456_19609[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19610 = state_19443;
state_19443 = G__19610;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__ = function(state_19443){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1.call(this,state_19443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__;
})()
;})(__19599,switch__18865__auto__,c__19045__auto___19602,G__19430_19600,n__17755__auto___19598,jobs,results,process,async))
})();
var state__19047__auto__ = (function (){var statearr_19457 = f__19046__auto__.call(null);
(statearr_19457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___19602);

return statearr_19457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(__19599,c__19045__auto___19602,G__19430_19600,n__17755__auto___19598,jobs,results,process,async))
);


break;
case "async":
var c__19045__auto___19611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19599,c__19045__auto___19611,G__19430_19600,n__17755__auto___19598,jobs,results,process,async){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (__19599,c__19045__auto___19611,G__19430_19600,n__17755__auto___19598,jobs,results,process,async){
return (function (state_19470){
var state_val_19471 = (state_19470[(1)]);
if((state_val_19471 === (1))){
var state_19470__$1 = state_19470;
var statearr_19472_19612 = state_19470__$1;
(statearr_19472_19612[(2)] = null);

(statearr_19472_19612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (2))){
var state_19470__$1 = state_19470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19470__$1,(4),jobs);
} else {
if((state_val_19471 === (3))){
var inst_19468 = (state_19470[(2)]);
var state_19470__$1 = state_19470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19470__$1,inst_19468);
} else {
if((state_val_19471 === (4))){
var inst_19460 = (state_19470[(2)]);
var inst_19461 = async.call(null,inst_19460);
var state_19470__$1 = state_19470;
if(cljs.core.truth_(inst_19461)){
var statearr_19473_19613 = state_19470__$1;
(statearr_19473_19613[(1)] = (5));

} else {
var statearr_19474_19614 = state_19470__$1;
(statearr_19474_19614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (5))){
var state_19470__$1 = state_19470;
var statearr_19475_19615 = state_19470__$1;
(statearr_19475_19615[(2)] = null);

(statearr_19475_19615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (6))){
var state_19470__$1 = state_19470;
var statearr_19476_19616 = state_19470__$1;
(statearr_19476_19616[(2)] = null);

(statearr_19476_19616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (7))){
var inst_19466 = (state_19470[(2)]);
var state_19470__$1 = state_19470;
var statearr_19477_19617 = state_19470__$1;
(statearr_19477_19617[(2)] = inst_19466);

(statearr_19477_19617[(1)] = (3));


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
});})(__19599,c__19045__auto___19611,G__19430_19600,n__17755__auto___19598,jobs,results,process,async))
;
return ((function (__19599,switch__18865__auto__,c__19045__auto___19611,G__19430_19600,n__17755__auto___19598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0 = (function (){
var statearr_19481 = [null,null,null,null,null,null,null];
(statearr_19481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__);

(statearr_19481[(1)] = (1));

return statearr_19481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1 = (function (state_19470){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_19470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e19482){if((e19482 instanceof Object)){
var ex__18869__auto__ = e19482;
var statearr_19483_19618 = state_19470;
(statearr_19483_19618[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19619 = state_19470;
state_19470 = G__19619;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__ = function(state_19470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1.call(this,state_19470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__;
})()
;})(__19599,switch__18865__auto__,c__19045__auto___19611,G__19430_19600,n__17755__auto___19598,jobs,results,process,async))
})();
var state__19047__auto__ = (function (){var statearr_19484 = f__19046__auto__.call(null);
(statearr_19484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___19611);

return statearr_19484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(__19599,c__19045__auto___19611,G__19430_19600,n__17755__auto___19598,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19620 = (__19599 + (1));
__19599 = G__19620;
continue;
} else {
}
break;
}

var c__19045__auto___19621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___19621,jobs,results,process,async){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___19621,jobs,results,process,async){
return (function (state_19506){
var state_val_19507 = (state_19506[(1)]);
if((state_val_19507 === (1))){
var state_19506__$1 = state_19506;
var statearr_19508_19622 = state_19506__$1;
(statearr_19508_19622[(2)] = null);

(statearr_19508_19622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19507 === (2))){
var state_19506__$1 = state_19506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19506__$1,(4),from);
} else {
if((state_val_19507 === (3))){
var inst_19504 = (state_19506[(2)]);
var state_19506__$1 = state_19506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19506__$1,inst_19504);
} else {
if((state_val_19507 === (4))){
var inst_19487 = (state_19506[(7)]);
var inst_19487__$1 = (state_19506[(2)]);
var inst_19488 = (inst_19487__$1 == null);
var state_19506__$1 = (function (){var statearr_19509 = state_19506;
(statearr_19509[(7)] = inst_19487__$1);

return statearr_19509;
})();
if(cljs.core.truth_(inst_19488)){
var statearr_19510_19623 = state_19506__$1;
(statearr_19510_19623[(1)] = (5));

} else {
var statearr_19511_19624 = state_19506__$1;
(statearr_19511_19624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19507 === (5))){
var inst_19490 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19506__$1 = state_19506;
var statearr_19512_19625 = state_19506__$1;
(statearr_19512_19625[(2)] = inst_19490);

(statearr_19512_19625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19507 === (6))){
var inst_19492 = (state_19506[(8)]);
var inst_19487 = (state_19506[(7)]);
var inst_19492__$1 = cljs.core.async.chan.call(null,(1));
var inst_19493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19494 = [inst_19487,inst_19492__$1];
var inst_19495 = (new cljs.core.PersistentVector(null,2,(5),inst_19493,inst_19494,null));
var state_19506__$1 = (function (){var statearr_19513 = state_19506;
(statearr_19513[(8)] = inst_19492__$1);

return statearr_19513;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19506__$1,(8),jobs,inst_19495);
} else {
if((state_val_19507 === (7))){
var inst_19502 = (state_19506[(2)]);
var state_19506__$1 = state_19506;
var statearr_19514_19626 = state_19506__$1;
(statearr_19514_19626[(2)] = inst_19502);

(statearr_19514_19626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19507 === (8))){
var inst_19492 = (state_19506[(8)]);
var inst_19497 = (state_19506[(2)]);
var state_19506__$1 = (function (){var statearr_19515 = state_19506;
(statearr_19515[(9)] = inst_19497);

return statearr_19515;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19506__$1,(9),results,inst_19492);
} else {
if((state_val_19507 === (9))){
var inst_19499 = (state_19506[(2)]);
var state_19506__$1 = (function (){var statearr_19516 = state_19506;
(statearr_19516[(10)] = inst_19499);

return statearr_19516;
})();
var statearr_19517_19627 = state_19506__$1;
(statearr_19517_19627[(2)] = null);

(statearr_19517_19627[(1)] = (2));


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
});})(c__19045__auto___19621,jobs,results,process,async))
;
return ((function (switch__18865__auto__,c__19045__auto___19621,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0 = (function (){
var statearr_19521 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19521[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__);

(statearr_19521[(1)] = (1));

return statearr_19521;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1 = (function (state_19506){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_19506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e19522){if((e19522 instanceof Object)){
var ex__18869__auto__ = e19522;
var statearr_19523_19628 = state_19506;
(statearr_19523_19628[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19629 = state_19506;
state_19506 = G__19629;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__ = function(state_19506){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1.call(this,state_19506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___19621,jobs,results,process,async))
})();
var state__19047__auto__ = (function (){var statearr_19524 = f__19046__auto__.call(null);
(statearr_19524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___19621);

return statearr_19524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___19621,jobs,results,process,async))
);


var c__19045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto__,jobs,results,process,async){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto__,jobs,results,process,async){
return (function (state_19562){
var state_val_19563 = (state_19562[(1)]);
if((state_val_19563 === (7))){
var inst_19558 = (state_19562[(2)]);
var state_19562__$1 = state_19562;
var statearr_19564_19630 = state_19562__$1;
(statearr_19564_19630[(2)] = inst_19558);

(statearr_19564_19630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (20))){
var state_19562__$1 = state_19562;
var statearr_19565_19631 = state_19562__$1;
(statearr_19565_19631[(2)] = null);

(statearr_19565_19631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (1))){
var state_19562__$1 = state_19562;
var statearr_19566_19632 = state_19562__$1;
(statearr_19566_19632[(2)] = null);

(statearr_19566_19632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (4))){
var inst_19527 = (state_19562[(7)]);
var inst_19527__$1 = (state_19562[(2)]);
var inst_19528 = (inst_19527__$1 == null);
var state_19562__$1 = (function (){var statearr_19567 = state_19562;
(statearr_19567[(7)] = inst_19527__$1);

return statearr_19567;
})();
if(cljs.core.truth_(inst_19528)){
var statearr_19568_19633 = state_19562__$1;
(statearr_19568_19633[(1)] = (5));

} else {
var statearr_19569_19634 = state_19562__$1;
(statearr_19569_19634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (15))){
var inst_19540 = (state_19562[(8)]);
var state_19562__$1 = state_19562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19562__$1,(18),to,inst_19540);
} else {
if((state_val_19563 === (21))){
var inst_19553 = (state_19562[(2)]);
var state_19562__$1 = state_19562;
var statearr_19570_19635 = state_19562__$1;
(statearr_19570_19635[(2)] = inst_19553);

(statearr_19570_19635[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (13))){
var inst_19555 = (state_19562[(2)]);
var state_19562__$1 = (function (){var statearr_19571 = state_19562;
(statearr_19571[(9)] = inst_19555);

return statearr_19571;
})();
var statearr_19572_19636 = state_19562__$1;
(statearr_19572_19636[(2)] = null);

(statearr_19572_19636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (6))){
var inst_19527 = (state_19562[(7)]);
var state_19562__$1 = state_19562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19562__$1,(11),inst_19527);
} else {
if((state_val_19563 === (17))){
var inst_19548 = (state_19562[(2)]);
var state_19562__$1 = state_19562;
if(cljs.core.truth_(inst_19548)){
var statearr_19573_19637 = state_19562__$1;
(statearr_19573_19637[(1)] = (19));

} else {
var statearr_19574_19638 = state_19562__$1;
(statearr_19574_19638[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (3))){
var inst_19560 = (state_19562[(2)]);
var state_19562__$1 = state_19562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19562__$1,inst_19560);
} else {
if((state_val_19563 === (12))){
var inst_19537 = (state_19562[(10)]);
var state_19562__$1 = state_19562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19562__$1,(14),inst_19537);
} else {
if((state_val_19563 === (2))){
var state_19562__$1 = state_19562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19562__$1,(4),results);
} else {
if((state_val_19563 === (19))){
var state_19562__$1 = state_19562;
var statearr_19575_19639 = state_19562__$1;
(statearr_19575_19639[(2)] = null);

(statearr_19575_19639[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (11))){
var inst_19537 = (state_19562[(2)]);
var state_19562__$1 = (function (){var statearr_19576 = state_19562;
(statearr_19576[(10)] = inst_19537);

return statearr_19576;
})();
var statearr_19577_19640 = state_19562__$1;
(statearr_19577_19640[(2)] = null);

(statearr_19577_19640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (9))){
var state_19562__$1 = state_19562;
var statearr_19578_19641 = state_19562__$1;
(statearr_19578_19641[(2)] = null);

(statearr_19578_19641[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (5))){
var state_19562__$1 = state_19562;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19579_19642 = state_19562__$1;
(statearr_19579_19642[(1)] = (8));

} else {
var statearr_19580_19643 = state_19562__$1;
(statearr_19580_19643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (14))){
var inst_19542 = (state_19562[(11)]);
var inst_19540 = (state_19562[(8)]);
var inst_19540__$1 = (state_19562[(2)]);
var inst_19541 = (inst_19540__$1 == null);
var inst_19542__$1 = cljs.core.not.call(null,inst_19541);
var state_19562__$1 = (function (){var statearr_19581 = state_19562;
(statearr_19581[(11)] = inst_19542__$1);

(statearr_19581[(8)] = inst_19540__$1);

return statearr_19581;
})();
if(inst_19542__$1){
var statearr_19582_19644 = state_19562__$1;
(statearr_19582_19644[(1)] = (15));

} else {
var statearr_19583_19645 = state_19562__$1;
(statearr_19583_19645[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (16))){
var inst_19542 = (state_19562[(11)]);
var state_19562__$1 = state_19562;
var statearr_19584_19646 = state_19562__$1;
(statearr_19584_19646[(2)] = inst_19542);

(statearr_19584_19646[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (10))){
var inst_19534 = (state_19562[(2)]);
var state_19562__$1 = state_19562;
var statearr_19585_19647 = state_19562__$1;
(statearr_19585_19647[(2)] = inst_19534);

(statearr_19585_19647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (18))){
var inst_19545 = (state_19562[(2)]);
var state_19562__$1 = state_19562;
var statearr_19586_19648 = state_19562__$1;
(statearr_19586_19648[(2)] = inst_19545);

(statearr_19586_19648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19563 === (8))){
var inst_19531 = cljs.core.async.close_BANG_.call(null,to);
var state_19562__$1 = state_19562;
var statearr_19587_19649 = state_19562__$1;
(statearr_19587_19649[(2)] = inst_19531);

(statearr_19587_19649[(1)] = (10));


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
}
}
}
}
});})(c__19045__auto__,jobs,results,process,async))
;
return ((function (switch__18865__auto__,c__19045__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0 = (function (){
var statearr_19591 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__);

(statearr_19591[(1)] = (1));

return statearr_19591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1 = (function (state_19562){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_19562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e19592){if((e19592 instanceof Object)){
var ex__18869__auto__ = e19592;
var statearr_19593_19650 = state_19562;
(statearr_19593_19650[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19651 = state_19562;
state_19562 = G__19651;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__ = function(state_19562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1.call(this,state_19562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18866__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto__,jobs,results,process,async))
})();
var state__19047__auto__ = (function (){var statearr_19594 = f__19046__auto__.call(null);
(statearr_19594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto__);

return statearr_19594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto__,jobs,results,process,async))
);

return c__19045__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args19652 = [];
var len__17910__auto___19655 = arguments.length;
var i__17911__auto___19656 = (0);
while(true){
if((i__17911__auto___19656 < len__17910__auto___19655)){
args19652.push((arguments[i__17911__auto___19656]));

var G__19657 = (i__17911__auto___19656 + (1));
i__17911__auto___19656 = G__19657;
continue;
} else {
}
break;
}

var G__19654 = args19652.length;
switch (G__19654) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19652.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args19659 = [];
var len__17910__auto___19662 = arguments.length;
var i__17911__auto___19663 = (0);
while(true){
if((i__17911__auto___19663 < len__17910__auto___19662)){
args19659.push((arguments[i__17911__auto___19663]));

var G__19664 = (i__17911__auto___19663 + (1));
i__17911__auto___19663 = G__19664;
continue;
} else {
}
break;
}

var G__19661 = args19659.length;
switch (G__19661) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19659.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19666 = [];
var len__17910__auto___19719 = arguments.length;
var i__17911__auto___19720 = (0);
while(true){
if((i__17911__auto___19720 < len__17910__auto___19719)){
args19666.push((arguments[i__17911__auto___19720]));

var G__19721 = (i__17911__auto___19720 + (1));
i__17911__auto___19720 = G__19721;
continue;
} else {
}
break;
}

var G__19668 = args19666.length;
switch (G__19668) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19666.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19045__auto___19723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___19723,tc,fc){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___19723,tc,fc){
return (function (state_19694){
var state_val_19695 = (state_19694[(1)]);
if((state_val_19695 === (7))){
var inst_19690 = (state_19694[(2)]);
var state_19694__$1 = state_19694;
var statearr_19696_19724 = state_19694__$1;
(statearr_19696_19724[(2)] = inst_19690);

(statearr_19696_19724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (1))){
var state_19694__$1 = state_19694;
var statearr_19697_19725 = state_19694__$1;
(statearr_19697_19725[(2)] = null);

(statearr_19697_19725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (4))){
var inst_19671 = (state_19694[(7)]);
var inst_19671__$1 = (state_19694[(2)]);
var inst_19672 = (inst_19671__$1 == null);
var state_19694__$1 = (function (){var statearr_19698 = state_19694;
(statearr_19698[(7)] = inst_19671__$1);

return statearr_19698;
})();
if(cljs.core.truth_(inst_19672)){
var statearr_19699_19726 = state_19694__$1;
(statearr_19699_19726[(1)] = (5));

} else {
var statearr_19700_19727 = state_19694__$1;
(statearr_19700_19727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (13))){
var state_19694__$1 = state_19694;
var statearr_19701_19728 = state_19694__$1;
(statearr_19701_19728[(2)] = null);

(statearr_19701_19728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (6))){
var inst_19671 = (state_19694[(7)]);
var inst_19677 = p.call(null,inst_19671);
var state_19694__$1 = state_19694;
if(cljs.core.truth_(inst_19677)){
var statearr_19702_19729 = state_19694__$1;
(statearr_19702_19729[(1)] = (9));

} else {
var statearr_19703_19730 = state_19694__$1;
(statearr_19703_19730[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (3))){
var inst_19692 = (state_19694[(2)]);
var state_19694__$1 = state_19694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19694__$1,inst_19692);
} else {
if((state_val_19695 === (12))){
var state_19694__$1 = state_19694;
var statearr_19704_19731 = state_19694__$1;
(statearr_19704_19731[(2)] = null);

(statearr_19704_19731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (2))){
var state_19694__$1 = state_19694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19694__$1,(4),ch);
} else {
if((state_val_19695 === (11))){
var inst_19671 = (state_19694[(7)]);
var inst_19681 = (state_19694[(2)]);
var state_19694__$1 = state_19694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19694__$1,(8),inst_19681,inst_19671);
} else {
if((state_val_19695 === (9))){
var state_19694__$1 = state_19694;
var statearr_19705_19732 = state_19694__$1;
(statearr_19705_19732[(2)] = tc);

(statearr_19705_19732[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (5))){
var inst_19674 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19675 = cljs.core.async.close_BANG_.call(null,fc);
var state_19694__$1 = (function (){var statearr_19706 = state_19694;
(statearr_19706[(8)] = inst_19674);

return statearr_19706;
})();
var statearr_19707_19733 = state_19694__$1;
(statearr_19707_19733[(2)] = inst_19675);

(statearr_19707_19733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (14))){
var inst_19688 = (state_19694[(2)]);
var state_19694__$1 = state_19694;
var statearr_19708_19734 = state_19694__$1;
(statearr_19708_19734[(2)] = inst_19688);

(statearr_19708_19734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (10))){
var state_19694__$1 = state_19694;
var statearr_19709_19735 = state_19694__$1;
(statearr_19709_19735[(2)] = fc);

(statearr_19709_19735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19695 === (8))){
var inst_19683 = (state_19694[(2)]);
var state_19694__$1 = state_19694;
if(cljs.core.truth_(inst_19683)){
var statearr_19710_19736 = state_19694__$1;
(statearr_19710_19736[(1)] = (12));

} else {
var statearr_19711_19737 = state_19694__$1;
(statearr_19711_19737[(1)] = (13));

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
});})(c__19045__auto___19723,tc,fc))
;
return ((function (switch__18865__auto__,c__19045__auto___19723,tc,fc){
return (function() {
var cljs$core$async$state_machine__18866__auto__ = null;
var cljs$core$async$state_machine__18866__auto____0 = (function (){
var statearr_19715 = [null,null,null,null,null,null,null,null,null];
(statearr_19715[(0)] = cljs$core$async$state_machine__18866__auto__);

(statearr_19715[(1)] = (1));

return statearr_19715;
});
var cljs$core$async$state_machine__18866__auto____1 = (function (state_19694){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_19694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e19716){if((e19716 instanceof Object)){
var ex__18869__auto__ = e19716;
var statearr_19717_19738 = state_19694;
(statearr_19717_19738[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19739 = state_19694;
state_19694 = G__19739;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$state_machine__18866__auto__ = function(state_19694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18866__auto____1.call(this,state_19694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18866__auto____0;
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18866__auto____1;
return cljs$core$async$state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___19723,tc,fc))
})();
var state__19047__auto__ = (function (){var statearr_19718 = f__19046__auto__.call(null);
(statearr_19718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___19723);

return statearr_19718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___19723,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto__){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto__){
return (function (state_19803){
var state_val_19804 = (state_19803[(1)]);
if((state_val_19804 === (7))){
var inst_19799 = (state_19803[(2)]);
var state_19803__$1 = state_19803;
var statearr_19805_19826 = state_19803__$1;
(statearr_19805_19826[(2)] = inst_19799);

(statearr_19805_19826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (1))){
var inst_19783 = init;
var state_19803__$1 = (function (){var statearr_19806 = state_19803;
(statearr_19806[(7)] = inst_19783);

return statearr_19806;
})();
var statearr_19807_19827 = state_19803__$1;
(statearr_19807_19827[(2)] = null);

(statearr_19807_19827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (4))){
var inst_19786 = (state_19803[(8)]);
var inst_19786__$1 = (state_19803[(2)]);
var inst_19787 = (inst_19786__$1 == null);
var state_19803__$1 = (function (){var statearr_19808 = state_19803;
(statearr_19808[(8)] = inst_19786__$1);

return statearr_19808;
})();
if(cljs.core.truth_(inst_19787)){
var statearr_19809_19828 = state_19803__$1;
(statearr_19809_19828[(1)] = (5));

} else {
var statearr_19810_19829 = state_19803__$1;
(statearr_19810_19829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (6))){
var inst_19783 = (state_19803[(7)]);
var inst_19786 = (state_19803[(8)]);
var inst_19790 = (state_19803[(9)]);
var inst_19790__$1 = f.call(null,inst_19783,inst_19786);
var inst_19791 = cljs.core.reduced_QMARK_.call(null,inst_19790__$1);
var state_19803__$1 = (function (){var statearr_19811 = state_19803;
(statearr_19811[(9)] = inst_19790__$1);

return statearr_19811;
})();
if(inst_19791){
var statearr_19812_19830 = state_19803__$1;
(statearr_19812_19830[(1)] = (8));

} else {
var statearr_19813_19831 = state_19803__$1;
(statearr_19813_19831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (3))){
var inst_19801 = (state_19803[(2)]);
var state_19803__$1 = state_19803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19803__$1,inst_19801);
} else {
if((state_val_19804 === (2))){
var state_19803__$1 = state_19803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19803__$1,(4),ch);
} else {
if((state_val_19804 === (9))){
var inst_19790 = (state_19803[(9)]);
var inst_19783 = inst_19790;
var state_19803__$1 = (function (){var statearr_19814 = state_19803;
(statearr_19814[(7)] = inst_19783);

return statearr_19814;
})();
var statearr_19815_19832 = state_19803__$1;
(statearr_19815_19832[(2)] = null);

(statearr_19815_19832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (5))){
var inst_19783 = (state_19803[(7)]);
var state_19803__$1 = state_19803;
var statearr_19816_19833 = state_19803__$1;
(statearr_19816_19833[(2)] = inst_19783);

(statearr_19816_19833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (10))){
var inst_19797 = (state_19803[(2)]);
var state_19803__$1 = state_19803;
var statearr_19817_19834 = state_19803__$1;
(statearr_19817_19834[(2)] = inst_19797);

(statearr_19817_19834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (8))){
var inst_19790 = (state_19803[(9)]);
var inst_19793 = cljs.core.deref.call(null,inst_19790);
var state_19803__$1 = state_19803;
var statearr_19818_19835 = state_19803__$1;
(statearr_19818_19835[(2)] = inst_19793);

(statearr_19818_19835[(1)] = (10));


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
});})(c__19045__auto__))
;
return ((function (switch__18865__auto__,c__19045__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18866__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18866__auto____0 = (function (){
var statearr_19822 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19822[(0)] = cljs$core$async$reduce_$_state_machine__18866__auto__);

(statearr_19822[(1)] = (1));

return statearr_19822;
});
var cljs$core$async$reduce_$_state_machine__18866__auto____1 = (function (state_19803){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_19803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e19823){if((e19823 instanceof Object)){
var ex__18869__auto__ = e19823;
var statearr_19824_19836 = state_19803;
(statearr_19824_19836[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19837 = state_19803;
state_19803 = G__19837;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18866__auto__ = function(state_19803){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18866__auto____1.call(this,state_19803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18866__auto____0;
cljs$core$async$reduce_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18866__auto____1;
return cljs$core$async$reduce_$_state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto__))
})();
var state__19047__auto__ = (function (){var statearr_19825 = f__19046__auto__.call(null);
(statearr_19825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto__);

return statearr_19825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto__))
);

return c__19045__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args19838 = [];
var len__17910__auto___19890 = arguments.length;
var i__17911__auto___19891 = (0);
while(true){
if((i__17911__auto___19891 < len__17910__auto___19890)){
args19838.push((arguments[i__17911__auto___19891]));

var G__19892 = (i__17911__auto___19891 + (1));
i__17911__auto___19891 = G__19892;
continue;
} else {
}
break;
}

var G__19840 = args19838.length;
switch (G__19840) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19838.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto__){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto__){
return (function (state_19865){
var state_val_19866 = (state_19865[(1)]);
if((state_val_19866 === (7))){
var inst_19847 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
var statearr_19867_19894 = state_19865__$1;
(statearr_19867_19894[(2)] = inst_19847);

(statearr_19867_19894[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (1))){
var inst_19841 = cljs.core.seq.call(null,coll);
var inst_19842 = inst_19841;
var state_19865__$1 = (function (){var statearr_19868 = state_19865;
(statearr_19868[(7)] = inst_19842);

return statearr_19868;
})();
var statearr_19869_19895 = state_19865__$1;
(statearr_19869_19895[(2)] = null);

(statearr_19869_19895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (4))){
var inst_19842 = (state_19865[(7)]);
var inst_19845 = cljs.core.first.call(null,inst_19842);
var state_19865__$1 = state_19865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19865__$1,(7),ch,inst_19845);
} else {
if((state_val_19866 === (13))){
var inst_19859 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
var statearr_19870_19896 = state_19865__$1;
(statearr_19870_19896[(2)] = inst_19859);

(statearr_19870_19896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (6))){
var inst_19850 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
if(cljs.core.truth_(inst_19850)){
var statearr_19871_19897 = state_19865__$1;
(statearr_19871_19897[(1)] = (8));

} else {
var statearr_19872_19898 = state_19865__$1;
(statearr_19872_19898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (3))){
var inst_19863 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19865__$1,inst_19863);
} else {
if((state_val_19866 === (12))){
var state_19865__$1 = state_19865;
var statearr_19873_19899 = state_19865__$1;
(statearr_19873_19899[(2)] = null);

(statearr_19873_19899[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (2))){
var inst_19842 = (state_19865[(7)]);
var state_19865__$1 = state_19865;
if(cljs.core.truth_(inst_19842)){
var statearr_19874_19900 = state_19865__$1;
(statearr_19874_19900[(1)] = (4));

} else {
var statearr_19875_19901 = state_19865__$1;
(statearr_19875_19901[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (11))){
var inst_19856 = cljs.core.async.close_BANG_.call(null,ch);
var state_19865__$1 = state_19865;
var statearr_19876_19902 = state_19865__$1;
(statearr_19876_19902[(2)] = inst_19856);

(statearr_19876_19902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (9))){
var state_19865__$1 = state_19865;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19877_19903 = state_19865__$1;
(statearr_19877_19903[(1)] = (11));

} else {
var statearr_19878_19904 = state_19865__$1;
(statearr_19878_19904[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (5))){
var inst_19842 = (state_19865[(7)]);
var state_19865__$1 = state_19865;
var statearr_19879_19905 = state_19865__$1;
(statearr_19879_19905[(2)] = inst_19842);

(statearr_19879_19905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (10))){
var inst_19861 = (state_19865[(2)]);
var state_19865__$1 = state_19865;
var statearr_19880_19906 = state_19865__$1;
(statearr_19880_19906[(2)] = inst_19861);

(statearr_19880_19906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19866 === (8))){
var inst_19842 = (state_19865[(7)]);
var inst_19852 = cljs.core.next.call(null,inst_19842);
var inst_19842__$1 = inst_19852;
var state_19865__$1 = (function (){var statearr_19881 = state_19865;
(statearr_19881[(7)] = inst_19842__$1);

return statearr_19881;
})();
var statearr_19882_19907 = state_19865__$1;
(statearr_19882_19907[(2)] = null);

(statearr_19882_19907[(1)] = (2));


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
});})(c__19045__auto__))
;
return ((function (switch__18865__auto__,c__19045__auto__){
return (function() {
var cljs$core$async$state_machine__18866__auto__ = null;
var cljs$core$async$state_machine__18866__auto____0 = (function (){
var statearr_19886 = [null,null,null,null,null,null,null,null];
(statearr_19886[(0)] = cljs$core$async$state_machine__18866__auto__);

(statearr_19886[(1)] = (1));

return statearr_19886;
});
var cljs$core$async$state_machine__18866__auto____1 = (function (state_19865){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_19865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e19887){if((e19887 instanceof Object)){
var ex__18869__auto__ = e19887;
var statearr_19888_19908 = state_19865;
(statearr_19888_19908[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19909 = state_19865;
state_19865 = G__19909;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$state_machine__18866__auto__ = function(state_19865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18866__auto____1.call(this,state_19865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18866__auto____0;
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18866__auto____1;
return cljs$core$async$state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto__))
})();
var state__19047__auto__ = (function (){var statearr_19889 = f__19046__auto__.call(null);
(statearr_19889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto__);

return statearr_19889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto__))
);

return c__19045__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17507__auto__ = (((_ == null))?null:_);
var m__17508__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,_);
} else {
var m__17508__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17508__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m);
} else {
var m__17508__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20131 = (function (mult,ch,cs,meta20132){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20132 = meta20132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20133,meta20132__$1){
var self__ = this;
var _20133__$1 = this;
return (new cljs.core.async.t_cljs$core$async20131(self__.mult,self__.ch,self__.cs,meta20132__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20133){
var self__ = this;
var _20133__$1 = this;
return self__.meta20132;
});})(cs))
;

cljs.core.async.t_cljs$core$async20131.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20131.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20131.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20131.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20131.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20131.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20131.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20132","meta20132",-477120155,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20131";

cljs.core.async.t_cljs$core$async20131.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async20131");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20131 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20131(mult__$1,ch__$1,cs__$1,meta20132){
return (new cljs.core.async.t_cljs$core$async20131(mult__$1,ch__$1,cs__$1,meta20132));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20131(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19045__auto___20352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___20352,cs,m,dchan,dctr,done){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___20352,cs,m,dchan,dctr,done){
return (function (state_20264){
var state_val_20265 = (state_20264[(1)]);
if((state_val_20265 === (7))){
var inst_20260 = (state_20264[(2)]);
var state_20264__$1 = state_20264;
var statearr_20266_20353 = state_20264__$1;
(statearr_20266_20353[(2)] = inst_20260);

(statearr_20266_20353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (20))){
var inst_20165 = (state_20264[(7)]);
var inst_20175 = cljs.core.first.call(null,inst_20165);
var inst_20176 = cljs.core.nth.call(null,inst_20175,(0),null);
var inst_20177 = cljs.core.nth.call(null,inst_20175,(1),null);
var state_20264__$1 = (function (){var statearr_20267 = state_20264;
(statearr_20267[(8)] = inst_20176);

return statearr_20267;
})();
if(cljs.core.truth_(inst_20177)){
var statearr_20268_20354 = state_20264__$1;
(statearr_20268_20354[(1)] = (22));

} else {
var statearr_20269_20355 = state_20264__$1;
(statearr_20269_20355[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (27))){
var inst_20207 = (state_20264[(9)]);
var inst_20212 = (state_20264[(10)]);
var inst_20205 = (state_20264[(11)]);
var inst_20136 = (state_20264[(12)]);
var inst_20212__$1 = cljs.core._nth.call(null,inst_20205,inst_20207);
var inst_20213 = cljs.core.async.put_BANG_.call(null,inst_20212__$1,inst_20136,done);
var state_20264__$1 = (function (){var statearr_20270 = state_20264;
(statearr_20270[(10)] = inst_20212__$1);

return statearr_20270;
})();
if(cljs.core.truth_(inst_20213)){
var statearr_20271_20356 = state_20264__$1;
(statearr_20271_20356[(1)] = (30));

} else {
var statearr_20272_20357 = state_20264__$1;
(statearr_20272_20357[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (1))){
var state_20264__$1 = state_20264;
var statearr_20273_20358 = state_20264__$1;
(statearr_20273_20358[(2)] = null);

(statearr_20273_20358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (24))){
var inst_20165 = (state_20264[(7)]);
var inst_20182 = (state_20264[(2)]);
var inst_20183 = cljs.core.next.call(null,inst_20165);
var inst_20145 = inst_20183;
var inst_20146 = null;
var inst_20147 = (0);
var inst_20148 = (0);
var state_20264__$1 = (function (){var statearr_20274 = state_20264;
(statearr_20274[(13)] = inst_20182);

(statearr_20274[(14)] = inst_20146);

(statearr_20274[(15)] = inst_20148);

(statearr_20274[(16)] = inst_20147);

(statearr_20274[(17)] = inst_20145);

return statearr_20274;
})();
var statearr_20275_20359 = state_20264__$1;
(statearr_20275_20359[(2)] = null);

(statearr_20275_20359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (39))){
var state_20264__$1 = state_20264;
var statearr_20279_20360 = state_20264__$1;
(statearr_20279_20360[(2)] = null);

(statearr_20279_20360[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (4))){
var inst_20136 = (state_20264[(12)]);
var inst_20136__$1 = (state_20264[(2)]);
var inst_20137 = (inst_20136__$1 == null);
var state_20264__$1 = (function (){var statearr_20280 = state_20264;
(statearr_20280[(12)] = inst_20136__$1);

return statearr_20280;
})();
if(cljs.core.truth_(inst_20137)){
var statearr_20281_20361 = state_20264__$1;
(statearr_20281_20361[(1)] = (5));

} else {
var statearr_20282_20362 = state_20264__$1;
(statearr_20282_20362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (15))){
var inst_20146 = (state_20264[(14)]);
var inst_20148 = (state_20264[(15)]);
var inst_20147 = (state_20264[(16)]);
var inst_20145 = (state_20264[(17)]);
var inst_20161 = (state_20264[(2)]);
var inst_20162 = (inst_20148 + (1));
var tmp20276 = inst_20146;
var tmp20277 = inst_20147;
var tmp20278 = inst_20145;
var inst_20145__$1 = tmp20278;
var inst_20146__$1 = tmp20276;
var inst_20147__$1 = tmp20277;
var inst_20148__$1 = inst_20162;
var state_20264__$1 = (function (){var statearr_20283 = state_20264;
(statearr_20283[(14)] = inst_20146__$1);

(statearr_20283[(15)] = inst_20148__$1);

(statearr_20283[(16)] = inst_20147__$1);

(statearr_20283[(18)] = inst_20161);

(statearr_20283[(17)] = inst_20145__$1);

return statearr_20283;
})();
var statearr_20284_20363 = state_20264__$1;
(statearr_20284_20363[(2)] = null);

(statearr_20284_20363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (21))){
var inst_20186 = (state_20264[(2)]);
var state_20264__$1 = state_20264;
var statearr_20288_20364 = state_20264__$1;
(statearr_20288_20364[(2)] = inst_20186);

(statearr_20288_20364[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (31))){
var inst_20212 = (state_20264[(10)]);
var inst_20216 = done.call(null,null);
var inst_20217 = cljs.core.async.untap_STAR_.call(null,m,inst_20212);
var state_20264__$1 = (function (){var statearr_20289 = state_20264;
(statearr_20289[(19)] = inst_20216);

return statearr_20289;
})();
var statearr_20290_20365 = state_20264__$1;
(statearr_20290_20365[(2)] = inst_20217);

(statearr_20290_20365[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (32))){
var inst_20207 = (state_20264[(9)]);
var inst_20206 = (state_20264[(20)]);
var inst_20204 = (state_20264[(21)]);
var inst_20205 = (state_20264[(11)]);
var inst_20219 = (state_20264[(2)]);
var inst_20220 = (inst_20207 + (1));
var tmp20285 = inst_20206;
var tmp20286 = inst_20204;
var tmp20287 = inst_20205;
var inst_20204__$1 = tmp20286;
var inst_20205__$1 = tmp20287;
var inst_20206__$1 = tmp20285;
var inst_20207__$1 = inst_20220;
var state_20264__$1 = (function (){var statearr_20291 = state_20264;
(statearr_20291[(9)] = inst_20207__$1);

(statearr_20291[(20)] = inst_20206__$1);

(statearr_20291[(21)] = inst_20204__$1);

(statearr_20291[(22)] = inst_20219);

(statearr_20291[(11)] = inst_20205__$1);

return statearr_20291;
})();
var statearr_20292_20366 = state_20264__$1;
(statearr_20292_20366[(2)] = null);

(statearr_20292_20366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (40))){
var inst_20232 = (state_20264[(23)]);
var inst_20236 = done.call(null,null);
var inst_20237 = cljs.core.async.untap_STAR_.call(null,m,inst_20232);
var state_20264__$1 = (function (){var statearr_20293 = state_20264;
(statearr_20293[(24)] = inst_20236);

return statearr_20293;
})();
var statearr_20294_20367 = state_20264__$1;
(statearr_20294_20367[(2)] = inst_20237);

(statearr_20294_20367[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (33))){
var inst_20223 = (state_20264[(25)]);
var inst_20225 = cljs.core.chunked_seq_QMARK_.call(null,inst_20223);
var state_20264__$1 = state_20264;
if(inst_20225){
var statearr_20295_20368 = state_20264__$1;
(statearr_20295_20368[(1)] = (36));

} else {
var statearr_20296_20369 = state_20264__$1;
(statearr_20296_20369[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (13))){
var inst_20155 = (state_20264[(26)]);
var inst_20158 = cljs.core.async.close_BANG_.call(null,inst_20155);
var state_20264__$1 = state_20264;
var statearr_20297_20370 = state_20264__$1;
(statearr_20297_20370[(2)] = inst_20158);

(statearr_20297_20370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (22))){
var inst_20176 = (state_20264[(8)]);
var inst_20179 = cljs.core.async.close_BANG_.call(null,inst_20176);
var state_20264__$1 = state_20264;
var statearr_20298_20371 = state_20264__$1;
(statearr_20298_20371[(2)] = inst_20179);

(statearr_20298_20371[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (36))){
var inst_20223 = (state_20264[(25)]);
var inst_20227 = cljs.core.chunk_first.call(null,inst_20223);
var inst_20228 = cljs.core.chunk_rest.call(null,inst_20223);
var inst_20229 = cljs.core.count.call(null,inst_20227);
var inst_20204 = inst_20228;
var inst_20205 = inst_20227;
var inst_20206 = inst_20229;
var inst_20207 = (0);
var state_20264__$1 = (function (){var statearr_20299 = state_20264;
(statearr_20299[(9)] = inst_20207);

(statearr_20299[(20)] = inst_20206);

(statearr_20299[(21)] = inst_20204);

(statearr_20299[(11)] = inst_20205);

return statearr_20299;
})();
var statearr_20300_20372 = state_20264__$1;
(statearr_20300_20372[(2)] = null);

(statearr_20300_20372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (41))){
var inst_20223 = (state_20264[(25)]);
var inst_20239 = (state_20264[(2)]);
var inst_20240 = cljs.core.next.call(null,inst_20223);
var inst_20204 = inst_20240;
var inst_20205 = null;
var inst_20206 = (0);
var inst_20207 = (0);
var state_20264__$1 = (function (){var statearr_20301 = state_20264;
(statearr_20301[(9)] = inst_20207);

(statearr_20301[(20)] = inst_20206);

(statearr_20301[(21)] = inst_20204);

(statearr_20301[(27)] = inst_20239);

(statearr_20301[(11)] = inst_20205);

return statearr_20301;
})();
var statearr_20302_20373 = state_20264__$1;
(statearr_20302_20373[(2)] = null);

(statearr_20302_20373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (43))){
var state_20264__$1 = state_20264;
var statearr_20303_20374 = state_20264__$1;
(statearr_20303_20374[(2)] = null);

(statearr_20303_20374[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (29))){
var inst_20248 = (state_20264[(2)]);
var state_20264__$1 = state_20264;
var statearr_20304_20375 = state_20264__$1;
(statearr_20304_20375[(2)] = inst_20248);

(statearr_20304_20375[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (44))){
var inst_20257 = (state_20264[(2)]);
var state_20264__$1 = (function (){var statearr_20305 = state_20264;
(statearr_20305[(28)] = inst_20257);

return statearr_20305;
})();
var statearr_20306_20376 = state_20264__$1;
(statearr_20306_20376[(2)] = null);

(statearr_20306_20376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (6))){
var inst_20196 = (state_20264[(29)]);
var inst_20195 = cljs.core.deref.call(null,cs);
var inst_20196__$1 = cljs.core.keys.call(null,inst_20195);
var inst_20197 = cljs.core.count.call(null,inst_20196__$1);
var inst_20198 = cljs.core.reset_BANG_.call(null,dctr,inst_20197);
var inst_20203 = cljs.core.seq.call(null,inst_20196__$1);
var inst_20204 = inst_20203;
var inst_20205 = null;
var inst_20206 = (0);
var inst_20207 = (0);
var state_20264__$1 = (function (){var statearr_20307 = state_20264;
(statearr_20307[(30)] = inst_20198);

(statearr_20307[(9)] = inst_20207);

(statearr_20307[(20)] = inst_20206);

(statearr_20307[(29)] = inst_20196__$1);

(statearr_20307[(21)] = inst_20204);

(statearr_20307[(11)] = inst_20205);

return statearr_20307;
})();
var statearr_20308_20377 = state_20264__$1;
(statearr_20308_20377[(2)] = null);

(statearr_20308_20377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (28))){
var inst_20204 = (state_20264[(21)]);
var inst_20223 = (state_20264[(25)]);
var inst_20223__$1 = cljs.core.seq.call(null,inst_20204);
var state_20264__$1 = (function (){var statearr_20309 = state_20264;
(statearr_20309[(25)] = inst_20223__$1);

return statearr_20309;
})();
if(inst_20223__$1){
var statearr_20310_20378 = state_20264__$1;
(statearr_20310_20378[(1)] = (33));

} else {
var statearr_20311_20379 = state_20264__$1;
(statearr_20311_20379[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (25))){
var inst_20207 = (state_20264[(9)]);
var inst_20206 = (state_20264[(20)]);
var inst_20209 = (inst_20207 < inst_20206);
var inst_20210 = inst_20209;
var state_20264__$1 = state_20264;
if(cljs.core.truth_(inst_20210)){
var statearr_20312_20380 = state_20264__$1;
(statearr_20312_20380[(1)] = (27));

} else {
var statearr_20313_20381 = state_20264__$1;
(statearr_20313_20381[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (34))){
var state_20264__$1 = state_20264;
var statearr_20314_20382 = state_20264__$1;
(statearr_20314_20382[(2)] = null);

(statearr_20314_20382[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (17))){
var state_20264__$1 = state_20264;
var statearr_20315_20383 = state_20264__$1;
(statearr_20315_20383[(2)] = null);

(statearr_20315_20383[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (3))){
var inst_20262 = (state_20264[(2)]);
var state_20264__$1 = state_20264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20264__$1,inst_20262);
} else {
if((state_val_20265 === (12))){
var inst_20191 = (state_20264[(2)]);
var state_20264__$1 = state_20264;
var statearr_20316_20384 = state_20264__$1;
(statearr_20316_20384[(2)] = inst_20191);

(statearr_20316_20384[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (2))){
var state_20264__$1 = state_20264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20264__$1,(4),ch);
} else {
if((state_val_20265 === (23))){
var state_20264__$1 = state_20264;
var statearr_20317_20385 = state_20264__$1;
(statearr_20317_20385[(2)] = null);

(statearr_20317_20385[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (35))){
var inst_20246 = (state_20264[(2)]);
var state_20264__$1 = state_20264;
var statearr_20318_20386 = state_20264__$1;
(statearr_20318_20386[(2)] = inst_20246);

(statearr_20318_20386[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (19))){
var inst_20165 = (state_20264[(7)]);
var inst_20169 = cljs.core.chunk_first.call(null,inst_20165);
var inst_20170 = cljs.core.chunk_rest.call(null,inst_20165);
var inst_20171 = cljs.core.count.call(null,inst_20169);
var inst_20145 = inst_20170;
var inst_20146 = inst_20169;
var inst_20147 = inst_20171;
var inst_20148 = (0);
var state_20264__$1 = (function (){var statearr_20319 = state_20264;
(statearr_20319[(14)] = inst_20146);

(statearr_20319[(15)] = inst_20148);

(statearr_20319[(16)] = inst_20147);

(statearr_20319[(17)] = inst_20145);

return statearr_20319;
})();
var statearr_20320_20387 = state_20264__$1;
(statearr_20320_20387[(2)] = null);

(statearr_20320_20387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (11))){
var inst_20145 = (state_20264[(17)]);
var inst_20165 = (state_20264[(7)]);
var inst_20165__$1 = cljs.core.seq.call(null,inst_20145);
var state_20264__$1 = (function (){var statearr_20321 = state_20264;
(statearr_20321[(7)] = inst_20165__$1);

return statearr_20321;
})();
if(inst_20165__$1){
var statearr_20322_20388 = state_20264__$1;
(statearr_20322_20388[(1)] = (16));

} else {
var statearr_20323_20389 = state_20264__$1;
(statearr_20323_20389[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (9))){
var inst_20193 = (state_20264[(2)]);
var state_20264__$1 = state_20264;
var statearr_20324_20390 = state_20264__$1;
(statearr_20324_20390[(2)] = inst_20193);

(statearr_20324_20390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (5))){
var inst_20143 = cljs.core.deref.call(null,cs);
var inst_20144 = cljs.core.seq.call(null,inst_20143);
var inst_20145 = inst_20144;
var inst_20146 = null;
var inst_20147 = (0);
var inst_20148 = (0);
var state_20264__$1 = (function (){var statearr_20325 = state_20264;
(statearr_20325[(14)] = inst_20146);

(statearr_20325[(15)] = inst_20148);

(statearr_20325[(16)] = inst_20147);

(statearr_20325[(17)] = inst_20145);

return statearr_20325;
})();
var statearr_20326_20391 = state_20264__$1;
(statearr_20326_20391[(2)] = null);

(statearr_20326_20391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (14))){
var state_20264__$1 = state_20264;
var statearr_20327_20392 = state_20264__$1;
(statearr_20327_20392[(2)] = null);

(statearr_20327_20392[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (45))){
var inst_20254 = (state_20264[(2)]);
var state_20264__$1 = state_20264;
var statearr_20328_20393 = state_20264__$1;
(statearr_20328_20393[(2)] = inst_20254);

(statearr_20328_20393[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (26))){
var inst_20196 = (state_20264[(29)]);
var inst_20250 = (state_20264[(2)]);
var inst_20251 = cljs.core.seq.call(null,inst_20196);
var state_20264__$1 = (function (){var statearr_20329 = state_20264;
(statearr_20329[(31)] = inst_20250);

return statearr_20329;
})();
if(inst_20251){
var statearr_20330_20394 = state_20264__$1;
(statearr_20330_20394[(1)] = (42));

} else {
var statearr_20331_20395 = state_20264__$1;
(statearr_20331_20395[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (16))){
var inst_20165 = (state_20264[(7)]);
var inst_20167 = cljs.core.chunked_seq_QMARK_.call(null,inst_20165);
var state_20264__$1 = state_20264;
if(inst_20167){
var statearr_20332_20396 = state_20264__$1;
(statearr_20332_20396[(1)] = (19));

} else {
var statearr_20333_20397 = state_20264__$1;
(statearr_20333_20397[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (38))){
var inst_20243 = (state_20264[(2)]);
var state_20264__$1 = state_20264;
var statearr_20334_20398 = state_20264__$1;
(statearr_20334_20398[(2)] = inst_20243);

(statearr_20334_20398[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (30))){
var state_20264__$1 = state_20264;
var statearr_20335_20399 = state_20264__$1;
(statearr_20335_20399[(2)] = null);

(statearr_20335_20399[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (10))){
var inst_20146 = (state_20264[(14)]);
var inst_20148 = (state_20264[(15)]);
var inst_20154 = cljs.core._nth.call(null,inst_20146,inst_20148);
var inst_20155 = cljs.core.nth.call(null,inst_20154,(0),null);
var inst_20156 = cljs.core.nth.call(null,inst_20154,(1),null);
var state_20264__$1 = (function (){var statearr_20336 = state_20264;
(statearr_20336[(26)] = inst_20155);

return statearr_20336;
})();
if(cljs.core.truth_(inst_20156)){
var statearr_20337_20400 = state_20264__$1;
(statearr_20337_20400[(1)] = (13));

} else {
var statearr_20338_20401 = state_20264__$1;
(statearr_20338_20401[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (18))){
var inst_20189 = (state_20264[(2)]);
var state_20264__$1 = state_20264;
var statearr_20339_20402 = state_20264__$1;
(statearr_20339_20402[(2)] = inst_20189);

(statearr_20339_20402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (42))){
var state_20264__$1 = state_20264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20264__$1,(45),dchan);
} else {
if((state_val_20265 === (37))){
var inst_20232 = (state_20264[(23)]);
var inst_20136 = (state_20264[(12)]);
var inst_20223 = (state_20264[(25)]);
var inst_20232__$1 = cljs.core.first.call(null,inst_20223);
var inst_20233 = cljs.core.async.put_BANG_.call(null,inst_20232__$1,inst_20136,done);
var state_20264__$1 = (function (){var statearr_20340 = state_20264;
(statearr_20340[(23)] = inst_20232__$1);

return statearr_20340;
})();
if(cljs.core.truth_(inst_20233)){
var statearr_20341_20403 = state_20264__$1;
(statearr_20341_20403[(1)] = (39));

} else {
var statearr_20342_20404 = state_20264__$1;
(statearr_20342_20404[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20265 === (8))){
var inst_20148 = (state_20264[(15)]);
var inst_20147 = (state_20264[(16)]);
var inst_20150 = (inst_20148 < inst_20147);
var inst_20151 = inst_20150;
var state_20264__$1 = state_20264;
if(cljs.core.truth_(inst_20151)){
var statearr_20343_20405 = state_20264__$1;
(statearr_20343_20405[(1)] = (10));

} else {
var statearr_20344_20406 = state_20264__$1;
(statearr_20344_20406[(1)] = (11));

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
});})(c__19045__auto___20352,cs,m,dchan,dctr,done))
;
return ((function (switch__18865__auto__,c__19045__auto___20352,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18866__auto__ = null;
var cljs$core$async$mult_$_state_machine__18866__auto____0 = (function (){
var statearr_20348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20348[(0)] = cljs$core$async$mult_$_state_machine__18866__auto__);

(statearr_20348[(1)] = (1));

return statearr_20348;
});
var cljs$core$async$mult_$_state_machine__18866__auto____1 = (function (state_20264){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_20264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e20349){if((e20349 instanceof Object)){
var ex__18869__auto__ = e20349;
var statearr_20350_20407 = state_20264;
(statearr_20350_20407[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20408 = state_20264;
state_20264 = G__20408;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18866__auto__ = function(state_20264){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18866__auto____1.call(this,state_20264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18866__auto____0;
cljs$core$async$mult_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18866__auto____1;
return cljs$core$async$mult_$_state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___20352,cs,m,dchan,dctr,done))
})();
var state__19047__auto__ = (function (){var statearr_20351 = f__19046__auto__.call(null);
(statearr_20351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___20352);

return statearr_20351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___20352,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20409 = [];
var len__17910__auto___20412 = arguments.length;
var i__17911__auto___20413 = (0);
while(true){
if((i__17911__auto___20413 < len__17910__auto___20412)){
args20409.push((arguments[i__17911__auto___20413]));

var G__20414 = (i__17911__auto___20413 + (1));
i__17911__auto___20413 = G__20414;
continue;
} else {
}
break;
}

var G__20411 = args20409.length;
switch (G__20411) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20409.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m);
} else {
var m__17508__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,state_map);
} else {
var m__17508__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17507__auto__ = (((m == null))?null:m);
var m__17508__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,m,mode);
} else {
var m__17508__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17917__auto__ = [];
var len__17910__auto___20426 = arguments.length;
var i__17911__auto___20427 = (0);
while(true){
if((i__17911__auto___20427 < len__17910__auto___20426)){
args__17917__auto__.push((arguments[i__17911__auto___20427]));

var G__20428 = (i__17911__auto___20427 + (1));
i__17911__auto___20427 = G__20428;
continue;
} else {
}
break;
}

var argseq__17918__auto__ = ((((3) < args__17917__auto__.length))?(new cljs.core.IndexedSeq(args__17917__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17918__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20420){
var map__20421 = p__20420;
var map__20421__$1 = ((((!((map__20421 == null)))?((((map__20421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20421):map__20421);
var opts = map__20421__$1;
var statearr_20423_20429 = state;
(statearr_20423_20429[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20421,map__20421__$1,opts){
return (function (val){
var statearr_20424_20430 = state;
(statearr_20424_20430[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20421,map__20421__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20425_20431 = state;
(statearr_20425_20431[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20416){
var G__20417 = cljs.core.first.call(null,seq20416);
var seq20416__$1 = cljs.core.next.call(null,seq20416);
var G__20418 = cljs.core.first.call(null,seq20416__$1);
var seq20416__$2 = cljs.core.next.call(null,seq20416__$1);
var G__20419 = cljs.core.first.call(null,seq20416__$2);
var seq20416__$3 = cljs.core.next.call(null,seq20416__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20417,G__20418,G__20419,seq20416__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20595 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20596){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20596 = meta20596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20597,meta20596__$1){
var self__ = this;
var _20597__$1 = this;
return (new cljs.core.async.t_cljs$core$async20595(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20596__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20597){
var self__ = this;
var _20597__$1 = this;
return self__.meta20596;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20596","meta20596",1447824104,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20595";

cljs.core.async.t_cljs$core$async20595.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async20595");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20595 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20595(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20596){
return (new cljs.core.async.t_cljs$core$async20595(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20596));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20595(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19045__auto___20758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___20758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___20758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20695){
var state_val_20696 = (state_20695[(1)]);
if((state_val_20696 === (7))){
var inst_20613 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
var statearr_20697_20759 = state_20695__$1;
(statearr_20697_20759[(2)] = inst_20613);

(statearr_20697_20759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (20))){
var inst_20625 = (state_20695[(7)]);
var state_20695__$1 = state_20695;
var statearr_20698_20760 = state_20695__$1;
(statearr_20698_20760[(2)] = inst_20625);

(statearr_20698_20760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (27))){
var state_20695__$1 = state_20695;
var statearr_20699_20761 = state_20695__$1;
(statearr_20699_20761[(2)] = null);

(statearr_20699_20761[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (1))){
var inst_20601 = (state_20695[(8)]);
var inst_20601__$1 = calc_state.call(null);
var inst_20603 = (inst_20601__$1 == null);
var inst_20604 = cljs.core.not.call(null,inst_20603);
var state_20695__$1 = (function (){var statearr_20700 = state_20695;
(statearr_20700[(8)] = inst_20601__$1);

return statearr_20700;
})();
if(inst_20604){
var statearr_20701_20762 = state_20695__$1;
(statearr_20701_20762[(1)] = (2));

} else {
var statearr_20702_20763 = state_20695__$1;
(statearr_20702_20763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (24))){
var inst_20648 = (state_20695[(9)]);
var inst_20669 = (state_20695[(10)]);
var inst_20655 = (state_20695[(11)]);
var inst_20669__$1 = inst_20648.call(null,inst_20655);
var state_20695__$1 = (function (){var statearr_20703 = state_20695;
(statearr_20703[(10)] = inst_20669__$1);

return statearr_20703;
})();
if(cljs.core.truth_(inst_20669__$1)){
var statearr_20704_20764 = state_20695__$1;
(statearr_20704_20764[(1)] = (29));

} else {
var statearr_20705_20765 = state_20695__$1;
(statearr_20705_20765[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (4))){
var inst_20616 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
if(cljs.core.truth_(inst_20616)){
var statearr_20706_20766 = state_20695__$1;
(statearr_20706_20766[(1)] = (8));

} else {
var statearr_20707_20767 = state_20695__$1;
(statearr_20707_20767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (15))){
var inst_20642 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
if(cljs.core.truth_(inst_20642)){
var statearr_20708_20768 = state_20695__$1;
(statearr_20708_20768[(1)] = (19));

} else {
var statearr_20709_20769 = state_20695__$1;
(statearr_20709_20769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (21))){
var inst_20647 = (state_20695[(12)]);
var inst_20647__$1 = (state_20695[(2)]);
var inst_20648 = cljs.core.get.call(null,inst_20647__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20649 = cljs.core.get.call(null,inst_20647__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20650 = cljs.core.get.call(null,inst_20647__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20695__$1 = (function (){var statearr_20710 = state_20695;
(statearr_20710[(9)] = inst_20648);

(statearr_20710[(12)] = inst_20647__$1);

(statearr_20710[(13)] = inst_20649);

return statearr_20710;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20695__$1,(22),inst_20650);
} else {
if((state_val_20696 === (31))){
var inst_20677 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
if(cljs.core.truth_(inst_20677)){
var statearr_20711_20770 = state_20695__$1;
(statearr_20711_20770[(1)] = (32));

} else {
var statearr_20712_20771 = state_20695__$1;
(statearr_20712_20771[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (32))){
var inst_20654 = (state_20695[(14)]);
var state_20695__$1 = state_20695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20695__$1,(35),out,inst_20654);
} else {
if((state_val_20696 === (33))){
var inst_20647 = (state_20695[(12)]);
var inst_20625 = inst_20647;
var state_20695__$1 = (function (){var statearr_20713 = state_20695;
(statearr_20713[(7)] = inst_20625);

return statearr_20713;
})();
var statearr_20714_20772 = state_20695__$1;
(statearr_20714_20772[(2)] = null);

(statearr_20714_20772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (13))){
var inst_20625 = (state_20695[(7)]);
var inst_20632 = inst_20625.cljs$lang$protocol_mask$partition0$;
var inst_20633 = (inst_20632 & (64));
var inst_20634 = inst_20625.cljs$core$ISeq$;
var inst_20635 = (inst_20633) || (inst_20634);
var state_20695__$1 = state_20695;
if(cljs.core.truth_(inst_20635)){
var statearr_20715_20773 = state_20695__$1;
(statearr_20715_20773[(1)] = (16));

} else {
var statearr_20716_20774 = state_20695__$1;
(statearr_20716_20774[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (22))){
var inst_20654 = (state_20695[(14)]);
var inst_20655 = (state_20695[(11)]);
var inst_20653 = (state_20695[(2)]);
var inst_20654__$1 = cljs.core.nth.call(null,inst_20653,(0),null);
var inst_20655__$1 = cljs.core.nth.call(null,inst_20653,(1),null);
var inst_20656 = (inst_20654__$1 == null);
var inst_20657 = cljs.core._EQ_.call(null,inst_20655__$1,change);
var inst_20658 = (inst_20656) || (inst_20657);
var state_20695__$1 = (function (){var statearr_20717 = state_20695;
(statearr_20717[(14)] = inst_20654__$1);

(statearr_20717[(11)] = inst_20655__$1);

return statearr_20717;
})();
if(cljs.core.truth_(inst_20658)){
var statearr_20718_20775 = state_20695__$1;
(statearr_20718_20775[(1)] = (23));

} else {
var statearr_20719_20776 = state_20695__$1;
(statearr_20719_20776[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (36))){
var inst_20647 = (state_20695[(12)]);
var inst_20625 = inst_20647;
var state_20695__$1 = (function (){var statearr_20720 = state_20695;
(statearr_20720[(7)] = inst_20625);

return statearr_20720;
})();
var statearr_20721_20777 = state_20695__$1;
(statearr_20721_20777[(2)] = null);

(statearr_20721_20777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (29))){
var inst_20669 = (state_20695[(10)]);
var state_20695__$1 = state_20695;
var statearr_20722_20778 = state_20695__$1;
(statearr_20722_20778[(2)] = inst_20669);

(statearr_20722_20778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (6))){
var state_20695__$1 = state_20695;
var statearr_20723_20779 = state_20695__$1;
(statearr_20723_20779[(2)] = false);

(statearr_20723_20779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (28))){
var inst_20665 = (state_20695[(2)]);
var inst_20666 = calc_state.call(null);
var inst_20625 = inst_20666;
var state_20695__$1 = (function (){var statearr_20724 = state_20695;
(statearr_20724[(15)] = inst_20665);

(statearr_20724[(7)] = inst_20625);

return statearr_20724;
})();
var statearr_20725_20780 = state_20695__$1;
(statearr_20725_20780[(2)] = null);

(statearr_20725_20780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (25))){
var inst_20691 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
var statearr_20726_20781 = state_20695__$1;
(statearr_20726_20781[(2)] = inst_20691);

(statearr_20726_20781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (34))){
var inst_20689 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
var statearr_20727_20782 = state_20695__$1;
(statearr_20727_20782[(2)] = inst_20689);

(statearr_20727_20782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (17))){
var state_20695__$1 = state_20695;
var statearr_20728_20783 = state_20695__$1;
(statearr_20728_20783[(2)] = false);

(statearr_20728_20783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (3))){
var state_20695__$1 = state_20695;
var statearr_20729_20784 = state_20695__$1;
(statearr_20729_20784[(2)] = false);

(statearr_20729_20784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (12))){
var inst_20693 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20695__$1,inst_20693);
} else {
if((state_val_20696 === (2))){
var inst_20601 = (state_20695[(8)]);
var inst_20606 = inst_20601.cljs$lang$protocol_mask$partition0$;
var inst_20607 = (inst_20606 & (64));
var inst_20608 = inst_20601.cljs$core$ISeq$;
var inst_20609 = (inst_20607) || (inst_20608);
var state_20695__$1 = state_20695;
if(cljs.core.truth_(inst_20609)){
var statearr_20730_20785 = state_20695__$1;
(statearr_20730_20785[(1)] = (5));

} else {
var statearr_20731_20786 = state_20695__$1;
(statearr_20731_20786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (23))){
var inst_20654 = (state_20695[(14)]);
var inst_20660 = (inst_20654 == null);
var state_20695__$1 = state_20695;
if(cljs.core.truth_(inst_20660)){
var statearr_20732_20787 = state_20695__$1;
(statearr_20732_20787[(1)] = (26));

} else {
var statearr_20733_20788 = state_20695__$1;
(statearr_20733_20788[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (35))){
var inst_20680 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
if(cljs.core.truth_(inst_20680)){
var statearr_20734_20789 = state_20695__$1;
(statearr_20734_20789[(1)] = (36));

} else {
var statearr_20735_20790 = state_20695__$1;
(statearr_20735_20790[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (19))){
var inst_20625 = (state_20695[(7)]);
var inst_20644 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20625);
var state_20695__$1 = state_20695;
var statearr_20736_20791 = state_20695__$1;
(statearr_20736_20791[(2)] = inst_20644);

(statearr_20736_20791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (11))){
var inst_20625 = (state_20695[(7)]);
var inst_20629 = (inst_20625 == null);
var inst_20630 = cljs.core.not.call(null,inst_20629);
var state_20695__$1 = state_20695;
if(inst_20630){
var statearr_20737_20792 = state_20695__$1;
(statearr_20737_20792[(1)] = (13));

} else {
var statearr_20738_20793 = state_20695__$1;
(statearr_20738_20793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (9))){
var inst_20601 = (state_20695[(8)]);
var state_20695__$1 = state_20695;
var statearr_20739_20794 = state_20695__$1;
(statearr_20739_20794[(2)] = inst_20601);

(statearr_20739_20794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (5))){
var state_20695__$1 = state_20695;
var statearr_20740_20795 = state_20695__$1;
(statearr_20740_20795[(2)] = true);

(statearr_20740_20795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (14))){
var state_20695__$1 = state_20695;
var statearr_20741_20796 = state_20695__$1;
(statearr_20741_20796[(2)] = false);

(statearr_20741_20796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (26))){
var inst_20655 = (state_20695[(11)]);
var inst_20662 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20655);
var state_20695__$1 = state_20695;
var statearr_20742_20797 = state_20695__$1;
(statearr_20742_20797[(2)] = inst_20662);

(statearr_20742_20797[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (16))){
var state_20695__$1 = state_20695;
var statearr_20743_20798 = state_20695__$1;
(statearr_20743_20798[(2)] = true);

(statearr_20743_20798[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (38))){
var inst_20685 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
var statearr_20744_20799 = state_20695__$1;
(statearr_20744_20799[(2)] = inst_20685);

(statearr_20744_20799[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (30))){
var inst_20648 = (state_20695[(9)]);
var inst_20655 = (state_20695[(11)]);
var inst_20649 = (state_20695[(13)]);
var inst_20672 = cljs.core.empty_QMARK_.call(null,inst_20648);
var inst_20673 = inst_20649.call(null,inst_20655);
var inst_20674 = cljs.core.not.call(null,inst_20673);
var inst_20675 = (inst_20672) && (inst_20674);
var state_20695__$1 = state_20695;
var statearr_20745_20800 = state_20695__$1;
(statearr_20745_20800[(2)] = inst_20675);

(statearr_20745_20800[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (10))){
var inst_20601 = (state_20695[(8)]);
var inst_20621 = (state_20695[(2)]);
var inst_20622 = cljs.core.get.call(null,inst_20621,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20623 = cljs.core.get.call(null,inst_20621,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20624 = cljs.core.get.call(null,inst_20621,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20625 = inst_20601;
var state_20695__$1 = (function (){var statearr_20746 = state_20695;
(statearr_20746[(7)] = inst_20625);

(statearr_20746[(16)] = inst_20623);

(statearr_20746[(17)] = inst_20622);

(statearr_20746[(18)] = inst_20624);

return statearr_20746;
})();
var statearr_20747_20801 = state_20695__$1;
(statearr_20747_20801[(2)] = null);

(statearr_20747_20801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (18))){
var inst_20639 = (state_20695[(2)]);
var state_20695__$1 = state_20695;
var statearr_20748_20802 = state_20695__$1;
(statearr_20748_20802[(2)] = inst_20639);

(statearr_20748_20802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (37))){
var state_20695__$1 = state_20695;
var statearr_20749_20803 = state_20695__$1;
(statearr_20749_20803[(2)] = null);

(statearr_20749_20803[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20696 === (8))){
var inst_20601 = (state_20695[(8)]);
var inst_20618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20601);
var state_20695__$1 = state_20695;
var statearr_20750_20804 = state_20695__$1;
(statearr_20750_20804[(2)] = inst_20618);

(statearr_20750_20804[(1)] = (10));


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
});})(c__19045__auto___20758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18865__auto__,c__19045__auto___20758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18866__auto__ = null;
var cljs$core$async$mix_$_state_machine__18866__auto____0 = (function (){
var statearr_20754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20754[(0)] = cljs$core$async$mix_$_state_machine__18866__auto__);

(statearr_20754[(1)] = (1));

return statearr_20754;
});
var cljs$core$async$mix_$_state_machine__18866__auto____1 = (function (state_20695){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_20695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e20755){if((e20755 instanceof Object)){
var ex__18869__auto__ = e20755;
var statearr_20756_20805 = state_20695;
(statearr_20756_20805[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20806 = state_20695;
state_20695 = G__20806;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18866__auto__ = function(state_20695){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18866__auto____1.call(this,state_20695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18866__auto____0;
cljs$core$async$mix_$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18866__auto____1;
return cljs$core$async$mix_$_state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___20758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19047__auto__ = (function (){var statearr_20757 = f__19046__auto__.call(null);
(statearr_20757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___20758);

return statearr_20757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___20758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17508__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p,v,ch);
} else {
var m__17508__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20807 = [];
var len__17910__auto___20810 = arguments.length;
var i__17911__auto___20811 = (0);
while(true){
if((i__17911__auto___20811 < len__17910__auto___20810)){
args20807.push((arguments[i__17911__auto___20811]));

var G__20812 = (i__17911__auto___20811 + (1));
i__17911__auto___20811 = G__20812;
continue;
} else {
}
break;
}

var G__20809 = args20807.length;
switch (G__20809) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20807.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p);
} else {
var m__17508__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17507__auto__ = (((p == null))?null:p);
var m__17508__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17507__auto__)]);
if(!((m__17508__auto__ == null))){
return m__17508__auto__.call(null,p,v);
} else {
var m__17508__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17508__auto____$1 == null))){
return m__17508__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20815 = [];
var len__17910__auto___20940 = arguments.length;
var i__17911__auto___20941 = (0);
while(true){
if((i__17911__auto___20941 < len__17910__auto___20940)){
args20815.push((arguments[i__17911__auto___20941]));

var G__20942 = (i__17911__auto___20941 + (1));
i__17911__auto___20941 = G__20942;
continue;
} else {
}
break;
}

var G__20817 = args20815.length;
switch (G__20817) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20815.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16852__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16852__auto__)){
return or__16852__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16852__auto__,mults){
return (function (p1__20814_SHARP_){
if(cljs.core.truth_(p1__20814_SHARP_.call(null,topic))){
return p1__20814_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20814_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16852__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20818 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20818 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20819){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20819 = meta20819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20820,meta20819__$1){
var self__ = this;
var _20820__$1 = this;
return (new cljs.core.async.t_cljs$core$async20818(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20819__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20820){
var self__ = this;
var _20820__$1 = this;
return self__.meta20819;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20818.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20818.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20818.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20818.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20818.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20818.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20818.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20819","meta20819",-1365341539,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20818.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20818";

cljs.core.async.t_cljs$core$async20818.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async20818");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20818 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20818(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20819){
return (new cljs.core.async.t_cljs$core$async20818(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20819));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20818(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19045__auto___20944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___20944,mults,ensure_mult,p){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___20944,mults,ensure_mult,p){
return (function (state_20892){
var state_val_20893 = (state_20892[(1)]);
if((state_val_20893 === (7))){
var inst_20888 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20894_20945 = state_20892__$1;
(statearr_20894_20945[(2)] = inst_20888);

(statearr_20894_20945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (20))){
var state_20892__$1 = state_20892;
var statearr_20895_20946 = state_20892__$1;
(statearr_20895_20946[(2)] = null);

(statearr_20895_20946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (1))){
var state_20892__$1 = state_20892;
var statearr_20896_20947 = state_20892__$1;
(statearr_20896_20947[(2)] = null);

(statearr_20896_20947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (24))){
var inst_20871 = (state_20892[(7)]);
var inst_20880 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20871);
var state_20892__$1 = state_20892;
var statearr_20897_20948 = state_20892__$1;
(statearr_20897_20948[(2)] = inst_20880);

(statearr_20897_20948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (4))){
var inst_20823 = (state_20892[(8)]);
var inst_20823__$1 = (state_20892[(2)]);
var inst_20824 = (inst_20823__$1 == null);
var state_20892__$1 = (function (){var statearr_20898 = state_20892;
(statearr_20898[(8)] = inst_20823__$1);

return statearr_20898;
})();
if(cljs.core.truth_(inst_20824)){
var statearr_20899_20949 = state_20892__$1;
(statearr_20899_20949[(1)] = (5));

} else {
var statearr_20900_20950 = state_20892__$1;
(statearr_20900_20950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (15))){
var inst_20865 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20901_20951 = state_20892__$1;
(statearr_20901_20951[(2)] = inst_20865);

(statearr_20901_20951[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (21))){
var inst_20885 = (state_20892[(2)]);
var state_20892__$1 = (function (){var statearr_20902 = state_20892;
(statearr_20902[(9)] = inst_20885);

return statearr_20902;
})();
var statearr_20903_20952 = state_20892__$1;
(statearr_20903_20952[(2)] = null);

(statearr_20903_20952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (13))){
var inst_20847 = (state_20892[(10)]);
var inst_20849 = cljs.core.chunked_seq_QMARK_.call(null,inst_20847);
var state_20892__$1 = state_20892;
if(inst_20849){
var statearr_20904_20953 = state_20892__$1;
(statearr_20904_20953[(1)] = (16));

} else {
var statearr_20905_20954 = state_20892__$1;
(statearr_20905_20954[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (22))){
var inst_20877 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
if(cljs.core.truth_(inst_20877)){
var statearr_20906_20955 = state_20892__$1;
(statearr_20906_20955[(1)] = (23));

} else {
var statearr_20907_20956 = state_20892__$1;
(statearr_20907_20956[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (6))){
var inst_20823 = (state_20892[(8)]);
var inst_20871 = (state_20892[(7)]);
var inst_20873 = (state_20892[(11)]);
var inst_20871__$1 = topic_fn.call(null,inst_20823);
var inst_20872 = cljs.core.deref.call(null,mults);
var inst_20873__$1 = cljs.core.get.call(null,inst_20872,inst_20871__$1);
var state_20892__$1 = (function (){var statearr_20908 = state_20892;
(statearr_20908[(7)] = inst_20871__$1);

(statearr_20908[(11)] = inst_20873__$1);

return statearr_20908;
})();
if(cljs.core.truth_(inst_20873__$1)){
var statearr_20909_20957 = state_20892__$1;
(statearr_20909_20957[(1)] = (19));

} else {
var statearr_20910_20958 = state_20892__$1;
(statearr_20910_20958[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (25))){
var inst_20882 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20911_20959 = state_20892__$1;
(statearr_20911_20959[(2)] = inst_20882);

(statearr_20911_20959[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (17))){
var inst_20847 = (state_20892[(10)]);
var inst_20856 = cljs.core.first.call(null,inst_20847);
var inst_20857 = cljs.core.async.muxch_STAR_.call(null,inst_20856);
var inst_20858 = cljs.core.async.close_BANG_.call(null,inst_20857);
var inst_20859 = cljs.core.next.call(null,inst_20847);
var inst_20833 = inst_20859;
var inst_20834 = null;
var inst_20835 = (0);
var inst_20836 = (0);
var state_20892__$1 = (function (){var statearr_20912 = state_20892;
(statearr_20912[(12)] = inst_20858);

(statearr_20912[(13)] = inst_20833);

(statearr_20912[(14)] = inst_20836);

(statearr_20912[(15)] = inst_20834);

(statearr_20912[(16)] = inst_20835);

return statearr_20912;
})();
var statearr_20913_20960 = state_20892__$1;
(statearr_20913_20960[(2)] = null);

(statearr_20913_20960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (3))){
var inst_20890 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20892__$1,inst_20890);
} else {
if((state_val_20893 === (12))){
var inst_20867 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20914_20961 = state_20892__$1;
(statearr_20914_20961[(2)] = inst_20867);

(statearr_20914_20961[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (2))){
var state_20892__$1 = state_20892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20892__$1,(4),ch);
} else {
if((state_val_20893 === (23))){
var state_20892__$1 = state_20892;
var statearr_20915_20962 = state_20892__$1;
(statearr_20915_20962[(2)] = null);

(statearr_20915_20962[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (19))){
var inst_20823 = (state_20892[(8)]);
var inst_20873 = (state_20892[(11)]);
var inst_20875 = cljs.core.async.muxch_STAR_.call(null,inst_20873);
var state_20892__$1 = state_20892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20892__$1,(22),inst_20875,inst_20823);
} else {
if((state_val_20893 === (11))){
var inst_20833 = (state_20892[(13)]);
var inst_20847 = (state_20892[(10)]);
var inst_20847__$1 = cljs.core.seq.call(null,inst_20833);
var state_20892__$1 = (function (){var statearr_20916 = state_20892;
(statearr_20916[(10)] = inst_20847__$1);

return statearr_20916;
})();
if(inst_20847__$1){
var statearr_20917_20963 = state_20892__$1;
(statearr_20917_20963[(1)] = (13));

} else {
var statearr_20918_20964 = state_20892__$1;
(statearr_20918_20964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (9))){
var inst_20869 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20919_20965 = state_20892__$1;
(statearr_20919_20965[(2)] = inst_20869);

(statearr_20919_20965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (5))){
var inst_20830 = cljs.core.deref.call(null,mults);
var inst_20831 = cljs.core.vals.call(null,inst_20830);
var inst_20832 = cljs.core.seq.call(null,inst_20831);
var inst_20833 = inst_20832;
var inst_20834 = null;
var inst_20835 = (0);
var inst_20836 = (0);
var state_20892__$1 = (function (){var statearr_20920 = state_20892;
(statearr_20920[(13)] = inst_20833);

(statearr_20920[(14)] = inst_20836);

(statearr_20920[(15)] = inst_20834);

(statearr_20920[(16)] = inst_20835);

return statearr_20920;
})();
var statearr_20921_20966 = state_20892__$1;
(statearr_20921_20966[(2)] = null);

(statearr_20921_20966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (14))){
var state_20892__$1 = state_20892;
var statearr_20925_20967 = state_20892__$1;
(statearr_20925_20967[(2)] = null);

(statearr_20925_20967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (16))){
var inst_20847 = (state_20892[(10)]);
var inst_20851 = cljs.core.chunk_first.call(null,inst_20847);
var inst_20852 = cljs.core.chunk_rest.call(null,inst_20847);
var inst_20853 = cljs.core.count.call(null,inst_20851);
var inst_20833 = inst_20852;
var inst_20834 = inst_20851;
var inst_20835 = inst_20853;
var inst_20836 = (0);
var state_20892__$1 = (function (){var statearr_20926 = state_20892;
(statearr_20926[(13)] = inst_20833);

(statearr_20926[(14)] = inst_20836);

(statearr_20926[(15)] = inst_20834);

(statearr_20926[(16)] = inst_20835);

return statearr_20926;
})();
var statearr_20927_20968 = state_20892__$1;
(statearr_20927_20968[(2)] = null);

(statearr_20927_20968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (10))){
var inst_20833 = (state_20892[(13)]);
var inst_20836 = (state_20892[(14)]);
var inst_20834 = (state_20892[(15)]);
var inst_20835 = (state_20892[(16)]);
var inst_20841 = cljs.core._nth.call(null,inst_20834,inst_20836);
var inst_20842 = cljs.core.async.muxch_STAR_.call(null,inst_20841);
var inst_20843 = cljs.core.async.close_BANG_.call(null,inst_20842);
var inst_20844 = (inst_20836 + (1));
var tmp20922 = inst_20833;
var tmp20923 = inst_20834;
var tmp20924 = inst_20835;
var inst_20833__$1 = tmp20922;
var inst_20834__$1 = tmp20923;
var inst_20835__$1 = tmp20924;
var inst_20836__$1 = inst_20844;
var state_20892__$1 = (function (){var statearr_20928 = state_20892;
(statearr_20928[(13)] = inst_20833__$1);

(statearr_20928[(17)] = inst_20843);

(statearr_20928[(14)] = inst_20836__$1);

(statearr_20928[(15)] = inst_20834__$1);

(statearr_20928[(16)] = inst_20835__$1);

return statearr_20928;
})();
var statearr_20929_20969 = state_20892__$1;
(statearr_20929_20969[(2)] = null);

(statearr_20929_20969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (18))){
var inst_20862 = (state_20892[(2)]);
var state_20892__$1 = state_20892;
var statearr_20930_20970 = state_20892__$1;
(statearr_20930_20970[(2)] = inst_20862);

(statearr_20930_20970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20893 === (8))){
var inst_20836 = (state_20892[(14)]);
var inst_20835 = (state_20892[(16)]);
var inst_20838 = (inst_20836 < inst_20835);
var inst_20839 = inst_20838;
var state_20892__$1 = state_20892;
if(cljs.core.truth_(inst_20839)){
var statearr_20931_20971 = state_20892__$1;
(statearr_20931_20971[(1)] = (10));

} else {
var statearr_20932_20972 = state_20892__$1;
(statearr_20932_20972[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__19045__auto___20944,mults,ensure_mult,p))
;
return ((function (switch__18865__auto__,c__19045__auto___20944,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18866__auto__ = null;
var cljs$core$async$state_machine__18866__auto____0 = (function (){
var statearr_20936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20936[(0)] = cljs$core$async$state_machine__18866__auto__);

(statearr_20936[(1)] = (1));

return statearr_20936;
});
var cljs$core$async$state_machine__18866__auto____1 = (function (state_20892){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_20892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e20937){if((e20937 instanceof Object)){
var ex__18869__auto__ = e20937;
var statearr_20938_20973 = state_20892;
(statearr_20938_20973[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20974 = state_20892;
state_20892 = G__20974;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$state_machine__18866__auto__ = function(state_20892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18866__auto____1.call(this,state_20892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18866__auto____0;
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18866__auto____1;
return cljs$core$async$state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___20944,mults,ensure_mult,p))
})();
var state__19047__auto__ = (function (){var statearr_20939 = f__19046__auto__.call(null);
(statearr_20939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___20944);

return statearr_20939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___20944,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args20975 = [];
var len__17910__auto___20978 = arguments.length;
var i__17911__auto___20979 = (0);
while(true){
if((i__17911__auto___20979 < len__17910__auto___20978)){
args20975.push((arguments[i__17911__auto___20979]));

var G__20980 = (i__17911__auto___20979 + (1));
i__17911__auto___20979 = G__20980;
continue;
} else {
}
break;
}

var G__20977 = args20975.length;
switch (G__20977) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20975.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args20982 = [];
var len__17910__auto___20985 = arguments.length;
var i__17911__auto___20986 = (0);
while(true){
if((i__17911__auto___20986 < len__17910__auto___20985)){
args20982.push((arguments[i__17911__auto___20986]));

var G__20987 = (i__17911__auto___20986 + (1));
i__17911__auto___20986 = G__20987;
continue;
} else {
}
break;
}

var G__20984 = args20982.length;
switch (G__20984) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20982.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args20989 = [];
var len__17910__auto___21060 = arguments.length;
var i__17911__auto___21061 = (0);
while(true){
if((i__17911__auto___21061 < len__17910__auto___21060)){
args20989.push((arguments[i__17911__auto___21061]));

var G__21062 = (i__17911__auto___21061 + (1));
i__17911__auto___21061 = G__21062;
continue;
} else {
}
break;
}

var G__20991 = args20989.length;
switch (G__20991) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20989.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19045__auto___21064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___21064,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___21064,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21030){
var state_val_21031 = (state_21030[(1)]);
if((state_val_21031 === (7))){
var state_21030__$1 = state_21030;
var statearr_21032_21065 = state_21030__$1;
(statearr_21032_21065[(2)] = null);

(statearr_21032_21065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (1))){
var state_21030__$1 = state_21030;
var statearr_21033_21066 = state_21030__$1;
(statearr_21033_21066[(2)] = null);

(statearr_21033_21066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (4))){
var inst_20994 = (state_21030[(7)]);
var inst_20996 = (inst_20994 < cnt);
var state_21030__$1 = state_21030;
if(cljs.core.truth_(inst_20996)){
var statearr_21034_21067 = state_21030__$1;
(statearr_21034_21067[(1)] = (6));

} else {
var statearr_21035_21068 = state_21030__$1;
(statearr_21035_21068[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (15))){
var inst_21026 = (state_21030[(2)]);
var state_21030__$1 = state_21030;
var statearr_21036_21069 = state_21030__$1;
(statearr_21036_21069[(2)] = inst_21026);

(statearr_21036_21069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (13))){
var inst_21019 = cljs.core.async.close_BANG_.call(null,out);
var state_21030__$1 = state_21030;
var statearr_21037_21070 = state_21030__$1;
(statearr_21037_21070[(2)] = inst_21019);

(statearr_21037_21070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (6))){
var state_21030__$1 = state_21030;
var statearr_21038_21071 = state_21030__$1;
(statearr_21038_21071[(2)] = null);

(statearr_21038_21071[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (3))){
var inst_21028 = (state_21030[(2)]);
var state_21030__$1 = state_21030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21030__$1,inst_21028);
} else {
if((state_val_21031 === (12))){
var inst_21016 = (state_21030[(8)]);
var inst_21016__$1 = (state_21030[(2)]);
var inst_21017 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21016__$1);
var state_21030__$1 = (function (){var statearr_21039 = state_21030;
(statearr_21039[(8)] = inst_21016__$1);

return statearr_21039;
})();
if(cljs.core.truth_(inst_21017)){
var statearr_21040_21072 = state_21030__$1;
(statearr_21040_21072[(1)] = (13));

} else {
var statearr_21041_21073 = state_21030__$1;
(statearr_21041_21073[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (2))){
var inst_20993 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20994 = (0);
var state_21030__$1 = (function (){var statearr_21042 = state_21030;
(statearr_21042[(7)] = inst_20994);

(statearr_21042[(9)] = inst_20993);

return statearr_21042;
})();
var statearr_21043_21074 = state_21030__$1;
(statearr_21043_21074[(2)] = null);

(statearr_21043_21074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (11))){
var inst_20994 = (state_21030[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21030,(10),Object,null,(9));
var inst_21003 = chs__$1.call(null,inst_20994);
var inst_21004 = done.call(null,inst_20994);
var inst_21005 = cljs.core.async.take_BANG_.call(null,inst_21003,inst_21004);
var state_21030__$1 = state_21030;
var statearr_21044_21075 = state_21030__$1;
(statearr_21044_21075[(2)] = inst_21005);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (9))){
var inst_20994 = (state_21030[(7)]);
var inst_21007 = (state_21030[(2)]);
var inst_21008 = (inst_20994 + (1));
var inst_20994__$1 = inst_21008;
var state_21030__$1 = (function (){var statearr_21045 = state_21030;
(statearr_21045[(7)] = inst_20994__$1);

(statearr_21045[(10)] = inst_21007);

return statearr_21045;
})();
var statearr_21046_21076 = state_21030__$1;
(statearr_21046_21076[(2)] = null);

(statearr_21046_21076[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (5))){
var inst_21014 = (state_21030[(2)]);
var state_21030__$1 = (function (){var statearr_21047 = state_21030;
(statearr_21047[(11)] = inst_21014);

return statearr_21047;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21030__$1,(12),dchan);
} else {
if((state_val_21031 === (14))){
var inst_21016 = (state_21030[(8)]);
var inst_21021 = cljs.core.apply.call(null,f,inst_21016);
var state_21030__$1 = state_21030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21030__$1,(16),out,inst_21021);
} else {
if((state_val_21031 === (16))){
var inst_21023 = (state_21030[(2)]);
var state_21030__$1 = (function (){var statearr_21048 = state_21030;
(statearr_21048[(12)] = inst_21023);

return statearr_21048;
})();
var statearr_21049_21077 = state_21030__$1;
(statearr_21049_21077[(2)] = null);

(statearr_21049_21077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (10))){
var inst_20998 = (state_21030[(2)]);
var inst_20999 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21030__$1 = (function (){var statearr_21050 = state_21030;
(statearr_21050[(13)] = inst_20998);

return statearr_21050;
})();
var statearr_21051_21078 = state_21030__$1;
(statearr_21051_21078[(2)] = inst_20999);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21030__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21031 === (8))){
var inst_21012 = (state_21030[(2)]);
var state_21030__$1 = state_21030;
var statearr_21052_21079 = state_21030__$1;
(statearr_21052_21079[(2)] = inst_21012);

(statearr_21052_21079[(1)] = (5));


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
});})(c__19045__auto___21064,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18865__auto__,c__19045__auto___21064,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18866__auto__ = null;
var cljs$core$async$state_machine__18866__auto____0 = (function (){
var statearr_21056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21056[(0)] = cljs$core$async$state_machine__18866__auto__);

(statearr_21056[(1)] = (1));

return statearr_21056;
});
var cljs$core$async$state_machine__18866__auto____1 = (function (state_21030){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_21030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e21057){if((e21057 instanceof Object)){
var ex__18869__auto__ = e21057;
var statearr_21058_21080 = state_21030;
(statearr_21058_21080[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21081 = state_21030;
state_21030 = G__21081;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$state_machine__18866__auto__ = function(state_21030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18866__auto____1.call(this,state_21030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18866__auto____0;
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18866__auto____1;
return cljs$core$async$state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___21064,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19047__auto__ = (function (){var statearr_21059 = f__19046__auto__.call(null);
(statearr_21059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___21064);

return statearr_21059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___21064,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21083 = [];
var len__17910__auto___21139 = arguments.length;
var i__17911__auto___21140 = (0);
while(true){
if((i__17911__auto___21140 < len__17910__auto___21139)){
args21083.push((arguments[i__17911__auto___21140]));

var G__21141 = (i__17911__auto___21140 + (1));
i__17911__auto___21140 = G__21141;
continue;
} else {
}
break;
}

var G__21085 = args21083.length;
switch (G__21085) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21083.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19045__auto___21143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___21143,out){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___21143,out){
return (function (state_21115){
var state_val_21116 = (state_21115[(1)]);
if((state_val_21116 === (7))){
var inst_21094 = (state_21115[(7)]);
var inst_21095 = (state_21115[(8)]);
var inst_21094__$1 = (state_21115[(2)]);
var inst_21095__$1 = cljs.core.nth.call(null,inst_21094__$1,(0),null);
var inst_21096 = cljs.core.nth.call(null,inst_21094__$1,(1),null);
var inst_21097 = (inst_21095__$1 == null);
var state_21115__$1 = (function (){var statearr_21117 = state_21115;
(statearr_21117[(7)] = inst_21094__$1);

(statearr_21117[(8)] = inst_21095__$1);

(statearr_21117[(9)] = inst_21096);

return statearr_21117;
})();
if(cljs.core.truth_(inst_21097)){
var statearr_21118_21144 = state_21115__$1;
(statearr_21118_21144[(1)] = (8));

} else {
var statearr_21119_21145 = state_21115__$1;
(statearr_21119_21145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (1))){
var inst_21086 = cljs.core.vec.call(null,chs);
var inst_21087 = inst_21086;
var state_21115__$1 = (function (){var statearr_21120 = state_21115;
(statearr_21120[(10)] = inst_21087);

return statearr_21120;
})();
var statearr_21121_21146 = state_21115__$1;
(statearr_21121_21146[(2)] = null);

(statearr_21121_21146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (4))){
var inst_21087 = (state_21115[(10)]);
var state_21115__$1 = state_21115;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21115__$1,(7),inst_21087);
} else {
if((state_val_21116 === (6))){
var inst_21111 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21122_21147 = state_21115__$1;
(statearr_21122_21147[(2)] = inst_21111);

(statearr_21122_21147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (3))){
var inst_21113 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21115__$1,inst_21113);
} else {
if((state_val_21116 === (2))){
var inst_21087 = (state_21115[(10)]);
var inst_21089 = cljs.core.count.call(null,inst_21087);
var inst_21090 = (inst_21089 > (0));
var state_21115__$1 = state_21115;
if(cljs.core.truth_(inst_21090)){
var statearr_21124_21148 = state_21115__$1;
(statearr_21124_21148[(1)] = (4));

} else {
var statearr_21125_21149 = state_21115__$1;
(statearr_21125_21149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (11))){
var inst_21087 = (state_21115[(10)]);
var inst_21104 = (state_21115[(2)]);
var tmp21123 = inst_21087;
var inst_21087__$1 = tmp21123;
var state_21115__$1 = (function (){var statearr_21126 = state_21115;
(statearr_21126[(11)] = inst_21104);

(statearr_21126[(10)] = inst_21087__$1);

return statearr_21126;
})();
var statearr_21127_21150 = state_21115__$1;
(statearr_21127_21150[(2)] = null);

(statearr_21127_21150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (9))){
var inst_21095 = (state_21115[(8)]);
var state_21115__$1 = state_21115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21115__$1,(11),out,inst_21095);
} else {
if((state_val_21116 === (5))){
var inst_21109 = cljs.core.async.close_BANG_.call(null,out);
var state_21115__$1 = state_21115;
var statearr_21128_21151 = state_21115__$1;
(statearr_21128_21151[(2)] = inst_21109);

(statearr_21128_21151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (10))){
var inst_21107 = (state_21115[(2)]);
var state_21115__$1 = state_21115;
var statearr_21129_21152 = state_21115__$1;
(statearr_21129_21152[(2)] = inst_21107);

(statearr_21129_21152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21116 === (8))){
var inst_21094 = (state_21115[(7)]);
var inst_21095 = (state_21115[(8)]);
var inst_21096 = (state_21115[(9)]);
var inst_21087 = (state_21115[(10)]);
var inst_21099 = (function (){var cs = inst_21087;
var vec__21092 = inst_21094;
var v = inst_21095;
var c = inst_21096;
return ((function (cs,vec__21092,v,c,inst_21094,inst_21095,inst_21096,inst_21087,state_val_21116,c__19045__auto___21143,out){
return (function (p1__21082_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21082_SHARP_);
});
;})(cs,vec__21092,v,c,inst_21094,inst_21095,inst_21096,inst_21087,state_val_21116,c__19045__auto___21143,out))
})();
var inst_21100 = cljs.core.filterv.call(null,inst_21099,inst_21087);
var inst_21087__$1 = inst_21100;
var state_21115__$1 = (function (){var statearr_21130 = state_21115;
(statearr_21130[(10)] = inst_21087__$1);

return statearr_21130;
})();
var statearr_21131_21153 = state_21115__$1;
(statearr_21131_21153[(2)] = null);

(statearr_21131_21153[(1)] = (2));


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
});})(c__19045__auto___21143,out))
;
return ((function (switch__18865__auto__,c__19045__auto___21143,out){
return (function() {
var cljs$core$async$state_machine__18866__auto__ = null;
var cljs$core$async$state_machine__18866__auto____0 = (function (){
var statearr_21135 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21135[(0)] = cljs$core$async$state_machine__18866__auto__);

(statearr_21135[(1)] = (1));

return statearr_21135;
});
var cljs$core$async$state_machine__18866__auto____1 = (function (state_21115){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_21115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e21136){if((e21136 instanceof Object)){
var ex__18869__auto__ = e21136;
var statearr_21137_21154 = state_21115;
(statearr_21137_21154[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21155 = state_21115;
state_21115 = G__21155;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$state_machine__18866__auto__ = function(state_21115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18866__auto____1.call(this,state_21115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18866__auto____0;
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18866__auto____1;
return cljs$core$async$state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___21143,out))
})();
var state__19047__auto__ = (function (){var statearr_21138 = f__19046__auto__.call(null);
(statearr_21138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___21143);

return statearr_21138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___21143,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21156 = [];
var len__17910__auto___21205 = arguments.length;
var i__17911__auto___21206 = (0);
while(true){
if((i__17911__auto___21206 < len__17910__auto___21205)){
args21156.push((arguments[i__17911__auto___21206]));

var G__21207 = (i__17911__auto___21206 + (1));
i__17911__auto___21206 = G__21207;
continue;
} else {
}
break;
}

var G__21158 = args21156.length;
switch (G__21158) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21156.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19045__auto___21209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___21209,out){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___21209,out){
return (function (state_21182){
var state_val_21183 = (state_21182[(1)]);
if((state_val_21183 === (7))){
var inst_21164 = (state_21182[(7)]);
var inst_21164__$1 = (state_21182[(2)]);
var inst_21165 = (inst_21164__$1 == null);
var inst_21166 = cljs.core.not.call(null,inst_21165);
var state_21182__$1 = (function (){var statearr_21184 = state_21182;
(statearr_21184[(7)] = inst_21164__$1);

return statearr_21184;
})();
if(inst_21166){
var statearr_21185_21210 = state_21182__$1;
(statearr_21185_21210[(1)] = (8));

} else {
var statearr_21186_21211 = state_21182__$1;
(statearr_21186_21211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (1))){
var inst_21159 = (0);
var state_21182__$1 = (function (){var statearr_21187 = state_21182;
(statearr_21187[(8)] = inst_21159);

return statearr_21187;
})();
var statearr_21188_21212 = state_21182__$1;
(statearr_21188_21212[(2)] = null);

(statearr_21188_21212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (4))){
var state_21182__$1 = state_21182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21182__$1,(7),ch);
} else {
if((state_val_21183 === (6))){
var inst_21177 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
var statearr_21189_21213 = state_21182__$1;
(statearr_21189_21213[(2)] = inst_21177);

(statearr_21189_21213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (3))){
var inst_21179 = (state_21182[(2)]);
var inst_21180 = cljs.core.async.close_BANG_.call(null,out);
var state_21182__$1 = (function (){var statearr_21190 = state_21182;
(statearr_21190[(9)] = inst_21179);

return statearr_21190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21182__$1,inst_21180);
} else {
if((state_val_21183 === (2))){
var inst_21159 = (state_21182[(8)]);
var inst_21161 = (inst_21159 < n);
var state_21182__$1 = state_21182;
if(cljs.core.truth_(inst_21161)){
var statearr_21191_21214 = state_21182__$1;
(statearr_21191_21214[(1)] = (4));

} else {
var statearr_21192_21215 = state_21182__$1;
(statearr_21192_21215[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (11))){
var inst_21159 = (state_21182[(8)]);
var inst_21169 = (state_21182[(2)]);
var inst_21170 = (inst_21159 + (1));
var inst_21159__$1 = inst_21170;
var state_21182__$1 = (function (){var statearr_21193 = state_21182;
(statearr_21193[(8)] = inst_21159__$1);

(statearr_21193[(10)] = inst_21169);

return statearr_21193;
})();
var statearr_21194_21216 = state_21182__$1;
(statearr_21194_21216[(2)] = null);

(statearr_21194_21216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (9))){
var state_21182__$1 = state_21182;
var statearr_21195_21217 = state_21182__$1;
(statearr_21195_21217[(2)] = null);

(statearr_21195_21217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (5))){
var state_21182__$1 = state_21182;
var statearr_21196_21218 = state_21182__$1;
(statearr_21196_21218[(2)] = null);

(statearr_21196_21218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (10))){
var inst_21174 = (state_21182[(2)]);
var state_21182__$1 = state_21182;
var statearr_21197_21219 = state_21182__$1;
(statearr_21197_21219[(2)] = inst_21174);

(statearr_21197_21219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21183 === (8))){
var inst_21164 = (state_21182[(7)]);
var state_21182__$1 = state_21182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21182__$1,(11),out,inst_21164);
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
});})(c__19045__auto___21209,out))
;
return ((function (switch__18865__auto__,c__19045__auto___21209,out){
return (function() {
var cljs$core$async$state_machine__18866__auto__ = null;
var cljs$core$async$state_machine__18866__auto____0 = (function (){
var statearr_21201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21201[(0)] = cljs$core$async$state_machine__18866__auto__);

(statearr_21201[(1)] = (1));

return statearr_21201;
});
var cljs$core$async$state_machine__18866__auto____1 = (function (state_21182){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_21182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e21202){if((e21202 instanceof Object)){
var ex__18869__auto__ = e21202;
var statearr_21203_21220 = state_21182;
(statearr_21203_21220[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21221 = state_21182;
state_21182 = G__21221;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$state_machine__18866__auto__ = function(state_21182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18866__auto____1.call(this,state_21182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18866__auto____0;
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18866__auto____1;
return cljs$core$async$state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___21209,out))
})();
var state__19047__auto__ = (function (){var statearr_21204 = f__19046__auto__.call(null);
(statearr_21204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___21209);

return statearr_21204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___21209,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21229 = (function (map_LT_,f,ch,meta21230){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21230 = meta21230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21231,meta21230__$1){
var self__ = this;
var _21231__$1 = this;
return (new cljs.core.async.t_cljs$core$async21229(self__.map_LT_,self__.f,self__.ch,meta21230__$1));
});

cljs.core.async.t_cljs$core$async21229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21231){
var self__ = this;
var _21231__$1 = this;
return self__.meta21230;
});

cljs.core.async.t_cljs$core$async21229.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21229.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21229.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21232 = (function (map_LT_,f,ch,meta21230,_,fn1,meta21233){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21230 = meta21230;
this._ = _;
this.fn1 = fn1;
this.meta21233 = meta21233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21234,meta21233__$1){
var self__ = this;
var _21234__$1 = this;
return (new cljs.core.async.t_cljs$core$async21232(self__.map_LT_,self__.f,self__.ch,self__.meta21230,self__._,self__.fn1,meta21233__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21234){
var self__ = this;
var _21234__$1 = this;
return self__.meta21233;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21232.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21222_SHARP_){
return f1.call(null,(((p1__21222_SHARP_ == null))?null:self__.f.call(null,p1__21222_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21232.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21230","meta21230",-1333826050,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21229","cljs.core.async/t_cljs$core$async21229",781235188,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21233","meta21233",-1914069229,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21232";

cljs.core.async.t_cljs$core$async21232.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21232");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21232 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21232(map_LT___$1,f__$1,ch__$1,meta21230__$1,___$2,fn1__$1,meta21233){
return (new cljs.core.async.t_cljs$core$async21232(map_LT___$1,f__$1,ch__$1,meta21230__$1,___$2,fn1__$1,meta21233));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21232(self__.map_LT_,self__.f,self__.ch,self__.meta21230,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16840__auto__ = ret;
if(cljs.core.truth_(and__16840__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16840__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21229.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21230","meta21230",-1333826050,null)], null);
});

cljs.core.async.t_cljs$core$async21229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21229";

cljs.core.async.t_cljs$core$async21229.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21229");
});

cljs.core.async.__GT_t_cljs$core$async21229 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21229(map_LT___$1,f__$1,ch__$1,meta21230){
return (new cljs.core.async.t_cljs$core$async21229(map_LT___$1,f__$1,ch__$1,meta21230));
});

}

return (new cljs.core.async.t_cljs$core$async21229(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21238 = (function (map_GT_,f,ch,meta21239){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21239 = meta21239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21240,meta21239__$1){
var self__ = this;
var _21240__$1 = this;
return (new cljs.core.async.t_cljs$core$async21238(self__.map_GT_,self__.f,self__.ch,meta21239__$1));
});

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21240){
var self__ = this;
var _21240__$1 = this;
return self__.meta21239;
});

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21239","meta21239",238325069,null)], null);
});

cljs.core.async.t_cljs$core$async21238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21238";

cljs.core.async.t_cljs$core$async21238.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21238");
});

cljs.core.async.__GT_t_cljs$core$async21238 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21238(map_GT___$1,f__$1,ch__$1,meta21239){
return (new cljs.core.async.t_cljs$core$async21238(map_GT___$1,f__$1,ch__$1,meta21239));
});

}

return (new cljs.core.async.t_cljs$core$async21238(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21244 = (function (filter_GT_,p,ch,meta21245){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21245 = meta21245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21246,meta21245__$1){
var self__ = this;
var _21246__$1 = this;
return (new cljs.core.async.t_cljs$core$async21244(self__.filter_GT_,self__.p,self__.ch,meta21245__$1));
});

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21246){
var self__ = this;
var _21246__$1 = this;
return self__.meta21245;
});

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21244.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21245","meta21245",-2122693965,null)], null);
});

cljs.core.async.t_cljs$core$async21244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21244";

cljs.core.async.t_cljs$core$async21244.cljs$lang$ctorPrWriter = (function (this__17450__auto__,writer__17451__auto__,opt__17452__auto__){
return cljs.core._write.call(null,writer__17451__auto__,"cljs.core.async/t_cljs$core$async21244");
});

cljs.core.async.__GT_t_cljs$core$async21244 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21244(filter_GT___$1,p__$1,ch__$1,meta21245){
return (new cljs.core.async.t_cljs$core$async21244(filter_GT___$1,p__$1,ch__$1,meta21245));
});

}

return (new cljs.core.async.t_cljs$core$async21244(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21247 = [];
var len__17910__auto___21291 = arguments.length;
var i__17911__auto___21292 = (0);
while(true){
if((i__17911__auto___21292 < len__17910__auto___21291)){
args21247.push((arguments[i__17911__auto___21292]));

var G__21293 = (i__17911__auto___21292 + (1));
i__17911__auto___21292 = G__21293;
continue;
} else {
}
break;
}

var G__21249 = args21247.length;
switch (G__21249) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21247.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19045__auto___21295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___21295,out){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___21295,out){
return (function (state_21270){
var state_val_21271 = (state_21270[(1)]);
if((state_val_21271 === (7))){
var inst_21266 = (state_21270[(2)]);
var state_21270__$1 = state_21270;
var statearr_21272_21296 = state_21270__$1;
(statearr_21272_21296[(2)] = inst_21266);

(statearr_21272_21296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (1))){
var state_21270__$1 = state_21270;
var statearr_21273_21297 = state_21270__$1;
(statearr_21273_21297[(2)] = null);

(statearr_21273_21297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (4))){
var inst_21252 = (state_21270[(7)]);
var inst_21252__$1 = (state_21270[(2)]);
var inst_21253 = (inst_21252__$1 == null);
var state_21270__$1 = (function (){var statearr_21274 = state_21270;
(statearr_21274[(7)] = inst_21252__$1);

return statearr_21274;
})();
if(cljs.core.truth_(inst_21253)){
var statearr_21275_21298 = state_21270__$1;
(statearr_21275_21298[(1)] = (5));

} else {
var statearr_21276_21299 = state_21270__$1;
(statearr_21276_21299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (6))){
var inst_21252 = (state_21270[(7)]);
var inst_21257 = p.call(null,inst_21252);
var state_21270__$1 = state_21270;
if(cljs.core.truth_(inst_21257)){
var statearr_21277_21300 = state_21270__$1;
(statearr_21277_21300[(1)] = (8));

} else {
var statearr_21278_21301 = state_21270__$1;
(statearr_21278_21301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (3))){
var inst_21268 = (state_21270[(2)]);
var state_21270__$1 = state_21270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21270__$1,inst_21268);
} else {
if((state_val_21271 === (2))){
var state_21270__$1 = state_21270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21270__$1,(4),ch);
} else {
if((state_val_21271 === (11))){
var inst_21260 = (state_21270[(2)]);
var state_21270__$1 = state_21270;
var statearr_21279_21302 = state_21270__$1;
(statearr_21279_21302[(2)] = inst_21260);

(statearr_21279_21302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (9))){
var state_21270__$1 = state_21270;
var statearr_21280_21303 = state_21270__$1;
(statearr_21280_21303[(2)] = null);

(statearr_21280_21303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (5))){
var inst_21255 = cljs.core.async.close_BANG_.call(null,out);
var state_21270__$1 = state_21270;
var statearr_21281_21304 = state_21270__$1;
(statearr_21281_21304[(2)] = inst_21255);

(statearr_21281_21304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (10))){
var inst_21263 = (state_21270[(2)]);
var state_21270__$1 = (function (){var statearr_21282 = state_21270;
(statearr_21282[(8)] = inst_21263);

return statearr_21282;
})();
var statearr_21283_21305 = state_21270__$1;
(statearr_21283_21305[(2)] = null);

(statearr_21283_21305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21271 === (8))){
var inst_21252 = (state_21270[(7)]);
var state_21270__$1 = state_21270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21270__$1,(11),out,inst_21252);
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
});})(c__19045__auto___21295,out))
;
return ((function (switch__18865__auto__,c__19045__auto___21295,out){
return (function() {
var cljs$core$async$state_machine__18866__auto__ = null;
var cljs$core$async$state_machine__18866__auto____0 = (function (){
var statearr_21287 = [null,null,null,null,null,null,null,null,null];
(statearr_21287[(0)] = cljs$core$async$state_machine__18866__auto__);

(statearr_21287[(1)] = (1));

return statearr_21287;
});
var cljs$core$async$state_machine__18866__auto____1 = (function (state_21270){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_21270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e21288){if((e21288 instanceof Object)){
var ex__18869__auto__ = e21288;
var statearr_21289_21306 = state_21270;
(statearr_21289_21306[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21307 = state_21270;
state_21270 = G__21307;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$state_machine__18866__auto__ = function(state_21270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18866__auto____1.call(this,state_21270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18866__auto____0;
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18866__auto____1;
return cljs$core$async$state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___21295,out))
})();
var state__19047__auto__ = (function (){var statearr_21290 = f__19046__auto__.call(null);
(statearr_21290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___21295);

return statearr_21290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___21295,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21308 = [];
var len__17910__auto___21311 = arguments.length;
var i__17911__auto___21312 = (0);
while(true){
if((i__17911__auto___21312 < len__17910__auto___21311)){
args21308.push((arguments[i__17911__auto___21312]));

var G__21313 = (i__17911__auto___21312 + (1));
i__17911__auto___21312 = G__21313;
continue;
} else {
}
break;
}

var G__21310 = args21308.length;
switch (G__21310) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21308.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19045__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto__){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto__){
return (function (state_21480){
var state_val_21481 = (state_21480[(1)]);
if((state_val_21481 === (7))){
var inst_21476 = (state_21480[(2)]);
var state_21480__$1 = state_21480;
var statearr_21482_21523 = state_21480__$1;
(statearr_21482_21523[(2)] = inst_21476);

(statearr_21482_21523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (20))){
var inst_21446 = (state_21480[(7)]);
var inst_21457 = (state_21480[(2)]);
var inst_21458 = cljs.core.next.call(null,inst_21446);
var inst_21432 = inst_21458;
var inst_21433 = null;
var inst_21434 = (0);
var inst_21435 = (0);
var state_21480__$1 = (function (){var statearr_21483 = state_21480;
(statearr_21483[(8)] = inst_21433);

(statearr_21483[(9)] = inst_21434);

(statearr_21483[(10)] = inst_21457);

(statearr_21483[(11)] = inst_21432);

(statearr_21483[(12)] = inst_21435);

return statearr_21483;
})();
var statearr_21484_21524 = state_21480__$1;
(statearr_21484_21524[(2)] = null);

(statearr_21484_21524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (1))){
var state_21480__$1 = state_21480;
var statearr_21485_21525 = state_21480__$1;
(statearr_21485_21525[(2)] = null);

(statearr_21485_21525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (4))){
var inst_21421 = (state_21480[(13)]);
var inst_21421__$1 = (state_21480[(2)]);
var inst_21422 = (inst_21421__$1 == null);
var state_21480__$1 = (function (){var statearr_21486 = state_21480;
(statearr_21486[(13)] = inst_21421__$1);

return statearr_21486;
})();
if(cljs.core.truth_(inst_21422)){
var statearr_21487_21526 = state_21480__$1;
(statearr_21487_21526[(1)] = (5));

} else {
var statearr_21488_21527 = state_21480__$1;
(statearr_21488_21527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (15))){
var state_21480__$1 = state_21480;
var statearr_21492_21528 = state_21480__$1;
(statearr_21492_21528[(2)] = null);

(statearr_21492_21528[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (21))){
var state_21480__$1 = state_21480;
var statearr_21493_21529 = state_21480__$1;
(statearr_21493_21529[(2)] = null);

(statearr_21493_21529[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (13))){
var inst_21433 = (state_21480[(8)]);
var inst_21434 = (state_21480[(9)]);
var inst_21432 = (state_21480[(11)]);
var inst_21435 = (state_21480[(12)]);
var inst_21442 = (state_21480[(2)]);
var inst_21443 = (inst_21435 + (1));
var tmp21489 = inst_21433;
var tmp21490 = inst_21434;
var tmp21491 = inst_21432;
var inst_21432__$1 = tmp21491;
var inst_21433__$1 = tmp21489;
var inst_21434__$1 = tmp21490;
var inst_21435__$1 = inst_21443;
var state_21480__$1 = (function (){var statearr_21494 = state_21480;
(statearr_21494[(14)] = inst_21442);

(statearr_21494[(8)] = inst_21433__$1);

(statearr_21494[(9)] = inst_21434__$1);

(statearr_21494[(11)] = inst_21432__$1);

(statearr_21494[(12)] = inst_21435__$1);

return statearr_21494;
})();
var statearr_21495_21530 = state_21480__$1;
(statearr_21495_21530[(2)] = null);

(statearr_21495_21530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (22))){
var state_21480__$1 = state_21480;
var statearr_21496_21531 = state_21480__$1;
(statearr_21496_21531[(2)] = null);

(statearr_21496_21531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (6))){
var inst_21421 = (state_21480[(13)]);
var inst_21430 = f.call(null,inst_21421);
var inst_21431 = cljs.core.seq.call(null,inst_21430);
var inst_21432 = inst_21431;
var inst_21433 = null;
var inst_21434 = (0);
var inst_21435 = (0);
var state_21480__$1 = (function (){var statearr_21497 = state_21480;
(statearr_21497[(8)] = inst_21433);

(statearr_21497[(9)] = inst_21434);

(statearr_21497[(11)] = inst_21432);

(statearr_21497[(12)] = inst_21435);

return statearr_21497;
})();
var statearr_21498_21532 = state_21480__$1;
(statearr_21498_21532[(2)] = null);

(statearr_21498_21532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (17))){
var inst_21446 = (state_21480[(7)]);
var inst_21450 = cljs.core.chunk_first.call(null,inst_21446);
var inst_21451 = cljs.core.chunk_rest.call(null,inst_21446);
var inst_21452 = cljs.core.count.call(null,inst_21450);
var inst_21432 = inst_21451;
var inst_21433 = inst_21450;
var inst_21434 = inst_21452;
var inst_21435 = (0);
var state_21480__$1 = (function (){var statearr_21499 = state_21480;
(statearr_21499[(8)] = inst_21433);

(statearr_21499[(9)] = inst_21434);

(statearr_21499[(11)] = inst_21432);

(statearr_21499[(12)] = inst_21435);

return statearr_21499;
})();
var statearr_21500_21533 = state_21480__$1;
(statearr_21500_21533[(2)] = null);

(statearr_21500_21533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (3))){
var inst_21478 = (state_21480[(2)]);
var state_21480__$1 = state_21480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21480__$1,inst_21478);
} else {
if((state_val_21481 === (12))){
var inst_21466 = (state_21480[(2)]);
var state_21480__$1 = state_21480;
var statearr_21501_21534 = state_21480__$1;
(statearr_21501_21534[(2)] = inst_21466);

(statearr_21501_21534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (2))){
var state_21480__$1 = state_21480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21480__$1,(4),in$);
} else {
if((state_val_21481 === (23))){
var inst_21474 = (state_21480[(2)]);
var state_21480__$1 = state_21480;
var statearr_21502_21535 = state_21480__$1;
(statearr_21502_21535[(2)] = inst_21474);

(statearr_21502_21535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (19))){
var inst_21461 = (state_21480[(2)]);
var state_21480__$1 = state_21480;
var statearr_21503_21536 = state_21480__$1;
(statearr_21503_21536[(2)] = inst_21461);

(statearr_21503_21536[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (11))){
var inst_21446 = (state_21480[(7)]);
var inst_21432 = (state_21480[(11)]);
var inst_21446__$1 = cljs.core.seq.call(null,inst_21432);
var state_21480__$1 = (function (){var statearr_21504 = state_21480;
(statearr_21504[(7)] = inst_21446__$1);

return statearr_21504;
})();
if(inst_21446__$1){
var statearr_21505_21537 = state_21480__$1;
(statearr_21505_21537[(1)] = (14));

} else {
var statearr_21506_21538 = state_21480__$1;
(statearr_21506_21538[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (9))){
var inst_21468 = (state_21480[(2)]);
var inst_21469 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21480__$1 = (function (){var statearr_21507 = state_21480;
(statearr_21507[(15)] = inst_21468);

return statearr_21507;
})();
if(cljs.core.truth_(inst_21469)){
var statearr_21508_21539 = state_21480__$1;
(statearr_21508_21539[(1)] = (21));

} else {
var statearr_21509_21540 = state_21480__$1;
(statearr_21509_21540[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (5))){
var inst_21424 = cljs.core.async.close_BANG_.call(null,out);
var state_21480__$1 = state_21480;
var statearr_21510_21541 = state_21480__$1;
(statearr_21510_21541[(2)] = inst_21424);

(statearr_21510_21541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (14))){
var inst_21446 = (state_21480[(7)]);
var inst_21448 = cljs.core.chunked_seq_QMARK_.call(null,inst_21446);
var state_21480__$1 = state_21480;
if(inst_21448){
var statearr_21511_21542 = state_21480__$1;
(statearr_21511_21542[(1)] = (17));

} else {
var statearr_21512_21543 = state_21480__$1;
(statearr_21512_21543[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (16))){
var inst_21464 = (state_21480[(2)]);
var state_21480__$1 = state_21480;
var statearr_21513_21544 = state_21480__$1;
(statearr_21513_21544[(2)] = inst_21464);

(statearr_21513_21544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21481 === (10))){
var inst_21433 = (state_21480[(8)]);
var inst_21435 = (state_21480[(12)]);
var inst_21440 = cljs.core._nth.call(null,inst_21433,inst_21435);
var state_21480__$1 = state_21480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21480__$1,(13),out,inst_21440);
} else {
if((state_val_21481 === (18))){
var inst_21446 = (state_21480[(7)]);
var inst_21455 = cljs.core.first.call(null,inst_21446);
var state_21480__$1 = state_21480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21480__$1,(20),out,inst_21455);
} else {
if((state_val_21481 === (8))){
var inst_21434 = (state_21480[(9)]);
var inst_21435 = (state_21480[(12)]);
var inst_21437 = (inst_21435 < inst_21434);
var inst_21438 = inst_21437;
var state_21480__$1 = state_21480;
if(cljs.core.truth_(inst_21438)){
var statearr_21514_21545 = state_21480__$1;
(statearr_21514_21545[(1)] = (10));

} else {
var statearr_21515_21546 = state_21480__$1;
(statearr_21515_21546[(1)] = (11));

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
}
}
}
}
}
}
});})(c__19045__auto__))
;
return ((function (switch__18865__auto__,c__19045__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18866__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18866__auto____0 = (function (){
var statearr_21519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21519[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18866__auto__);

(statearr_21519[(1)] = (1));

return statearr_21519;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18866__auto____1 = (function (state_21480){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_21480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e21520){if((e21520 instanceof Object)){
var ex__18869__auto__ = e21520;
var statearr_21521_21547 = state_21480;
(statearr_21521_21547[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21548 = state_21480;
state_21480 = G__21548;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18866__auto__ = function(state_21480){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18866__auto____1.call(this,state_21480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18866__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18866__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto__))
})();
var state__19047__auto__ = (function (){var statearr_21522 = f__19046__auto__.call(null);
(statearr_21522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto__);

return statearr_21522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto__))
);

return c__19045__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21549 = [];
var len__17910__auto___21552 = arguments.length;
var i__17911__auto___21553 = (0);
while(true){
if((i__17911__auto___21553 < len__17910__auto___21552)){
args21549.push((arguments[i__17911__auto___21553]));

var G__21554 = (i__17911__auto___21553 + (1));
i__17911__auto___21553 = G__21554;
continue;
} else {
}
break;
}

var G__21551 = args21549.length;
switch (G__21551) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21549.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21556 = [];
var len__17910__auto___21559 = arguments.length;
var i__17911__auto___21560 = (0);
while(true){
if((i__17911__auto___21560 < len__17910__auto___21559)){
args21556.push((arguments[i__17911__auto___21560]));

var G__21561 = (i__17911__auto___21560 + (1));
i__17911__auto___21560 = G__21561;
continue;
} else {
}
break;
}

var G__21558 = args21556.length;
switch (G__21558) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21556.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21563 = [];
var len__17910__auto___21614 = arguments.length;
var i__17911__auto___21615 = (0);
while(true){
if((i__17911__auto___21615 < len__17910__auto___21614)){
args21563.push((arguments[i__17911__auto___21615]));

var G__21616 = (i__17911__auto___21615 + (1));
i__17911__auto___21615 = G__21616;
continue;
} else {
}
break;
}

var G__21565 = args21563.length;
switch (G__21565) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21563.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19045__auto___21618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___21618,out){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___21618,out){
return (function (state_21589){
var state_val_21590 = (state_21589[(1)]);
if((state_val_21590 === (7))){
var inst_21584 = (state_21589[(2)]);
var state_21589__$1 = state_21589;
var statearr_21591_21619 = state_21589__$1;
(statearr_21591_21619[(2)] = inst_21584);

(statearr_21591_21619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (1))){
var inst_21566 = null;
var state_21589__$1 = (function (){var statearr_21592 = state_21589;
(statearr_21592[(7)] = inst_21566);

return statearr_21592;
})();
var statearr_21593_21620 = state_21589__$1;
(statearr_21593_21620[(2)] = null);

(statearr_21593_21620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (4))){
var inst_21569 = (state_21589[(8)]);
var inst_21569__$1 = (state_21589[(2)]);
var inst_21570 = (inst_21569__$1 == null);
var inst_21571 = cljs.core.not.call(null,inst_21570);
var state_21589__$1 = (function (){var statearr_21594 = state_21589;
(statearr_21594[(8)] = inst_21569__$1);

return statearr_21594;
})();
if(inst_21571){
var statearr_21595_21621 = state_21589__$1;
(statearr_21595_21621[(1)] = (5));

} else {
var statearr_21596_21622 = state_21589__$1;
(statearr_21596_21622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (6))){
var state_21589__$1 = state_21589;
var statearr_21597_21623 = state_21589__$1;
(statearr_21597_21623[(2)] = null);

(statearr_21597_21623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (3))){
var inst_21586 = (state_21589[(2)]);
var inst_21587 = cljs.core.async.close_BANG_.call(null,out);
var state_21589__$1 = (function (){var statearr_21598 = state_21589;
(statearr_21598[(9)] = inst_21586);

return statearr_21598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21589__$1,inst_21587);
} else {
if((state_val_21590 === (2))){
var state_21589__$1 = state_21589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21589__$1,(4),ch);
} else {
if((state_val_21590 === (11))){
var inst_21569 = (state_21589[(8)]);
var inst_21578 = (state_21589[(2)]);
var inst_21566 = inst_21569;
var state_21589__$1 = (function (){var statearr_21599 = state_21589;
(statearr_21599[(10)] = inst_21578);

(statearr_21599[(7)] = inst_21566);

return statearr_21599;
})();
var statearr_21600_21624 = state_21589__$1;
(statearr_21600_21624[(2)] = null);

(statearr_21600_21624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (9))){
var inst_21569 = (state_21589[(8)]);
var state_21589__$1 = state_21589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21589__$1,(11),out,inst_21569);
} else {
if((state_val_21590 === (5))){
var inst_21569 = (state_21589[(8)]);
var inst_21566 = (state_21589[(7)]);
var inst_21573 = cljs.core._EQ_.call(null,inst_21569,inst_21566);
var state_21589__$1 = state_21589;
if(inst_21573){
var statearr_21602_21625 = state_21589__$1;
(statearr_21602_21625[(1)] = (8));

} else {
var statearr_21603_21626 = state_21589__$1;
(statearr_21603_21626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (10))){
var inst_21581 = (state_21589[(2)]);
var state_21589__$1 = state_21589;
var statearr_21604_21627 = state_21589__$1;
(statearr_21604_21627[(2)] = inst_21581);

(statearr_21604_21627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21590 === (8))){
var inst_21566 = (state_21589[(7)]);
var tmp21601 = inst_21566;
var inst_21566__$1 = tmp21601;
var state_21589__$1 = (function (){var statearr_21605 = state_21589;
(statearr_21605[(7)] = inst_21566__$1);

return statearr_21605;
})();
var statearr_21606_21628 = state_21589__$1;
(statearr_21606_21628[(2)] = null);

(statearr_21606_21628[(1)] = (2));


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
});})(c__19045__auto___21618,out))
;
return ((function (switch__18865__auto__,c__19045__auto___21618,out){
return (function() {
var cljs$core$async$state_machine__18866__auto__ = null;
var cljs$core$async$state_machine__18866__auto____0 = (function (){
var statearr_21610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21610[(0)] = cljs$core$async$state_machine__18866__auto__);

(statearr_21610[(1)] = (1));

return statearr_21610;
});
var cljs$core$async$state_machine__18866__auto____1 = (function (state_21589){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_21589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e21611){if((e21611 instanceof Object)){
var ex__18869__auto__ = e21611;
var statearr_21612_21629 = state_21589;
(statearr_21612_21629[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21630 = state_21589;
state_21589 = G__21630;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$state_machine__18866__auto__ = function(state_21589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18866__auto____1.call(this,state_21589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18866__auto____0;
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18866__auto____1;
return cljs$core$async$state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___21618,out))
})();
var state__19047__auto__ = (function (){var statearr_21613 = f__19046__auto__.call(null);
(statearr_21613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___21618);

return statearr_21613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___21618,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21631 = [];
var len__17910__auto___21701 = arguments.length;
var i__17911__auto___21702 = (0);
while(true){
if((i__17911__auto___21702 < len__17910__auto___21701)){
args21631.push((arguments[i__17911__auto___21702]));

var G__21703 = (i__17911__auto___21702 + (1));
i__17911__auto___21702 = G__21703;
continue;
} else {
}
break;
}

var G__21633 = args21631.length;
switch (G__21633) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21631.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19045__auto___21705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___21705,out){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___21705,out){
return (function (state_21671){
var state_val_21672 = (state_21671[(1)]);
if((state_val_21672 === (7))){
var inst_21667 = (state_21671[(2)]);
var state_21671__$1 = state_21671;
var statearr_21673_21706 = state_21671__$1;
(statearr_21673_21706[(2)] = inst_21667);

(statearr_21673_21706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (1))){
var inst_21634 = (new Array(n));
var inst_21635 = inst_21634;
var inst_21636 = (0);
var state_21671__$1 = (function (){var statearr_21674 = state_21671;
(statearr_21674[(7)] = inst_21636);

(statearr_21674[(8)] = inst_21635);

return statearr_21674;
})();
var statearr_21675_21707 = state_21671__$1;
(statearr_21675_21707[(2)] = null);

(statearr_21675_21707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (4))){
var inst_21639 = (state_21671[(9)]);
var inst_21639__$1 = (state_21671[(2)]);
var inst_21640 = (inst_21639__$1 == null);
var inst_21641 = cljs.core.not.call(null,inst_21640);
var state_21671__$1 = (function (){var statearr_21676 = state_21671;
(statearr_21676[(9)] = inst_21639__$1);

return statearr_21676;
})();
if(inst_21641){
var statearr_21677_21708 = state_21671__$1;
(statearr_21677_21708[(1)] = (5));

} else {
var statearr_21678_21709 = state_21671__$1;
(statearr_21678_21709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (15))){
var inst_21661 = (state_21671[(2)]);
var state_21671__$1 = state_21671;
var statearr_21679_21710 = state_21671__$1;
(statearr_21679_21710[(2)] = inst_21661);

(statearr_21679_21710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (13))){
var state_21671__$1 = state_21671;
var statearr_21680_21711 = state_21671__$1;
(statearr_21680_21711[(2)] = null);

(statearr_21680_21711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (6))){
var inst_21636 = (state_21671[(7)]);
var inst_21657 = (inst_21636 > (0));
var state_21671__$1 = state_21671;
if(cljs.core.truth_(inst_21657)){
var statearr_21681_21712 = state_21671__$1;
(statearr_21681_21712[(1)] = (12));

} else {
var statearr_21682_21713 = state_21671__$1;
(statearr_21682_21713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (3))){
var inst_21669 = (state_21671[(2)]);
var state_21671__$1 = state_21671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21671__$1,inst_21669);
} else {
if((state_val_21672 === (12))){
var inst_21635 = (state_21671[(8)]);
var inst_21659 = cljs.core.vec.call(null,inst_21635);
var state_21671__$1 = state_21671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21671__$1,(15),out,inst_21659);
} else {
if((state_val_21672 === (2))){
var state_21671__$1 = state_21671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21671__$1,(4),ch);
} else {
if((state_val_21672 === (11))){
var inst_21651 = (state_21671[(2)]);
var inst_21652 = (new Array(n));
var inst_21635 = inst_21652;
var inst_21636 = (0);
var state_21671__$1 = (function (){var statearr_21683 = state_21671;
(statearr_21683[(7)] = inst_21636);

(statearr_21683[(8)] = inst_21635);

(statearr_21683[(10)] = inst_21651);

return statearr_21683;
})();
var statearr_21684_21714 = state_21671__$1;
(statearr_21684_21714[(2)] = null);

(statearr_21684_21714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (9))){
var inst_21635 = (state_21671[(8)]);
var inst_21649 = cljs.core.vec.call(null,inst_21635);
var state_21671__$1 = state_21671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21671__$1,(11),out,inst_21649);
} else {
if((state_val_21672 === (5))){
var inst_21636 = (state_21671[(7)]);
var inst_21635 = (state_21671[(8)]);
var inst_21644 = (state_21671[(11)]);
var inst_21639 = (state_21671[(9)]);
var inst_21643 = (inst_21635[inst_21636] = inst_21639);
var inst_21644__$1 = (inst_21636 + (1));
var inst_21645 = (inst_21644__$1 < n);
var state_21671__$1 = (function (){var statearr_21685 = state_21671;
(statearr_21685[(12)] = inst_21643);

(statearr_21685[(11)] = inst_21644__$1);

return statearr_21685;
})();
if(cljs.core.truth_(inst_21645)){
var statearr_21686_21715 = state_21671__$1;
(statearr_21686_21715[(1)] = (8));

} else {
var statearr_21687_21716 = state_21671__$1;
(statearr_21687_21716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (14))){
var inst_21664 = (state_21671[(2)]);
var inst_21665 = cljs.core.async.close_BANG_.call(null,out);
var state_21671__$1 = (function (){var statearr_21689 = state_21671;
(statearr_21689[(13)] = inst_21664);

return statearr_21689;
})();
var statearr_21690_21717 = state_21671__$1;
(statearr_21690_21717[(2)] = inst_21665);

(statearr_21690_21717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (10))){
var inst_21655 = (state_21671[(2)]);
var state_21671__$1 = state_21671;
var statearr_21691_21718 = state_21671__$1;
(statearr_21691_21718[(2)] = inst_21655);

(statearr_21691_21718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21672 === (8))){
var inst_21635 = (state_21671[(8)]);
var inst_21644 = (state_21671[(11)]);
var tmp21688 = inst_21635;
var inst_21635__$1 = tmp21688;
var inst_21636 = inst_21644;
var state_21671__$1 = (function (){var statearr_21692 = state_21671;
(statearr_21692[(7)] = inst_21636);

(statearr_21692[(8)] = inst_21635__$1);

return statearr_21692;
})();
var statearr_21693_21719 = state_21671__$1;
(statearr_21693_21719[(2)] = null);

(statearr_21693_21719[(1)] = (2));


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
});})(c__19045__auto___21705,out))
;
return ((function (switch__18865__auto__,c__19045__auto___21705,out){
return (function() {
var cljs$core$async$state_machine__18866__auto__ = null;
var cljs$core$async$state_machine__18866__auto____0 = (function (){
var statearr_21697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21697[(0)] = cljs$core$async$state_machine__18866__auto__);

(statearr_21697[(1)] = (1));

return statearr_21697;
});
var cljs$core$async$state_machine__18866__auto____1 = (function (state_21671){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_21671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e21698){if((e21698 instanceof Object)){
var ex__18869__auto__ = e21698;
var statearr_21699_21720 = state_21671;
(statearr_21699_21720[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21721 = state_21671;
state_21671 = G__21721;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$state_machine__18866__auto__ = function(state_21671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18866__auto____1.call(this,state_21671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18866__auto____0;
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18866__auto____1;
return cljs$core$async$state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___21705,out))
})();
var state__19047__auto__ = (function (){var statearr_21700 = f__19046__auto__.call(null);
(statearr_21700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___21705);

return statearr_21700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___21705,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21722 = [];
var len__17910__auto___21796 = arguments.length;
var i__17911__auto___21797 = (0);
while(true){
if((i__17911__auto___21797 < len__17910__auto___21796)){
args21722.push((arguments[i__17911__auto___21797]));

var G__21798 = (i__17911__auto___21797 + (1));
i__17911__auto___21797 = G__21798;
continue;
} else {
}
break;
}

var G__21724 = args21722.length;
switch (G__21724) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21722.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19045__auto___21800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19045__auto___21800,out){
return (function (){
var f__19046__auto__ = (function (){var switch__18865__auto__ = ((function (c__19045__auto___21800,out){
return (function (state_21766){
var state_val_21767 = (state_21766[(1)]);
if((state_val_21767 === (7))){
var inst_21762 = (state_21766[(2)]);
var state_21766__$1 = state_21766;
var statearr_21768_21801 = state_21766__$1;
(statearr_21768_21801[(2)] = inst_21762);

(statearr_21768_21801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (1))){
var inst_21725 = [];
var inst_21726 = inst_21725;
var inst_21727 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21766__$1 = (function (){var statearr_21769 = state_21766;
(statearr_21769[(7)] = inst_21726);

(statearr_21769[(8)] = inst_21727);

return statearr_21769;
})();
var statearr_21770_21802 = state_21766__$1;
(statearr_21770_21802[(2)] = null);

(statearr_21770_21802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (4))){
var inst_21730 = (state_21766[(9)]);
var inst_21730__$1 = (state_21766[(2)]);
var inst_21731 = (inst_21730__$1 == null);
var inst_21732 = cljs.core.not.call(null,inst_21731);
var state_21766__$1 = (function (){var statearr_21771 = state_21766;
(statearr_21771[(9)] = inst_21730__$1);

return statearr_21771;
})();
if(inst_21732){
var statearr_21772_21803 = state_21766__$1;
(statearr_21772_21803[(1)] = (5));

} else {
var statearr_21773_21804 = state_21766__$1;
(statearr_21773_21804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (15))){
var inst_21756 = (state_21766[(2)]);
var state_21766__$1 = state_21766;
var statearr_21774_21805 = state_21766__$1;
(statearr_21774_21805[(2)] = inst_21756);

(statearr_21774_21805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (13))){
var state_21766__$1 = state_21766;
var statearr_21775_21806 = state_21766__$1;
(statearr_21775_21806[(2)] = null);

(statearr_21775_21806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (6))){
var inst_21726 = (state_21766[(7)]);
var inst_21751 = inst_21726.length;
var inst_21752 = (inst_21751 > (0));
var state_21766__$1 = state_21766;
if(cljs.core.truth_(inst_21752)){
var statearr_21776_21807 = state_21766__$1;
(statearr_21776_21807[(1)] = (12));

} else {
var statearr_21777_21808 = state_21766__$1;
(statearr_21777_21808[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (3))){
var inst_21764 = (state_21766[(2)]);
var state_21766__$1 = state_21766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21766__$1,inst_21764);
} else {
if((state_val_21767 === (12))){
var inst_21726 = (state_21766[(7)]);
var inst_21754 = cljs.core.vec.call(null,inst_21726);
var state_21766__$1 = state_21766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21766__$1,(15),out,inst_21754);
} else {
if((state_val_21767 === (2))){
var state_21766__$1 = state_21766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21766__$1,(4),ch);
} else {
if((state_val_21767 === (11))){
var inst_21730 = (state_21766[(9)]);
var inst_21734 = (state_21766[(10)]);
var inst_21744 = (state_21766[(2)]);
var inst_21745 = [];
var inst_21746 = inst_21745.push(inst_21730);
var inst_21726 = inst_21745;
var inst_21727 = inst_21734;
var state_21766__$1 = (function (){var statearr_21778 = state_21766;
(statearr_21778[(11)] = inst_21746);

(statearr_21778[(7)] = inst_21726);

(statearr_21778[(12)] = inst_21744);

(statearr_21778[(8)] = inst_21727);

return statearr_21778;
})();
var statearr_21779_21809 = state_21766__$1;
(statearr_21779_21809[(2)] = null);

(statearr_21779_21809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (9))){
var inst_21726 = (state_21766[(7)]);
var inst_21742 = cljs.core.vec.call(null,inst_21726);
var state_21766__$1 = state_21766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21766__$1,(11),out,inst_21742);
} else {
if((state_val_21767 === (5))){
var inst_21730 = (state_21766[(9)]);
var inst_21727 = (state_21766[(8)]);
var inst_21734 = (state_21766[(10)]);
var inst_21734__$1 = f.call(null,inst_21730);
var inst_21735 = cljs.core._EQ_.call(null,inst_21734__$1,inst_21727);
var inst_21736 = cljs.core.keyword_identical_QMARK_.call(null,inst_21727,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21737 = (inst_21735) || (inst_21736);
var state_21766__$1 = (function (){var statearr_21780 = state_21766;
(statearr_21780[(10)] = inst_21734__$1);

return statearr_21780;
})();
if(cljs.core.truth_(inst_21737)){
var statearr_21781_21810 = state_21766__$1;
(statearr_21781_21810[(1)] = (8));

} else {
var statearr_21782_21811 = state_21766__$1;
(statearr_21782_21811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (14))){
var inst_21759 = (state_21766[(2)]);
var inst_21760 = cljs.core.async.close_BANG_.call(null,out);
var state_21766__$1 = (function (){var statearr_21784 = state_21766;
(statearr_21784[(13)] = inst_21759);

return statearr_21784;
})();
var statearr_21785_21812 = state_21766__$1;
(statearr_21785_21812[(2)] = inst_21760);

(statearr_21785_21812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (10))){
var inst_21749 = (state_21766[(2)]);
var state_21766__$1 = state_21766;
var statearr_21786_21813 = state_21766__$1;
(statearr_21786_21813[(2)] = inst_21749);

(statearr_21786_21813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21767 === (8))){
var inst_21730 = (state_21766[(9)]);
var inst_21726 = (state_21766[(7)]);
var inst_21734 = (state_21766[(10)]);
var inst_21739 = inst_21726.push(inst_21730);
var tmp21783 = inst_21726;
var inst_21726__$1 = tmp21783;
var inst_21727 = inst_21734;
var state_21766__$1 = (function (){var statearr_21787 = state_21766;
(statearr_21787[(7)] = inst_21726__$1);

(statearr_21787[(14)] = inst_21739);

(statearr_21787[(8)] = inst_21727);

return statearr_21787;
})();
var statearr_21788_21814 = state_21766__$1;
(statearr_21788_21814[(2)] = null);

(statearr_21788_21814[(1)] = (2));


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
});})(c__19045__auto___21800,out))
;
return ((function (switch__18865__auto__,c__19045__auto___21800,out){
return (function() {
var cljs$core$async$state_machine__18866__auto__ = null;
var cljs$core$async$state_machine__18866__auto____0 = (function (){
var statearr_21792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21792[(0)] = cljs$core$async$state_machine__18866__auto__);

(statearr_21792[(1)] = (1));

return statearr_21792;
});
var cljs$core$async$state_machine__18866__auto____1 = (function (state_21766){
while(true){
var ret_value__18867__auto__ = (function (){try{while(true){
var result__18868__auto__ = switch__18865__auto__.call(null,state_21766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18868__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18868__auto__;
}
break;
}
}catch (e21793){if((e21793 instanceof Object)){
var ex__18869__auto__ = e21793;
var statearr_21794_21815 = state_21766;
(statearr_21794_21815[(5)] = ex__18869__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18867__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21816 = state_21766;
state_21766 = G__21816;
continue;
} else {
return ret_value__18867__auto__;
}
break;
}
});
cljs$core$async$state_machine__18866__auto__ = function(state_21766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18866__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18866__auto____1.call(this,state_21766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18866__auto____0;
cljs$core$async$state_machine__18866__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18866__auto____1;
return cljs$core$async$state_machine__18866__auto__;
})()
;})(switch__18865__auto__,c__19045__auto___21800,out))
})();
var state__19047__auto__ = (function (){var statearr_21795 = f__19046__auto__.call(null);
(statearr_21795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19045__auto___21800);

return statearr_21795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19047__auto__);
});})(c__19045__auto___21800,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1454366811827
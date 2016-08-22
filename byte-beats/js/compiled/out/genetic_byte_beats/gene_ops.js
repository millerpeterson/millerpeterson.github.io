// Compiled by ClojureScript 1.7.170 {}
goog.provide('genetic_byte_beats.gene_ops');
goog.require('cljs.core');
goog.require('clojure.zip');
/**
 * Symbols that are functions that may appear in the formulas.
 */
genetic_byte_beats.gene_ops.gene_fns = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Symbol(null,"bit-or","bit-or",-1144943723,null),null,new cljs.core.Symbol(null,"bit-shift-left","bit-shift-left",-1814765981,null),null,new cljs.core.Symbol(null,"int","int",-100885395,null),null,new cljs.core.Symbol(null,"/","/",-1371932971,null),null,new cljs.core.Symbol("js","Math.tan","js/Math.tan",-258176445,null),null,new cljs.core.Symbol(null,"bit-shift-right","bit-shift-right",884046498,null),null,new cljs.core.Symbol(null,"+","+",-740910886,null),null,new cljs.core.Symbol("js","Math.sin","js/Math.sin",-926120878,null),null,new cljs.core.Symbol(null,"*","*",345799209,null),null,new cljs.core.Symbol(null,"bit-xor","bit-xor",-1334295033,null),null,new cljs.core.Symbol(null,"-","-",-471816912,null),null,new cljs.core.Symbol(null,"bit-and","bit-and",-479352589,null),null,new cljs.core.Symbol(null,"mod","mod",1510044207,null),null], null), null);
/**
 * All valid locations in the operator tree of a given formula.
 */
genetic_byte_beats.gene_ops.op_tree_locs = (function genetic_byte_beats$gene_ops$op_tree_locs(formula){
var zipper = clojure.zip.seq_zip.call(null,formula);
var all_locs = cljs.core.take_while.call(null,cljs.core.complement.call(null,clojure.zip.end_QMARK_),cljs.core.iterate.call(null,clojure.zip.next,zipper));
return cljs.core.filter.call(null,((function (zipper,all_locs){
return (function (p1__18563_SHARP_){
return cljs.core.not.call(null,genetic_byte_beats.gene_ops.gene_fns.call(null,clojure.zip.node.call(null,p1__18563_SHARP_)));
});})(zipper,all_locs))
,all_locs);
});
/**
 * All constants in the operator tree of a given formula.
 */
genetic_byte_beats.gene_ops.constant_locs = (function genetic_byte_beats$gene_ops$constant_locs(formula){
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.number_QMARK_,clojure.zip.node),genetic_byte_beats.gene_ops.op_tree_locs.call(null,formula));
});
/**
 * All sub-trees in the operator tree of a given formula.
 */
genetic_byte_beats.gene_ops.list_locs = (function genetic_byte_beats$gene_ops$list_locs(formula){
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.list_QMARK_,clojure.zip.node),genetic_byte_beats.gene_ops.op_tree_locs.call(null,formula));
});
/**
 * Replace a formula branch rooted at l with a formula branch rooted at r.
 */
genetic_byte_beats.gene_ops.replace_branch = (function genetic_byte_beats$gene_ops$replace_branch(l,r){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,l,clojure.zip.node.call(null,r)));
});
/**
 * Randomly modify a random number in a formula up to a max percent.
 */
genetic_byte_beats.gene_ops.mutate_perturb = (function genetic_byte_beats$gene_ops$mutate_perturb(formula){
return clojure.zip.root.call(null,clojure.zip.edit.call(null,cljs.core.rand_nth.call(null,genetic_byte_beats.gene_ops.constant_locs.call(null,formula)),(function (){
return cljs.core.rand_int.call(null,(100));
})));
});
/**
 * A random AST node that is a function of a formula node.
 */
genetic_byte_beats.gene_ops.rand_opped_node = (function genetic_byte_beats$gene_ops$rand_opped_node(node){
var rand_val = cljs.core.rand_int.call(null,(100));
return cljs.core.rand_nth.call(null,cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-shift-right","bit-shift-right",884046498,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"t","t",242699008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-shift-right","bit-shift-right",884046498,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node),cljs.core._conj.call(null,cljs.core.List.EMPTY,rand_val)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-shift-left","bit-shift-left",-1814765981,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"t","t",242699008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-shift-left","bit-shift-left",-1814765981,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node),cljs.core._conj.call(null,cljs.core.List.EMPTY,rand_val)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*","*",345799209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"t","t",242699008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*","*",345799209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node),cljs.core._conj.call(null,cljs.core.List.EMPTY,rand_val)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"t","t",242699008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node),cljs.core._conj.call(null,cljs.core.List.EMPTY,rand_val)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-or","bit-or",-1144943723,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"t","t",242699008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-or","bit-or",-1144943723,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"t","t",242699008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,rand_val)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-xor","bit-xor",-1334295033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"t","t",242699008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-xor","bit-xor",-1334295033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node),cljs.core._conj.call(null,cljs.core.List.EMPTY,rand_val)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-and","bit-and",-479352589,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"t","t",242699008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-and","bit-and",-479352589,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node),cljs.core._conj.call(null,cljs.core.List.EMPTY,rand_val)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Math.sin","js/Math.sin",-926120878,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node)))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Math.tan","js/Math.tan",-258176445,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,node))))], null)));
});
/**
 * Mutate a formula by randomly replace one of its sub-trees with a
 * function involving that subtree and t.
 */
genetic_byte_beats.gene_ops.mutate_complexify = (function genetic_byte_beats$gene_ops$mutate_complexify(formula){
var target_node = cljs.core.rand_nth.call(null,genetic_byte_beats.gene_ops.op_tree_locs.call(null,formula));
return clojure.zip.root.call(null,clojure.zip.edit.call(null,target_node,genetic_byte_beats.gene_ops.rand_opped_node));
});
/**
 * Mutate a formula by randomly replace one of its sub-trees with a
 * constant.
 */
genetic_byte_beats.gene_ops.mutate_simplify = (function genetic_byte_beats$gene_ops$mutate_simplify(formula){
var target_node = cljs.core.rand_nth.call(null,genetic_byte_beats.gene_ops.list_locs.call(null,formula));
return clojure.zip.root.call(null,clojure.zip.edit.call(null,target_node,((function (target_node){
return (function (){
return cljs.core.rand_int.call(null,(100));
});})(target_node))
));
});
/**
 * Return a breed two formula, switching a random branch in l
 * with a random branch in r.
 */
genetic_byte_beats.gene_ops.crossover = (function genetic_byte_beats$gene_ops$crossover(l_form,r_form){
var l = cljs.core.rand_nth.call(null,genetic_byte_beats.gene_ops.op_tree_locs.call(null,l_form));
var r = cljs.core.rand_nth.call(null,genetic_byte_beats.gene_ops.op_tree_locs.call(null,r_form));
return genetic_byte_beats.gene_ops.replace_branch.call(null,l,r);
});
/**
 * Return a child formula resulting from crossing over two randomly chosen
 * formula from forms, then mutating it.
 */
genetic_byte_beats.gene_ops.random_child = (function genetic_byte_beats$gene_ops$random_child(forms){
return genetic_byte_beats.gene_ops.mutate_perturb.call(null,genetic_byte_beats.gene_ops.crossover.call(null,cljs.core.rand_nth.call(null,forms),cljs.core.rand_nth.call(null,forms)));
});

//# sourceMappingURL=gene_ops.js.map?rel=1466538815074
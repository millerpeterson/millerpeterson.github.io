// Compiled by ClojureScript 1.7.170 {}
goog.provide('genetic_byte_beats.parsing');
goog.require('cljs.core');
goog.require('instaparse.core');
genetic_byte_beats.parsing.parser = instaparse.core.parser.call(null,"expr          = bitwise-or\n     <bitwise-or>  = bitwise-xor | bit-or\n     bit-or        = bitwise-or <'|'> bitwise-xor\n     <bitwise-xor> = bitwise-and | bit-xor\n     bit-xor       = bitwise-xor <'^'> bitwise-and\n     <bitwise-and> = bit-shift | bit-and\n     bit-and       = bitwise-and <'&'> bit-shift\n     <bit-shift>   = add-sub | shift-left | shift-right\n     shift-left    = bit-shift <'<<'> add-sub\n     shift-right   = bit-shift <'>>'> add-sub\n     <add-sub>     = mult-div | add | sub\n     add           = add-sub <'+'> mult-div\n     sub           = add-sub <'-'> mult-div\n     <mult-div>    = term | mult | div | mod\n     mult          = mult-div <'*'> term\n     div           = mult-div <'/'> term\n     mod           = mult-div <'%'> term\n     int-cast      = <'(int)('> bitwise-or <')'>\n     sin           = <'sin('> bitwise-or <')'>\n     tan           = <'tan('> bitwise-or <')'>\n     <term>        = number | variable | <'('> bitwise-or <')'> | int-cast | sin | tan\n     variable      = 't'\n     <number>      = floating | integer | hex\n     floating      = #'-{0,1}\\d+\\.\\d+'\n     integer       = #'-{0,1}\\d+'\n     hex           = #'-{0,1}0x(\\d|[a-f]|[A-F])+'");
/**
 * Return the AST from the parsed form of a byte beat formula.
 */
genetic_byte_beats.parsing.ast_from_parsed = (function genetic_byte_beats$parsing$ast_from_parsed(parsed_form){
return instaparse.core.transform.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bit-xor","bit-xor",1320140736),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.Keyword(null,"shift-left","shift-left",2078382598),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"int-cast","int-cast",-590548760),new cljs.core.Keyword(null,"mod","mod",-130487320),new cljs.core.Keyword(null,"floating","floating",-1978091029),new cljs.core.Keyword(null,"bit-and","bit-and",-2119884116),new cljs.core.Keyword(null,"bit-or","bit-or",1509492046),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"hex","hex",41691346),new cljs.core.Keyword(null,"integer","integer",-604721710),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"sin","sin",80907862),new cljs.core.Keyword(null,"mult","mult",1466794774),new cljs.core.Keyword(null,"add","add",235287739),new cljs.core.Keyword(null,"shift-right","shift-right",-1763968097)],[(function (x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-xor","bit-xor",-1334295033,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x),cljs.core._conj.call(null,cljs.core.List.EMPTY,y))));
}),cljs.core.symbol,(function (x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Math.tan","js/Math.tan",-258176445,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x))));
}),(function (x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-shift-left","bit-shift-left",-1814765981,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x),cljs.core._conj.call(null,cljs.core.List.EMPTY,y))));
}),(function (x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-","-",-471816912,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x),cljs.core._conj.call(null,cljs.core.List.EMPTY,y))));
}),(function (x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"int","int",-100885395,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x))));
}),(function (x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"mod","mod",1510044207,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x),cljs.core._conj.call(null,cljs.core.List.EMPTY,y))));
}),parseFloat,(function (x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-and","bit-and",-479352589,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x),cljs.core._conj.call(null,cljs.core.List.EMPTY,y))));
}),(function (x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-or","bit-or",-1144943723,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x),cljs.core._conj.call(null,cljs.core.List.EMPTY,y))));
}),(function (x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"/","/",-1371932971,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x),cljs.core._conj.call(null,cljs.core.List.EMPTY,y))));
}),parseInt,parseInt,cljs.core.identity,(function (x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Math.sin","js/Math.sin",-926120878,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x))));
}),(function (x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*","*",345799209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x),cljs.core._conj.call(null,cljs.core.List.EMPTY,y))));
}),(function (x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"+","+",-740910886,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x),cljs.core._conj.call(null,cljs.core.List.EMPTY,y))));
}),(function (x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"bit-shift-right","bit-shift-right",884046498,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x),cljs.core._conj.call(null,cljs.core.List.EMPTY,y))));
})]),parsed_form);
});
/**
 * Return the formula AST from a string representation of a byte
 *   beat formula.
 */
genetic_byte_beats.parsing.ast_from_string = (function genetic_byte_beats$parsing$ast_from_string(form_str){
return genetic_byte_beats.parsing.ast_from_parsed.call(null,genetic_byte_beats.parsing.parser.call(null,clojure.string.replace.call(null,form_str," ","")));
});
genetic_byte_beats.parsing.op_string_output_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"bit-or","bit-or",-1144943723,null),new cljs.core.Symbol(null,"bit-shift-left","bit-shift-left",-1814765981,null),new cljs.core.Symbol(null,"int","int",-100885395,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol("js","Math.tan","js/Math.tan",-258176445,null),new cljs.core.Symbol(null,"bit-shift-right","bit-shift-right",884046498,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol("js","Math.sin","js/Math.sin",-926120878,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"bit-xor","bit-xor",-1334295033,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"bit-and","bit-and",-479352589,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null)],["|","<<","(int)","/","tan",">>","+","sin","*","^","-","&","%"]);
/**
 * Return the string representation from the AST of a byte
 *   beat formula.
 */
genetic_byte_beats.parsing.string_from_ast = (function genetic_byte_beats$parsing$string_from_ast(ast){
if(cljs.core._EQ_.call(null,cljs.core.List.EMPTY,ast)){
return "()";
} else {
if((cljs.core.seq_QMARK_.call(null,ast)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,ast),(1)))){
return genetic_byte_beats$parsing$string_from_ast.call(null,cljs.core.first.call(null,ast));
} else {
if((cljs.core.seq_QMARK_.call(null,ast)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,ast),(2)))){
return [cljs.core.str(genetic_byte_beats.parsing.op_string_output_map.call(null,cljs.core.first.call(null,ast))),cljs.core.str("("),cljs.core.str(genetic_byte_beats$parsing$string_from_ast.call(null,cljs.core.second.call(null,ast))),cljs.core.str(")")].join('');
} else {
if((cljs.core.seq_QMARK_.call(null,ast)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,ast),(3)))){
return [cljs.core.str("("),cljs.core.str(genetic_byte_beats$parsing$string_from_ast.call(null,cljs.core.second.call(null,ast))),cljs.core.str(" "),cljs.core.str(genetic_byte_beats.parsing.op_string_output_map.call(null,cljs.core.first.call(null,ast))),cljs.core.str(" "),cljs.core.str(genetic_byte_beats$parsing$string_from_ast.call(null,cljs.core.nth.call(null,ast,(2)))),cljs.core.str(")")].join('');
} else {
return [cljs.core.str(ast)].join('');

}
}
}
}
});

//# sourceMappingURL=parsing.js.map
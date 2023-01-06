/*
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */class c{constructor(e,t=""){this.source=e.source,this.flags=t}setGroup(e,t){let n=typeof t=="string"?t:t.source;return n=n.replace(/(^|[^\[])\^/g,"$1"),this.source=this.source.replace(e,n),this}getRegexp(){return new RegExp(this.source,this.flags)}}/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */const S=/[&<>"']/,G=/[&<>"']/g,w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},L=/[<>"']|&(?!#?\w+;)/,E=/[<>"']|&(?!#?\w+;)/g;function y(r,e){if(e){if(S.test(r))return r.replace(G,t=>w[t])}else if(L.test(r))return r.replace(E,t=>w[t]);return r}function B(r){return r.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}/**
 * @license
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */var o;(function(r){r[r.space=1]="space",r[r.text=2]="text",r[r.paragraph=3]="paragraph",r[r.heading=4]="heading",r[r.listStart=5]="listStart",r[r.listEnd=6]="listEnd",r[r.looseItemStart=7]="looseItemStart",r[r.looseItemEnd=8]="looseItemEnd",r[r.listItemStart=9]="listItemStart",r[r.listItemEnd=10]="listItemEnd",r[r.blockquoteStart=11]="blockquoteStart",r[r.blockquoteEnd=12]="blockquoteEnd",r[r.code=13]="code",r[r.table=14]="table",r[r.html=15]="html",r[r.hr=16]="hr"})(o||(o={}));class _{constructor(){this.gfm=!0,this.tables=!0,this.breaks=!1,this.pedantic=!1,this.sanitize=!1,this.mangle=!0,this.smartLists=!1,this.silent=!1,this.langPrefix="lang-",this.smartypants=!1,this.headerPrefix="",this.xhtml=!1,this.escape=y,this.unescape=B}}/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */class ${constructor(e){this.options=e||b.options}code(e,t,n,s){if(this.options.highlight){const u=this.options.highlight(e,t);u!=null&&u!==e&&(n=!0,e=u)}const i=n?e:this.options.escape(e,!0);return t?`
<pre><code class="${this.options.langPrefix+this.options.escape(t,!0)}">${i}
</code></pre>
`:`
<pre><code>${i}
</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,n){const s=this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-");return`<h${t} id="${s}">${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t){const n=t?"ol":"ul";return`
<${n}>
${e}</${n}>
`}listitem(e){return"<li>"+e+`</li>
`}paragraph(e){return"<p>"+e+`</p>
`}table(e,t){return`
<table>
<thead>
${e}</thead>
<tbody>
${t}</tbody>
</table>
`}tablerow(e){return`<tr>
`+e+`</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+`>
`}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(this.options.sanitize){let i;try{i=decodeURIComponent(this.options.unescape(e)).replace(/[^\w:]/g,"").toLowerCase()}catch{return n}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return n}let s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){let s='<img src="'+e+'" alt="'+n+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">",s}text(e){return e}}/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */class g{constructor(e,t,n=b.options,s){if(this.staticThis=e,this.links=t,this.options=n,this.renderer=s||this.options.renderer||new $(this.options),!this.links)throw new Error("InlineLexer requires 'links' parameter.");this.setRules()}static output(e,t,n){return new this(this,t,n).output(e)}static getRulesBase(){if(this.rulesBase)return this.rulesBase;const e={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ <>]+(@|:\/)[^ <>]+)>/,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^<'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)([\s\S]*?[^`])\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/,_inside:/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,_href:/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/};return e.link=new c(e.link).setGroup("inside",e._inside).setGroup("href",e._href).getRegexp(),e.reflink=new c(e.reflink).setGroup("inside",e._inside).getRegexp(),this.rulesBase=e}static getRulesPedantic(){return this.rulesPedantic?this.rulesPedantic:this.rulesPedantic=Object.assign(Object.assign({},this.getRulesBase()),{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/})}static getRulesGfm(){if(this.rulesGfm)return this.rulesGfm;const e=this.getRulesBase(),t=new c(e.escape).setGroup("])","~|])").getRegexp(),n=new c(e.text).setGroup("]|","~]|").setGroup("|","|https?://|").getRegexp();return this.rulesGfm=Object.assign(Object.assign({},e),{escape:t,url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:n})}static getRulesBreaks(){if(this.rulesBreaks)return this.rulesBreaks;const e=this.getRulesGfm(),t=this.getRulesGfm();return this.rulesBreaks=Object.assign(Object.assign({},t),{br:new c(e.br).setGroup("{2,}","*").getRegexp(),text:new c(t.text).setGroup("{2,}","*").getRegexp()})}setRules(){this.options.gfm?this.options.breaks?this.rules=this.staticThis.getRulesBreaks():this.rules=this.staticThis.getRulesGfm():this.options.pedantic?this.rules=this.staticThis.getRulesPedantic():this.rules=this.staticThis.getRulesBase(),this.hasRulesGfm=this.rules.url!==void 0}output(e){e=e;let t,n="";for(;e;){if(t=this.rules.escape.exec(e)){e=e.substring(t[0].length),n+=t[1];continue}if(t=this.rules.autolink.exec(e)){let s,i;e=e.substring(t[0].length),t[2]==="@"?(s=this.options.escape(t[1].charAt(6)===":"?this.mangle(t[1].substring(7)):this.mangle(t[1])),i=this.mangle("mailto:")+s):(s=this.options.escape(t[1]),i=s),n+=this.renderer.link(i,null,s);continue}if(!this.inLink&&this.hasRulesGfm&&(t=this.rules.url.exec(e))){let s,i;e=e.substring(t[0].length),s=this.options.escape(t[1]),i=s,n+=this.renderer.link(i,null,s);continue}if(t=this.rules.tag.exec(e)){!this.inLink&&/^<a /i.test(t[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(t[0])&&(this.inLink=!1),e=e.substring(t[0].length),n+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):this.options.escape(t[0]):t[0];continue}if(t=this.rules.link.exec(e)){e=e.substring(t[0].length),this.inLink=!0,n+=this.outputLink(t,{href:t[2],title:t[3]}),this.inLink=!1;continue}if((t=this.rules.reflink.exec(e))||(t=this.rules.nolink.exec(e))){e=e.substring(t[0].length);const s=(t[2]||t[1]).replace(/\s+/g," "),i=this.links[s.toLowerCase()];if(!i||!i.href){n+=t[0].charAt(0),e=t[0].substring(1)+e;continue}this.inLink=!0,n+=this.outputLink(t,i),this.inLink=!1;continue}if(t=this.rules.strong.exec(e)){e=e.substring(t[0].length),n+=this.renderer.strong(this.output(t[2]||t[1]));continue}if(t=this.rules.em.exec(e)){e=e.substring(t[0].length),n+=this.renderer.em(this.output(t[2]||t[1]));continue}if(t=this.rules.code.exec(e)){e=e.substring(t[0].length),n+=this.renderer.codespan(this.options.escape(t[2].trim(),!0));continue}if(t=this.rules.br.exec(e)){e=e.substring(t[0].length),n+=this.renderer.br();continue}if(this.hasRulesGfm&&(t=this.rules.del.exec(e))){e=e.substring(t[0].length),n+=this.renderer.del(this.output(t[1]));continue}if(t=this.rules.text.exec(e)){e=e.substring(t[0].length),n+=this.renderer.text(this.options.escape(this.smartypants(t[0])));continue}if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}return n}outputLink(e,t){const n=this.options.escape(t.href),s=t.title?this.options.escape(t.title):null;return e[0].charAt(0)!=="!"?this.renderer.link(n,s,this.output(e[1])):this.renderer.image(n,s,this.options.escape(e[1]))}smartypants(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e}mangle(e){if(!this.options.mangle)return e;let t="";const n=e.length;for(let s=0;s<n;s++){let i;Math.random()>.5&&(i="x"+e.charCodeAt(s).toString(16)),t+="&#"+i+";"}return t}}g.rulesBase=null;g.rulesPedantic=null;g.rulesGfm=null;g.rulesBreaks=null;/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */class R{constructor(e){this.simpleRenderers=[],this.line=0,this.tokens=[],this.token=null,this.options=e||b.options,this.renderer=this.options.renderer||new $(this.options)}static parse(e,t,n){return new this(n).parse(t,e)}parse(e,t){this.inlineLexer=new g(g,e,this.options,this.renderer),this.tokens=t.reverse();let n="";for(;this.next();)n+=this.tok();return n}debug(e,t){this.inlineLexer=new g(g,e,this.options,this.renderer),this.tokens=t.reverse();let n="";for(;this.next();){const s=this.tok();this.token.line=this.line+=s.split(`
`).length-1,n+=s}return n}next(){return this.token=this.tokens.pop()}getNextElement(){return this.tokens[this.tokens.length-1]}parseText(){let e=this.token.text,t;for(;(t=this.getNextElement())&&t.type==o.text;)e+=`
`+this.next().text;return this.inlineLexer.output(e)}tok(){switch(this.token.type){case o.space:return"";case o.paragraph:return this.renderer.paragraph(this.inlineLexer.output(this.token.text));case o.text:return this.options.isNoP?this.parseText():this.renderer.paragraph(this.parseText());case o.heading:return this.renderer.heading(this.inlineLexer.output(this.token.text),this.token.depth,this.token.text);case o.listStart:{let e="";const t=this.token.ordered;for(;this.next().type!=o.listEnd;)e+=this.tok();return this.renderer.list(e,t)}case o.listItemStart:{let e="";for(;this.next().type!=o.listItemEnd;)e+=this.token.type==o.text?this.parseText():this.tok();return this.renderer.listitem(e)}case o.looseItemStart:{let e="";for(;this.next().type!=o.listItemEnd;)e+=this.tok();return this.renderer.listitem(e)}case o.code:return this.renderer.code(this.token.text,this.token.lang,this.token.escaped,this.token.meta);case o.table:{let e="",t="",n;n="";for(let s=0;s<this.token.header.length;s++){const i={header:!0,align:this.token.align[s]},l=this.inlineLexer.output(this.token.header[s]);n+=this.renderer.tablecell(l,i)}e+=this.renderer.tablerow(n);for(const s of this.token.cells){n="";for(let i=0;i<s.length;i++)n+=this.renderer.tablecell(this.inlineLexer.output(s[i]),{header:!1,align:this.token.align[i]});t+=this.renderer.tablerow(n)}return this.renderer.table(e,t)}case o.blockquoteStart:{let e="";for(;this.next().type!=o.blockquoteEnd;)e+=this.tok();return this.renderer.blockquote(e)}case o.hr:return this.renderer.hr();case o.html:{const e=!this.token.pre&&!this.options.pedantic?this.inlineLexer.output(this.token.text):this.token.text;return this.renderer.html(e)}default:{if(this.simpleRenderers.length){for(let t=0;t<this.simpleRenderers.length;t++)if(this.token.type=="simpleRule"+(t+1))return this.simpleRenderers[t].call(this.renderer,this.token.execArr)}const e=`Token with "${this.token.type}" type was not found.`;if(this.options.silent)console.log(e);else throw new Error(e)}}}}/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */class b{static setOptions(e){return Object.assign(this.options,e),this}static setBlockRule(e,t=()=>""){return f.simpleRules.push(e),this.simpleRenderers.push(t),this}static parse(e,t=this.options){try{const{tokens:n,links:s}=this.callBlockLexer(e,t);return this.callParser(n,s,t)}catch(n){return this.callMe(n)}}static debug(e,t=this.options){const{tokens:n,links:s}=this.callBlockLexer(e,t);let i=n.slice();const l=new R(t);l.simpleRenderers=this.simpleRenderers;const u=l.debug(s,n);return i=i.map(h=>{h.type=o[h.type]||h.type;const d=h.line;return delete h.line,d?Object.assign({line:d},h):h}),{tokens:i,links:s,result:u}}static callBlockLexer(e="",t){if(typeof e!="string")throw new Error(`Expected that the 'src' parameter would have a 'string' type, got '${typeof e}'`);return e=e.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,`
`).replace(/^ +$/gm,""),f.lex(e,t,!0)}static callParser(e,t,n){if(this.simpleRenderers.length){const s=new R(n);return s.simpleRenderers=this.simpleRenderers,s.parse(t,e)}else return R.parse(e,t,n)}static callMe(e){if(e.message+=`
Please report this to https://github.com/ts-stack/markdown`,this.options.silent)return"<p>An error occured:</p><pre>"+this.options.escape(e.message+"",!0)+"</pre>";throw e}}b.options=new _;b.simpleRenderers=[];/**
 * @license
 *
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 *
 * Copyright (c) 2018-2021, Костя Третяк. (MIT Licensed)
 * https://github.com/ts-stack/markdown
 */class f{constructor(e,t){this.staticThis=e,this.links={},this.tokens=[],this.options=t||b.options,this.setRules()}static lex(e,t,n,s){return new this(this,t).getTokens(e,n,s)}static getRulesBase(){if(this.rulesBase)return this.rulesBase;const e={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/,bullet:/(?:[*+-]|\d+\.)/,item:/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/};e.item=new c(e.item,"gm").setGroup(/bull/g,e.bullet).getRegexp(),e.list=new c(e.list).setGroup(/bull/g,e.bullet).setGroup("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))").setGroup("def","\\n+(?="+e.def.source+")").getRegexp();const t="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";return e.html=new c(e.html).setGroup("comment",/<!--[\s\S]*?-->/).setGroup("closed",/<(tag)[\s\S]+?<\/\1>/).setGroup("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/).setGroup(/tag/g,t).getRegexp(),e.paragraph=new c(e.paragraph).setGroup("hr",e.hr).setGroup("heading",e.heading).setGroup("lheading",e.lheading).setGroup("blockquote",e.blockquote).setGroup("tag","<"+t).setGroup("def",e.def).getRegexp(),this.rulesBase=e}static getRulesGfm(){if(this.rulesGfm)return this.rulesGfm;const e=this.getRulesBase(),t=Object.assign(Object.assign({},e),{fences:/^ *(`{3,}|~{3,})[ \.]*((\S+)? *[^\n]*)\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n=t.fences.source.replace("\\1","\\2"),s=e.list.source.replace("\\1","\\3");return t.paragraph=new c(e.paragraph).setGroup("(?!",`(?!${n}|${s}|`).getRegexp(),this.rulesGfm=t}static getRulesTable(){return this.rulesTables?this.rulesTables:this.rulesTables=Object.assign(Object.assign({},this.getRulesGfm()),{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/})}setRules(){this.options.gfm?this.options.tables?this.rules=this.staticThis.getRulesTable():this.rules=this.staticThis.getRulesGfm():this.rules=this.staticThis.getRulesBase(),this.hasRulesGfm=this.rules.fences!==void 0,this.hasRulesTables=this.rules.table!==void 0}getTokens(e,t,n){let s=e,i;e:for(;s;){if((i=this.rules.newline.exec(s))&&(s=s.substring(i[0].length),i[0].length>1&&this.tokens.push({type:o.space})),i=this.rules.code.exec(s)){s=s.substring(i[0].length);const l=i[0].replace(/^ {4}/gm,"");this.tokens.push({type:o.code,text:this.options.pedantic?l:l.replace(/\n+$/,"")});continue}if(this.hasRulesGfm&&(i=this.rules.fences.exec(s))){s=s.substring(i[0].length),this.tokens.push({type:o.code,meta:i[2],lang:i[3],text:i[4]||""});continue}if(i=this.rules.heading.exec(s)){s=s.substring(i[0].length),this.tokens.push({type:o.heading,depth:i[1].length,text:i[2]});continue}if(t&&this.hasRulesTables&&(i=this.rules.nptable.exec(s))){s=s.substring(i[0].length);const l={type:o.table,header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:[]};for(let h=0;h<l.align.length;h++)/^ *-+: *$/.test(l.align[h])?l.align[h]="right":/^ *:-+: *$/.test(l.align[h])?l.align[h]="center":/^ *:-+ *$/.test(l.align[h])?l.align[h]="left":l.align[h]=null;const u=i[3].replace(/\n$/,"").split(`
`);for(let h=0;h<u.length;h++)l.cells[h]=u[h].split(/ *\| */);this.tokens.push(l);continue}if(i=this.rules.lheading.exec(s)){s=s.substring(i[0].length),this.tokens.push({type:o.heading,depth:i[2]==="="?1:2,text:i[1]});continue}if(i=this.rules.hr.exec(s)){s=s.substring(i[0].length),this.tokens.push({type:o.hr});continue}if(i=this.rules.blockquote.exec(s)){s=s.substring(i[0].length),this.tokens.push({type:o.blockquoteStart});const l=i[0].replace(/^ *> ?/gm,"");this.getTokens(l),this.tokens.push({type:o.blockquoteEnd});continue}if(i=this.rules.list.exec(s)){s=s.substring(i[0].length);const l=i[2];this.tokens.push({type:o.listStart,ordered:l.length>1});const u=i[0].match(this.rules.item),h=u.length;let d=!1,k,x,m;for(let p=0;p<h;p++){let a=u[p];k=a.length,a=a.replace(/^ *([*+-]|\d+\.) +/,""),a.indexOf(`
 `)!==-1&&(k-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+k+"}","gm"),"")),this.options.smartLists&&p!==h-1&&(x=this.staticThis.getRulesBase().bullet.exec(u[p+1])[0],l!==x&&!(l.length>1&&x.length>1)&&(s=u.slice(p+1).join(`
`)+s,p=h-1)),m=d||/\n\n(?!\s*$)/.test(a),p!==h-1&&(d=a.charAt(a.length-1)===`
`,m||(m=d)),this.tokens.push({type:m?o.looseItemStart:o.listItemStart}),this.getTokens(a,!1,n),this.tokens.push({type:o.listItemEnd})}this.tokens.push({type:o.listEnd});continue}if(i=this.rules.html.exec(s)){s=s.substring(i[0].length);const l=i[1],u=l==="pre"||l==="script"||l==="style";this.tokens.push({type:this.options.sanitize?o.paragraph:o.html,pre:!this.options.sanitizer&&u,text:i[0]});continue}if(t&&(i=this.rules.def.exec(s))){s=s.substring(i[0].length),this.links[i[1].toLowerCase()]={href:i[2],title:i[3]};continue}if(t&&this.hasRulesTables&&(i=this.rules.table.exec(s))){s=s.substring(i[0].length);const l={type:o.table,header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:[]};for(let h=0;h<l.align.length;h++)/^ *-+: *$/.test(l.align[h])?l.align[h]="right":/^ *:-+: *$/.test(l.align[h])?l.align[h]="center":/^ *:-+ *$/.test(l.align[h])?l.align[h]="left":l.align[h]=null;const u=i[3].replace(/(?: *\| *)?\n$/,"").split(`
`);for(let h=0;h<u.length;h++)l.cells[h]=u[h].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(l);continue}if(this.staticThis.simpleRules.length){const l=this.staticThis.simpleRules;for(let u=0;u<l.length;u++)if(i=l[u].exec(s)){s=s.substring(i[0].length);const h="simpleRule"+(u+1);this.tokens.push({type:h,execArr:i});continue e}}if(t&&(i=this.rules.paragraph.exec(s))){s=s.substring(i[0].length),i[1].slice(-1)===`
`?this.tokens.push({type:o.paragraph,text:i[1].slice(0,-1)}):this.tokens.push({type:this.tokens.length>0?o.paragraph:o.text,text:i[1]});continue}if(i=this.rules.text.exec(s)){s=s.substring(i[0].length),this.tokens.push({type:o.text,text:i[0]});continue}if(s)throw new Error("Infinite loop on byte: "+s.charCodeAt(0)+`, near text '${s.slice(0,30)}...'`)}return{tokens:this.tokens,links:this.links}}}f.simpleRules=[];f.rulesBase=null;f.rulesGfm=null;f.rulesTables=null;export{b as M};

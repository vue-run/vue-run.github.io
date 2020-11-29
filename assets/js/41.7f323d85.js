(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{283:function(t,s,a){t.exports=a.p+"assets/img/editorconfig.1fc8005f.png"},363:function(t,s,a){"use strict";a.r(s);var e=a(30),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"editorconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#editorconfig"}},[t._v("#")]),t._v(" editorconfig")]),t._v(" "),e("p",[e("img",{attrs:{src:a(283),alt:"editorconfig"}})]),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#概述"}},[t._v("概述")])]),e("li",[e("a",{attrs:{href:"#安装"}},[t._v("安装")])]),e("li",[e("a",{attrs:{href:"#资料"}},[t._v("资料")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("p",[t._v("当多人共同开发一个项目的时候，往往会出现大家用不同编辑器的情况。就前端开发者来说，有人喜欢 "),e("em",[t._v("Sublime")]),t._v("，有人喜欢 "),e("em",[t._v("Webstorm")]),t._v(" , 也有人喜欢 "),e("em",[t._v("Atom")]),t._v("，还有人喜欢 "),e("em",[t._v("Vim")]),t._v("，"),e("em",[t._v("HBuilder")]),t._v(" 等等。各种不同编程语言的开发者喜欢各种不同的编辑器。\n问题来了，如何让使用不同编辑器的开发者在共同开发一个项目时“无痛”地遵循编码规范?")]),t._v(" "),e("p",[t._v("先抛一个场景:")]),t._v(" "),e("blockquote",[e("p",[t._v("如果某开发者如果在同时开发两个项目，不幸的是，这两个项目的编码规范有冲突（比如，一个是缩进两个空格，另一个是缩进四个空格）怎么办？还有，如果该项目的某些编码规范编辑器设置不支持（比如，对 JS 文件要缩进两个空格；对 CSS 文件要缩进四个空格）怎么办？还有，不同编辑器设置各不相同等等。")])]),t._v(" "),e("p",[t._v("我们可以粗暴的理解"),e("code",[t._v(".editorconfig")]),t._v("类似一份抹平各个不同浏览器下兼容性差异的"),e("code",[t._v("reset.css")]),t._v("文件。")]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("p",[t._v("首先在根目录创建一份名为"),e("code",[t._v(".editorconfig")]),t._v("的文件，内容如下：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("root "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#表明是最顶层的配置文件，发现设为true时，才会停止查找.editorconfig文件")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对所有文件生效")]),t._v("\ncharset "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" utf-8\nindent_style "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" space "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#tab为hard-tabs，space为soft-tabs")]),t._v("\nindent_size "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置整数表示规定每级缩进的列数和soft-tabs的宽度")]),t._v("\nend_of_line "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lf "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#定义换行符，支持lf、cr和crlf")]),t._v("\ninsert_final_newline "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设为true表明使文件以一个空白行结尾，false反之")]),t._v("\ntrim_trailing_whitespace "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设为true表示会除去换行行首的任意空白字符，false反之")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仅对后缀名为 md 的文件生效")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*.md"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ntrim_trailing_whitespace "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("安装与编辑器对应的 EditorConfig 插件。")]),t._v(" "),e("p",[t._v("当你在编码时，此插件会去查找当前编辑文件的所在文件夹或其上级文件夹中是否有 "),e("code",[t._v(".editorconfig")]),t._v("文件。如果有，则编辑器的行为会与 "),e("code",[t._v(".editorconfig")]),t._v(" 文件中定义的一致，并且其"),e("strong",[t._v("优先级高于编辑器自身的设置")]),t._v("。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/kpengWang/Blog-images-storage/blob/master/2018-08-17/2.png?raw=true",alt:"editorConfig for VsCode"}})])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资料"}},[t._v("#")]),t._v(" 资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.im/post/5ad05a085188257cc20db392",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端综合能力系列之 EditorConfig"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties",target:"_blank",rel:"noopener noreferrer"}},[t._v("editorconfig 文档"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.jianshu.com/p/fac7dde906cc",target:"_blank",rel:"noopener noreferrer"}},[t._v("不起眼的 .editorconfig"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);
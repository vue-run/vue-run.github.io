(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{281:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"目录介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录介绍"}},[s._v("#")]),s._v(" 目录介绍")]),s._v(" "),a("p",[s._v("这里主要是项目目录文件说明。")]),s._v(" "),a("div",{staticClass:"language-$ line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("📦run-admin-torrent\n ┣ 📂build                    -------- 构建相关\n ┃ ┣ 📜webpack.base.conf.js   -------- webpack公共配置\n ┃ ┣ 📜webpack.dev.conf.js    -------- webpack开发环境配置\n ┃ ┗ 📜webpack.prod.conf.js   -------- webpack生产环境配置\n ┣ 📂public                   -------- 纯静态资源(不会被webpack处理)\n ┃ ┣ 📜favicon.ico\n ┃ ┗ 📜index.html\n ┣ 📂src\n ┃ ┣ 📂api                    -------- 接口以及请求管理目录\n ┃ ┃ ┣ 📂modules\n ┃ ┃ ┣ 📜config.js\n ┃ ┃ ┣ 📜index.js\n ┃ ┃ ┗ 📜request.js           -------- AJAX请求封装\n ┃ ┣ 📂assets                 -------- 图片样式等静态资源文件\n ┃ ┃ ┣ 📂image\n ┃ ┃ ┣ 📂icons\n ┃ ┃ ┣ 📂js\n ┃ ┃ ┃ ┗ 📜staticData.js      -------- 前端定义的静态常量数据\n ┃ ┃ ┗ 📂stylus\n ┃ ┃ ┃ ┣ 📂base\n ┃ ┃ ┃ ┃ ┣ 📜border.styl      -------- 移动端1像素边框\n ┃ ┃ ┃ ┃ ┣ 📜global.styl      -------- 公共全局样式\n ┃ ┃ ┃ ┃ ┣ 📜iconfont.styl    -------- base64字体样式\n ┃ ┃ ┃ ┃ ┗ 📜transition.styl  -------- 动画相关\n ┃ ┃ ┃ ┣ 📜index.styl         -------- 出口文件\n ┃ ┃ ┃ ┣ 📜mixin.styl         -------- 常用的css方法函数\n ┃ ┃ ┃ ┗ 📜variable.styl      -------- 约定变量\n ┃ ┣ 📂base                   -------- 基础组件，保持与业务无关联\n ┃ ┃ ┣ 📂Breadcrumb\n ┃ ┃ ┃ ┗ 📜index.vue\n ┃ ┃ ┗ 📜register.js          -------- 全局自执行注册组件脚本\n ┃ ┣ 📂components             -------- 业务组件\n ┃ ┃ ┗ 📂EnvSelect\n ┃ ┃ ┃ ┗ 📜index.vue\n ┃ ┣ 📂directives             -------- 全局指令\n ┃ ┃ ┗ 📜index.js\n ┃ ┣ 📂filter                 -------- 全局筛选器\n ┃ ┃ ┗ 📜index.js\n ┃ ┣ 📂lang                   -------- 国际化语言\n ┃ ┃ ┣ 📜en.js\n ┃ ┃ ┣ 📜index.js\n ┃ ┃ ┗ 📜zh.js\n ┃ ┣ 📂mixin                  -------- 混入对象\n ┃ ┃ ┗ 📜index.js\n ┃ ┣ 📂mock                   -------- 前端模拟数据\n ┃ ┃ ┣ 📂data\n ┃ ┃ ┃ ┗ 📜project_list.js\n ┃ ┃ ┗ 📜index.js\n ┃ ┣ 📂router                 -------- 路由管理\n ┃ ┃ ┣ 📜index.js             -------- 业务路由\n ┃ ┃ ┗ 📜permission.js        -------- 路由鉴权拦截管理\n ┃ ┣ 📂static                 -------- 其它静态资源文件\n ┃ ┃ ┗ 📜.gitkeep\n ┃ ┣ 📂store                  -------- 数据容器\n ┃ ┃ ┣ 📂modules\n ┃ ┃ ┣ 📜getters.js\n ┃ ┃ ┗ 📜index.js\n ┃ ┣ 📂utils                  -------- 工具函数库\n ┃ ┃ ┣ 📜auth.js\n ┃ ┃ ┣ 📜i18n.js\n ┃ ┃ ┣ 📜is.js\n ┃ ┃ ┗ 📜url.js\n ┃ ┣ 📂views                  -------- 业务层组件\n ┃ ┃ ┣ 📂project-manage\n ┃ ┃ ┃ ┗ 📂project-list\n ┃ ┃ ┃ ┃ ┣ 📂components\n ┃ ┃ ┃ ┃ ┃ ┗ 📜HeaderList.vue\n ┃ ┃ ┃ ┃ ┗ 📜project-list.vue\n ┃ ┃ ┗ 📜404.vue\n ┃ ┣ 📜App.vue\n ┃ ┗ 📜main.js                -------- 项目入口文件\n ┣ 📜.editorconfig            -------- eslint相关配置\n ┣ 📜.eslintignore            -------- eslint忽略校验指定文件目录配置\n ┣ 📜.gitattributes           -------- git设置文件的对比方式\n ┣ 📜.gitignore               -------- git忽略载入指定文件目录配置\n ┣ 📜.postcssrc.js            -------- git忽略载入指定文件目录配置\n ┣ 📜.prettierrc              -------- prettier风格js规则校验\n ┣ 📜.stylelintrc.js          -------- stylelint样式规则校验\n ┣ 📜babel.config.js          -------- babel的配置\n ┣ 📜Dockerfile               -------- Doker镜像配置\n ┣ 📜package-lock.json        -------- 优先级更高的依赖包管理文件\n ┣ 📜package.json             -------- 依赖包以及node脚本命令\n ┣ 📜README.md                -------- 项目说明文件\n ┣ 📜typings.json             -------- typings指定包及版本\n ┗ 📜vue.config.js            -------- vue相关配置\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);
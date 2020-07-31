(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{189:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[s._v("#")]),s._v(" 说明")]),s._v(" "),a("p",[a("code",[s._v("window-glob.js")]),s._v(" 会在打包的时候自动生成，并且插入"),a("code",[s._v("index.html")])]),s._v(" "),a("p",[a("strong",[s._v("注意:开发环境不会生成")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// window-glob.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 变量名命名规则  __PRODUCTION__xxx_CONF__   xxx：为.env配置的GLOB_APP_SHORT_NAME")]),s._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__PRODUCTION__VUE_VBEN_ADMIN__CONF__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GLOB_APP_TITLE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vben admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GLOB_APP_SHORT_NAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue_vben_admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GLOB_API_URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GLOB_API_URL_PREFIX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/v1.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[s._v("#")]),s._v(" 作用")]),s._v(" "),a("p",[a("code",[s._v("window-glob.js")]),s._v(" 用于项目在打包后需要动态修改的需求，如接口地址, 可在打包后通过修改"),a("code",[s._v("/dist/window-glob.js")]),s._v("内的变量,刷新即可更新代码内的局部变量")]),s._v(" "),a("h2",{attrs:{id:"如何获取全局变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何获取全局变量"}},[s._v("#")]),s._v(" 如何获取全局变量")]),s._v(" "),a("p",[s._v("想要获取 "),a("code",[s._v("window-glob.js")]),s._v(" 内的变量")]),s._v(" "),a("p",[s._v("可以使用"),a("code",[s._v("/config/getGlobConfig.ts")]),s._v("提供的函数来进行获取")]),s._v(" "),a("h2",{attrs:{id:"如何新增"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何新增"}},[s._v("#")]),s._v(" 如何新增")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("首先在"),a("code",[s._v(".env")]),s._v("或者对应的开发环境配置文件内新增需要可动态配置的变量 需要以 "),a("code",[s._v("GLOB_")]),s._v("开头")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("GLOB_")]),s._v("开头的变量会自动加入环境变量，通过在 "),a("code",[s._v("src/types/config.d.ts")]),s._v("内修改 "),a("code",[s._v("GlobEnvConfig")]),s._v("和"),a("code",[s._v("GlobConfig")]),s._v("两个环境变量的值来定义新添加的类型")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("/config/getGlobConfig.ts")]),s._v("函数新增你刚才新增的返回值即可")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
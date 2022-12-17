"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[3204],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3989:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={title:"Performance Rule Set",sidebar:"home_sidebar",keywords:["rules","performance"],permalink:"performance.html",toc:!0,folder:"documentation"},s=void 0,p={unversionedId:"rules/performance",id:"version-1.21.0/rules/performance",title:"Performance Rule Set",description:"The performance rule set analyzes code for potential performance problems.",source:"@site/versioned_docs/version-1.21.0/rules/performance.md",sourceDirName:"rules",slug:"/rules/performance",permalink:"/docs/1.21.0/rules/performance",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.21.0/rules/performance.md",tags:[],version:"1.21.0",frontMatter:{title:"Performance Rule Set",sidebar:"home_sidebar",keywords:["rules","performance"],permalink:"performance.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Naming Rule Set",permalink:"/docs/1.21.0/rules/naming"},next:{title:"Potential-bugs Rule Set",permalink:"/docs/1.21.0/rules/potential-bugs"}},c={},u=[{value:"ArrayPrimitive",id:"arrayprimitive",level:3},{value:"Noncompliant Code:",id:"noncompliant-code",level:4},{value:"Compliant Code:",id:"compliant-code",level:4},{value:"CouldBeSequence",id:"couldbesequence",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-1",level:4},{value:"Compliant Code:",id:"compliant-code-1",level:4},{value:"ForEachOnRange",id:"foreachonrange",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-2",level:4},{value:"Compliant Code:",id:"compliant-code-2",level:4},{value:"SpreadOperator",id:"spreadoperator",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-3",level:4},{value:"Compliant Code:",id:"compliant-code-3",level:4},{value:"UnnecessaryTemporaryInstantiation",id:"unnecessarytemporaryinstantiation",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-4",level:4},{value:"Compliant Code:",id:"compliant-code-4",level:4}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The performance rule set analyzes code for potential performance problems."),(0,o.kt)("h3",{id:"arrayprimitive"},"ArrayPrimitive"),(0,o.kt)("p",null,"Using Array","<","Primitive",">"," leads to implicit boxing and performance hit. Prefer using Kotlin specialized Array\nInstances."),(0,o.kt)("p",null,"As stated in the Kotlin ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/basic-types.html#arrays"},"documentation")," Kotlin has\nspecialized arrays to represent primitive types without boxing overhead, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"IntArray"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ByteArray")," and so on."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.2.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"noncompliant-code"},"Noncompliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun function(array: Array<Int>) { }\n\nfun returningFunction(): Array<Double> { }\n")),(0,o.kt)("h4",{id:"compliant-code"},"Compliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun function(array: IntArray) { }\n\nfun returningFunction(): DoubleArray { }\n")),(0,o.kt)("h3",{id:"couldbesequence"},"CouldBeSequence"),(0,o.kt)("p",null,"Long chains of collection operations will have a performance penalty due to a new list being created for each call. Consider using sequences instead. Read more about this in the ",(0,o.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/sequences.html"},"documentation")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"configuration-options"},"Configuration options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"threshold")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),")"),(0,o.kt)("p",{parentName:"li"},"the number of chained collection operations required to trigger rule"))),(0,o.kt)("h4",{id:"noncompliant-code-1"},"Noncompliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"listOf(1, 2, 3, 4).map { it*2 }.filter { it < 4 }.map { it*it }\n")),(0,o.kt)("h4",{id:"compliant-code-1"},"Compliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"listOf(1, 2, 3, 4).asSequence().map { it*2 }.filter { it < 4 }.map { it*it }.toList()\n\nlistOf(1, 2, 3, 4).map { it*2 }\n")),(0,o.kt)("h3",{id:"foreachonrange"},"ForEachOnRange"),(0,o.kt)("p",null,"Using the forEach method on ranges has a heavy performance cost. Prefer using simple for loops."),(0,o.kt)("p",null,"Benchmarks have shown that using forEach on a range can have a huge performance cost in comparison to\nsimple for loops. Hence, in most contexts, a simple for loop should be used instead.\nSee more details here: ",(0,o.kt)("a",{parentName:"p",href:"https://sites.google.com/a/athaydes.com/renato-athaydes/posts/kotlinshiddencosts-benchmarks"},"https://sites.google.com/a/athaydes.com/renato-athaydes/posts/kotlinshiddencosts-benchmarks"),"\nTo solve this CodeSmell, the forEach usage should be replaced by a for loop."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"noncompliant-code-2"},"Noncompliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"(1..10).forEach {\n    println(it)\n}\n(1 until 10).forEach {\n    println(it)\n}\n(10 downTo 1).forEach {\n    println(it)\n}\n")),(0,o.kt)("h4",{id:"compliant-code-2"},"Compliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"for (i in 1..10) {\n    println(i)\n}\n")),(0,o.kt)("h3",{id:"spreadoperator"},"SpreadOperator"),(0,o.kt)("p",null,"In most cases using a spread operator causes a full copy of the array to be created before calling a method.\nThis has a very high performance penalty. Benchmarks showing this performance penalty can be seen here:\n",(0,o.kt)("a",{parentName:"p",href:"https://sites.google.com/a/athaydes.com/renato-athaydes/posts/kotlinshiddencosts-benchmarks"},"https://sites.google.com/a/athaydes.com/renato-athaydes/posts/kotlinshiddencosts-benchmarks")),(0,o.kt)("p",null,"The Kotlin compiler since v1.1.60 has an optimization that skips the array copy when an array constructor\nfunction is used to create the arguments that are passed to the vararg parameter. When type resolution is enabled in\ndetekt this case will not be flagged by the rule since it doesn't suffer the performance penalty of an array copy."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,o.kt)("h4",{id:"noncompliant-code-3"},"Noncompliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val strs = arrayOf("value one", "value two")\nval foo = bar(*strs)\n\nfun bar(vararg strs: String) {\n    strs.forEach { println(it) }\n}\n')),(0,o.kt)("h4",{id:"compliant-code-3"},"Compliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// array copy skipped in this case since Kotlin 1.1.60\nval foo = bar(*arrayOf("value one", "value two"))\n\n// array not passed so no array copy is required\nval foo2 = bar("value one", "value two")\n\nfun bar(vararg strs: String) {\n    strs.forEach { println(it) }\n}\n')),(0,o.kt)("h3",{id:"unnecessarytemporaryinstantiation"},"UnnecessaryTemporaryInstantiation"),(0,o.kt)("p",null,"Avoid temporary objects when converting primitive types to String. This has a performance penalty when compared\nto using primitive types directly.\nTo solve this issue, remove the wrapping type."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,o.kt)("h4",{id:"noncompliant-code-4"},"Noncompliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val i = Integer(1).toString() // temporary Integer instantiation just for the conversion\n")),(0,o.kt)("h4",{id:"compliant-code-4"},"Compliant Code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val i = Integer.toString(1)\n")))}d.isMDXComponent=!0}}]);
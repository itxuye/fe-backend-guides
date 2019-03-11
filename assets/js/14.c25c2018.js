(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{196:function(t,e,r){"use strict";r.r(e);var a=r(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[r("a",{attrs:{href:"https://flutter.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter"),r("OutboundLink")],1),t._v(" 是一款跨平台的移动应用 SDK，可通过同一套代码构建高性能，高保真的 iOS 和 Android 应用。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://flutter.io/technical-overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档中提到:"),r("OutboundLink")],1),t._v(":")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("希望这篇文章能够为大多数 JavaScript 开发者提供快速简便的介绍，并且我会尝试使用 Flutter / Dart 和 "),r("a",{attrs:{href:"https://pub.dartlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pub"),r("OutboundLink")],1),t._v(" 包来类比 JS 和 npm 生态系统。")]),t._v(" "),r("blockquote",[r("p",[t._v("如果你有兴趣了解 Flutter 教程、库、公告和社区更新的最新信息，我建议您注册订阅 "),r("a",{attrs:{href:"http://flutternewsletter.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter Newsletter"),r("OutboundLink")],1),t._v(" 。")])]),t._v(" "),r("p",[t._v("我在 "),r("a",{attrs:{href:"https://react-native.eu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native EU"),r("OutboundLink")],1),t._v(" 的演讲 "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=pFtvv0rJgPw",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native — Cross Platform & Beyond"),r("OutboundLink")],1),t._v(" 中，讨论并演示了 React 生态系统中的一些不同技术， 包括 "),r("a",{attrs:{href:"https://github.com/necolas/react-native-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native Web"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/lelandrichardson/react-primitives",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Primitives"),r("OutboundLink")],1),t._v(", 和 "),r("a",{attrs:{href:"https://microsoft.github.io/reactxp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ReactXP"),r("OutboundLink")],1),t._v(", 并且我也有机会讨论 "),r("a",{attrs:{href:"https://weex.incubator.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Weex"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://flutter.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flutter"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("在我过去几年看过的所有前端技术中，我在尝试了 Flutter 后最为兴奋。在这篇文章中，我将讨论为什么它令我如此激动，并介绍如何尽快开始使用它。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("我是一名有着超过两年半经验的 React 与 React Native 开发者。我仍然非常看好 React / React Native，并且知道许多大公司正在大规模使用它们，但我总是喜欢看到其他想法或者寻找其他方法来实现类似的目标，无论是去学习或者改变我目前的技术栈。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("在使用了几周 Flutter SDK 之后，我正在使用它构建我的第一个应用程序，到目前为止我真的很享受这个过程。")]),t._v(" "),r("p",[t._v("在我开始介绍如何使用 Flutter 之前，我将首先回顾一下我对 SDK 的优缺点的看法。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("ul",[t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),r("li",[r("p",[t._v("调试体验很好，开箱即用的热重新加载以及"),r("a",{attrs:{href:"https://flutter.io/debugging/",target:"_blank",rel:"noopener noreferrer"}},[t._v("一系列关于调试技术的文档"),r("OutboundLink")],1)])]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18)]),t._v(" "),t._m(19),t._v(" "),r("ul",[t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),r("li",[r("p",[t._v("插件生态系统还很稚嫩，截至 2017 年 9 月只有 70 多个软件包用于 Flutter "),r("a",{attrs:{href:"https://pub.dartlang.org/flutter",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pub.dartlang.org/flutter"),r("OutboundLink")],1)])]),t._v(" "),t._m(23),t._v(" "),t._m(24)]),t._v(" "),t._m(25),t._v(" "),r("ul",[r("li",[r("p",[t._v("我正在使用 VS Code 作为我的编辑器，使用 "),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=DanTup.dart-code",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dart Code 扩展"),r("OutboundLink")],1),t._v("，它可以提供非常好的开发体验。Flutter 文档强烈建议使用 IntelliJ IDE(https://www.jetbrains.com/idea/)，它有一些内置的支持，如热/动态加载，而 VSCode 不具备这些功能。")])]),t._v(" "),r("li",[r("p",[t._v("Flutter 有一个模块系统，或者叫"),r("a",{attrs:{href:"https://pub.dartlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("包管理系统"),r("OutboundLink")],1),t._v("，它与 npm 有很多不同点。它的好坏取决于你对 npm 的看法。")])]),t._v(" "),t._m(26),t._v(" "),r("li",[r("p",[t._v("文档中有一些非常棒的代码实验室和教程，它们对我有很大的帮助，我建议您查看一下: 1. "),r("a",{attrs:{href:"https://codelabs.developers.google.com/codelabs/flutter/index.html#0",target:"_blank",rel:"noopener noreferrer"}},[t._v("构建 UIS"),r("OutboundLink")],1),t._v(" 2. "),r("a",{attrs:{href:"https://codelabs.developers.google.com/codelabs/flutter-firebase/index.html#0",target:"_blank",rel:"noopener noreferrer"}},[t._v("增加 Firebase"),r("OutboundLink")],1),t._v(" 3. "),r("a",{attrs:{href:"https://flutter.io/tutorials/layout/",target:"_blank",rel:"noopener noreferrer"}},[t._v("构建布局"),r("OutboundLink")],1),t._v(" 4. "),r("a",{attrs:{href:"https://flutter.io/tutorials/interactive/",target:"_blank",rel:"noopener noreferrer"}},[t._v("添加交互"),r("OutboundLink")],1)])])]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),r("p",[t._v("如果你使用的是 Windows，请查阅"),r("a",{attrs:{href:"https://flutter.io/setup/",target:"_blank",rel:"noopener noreferrer"}},[t._v("此文档"),r("OutboundLink")],1),t._v("。\n如需查看完整的 macOS 平台下的安装指南，请查看"),r("a",{attrs:{href:"https://flutter.io/setup-macos/",target:"_blank",rel:"noopener noreferrer"}},[t._v("此文档"),r("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),r("p",[t._v("如果你想部署 iOS 系统，你必须安装 Xcode，对于 Android 系统，你必须安装 Android Studio。")]),t._v(" "),r("p",[r("em",[t._v("要了解更多关于两个平台的信息，请参阅这里的"),r("a",{attrs:{href:"https://flutter.io/setup-macos/#platform-setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(32),t._v(" "),r("p",[t._v("现在我们已经安装了 flutter CLI，我们可以创建我们的第一个应用程序。 为此，我们需要运行 flutter create 命令:")]),t._v(" "),t._m(33),t._v(" "),r("p",[t._v("这将为您创建一个新的应用程序。 现在，切换到新目录，打开 iOS 模拟器或 android 模拟器，然后运行以下命令:")]),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),r("p",[t._v("这将在你已经打开的模拟器中启动应用程序。 如果你同时打开了 iOS 和 Android 模拟器，你可以通过模拟器来运行这个应用程序:")]),t._v(" "),t._m(36),t._v(" "),r("p",[t._v("也可以同时运行")]),t._v(" "),t._m(37),t._v(" "),r("p",[t._v("此时你应该在控制台中看到一些关于重启 app 的信息：")]),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),r("p",[t._v("你也会注意到，我们有一个 android 文件夹和一个 iOS 文件夹，我们的本地项目就在这里。")]),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._m(45),t._v(" "),r("p",[t._v("在这个文件中，我们还可以看到在顶部有一个名为 "),r("code",[t._v("main")]),t._v(" 的函数。 在 Dart 中，"),r("a",{attrs:{href:"https://www.dartlang.org/guides/language/language-tour#the-main-function",target:"_blank",rel:"noopener noreferrer"}},[t._v("main"),r("OutboundLink")],1),t._v(" 是一个特殊的、"),r("strong",[t._v("必需")]),t._v("的顶级函数，在这个函数中应用程序开始执行。 因为 Flutter 是由 Dart 构建的，main 函数也是这个工程的主入口。")]),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),r("p",[t._v("Flutter "),r("a",{attrs:{href:"https://flutter.io/technical-overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("技术总览"),r("OutboundLink")],1),t._v("中的一个核心原则就是：“一切皆组件”。")]),t._v(" "),t._m(49),t._v(" "),r("p",[t._v("在 web 术语 / JavaScript 方面，你可以将 Widget 看成与 Component 类似的东西。 Widget 通常由类内部组成，这些类中可能还有一些本地状态和方法，也可能没有。")]),t._v(" "),r("p",[t._v("如果你查看 "),r("code",[t._v("main.dart")]),t._v("，可以发现类似 "),r("code",[t._v("StatelessWidget")]),t._v("、"),r("code",[t._v("StatefulWidget")]),t._v("、"),r("code",[t._v("Center")]),t._v("、"),r("code",[t._v("Text")]),t._v(" 的类引用。这些都是 Widget。如果想了解所有可用的 Widget，请查阅"),r("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/widgets-library.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),r("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(50),t._v(" "),r("p",[t._v("虽然 Dart 和大多数 Flutter 框架都非常简单，但是使用布局和样式起初开始有点难以理解。")]),t._v(" "),t._m(51),t._v(" "),r("p",[t._v("例如，"),r("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Column-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Column"),r("OutboundLink")],1),t._v(" 接受一个子属性数组，而不接受任何样式属性(只接受诸如 "),r("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Flex/crossAxisAlignment.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CrossAxisAlignment"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Flex/direction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("direction"),r("OutboundLink")],1),t._v(" 等布局属性) ，而 "),r("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Container-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Container"),r("OutboundLink")],1),t._v(" 接受布局和样式属性的组合。")]),t._v(" "),r("p",[t._v("甚至还有一些布局组件，比如 Padding，它仅接受 Widget，除了向 Widget 添加"),r("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/Padding-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("边距"),r("OutboundLink")],1),t._v("之外不做其它任何事情。")]),t._v(" "),r("p",[t._v("参考这个完整的"),r("a",{attrs:{href:"https://flutter.io/widgets/layout/",target:"_blank",rel:"noopener noreferrer"}},[t._v(" Widgets 目录"),r("OutboundLink")],1),t._v("，可以帮助你实现你想要的布局类型，包括 Container、 Row、 Column、 Center、 GridView 等组件，所有这些组件都有自己的布局规范。")]),t._v(" "),t._m(52),t._v(" "),r("p",[t._v("与 React 类似，Flutter 也有有状态和无状态组件或 Component 的概念。 有状态组件可以创建状态、更新状态和销毁状态，这在某种程度上类似于用 React 时可能使用的生命周期方法。")]),t._v(" "),t._m(53),t._v(" "),r("p",[t._v("了解更多查看 "),r("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/StatefulWidget-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("StatefulWidget"),r("OutboundLink")],1),t._v("、 "),r("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/State-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("State"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://docs.flutter.io/flutter/widgets/StatelessWidget-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("StatelessWidget"),r("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(54),t._v(" "),r("p",[t._v("作为一个跨平台应用程序开发的开发者，我会一直关注 React Native 的竞争对手。这对于那些可能因某种原因想要不同的客户来说 Flutter 是一个可行的选择。 我认为 Flutter 为我的客户解决了一些问题，比如内置的类型系统、一流的 UI 库、由核心团队维护的导航库等。")]),t._v(" "),r("p",[t._v("我会将 Flutter 添加到我的技术栈中，所以当我遇到 React Native 不能解决问题的情况时，我会使用 Flutter。一旦我觉得可以在生产环境使用 Flutter，我也会将我的第一个 Flutter 应用程序作为另一个选择呈现给我的客户。")]),t._v(" "),r("blockquote",[r("p",[t._v("我叫 "),r("a",{attrs:{href:"https://twitter.com/dabit3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nader Dabit"),r("OutboundLink")],1),t._v("，是一名 "),r("a",{attrs:{href:"https://aws.amazon.com/mobile/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWS Mobile"),r("OutboundLink")],1),t._v(" 的开发者，开发了 "),r("a",{attrs:{href:"https://aws.amazon.com/appsync/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AppSync"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://github.com/aws/aws-amplify",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amplify"),r("OutboundLink")],1),t._v(" 等应用，同时也是 "),r("a",{attrs:{href:"http://reactnative.training/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native Training"),r("OutboundLink")],1),t._v(" 的创始人。")])]),t._v(" "),r("blockquote",[r("p",[t._v("如果你喜欢 React 和 React Native，欢迎在 "),r("a",{attrs:{href:"http://devchat.tv/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Devchat.tv"),r("OutboundLink")],1),t._v(" 订阅我们的 "),r("a",{attrs:{href:"https://devchat.tv/react-native-radio",target:"_blank",rel:"noopener noreferrer"}},[t._v("podcast - React Native Radio"),r("OutboundLink")],1),t._v("。")])]),t._v(" "),r("blockquote",[r("p",[t._v("此外，Manning Publications 已经出版了我的书 "),r("a",{attrs:{href:"https://www.manning.com/books/react-native-in-action",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native in Action"),r("OutboundLink")],1),t._v("，欢迎阅读。")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"为-javascript-开发者准备的-flutter-指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为-javascript-开发者准备的-flutter-指南","aria-hidden":"true"}},[this._v("#")]),this._v(" 为 JavaScript 开发者准备的 Flutter 指南")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Flutter 包括一个 "),e("strong",[this._v("react 风格")]),this._v("的框架 , 一个 2D 渲染引擎, 现成的组件, 和开发者工具。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn-images-1.medium.com/max/6000/1*oUyZxsBi_aS6jVhL8sjCsQ.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"如果你了解我，那么我知道你在想什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如果你了解我，那么我知道你在想什么","aria-hidden":"true"}},[this._v("#")]),this._v(" 如果你了解我，那么我知道你在想什么...")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn-images-1.medium.com/max/2000/1*GTsgYXSN2AcJZN9wZm7zhQ.jpeg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"flutter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flutter","aria-hidden":"true"}},[this._v("#")]),this._v(" Flutter")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("我可以做个概括：Flutter 令人惊叹, 我认为它在不久的将来是一个可行的选择。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn-images-1.medium.com/max/2000/1*hl9BrVAK5rNBJnw76tmTEQ.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优点","aria-hidden":"true"}},[this._v("#")]),this._v(" 优点:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("核心团队维护的内置 UI 库(Material，Cupertino)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Dart＆Flutter 团队紧密合作，优化移动 Dart VM，专门满足 Flutter 的需求")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("文档超级棒 😍")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("强大的 CLI")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("我可以顺利轻松地启动和运行，而不会遇到很多障碍/错误")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("核心团队构建和维护的非常可靠的导航库")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Dart 语言已有 6 年历史并且已经成熟。虽然 Dart 是一种基于类的面向对象编程语言，但如果你进入函数式编程，Dart 确实拥有一等公民的函数并支持许多函数式编程结构。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("对我来说比我预想的更容易理解")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Dart 是一种开箱即用的强类型语言，无需任何附加配置(比如: TypeScript / Flow).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("如果你使用过 React，那么您可能会习惯类似的状态机制 (即生命周期方法和 setState).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缺点","aria-hidden":"true"}},[this._v("#")]),this._v(" 缺点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("你需要学习 Dart (这很简单，相信我)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("仍在测试中(目前已经发布正式版)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("只针对 iOS 和 Android (目前也可用于 Web)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("布局 / 样式需要学习全新的范例 / API")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("要学习不同的项目配置 ("),e("em",[this._v("pubspec.yaml")]),this._v(" vs "),e("em",[this._v("package.json")]),this._v(").")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"入门及其它观点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#入门及其它观点","aria-hidden":"true"}},[this._v("#")]),this._v(" 入门及其它观点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("我一开始对 Dart 一无所知，但很快就学会了。 它让我想起了 TypeScript，也和 JavaScript 有一些相似之处")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"说够了，让我们开始创建一个新的项目吧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说够了，让我们开始创建一个新的项目吧","aria-hidden":"true"}},[this._v("#")]),this._v(" 说够了，让我们开始创建一个新的项目吧")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安装-cli-macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-cli-macos","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装 CLI (macOS)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("首先，我们需要克隆包含 Flutter CLI 二进制文件的仓库，并将其添加到我们的路径中。我将这个仓库克隆到一个文件夹中，然后在"),e("code",[this._v("$ HOME / .bashrc")]),this._v(" "),e("code",[this._v("/ $ HOME / .zshrc")]),this._v("文件中添加克隆目录路径。")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[r("p",[t._v("克隆仓库:")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone -b stable "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("https://github.com/flutter/flutter.git"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("https://github.com/flutter/flutter.git"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),r("li",[r("p",[t._v("添加路径:")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("export")]),t._v(" PATH"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HOME")]),t._v("/bin/flutter/bin:"),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PATH")]),t._v(" **"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("or whatever the path is to your installation"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("**\n")])])])]),t._v(" "),r("li",[r("p",[t._v("从命令行运行 flutter doctor，以确保 flutter 路径被识别，并查看是否有任何依赖项需要安装来完成设置:")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("flutter doctor\n")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安装其他依赖项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装其他依赖项","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装其他依赖项")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"创建你的第一个-flutter-应用程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建你的第一个-flutter-应用程序","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建你的第一个 Flutter 应用程序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("flutter create myapp\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("flutter run\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn-images-1.medium.com/max/3678/1*wr4Ox5ZFThwFMdaZL9To6w.jpeg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("flutter run -d android / flutter run -d iPhone\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("flutter run -d all\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://cdn-images-1.medium.com/max/2000/1*gdWuSFptAuk3ljy-AagJ_w.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"项目结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目结构")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("你正在运行的代码处于 "),e("code",[this._v("lib/main.dart")]),this._v(" 文件中。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("项目的配置位于 "),e("code",[this._v("pubspec.yaml")]),this._v(" 文件中，类似于 JavaScript 生态系统中的 "),e("code",[this._v("package.json")]),this._v(" 文件。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("现在让我们看一下 "),e("code",[this._v("lib / main.dart")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在文件的顶部我们看到一个 "),e("code",[this._v("import")]),this._v(" :")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-dart extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dart"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ‘package"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("flutter"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("material"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dart’"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("这是从哪里来的？ 在 "),r("code",[t._v("pubspec.yaml")]),t._v(" 文件中，你会注意到在依赖项下我们有一个单独的 "),r("code",[t._v("flutter")]),t._v(" 依赖项，我们在这里引用它作为包: "),r("code",[t._v("package:flutter/")]),t._v(" 。 如果我们想要添加和导入其他依赖项，我们需要将新的依赖项加入 "),r("code",[t._v("pubspec.yaml")]),t._v("，使它们作为依赖可以导入。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("void main() {\n  runApp(new MyApp());\n}\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这个函数调用 "),e("code",[this._v("new MyApp ()")]),this._v(" ，它本身调用一个类等等，类似于 React app，我们有一个由其他组件组成的主组件，然后由 "),e("code",[this._v("ReactDOM.render")]),this._v(" 或 "),e("code",[this._v("AppRegistry.registerComponent")]),this._v(" 进行渲染。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 组件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Widget 是每个 Flutter 应用程序的基本构件。 每个 Widget 都是用户界面部分的不可变声明。 与其他将视图、控制器、布局和其他属性分离开来的框架不同，Flutter 有一个一致的、统一的对象模型: Widget。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"布局与样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#布局与样式","aria-hidden":"true"}},[this._v("#")]),this._v(" 布局与样式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("要记住的主要事情是，不像 web 样式，甚至是 React Native 样式 View 会完成所有的布局和一些样式，Flutter 布局是由你"),e("strong",[this._v("选择的组件的类型")]),this._v("和"),e("strong",[this._v("它的布局和样式属性")]),this._v("的组合决定的，这通常取决于你使用的组件的类型。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"setstate-lifecycle-函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setstate-lifecycle-函数","aria-hidden":"true"}},[this._v("#")]),this._v(" Setstate / Lifecycle 函数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("甚至也有一个名为 setState 的方法更新状态。 您可以在我们刚刚生成的项目中的 "),e("code",[this._v("incrementCounter")]),this._v(" 方法中看到这个方法。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])}],!1,null,null,null);n.options.__file="Flutter-for-JavaScript-Developerss.md";e.default=n.exports}}]);
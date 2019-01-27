# Flutter

- [Dart 学习笔记](https://chai2010.cn/head-first-dart-book/)

- [Flutter 中文网](https://book.flutterchina.club/)

- [Flutter 填坑全面总结](https://www.jianshu.com/p/22675c1632dc?utm_source=gank.io&utm_medium=email)

- [Flutter-study](https://github.com/yang7229693/flutter-study)

- [Flutter 提升开发效率的一些方法和工具](https://juejin.im/post/5bffea7551882505d840503a)

- [Flutter-learning](https://github.com/AweiLoveAndroid/Flutter-learning/blob/master/README.md)

## Flutter/React Native

### Flutter

Flutter 是 Google 推出并开源的移动应用开发框架，并且支持 Google 下一代操作系统 Fuchsia，主打跨平台、高保真、高性能。开发者可以通过 Dart 语言开发 App，一套代码同时运行在 iOS 和 Android 平台。 Flutter 提供了丰富的组件、接口，开发者可以很快地为 Flutter 添加 native 扩展。同时 Flutter 还使用 Native 引擎渲染视图，这无疑能为用户提供良好的体验。

此外 Flutter 跨全平台不止是 Android 和 iOS 目标剑指所有主流平台 UI 开发、PC 桌面以及 包括正在搞的 [Hummingbird](https://medium.com/flutter-io/hummingbird-building-flutter-for-the-web-e687c2a023a8) 来实现 web 的支持。

### React Native

React Native 是 Facebook 在 F8 大会开源的 JavaScript 框架,在 2015 年 9 月 15 日发布，可以让广大开发者使用 JavaScript 和 React 开发跨平台的移动应用。开发者可以灵活的使用 HTML 和 CSS 布局，使用 React 语法构建组件，实现 Android，iOS 两端代码的复用,核心设计理念: 既拥有 Native 的用户体验，又保留 React 的开发效率。

### 对比

- 速度与性能：React Native 用 JavaScript 调用对应系统渲染器进行渲染展示，中间就有 JavaScript 解析到调用 Native 过程的许多中间环节，Flutter 是将 Dart 代码 AOT 编译为本地代码，其次，Flutter 使用自己的渲染引擎来绘制 UI，布局数据等由 Dart 语言直接控制，所以在布局过程中不需要像 React Native 那样要在 JavaScript 和 Native 之间通信，速度和性能上一般 Flutter 是要由于 React Native 的。

- 生态周边：Dart 生态相比移动端/前端生态远小的多，React Native 经过多年发展，其现在的社区规模或者是生态完善性都是 Flutter 近期根本无法追赶上的。

- 开发体验：React 的开发体验远比 Dart 要好，更多前端开发者更容易上手，虽然 Flutter 参照了需要 React 的设计思想，DSX 也类似 JSX, 但是如果你看过官方的例子应该看到 DSX 的代码代码很容易一层套一层，类似于回调炼狱，此外用 Flutter 你需要学习一门新语言 Dart。

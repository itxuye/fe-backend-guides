module.exports = {
  base: "/fe-backend-guides/",
  title: "前后端进阶与指南",
  description: "前后端进阶与指南",
  ga: "UA-132397402-1",
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  themeConfig: {
    repo: "itxuye/fe-backend-guides",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "编辑此页",
    activeHeaderLinks: false,
    sidebarDepth: 2,
    lastUpdated: "上次更新",
    nav: [{ text: "blog", link: "https://itxuye.com" }],
    sidebar: [
      {
        title: "2019",
        collapsable: false,
        children: ["/"]
      },
      {
        title: "React",
        collapsable: false,
        children: ["/fe/React"]
      },
      {
        title: "React设计模式",
        collapsable: true,
        children: ["/fe/React-in-patterns-cn"]
      },
      {
        title: "前端工程化",
        collapsable: false,
        children: ["/fe/feengineering"]
      },
      {
        title: "css灵感",
        collapsable: false,
        children: ["/fe/css"]
      },
      {
        title: "Typescript",
        collapsable: false,
        children: ["/fe/Typescript"]
      },
      {
        title: "Graphql",
        collapsable: false,
        children: ["/graphql/Graphql"]
      },
      {
        title: "Node",
        collapsable: false,
        children: ["/node/node"]
      },
      {
        title: "Flutter",
        collapsable: false,
        children: ["/flutter/flutter"]
      },
      {
        title: "MicroFrontEnd",
        collapsable: true,
        children: ["/microfrontend/MicroFrontend"]
      },
      {
        title: "Docker",
        collapsable: false,
        children: ["/backend/Docker"]
      },
      {
        title: "FEInterView",
        collapsable: false,
        children: ["/feiw/FeIw"]
      },
      {
        title: "InterView",
        collapsable: false,
        children: ["/interview/InterView"]
      }
      // {
      //   title: "Flutter for JavaScript Developers(待翻译)",
      //   collapsable: true,
      //   children: ["/flutter/Flutter-for-JavaScript-Developers"]
      // },
      // {
      //   title: "为 JavaScript 开发者准备的 Flutter 指南",
      //   collapsable: true,
      //   children: ["/flutter/Flutter-for-JavaScript-Developerss"]
      // }
    ]
  }
};

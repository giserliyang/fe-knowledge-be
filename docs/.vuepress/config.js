// const path = require("path")
// const fs = require("fs")
// const htmlFolder = path.join(__dirname, "../html/")
// const html = fs.readdirSync(htmlFolder).filter((c) => c !== "README.md")
const nodeSidebar = require("./sidebars/node")
const languageSidebar = require("./sidebars/language")
const webserverSidebar = require("./sidebars/webserver")
const databaseSidebar = require("./sidebars/database")
const cacheSidebar = require("./sidebars/cache")

module.exports = {
  title: "后端知识",
  description: "前端后端知识",
  themeConfig: {
    nav: [
      {
        text: "Node",
        items: [
          {
            text: "知识图谱",
            link: "/node/",
          },
          // {
          //   text: "教程/书籍",
          //   items: [{ text: "javascript高级程序设计", link: "/html-course1/" }],
          // },
        ],
      },
      {
        text: "编程语言",
        items: [
          {
            text: "知识图谱",
            link: "/language/",
          },
        ],
      },
      {
        text: "网页服务器",
        items: [
          {
            text: "知识图谱",
            link: "/webserver/",
          },
        ],
      },
      {
        text: "数据库",
        items: [
          {
            text: "知识图谱",
            link: "/database/",
          },
        ],
      },
      {
        text: "数据缓存",
        items: [
          {
            text: "知识图谱",
            link: "/cache/",
          },
        ],
      },
    ],
    sidebarDepth: 3,
    sidebar: {
      "/node/": nodeSidebar,
      "/language/": languageSidebar,
      "/webserver/": webserverSidebar,
      "/database/": databaseSidebar,
      "/cache/": cacheSidebar,
    },
  },
}

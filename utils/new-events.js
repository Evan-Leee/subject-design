var mongoose = require('mongoose');
var events = require('../models/events');

mongoose.connect('mongodb://localhost/sd');
db = mongoose.connection;
db.once('open', function () {
  events.remove(function () {
    events.create([
      {
        title: "Code Generation Network - Language Translation ...",
        created: "1451964125740"
      },
      {
        title: "推荐一个数据库查询监控插件 - query_reviewer - rails - Ruby - JavaEye论坛",
        created: "1451964125740"
      },
      {
        title: "SDN Profile Management",
        created: "1451964125740"
      },
      {
        title: "好玩的免费软件：Gmail Drive （Gmail 硬盘） - BeanSoft's Java Blog - BlogJava",
        created: "1451964125740"
      },
      {
        title: "StringTemplate Template Engine",
        created: "1451964125740"
      },
      {
        title: "WebWork - WebWork",
        created: "1451964125740"
      },
      {
        title: "XML.org",
        created: "1451964125740"
      },
      {
        title: "JBoss.com - JBoss Developer Studio",
        created: "1451964125740"
      },
      {
        "title": "Clojure - home",
        "created": "1451964125740"
      },
      {
        "title": "The Jython Project",
        "created": "1451964125740"
      },
      {
        "title": "Sublime Text: The text editor you'll fall in love with",
        "created": "1451964125740"
      },
      {
        "title": "姜源的WebLog: Textmate alike editors for windows",
        "created": "1451964125740"
      },
      {
        title: "Omaha Overview",
        created: "1451964125740"
      },
      {
        title: "$ cheat gmail",
        created: "1451964125740"
      },
      {
        title: "Micro Persuasion: How to Use Gmail as a Busines...",
        created: "1451964125740"
      },
      {
        title: "Micro Persuasion: Turn Gmail Into Your Personal...",
        created: "1451964125740"
      },
      {
        title: "理财宝典：改善您经济状况的20条妙计 - 译言翻译",
        created: "1451964125740"
      },
      {
        "title": "MINIX 3 系统调用, 信号机制 — Windows Live",
        "created": "1451964125740"
      },
      {
        title: "我收集的字体颜色 — Windows Live",
        created: "1451964125740"
      },
      {
        title: "重装 Windows 后应该做的一些事 - 小兵的工具箱 - CSDNBlog",
        created: "1451964125740"
      },
      {
        title: "如何配置Windows Live Writer - dudu - 博客园",
        created: "1451964125740"
      },
      {
        title: "yacc/lex windows 下 Parser Generator 使用指南 - woai...",
        created: "1451964125740"
      },
      {
        title: "cscope在windows下使用mingw编译的方法 - mslk的专栏 - CSDNBlog",
        created: "1451964125740"
      },
      {
        title: "Pcre for Windows",
        created: "1451964125740"
      },
      {
        title: "连线杂志：Windows操作系统发展简史(组图) - Linux宝库 - 全球最火中文开源门户",
        created: "1451964125740"
      },
      {
        title: "The Jython Project",
        created: "1451964125740"
      },
      {
        "title": "叹为观止的外国人铅笔画（组图）_韩梅_新浪博客",
        "created": "1451964125740"
      },
      {
        "title": "IDM extra downloads - wordfiles, macros, scripts, and more",
        "created": "1451964125740"
      },
      {
        title: "http://www.teamcti.com/trayit/trayit.htm",
        created: "1451964125740"
      },
      {
        title: "UltraEdit支持Python语法高亮 - jackyYEN的笔记 - CSDN博客",
        created: "1451964125740"
      },
      {
        "title": "一个采用JavaScript开发基于Web的代码编辑器 - ACE_IT新闻_博客园",
        "created": "1451964125740"
      },
      {
        "title": "为你的MFC程序添加宏脚本语言 - VC知识库文章",
        "created": "1451964125740"
      },
      {
        "title": "玩转Windows个性化登录界面 (更换Windows7登录界面图片/XP仿Win7登录界面) | 异次元软件世界",
        "created": "1451964125740"
      },
      {
        "title": "GINA之windows登录控制替换_百度文库",
        "created": "1451964125740"
      },
      {
        "title": "IDM extra downloads - wordfiles, macros, scripts, and more",
        "created": "1451964125740"
      },
      {
        title: "容易几步让您轻松替换Windows 7登录界面_电脑鸭 - 电脑基础知识网站",
        created: "1451964125740"
      },
      {
        "title": "EverNote 极致的免费笔记资料管理软件 (数据网络同步、支持PC、Mac与手机多平台) | 异次元软件世界",
        "created": "1451964125740"
      },
      {
        title: "配置 vim Python IDE 开发环境 | Allegro Nanu",
        created: "1451964125740"
      },
      {
        title: "cmdln.org (a sysadmin blog) » Blog Archive » Vim customization for python",
        created: "1451964125740"
      },
      {
        "title": "Turbogears Development: Enviroment » LuckyDonkey - Never knowingly knowing narwhals",
        "created": "1451964125740"
      },
      {
        title: "Programmer's Notepad",
        created: "1451964125740"
      },
      {
        "title": "SWIG-2.0 Documentation",
        "created": "1451964125740"
      },
      {
        "title": "Geany : Home Page",
        "created": "1451964125740"
      },
      {
        title: "ANSI/VT100 Terminal Control",
        created: "1451964125740"
      },
      {
        "title": "ScintillaNET",
        "created": "1451964125740"
      },
      {
        "title": "Mitchell's Caladbolg.net",
        "created": "1451964125740"
      },
      {
        "title": "DaanSystems - LispIDE - Lisp and Scheme Editor IDE",
        "created": "1451964125740"
      },
      {
        "title": "下载谷歌拼音输入法 - Google",
        "created": "1451964125740"
      },
      {
        title: "xdocdiff - diff for Word, Excel, pdf files with TortoiseSVN -",
        created: "1451964125740"
      },
      {
        "title": "history.dcs.ed.ac.uk/archive/apps/Whitfield-Thesis/thesis.html",
        "created": "1451964125740"
      },
      {
        title: "A list of base boxes for Vagrant - Vagrantbox.es",
        created: "1451964125740"
      },
      {
        "title": "Hacker News",
        "create": "1451965889704"
      },
      {
        "title": "reddit: the front page of the internet",
        "create": "1451964125740"
      },
      {
        "title": "TheServerSide.com: your Java Community discussing server side development",
        "create": "1451964125740"
      },
      {
        "title": "NoSQL数据库笔谈",
        "create": "1451964125740"
      },
      {
        "title": "【老当】Godaddy教程：新增修改域名解析A记录/CNAME/MX等(图文)-帮助",
        "create": "1451964125740"
      },
      {
        "title": "【老当】Godaddy教程：修改域名的DNS服务器(图文)-帮助",
        "create": "1451964125740"
      },
      {
        title: "OpenCV iOS - Video Processing — OpenCV 2.4.3 documentation",
        created: "1451964125740"
      },
      {
        "title": "ImageMagick: Command-line Tools: Convert",
        "create": "1451964125740"
      },
      {
        "title": "Mac OS X: How to use the command line to resize images. | AI NO TENSHi",
        "create": "1451964125740"
      },
      {
        "title": "Software Musings: Mars Rover Problem from Thoughtworks - Design considerations",
        "create": "1451964125740"
      },
      {
        "title": "datamapper/dm-core · GitHub",
        "create": "1451964125740"
      },
      {
        "title": "Identifying Cross-Functional and Non-Functional requirement during agile project inception",
        "create": "1451964125740"
      },
      {
        "title": "String Calculator on Vimeo",
        "create": "1451964125740"
      },
      {
        "title": "Coding Horror: The Last Responsible Moment",
        "create": "1451964125740"
      },
      {
        "title": "把一个人粉碎成原子再组合，这个人还是原来的人吗？（多图）",
        "create": "1451964125740"
      },
      {
        title: "跨越边界: 动态类型语言中的 Web 开发策略",
        created: "1451964125740"
      },
      {
        title: "Tutorials:Getting Started with jQuery - jQuery ...",
        created: "1451964125740"
      },
      {
        title: "扩展 iBatis 以透明支持多种数据库",
        created: "1451964125740"
      },
      {
        title: "dom4j操作xml基础 - bulktree - BlogJava",
        created: "1451964125740"
      },
      {
        title: "Servlets and XML: Made for each other",
        created: "1451964125740"
      },
      {
        title: "推荐Ext的教程：ExtJS2.0实用简明教程 - BeanSoft's Java Blog - BlogJava",
        created: "1451964125740"
      },
      {
        title: "Java开源 AJAX框架分类列表",
        created: "1451964125740"
      },
      {
        title: "Jabber: Open Instant Messaging and a Whole Lot ...",
        created: "1451964125740"
      },
      {
        title: "Building User Interfaces - Google Web Toolkit -...",
        created: "1451964125740"
      },
      {
        title: "Web Tools Platform (WTP) Project",
        created: "1451964125740"
      },
      {
        title: "Getting Started with Web Applications",
        created: "1451964125740"
      },
      {
        title: "使用 PHP 创建图形的巧妙方法",
        created: "1451964125740"
      },
      {
        title: "XML::Parser - A perl module for parsing XML doc...",
        created: "1451964125740"
      },
      {
        title: "为Struts 2.0做好准备 - Max On Java - BlogJava",
        created: "1451964125740"
      },
      {
        title: "RichFaces 简介",
        created: "1451964125740"
      },
      {
        title: "Tutorials:jQuery For Designers - jQuery JavaScr...",
        created: "1451964125740"
      },
      {
        title: "Ajax -- 困惑者指南，第 2 部分: 开发基于 Dojo 的博客阅读器",
        created: "1451964125740"
      },
      {
        title: "The CPAN Search Site - search.cpan.org",
        created: "1451964125740"
      },
      {
        title: "Overview of DWR | Getahead",
        created: "1451964125740"
      },
      {
        title: "The SeaMonkey® Project",
        created: "1451964125740"
      },
      {
        title: "Firebug - Web Development Evolved",
        created: "1451964125740"
      },
      {
        title: "Ajax -- 困惑者指南，第 1 部分: Ajax 工具和技术综述",
        created: "1451964125740"
      },
      {
        title: "将 Ajax 带入 Eclipse 的 Ajax Toolkit Framework 的两个工具",
        created: "1451964125740"
      },
      {
        title: "Eclipse Web Tools Platform (WTP) Downloads",
        created: "1451964125740"
      },
      {
        title: "Struts 2 + Spring 2 + JPA + AJAX",
        created: "1451964125740"
      },
      {
        "title": "[总结]细线表格制作技巧－表格边框样式设置集锦 - 不做懒人 - 博客园",
        "created": "1451964125740"
      },
      {
        title: "xTree (WebFX)",
        created: "1451964125740"
      },
      {
        title: "Web Developer",
        created: "1451964125740"
      },
      {
        title: "Leakon » Blog Archive » Learning jQuery Book pd...",
        created: "1451964125740"
      },
      {
        "title": "Ajax RSS 阅读器",
        "created": "1451964125740"
      },
      {
        title: "pop-up windows",
        created: "1451964125740"
      },
      {
        title: "XTree Fan Page / Directory",
        created: "1451964125740"
      },
      {
        title: "SmartClient | Overview",
        created: "1451964125740"
      },
      {
        title: "Web Application Development - SitePen, Inc.",
        created: "1451964125740"
      },
      {
        title: "css editor",
        created: "1451964125740"
      },
      {
        title: "xtree的基本应用---入门级 - 雨忆BLOG - CSDNBlog",
        created: "1451964125740"
      },
      {
        title: "Jabber Libraries",
        created: "1451964125740"
      },
      {
        title: "Echo2 Downloads | Echo Web Framework",
        created: "1451964125740"
      },
      {
        title: "分析xloadtree, 用ajax实现的动态目录树 - nickey - BlogJava",
        created: "1451964125740"
      },
      {
        title: "Struts 2中实现文件下载（修正中文问题） - BeanSoft's Java Blog - BlogJava",
        created: "1451964125740"
      },
      {
        title: "CoffeeCup HTML Editor - The CoffeeCup HTML Edit...",
        created: "1451964125740"
      },
      {
        title: "Jabber 协议概述",
        created: "1451964125740"
      }
    ],function(){process.exit();});
  });
});
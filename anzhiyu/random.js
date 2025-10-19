var posts=["2023/08/26/MC存档编辑器，适用于恢复、迁移等/","2025/08/04/hello-world/","2023/10/11/ChatGPT-Next-Web同步教程/","2025/08/04/NAT类型讲解/","2023/09/04/search文档/","2023/08/22/如何用自定义NPC做一个战斗型机器人/","2025/01/26/搭建原神服务器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["2023/10/11/ChatGPT-Next-Web同步教程/","2025/10/21/Adguard-Home部署/","2025/08/04/NAT类型讲解/","2025/08/04/hello-world/","2025/01/26/搭建原神服务器/","2023/08/22/如何用自定义NPC做一个战斗型机器人/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
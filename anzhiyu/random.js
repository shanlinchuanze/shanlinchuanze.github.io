var posts=["2024/10/07/Newshar-Real-Login/","2024/09/29/我个人对于栈空间的理解/","2024/10/15/10-15CTF/","2024/10/16/10-16CTF/","2024/10/16/C语言的一些日常理解心得/","2024/10/18/10-18C语言学习笔记/","2024/10/17/10-17CTF/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
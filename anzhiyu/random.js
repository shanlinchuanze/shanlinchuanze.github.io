var posts=["2024/10/07/Newshar-Real-Login/","2024/09/29/我个人对于栈空间的理解/","2024/10/15/10-15CTF/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
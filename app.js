const express=require("express");


//引入express
const indexRouter=require("./routes/index.js");
const newsRouter=require("./routes/news.js");
const newslistRouter=require("./routes/newslist.js");
const videoRouter=require("./routes/video.js");
const playerRouter=require("./routes/player.js");

var server=express();
//创建web服务器
server.listen(3000);
//监听端口
server.use(express.static("public"));
//托管到静态资源库public下
//一定要写在路由的上面
const cors = require("cors");

server.use(cors({
   origin:["http://127.0.0.1:8080",
   "http://localhost:8080"],
   credentials:true
}))


server.use("/index",indexRouter);
server.use("/news",newsRouter);
server.use("/newslist",newslistRouter);
server.use("/video",videoRouter);
server.use("/player",playerRouter);


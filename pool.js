const mysql=require("mysql");
//引入mysql模块
var pool=mysql.createPool({
//创建连接池对象
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    password:"",
    database:"chlease",
    connectionLimit:20


})
//导出连接池对象
module.exports=pool;
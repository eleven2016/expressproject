var mysql_pool = require('../mysql/mysql_config.js')
var _ = require("lodash");
var indexService = {
    //查询菜单
    getMenus : function (res) {
        var menus=[];
        var pid = 0;
        mysql_pool.getConnection(function(err,connection){
            var sql = "select * from menus where pid = "+pid;
            console.log(err);
            connection.query(sql,function (err,rows) {
                console.log(err);
                menus=rows;
                res.json(menus);
            })
        });
    }
}

module.exports = indexService;
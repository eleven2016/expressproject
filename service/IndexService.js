var mysql_pool = require('../mysql/mysql_config.js')
var _ = require("lodash");
var Q = require('q');
var indexService = {
    //查询菜单
    getMenus : function () {
        var menus=[];
        var pid = 0;
        Q.nfcall(function(){
            mysql_pool.getConnection(function(err,connection){
                var sql = "select * from menus where pid = "+pid;
                connection.query(sql,function (err,rows) {
                    return rows;
                })
            });
        }).then(function(result){
            menus = result;
        },function(error){
            console.log(error)
        });

        return menus;
    }
}

module.exports = indexService;
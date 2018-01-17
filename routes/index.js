var express = require('express');
var router = express.Router();
var IndexService = require("../service/IndexService.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* 查询菜单*/
router.all("/getMenus",function (req, res) {
    IndexService.getMenus(res);
});

module.exports = router;

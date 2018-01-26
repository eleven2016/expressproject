var express = require('express');
var router = express.Router();
var IndexService = require("../service/IndexService.js");

/* GET home page. */
router.get('/index', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
/* GET users listing. */
router.get('/user', function (req, res, next) {
    res.send('respond with a resource');
});

/* 查询菜单*/
router.all("/getMenus", function (req, res) {
    var menus = IndexService.getMenus();
    res.json(menus);
});

module.exports = router;

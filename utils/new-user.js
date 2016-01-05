var mongoose = require('mongoose');
var user = require('../models/user');

mongoose.connect('mongodb://localhost/sd');
db = mongoose.connection;
db.once('open',function () {
  user.remove(function(){
    user.create([
      {
        id: 'ds01', password: '123456', type: 'stu',
        info:  {name: '段昱吉', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds02', password: '123456', type: 'stu',
        info:  {name: '王春明', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds03', password: '123456', type: 'stu',
        info:  {name: '马付玉', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds04', password: '123456', type: 'stu',
        info:  {name: '耿香婷', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds05', password: '123456', type: 'stu',
        info:  {name: '马珍', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds06', password: '123456', type: 'stu',
        info:  {name: '杨海娥', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds07', password: '123456', type: 'stu',
        info:  {name: '程欢欢', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds08', password: '123456', type: 'stu',
        info:  {name: '王兰', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds09', password: '123456', type: 'stu',
        info:  {name: '李贝', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds10', password: '123456', type: 'stu',
        info:  {name: '刘小艳', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds11', password: '123456', type: 'stu',
        info: {name: '白娟', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa', 'bbbbbbbbbbbb', 'ccccccccccccc', 'dddddddddddd']
      },
      {
        id: 'ds12', password: '123456', type: 'stu',
        info:  {name: '白慧', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds13', password: '123456', type: 'stu',
        info:  {name: '付洋洋', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds14', password: '123456', type: 'stu',
        info:  {name: '纪楠楠', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds15', password: '123456', type: 'stu',
        info:  {name: '孙文', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds16', password: '123456', type: 'stu',
        info:  {name: '江信瀚', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds17', password: '123456', type: 'stu',
        info:  {name: '李昱', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds18', password: '123456', type: 'stu',
        info:  {name: '王炳鑫', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds19', password: '123456', type: 'stu',
        info:  {name: '张清源', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds20', password: '123456', type: 'stu',
        info:  {name: '焦浩伟', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds21', password: '123456', type: 'stu',
        info:  {name: '马瑜', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds22', password: '123456', type: 'stu',
        info:  {name: '王向伟', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds23', password: '123456', type: 'stu',
        info: {name: '花乐', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa', 'bbbbbbbbbbbb', 'ccccccccccccc', 'dddddddddddd']
      },
      {
        id: 'ds24', password: '123456', type: 'stu',
        info:  {name: '李纪陶', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds25', password: '123456', type: 'stu',
        info:  {name: '曹旭', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds26', password: '123456', type: 'stu',
        info:  {name: '武威', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds27', password: '123456', type: 'stu',
        info:  {name: '牛海洋', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds28', password: '123456', type: 'stu',
        info:  {name: '王会金', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'ds29', password: '123456', type: 'stu',
        info:  {name: '刘仕伟', klass: 1, phoneNumber: 123456789, address: 'xust'},
        message: ['aaaaaaaaaaaa','bbbbbbbbbbbb','ccccccccccccc','dddddddddddd']
      },
      {
        id: 'admin01', password: '123456', type: 'admin',
        info: null,
        message: []
      }
    ], function () {process.exit();});
  });
});
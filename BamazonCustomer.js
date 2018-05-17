var mysql = require('mysql');
var inquirer = require('inquirer');
var prompt = require('prompt');
var filesystem =  require('fs');

var sqlDBconnect = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'Bamazon'
});

sqlDBconnect.connect(function(err) {
  if (err) throw err;
  console.log('Connection successful ID#: ' + sqlDBconnect.threadId);
});

custmrCart();

function custmrCart() {
  sqlDBconnect.query('SELECT * FROM Products', function(err, res) {
    // console.log('begin');
    // console.log(res);
    // console.log('end');
    // return
    for (var i = 0, i < res.length; i++) {
      console.log(
        'Item: ' + res[i].ProductName
      + ' | Price: ' + res[i].Price
      + ' | Stock: ' + res[i].StockQuantity);
    }

  })
};

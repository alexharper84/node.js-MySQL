
var mysql = require('mysql');
var inquirer = require('inquirer');
var prompt = require('prompt');
var filesystem = require('fs');

var connection = mysql.createConnection({

  host: "localhost",
  port: 3306,
  user: "root",
  password: "4Root12!",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connection successful. Customer ID# " + connection.threadId);
});

custmrCart();

function custmrCart() {
  connection.query('SELECT * FROM Products', function(err, res){

    for (var i = 0; i < res.length; i++) {
      console.log('Item: ' + res[i].ProductName + ' | Price: ' + res[i].Price + ' | Stock: ' + res[i].StockQuantity);
    }

    inquirer.prompt([{
      name: "choice",
      type: "rawlist",
      message: "What would you like to buy?",
      choices: function(value) {
        var choiceArray = [];
        for (var i = 0; i < res.length; i++) {
          choiceArray.push(res[i].ProductName);
        }
        return choiceArray;
      }
    }, {
      name: "quantity",
      type: "input",
      message: "How many?",
      validate: function(value) {
        if (isNaN(value) == false) {
          return true;
        } else {
          return false;
        }
      }
    }]).then(function(answer) {

      for (var i = 0; i < res.length; i++) {
        if (res[i].ProductName == answer.choice) {
          var chosenItem = res[i];
        }
      }

      var updateStock = parseInt(chosenItem.StockQuantity) - parseInt(answer.quantity);

      if (chosenItem.StockQuantity < parseInt(answer.quantity)) {
        console.log("Not enough in stock!");
        newPurchase();
      }
      else {
        connection.query("UPDATE Products SET ? WHERE ?", [{StockQuantity: updateStock}, {ItemId: chosenItem.ItemId}], function(err, res) {
          console.log("Thanks for your purchase!");

          var Total = (parseInt(answer.quantity)*chosenItem.Price).toFixed(2);
          console.log("Your total is $" + Total);
          newPurchase();
        });
      }
    });
  });
}

function newPurchase() {
  inquirer.prompt({
    name: "repurchase",
    type: "list",
    choices: ["Yes", "No"],
    message: "Anything else...?"
  }).then(function(answer) {
    if (answer.repurchase == "Yes") {
      custmrCart();
    }
    else {
      console.log("Thanks! Goodbye.")
    }
  });
}

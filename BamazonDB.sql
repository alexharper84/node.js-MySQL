CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE `Products` (
  `ItemId` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `ProductName` VARCHAR(100) NULL,
  `DepartmentName`VARCHAR(100) NULL,
  `Price` DECIMAL(10,2) NULL,
  `StockQuantity` INT NULL
);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('XBOX', 'Electronics', 21, 10);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('MACBOOK', 'Electronics', 20, 19);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('HEADPHONES', 'Electronics', 12, 2);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('TELEVISION', 'Electronics', 33, 5);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('DOGBED', 'Household', 7, 8);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('SKATEBOARD', 'Sports', 10, 9);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('STEPSTOOL', 'Household', 7, 13);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('GUITAR', 'Instruments', 7.50, 16);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('BANJO', 'Instruments', 7, 6);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('SHOES', 'Clothes', 5.50, 7);

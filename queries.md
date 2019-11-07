# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
  SELECT ProductName, CategoryName FROM [Products]
  Join Categories
  ON Products.CategoryId = Categories.CategoryID

  Number of Records: 76
### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
  SELECT OrderId, OrderDate, ShipperName FROM [Orders]
  JOIN Shippers
  ON Orders.ShipperId = Shippers.ShipperId
  WHERE OrderDate < '1997-01-09'

  Number of Records: 161

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT ProductName, Quantity, OrderId	 FROM [OrderDetails]
JOIN Products
ON OrderDetails.ProductId = Products.ProductId
WHERE OrderId = 10251
ORDER BY ProductName;


### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT Orders.OrderID, Customers.CustomerName, Employees.LastName AS EmployeeLastName
FROM ((Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID);

Number of Records: 196
### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
SELECT CategoryName, Count(ProductID) AS Count from Products
JOIN Categories ON Products.CategoryId = Categories.CategoryId
GROUP BY CategoryName;

Number of Records: 8

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 
SELECT OrderID, SUM(Quantity) AS ItemCount FROM [OrderDetails]
Group By OrderID;

Number of Records: 196
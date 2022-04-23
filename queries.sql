-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
    *   SELECT product.ProductName, category.CategoryName
            FROM category
            JOIN product ON category.id = product.CategoryId

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
    *   SELECT ord.Id, shipper.CompanyName
            FROM "order" AS ord
            LEFT JOIN shipper ON ord.shipVia = shipper.Id
        WHERE ord.OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
    *   SELECT od.Quantity, pro.ProductName 
            FROM orderdetail AS od
            LEFT JOIN product AS pro ON od.ProductId = pro.Id
        WHERE od.OrderId = '10251'
        ORDER BY pro.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
    *   SELECT ord.Id, cus.CompanyName, emp.LastName
            FROM 'Order' AS ord
            JOIN customer AS cus ON ord.CustomerId = cus.Id
            JOIN employee AS emp ON ord.EmployeeId = emp.Id
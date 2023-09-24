# Ecommerce-API
Regular Ecommerce API
E-commerce API Documentation
Welcome to the E-commerce API documentation! This API allows you to manage products, create new ones, update quantities, and delete items seamlessly. Follow the steps below to get started:

Getting Started
Initialize the Project:

Run npm init in the project directory to set up the project dependencies.
Start the Server:

Launch the server by running node app.js.
Explore with Postman:

Use Postman to interact with the API.
Viewing Products
GET Request:
Make a GET request to localhost:3000/products to retrieve a list of available products.
Creating a New Product
Start the Server:

Ensure the server is running.
POST Request:

Set the URL to localhost:3000/products/create in Postman.
Request Body:

Select the Body tab, choose x-www-form-urlencoded.
Add name and quantity as keys, and provide the desired values.
Send the Request:

Click "Send" to make a POST request.
If you see a message confirming successful product creation, you've done it right!
Verify:

Check the newly created product by making a GET request to localhost:3000/products.
Deleting a Product
Locate the Product:

Copy the object ID of the product you want to delete.
DELETE Request:

Append the copied ID after localhost:3000/products/.
Execute:

Make a DELETE request.
You'll receive a message confirming the successful deletion of the product.
Updating Product Quantity
Get the Product ID:

Copy the object ID of the product you wish to update.
Build the URL:

Append the ID after localhost:3000/products/.
Add /update_quantity/?number={x} to the URL (replace {x} with the desired quantity change).
POST Request:

The URL should now look like localhost:3000/products/{id}/update_quantity/?number={x}.
Make a POST request to execute the quantity update.
Confirmation:

You'll receive a message containing details of the updated product.
Tech Stack
Backend: Node.js
Database: MongoDB
This documentation should help you get started with our E-commerce API. Please ensure you have the necessary permissions and handle errors gracefully when using the API in a real-world application. If you have any questions or need further assistance, feel free to reach out to our support team. Happy coding!






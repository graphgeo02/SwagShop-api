let express = require('express');
let app = express();   
// let app = express(); → Creates an instance using a function (factory function) 
//let app = express();  app initializes your web application and allows you to define routes and server behavior

let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let db = mongoose.connect('mongodb://localhost/swag-shop');
// mongoose.connect(): Connects your application to the MongoDB database. 'mongodb://localhost/swag-shop' is the URL where your MongoDB server is running.

let Product = require('./model/product')
let WishList = require('./model/wishlist')

app.use(bodyParser.json()); //This line makes sure your app can handle incoming requests with JSON data, converting it into JavaScript objects you can use in your code.
app.use(bodyParser.urlencoded({extended: false}));


// app.use(bodyParser.urlencoded({ extended: false }));: This line adds middleware to parse URL-encoded data from incoming requests, making it available in request.body as a JavaScript object.
// The extended: false option specifies how the data should be parsed.


app.post('/product', function(request, response){  
let product = new Product();    // instance from object likely from schema

//request: An object representing the incoming request. It contains all the data sent by the client, including headers, URL parameters, and the request body

product.title = request.body.title;
product.price = request.body.price;

// Creating a new product: A new instance of the Product model is created. The title and price are populated from the incoming request's body (request.body), which contains the data sent by the client.



product.save(function(err, saveProduct){
    if(err){
        response.status(500).send({error:"Could not save product"})
    }else{
        response.status(200).send(saveProduct);
    }
})

})




//Alternative approached If you wanted to use a variable outside of the callback, you could do something like this:

// If you declare let saveProduct; outside the callback, keep in mind that the assignment happens asynchronously. If you try to access saveProduct immediately after calling product.save(), it may still be undefined until the save operation completes.

// {


//     let saveProduct;

//     product.save(function(err, result) {
//         if (err) {
//             console.error(err);
//         } else {
//             saveProduct = result; // Assigning the result to saveProduct
//             console.log('Saved product:', saveProduct);
//         }
//     });
    
//     // Now you can use saveProduct here, but be aware of asynchronous behavior
    


// }

// The saveProduct in your original code is a parameter of the callback function provided to product.save(), automatically populated by Mongoose with the saved document.
// You can think of it as being provided by the framework at the time the callback is executed, rather than as a separately declared variable.

// Saving to MongoDB: The product.save() function saves the new product to the MongoDB database.
// If there’s an error, it sends back a status code of 500 (server error) with an error message.
// If successful, it sends back a status code of 200 (success) along with the saved product details.




app.listen(3000, function(){
    console.log("Swag Shop API running on port 3000...")
})
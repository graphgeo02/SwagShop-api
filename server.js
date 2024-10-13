// let express = require('express');
// let app = express();   
// let bodyParser = require('body-parser');
// let mongoose = require('mongoose');
// let db = mongoose.connect('mongodb://localhost:27017/swag-shop');

// let Product = require('./model/product');
// let WishList = require('./model/wishlist');

// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({extended: false}));




// app.post('/product', function(request, response){  
// let product = new Product();  

// product.title = request.body.title;
// product.price = request.body.price;



// product.save(function(err, saveProduct) {
//     if(err){
//         response.status(500).send({error:"Could not save product"});
//     }else{
//         response.send(saveProduct);
//     }
// });

// });



// app.listen(3000, function(){
//     console.log("Swag Shop API running on port 3000...");
// })




const express = require('express');
const app = express();   

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;

// Use the default MongoDB port 27017 explicitly in the connection string
mongoose.connect('mongodb://localhost:/swag-shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Product = require('./model/product');
const WishList = require('./model/wishlist');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

// Optimized arrow function for the route
app.post('/product', (req, res) => {  
    const product = new Product();  
    
    // Assign product fields from request body
    product.title = req.body.title;
    product.price = req.body.price;  // Ensure field name consistency

    product.save((err, savedProduct) => {
        if (err) {
            res.status(500).send({ error: "Could not save product" });
        } else {
            res.send(savedProduct);
        }
    });
});

// Optimized arrow function for server listening
app.listen(port, () => {
    console.log(`Swag Shop API running on port ${port}...`);
});

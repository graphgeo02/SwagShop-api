let mongoose = require('mongoose');
let Schema = mongoose.Schema;      //Schema: A constructor function from mongoose that allows you to define the structure of documents (like defining a table schema in SQL).


let product = new Schema(
    {
        title: String,
        price: Number,
        likes: {type: Number, default: 0}
    }
);


// product Schema: Defines the structure of a product document in MongoDB. Each product will have:
// title: A string representing the product's title.
// price: A number representing the product's price.
// likes: A number representing the product's likes with a default value of 0

module.exports = mongoose.model('Product', product);


// In Mongoose, model() is a function that creates a model based on a defined schema. The model represents a collection in MongoDB and gives you methods to interact with that collection.

// mongoose.model('ModelName', schema);

// 'ModelName': The name of the model, like 'Product'. This name will be used to create a collection in MongoDB (e.g., 'products').
// schema: The schema that defines the structure of documents in the collection

//  The code exports a mongoose model called 'Product', which is based on the product schema. This model is what you’ll use to interact with the 'Product' collection in MongoDB (e.g., create, read, update, delete).

//important your first argument must be in First letter caps and singular "Product"
// the mongo db will take it convert it to lowercase and add s "products"


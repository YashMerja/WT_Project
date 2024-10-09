const mongoose = require('mongoose');
const mongoURI ='mongodb+srv://23010101169:yash%400633@cluster0.cq5sa.mongodb.net/mydatabase'
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;


// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const Expense = require('../models/Expense');

// const cors = require('cors');

// const mongoUrl = 'mongodb+srv://23010101169:yash%400633@cluster0.cq5sa.mongodb.net/mydatabase';
// mongoose.connect(mongoUrl).then(() =>{
//     console.log('MongoDB Connected');
//     const app = express();
//     app.use(bodyParser.json());
//     app.use(bodyParser.urlencoded({extended : true}));
//     app.use(cors());

//     //------------For Collections--------//
//     //Get All
//     app.get('/', async (req, res) => {
//             const collections = await Expense.find();
//             res.send(collections);
//     });
    
//     //Get By Id
//     // app.get('/collections/:id', async (req, res) => {
//     //     const Expense = await Expense.findOne({CId : req.params.id});
//     //     res.send(collection);
//     // });
    
//     //To Add new collection
//     app.post('/add', async (req, res) => {
//             const newCollection = new Expense({...req.body});
//             const ans = await newCollection.save();
//             res.send(ans);
//     });

//     //To Update a specific collection
//     // app.patch('/collections/:id', async (req, res) => {
//     //     const collection = await Collection.findOne({CId : req.params.id});
        
//     //     collection.CId = req.body.CId;
//     //     collection.CName = req.body.CName;
//     //     await collection.save();
//     //     res.send("Updated");
//     // });

//     // //To Delete Specific Collection
//     // app.delete('/collections/:id', async (req, res) => {
//     //     await Collection.deleteOne({CId : req.params.id});
//     //     res.send("Collection deleted");
//     // });
//  app.listen(5000, () =>{
//         console.log("Hello From Server");
//     });
// });
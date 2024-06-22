// require('dotenv').config();

// var express = require('express');
// var server = express();
// var routes = require('./routes/routes');
// var mongoose = require('mongoose');
// const cors = require('cors');

// const mongodbURL = process.env.MONGODB_URL;

// (async () => {
//   try {
//     await mongoose.connect(mongodbURL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("DB Connected successfully!");
//   } catch (error) {
//     console.error("Error connecting to DB:", error.message);
//   }
// })();

// server.use(cors());
// server.use(express.json());
// server.use(routes);

// server.listen(3000, function check(error) {
//   if (error) {
//     console.error("Error starting server:", error.message);
//   } else {
//     console.log("Server started successfully on port 3000");
//   }
// });

const express = require("express")
const mongoose = require('mongoose');
var routers = require('./routes/routes');

const bodyParser = require("body-parser")

const app = express()
const cors = require('cors');

const port = 5000;

const mongodbURL = "mongodb+srv://gamosodl:dlgamoso23@todocluster.nz3bpuv.mongodb.net/todoCluster?retryWrites=true&w=majority";

mongoose.connect(mongodbURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection= mongoose.connection;

app.listen(port, ()=>{
  console.log(`Server started on port ${port}`);
})

connection.once("open", ()=>{
  console.log("Database connected successfully");
});


app.use(cors());
app.use(bodyParser.json())
app.use(routers)
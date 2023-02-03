const express = require("express");
const connectDB = require("./dbConnect");
const cors = require('cors')

connectDB()
const app = express();
app.use(express.json());
app.use(cors())
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));



const User = require("./routes/user");

const category = require('./routes/catagory')
const division = require("./routes/division")

app.use("/api/users/", User);

app.use("/api/category/", category);
app.use("/api/division/", division);

const path = require('path')

if(process.env.NODE_ENV==='production')
{
    app.use('/' , express.static('client/build'))
    app.get('*' , (req,res)=>{
         res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
    }) 
}

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World! from home api"));
app.listen(port, () => console.log(`Node JS Server Running at port ${port}`));

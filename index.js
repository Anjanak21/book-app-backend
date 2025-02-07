const express = require('express')
const app = express()
const cors=require('cors')
const mongoose = require('mongoose');
const port = process.env.PORT ||5000;
require('dotenv').config()

app.use(express.json());
app.use(cors({
    origin:['http://localhost:5173','https://book-app-frontend-nu.vercel.app'],
    credentials:true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

const bookRoutes=require('./src/books/book.route')
const orderRoutes=require('./src/orders/order.route');
const userRoutes=require("./src/users/user.route");
const adminRoutes=require("./src/stats/admin.stats")
app.use('/api/books',bookRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/auth',userRoutes)
app.use("/api/admin",adminRoutes)

async function main() {
    await mongoose.connect(process.env.DB_URL);
  
    
  
app.use('/',(req,res)=>{
 res.send("Book server");
})
}

main().then(()=>console.log("mongo connected succesfully")
).
catch(err => console.log(err));

app.listen(port,()=>{
    console.log(`listening port ${port}`);
    
})


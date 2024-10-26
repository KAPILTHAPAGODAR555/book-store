const express = require('express');

const mongoose = require('mongoose');

const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;
require('dotenv').config();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))
// routers
const bookRoutes = require("./src/books/book_route"); 
const orderRoutes = require("./src/orders/order_route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats")
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", userRoutes);

// gets routes
// username : kapilthapa1555  // password : ttIp3rjm2qS5hwSX
app.use("/", (req, res)=>{
res.send("Welcome to The server, running in back")
})
main().then(()=> {console.log("connected")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
}
app.listen(port, ()=>{
    console.log("App listening at " + port);
})

// mongodb+srv://kapilthapa1555:<db_password>@cluster3.y8kgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3
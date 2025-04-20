const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./Config/db");

const dotenv = require("dotenv");
const authRouter = require("./routes/authRoutes");
const todoRouter = require("./routes/todoRoutes");

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//auth Routes
app.use("/auth",authRouter)
app.use("/todos",todoRouter)

//config 
dotenv.config();
// Start Server After DB Connects
const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

// API Endpoints

// Check if server is running
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully");
});

// Sample Todos Data (Replace this with a Database Collection later)
// let todos = [
//   { id: 1, title: "Todo 1", description: "description 1" },
//   { id: 2, title: "Todo 2", description: "description 2" },
//   { id: 3, title: "Todo 3", description: "description 3" },
// ];




// Start the Server
start();

// authentication-login/signup
// file upload =>
  //frontend ->storage ->url ->api ->db(recommended)
  //frontend ->api ->storage ->url ->db
//folder structure od node.js
//connection with frontend
//how to do same work in nextjs

//authentication you take data in login signup sp post method



//validation
app.post('/xyz', async(req,res)=>{
  try {
    console.log('req.body received',req.body.token);
    var decoded=jwt.verify(req.body.token,secretKey)
    console.log('decoded',decoded);
    if(!decoded){
      res.json({
        data:[],
        status:"error",
        error:"login"
      })
    }
      res.json({
        data:decoded,
        status:"success"
      })
    } catch (error) { 
      
      res.json({
        data:[],
        status:"error",
        error:error
      })
    }
  
})
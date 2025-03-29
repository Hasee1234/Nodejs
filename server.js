// const express = require('express')
// const bodyParser=require('body-parser')
// const mongoose=require('mongoose')
// const app = express()
// const connectDB=require("./db/connect")
// var cors=require('cors')
// const port = 8000

// app.use(cors())//install cord to use two servers
// // app.use(express.json())
// app.use(bodyParser.urlencoded({extended:false}))//3rd method
// app.use(bodyParser.json())

// //function for mongo db connection using mongoose
// uri="mongodb+srv://haseemirza123:05august2004@cluster0.x6o6f.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";
// const connectDB=async()=>{
//   return await mongoose.connect(uri,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
//   })
// };
// module.exports=connectDB;

// const start=async()=>{
//   try{
//     await connectDB();
//     app.listen(port,()=>{
//       console.log(`${port} Yes i am connected`);
//     });
//   }catch(error){
//     console.log(error);
    
//   }
// }


// app.get("/",(req,res)=>{
//   res.send('server is running')
// })

// app.get('/todos',(req,res)=>{
//   try{
//     let todos = [
//       { id: 1, title: 'Product 1 by naveed', price: 100, category: 'Category 1', description: 'Description 1', image: 'Image 1' },
//       { id: 2, title: 'Product 2', price: 200, category: 'Category 2', description: 'Description 2', image: 'Image 2' },
//       { id: 3, title: 'Product 3', price: 300, category: 'Category 3', description: 'Description 3', image: 'Image 3' },
//       { id: 4, title: 'Product 4', price: 400, category: 'Category 4', description: 'Description 4', image: 'Image 4' },
//     ]
//     res.json({
//       data:todos,
//       status:"success"
//     })
    
//   }catch(error){
//     res.status(501).json({
//       data:[],
//       status:"error",
//       error:error
//     })
//   }
// })

// app.get('/todos/:id',(req,res)=>{
//   try{
//     let todos=[
//       {id:1,title:'Todo 1',description:'description 1'},
//       {id:2,title:'Todo 1',description:'description 2'},
//       {id:3,title:'Todo 1',description:'description 3'},
//       {id:4,title:'Todo 1',description:'description 4'},
//     ]
//     let todo=todos.find(todo=>todo.id==req.params.id)
//     res.json({
//       data:todo,
//       status:"success"
//     })
//   }catch(error){
//     res.status(501).json({
//       data:[],
//       status:"error",
//       error:error
//     })
//   }
// }
// )

// app.post('/todos/create',(req,res)=>{
//   try{
//     let todos=[
//       {id:1,title:'Todo 1',description:'description 1'},
//       {id:2,title:'Todo 1',description:'description 2'},
//       {id:3,title:'Todo 1',description:'description 3'},
//       {id:4,title:'Todo 1',description:'description 4'},
//     ]
//     let newTodo={
//       id:todos.length + 1,
//       title:req.body.title,
//       description:req.body.description
//     }
//     todos.push(newTodo)
//     res.json({
//       data:todos,
//       status:"success"
//     })
//   }catch(error){
//     res.status(501).json({
//       data:[],
//       status:"error",
//       error:error
//     })
//   }
// })

// app.put('/todos/update/:id',(req,res)=>{
//   try{
//     let todos=[
//       {id:1,title:'Todo 1',description:'description 1'},
//       {id:2,title:'Todo 1',description:'description 2'},
//       {id:3,title:'Todo 1',description:'description 3'},
//       {id:4,title:'Todo 1',description:'description 4'},
//     ]
//     let todo=todos.find(todo=>todo.id==req.params.id)
//     todo.title=req.body.title
//     todo.description= req.body.description
//     res.json({
//       data:todos,
//       status:"success"
//     })

//   }catch(error){
//     res.status(501).json({
//       data:[],
//       status:"error",
//       error:error
//     })
//   }
// })

// app.delete('/todos/delete/:id',(req, res) => {
//     try {
//       let todos=[
//         {id:1,title:'Todo 1',description:'description 1'},
//         {id:2,title:'Todo 1',description:'description 2'},
//         {id:3,title:'Todo 1',description:'description 3'},
//         {id:4,title:'Todo 1',description:'description 4'},
//       ]
//       let todo=todos.find(todo.id==req.params.id)
//       let index=todos.indexOf(todo)
//       todos.splice(index,1)
//       res.json({
//         data:todos,
//         status:"success"
//       })

//     } catch (error) {
//         res.json({
//             data: [],
//             status: "error",
//             error: error
//         })
//     }
// })


// // app.use((req,res,next)=>{//this is the midleware every response will pass from here you can end it here //you ca  use morethan one middleware
// //   console.log('time:',Date.now());
// //   console.log('Request:',req.method,req.query,req.params);
// //   // res.json({message:'Hello world'})  //like you can pass the reponse like this whatever path you are requesting you will get this message
// //   next()

// // })

// app.get('/xyz',(req,res)=>{
//   let users=[
//     {name:'john',age:25},
//     {name:'jane',age:22},
//     {name:'jim',age:20},
//   ]
//   res.json(users)//for rest api we use json we always use this
//   // res.redirect()these options are when we want to return some html
//   // res.send()
//   // res.sendFile()
//   // res.render()
// });

// app.post('/products',(req,res)=>{
//   let products=[
//     {id:1, name:"watch"},
//     {id:2, name:"mobile"},
//     {id:3, name:"speaker"}
//   ]
//   res.status(201).json(products)//yiu can use any tatus by efault it is 200
// })

// // app.get('/v1/users',(req,res)=>{
//   app.get('/v1/users/:id',(req,res)=>{


//     // 4th method  use for send security data
//     console.log('req headers recieved',req.headers);
    
    
//   //first method to send data from client to server:Query param ?variable = "value" &
//   //you can define your request in postman through first method written in readme or using param in postman
//   // console.log("Query Parameter received",req.query);//now this is how  you will receive the request of client in server
//   // console.log("req.params received",req.params)//2nd method used for dynamic id

//   try{
//     // fgcvb
//     let data=[{
//       id:req.query?.id,//this wll be same id that client will send in request
//       name:req.query?.userName,//this wll be same userName that client will send in request
//       age:20
//     }]
//     res.status(200).json({
//       data:data,
//       status:"success"
//     })
//   }catch(error){
//     res.status(501).json({
//       status:400,
//       data:[],
//       status:"error",
//       error:error

//     })
//   }
// })
// //add- post method
// //update-put method
// //delete- delete method
// //get-get method



// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Todo = require("./Models/Todo"); // Import the Todo model


const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB Connection
const uri =
  "mongodb+srv://haseemirza123:05august2004@cluster0.x6o6f.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";
 

// const connectDB = async () => {
//   try {
//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("✅ MongoDB Connected Successfully");
//   } catch (error) {
//     console.error("❌ MongoDB Connection Failed:", error);
//     process.exit(1);
//   }
// };
const connectDB = async () => {
  try {
    await mongoose.connect(uri); // No need for deprecated options
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};


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

// Get All Todos
// app.get("/todos", (req, res) => {
//   res.json({ data: todos, status: "success" });
// });
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find(); // Fetch all todos from MongoDB
    res.json({
       data: todos,
        status: "success"
       });
  } catch (error) {
    res.status(500).json({ 
      data:[],
      status: "error",
       error: error.message 
      });
  }
});



// Get Single Todo by ID
// app.get("/todos/:id", (req, res) => {
//   const todo = todos.find((t) => t.id == req.params.id);
//   if (todo) {
//     res.json({ data: todo, status: "success" });
//   } else {
//     res.status(404).json({ message: "Todo not found" });
//   }
// });
app.get("/todos/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id); // Find by MongoDB ID
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ data: todo, status: "success" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});



// Create a New Todo
// app.post("/todos/create", (req, res) => {
//   const newTodo = {
//     id: todos.length + 1,
//     title: req.body.title,
//     description: req.body.description,
//   };
//   todos.push(newTodo);
//   res.status(201).json({ data: newTodo, status: "success" });
// });
app.post("/todos/create", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = new Todo({ title, description });
    await newTodo.save(); // Save todo to MongoDB
    res.status(201).json({ data: newTodo, status: "success" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});




// Update a Todo by ID
// app.put("/todos/update/:id", (req, res) => {
//   let todo = todos.find((t) => t.id == req.params.id);
//   if (todo) {
//     todo.title = req.body.title || todo.title;
//     todo.description = req.body.description || todo.description;
//     res.json({ data: todo, status: "success" });
//   } else {
//     res.status(404).json({ message: "Todo not found" });
//   }
// });
app.put("/todos/update/:id", async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true } // Returns updated document
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ data: updatedTodo, status: "success" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});




// Delete a Todo by ID
// app.delete("/todos/delete/:id", (req, res) => {
//   let index = todos.findIndex((t) => t.id == req.params.id);
//   if (index !== -1) {
//     todos.splice(index, 1);
//     res.json({ message: "Todo deleted successfully", status: "success" });
//   } else {
//     res.status(404).json({ message: "Todo not found" });
//   }
// });
app.delete("/todos/delete/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted successfully", status: "success" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});



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
app.post("/auth/login",(req, res) => {
  try {
    console.log('req.body recieved',req.body);
    res.json({
      data: req.body,
      status: "success"
    }); 
    
  } catch (error) {
   res.json({
      data:[],
      status:"error",
      error:error
   }) 
  }
});


const userSchema=new mongoose.Schema({
  name:{
    type:String,
    unique:true,
    required:true
  },
  email:{
    type:String,
    unique:true,
    required:true
  },
  password:{
    type:String,
    unique:true,
    required:true
  },
  address:String,
})
const User=mongoose.model('User',userSchema)


app.post("/auth/signup",async(req, res) => {
  try {
    console.log('req.body recieved',req.body);
    if(!req.body?.password){
      res.json({
        data:[],
        status:"error",
        error:"password is required"
      })
    }
    let newUser= await new User({
      name:req.body?.name,
      email:req.body?.email,
      password:req.body?.password,
      address:req.body?.address
    })
    let output =newUser.save()

    res.json({
      data: req.body,
      status: "success"
    }); 
    
  } catch (error) {
   res.json({
      data:[],
      status:"error",
      error:error
   }) 
  }
});


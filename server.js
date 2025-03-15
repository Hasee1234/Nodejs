const express = require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
// const { json } = require('express')
const app = express()
var cors=require('cors')
const port = 8000

app.use(cors())//install cord to use two servers
// app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))//3rd method
app.use(bodyParser.json())


app.get("/",(req,res)=>{
  res.send('server is running')
})

app.get('/todos',(req,res)=>{
  try{
    let todos = [
      { id: 1, title: 'Product 1 by naveed', price: 100, category: 'Category 1', description: 'Description 1', image: 'Image 1' },
      { id: 2, title: 'Product 2', price: 200, category: 'Category 2', description: 'Description 2', image: 'Image 2' },
      { id: 3, title: 'Product 3', price: 300, category: 'Category 3', description: 'Description 3', image: 'Image 3' },
      { id: 4, title: 'Product 4', price: 400, category: 'Category 4', description: 'Description 4', image: 'Image 4' },
    ]
    res.json({
      data:todos,
      status:"success"
    })
    
  }catch(error){
    res.status(501).json({
      data:[],
      status:"error",
      error:error
    })
  }
})

app.get('/todos/:id',(req,res)=>{
  try{
    let todos=[
      {id:1,title:'Todo 1',description:'description 1'},
      {id:2,title:'Todo 1',description:'description 2'},
      {id:3,title:'Todo 1',description:'description 3'},
      {id:4,title:'Todo 1',description:'description 4'},
    ]
    let todo=todos.find(todo=>todo.id==req.params.id)
    res.json({
      data:todo,
      status:"success"
    })
  }catch(error){
    res.status(501).json({
      data:[],
      status:"error",
      error:error
    })
  }
}
)

app.post('/todos/create',(req,res)=>{
  try{
    let todos=[
      {id:1,title:'Todo 1',description:'description 1'},
      {id:2,title:'Todo 1',description:'description 2'},
      {id:3,title:'Todo 1',description:'description 3'},
      {id:4,title:'Todo 1',description:'description 4'},
    ]
    let newTodo={
      id:todos.length + 1,
      title:req.body.title,
      description:req.body.description
    }
    todos.push(newTodo)
    res.json({
      data:todos,
      status:"success"
    })
  }catch(error){
    res.status(501).json({
      data:[],
      status:"error",
      error:error
    })
  }
})

app.put('/todos/update/:id',(req,res)=>{
  try{
    let todos=[
      {id:1,title:'Todo 1',description:'description 1'},
      {id:2,title:'Todo 1',description:'description 2'},
      {id:3,title:'Todo 1',description:'description 3'},
      {id:4,title:'Todo 1',description:'description 4'},
    ]
    let todo=todos.find(todo=>todo.id==req.params.id)
    todo.title=req.body.title
    todo.description= req.body.description
    res.json({
      data:todos,
      status:"success"
    })

  }catch(error){
    res.status(501).json({
      data:[],
      status:"error",
      error:error
    })
  }
})

app.delete('/todos/delete/:id',(req, res) => {
    try {
      let todos=[
        {id:1,title:'Todo 1',description:'description 1'},
        {id:2,title:'Todo 1',description:'description 2'},
        {id:3,title:'Todo 1',description:'description 3'},
        {id:4,title:'Todo 1',description:'description 4'},
      ]
      let todo=todos.find(todo.id==req.params.id)
      let index=todos.indexOf(todo)
      todos.splice(index,1)
      res.json({
        data:todos,
        status:"success"
      })

    } catch (error) {
        res.json({
            data: [],
            status: "error",
            error: error
        })
    }
})


// app.use((req,res,next)=>{//this is the midleware every response will pass from here you can end it here //you ca  use morethan one middleware
//   console.log('time:',Date.now());
//   console.log('Request:',req.method,req.query,req.params);
//   // res.json({message:'Hello world'})  //like you can pass the reponse like this whatever path you are requesting you will get this message
//   next()

// })

app.get('/xyz',(req,res)=>{
  let users=[
    {name:'john',age:25},
    {name:'jane',age:22},
    {name:'jim',age:20},
  ]
  res.json(users)//for rest api we use json we always use this
  // res.redirect()these options are when we want to return some html
  // res.send()
  // res.sendFile()
  // res.render()
});

app.post('/products',(req,res)=>{
  let products=[
    {id:1, name:"watch"},
    {id:2, name:"mobile"},
    {id:3, name:"speaker"}
  ]
  res.status(201).json(products)//yiu can use any tatus by efault it is 200
})

// app.get('/v1/users',(req,res)=>{
  app.get('/v1/users/:id',(req,res)=>{


    // 4th method  use for send security data
    console.log('req headers recieved',req.headers);
    
    
  //first method to send data from client to server:Query param ?variable = "value" &
  //you can define your request in postman through first method written in readme or using param in postman
  // console.log("Query Parameter received",req.query);//now this is how  you will receive the request of client in server
  // console.log("req.params received",req.params)//2nd method used for dynamic id

  try{
    // fgcvb
    let data=[{
      id:req.query?.id,//this wll be same id that client will send in request
      name:req.query?.userName,//this wll be same userName that client will send in request
      age:20
    }]
    res.status(200).json({
      data:data,
      status:"success"
    })
  }catch(error){
    res.status(501).json({
      status:400,
      data:[],
      status:"error",
      error:error

    })
  }
})
//add- post method
//update-put method
//delete- delete method
//get-get method



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
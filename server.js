const express = require('express')
const app = express()
var cors=require('cors')
const port = 8000

app.use(cors())//install cord to use two servers

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

app.get('/v1/users',(req,res)=>{

  //first method to send data from client to server:Query param ?variable = "value" &
  //you can define your request in postman through first method written in readme or using param in postman
  console.log("Query Parameter received",req.query);//now this is how  you will receive the request of client in server
  console.log("req.params received",req.params)//2nd method used for dynamic id

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
// const express = require('express')
// const app = express()

// const upload = require('./multer-config')
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.set("view engine","ejs")


// app.get("/",function(req,res){
// res.render("index")
// })
 


// app.post("/upload", upload.single("image"), function(req,res){
//     res.send("uploaded")
// })

// here all the  code is realtaed to upload file in a folder through multer 

// multer is a node js middleware it is used to store file or upload file 
  // this the code of DiskStorage ek aur hota hai jiska name hai memory storage wo abhi nhi padha jb padhunga tb bataunga tension nhi lene ka mauj krne ja 

//[
// const express = require("express")
// const upload = require("./multer-config")
// const app =  express()

// app.set("view engine","ejs")
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// app.get("/",function(req,res){
//     res.render("index")
// })

// app.post("/upload",upload.single("image"),function(req,res){
//     res.send("hey uploaded")
// })

// app.listen(3000)

//]
//this is the code how to show our file or image in browser through diskStorage multer 

const express = require('express')
const app = express()
const usermodel = require("./models/user-model") 
const upload = require('./multer-config')
const path = require('path')
app.set("view engine",'ejs')
app.use(express.json())
const config = require("./config/mongoose-connection")
const { diskStorage } = require('multer')
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))


app.get("/",function(req,res){
  res.render('index')
})


app.get("/create", async  function(req,res){
 await usermodel.create({
  name:"karan",
  username:"karanraj"
 })
})


app.get("/show", async function(req,res){
  let user = await usermodel.findOne({username:"karanraj"})
  res.render('show',{user})
})


app.post('/upload', upload.single('image'), async  function(req,res){
  let user = await usermodel.findOne({username:"karanraj",name:"karan"})
user.profilepic = req.file.filename;
 await user.save()
 res.send("uploaded")


})


app.listen(3000)






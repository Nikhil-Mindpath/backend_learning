// console.log("Chai aur code ");

require('dotenv').config()

const data  =  require('express')
const app  =  data()
const port = 3000

app.get("/",function(res,req){
    req.send("Hii self wriiten ");
})

app.use(function(req,res,next){
    console.log("I am calling from middle ware ");
    next();
})

app.get('/twitter',(req,res)=>{
   res.send("Hitesh ")
})

app.get("/profile",(req,res)=>{
    res.send("This is Profile picture")
})

app.listen(process.env.PORT,()=>{
    console.log("Example app started at port ",port);
})
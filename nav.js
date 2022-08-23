const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.write("<h1>Hello Tayyab Qli</h1>")
    res.write("<h1>wellcom Tayyab Qli</h1>")
    res.send()
})

app.listen(8000,()=>{
    console.log("Lisning the port 8000");
})

const express = require('express')
const {mongoose } = require('mongoose')
const {Usermodel} = require('./model/User')
const moongoose =require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const dbUrl='mongodb+srv://Tayyabali:452245@user.syqxubb.mongodb.net/?retryWrites=true&w=majority'
 mongoose.connect(dbUrl).then((result)=>{
    console.log("DB connect");
 }).catch((e)=>{
    console.log(e);
 })

 app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.json({usernmae:'Tayyab',password:'abc'}))
app.post('/signin',(req,res)=>{
    console.log(req.body)
    Usermodel.find({email: req.body.email , password : req.body.password})
    .then(result => {        
        if(result.length == 0)
        {
            res.status(400).send()
        }
        else{  
            SignedUser = result;       
            res.status(200).send()
        }
    })
    .catch(err=>{
        console.log(err);
        res.status(200).send(err);
    })
})

app.post('/signup',(req,res)=>{
    Usermodel.find({email:req.body.email})
    .then(result => {        
        console.log(result)
        if(result.length == 0)
        {
            Usermodel.insertMany(req.body)
            .then(result => {        
                res.status(200).send('Account Created')
            })
            .catch( error => {
                res.status(400).send('Some Error')
            })
        }
        else{
            console.log('Account Already Exist With this Email')            
            res.status(200).send('Account Already Exist With this Email')
        }
    })
    .catch(err=>{
        console.log(err);
        res.status(200).send(err);
    })
   
})


app.listen(8000,()=>{
    console.log("Lisning the port 8000");
})


const express = require('express')
const {mongoose } = require('mongoose')
const User = require('./model/User')
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


 var users =[{
    id: 1,
    image: "John Doe",
    price : 23,
    title: "john@doe"
}];
 app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/Product', (req, res) => res.json(users))
app.post('/UdateProduct',(req,res)=>{
    var user = req.body.user;
    users.push(user);

    return res.send('User has been added successfully');
})



// app.get('/', (req, res) => res.json({usernmae:'Tayyab',password:'abc'}))
// app.post('/signin',(req,res)=>{
//     // console.log(req.body)
//     // let {email, password} = req.body;

//     User.find({email: req.body.email , password : req.body.password})
//     .then(result => { 
//         console.log('result', result)
//         if(result.length != 0)
//         {
//             res.status(400).send({
//                 success:true,
//                 message:"user found",
//                 data:result
//             })
//         }
//         else{  
//             SignedUser = result;    
//             console.log("User Login",SignedUser);   
//             res.status(200).send({
//                 success:false,
//                 message:"user not found",
//                 data:result
//             })
//         }
//     })
//     .catch(err=>{
//         console.log(err);
//         res.status(200).send(err);
//     })
// })

// app.post('/signup', async(req,res)=>{
//    await User.find({email:req.body.email})
//     .then(result => {        
//         console.log('result', result.length)
//         if(result.length == 0)
//         {
//             User.insertMany(req.body)
//             .then(result => {        
//                 res.status(200).send({
//                     success:true,
//                     message:"account created",
//                     data:result
//                 })
//             })
//             .catch( error => {
//                 res.status(400).send('Some Error')
//             })
//         }
//         else{
//             console.log('Account Already Exist With this Email')            
//             res.status(200).send('Account Already Exist With this Email')
//         }
//     })
//     .catch(err=>{
//         console.log(err);
//         res.status(200).send(err);
//     })
   
// })

let url = process.env.PORT || 8000;

app.listen(url,()=>{
    console.log("Lisning the port 8000");
})


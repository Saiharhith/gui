const express= require('express');
const mongoose=require('mongoose');
const BrandName=require('./model');

const app=express();
app.use(express.json());

mongoose.connect('mongodb+srv://saiharshith:987654321@cluster0.f3vt5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(
    ()=>console.log('db connect indhi rooo😉...')
).catch(err=>console.log(err))

app.get('/',(req,res)=>{
    res.send('<h1>helloworld...! 😒🥱🥱🥱 vachindha...?</h1>');
})
//Adding value using api
app.post('/addbrands',async (req,res)=>{
    const {brandname}=req.body;
    try{
        const newData=new BrandName({brandname});
        await newData.save();
        return res.json(await BrandName.find());
    }
    catch{
        console.log(err.message);
    }
})
app.listen(3000,()=>console.log('server running anta 😴😴chusuko raa...!👀👀👀'));

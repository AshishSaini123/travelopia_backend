
const express=require("express");
const getData=require('./db')

const app=express();

app.use(express.json());

console.log(getData)

const main=async()=>{
    let data=await getData();
    data=await data.find().toArray()
    return data;
}
app.get("/",async(req,res)=>{
    
    try {
        let result=await main();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(400).send('something went wrong');
    }
    
})

app.post("/post",async(req,res)=>{
    const reqBody=req.body;
    console.log(reqBody);
    let data=await getData();
    let result=await data.insertOne(reqBody);
    res.status(200).send(result);
})

app.listen(3002,()=>{
    console.log('server listening on port 3002');
})
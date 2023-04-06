
const {MongoClient}=require("mongodb")

const url="mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1";
const client=new MongoClient(url);

const dbName='travel';


async function getData() {
    
    let result=await client.connect();
    let db=result.db(dbName);
    let collection=db.collection('users');
    return collection;
  }
  
  module.exports=getData;
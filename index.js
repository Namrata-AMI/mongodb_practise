const mongoose = require("mongoose");
main()
.then(()=>{
    console.log("connection successful");
})
.catch((err)=>{
    console.log(err); 
})

    async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});
const user = mongoose.model("User",userSchema);                  //user is model here.   // User is collection.
/*user.insertMany([
    {name:"tony",email:"tony@gmail.com",age:17},
    {name:"peter",email:"peter@gmail.com",age:21},
    {name:"shreya",email:"shreya@gmail.com",age:18},
])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
*/

const user1 = new user({
    name:"adam",
    email:"adam@gmail.com",
    age:12,
 });

/*user.findOne({_id: new ObjectId('65d6cf192c99d8a981969263')})
.then((res)=>{
   console.log(res);
});*/


/*user.updateOne({name:"adam"},{age:19})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})*/

/*user.updateMany({age:{$gt:12}},{age:56})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});*/

/*user.findOneAndUpdate({name:"adam"},{name:"bruce"},{new:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})*/

/*user.deleteOne({name:"adam"})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})*/

/*user.deleteMany({age:12})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})*/


/*user.findOneAndDelete({name:"shreya"})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})*/


/*user.findByIdAndDelete("65d6199e9868a4f6dd1a5d17")
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err)
})*/






















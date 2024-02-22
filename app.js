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

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:30,
    },
    author:{
        type:String,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min: [1,"please enter valid price"],
    },
    discount:{
        type:Number,
        default:0,
    },
    genre:[String],
    
});


const book = mongoose.model("Book",bookSchema);
book.findByIdAndUpdate('65d6e917a2c12f58c75aa0a4',{price:-100},{runValidators:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.path);
})
/*let book1 = new book({
    title:"mathematics",
    author:"RD Sharma",
    price:1900,
})
book1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err)
});*/


/*const book = mongoose.model("Book",bookSchema);
let book1=  new book({
    title:"marvel",
    author:"johnathan",
    price:"1000",
    genre:["comics","superhero","fiction", "fan"],
})
book1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err)
});
*/
/*book1.deleteOne({title:"mathematics"})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})*/







const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/Listing.js");
const user=require("../models/user.js");
async function main(){
    await mongoose.connect('mongodb+srv://vs7174379:4wapZpagHOynYAD5@cluster0.ltplaev.mongodb.net/');
}
main().then(()=>{console.log("connection succesfuly")}).catch((err)=>{
    console.log(err);
})
const initDB=async ()=>{
    await Listing.deleteMany({})
    initData.data=initData.data.map((obj)=>({...obj,owner:"657876a80e2707f5bfec045c"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized")
};
initDB();

const express=require("express");
const cors=require("cors");
const port=process.env.PORT || 3000;
const app=express();
const {jeedata}=require("./jeedata");
const {neetdata}=require("./neetdata");

app.set("view engine","ejs");
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.get("/api/jee",(req,res)=>{
    res.json(jeedata);
})

app.get("/api/neet",(req,res)=>{
    res.json(neetdata);
})

app.listen(port,()=>{
    console.log(`server is litsen on port ${port}`);
});
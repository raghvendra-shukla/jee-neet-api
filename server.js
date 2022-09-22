const express=require("express");
const cors=require("cors");
const port=3000;
const app=express();
const {JEEdata}=require("./JEEdata");
const {NEETdata}=require("./NEETdata");

app.set("view engine","ejs");
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.get("/api/jee",(req,res)=>{
    res.json(JEEdata);
})

app.get("/api/neet",(req,res)=>{
    res.json(NEETdata);
})

app.listen(port,()=>{
    console.log(`server is litsen on port ${port}`);
});
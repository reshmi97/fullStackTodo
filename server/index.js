import express from "express";
import cors from "cors";
import db from "./db.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port= 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
db.connect();
//Route

//create a todo
app.post("/todos",async (req,res)=>{
    try {
        const {description}=req.body;
        const newTodo= await db.query("INSERT INTO todo(description) VALUES($1) RETURNING * ;",[description]);
        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err); 
    }
    
});

//get all todos
app.get("/todos",async(req,res)=>{
    try{
        const allTodo= await db.query("SELECT * FROM todo");
        res.json(allTodo.rows);
    }catch(err){
        console.log(err);
    }
});

//get a todo
app.get("/todos/:id",async (req,res)=>{
    try{
        const id=parseInt(req.params.id);
        const todo=await db.query("SELECT * FROM todo WHERE id=$1;",[id]);
        res.json(todo.rows[0]);
    }catch(err){
        console.log(err);
    } 
})

//update a todo
app.patch("/todos/:id",async (req,res)=>{
    try{
        const id=parseInt(req.params.id);
        const updatedDescript=req.body.description;
        const newDes=await db.query("UPDATE todo SET description = $1 WHERE id=$2",[updatedDescript,id]);
    
        res.json("Todo updated!"); 

    }catch(err){
        console.log(err);
    }   
})

//delete a todo

app.delete("/todos/:id",async (req,res)=>{
    const id=parseInt(req.params.id);
    await db.query("DELETE FROM todo WHERE id=$1",[id]);
    res.json("Todo Deleted Successfully!");
})

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`);
})

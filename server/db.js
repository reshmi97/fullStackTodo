import pg from "pg";

const db=new pg.Client({
    host:"localhost",
    port:5432,
    database:"pernTodo",
    user:"postgres",
    password:"Reshmi@123"
    }
);

// db.connect();

export default db;
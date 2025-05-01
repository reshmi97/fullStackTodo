import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const db=new pg.Client({
    host:process.env.Host,
    port:process.env.DbPort,
    database:process.env.Database,
    user:"postgres",
    password:process.env.Password
    }
);


export default db;
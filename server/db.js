import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

// const { Pool } = pg;
// const db = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
// export default db;

const db=new pg.Client({
    host:process.env.Host,
    port:process.env.DbPort,
    database:process.env.Database,
    user:"postgres",
    password:process.env.Password
    }
);

export default db;
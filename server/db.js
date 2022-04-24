const { Pool } = require("pg");

//const Pool = require("pg").Pool;

const pool= new Pool({
    user: "postgres",
    password:"Aravind926@",
    host: "localhost",
    port: 5432,
    database: "Project"
});

module.exports= pool;

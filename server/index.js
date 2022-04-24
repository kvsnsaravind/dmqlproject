const express = require("express");
const app= express();
const cors= require("cors"); 
const pool =require("./db");

app.use(cors());
app.use(express.json());

app.get("/customers",async(req,res)=> {
    try{
        const allCustomers = await pool.query("SELECT * FROM customer_dataset limit 10");
        res.json(allCustomers.rows)
    }catch(err){
        console.error(err.message)
    }
})

app.get("/customers/:customer_id", async(req,res)=>{
    try{
        const{customer_id} =req.params;
        const customer = await pool.query("SELECT * FROM customer_dataset WHERE customer_id =$1 limit 10", [customer_id]);

        res.json(customer.rows[0])
    }catch(err){
        console.error(err.message)
    }
})

app.listen(5001, () => {
    console.log("server has started on port 5001");
});
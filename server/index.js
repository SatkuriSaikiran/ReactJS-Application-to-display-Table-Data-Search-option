const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


// middleware
app.use(cors());
app.use(express.json());

// get the customers info

app.get("/infos",async(req, res) => {
    try {
        const allinfos = await pool.query("SELECT * FROM info");
        res.json(allinfos.rows);
    
    } catch(err){
        console.log(err.message);

    }
})

// get a customer info



app.listen(5000, () => {
    console.log("sever has started on port 3000")
});
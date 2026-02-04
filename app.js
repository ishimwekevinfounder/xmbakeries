const express = require("express");
const app = express();
const db = require("./DB");

// allow express to parse JSON
app.use(express.json());

// endpoint
app.get("/", (req, res) => {
    db.query("SELECT * FROM products", (err, data) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.json(data);
    });
});

// insert endpoint (FIXED)
app.post("/insert", (req, res) => {
    const { name, price } = req.body;

    const sql = "INSERT INTO products (name, price) VALUES (?, ?)";
    db.query(query,[price,category,quantity], (err, result) => {
        res.json("Product inserted successfully");
    });
});

// start server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

// delete endpoint
// remove/10
app.delete("/remove/:id", (req, res) => {
    const sql = "DELETE FROM products WHERE id = ?"
    db.query(sql, req.params.id, (err, result) => {
        res.json(result)
    })
})
 
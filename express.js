const express = require("express");
const { Pool } = require("pg");

const app = express();
const pool = new Pool({
    connectionString: "postgres://josh:thornton123@localhost:5432/josh",
});

app.get("/products", async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM products");
        const users = result.rows;
        console.log(result);
        client.release();

        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving users from the database");
    }
});

app.get("/test", async (req, res) => {
    try {
        const client = await pool.connect();
        client.release();

        res.send("Database connection successful!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error connecting to the database");
    }
});

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});



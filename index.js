import express from "express";

// Create express app
const app = express();

// Define routes

app.get('/', (req, res)=> {
    console.log(req.query, req.headers);
    res.send("Over and out!");
});

app.get('/ping', (req, res) => {
    console.log(req.query, req.headers);
    res.send("Ping pong");
});

app.get('/file', (req, res) => {
    console.log(process.cwd());
    res.sendFile(process.cwd() + "/index.html");
});

// Listen for incoming requests
app.listen(4000, ()=> {
    console.log("Express app is running!");
});


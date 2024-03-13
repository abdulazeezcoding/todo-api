import express from "express";
import cors from "cors";
import todoRoutes from './routes/todos.routes.js';
import bodyParser from "body-parser";

// Create express app
const app = express();

// Apply middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

// Define routes
app.use(todoRoutes);

// Listen for incoming requests
app.listen(4000, ()=> {
    console.log("Express app is running!");
});


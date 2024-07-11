const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const tasksRouter = require('./routers/Tasks')
const userRoutes = require("./routers/users")
const authRoutes = require("./routers/auth")


// middlewares
app.use(cors());
app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use(express.json());

//const DBURL ='mongodb+srv://supipin622:supipi622-abc@cluster0.gnz05kk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


const server = app.listen(3001, 'localhost', () => {
    console.log(`Node server is running on http://localhost:${server.address().port}`);
});



// const connect = async () => {
//     try {
//         await mongoose.connect(DBURL);
//         console.log('Connected to MongoDB successfully');
        
//     } catch (error) {
//         console.log(error);
//         console.error('MongoDB Connection Error:', error);
//     }
// };

// database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.DBURL);
        console.log('Connected to MongoDB successfully ');
        
    } catch (error) {
        console.log(error);
		console.log("Could not connect database!");
    }
};

connect();

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use('/api/tasks', tasksRouter);






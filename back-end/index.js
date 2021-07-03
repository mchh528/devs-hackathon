import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';



/*

Template for main back-end app

import studentRoutes from './routes/student.js';

const app = express();



app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());
app.use('/students', studentRoutes);


const CONNECTION_URL = "mongodb+srv://admin:1234@cluster0.4uxdi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () => 
console.log(`Connection is running on port ${PORT}`)
)).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);


*/

import studentRoutes from './routes/student.js';
import gameRoutes from './routes/gameRoutes.js';


const app = express();



app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use(cors());
app.use('/students', studentRoutes);
app.use('/problem_info', gameRoutes);


const CONNECTION_URL = "mongodb+srv://admin:1234@cluster0.4uxdi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

let looking = [];


mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () => 
console.log(`Connection is running on port ${PORT}`)
)).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);

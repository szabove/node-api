import "reflect-metadata";
import express from 'express';
import router from './routes';

const baseUrl = '/api';

const app = express();

app.use(express.json())

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use(baseUrl, router)

app.listen(8080); 
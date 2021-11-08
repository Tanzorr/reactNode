require('dotenv').config()

const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload')
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 6000;

const  app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
//app(fileUpload({}))
app.use(errorHandler);

const  start= async ()=>{
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        app.listen(PORT, ()=>console.log(`Sever started on port${PORT}`));
    }catch (e) {
        console.log(e)
    }
}

start();


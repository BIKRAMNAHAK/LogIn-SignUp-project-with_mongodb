const express = require('express');
const app = express();
const env = require('dotenv');
env.config()
const PORT = process.env.PORT
const path = require('path')
const myPath = path.join(__dirname , "/Views") 
const bodyParser = require('body-parser')
const Router = require('./Routres/Routers');
const dataBase = require('./Confring/dataBase')
const cookie_parser = require('cookie-parser')
const multer = require('./Confring/imageUplode')

app.set('view engine','ejs')
app.set('views',myPath)

app.use(express.static(myPath))
app.use('/uplodeFile' , express.static(path.join(__dirname , 'uplodeFile')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookie_parser())
app.use('/',Router)

app.listen(PORT , (err)=>{
    if(!err){
        console.log(`Server is running on port http://localhost:${PORT}`)
    }
})
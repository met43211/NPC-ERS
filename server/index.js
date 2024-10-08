require('dotenv').config();
const express = require('express')
const path = require('path');
const authorRouter = require('./routes/author.routes')
const bookRouter = require('./routes/book.routes')
const cors = require('cors');


const PORT = process.env.PORT || 4000

const app = express()

app.use(cors());
app.use(express.json())
app.use('/media', express.static(path.join(__dirname, 'media')));
app.use('/api', authorRouter)
app.use('/api', bookRouter)

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))
require('dotenv').config();
const pgp = require('pg-promise')();

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,              
    database: process.env.DB_NAME,
    user: process.env.DB_USER,     
    password: process.env.DB_PASS,
};


const db = pgp(dbConfig);

db.connect()
    .then(obj => {
        console.log('Connected to the database');
        obj.done();
    })
    .catch(error => {
        console.error('Error connecting to the database:', error);
    });

module.exports = db;
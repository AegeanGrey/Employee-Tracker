// Takes the dependencies needed from package.json and stores them within variables
const express = require('express');
const mysql = require('mysql2');

// Takes the CLI Class from index.js and creates a new instance of it
const CLI = require('./lib/index.js');
const cli = new CLI();

// Establishes express library call
const app = express();

// Middleware that anthing json will pass through first
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connects to MySQL database for us to run queries/interact with the db
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeeTracker_db'
  },
  console.log(`Connection successful`)
);

// Calls the run function within the CLI class
cli.run();

/*
// Shows the department table contents in the console
db.query('SELECT * FROM department', (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

// Shows the role table contents in the console
db.query('SELECT * FROM role', (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

// Shows the employee table contents in the console
db.query('SELECT * FROM employee', (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
*/

// Takes the dependencies needed from package.json and stores them within variables
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
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

// Terminal shows us the server connection is established via the port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

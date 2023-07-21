// Takes the dependencies needed from package.json and stores them within variables
const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');

// Allows us to use options and question arrays from 'cli.js'
const { options, question } = require('./lib/cli.js');

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

class CLI {
  constructor () {}
  run() {
    return inquirer
  
    // Prompts user with question variable from 'cli.js'
    .prompt(question)
  
    // Takes user response stored in 'userSelect'
    .then(({ userSelect }) => {

    let newDepartment;
    let newRole;
    let newEmployee;

    // Switch case that compares 'userSelect' with the 'options' array to find a match
    switch (userSelect) {
      
        // Once a match is found it will execute a line of code that the matched statement is associated with
        case options[0]:

          // Shows all Departments w/ their name
          db.query('SELECT * FROM department', (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
              cli.run();
            }
          });
        break;
              
        case options[1]:

          // Shows all Roles w/ their titles and salary
          db.query('SELECT title, salary FROM role', (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
              cli.run();
            }
          });
        break;
                  
        case options[2]:

          // Shows all of the Employees w/ their first and last names
          db.query('SELECT first_name, last_name FROM employee', (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
              cli.run();
            }
          });
        break;
  
        case options[3]:
          console.log('Adding a new Department');
        break;
              
        case options[4]:
          console.log('Adding a new Role');
        break;
                  
        case options[5]:
          console.log('Adding a new Employee');
        break;
                      
        case options[6]:
          console.log('Updating an Employee');
        break;
      
        case options[7]:

          // Disconnects the user from the application
          db.end(function(err) {
            if (err) {
              console.log(err);
            } else {
              console.log('Goodbye');
            }
          });
        break;
        }
    });           
  }
}

// Takes the CLI Class and creates a new instance of it
const cli = new CLI();

// Calls the run function within the CLI class
cli.run();

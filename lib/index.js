const inquirer = require('inquirer');

const { options, question } = require('../lib/cli.js');

class CLI {
  constructor () {}
  run() {
    return inquirer
    
    // Prompts user with question variable from 'cli.js'
    .prompt(question)
    
    // Takes user response stored in 'userSelect'
    .then(({ userSelect }) => {

      // Switch case that compares 'userSelect' with the 'options' array to find a match
      switch (userSelect) {
        
        // Once a match is found it will execute a line of code that the matched statement is associated with
        case options[0]:
            console.log('Viewing all departments');
            break;
                
        case options[1]:
            console.log('Viewing all Roles');
            break;
                    
        case options[2]:
            console.log('Viewing all Employees');
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
            console.log('Exiting Application');
            break;
        }
    })           
  }
}
                                    
module.exports = CLI;
                                    
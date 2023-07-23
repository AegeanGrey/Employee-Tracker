# employee-tracker
<img width="337" alt="image" src="https://github.com/AegeanGrey/employee-tracker/assets/125229624/b7e76999-2139-48b3-9ce3-98c7ca3a3659">

## Description
This employee tracker application is built to take user-inputted data and store it within a database by utilizing MySQL! You can add and view stored data to keep track of all your departments, roles and employees with their salary and managers.

## Requirements
- Git/Gitbash
- Code Editor (Ex: VS Code)
- Node.js

## Installation
To pull the environment onto your side you can do the following:

1.) Copy the SSH or HTTPS Key for the Repository by selecting the green "Code" button

2.) Go to Git or GitBash to clone the repo by entering the following into the command terminal:

git clone git@github.com:profile-name/repo-name.git

or in this case for this particular repo:

git@github.com:AegeanGrey/employee-tracker.git

3.) navigate to the file path and type the following to open the code:

`code .`

We will then need to install the required packages/modules for the README Generator to work:

4.) In the Code Editor, right click on the 'index.js' file and select 'Open in Integrated Terminal'

5.) In the Terminal, type in the following to install the required packages:

`npm i`

We will then need to install the required packages/modules for the README Generator to work:

4.) In the Code Editor, right click on the 'index.js' file and select 'Open in Integrated Terminal'

5.) In the Terminal, type in the following to install the required packages:

npm i

## Usage
1.) Type the following into the Terminal to run the application:

- `node index.js` to start the application

2.) You should then be listed a prompt of options to choose from:

- `View All Departments`
- `View All Roles`
- `View All Employees`
- `Add Department`
- `Add Role`

Note: The options below do not have functionality as of yet

- `Add Employee`
- `Update Employee`

3.) When selecting any of the `View` options, you will be presented the following table (per category):

- `View All Departments` - Departments ID and Department Name
- `View All Roles` - Role ID, Role Title, Associated Department Name and Role Salary
- `View All Employees` - Employee ID, First Name, Last Name, Role Title, Associated Department Name, Role Salary and Manager

4.) When selecting an `Add` option you will be presented with the following:

- `Add Department` - Will prompt you asking `What would you like to name this department?` and will then confirm the department you've created into the database w/ a new ID (you can then click `View All Department` and see it has been created at the very bottom of the table)

- `Add Role` - Will prompt you the following `What would you like to name this role?` once answered it will ask `How much is this roles salary?` (Note: you can only input numbers into this category otherwise it will error out) and finally it will ask `Which department does this role belong to?` which will display a list of all the current department names within the database for you to select one.

Once all questions are answered correctly it will then confirm that your new role has been created in the console (you can then click `View All Roles` and see it has been created at the very bottom of the table)

5.) Once you're done you can then select `Quit` to exit out of the application

## Credits
This application was built from scratch by AegeanGrey/Todd D.

## License
MIT License

Copyright (c) 2023 Todd D.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERW

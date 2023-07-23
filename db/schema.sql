DROP DATABASE IF EXISTS employeeTracker_db;
CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  department VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  manager_id INT,
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);

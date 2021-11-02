# Employee Management System
![badge](https://img.shields.io/badge/license-MIT-brightgreen)

## Description
This is a command-line application that manages a company's employee database, using Node.js, Inquirer, and MySQL.

## Table of Contents
- [Important URLs](#urls)
- [Foreword](#foreword)
- [Usage](#usage)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mockup](#mock-up)
- [Frameworks](#frameworks)
- [License](#Licensing)

## URLs
- [GitHub Repo URL](https://github.com/candracodes/employee-management-system)
- [Walk Through Video](https://watch.screencastify.com/v/F3M4f8uijuJ0xqXmyYjH)
- [Full Acceptance Criteria](./assets/README.md)

## Usage
- This application is invoked running `npm start` into the command line

## User-Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance-Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Mock-Up

* This application should resemble the following screenshots and video example:

![Screenshot 1](./assets/12-sql-homework-demo-01.png)
[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./assets/12-sql-homework-video-thumbnail.png)](https://2u-20.wistia.com/medias/2lnle7xnpk)

## Frameworks

The project is created using the following frameworks and packages

- [Node.JS](https://nodejs.org/en/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [Console.Table](https://www.npmjs.com/package/console.table)

## Licensing
The project is made possible with the following Licensing:
- [MIT](license.txt)



// Import and require necessary packages
const mysql = require('mysql2');
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "company_db"
});

// Error handling and console log to ensure connection exits
db.connect(function (err) {
  if (err) throw err;
  console.log(`Connected to the company_db database.`)
  startApp();
});

// Create a function, rather than exporting a module, so it comes back here as square 1
function startApp() {
  inquirer.prompt([{
      type: "list",
      message: "What would you like to do?",
      name: "choice",
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Exit"
      ]
    }])
    .then(function (answer) {
      console.log("HEY, this is something");
      switch (answer.choice) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateEmployee();
          break;
        case "View All Roles":
          viewAllRoles();
          break;
        case "Add Role":
          addRole();
          break;
        case "View All Departments":
          viewAllDepartments();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Exit":
          connection.end();
          break;
      }
    });
}

// Series of follow up functions with additional prompts based on user's intial answer to "What would you like to do?"

// TODO: viewAllEmployees()
function viewAllEmployees() {
  db.query(
    "SELECT employee.employee_id, employee.first_name, employee.last_name, roles.title, roles.salary, department.name, manager_id FROM employee INNER JOIN roles ON employee.roles_id = roles.roles_id INNER JOIN department ON roles.department_id = department.department_id;",
    
    function (err, res) {
      if (err) throw err;
      console.table(res);
      startApp();
    }
  );
};

// TODO: viewAllDepartments()
function viewAllDepartments() {
  console.log("viewAllDepartments function has been triggered")
  db.query(
    "SELECT * FROM department;",
    function (err, res) {
      if (err) throw err;
      console.table(res);
      startApp();
    }
  );
};

// TODO: viewAllRoles()
function viewAllRoles() {
  console.log("viewAllRoles function has been triggered")
  db.query(
    "SELECT * FROM roles;",
    
    function (err, res) {
      if (err) throw err;
      console.table(res);
      startApp();
    }
  );
};

// TODO: addEmployee()
function addEmployee() {
  console.log("addEmployee function has been triggered");
  // CREATE QUESTIONS FOR PROMPT
  let questions = [
    {
      type: "input",
      message: "What's the employee's first name?",
      name: "first_name"
    },
    {
      type: "input",
      message: "What's the employee's last name?",
      name: "last_name"
    },
    {
      type: "input",
      message: "What is the ID of this employee's title (role_id)?",
      name: "roles_id"
    },
    {
      type: "input",
      message: "What is the ID of this employee's manager (manager_id)?",
      name: "manager_id"
    }
  ];
  inquirer.prompt(questions).then(function(answer) {
    // TODO: Find out why this isn't actually inserting into employee table
    db.query(
      "INSERT INTO employee SET ?",
      {
        first_name: answer.first_name,
        last_name: answer.last_name,
        roles_id: answer.roles_id,
        manager_id: answer.manager_id,
      },
      function(error) {
        if (error) throw error;
        console.log("Successfully added new employee!");
        startApp();
      }
    );
  });
};

// TODO: updateEmployee()
function updateEmployee() {
  console.log("updateEmployee function has been triggered")
  // Prompt updateEmployee related questions
  // Run a query 
  // Return console.table response
};


// TODO: addRole()
function addRole() {
  console.log("addRole function has been triggered")
  // Prompt addRole related questions
  // Run a query 
  // Return console.table response
};


// TODO: addDepartment()
function addDepartment() {
  console.log("addDepartment function has been triggered")
  inquirer
    .prompt({
      type: "input",
      message: "What is the name of this new department?",
      name: "department"
    })
    .then(function(answer) {
      // TODO: Figure out why this isn't inserting into db
      db.query("INSERT INTO department SET ?",
        {
          name: answer.department,
        },
        function(err, res) {
          if (err) throw err;
          startApp();
        });
    });
};
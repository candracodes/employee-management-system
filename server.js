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

// Series of initial prompts
// exports.startApp = () => {

// };

// Series of follow up functions with additional prompts based on user's intial answer to "What would you like to do?"

// TODO: viewAllEmployees()
function viewAllEmployees() {
  db.query(
    "SELECT employee.id, employee.first_name, employee.last_name FROM employee INNER JOIN company_role ON employee.role_id = company_role.id;",
    
    function (err, res) {
      if (err) throw err;
      console.table(res);
      startApp();
    }
  );
};

// TODO: addEmployee()
function addEmployee() {
  console.log("addEmployee function has been triggered")
  // Prompt addEmployee related questions
  // Run a query to INSERT data
  // Return console.table response
};

// TODO: updateEmployee()
function updateEmployee() {
  console.log("updateEmployee function has been triggered")
  // Prompt updateEmployee related questions
  // Run a query 
  // Return console.table response
};

// TODO: viewAllRoles()
function viewAllRoles() {
  console.log("viewAllRoles function has been triggered")
  // Prompt viewAllRoles related questions
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

// TODO: viewAllDepartments()
function viewAllDepartments() {
  console.log("viewAllDepartments function has been triggered")
  // Prompt viewAllDepartments related questions
  // Run a query 
  // Return console.table response
};

// TODO: addDepartment()
function addDepartment() {
  console.log("addDepartment function has been triggered")
  // Prompt addDepartment related questions
  // Run a query 
  // Return console.table response
};
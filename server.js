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

// viewAllEmployees() -- DONE
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

// viewAllDepartments() -- DONE
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

// viewAllRoles() -- DONE
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

// addEmployee() -- DONE
function addEmployee() {
  db.query("SELECT * FROM roles", function (err, res) {
    if (err) throw err;
    console.log(res)
    const roles = res.map(element => element.title)
    inquirer.prompt([{
      name: "first_name",
      type: "input",
      message: "What's the employee's first name?",
    }, {
      name: "last_name",
      type: "input",
      message: "What's the employee's last name?",
    }, {
      name: "roles",
      type: "list",
      message: "What is the title of their role?",
      choices: roles
    }]).then(answers => {
      console.log("roles", answers.roles);
      const chosenRole = res.find(element => {
        return element.title === answers.roles
      });
      console.log(chosenRole.roles_id);
      const newEmployee = {
        first_name: answers.first_name,
        last_name: answers.last_name,
        roles_id: chosenRole.roles_id
      };
      db.query(`INSERT INTO employee (first_name, last_name, roles_id) VALUES ('${answers.first_name}', '${answers.last_name}', '${chosenRole.roles_id}');`, (err, success) => {
        console.log(`${newEmployee.first_name}, ${newEmployee.last_name}, ${chosenRole.roles_id} has successfully been added to the employee database.`);
        startApp();
      });

    })

  })

};

// addDepartment() -- DONE
function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      message: "What would you like to name the new department?",
      name: "department"
    })
    .then(function (answer) {
      console.log(answer.department);
      db.query("INSERT INTO department SET ?", {
          name: answer.department,
        },
        function (err, res) {
          if (err) throw err;
          startApp();
        });
    });
};

// addRole() -- DONE
function addRole() {
  console.log("addRole function has been triggered");
  var questions = [{
      type: "input",
      message: "What type of role would you like to add?",
      name: "title"
    },
    {
      type: "input",
      message: "What is the salary for this role?",
      name: "salary"
    },
    {
      type: "input",
      message: "In what department is the new role?",
      name: "department_id"
    }

  ];
  inquirer.prompt(questions).then(function (answer) {
    db.query(
      "INSERT INTO roles SET ?", {
        title: answer.title,
        salary: answer.salary,
        department_id: answer.department_id

      },
      function (error, res) {
        if (error) throw error;
        console.log("New role added successfully");
        startApp();
      }
    );
  });
};

// TODO: updateEmployee()
function updateEmployee() {
  console.log("updateEmployee function has been triggered");

  // First we must select an employee to update. To accomplish this, we need to do a few things
  // 1) Query our database for all employees

  db.query(
    "SELECT employee.employee_id, employee.first_name, employee.last_name, roles.title, roles.salary, department.name, manager_id FROM employee INNER JOIN roles ON employee.roles_id = roles.roles_id INNER JOIN department ON roles.department_id = department.department_id;",

    function (err, res) {
      if (err) throw err;

      let employeeChoices = res.map((employee) => (
        {
          name: employee.first_name + ' ' + employee.last_name,
          value: employee.employee_id
        })
      )
      // 2) Use Inquirer to have the user select one of the employees
      inquirer
        .prompt({
          type: "list",
          message: "What is the first name of the employee you would like to access?",
          name: "id",
          choices: employeeChoices
        })
        .then(function (answer) {
          console.log(answer.id);
          // Next we need to select a new role for the employee. This will be similar to the last step
          // 1) Query our database for all roles
          db.query(
            "SELECT employee.employee_id, employee.first_name, employee.last_name, roles.title, roles.salary, department.name, manager_id FROM employee INNER JOIN roles ON employee.roles_id = roles.roles_id INNER JOIN department ON roles.department_id = department.department_id;",

          function (err, res) {
            if (err) throw err;
      
            let roleChoices = res.map((employee) => (
              {
                name: employee.roles_id,
                id: employee.employee_id
              })
            )
          // 2) Use Inquirer to have the user select a role from the list
          inquirer
        .prompt({
          type: "list",
          message: "Which role would you like to select?",
          name: "id",
          choices: roleChoices
        }),
        //The sql query might look something like "UPDATE employee SET roles_id = 2 WHERE id = 1"
        db.query("UPDATE employee SET roles_id = ? WHERE employee_id = ?", [roleChoices.roles_id, roleChoices.employee_id])

          
        }) // end function (err,res)
    }, 

  ); // END db.query

})}; 
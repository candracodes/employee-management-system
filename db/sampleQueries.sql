-- TODO: THIS IS THE SAMPLE SYNTAX FOR PROPERLY JOINING:
-- SELECT column_name(s)
-- FROM table1
-- INNER JOIN table2 ON table1.column_name = table2.column_name;


-- VIEW ALL EMPLOYEES
-- TODO: Find out why this query duplicates data, AND, figure out how to display manager's name depending on what the manager_id is
SELECT employee.employee_id, employee.first_name, employee.last_name, roles.title, roles.salary, department.name, manager_id 
FROM employee 
INNER JOIN roles ON employee.roles_id = roles.roles_id
INNER JOIN department ON roles.department_id = department.department_id;

-- VIEW ALL DEPARTMENTS
SELECT * FROM department;

-- VIEW ALL ROLES
SELECT * FROM roles;

-- ADD EMPLOYEE

-- UPDATE EMPLOYEE

-- ADD ROLE

-- ADD DEPARTMENT
INSERT INTO department SET Sales

INSERT INTO department (name) VALUES ("Sales");


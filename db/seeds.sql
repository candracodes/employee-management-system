-- CREATE STARTER DATA TO GO INSIDE TABLES --

INSERT INTO department (name) VALUES 
('Management'), 
('Engineering'), 
('Marketing');

INSERT INTO roles (title, salary, department_id) VALUES
('CTO', 90000.00, 1), 
('Team Lead', 80000.00, 2), 
('Researcher', 70000.00, 3);


INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES
('Matthew', 'Doe', 1, NULL),
('Mark', 'Ray', 2, 1),
('Luke', 'Me', 3, 1);


-- TODO: THIS IS THE SAMPLE SYNTAX FOR PROPERLY JOINING:
-- SELECT column_name(s)
-- FROM table1
-- INNER JOIN table2 ON table1.column_name = table2.column_name;

-- TODO: STILL NEED TO SOMEHOW CROSS REFERENCE MANAGER ID IN ORDER TO DISPLAY THE MANAGER'S NAME FOR A SPECIFIC EMPLOYEE
-- CHRIS HELPED ME CRACK THIS CODE, AND NOW I CAN TAKE ON THE WORLD.... WITH THIS AS A BASE, LOL
-- THIS RUNS A QUERY THAT WILL RESULT IN "VIEW ALL EMPLOYEES"

-- SELECT employee.employee_id, employee.first_name, employee.last_name, roles.title, roles.salary, department.name, manager_id 
-- FROM employee 
-- INNER JOIN roles ON employee.roles_id = roles.roles_id
-- INNER JOIN department ON roles.department_id = department.department_id;

-- TODO: Find out why the above query duplicates data

-- CREATE STARTER DATA TO GO INSIDE TABLES --

INSERT INTO department (name) VALUES 
('Management'), 
('Engineering'), 
('Marketing');

INSERT INTO company_role (id, title, salary) VALUES
(1, 'CTO', 90000.00), 
(2, 'Team Lead', 80000.00), 
(3, 'Researcher', 70000.00);


INSERT INTO employee (first_name, last_name, role_id) VALUES
('Matthew', 'Doe', 1),
('Mark', 'Ray', 2),
('Luke', 'Me', 3);

-- TODO: THESE QUERIES SORT OF WORK (but they don't display the joins)
-- SELECT employee.id, employee.first_name, employee.last_name FROM employee INNER JOIN company_role ON company_role.id = employee.role_id;
-- SELECT employee.id, employee.first_name, employee.last_name FROM employee INNER JOIN company_role ON employee.role_id = company_role.id;

-- TODO: THIS IS THE SAMPLE SYNTAX FOR PROPERLY JOINING:
-- SELECT column_name(s)
-- FROM table1
-- INNER JOIN table2
-- ON table1.column_name = table2.column_name;
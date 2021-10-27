-- CREATE STARTER DATA TO GO INSIDE TABLES --

INSERT INTO department (name) VALUES 
('Management'), 
('Engineering'), 
('Marketing');

INSERT INTO company_role (title, salary, department_id) VALUES
('CTO', 90000.00, 1), 
('Team Lead', 80000.00, 2), 
('Researcher', 70000.00, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Matthew', 'Doe', 1, null),
('Mark', 'Ray', 2, null),
('Luke', 'Me', 3, null);
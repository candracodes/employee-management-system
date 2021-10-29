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

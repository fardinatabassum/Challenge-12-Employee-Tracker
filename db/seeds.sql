INSERT INTO department(id, name)
VALUES (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"),
        (4, "Legal");
        

INSERT INTO role(department_id, title, salary)
VALUES(1, "Sales Lead", 100000),
        (1, "Salesperson", 80000),
        (2, "Lead Engineer", 150000),
        (2, "Software Engineer", 120000),
        (3, "Account Manager", 160000),
        (3, "Accountant", 125000),
        (4, "Legal Team Lead", 250000),
        (4, "Lawyer", 190000);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, null),
        ("Jacob", "Nordan", 2, 1),
        ("John", "Apple", 3, null),
        ("Tyler", "Perry", 4, 3),
        ("Justin", "Bieber", 5, null),
        ("Tyler", "Brown", 6, 5);
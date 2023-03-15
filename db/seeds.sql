INSERT INTO department(id, name)
VALUES (1, "Human Resources"),
        (2, "Sales"),
        (3, "Engineering");
        

INSERT INTO role(department_id, title, salary)
VALUES(1, "Front Desk", 50000),
        (1, "Office Admin", 550000),
        (2, "Sales Lead", 60000),
        (2, "Sales Person", 450000),
        (3, "software engineer", 1000000),
        (3, "lead engineer", 250000);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Fardina", "Tabassum", 1, null),
        ("Jacob", "Nordan", 2, 1),
        ("John", "Apple", 3, null),
        ("Tyler", "Perry", 4, 3),
        ("Justin", "Bieber", 5, null),
        ("Tyler", "Brown", 6, 5);
import inquirer from 'inquirer';
import { createConnection } from 'mysql2';

const db = createConnection({
    host: "localhost",
    user: "root",
    password: "Dhaka3210!",
    database: "department_db",
})

db.connect(function(err) {
    if(err) throw err
    options()
})


const options = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "What would you like to do?",
            choices: ["View Employees", "View Roles", "View Departments", "Add Employee", "Add Role", "Add Department", "Update Employee Role"]
        }
    ]).then(res => {
        if(res.options == "View Employees") {
            viewEmployees()
        }
    })
}

const viewEmployees = () => {
    db.query('SELECT * FROM employee', function(err, res) {
        if(err) throw err;
        console.table(res)
        options()
    })
}
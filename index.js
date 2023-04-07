import inquirer from "inquirer";
import { createConnection } from "mysql2";

const db = createConnection({
  host: "localhost",
  user: "root",
  password: "Dhaka3210!",
  database: "department_db",
});

db.connect(function (err) {
  if (err) throw err;
  options();
});

const options = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "What would you like to do? (Use arrow keys)",
        choices: [
          "View All Employees",
          "Add Employee",
          "Delete Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "Delete Role",
          "View All Departments",
          "Add Department",
          "Quit",
        ],
      },
    ])
    .then((res) => {
      if (res.options == "View All Employees") {
        viewEmployees();
      }
      if (res.options == "Add Employee") {
        addEmployee();
      }
      if (res.options == "Delete Employee") {
        deleteEmployee();
      }
      if (res.options == "Update Employee Role") {
        updateEmployee();
      }
      if (res.options == "View All Roles") {
        viewRoles();
      }
      if (res.options == "Add Role") {
        addRole();
      }
      if (res.options == "Delete Role") {
        deleteRole();
      }
      if (res.options == "View All Departments") {
        viewDepartments();
      }
      if (res.options == "Add Department") {
        addDepartment();
      }
      if (res.options == "Quit") {
        process.exit();
      }
    });
};

const viewEmployees = () => {
  db.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    console.table(res);
    options();
  });
};

// delete employee function
const deleteEmployee = () => {
  const employeeSql = `SELECT * FROM employee`;
  db.query(employeeSql, (err, data) => {
    if (err) throw err;
    const employees = data.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id,
    }));
    inquirer
      .prompt([
        {
          type: "list",
          name: "name",
          message: "Which employee would you like to delete?",
          choices: employees,
        },
      ])
      .then((empChoice) => {
        console.log(empChoice.name)
        const employee = empChoice.name;
        db.query("DELETE FROM employee WHERE ?", {
          id: employee
        })
        console.log(
          `Deleted!`
        );
        options();
      });
  });
};

// delete role 
const deleteRole  = () => {
  const roleSql = `SELECT * FROM role`;
  db.query(roleSql, (err, data) => {
    if (err) throw err;
    const roles = data.map(({ title}) => ({
      title : title,
      value : title
    }));
    inquirer
      .prompt([
        {
          type: "list",
          name: "title",
          message : "Which role would you like to delete?",
          choices: roles,
        }
      ])
      .then((roleChoice) =>{
        const role = roleChoice.title;
        db.query("DELETE FROM role WHERE ?", {
          title : role,
        })
        console.log(
          `${roleChoice.title} has been deleted!`
        );
        options()
      });
  })
}

// Delete Department
const deleteDepartment = () => {
  const departmentSql = `SELECT * FROM `
}

const viewRoles = () => {
  db.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    console.table(res);
    options();
  });
};

const viewDepartments = () => {
  db.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    options();
  });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is this employees first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is this employees last name?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What is this employees roles id?",
      },
      {
        type: "input",
        name: "manager_id",
        message: "What is this employees managers id?",
      },
    ])
    .then((res) => {
      db.query("INSERT INTO employee SET ?", {
        first_name: res.first_name,
        last_name: res.last_name,
        role_id: res.role_id,
        manager_id: res.manager_id,
      });
      console.log(
        `${res.first_name} ${res.last_name} was added to the employee table!`
      );
      options();
    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department_name",
        message: "What is the name of the department?",
      },
    ])
    .then((res) => {
      db.query("INSERT INTO department SET ?", {
        name: res.department_name,
      });
      console.log(`${res.department_name} was added to the database`);
      options();
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "role_name",
        message: "What is the name of the role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the role?",
      },
      {
        type: "input",
        name: "department_id",
        message: "What is the id of the department?",
      },
    ])
    .then((res) => {
      db.query("INSERT INTO role SET ?", {
        title: res.role_name,
        salary: res.salary,
        department_id: res.department_id,
      });
      console.log(`${res.role_name} was added to the database`);
      options();
    });
};

//update employee function
function updateEmployee() {
  const employeeSql = `SELECT * FROM employee`;
  db.query(employeeSql, (err, data) => {
    if (err) throw err;
    const employees = data.map(({ id, first_name, last_name }) => ({
      name: first_name + " " + last_name,
      value: id,
    }));
    inquirer
      .prompt([
        {
          type: "list",
          name: "name",
          message: "Which employee would you like to update?",
          choices: employees,
        },
      ])
      .then((empChoice) => {
        const employee = empChoice.name;
        const params = [];
        params.push(employee);
        const roleSql = `SELECT * FROM role`;
        db.query(roleSql, (err, data) => {
          if (err) throw err;
          const roles = data.map(({ id, title }) => ({
            name: title,
            value: id,
          }));
          inquirer
            .prompt([
              {
                type: "list",
                name: "role",
                message: "What is the employee's new role?",
                choices: roles,
              },
            ])
            .then((roleChoice) => {
              const role = roleChoice.role;
              params.push(role);
              let employee = params[0];
              params[0] = role;
              params[1] = employee;
              const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
              db.query(sql, params, (err, result) => {
                if (err) throw err;
                console.log("Employee has been updated!");
                menu();
              });
            });
        });
      });
  });
}

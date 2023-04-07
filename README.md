# Challenge-12-Employee-Tracker
This repository contains the code used to make an employee tracker

## Description
This repository contains the code used to make command-line employee tracker application. The purpose of this application is to allow business owners to be able to view and manage the different departments, roles and employees at their company. This allows users to organize and makes them able to plan their business more efficiently. Users can view the different departments at the company along with the different roles available. They can also view their employees along with their salary, role at the company and what manager they are working under. This apllication further allows users to add a new employee, role and department by prompting a series of questions necassary to create the database. The apllication can also be used to update an employees role and even delete the employees infromation, any role and department.
## Installation

### Link to command line application video demo: https://drive.google.com/file/d/1eYQFTzweV_rbu-Fz2jIIvGWWBvEsc8YN/view

On the terminal install the necessary packages using nmp install inquirer and mysql2 packages. Install the following packages by using the code below.


```
npm i
```
```
npm i mysql2
```
```
npm i inquirer
```
Afer all the necessary packages have been installed rin mysql using the following command
```
mysql -u root -p
```
Enter your password to enter mysql. Then select the schema as the source by using the following code.
```
SOURCE schema.sql
```
Use the seeds on the database by using the command 
```
SOURCE seeds.sql
```
Then run the command-line application using the command
```
node index.js
```

## Usage

![Challenge-12-Employee-Tracker](./assets/employee%20tracker%20screenshot.png)

The images file contains the screenshot of what the command line looks like along with the different options available to the uset. The index.js file contains the code used to make the functionality of the different prompts along with the questionnaire. The db files contains the schema file and the seeds file.The schma file contains the database used to store the information along with the tables used to sort them. The seeds files contains the different department, role and employee information used to populate the database.

## License

Uses the MIT License
# [![License MIT ](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
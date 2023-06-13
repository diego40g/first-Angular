CREATE DATABASE angularPostgreSQL;

CREATE TABLE Department(
    DepartmentId SERIAL,
    DepartmentName VARCHAR(500)
);

INSERT INTO Department(DepartmentName) VALUE ('IT');
INSERT INTO Department(DepartmentName) VALUE ('Support');

CREATE TABLE Employee(
    EmployeeId SERIAL,
    EmployeeName VARCHAR(500),
    Department VARCHAR(500),
    DateOfJoining DATE,
    PhotoFileName VARCHAR(500)
);

INSERT INTO Employee (EmployeeName, Department, DateOfJoining, PhotoFileName)
VALUE('Diego','IT','2021-06-20','anonumous.png')
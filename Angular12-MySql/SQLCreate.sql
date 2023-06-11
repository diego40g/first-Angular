create database angularMySql;

use angularMySql;

create table Department(
    DepartmentId int AUTO_INCREMENT,
    DepartmentName nvarchar(500),
    Primary key (DepartmentId)
);

insert into Department(DepartmentName) VALUES ("IT");
insert into Department(DepartmentName) VALUES ("Support");

create table Employee(
    EmployeeId int AUTO_INCREMENT,
    EmployeeName nvarchar(500),
    Department nvarchar(500),
    DateOfJoining datetime,
    PhotoFileName nvarchar(500),
    Primary key (EmployeeID)
);
insert into Employee(EmployeeName, Department, DateOfJoining, PhotoFileName)
VALUES('Diego','TI','2021-06-21','anonymous.png')
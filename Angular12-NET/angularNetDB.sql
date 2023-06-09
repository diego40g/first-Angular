use angularNetDB;

CREATE TABLE dbo.Department(
	DepartmentId INT IDENTITY(1,1),
	DepartmentName NVARCHAR(500),
);

CREATE TABLE dbo.Employee(
	EmployeeId INT IDENTITY(1,1),
	EmployeeName NVARCHAR(500),
	Department NVARCHAR(500),
	DateOfJoining DATETIME,
	PhotoFileName NVARCHAR(500)
);

INSERT INTO dbo.Department VALUES ('Support');
INSERT INTO dbo.Department VALUES ('IT');

INSERT INTO dbo.Employee
VALUES ('Diego','IT',GETDATE(),'CV-Diego.png');



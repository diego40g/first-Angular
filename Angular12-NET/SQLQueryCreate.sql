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
	PhotoFileName VARBINARY(MAX)
);

INSERT INTO dbo.Department VALUES ('Support');
INSERT INTO dbo.Department VALUES ('IT');

INSERT INTO dbo.Employee
VALUES ('Diego','IT',GETDATE(),(SELECT * FROM OPENROWSET(BULK N'C:\Users\user-pc\Pictures\CV-Diego.png', SINGLE_BLOB) as T5));



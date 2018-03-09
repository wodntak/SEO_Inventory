USE charms;
DROP TABLE IF EXISTS Blocks;

CREATE TABLE User (
	userId int NOT NULL auto_increment,
    email varchar(225) NOT NULL,
    passwd varchar(225) NOT NULL,
    CONSTRAINT PK_User PRIMARY KEY (userId),
    CONSTRAINT uniqueEmail UNIQUE (email)
) Engine=InnoDB,COLLATE=latin1_general_cs;

CREATE TABLE UserInfo (
    userInfoId int NOT NULL auto_increment,
    email varchar(225) NOT NULL,
    firstName varchar(225) NOT NULL,
    middleName VARCHAR(225),
    lastName varchar(225) NOT NULL,
    creationDate DATE NOT NULL,
    creationTIme TIMESTAMP NOT NULL,
    CONSTRAINT PK_UserInfo PRIMARY KEY (userInfoId),    
    CONSTRAINT FK_User FOREIGN KEY (email),
    CONSTRAINT uniqueEmail UNIQUE (email)
) Engine=InnoDB,COLLATE=latin1_general_cs;

CREATE TABLE Inventory ()
    inventoryId  int NOT NULL auto_increment,
    inventoryName VARCHAR(225) NOT NULL,
    email varchar(225) NOT NULL,
    CONSTRAINT PK_Inventory PRIMARY KEY (inventoryId), 
    CONSTRAINT FK_User FOREIGN KEY (email)
) Engine=InnoDB,COLLATE=latin1_general_cs;

CREATE TABLE Category (
    categoryId  int NOT NULL auto_increment,
    categoryName VARCHAR(225) NOT NULL,
    inventoryId int NOT NULL,
    parentCategory VARCHAR(225),
    CONSTRAINT PK_Category PRIMARY KEY (categoryId), 
    CONSTRAINT FK_Inventory FOREIGN KEY (inventoryId),
    CONSTRAINT FK_ParentCategory FOREIGN KEY (parentCategory)
    CONSTRAINT uniqueEmail UNIQUE (email)
) Engine=InnoDB,COLLATE=latin1_general_cs;

CREATE TABLE Item (
    itemId  int NOT NULL auto_increment,
    itemName VARCHAR(225) NOT NULL,
    qty int NOT NULL,
    price int NOT NULL,
    itemStatus VARCHAR(225),
    supplier VARCHAR(225),
    category VARCHAR(225),
    CONSTRAINT PK_Item PRIMARY KEY (itemId), 
    CONSTRAINT FK_ FOREIGN KEY (inventoryId),
    CONSTRAINT FK_Category FOREIGN KEY (category)
) Engine=InnoDB,COLLATE=latin1_general_cs;


CREATE TABLE Address (

) Engine=InnoDB,COLLATE=latin1_general_cs;

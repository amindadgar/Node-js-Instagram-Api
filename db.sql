Drop procedure IF exists AddUser;
DELIMITER $$
CREATE PROCEDURE `AddUser` (userId int,UserName varchar(32),firstname varchar(32)
					,surname varchar(32),email varchar(255),password varchar(255),
                    bio varchar(1000), joined varchar(100),email_verified enum('yes','no'),
                    account_type enum('public','private'),instagram varchar(500),twitter varchar(500),
                    facebook varchar(500),github varchar(500),website varchar(500),
                    phone varchar(20),isOnline enum('yes','no'),lastOnline varchar(100))
BEGIN
   insert into users values(userId,UserName,firstname
   ,surname,email,password
   ,bio,joined,email_verified
   ,account_type,instagram,twitter,facebook
   ,github,website,phone,isOnline,lastOnline);
END$$
DELIMITER ;


-- DeleteUser Procedure

Drop procedure IF exists DeleteUser;
DELIMITER $$
CREATE PROCEDURE `DeleteUser` (userId int)
BEGIN
   DELETE from users 
   where id= userId;
END$$
DELIMITER ;

-- GetUset Procedure
DROP PROCEDURE IF EXISTS GetUser;
DELIMITER $$
CREATE PROCEDURE `GetUser` (userId int)
BEGIN
   Select username, 
    firstname,surname,email, 
    bio,account_type,instagram
    ,twitter,facebook,github,website,
    phone,isOnline,lastOnline from users 
   where id= userId;
END$$
DELIMITER ;

-- GetConversations procedure
Drop procedure IF exists GetConversation;
DELIMITER $$
CREATE PROCEDURE `GetConversation` (userId int)
BEGIN
   select * from conversations
   where user_one=userId or user_two=userId;
END$$
DELIMITER ;
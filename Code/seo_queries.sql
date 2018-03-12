use tsim;

##password for database: 60619312

##INSERT/UPDATE User

#insert user credential when first register
insert into User (email,passwd) values ('seo@gmail.com','abc123');
#insert user info (address)
insert into Address (street,city,zipcode,country) values ('123 St','Lincoln','68508','USA');
#insert user info (Note: information in address has to be repeated to get the correct addressId)
insert into UserInfo (email,firstName,lastName,creationTime,addressId) 
values ('seo@gmail.com','Bill','Gates',CURRENT_TIMESTAMP,(select addressId from Address where street = '123 St' AND city = 'Lincoln' AND zipcode = '68508' AND country = 'USA'));
#update user info (Note: email can't be updated, as it's foreign key for UserInfo table)
UPDATE UserInfo SET lastName = 'Clington' where email = 'seo@gmail.com';
#update address info 
UPDATE Address SET street = '321 St' where addressId = (select addressId from UserInfo where email = 'seo@gmail.com');

##GET USER INFO

#get user password given an email
select passwd from User where email = 'seo@gmail.com';
#get info of a user
select * from UserInfo where email = 'seo@gmail.com';
#get address of a user given an email
select * from Address where addressId = (select addressId from UserInfo where email = 'seo@gmail.com');




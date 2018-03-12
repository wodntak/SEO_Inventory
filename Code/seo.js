var express = require('express');
var app = express();
var server = require('http').createServer(app);
var global_email = '';
var global_category = '';

app.set('view_enginer', 'ejs');
server.listen(process.env.PORT || 3000);

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

function Address(street, city, state, country, zip) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.country = country;
    this.zip = zip;
}

function User(email, password) {
    this.email = email;
    this.password = password;
}

function UserInfo(firstName, middleName, lastName, phoneNumber, notifications) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.phoneNumber;
    this.notifications;
}

function Category(name, subcategories, items) {
    this.name = name;
    this. subcategories = subcategories;
    this.items = items;
}

function Item(name, qty, price, status, supplier) {
    this.name = name;
    this.qty = qty;
    this.price = price;
    this.status = status;
    this.supplier = supplier;
}

function setEmail(email) {
    // sw = new StreamWriter("email.txt");
    // sw.Write(email);
    // sw.Close();
    return;
}

function getEmail() {
    // try {
    //     // Create an instance of StreamReader to read from a file.
    //     sr = new StreamReader("email.txt");
    //     // Read and display lines from the file until the end of the file is reached.
    //     line = sr.ReadLine();
    //     while (line != null) {
    //         line = sr.ReadLine();
    //     }
    //     sr.Close();
    //     return line;
    // }
    // catch (e) {
    //     // Let the user know what went wrong.
    //     print("The file could not be read:");
    //     print(e.Message);
    // }
    return;
}
function setCategory(category) {
    // sw = new StreamWriter("email.txt");
    // sw.Write(category);
    // sw.Close();
    return;
}

function getCategory() {
    // try {
    //     // Create an instance of StreamReader to read from a file.
    //     sr = new StreamReader("category.txt");
    //     // Read and display lines from the file until the end of the file is reached.
    //     line = sr.ReadLine();
    //     while (line != null) {
    //         line = sr.ReadLine();
    //     }
    //     sr.Close();
    //     return line;
    // }
    // catch (e) {
    //     // Let the user know what went wrong.
    //     print("The file could not be read:");
    //     print(e.Message);
    // }
    return;
}

function login(email, password) {
    if(userExists(email, password)) {
        setEmail(email);
        setCategory("");
        window.open("home.html", "_self");
    } else {
        window.open("login.html", "_self");
    }
}

function logout() {
    
}

function userExists(email, password) {
    return true;
}

function signup(email, password1, password2) {
    if ( (password1 == password2) && (password1 != '') && (password2 != '') && email.includes('@')) {
        user = new User(email, password1);
        createUser(user);
        setEmail(email);
        setCategory("");
        window.open('userSettings.html', "_self");
    }else{
        window.open("login.html", "_self");
    }
}

function createUser(user) {
    //mysql insert
}

function isUser() {
    return true;
}

function saveUserSettings(firstName, middleName, lastName, phoneNumber, notifications, street, city, state, zip, country) {
    if(addressExists(street, city, state, zip, country)) {
        addressId = getAddress(street, city, state, zip, country);
    }else{
        addressId = insertAddress(street, city, state, zip, country);
    }
    if(userInfoExists(firstName, middleName, lastName, phoneNumber, notifications)) {
        updateUserInfo(firstName, middleName, lastName, phoneNumber, notifications);
    }else{
        insertUserInfo(firstName, middleName, lastName, phoneNumber, notifications);
    }
    window.open('userSettings.html', "_self");
}

function addressExists(street, city, state, zip, country) {
    return true;
}

function getAddress(street, city, state, zip, country) {
    return 0;
}

function insertAddress(street, city, state, zip, country) {
    return 0;
}

function userInfoExists(firstName, middleName, lastName, phoneNumber, notifications) {
    return true;
}

function updateUserInfo(firstName, middleName, lastName, phoneNumber, notifications) {

}

function insertUserInfo(firstName, middleName, lastName, phoneNumber, notifications) {

}

function saveCategory(name) {
    //Update
    if (categoryExists(name)) {
        updateCategory(name);
    }else{
        insertCategory(name);
    }
}
function categoryExists(name) {
    return true;
}

function updateCategory(name) {
    return;
}

function insertCategory(name) {
    return;
}

function saveItem(name, price, qty, status, supplier) {
    if (itemExists(name, price, qty, status, supplier)) {
        updateItem(name, price, qty, status, supplier);
    }else{
        insertItem(name, price, qty, status, supplier);
    }
    window.open('home.html', "_self");
}

function itemExists(name, price, qty, status, supplier) {
    return true;
}

function updateItem(name, price, qty, status, supplier) {
    return;
}

function insertItem(name, price, qty, status, supplier) {
    return;
}

function addQty(item) {
    //update quantity q
    window.open('home.html', "_self");
}
function subdQty(item) {
    //update quantity q
    oldQty = getQty(name, price, status, supplier)
    window.open('home.html', "_self");
}


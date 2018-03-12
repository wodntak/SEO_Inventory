var global_email = '';
var global_category = '';

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
    global_email = email; 
}

function getEmail() {
    return global_email;
}
function setCategory(category) {
    global_category = category
}

function getCategory() {
    return global_category;
}

function login(email, password) {
    try {
        isUser(email, password);
        window.open('home.html', "_self");
    }catch(err){
        window.open('login.html', "_self");
    }
}

function signup(email, password1, password2) {
    if ( (password1 == password2) && (password1 != '') && (password2 != '') && email.includes('@')) {
        user = new User(email, password1);
        createUser(user);
        set
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


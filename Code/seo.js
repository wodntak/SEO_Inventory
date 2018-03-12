
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

function login(email, password) {
    try {
        getUser(email, password)
        window.open('home.html', "_self");

    }catch{
        window.open('login.html', "_self")
    }
}

function signup(email, password1, password2) {
    if ( (password1 == password2) && (password1 != '') && (password2 != '') && email.includes('@')) {
        user = new User(email, password1);
        createUser(user);
        window.open('userSettings.html', "_self");
    }else{
        window.open("login.html", "_self");
    }
}

function createUser(user) {
    //mysql insert
}

var users = [
    {
        name: "Zein",
        id: 1,
        balance: 5000
    },
    {
        name: "Ahmed",
        id: 2,
        balance: 3000
    },
    {
        name: "Yassin",
        id: 3,
        balance: 7000
    }
];


function addUser() {

    var name = prompt("enter user name:");
    var id = Number(prompt("enter user id:"));
    var balance = Number(prompt("enter user balance:"));

    var userExist = users.find(function(element) {
        return element.id == id;
    });

    if (userExist) {
        alert("user already exists");
    } else {
        users.push({
            name: name,
            id: id,
            balance: balance
        });

        alert("user added successfully");
    }
}
addUser();
console.table(users)

function editUserBalanceById() {

    var id = Number(prompt("enter user ID:"));
    var newBalance = Number(prompt("enter new balance:"));

    var user = users.find(function(element) {
        return element.id == id;
    });

    if (user) {
        user.balance = newBalance;
        alert("balance updated successfully");
    } else {
        alert("user not found");
    }
}

editUserBalanceById()
console.table(users)

function transferBalance() {

    var fromID = Number(prompt("enter sender id:"));
    var toID = Number(prompt("enter receiver id:"));
    var balance = Number(prompt("enter amount to transfer:"));

    var fromUser = users.find(function(element) {
        return element.id == fromID;
    });

    var toUser = users.find(function(element) {
        return element.id == toID;
    });

    if (!fromUser || !toUser) {
        alert("user not found");
        return;
    }

    if (fromUser.balance < balance) {
        alert("not enough balance");
        return;
    }

    fromUser.balance -= balance;
    toUser.balance += balance;

    alert("transfer successful");
}
transferBalance()
console.table(users)

function deleteUserById() {

    var id = Number(prompt("enter user id to delete:"));

    var index = users.findIndex(function(element) {
        return element.id == id;
    });

    if (index != -1) {
        users.splice(index, 1);
        alert("user deleted successfully");
    } else {
        alert("user not found");
    }
}
deleteUserById()
console.table(users)

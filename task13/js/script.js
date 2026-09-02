function addUser() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    var user = {
        name: name,
        age: age
    };

    var users = JSON.parse(localStorage.getItem("users")) || [];

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    displayUsers();
}

function displayUsers() {

    var users = JSON.parse(localStorage.getItem("users")) || [];

    var container = document.getElementById("users");

    container.innerHTML = "";

    users.forEach(function(user) {

        var div = document.createElement("div");

        div.innerHTML = `
            <p>Name: ${user.name}</p>
            <p>Age: ${user.age}</p>
            <hr>
        `;

        container.appendChild(div);
    });
}
displayUsers();
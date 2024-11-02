const validUser = { username: "g", password: "l" };

const birthdays = [
    
    { name: "Maria", date: "07/11/2024" },
    { name: "Karolini", date: "27/11/2024"},
    { name: "Larissa", date: "19/11/2024"},
];

document.getElementById("login-button").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === validUser.username && password === validUser.password) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("birthday-container").style.display = "block";
        displayBirthdays();
    } else {
        document.getElementById("login-error").innerText = "Usuário ou senha inválidos.";
    }
});

document.getElementById("logout-button").addEventListener("click", function() {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("birthday-container").style.display = "none";
    document.getElementById("login-error").innerText = "";
});

function displayBirthdays() {
    const list = document.getElementById("birthday-list");
    list.innerHTML = "";
    birthdays.forEach(birthday => {
        const listItem = document.createElement("li");
        listItem.innerText = `${birthday.name} - ${birthday.date}`;
        list.appendChild(listItem);
    });
}

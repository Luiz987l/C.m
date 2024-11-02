const validUser = { username: "g", password: "l" };

const birthdays = [
    { name: "Helena", date: "25/02/2024" },
    { name: "Ana.c", date: "24/11/2024" },
    { name: "Luiz", date: "04/07/2024" },
    { name: "Gabriella", date: "21/05/2024" },
    { name: "Miguel", date: "08/03/2024" },
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

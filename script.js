const validUser = { username: "G.S", password: "L.F" };

const birthdays = [
    { name: "Maria", date: "07/11/2024" },
    { name: "Karolini", date: "27/11/2024" },
    { name: "Larissa", date: "19/11/2024" },
    { name: "Victoria", date: "13/11/2024" },
    { name: "Kaylã", date: "03/11/2024" },
    { name: "Alice", date: "05/12/2024" },
    { name: "Bruno", date: "12/12/2024" },
    { name: "Camila", date: "22/12/2024" },
    { name: "Diego", date: "30/12/2024" }
];

document.getElementById("login-button").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === validUser.username && password === validUser.password) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("birthday-container").style.display = "block";
        const selectedMonth = document.getElementById("month-select").value;
        displayBirthdays(selectedMonth);
    } else {
        document.getElementById("login-error").innerText = "Usuário ou senha inválidos.";
    }
});

document.getElementById("logout-button").addEventListener("click", function() {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("birthday-container").style.display = "none";
    document.getElementById("login-error").innerText = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});

document.getElementById("month-select").addEventListener("change", function () {
    const selectedMonth = this.value;
    displayBirthdays(selectedMonth);
});

function displayBirthdays(month) {
    const list = document.getElementById("birthday-list");
    list.innerHTML = "";

    // Filtra os aniversariantes com base no mês selecionado
    const filteredBirthdays = birthdays.filter(birthday => {
        const birthdayMonth = parseInt(birthday.date.split("/")[1], 10);
        return birthdayMonth === parseInt(month, 10);
    });

    // Exibe os aniversariantes do mês selecionado
    filteredBirthdays.forEach(birthday => {
        const listItem = document.createElement("li");
        listItem.innerText = `${birthday.name} - ${birthday.date}`;
        list.appendChild(listItem);
    });
}

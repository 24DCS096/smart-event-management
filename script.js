let events = [];

// LOGIN
function login() {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
}

// REGISTER NAVIGATION
function showRegister() {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("registerPage").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("registerPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

// LOGOUT
function logout() {
    location.reload();
}

// SWITCH SECTIONS
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
}

// ADD EVENT
function addEvent() {
    let name = document.getElementById("eventName").value;
    let date = document.getElementById("eventDate").value;
    let venue = document.getElementById("eventVenue").value;

    if (!name || !date || !venue) {
        alert("Fill all fields!");
        return;
    }

    events.push({name, date, venue});
    displayEvents();
}

// DISPLAY EVENTS
function displayEvents() {
    let list = document.getElementById("eventList");
    list.innerHTML = "";

    events.forEach((e, i) => {
        let li = document.createElement("li");
        li.innerHTML = `${e.name} - ${e.date} - ${e.venue}
        <button onclick="deleteEvent(${i})">Delete</button>`;
        list.appendChild(li);
    });
}

// DELETE
function deleteEvent(i) {
    events.splice(i, 1);
    displayEvents();
}

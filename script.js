let events = [];

function addEvent() {
    let name = document.getElementById("eventName").value;
    let date = document.getElementById("eventDate").value;
    let venue = document.getElementById("eventVenue").value;

    if (name === "" || date === "" || venue === "") {
        alert("Fill all fields!");
        return;
    }

    let event = { name, date, venue };
    events.push(event);

    displayEvents();
}

function displayEvents() {
    let list = document.getElementById("eventList");
    list.innerHTML = "";

    events.forEach((e, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${e.name} - ${e.date} - ${e.venue}
            <button onclick="deleteEvent(${index})">Delete</button>
        `;
        list.appendChild(li);
    });
}

function deleteEvent(index) {
    events.splice(index, 1);
    displayEvents();
}

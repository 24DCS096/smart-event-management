#include <iostream>
#include <vector>
using namespace std;

struct Event {
    string name;
    string date;
    string venue;
};

vector<Event> events;

void addEvent() {
    Event e;
    cout << "Enter Event Name: ";
    cin >> e.name;
    cout << "Enter Date: ";
    cin >> e.date;
    cout << "Enter Venue: ";
    cin >> e.venue;

    events.push_back(e);
    cout << "Event Added!\n";
}

void viewEvents() {
    for (int i = 0; i < events.size(); i++) {
        cout << i+1 << ". " << events[i].name << " | "
             << events[i].date << " | "
             << events[i].venue << endl;
    }
}

void deleteEvent() {
    int index;
    cout << "Enter event number to delete: ";
    cin >> index;

    events.erase(events.begin() + index - 1);
    cout << "Deleted!\n";
}

int main() {
    int choice;

    while (true) {
        cout << "\n1.Add Event\n2.View Events\n3.Delete Event\n4.Exit\n";
        cin >> choice;

        switch(choice) {
            case 1: addEvent(); break;
            case 2: viewEvents(); break;
            case 3: deleteEvent(); break;
            case 4: return 0;
        }
    }
}

#include <iostream>
#include <vector>
using namespace std;

class Event {
public:
    string name, date, venue;
};

vector<Event> events;

void addEvent() {
    Event e;
    cout << "Enter Name: "; cin >> e.name;
    cout << "Enter Date: "; cin >> e.date;
    cout << "Enter Venue: "; cin >> e.venue;

    events.push_back(e);
    cout << "Event Added!\n";
}

void viewEvents() {
    cout << "\nEvents:\n";
    for(int i=0;i<events.size();i++) {
        cout << i+1 << ". " << events[i].name
             << " | " << events[i].date
             << " | " << events[i].venue << endl;
    }
}

void deleteEvent() {
    int i;
    cout << "Enter index: ";
    cin >> i;
    events.erase(events.begin()+i-1);
    cout << "Deleted!\n";
}

int main() {
    int ch;
    while(true) {
        cout << "\n1.Add 2.View 3.Delete 4.Exit\n";
        cin >> ch;

        if(ch==1) addEvent();
        else if(ch==2) viewEvents();
        else if(ch==3) deleteEvent();
        else break;
    }
}

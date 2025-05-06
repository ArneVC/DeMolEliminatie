import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElimserviceService {
  people: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  constructor() { }

  getPeople() {
    return this.people;
  }
  addPerson(person: string) {
    this.people.push(person);
  }
  clearAllPeople() {
    this.people = [];
  }
}

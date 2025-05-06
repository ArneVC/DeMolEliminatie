import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class ElimserviceService {
  people: Person[] = [];
  constructor() { }

  getPeople() {
    return this.people;
  }
  addPerson(person: Person) {
    this.people.push(person);
  }
  clearAllPeople() {
    this.people = [];
  }
}

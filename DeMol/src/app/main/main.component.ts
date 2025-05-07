import { Component } from '@angular/core';
import { ElimserviceService } from '../services/elimservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-main',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  people: Person[] = [];

  eliminated: boolean = false;
  name: string = "";

  constructor(private elimService: ElimserviceService) { 
    this.people = this.elimService.getPeople();
  }
  public test(value: boolean)
  {
    if(value == true) {
      this.eliminated = true;
    }
    else {
      this.eliminated = false;
    }
  }
  public addPerson() {
    let eliminated = this.eliminated;
    let name = this.name
    const person: Person = { name, eliminated };
    this.elimService.addPerson(person);
    this.people = this.elimService.getPeople();
    console.log(this.people);
  }
  public clearAll() {
    this.elimService.clearAllPeople();
    this.people = this.elimService.getPeople();
  }
  public convertStatusIntoString(status: boolean): string {
    if(status) {
      return "Geëlimineerd";
    }
    else {
      return "Niet Geëlimineerd";
    }    
  }
}
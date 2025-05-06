import { Component } from '@angular/core';
import { ElimserviceService } from '../services/elimservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

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
  people: string[] = [];
  constructor(private elimService: ElimserviceService) { 
    this.people = this.elimService.getPeople();
  }
  public test()
  {
    console.log("test");
  }
}

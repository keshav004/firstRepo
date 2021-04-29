import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service'; 
import { Person } from '../person';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  people: any;
  
  currentDate = new Date().getFullYear();
  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.allPeople();
  }

  allPeople(){
    this.personService.readAll().subscribe((data: Person[])=>{
      console.log(data);
      this.people = data;
    });
  }

  deletePerson(id: number){
    this.personService.delete(id).subscribe((data: Person)=>{
      this.allPeople();
    });
  }
  
}

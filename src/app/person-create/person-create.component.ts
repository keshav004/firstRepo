import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';  
import { Person } from '../person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  constructor(
    private personService:PersonService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  createPerson(formdata: any){
    this.personService.create(formdata).subscribe((data : Person)=>{
      console.log(formdata);
      this.router.navigateByUrl('people');

    });
  }

}

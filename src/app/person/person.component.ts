import { Component, OnInit } from '@angular/core';  
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { PersonService } from '../person.service';  
import { Person } from '../person';  
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: any;
    
  constructor(
    private personService:PersonService,
    private route: ActivatedRoute,
    private router: Router) {
   }

  ngOnInit(): void{
    console.log(this.route.snapshot.params['id']);
    const id: number = this.route.snapshot.params['id'];
    this.getPerson(id);
  }

  getPerson(id:number){
    this.personService.read(id).subscribe((result: Person)=>{
      this.person = result;
    });
  }
  
  updatePerson(person: any){
    this.personService.update(this.route.snapshot.params['id'],person).subscribe((response)=>{
      console.log("List updated");
      this.router.navigateByUrl("list");
    });
  }
  
}



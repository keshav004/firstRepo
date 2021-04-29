import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PersonService } from './person.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';  

import { MatRadioModule } from '@angular/material/radio';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonCreateComponent} from './person-create/person-create.component';
import { AgePipe } from './age.pipe';




@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonListComponent,
    PersonCreateComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
    HttpClientModule,  
    BrowserAnimationsModule,  
    MatRadioModule,   
    AppRoutingModule,
  ],
  providers: [HttpClientModule, PersonService],
  bootstrap: [AppComponent],
})
export class AppModule { }

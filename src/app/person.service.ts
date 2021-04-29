import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Person } from './person'; 

const baseURL = "http://localhost:3000/people";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  

  constructor(private httpClient: HttpClient) { }
  readAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(baseURL);
  }

  read(id: number): Observable<Person> {
    return this.httpClient.get<Person>(`${baseURL}/${id}`);
  }

  create(data: Person): Observable<Person> {
    return this.httpClient.post<Person>(baseURL, data);
  }

  update(id:number,data: Person): Observable<Person> {
    return this.httpClient.put<Person>(`${baseURL}/${id}`, data);
  }

  delete(id: number): Observable<Person> {
    return this.httpClient.delete<Person>(`${baseURL}/${id}`);
  }

  searchByName(name: string): Observable<any> {
    return this.httpClient.get<Person>(`${baseURL}?name=${name}`);
  }
}


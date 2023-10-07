import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from '../models/toDo';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  apiUrl = "https://jsonplaceholder.typicode.com/todos"

  constructor(private httpClient:HttpClient) { }
  getToDos():Observable<ToDo[]>{
    return this.httpClient
    .get<ToDo[]>(this.apiUrl);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDo } from 'src/app/models/toDo';
import { ToDoResponseModel } from 'src/app/models/toDoResponseModel';
import { ToDoService } from 'src/app/services/to-do.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  toDos : ToDo [] =[];
  dataLoaded = false;
  filterText ="";

  constructor(private todoService: ToDoService,
    private activatedRoot: ActivatedRoute,
    private toastrService: ToastrService,){  }

  ngOnInit(): void {
    this.getToDos();
  }
  

  getToDos(){
    this.todoService.getToDos().subscribe(response=> 
      this.toDos = response)
      this.dataLoaded=true;
  }
  addToCart(toDo:ToDo){
    
    this.toastrService.success('Sepete eklendi', toDo.title);
  }

}

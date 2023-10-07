import { ResponseModel } from './responseModel';
import { ToDo } from './toDo';

export interface ToDoResponseModel extends ResponseModel{
  data: ToDo[];
}

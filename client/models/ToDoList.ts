import { Schema, model, models } from 'mongoose';
  
  // OUR TODO SCHEMA
  const ToDoListSchema = new Schema({
    title: String,
    color: String,
    items: Array<String>,
  })

  // OUR TODO MODEL
  const TodoList = models.Todo || model("Todo", ToDoListSchema)

  export default TodoList;
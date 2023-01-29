import { Schema, model, models } from 'mongoose';
  
  // TODO SCHEMA
  export const ToDoItemSchema = new Schema({
    name: String,
    completed: Boolean,
  })

  // TODO MODEL
  const ToDoItem = models.ToDoItem || model("ToDoItem", ToDoItemSchema)

  export default ToDoItem;
import { Schema, model, models } from 'mongoose';
  
  // OUR TODO SCHEMA
  const TodoSchema = new Schema({
    name: String,
    items: Array<String>,
  })

  // OUR TODO MODEL
  const Todo = models.Todo || model("Todo", TodoSchema)

  export default Todo;
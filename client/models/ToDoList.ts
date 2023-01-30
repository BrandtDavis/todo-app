import mongoose, { Schema, model, models, ObjectId } from 'mongoose';

  // TODO SCHEMA
  const ToDoListSchema = new Schema({
    title: String,
    color: String,
    items: [mongoose.Types.ObjectId],
  })

  // TODO MODEL
  const TodoList = models.Todo || model("Todo", ToDoListSchema)

  export default TodoList;
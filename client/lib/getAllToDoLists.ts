import { connect } from '../utils/connection';
import Todo from '../models/ToDoList'

const getAllToDoLists = async () => {

    await connect();
    const toDos = await Todo.find();
}

export default getAllToDoLists;
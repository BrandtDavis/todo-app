import {
    NextApiRequest,
    NextApiResponse
} from 'next';
import { connect } from '../../../utils/connection'
import Todo from '../../../models/ToDoList'

async function getAllToDoLists(req: NextApiRequest, res:NextApiResponse) {

    await connect();
    const todo = await Todo.find().exec();
    res.status(200).json(todo)
}
export default getAllToDoLists;
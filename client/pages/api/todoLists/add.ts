import {
    NextApiRequest,
    NextApiResponse
} from 'next';
import { connect } from '../../../utils/connection'
import Todo from '../../../models/ToDoList'

async function addTest(req: NextApiRequest, res:NextApiResponse) {

    await connect();
    const toDo = await Todo.create(req.body)
    res.json({toDo})
}
export default addTest;
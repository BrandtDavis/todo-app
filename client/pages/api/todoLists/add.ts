import {
    NextApiRequest,
    NextApiResponse
} from 'next';
import { connect } from '../../../utils/connection'
import Todo from '../../../models/ToDoList'

async function addTest(req: NextApiRequest, res:NextApiResponse) {

    const body = req.body
    console.log('body: ', body)

    if(!body.title) {
        return res.status(400).json({ data: 'Title not found, my dude' })
    }

    await connect();
    const toDo = await Todo.create(body)
    console.log("todo: ", toDo)
    res.status(200).json({toDo})
}
export default addTest;
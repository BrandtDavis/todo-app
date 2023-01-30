import {
    NextApiRequest,
    NextApiResponse
} from 'next';
import { connect } from '../../../utils/connection'
import Todo from '../../../models/ToDoList'


const colors = ["Blue", "Green", "Red", "Yellow", "Purple"]
const priorities = ["Low", "Medium", "High"]

async function addTest(req: NextApiRequest, res:NextApiResponse) {

    const body = req.body
    console.log('body: ', body)

    if(!body.title) {
        return res.status(400).json({ data: 'Title not found, my dude' })
    }

    if(!priorities.includes(body.priority)) {
        return res.status(400).json({ data: 'Invalid priority' })
    }

    if(!colors.includes(body.color)) {
        return res.status(400).json({ data: 'Not a valid color' })
    }

    await connect();
    const toDo = await Todo.create(body)
    console.log("todo: ", toDo)
    res.status(200).json({toDo})
}
export default addTest;
import {
    NextApiRequest,
    NextApiResponse
} from 'next';
import { connect } from '../../../utils/connection'
import Todo from '../../../models/ToDoList'

async function addTest(req: NextApiRequest, res:NextApiResponse) {

    const body = req.body
    console.log('body: ', body)

    if(!body.name) {
        return res.status(400).json({ data: 'Name not found, my dude' })
    }

    await connect();
    const toDo = await Todo.create(body)
    
    res.status(200).json({toDo})
}
export default addTest;
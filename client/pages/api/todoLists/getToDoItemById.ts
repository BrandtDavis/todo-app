import {
    NextApiRequest,
    NextApiResponse
} from 'next';
import { connect } from '../../../utils/connection'
import ToDoItem from '../../../models/ToDoItem'

async function getToDoItemById(req: NextApiRequest, res:NextApiResponse) {
    const body = req.body

    await connect();
    const toDoItem= await ToDoItem.find(body)
    res.status(200).json(toDoItem)
}
export default getToDoItemById;
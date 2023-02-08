import {
    NextApiRequest,
    NextApiResponse
} from 'next';
import { connect } from '../../../utils/connection'
import ToDoItem from '../../../models/ToDoItem'
import mongoose from 'mongoose';

async function getToDoItemById(req: NextApiRequest, res:NextApiResponse) {
    const body = req.body

    await connect();
    let id = new mongoose.Types.ObjectId(body._id);
    const toDoItem= await ToDoItem.find({_id: id }).exec()
    console.log(toDoItem)
    return res.status(200).json(toDoItem)
}
export default getToDoItemById;
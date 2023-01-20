import {
    NextApiRequest,
    NextApiResponse
} from 'next';
import { connect } from '../../../utils/connection'
import Todo from '../../../models/ToDoList'

async function getAllToDoLists(req: NextApiRequest, res:NextApiResponse) {

}
export default getAllToDoLists;
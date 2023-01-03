import {
    NextApiRequest,
    NextApiResponse
} from 'next';
import { connect } from '../../../utils/connection'
import Todo from '../../../models/todoListModels'

async function addTest(req: NextApiRequest, res:NextApiResponse) {

    await connect();
    const test = await Todo.create(req.body)
    res.json({test})
}
export default addTest;
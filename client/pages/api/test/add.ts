import {
    NextApiRequest,
    NextApiResponse
} from 'next';
import { connect } from '../../../utils/connection'
import Test from '../../../models/testModels'

async function addTest(req: NextApiRequest, res:NextApiResponse) {

    const { name, numItems } = req.body;
    await connect();

     const test = await Test.create({name: 'bob', numItems: 67})

     res.json({test})
}
export default addTest;
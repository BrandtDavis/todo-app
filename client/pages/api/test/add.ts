import {
    NextApiRequest,
    NextApiResponse
} from 'next';
import { connect } from '../../../utils/connection'
import Test from '../../../models/testModels'

async function addTest(req: NextApiRequest, res:NextApiResponse) {

    await connect();
    const test = await Test.create(req.body)
    res.json({test})
}
export default addTest;
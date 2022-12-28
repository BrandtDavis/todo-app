import { NextApiRequest, NextApiResponse } from "next"
import { connect } from "../../../utils/connection"
import { ResponseFuncs } from "../../../utils/types"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

  //function for catch errors
  const catcher = (error: Error) => {
    return res.status(400).json({ error })
  }

  // Potential Responses
  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { Todo } = await connect() // connect to database
      return res.json(await Todo.find({}).catch(catcher))
    },
    // // RESPONSE POST REQUESTS
    // POST: async (req: NextApiRequest, res: NextApiResponse) => {
    //   const { Todo } = await connect() // connect to database
    //   res.json(await Todo.create(req.body).catch(catcher))
    //   return;
    // },
  }

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method]
  if (response) response(req, res)
  else {
    return res.status(400).json({ error: "No Response for This Request (index)" })
}
}

export default handler
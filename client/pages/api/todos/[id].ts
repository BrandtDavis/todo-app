import { NextApiRequest, NextApiResponse } from "next"
import { connect } from "../../../utils/connection"
import { ResponseFuncs } from "../../../utils/types"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  //capture request method, we type it as a key of ResponseFunc to reduce typing later
//   const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs

  //function for catch errors
//   const catcher = (error: Error) => res.status(400).json({ error })

 // // GRAB ID FROM req.query (where next stores params)
//   const id: string = req.query.id as string

//   // Potential Responses for /todos/:id
//   const handleCase: ResponseFuncs = {
//     // RESPONSE FOR GET REQUESTS
//     GET: async (req: NextApiRequest, res: NextApiResponse) => {
//       const { Todo } = await connect() // connect to database
//       console.log("From ID")
//     //   return res.json(Todo.findById(id))
//     //   return res.json(Todo.findById('63ad14a412e2d39d2ba9b41b'))
//     }
//   }

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
//   const response = handleCase[method]
//   if (response) response(req, res)
//   else return res.status(400).json({ error: "No Response for This Request (not index)" })
}

export default handler
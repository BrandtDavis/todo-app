import {
    NextApiRequest,
    NextApiResponse
} from 'next';
import { connect } from '../../../utils/connection'
import Todo from '../../../models/ToDoList'
import ToDoItem from '../../../models/ToDoItem'
import mongoose from 'mongoose';


const colors = ["Blue", "Green", "Red", "Yellow", "Purple"]
const priorities = ["Low", "Medium", "High"]

async function addToDoList(req: NextApiRequest, res:NextApiResponse) {

    const body = req.body
    // console.log('body: ', body)

    if(!body.title) {
        return res.status(400).json({ data: 'Title not found, my dude' })
    }

    if(!priorities.includes(body.priority)) {
        return res.status(400).json({ data: 'Invalid priority' })
    }

    if(!colors.includes(body.color)) {
        return res.status(400).json({ data: 'Not a valid color' })
    }


    // Process items
    // console.log(body.toDoItems.split(','))
    // const items:string[] = body.toDoItems.split(',')
    
    console.log(body.toDoItems)
    const processedItems = body.toDoItems.map( item =>
        ({
            name: item, 
            completed: false
        })  
    )
    // console.log(processedItems)


    await connect();
    const itemIds:ToDoItem = await ToDoItem.create(processedItems)
    
    const procItemIds = itemIds.map( item =>
        item._id: mongoose.Types.ObjectId
    )

    body.items = procItemIds
    console.log(body)
    const toDo = await Todo.create(body)
    // console.log("todo: ", toDo)
    res.status(200).json({toDo})
}
export default addToDoList;
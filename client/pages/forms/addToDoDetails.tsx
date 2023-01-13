import ToDoFormLayout from '../../components/layouts/toDoFormLayout';
import { useState } from 'react';


export default function AddTodoForm() {



const [state, setState] = useState("");

const [title, setTitle] = useState("");
const [priority, setPriority] = useState("");
const [color, setColor] = useState("");
const [numItems, setNumItems] = useState("");

const createToDoList = () => {
    
}

    return (
        <ToDoFormLayout>

            <h1>Add the details for your todo list:</h1>
            {/* <form action="/api/todoLists/add" method="post" className="toDoForm" > */}
            <form className="toDoForm" >
                <label htmlFor="title"> Title </label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    onChange={e => setTitle(e.target.value)}
                />

                <label htmlFor="priority"> Priority </label>
                <select 
                    id="priority" 
                    name="priority"
                    onChange={e => setPriority(e.target.value)}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <label htmlFor="color"> Color </label>
                <input 
                    type="text" 
                    id="color" 
                    name="color" 
                    onChange={e => setColor(e.target.value)}
                />

                <label htmlFor="numItems"> Number of Items </label>
                <input 
                    type="number" 
                    id="numItems" 
                    name="numItems" 
                    onChange={e => setNumItems(e.target.value)}
                />


                <button type="button" onClick={(e) => createToDoList()}> Next </button>

            </form>

        </ToDoFormLayout>
    )
}
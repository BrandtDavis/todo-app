import ToDoFormLayout from '../../components/layouts/toDoFormLayout';
import TextInput from '../../components/formInputs/textInput';
import SelectInput from '../../components/formInputs/selectInput';

import  createToDoList  from '../../lib/toDoLists'

import { useState } from 'react';


export default function AddTodoForm() {

    const PRIORITY_OPTIONS = ["Low", "Medium", "High"]

    const [state, setState] = useState({});

    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");
    const [color, setColor] = useState("");
    const [toDoItems, setToDoItems] = useState("");

    const create = async () => {
        setState({ ...state, loading: true })
        const response = await createToDoList(title, priority, color, toDoItems)

        console.log(response)
        setState({ ...state, loading: false });
    }

    return (
        <ToDoFormLayout>

            <h1>Add the details for your todo list:</h1>
            <form className="toDoForm" >
                <TextInput 
                    name="title" 
                    id="title"
                    labelValue="Title" 
                    updateFunction={setTitle} 
                />

                <SelectInput 
                    name="priority"
                    id="priority"
                    labelValue="Priority"
                    selectOptions={PRIORITY_OPTIONS}
                    updateFunction={setPriority}
                />

                <TextInput 
                    name="color" 
                    id="color"
                    labelValue="Color" 
                    updateFunction={setColor} 
                />

                <TextInput 
                    name="toDoItems" 
                    id="toDoItems" 
                    labelValue="ToDo List Items"
                    updateFunction={setToDoItems} 
                />


                <button type="button" onClick={(e) => create()}> Next </button>

            </form>

        </ToDoFormLayout>
    )
}
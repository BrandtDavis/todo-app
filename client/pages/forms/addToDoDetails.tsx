import ToDoFormLayout from '../../components/layouts/toDoFormLayout';
import TextInput from '../../components/formInputs/textInput';
import NumericInput from '../../components/formInputs/numericInput';
import SelectInput from '../../components/formInputs/selectInput';

import { useState } from 'react';


export default function AddTodoForm() {

    const PRIORITY_OPTIONS = ["Low", "Medium", "High"]

    const [state, setState] = useState({});

    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("");
    const [color, setColor] = useState("");
    const [numItems, setNumItems] = useState(0);

    const createToDoList = async () => {
        setState({ ...state, loading: true })
        const response = await fetch('/api/todoLists/add', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, priority, color })
        });

        const content = await response.json();
        console.log(content)
        setState({ ...state, loading: false });
    }

    return (
        <ToDoFormLayout>

            <h1>Add the details for your todo list:</h1>
            <form className="toDoForm" >
                <label htmlFor="title"> Title </label>
                <TextInput 
                    name="title" 
                    id="title" 
                    updateFunction={setTitle} 
                />

                <label htmlFor="priority"> Priority </label>
                <SelectInput 
                    name="priority"
                    id="priority"
                    selectOptions={PRIORITY_OPTIONS}
                    updateFunction={setPriority}
                />

                <label htmlFor="color"> Color </label>
                <TextInput 
                    name="color" 
                    id="color" 
                    updateFunction={setColor} 
                />

                <label htmlFor="numItems"> Number of Items </label>
                <NumericInput 
                    id="numItems" 
                    name="numItems" 
                    updateFunction={setNumItems} 
                />


                <button type="button" onClick={(e) => createToDoList()}> Next </button>

            </form>

        </ToDoFormLayout>
    )
}
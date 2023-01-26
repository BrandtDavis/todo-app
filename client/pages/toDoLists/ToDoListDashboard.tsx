import { useState, useEffect } from 'react';
import ToDoCard from '../../components/dashboardCards/toDoCard'

export default function ToDoListDashboard() {
   
    interface toDoItem {
        toDoItemName: string,
        completed: boolean,
    }

    interface ToDoList {
        _id: string;
        title: string;
        priority: string;
        color: string;
        items: toDoItem[];
    }

    const [toDos, setToDos] = useState([
        {
            _id: '',
            title: '',
            priority: '',
            color: '',
            items: [],
        }
    ]);

    useEffect( () => {
        fetch('/api/todoLists/getAll').then(response => {
            // if(response) {
                return response.json()
           // }
        }).then(arrayRes => setToDos(arrayRes))
    }, []);

    const toDoArrays: ToDoList[] = Object.values(toDos)
    console.log(toDoArrays[0].items[0])
    return (
        <div>
            <h1>Your ToDo Lists</h1>           
            {
               toDoArrays.map( (toDoList, i) =>
                    <ToDoCard 
                        key={i}
                        toDoListTitle={toDoList.title}
                        toDoListItems={toDoList.items}
                    />
                )
            } 
        </div>
    );
}
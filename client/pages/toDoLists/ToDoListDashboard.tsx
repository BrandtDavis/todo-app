import { useState, useEffect } from 'react';
import ToDoItem from '../../components/dashboardCards/toDoItem'

export default function ToDoListDashboard() {

    // interface ToDoItem {
    //     itemName: string;
    //     toDoItemKey: string;
    //     completed: boolean;
    // }   
   
    interface ToDoList {
        _id: string;
        title: string;
        priority: string;
        color: string;
        items: string[];
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
    return (
        <div>
            <h1>Your ToDo Lists</h1>           
            {
               toDoArrays.map( (toDoList, i) =>
                    <div className="toDoItemCard" key={i}>
                        <h3 className="toDoItemH3" key={i}>{toDoList.title}</h3>
                        <div>
   
                            {toDoList.items.map( (item, i) =>
                                <ToDoItem 
                                    toDoItem={item}
                                    key={i}
                                />
                                )             
                            }            
                        </div>
                     </div>    
                )
            } 
   
        </div>
    );
}
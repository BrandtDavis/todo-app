import { useState, useEffect } from 'react';

export default function ToDoListDashboard() {
   
    interface TODO {
        _id: string;
        title: string;
        priority: string;
        color: string;
    }
    // const toDo = [
    //     {
    //         title: 'I am a title',
    //         priority: 'High',
    //         color: '',
    //     }
    // ]

    const [toDos, setToDos] = useState([
        {
            _id: '',
            title: '',
            priority: '',
            color: '',
        }
    ]);

    useEffect( () => {
        fetch('/api/todoLists/getAll').then(response => {
            // if(response) {
                return response.json()
           // }
        }).then(arrayRes => setToDos(arrayRes))
    }, []);

    const toDoArrays = Object.values(toDos)
    console.log(toDoArrays)
    return (
        <div>
            <h1>Your ToDo Lists</h1>           
            {
                toDoArrays.map( (toDoList: 
                    {
                        _id: string,
                        title: string,
                        priority: string,
                        color: string,
                    }, 
                    i: number
                ) => 
                    <div className="toDoItem" key={i}>
                        <h3 className="toDoItemH3" key={i}>{toDoList.title}</h3>
                        <div>
                            <ul>                   
                                <li>This is an item</li>
                                <li>This is an item</li>
                                <li>This is an item</li>
                            </ul>
                        </div>
                     </div>    
                )
            } 
   
        </div>
    );
}
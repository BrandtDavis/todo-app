import { useState, useEffect } from 'react';

export default function ToDoListDashboard() {
   
    const [toDos, setToDos] = useState([{
            _id: '',
            title: 'I am a title',
            priority: 'High',
            color: '',
        }]
    );

    // useEffect( () => {
    //     fetch('/api/todoLists/getAll').then(response => {
    //         // if(response) {
    //             return response.json()
    //         // }
    //     }).then(jsonRes => setToDos(Object.values(jsonRes)))
    // }, []);

    // const toDoArrays = Object.values(toDos)
    // console.log(toDoArrays)
    return (
        <div>
            <h1>Your ToDo Lists</h1>           
            {
                toDos.map( (toDo, i) => 
                    <div className="toDoItem" key={i}>
                        <h3 className="toDoItemH3" key={i}>{toDo.title}</h3>
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
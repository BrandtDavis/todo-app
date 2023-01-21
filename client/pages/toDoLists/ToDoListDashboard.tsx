import { useState, useEffect } from 'react';

export default function ToDoListDashboard() {
   
    const toDo = [
        {
            title: 'I am a title',
            priority: 'High',
            color: '',
        }
    ]

    const [toDos, setToDos] = useState([{
            _id: '',
            title: 'I am a title',
            priority: 'High',
            color: '',
        }]
    );

    useEffect( () => {
        fetch('/api/todoLists/getAll').then(response => {
            // if(response) {
                return response.json()

            // }
        }).then(arrayRes => setToDos(arrayRes))
    }, []);

    const toDoArrays = Object.values(toDos)[0]
    console.log(toDoArrays[0])
    return (
        <div>
            <h1>Your ToDo Lists</h1>           

                    <div className="toDoItem" >
                        <h3 className="toDoItemH3" >{toDo[0].title}</h3>
                        <div>
                            <ul>                   
                                <li>This is an item</li>
                                <li>This is an item</li>
                                <li>This is an item</li>
                            </ul>
                        </div>
                    </div>    


            {
                toDoArrays.map( (toDo, i) => 
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
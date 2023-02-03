import { useState, useEffect } from 'react';
import ToDoItem from '../../components/dashboardCards/toDoItem'

interface ToDoItem {
    toDoItemName: string,
    completed: boolean,
}

const ToDoCard = (
    props: {
        toDoListTitle: string,
        toDoListItems: string[],
    }
) => {

    const [toDoItems, setToDoItems] = useState([
        {
            toDoItemName: '',
            completed: '',
        }
    ]);

    const toDoItemIds = props.toDoListItems.toString()
    useEffect( () => {
        fetch('/api/todoLists/getToDoItem').then(response => {
            return response.json()
        }).then(response => setToDoItems(response))
    }, []);


    return (
        <div className="toDoItemCard">
            <h3 className="toDoItemH3">{props.toDoListTitle}</h3>
            {
                toDoItems.map( (item, i) =>
                    <ToDoItem 
                        toDoItemName={item.toDoItemName}
                        completed={item.completed}
                        key={i}
                    />
                )                
            }  
        <button className="toDoListUpdateButton">Update</button>
        </div>
    )
}

export default ToDoCard;
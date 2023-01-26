import ToDoItem from '../../components/dashboardCards/toDoItem'

interface toDoItem {
    toDoItemName: string,
    completed: boolean,
}

const ToDoCard = (
    props: {
        toDoListTitle: string,
        toDoListItems: toDoItem[],
    }
) => {

    return (
        <div className="toDoItemCard">
            <h3 className="toDoItemH3">{props.toDoListTitle}</h3>
            {props.toDoListItems.map( (item, i) =>
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
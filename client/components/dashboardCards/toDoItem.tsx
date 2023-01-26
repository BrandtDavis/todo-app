const ToDoItem = (
    props:
        {
            toDoItemName: string,
            completed: boolean,
        }
) => {

    return (
        <div className="toDoItemContainer">
            <label htmlFor={props.toDoItemName}>{props.toDoItemName}</label>
            <input 
                name={props.toDoItemName} 
                type="checkbox" 
                className="toDoItemCheckbox"
                defaultChecked={props.completed} 
            />

        </div>
    )
}

export default ToDoItem;
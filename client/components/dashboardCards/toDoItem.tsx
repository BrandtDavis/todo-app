const ToDoItem = (
    props:
        {
            toDoItem: string,
            toDoItemKey: string,
            completed: boolean,
        }
) => {

    return (
        <div className="toDoItemContainer">
            <label htmlFor={props.toDoItemKey}>{props.toDoItem}</label>
            <input 
                name={props.toDoItemKey} 
                type="checkbox" 
                className="toDoItemCheckbox" 
            />
        </div>
    )
}

export default ToDoItem;
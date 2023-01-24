const ToDoItem = (
    props:
        {
            toDoItem: string,
            // toDoItemKey: string,
            // completed: boolean,
        }
) => {

    return (
        <div className="toDoItemContainer">
            <label htmlFor={props.toDoItem}>{props.toDoItem}</label>
            <input 
                name={props.toDoItem} 
                type="checkbox" 
                className="toDoItemCheckbox" 
            />
        </div>
    )
}

export default ToDoItem;
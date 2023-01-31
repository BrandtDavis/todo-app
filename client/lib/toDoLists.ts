import ToDoItemSchema from "../models/ToDoItem";

interface ToDoItem {
    toDoItemName: string,
    completed: boolean,
}

const createToDoList = async (
        title: string,
        priority: string,
        color: string,
        toDoItems: string[],
) => {
    console.log(JSON.stringify({ title, priority, color, toDoItems }))


    const response = await fetch('/api/todoLists/addToDoList', {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, priority, color, toDoItems })
    });
    return response.json()
}

export default createToDoList;
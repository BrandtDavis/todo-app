import ToDoFormLayout from '../../components/layouts/toDoFormLayout';

export default function AddToDoListItems(){

    const getItem = async() => {
        const res = await fetch('/api/todoLists/getToDoItemById');
        console.log(res)
    }

    return (
        <ToDoFormLayout>
        <form action="">

            <h2>To Do List Placeholder</h2>
            <h3>Please specify the priority for each item below:</h3>

            <a href="/forms/addToDoDetails">Previous</a>

            <button type="button" onClick={getItem} >TEST</button>

        </form>
        </ToDoFormLayout>
    )
}
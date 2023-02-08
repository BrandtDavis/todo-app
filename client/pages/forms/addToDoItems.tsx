import ToDoFormLayout from '../../components/layouts/toDoFormLayout';

export default function AddToDoListItems(){

    const getItem = async() => {
        const res = await fetch('/api/todoLists/getToDoItemById');
        console.log(res)
    }

    return (
        <ToDoFormLayout>
        <form action="">

            <input type="text" placeholder="Customize your items" />

            <a href="/forms/addToDoDetails">Previous</a>

            <button type="button" onClick={getItem} >TEST</button>

        </form>
        </ToDoFormLayout>
    )
}
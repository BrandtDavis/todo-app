import ToDoFormLayout from '../../components/layouts/toDoFormLayout';

export default function AddToDoListItems(){
    return (
        <ToDoFormLayout>
        <form action="">

            <input type="text" placeholder="Suhhhhh" />

            <a href="/forms/addToDoDetails">Previous</a>

            <button type="submit">Submit</button>

        </form>
        </ToDoFormLayout>
    )
}
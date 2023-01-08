import ToDoFormLayout from '../../components/layouts/toDoFormLayout';

export default function AddTodoForm() {

    return (
        <ToDoFormLayout>

            <h1>Add the details for your todo list:</h1>
            <form action="/api/todoLists/add" method="post" className="toDoForm" >
                <label htmlFor="title"> Title </label>
                <input type="text" id="title" name="title" />

                <label htmlFor="priority"> Priority </label>
                <select id="priority" name="priority">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <label htmlFor="color"> Color </label>
                <input type="text" id="color" name="color" />

                <label htmlFor="numItems"> Number of Items: </label>
                <input type="number" id="numItems" name="numItems" />

                <a className="linkButton" href="/forms/addToDoItems">Next</a>
            </form>

        </ToDoFormLayout>
    )
}
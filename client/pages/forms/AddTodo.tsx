import ToDoFormLayout from '../../components/layouts/toDoFormLayout';

export default function AddTodo() {

    return (
        <ToDoFormLayout>

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

                <button type="submit">Submit</button>
            </form>

        </ToDoFormLayout>
    )
}
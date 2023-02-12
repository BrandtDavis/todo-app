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

            <div>
                <span>Priority: 1</span>
                <br />
                <span>Item: item 1</span>
            </div>
            <br />
            <div>
                <span>Priority: 1</span>
            <br />

                <span>Item: item 1</span>
            </div>            
            <br />
            
            <div>
                <span>Priority: 1</span>
            <br />

                <span>Item: item 1</span>
            </div>

            <a href="/forms/addToDoDetails">Previous</a>

            <button type="button" onClick={getItem} >TEST</button>

        </form>
        </ToDoFormLayout>
    )
}
export default function ToDoListDashboard() {
   
   const getToDoList = async (

   ) => {
    const response = await fetch('/api/todoLists/getAll', {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
    // console.log(response)
    return response.json()
   }
   
    return (
        <div>

            <h1>Your ToDo Lists</h1>

            <button onClick={getToDoList}>Click Meh</button>
   
        </div>
    );
}
import ToDoItem from '../../components/dashboardCards/toDoItem'

interface toDoItem {
    itemName: string,
    completed: boolean,
}

const ToDoCard = (
    props: {
        toDoListTitle: string,
        toDoListItems: toDoItem[],
    }
) => {

    return (
        <div>



        </div>
    )
}

export default ToDoCard;
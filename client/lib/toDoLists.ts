const createToDoList = async (
        title: string,
        priority: string,
        color: string,
) => {
    const response = await fetch('/api/todoLists/add', {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, priority, color })
    });
    return response.json()
}

export default createToDoList;
import Layout from '../../components/layout';

export default function AddTodo() {

    return (
        <Layout>

            <form action="/api/todoLists/add" method="post">
                <input type="text" id="name" name="name" />
                <button type="submit">Submit</button>
            </form>

        </Layout>
    )
}
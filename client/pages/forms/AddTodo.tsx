import Layout from '../../components/layout';

export default function AddTodo() {

    return (
        <Layout>

            <form action="/api/todoLists/add" method="post">
                <label htmlFor="title"> Title </label>
                <input type="text" id="title" name="title" />

                <label htmlFor="color"> Color </label>
                <input type="text" id="color" name="color" />

                <button type="submit">Submit</button>
            </form>

        </Layout>
    )
}
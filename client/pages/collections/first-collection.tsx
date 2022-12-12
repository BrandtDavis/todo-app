import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstItem() {
    return(
        <>
        <Layout>
                <Head>
                    <title>First Collection</title>
                </Head>
                <h1>First Collection</h1>
                <h2>
                    <Link href="/">Home</Link>
                </h2>
        </Layout>
        </>
    ) 
}

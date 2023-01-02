import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedCollectionsData } from '../lib/collections';
import { GetStaticProps, GetStaticPaths, GetServerSideProps} from 'next';
import Date from '../components/date'


export default function Home({ allCollectionsData }:  
  { allCollectionsData: {
    date: string 
    title: string
    id: string
  }[]
}) {
  console.log(allCollectionsData)


  const createTest = async () => {
    const res = await fetch('/api/test/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Name',
        numItems: 160,
      })
    })
    const data = await res.json();
    console.log(data)
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>The todo list web app</h1>
        <p>You may have multiple lists, each with their own name</p>

        <button onClick={createTest}>Add to Mongo</button>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allCollectionsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
             <Link href={`/collections/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allCollectionsData = getSortedCollectionsData()
  return {
    props: {
      allCollectionsData
    }
  }
}
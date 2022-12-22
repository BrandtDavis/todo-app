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
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>The todo list web app</h1>
        <p>You may have multiple lists, each with their own name</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allCollectionsData.map(({ id, date, title }) => (
            <li className={utilStyles.lisdtItem} key={id}>
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
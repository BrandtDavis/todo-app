import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedCollectionsData } from '../lib/collections';
import { ReactNode } from 'react';

// type AllCollectionsData = {
//   allCollectionsData: ReactNode
//   id: string;
//   date: Date;
//   title: string;
// }

export async function getStaticProps() {
  const allCollectionsData = getSortedCollectionsData();
  return {
    props: {
      allCollectionsData,
    },
  };
}

export default function Home({ allCollectionsData }:  AllCollectionsData) {
  console.log(allCollectionsData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>The todo list web app</h1>
        
        <Link href="/collections/first-collection">First Collection</Link>
        <p>You may have multiple lists, each with their own name</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allCollectionsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}
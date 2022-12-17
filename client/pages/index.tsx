import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
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
    </Layout>
  );
}
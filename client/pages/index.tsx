import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Todo Lists</h1>
        
        <h2>This is the todo list title</h2>
        <p>You may have multiple lists, each with their own name</p>
      </section>
    </Layout>
  );
}
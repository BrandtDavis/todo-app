import Layout from '../../components/layout'
import { getAllCollectionIds, getCollectionData } from '../../lib/collections'; 
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Collection({
    collectionData
}: {
  collectionData: {
    title: string
    date: string
    contentHtml: string
  }

}) {
    return (
    <Layout>
        {collectionData.title}
        <br />
        {/* {collectionData.id} */}
        <br />
        {collectionData.date}
    </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllCollectionIds()
    return {
     paths,
     fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const collectionData = await getCollectionData(params?.id as string);
    return {
      props: {
        collectionData,
      },
    };
}
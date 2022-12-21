import Layout from '../../components/layout'
import { getAllCollectionIds, getCollectionData } from '../../lib/collections'; 
import { GetStaticProps, GetStaticPaths } from 'next'
import { cp } from 'fs';
import { getPositionOfLineAndCharacter } from 'typescript';


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

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const collectionData = getCollectionData(params?.id as string);
    return {
      props: {
        collectionData,
      },
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllCollectionIds()
    return {
     paths,
     fallback: false
    }
}
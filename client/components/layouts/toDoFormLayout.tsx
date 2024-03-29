import React, { ReactNode } from "react";
import Head from 'next/head';
import styles from '../layout.module.css';
import Link from 'next/link';

interface Children {
    children?: ReactNode
    home?: ReactNode
}

const name = 'Jim Bob';
export const siteTitle = 'Todo App';

export default function ToDoFormLayout({ children, home }: Children ) {
    return (
        <div className={styles.container}>
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This is a form page for adding todo lists"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header>
            
      </header>
            
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
)   
}
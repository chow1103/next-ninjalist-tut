import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          rerum velit officiis vel quidem iure, quam cumque repellendus quaerat
          nesciunt veniam nihil ullam magni magnam repellat, qui omnis. Iusto,
          eius?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          rerum velit officiis vel quidem iure, quam cumque repellendus quaerat
          nesciunt veniam nihil ullam magni magnam repellat, qui omnis. Iusto,
          eius?
        </p>
        <Link href='/ninjas' className={styles.btn}>
          See Ninjas Listing
        </Link>
      </div>
    </>
  );
}

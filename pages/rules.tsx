import type { NextPage } from "next";
import Head from "next/head";
import s from '../styles/Home.module.css'
import s1 from '../styles/rules.module.css'
import Link from "next/link";

const Page: NextPage = () => {
    return (
        <div className={s.container}>
            <Link href="/">
                <p className={s.backarr}>&larr;</p>
            </Link>
                
            <main className={s1.main}>
                
                <h1 className={s.title}>Rules</h1>
                <p className={s.description}>Menace is mainly covered by some easy stuff, but this is to help you understand</p>


                <div className={s.grid}>

                    <Link href="/rules#setup" className={s.card}>
                        <h2>Setup &rarr;</h2>
                        <p>Setup is weird. Trust me, you want to know what is happening</p>
                    </Link>

                    <Link href="/rules#gameplay" className={s.card}>
                        <h2>Gameplay &rarr;</h2>
                        <p>Gameplay is a little easier to understand than setup, but I still highly suggest you read this</p>
                    </Link>
                </div>
            </main>
            <section className={s1.section}>
                <h2>Test</h2>
            </section>
        </div>
    );
};

export default Page;
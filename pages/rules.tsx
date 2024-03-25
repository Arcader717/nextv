import type { NextPage } from "next";
import Head from "next/head";
import s from '../styles/Home.module.css'
import s1 from '../styles/rules.module.css'

const Page: NextPage = () => {
    return (
        <div className={s.container}>
            <p className={s.backarr}>&larr;</p>
            
            <main className={s1.main}>
                
                <h1 className={s.title}>Rules</h1>
                <p className={s.description}>Looks like I haven&apos;t finished this page! Come back later to see the additions to this page</p>
                
            </main>
        </div>
    );
};

export default Page;
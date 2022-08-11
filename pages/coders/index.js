import React from "react";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { coders: data },
    };
}

export default function AllCoders({ coders }) {
    return (
        <>
            <Head>
                <title>Coder Demo | All coders</title>
                <meta name="keywords" content="coders" />
            </Head>
            <h1>All coders</h1>
            {coders.map((coder) => (
                <Link href={`/coders/${coder.id}`} key={coder.id}>
                    <a className="single">
                        <h3>{coder.name}</h3>
                    </a>
                </Link>
            ))}
        </>
    );
}

import React from "react";

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const paths = data.map((coder) => {
        return {
            params: { id: coder.id.toString() },
        };
    });

    // { fallback: false } means other routes should 404
    return { paths, fallback: false };
}

export async function getStaticProps(context) {
    // Call an external API endpoint to get posts
    const id = context.params.id;
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const data = await res.json();

    return {
        props: { coder: data },
    };
}

export default function Detail({ coder }) {
    return (
        <div>
            <h1>{coder.name}</h1>
            <p>Email: {coder.email}</p>
            <p>Web: {coder.website}</p>
            <p>
                Address: {coder.address.street}, {coder.address.city}
            </p>
            <p>Company: {coder.company.name}</p>
        </div>
    );
}

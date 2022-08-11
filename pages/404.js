import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function NotFound() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);
    return (
        <div className="not-found">
            <h1>Oop....</h1>
            <h2>That page can't be found !!!!</h2>
            <p>
                Going back to the <Link href="/">Home Page</Link> is 3
                seconds....
            </p>
        </div>
    );
}

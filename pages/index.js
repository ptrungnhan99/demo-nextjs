import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Head>
                <title>Coder Demo | Home</title>
                <meta name="keywords" content="coders" />
            </Head>
            <div>
                <h1 className={styles.title}>Home Page</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                    officia inventore omnis. Quam rem corporis iste provident
                    voluptates commodi possimus, accusantium quae, repudiandae
                    pariatur nam explicabo ipsum veritatis quo dolorum?
                </p>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse sunt perspiciatis tempore corporis rerum. Molestiae,
                    beatae provident. Nihil aperiam vero quae in nemo earum
                    dolore, asperiores, excepturi expedita deserunt ut.
                </p>
                <Link href="/coders/">
                    <a className="btn">See all coders</a>
                </Link>
                <style jsx>
                    {`
                        .btn {
                            display: block;
                            width: 150px;
                            padding: 8px 0;
                            margin: 20px auto;
                            background: #ffbf49;
                            border-radius: 4px;
                            color: black;
                            text-align: center;
                        }
                    `}
                </style>
            </div>
        </>
    );
}

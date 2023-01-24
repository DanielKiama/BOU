import Head from "next/head";

import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Bank of Uganda</title>
            </Head>
            <NavBar />
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
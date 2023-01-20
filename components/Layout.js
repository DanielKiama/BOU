import Head from "next/head";

import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Faraja Support Cancer - Trust Fund Supoort</title>
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
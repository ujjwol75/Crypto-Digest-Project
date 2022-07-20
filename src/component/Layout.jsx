import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation/Navigation';


function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/static/favicon.png" />
            </Head>
            <Header />
            <div style={{ marginBottom: "100px" }}>
                <Navigation />
            </div>
            {children}
            <Footer />
        </>
    );
}

export default Layout;
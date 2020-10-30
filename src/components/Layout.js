import React from 'react';
import Header from './shared/Header';
import { Helmet } from 'react-helmet-async';


const Layout = ({title, description, children}) => {
    return ( 
        <>
        <Helmet>
            <title>{ title ? title + " - AlfaSoft" : "React.js Boilerplate" }</title>
            <meta name = "description" content={ description || "React.js Boilerplate" } />
        </Helmet>
        <Header/>
        <main className="container">
            {children}
        </main>
        
        </>
     );
}
 
export default Layout;
import React from 'react';
import Layout from '../components/Layout';

/*IMPORTANDO ESTILOS */


const About = () => {
    
    return ( 
        <Layout title="Acerca de" description="About page" >
            <div className="text-center mt-5">
                <h1>Acerca de</h1>
                <p>Documentacion consultada:<strong></strong>por AlfaSoft.</p>

               
            </div>
        </Layout>
     );
}
 
export default About;
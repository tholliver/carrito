import React, { Component } from 'react';
import Layout from '../components/Layout';
import Profile from './Profile/index'

const About = () => {
   

    const info={nombre:"Mike",bio:"lala",avatar_url:"land"};
    
    
    return ( 
        <Layout title="Acerca de" description="About page" >
            <div className="text-center mt-5">
                <h1>Acerca de</h1>
                <p>Documentacion consultada:<strong></strong>por AlfaSoft.</p>
            {<Profile 
          name={info.nombre} bio={info.bio}
          avatar={info.avatar_url} />}
            </div>

            
        </Layout>
    );
   
  }


export default About;
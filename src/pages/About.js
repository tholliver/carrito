import React from "react";
import Layout from "../components/Layout";
import Profile from "./Profile/index";


const About = () => {
  const info = [{ nombre: "Mike", bio: "Some additons", avatar_url: "lets add up more text here to see if its get." },
  { nombre: "Mike", bio: "ADDS ON", avatar_url: "lets add" }];

  return (
    <Layout title="Acerca de" description="About page">
      <div className="text-center mt-5">
        <h1>Acerca del AlfaSoft</h1>
        
        <div  >
          
          {info.map((item) => <Profile name={item.nombre} bio={item.bio} avatar={item.avatar_url} />)}
        </div>
      </div>
    </Layout>
  );
};

export default About;

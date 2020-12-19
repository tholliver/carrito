import React from "react";
import Layout from "../components/Layout";
import Profile from "./Profile/index";

const About = () => {
  const info = [
    { nombre: "Omar [la master]", bio: "Some additons", avatar_url: "/teamPics/mike.jpg" },
    { nombre: "Gustavo", bio: "ADDS ON", avatar_url: "/teamPics/mike.jpg" },
    { nombre: "Luis", bio: "ADDS ON", avatar_url: "/teamPics/mike.jpg" },
    { nombre: "Deniesse", bio: "ADDS ON", avatar_url: "/teamPics/mike.jpg" },
    { nombre: "Maura", bio: "ADDS ON", avatar_url: "/teamPics/mike.jpg" },
    { nombre: "Antonio", bio: "ADDS ON", avatar_url: "/teamPics/mike.jpg" },
    { nombre: "Gary", bio: "ADDS ON", avatar_url: "/teamPics/mike.jpg" },
    { nombre: "La massa Bro", bio: "ADDS ON", avatar_url: "/teamPics/mike.jpg" },
  ];

  return (
    <Layout title="Acerca de" description="About page">
      <div className="text-center mt-5">
        <h1>Acerca de AlfaSoft</h1>

        <div>
          {info.map((item) => (
            <Profile
              name={item.nombre}
              bio={item.bio}
              avatar={item.avatar_url}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;

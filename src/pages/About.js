import React from "react";
import Layout from "../components/Layout";
import Profile from "./Profile/index";
import "./stille.css";
import "./Profile/styles/layout.css";

const About = () => {
  const info = [
    {
      nombre: "Omar",
      bio: "No es cafe, ni tequila, es tu codigo que no complia",
      avatar_url: "/teamPics/omar.jpeg",
    },
    {
      nombre: "Gustavo",
      bio: "No es cafe, ni tequila, es tu codigo que no complia",
      avatar_url: "/teamPics/gust.jpeg",
    },
    {
      nombre: "Luis",
      bio: "No es cafe, ni tequila, es tu codigo que no complia",
      avatar_url: "/teamPics/luis.jpg",
    },
    {
      nombre: "Deniesse",
      bio: "No es cafe, ni tequila, es tu codigo que no complia",
      avatar_url: "/teamPics/den.jpeg",
    },
    {
      nombre: "Maura",
      bio: "No es cafe, ni tequila, es tu codigo que no complia",
      avatar_url: "/teamPics/maur.jpeg",
    },
    {
      nombre: "Antonio",
      bio: "No es cafe, ni tequila, es tu codigo que no complia",
      avatar_url: "/teamPics/antonio.jpeg",
    },
    {
      nombre: "Gary",
      bio: "No es cafe, ni tequila, es tu codigo que no complia",
      avatar_url: "/teamPics/gary.jpeg",
    },
    {
      nombre: "La massa Bro",
      bio: "master at nineri ncierncen cecnienciuenrcu",
      avatar_url: "/teamPics/mike.jpg",
    },
  ];

  return (
    <Layout title="Acerca de" description="About page">
      <div className="text-center mt-5">
        <h1>Acerca de AlfaSoft</h1>
        <h3>Work Team</h3>
        <br />
        <div className="div1">
          {info.map((item) => (
            <Profile
              name={item.nombre}
              bio={item.bio}
              avatar={item.avatar_url}
            />
          ))}
        </div>

        <div className="div2">
          <h1>Roles</h1>
          <section id="introblocks">
            <div class="sectiontitle"></div>
            <ul class="nospace group">
              <li class="one_quarter first">
                <article>
                  <a href="#">
                    <i class="fas fa-golf-ball"></i>
                  </a>
                  <h4 class="heading">API - Logic</h4>
                  <p>
                    Per conubia nostra per mauris aliquet massa nulla facilisi
                    porta ligula non elementum
                  </p>
                  <footer>
                    <a class="btn" href="#">
                      More Details
                    </a>
                  </footer>
                </article>
              </li>
              <li class="one_quarter">
                <article>
                  <a href="#">
                    <i class="fas fa-ribbon"></i>
                  </a>
                  <h4 class="heading">Diseño</h4>
                  <p>
                    Ultricies justo urna egestas metus ut ornare leo augue
                    pharetra risus morbi tincidunt massa
                  </p>
                  <footer>
                    <a class="btn" href="#">
                      More Details
                    </a>
                  </footer>
                </article>
              </li>
              <li class="one_quarter">
                <article>
                  <a href="#">
                    <i class="fas fa-tablets"></i>
                  </a>
                  <h4 class="heading">Base de datos</h4>
                  <p>
                    Ac vestibulum rutrum orci augue iaculis nibh quis porta nunc
                    nisi suscipit leo nam ac lacus
                  </p>
                  <footer>
                    <a class="btn" href="#">
                      More Details
                    </a>
                  </footer>
                </article>
              </li>
              <li class="one_quarter">
                <article>
                  <a href="#">
                    <i class="fas fa-wine-glass"></i>
                  </a>
                  <h4 class="heading">Testing</h4>
                  <p>
                    Cras tempor ultricies urna aliquam massa sapien posuere in
                    iaculis adipiscing vulputate
                  </p>
                  <footer>
                    <a class="btn" href="#">
                      More Details
                    </a>
                  </footer>
                </article>
              </li>
            </ul>
          </section>
          
        </div>
        <div className="div2">
          
        </div>
      </div>
    </Layout>
  );
};

export default About;

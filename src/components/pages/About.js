import React from 'react';
import './About.css'; 

function About() {
  return (
    <div>
      <header>
        <h1>Acerca de Nuestra Empresa de Mates</h1>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/products">Productos</a></li>
            <li><a href="/user">Usuario</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Nuestra Historia</h2>
          <p>Somos una empresa familiar apasionada por los mates, estamos orgullosos de llevar la tradición del mate a todos los rincones del mundo. La inspiracion de El Entrerriano Mate surge de nuestro pueblo Santa Elena, donde el mate es sinonimo de tradicion, compania, amistad y buenos momentos.</p>
        </section>
        <section>
          <h2>Nuestra Misión</h2>
          <p>Nuestra misión es brindar a nuestros clientes la mejor experiencia de mate. Creemos que el mate es más que una bebida; es un vínculo entre personas, que inspira momentos significativos, donde amigos y familiares se reúnen para compartir, conversar y crear recuerdos que perduran toda la vida.</p>
        </section>
        <section>
          <h2>Nuestro Equipo</h2>
          <p>Contamos con un equipo de expertos en mates, desde catadores de yerba mate hasta artesanos que crean los mejores Mates y bombillas. Estamos comprometidos con la satisfacción de nuestros clientes.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 El Entrerriano Mate</p>
      </footer>
    </div>
  );
}

export default About;
import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container" data-cy="about-page">

      <h1>Acerca de nosotros</h1>

      <p
        id="info"
        style={{ color: '#2563eb', fontWeight: '600', fontSize: '1.1rem' }}
      >
        Somos el equipo nº 8
      </p>

      <p
        id="team-number"
        data-cy="team-number"
        style={{ color: '#2563eb', fontWeight: '600', fontSize: '1.1rem' }}
      >
        Equipo 8
      </p>

      <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '2rem' }}>
        Somos un equipo de dos estudiantes de la UNIR comprometidos con el desarrollo de software de calidad.
        Durante esta actividad hemos trabajado juntos en todas las fases del proyecto: desde la
        configuración del entorno, la corrección de errores en el código existente, hasta la
        implementación de nuevas funcionalidades y el diseño de las pruebas automatizadas con Cypress.
        La colaboración constante entre ambos miembros ha sido clave para superar los retos encontrados.
      </p>

      <div data-cy="team-member">
        <h3 className="member-name" data-cy="member-name">Raúl Llamas Yáñez</h3>
        <p data-cy="member-role">Desarrollador</p>
        <p className="member-description" data-cy="member-contribution">
          Participó activamente en el desarrollo frontend, la corrección de pruebas y la implementación
          de las nuevas funcionalidades junto al resto del equipo.
        </p>
      </div>

      <div data-cy="team-member">
        <h3 className="member-name" data-cy="member-name">Wendy Condor Saragosin</h3>
        <p data-cy="member-role">Desarrolladora</p>
        <p className="member-description" data-cy="member-contribution">
          Contribuyó en el diseño de componentes, la configuración del entorno de pruebas y
          la validación final de todas las funcionalidades implementadas por el equipo.
        </p>
      </div>

    </div>
  )
}

export default About

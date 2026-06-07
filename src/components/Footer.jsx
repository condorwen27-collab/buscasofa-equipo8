import React from 'react'

const Footer = () => {
  return (
    <footer data-cy="footer" id="footer" style={{
      background: '#1e3a5f',
      color: '#cbd5e1',
      padding: '1.5rem',
      marginTop: '2rem',
      textAlign: 'center'
    }}>
      <h3 style={{ color: 'white', marginBottom: '0.8rem' }}>
        Equipo 8
      </h3>
      <ul data-cy="footer-members" style={{ listStyle: 'none', padding: 0 }}>
        <li data-cy="member-name" className="member-name">Raúl Llamas Yáñez</li>
        <li data-cy="member-name" className="member-name">Oscar Martinez Moreno</li>
        <li data-cy="member-name" className="member-name">Wendy Condor Saragosin</li>
      </ul>
    </footer>
  )
}

export default Footer

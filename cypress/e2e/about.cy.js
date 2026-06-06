/// <reference types="cypress" />

describe('Página About - Quienes somos', () => {

  beforeEach(() => {
    cy.visit('/about');
  });

  it('La página /about carga correctamente', () => {
    cy.url().should('include', '/about');
    cy.get('[data-cy=about-page]').should('exist');
  });

  it('La página muestra el número de equipo correcto', () => {
    cy.get('[data-cy=team-number]')
      .should('be.visible')
      .and('contain', 'Equipo 8');
  });

  it('La página muestra exactamente 3 integrantes', () => {
    cy.get('[data-cy=team-member]')
      .should('have.length', 3);
  });

  it('La página muestra los nombres de los 3 integrantes', () => {
    const nombres = [
      'Raúl Llamas Yáñez',
      'Oscar Martinez Moreno',
      'Wendy Condor Saragosin'
    ];
    nombres.forEach(nombre => {
      cy.get('[data-cy=member-name]')
        .contains(nombre)
        .should('be.visible');
    });
  });

  it('Cada integrante tiene su rol visible', () => {
    cy.get('[data-cy=member-role]')
      .should('have.length', 3)
      .each($el => {
        cy.wrap($el).invoke('text').should('not.be.empty');
      });
  });

  it('Cada integrante tiene su descripción de aportación', () => {
    cy.get('[data-cy=member-contribution]')
      .should('have.length', 3)
      .each($el => {
        cy.wrap($el).invoke('text').should('have.length.gte', 10);
      });
  });

});
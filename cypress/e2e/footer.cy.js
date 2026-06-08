/// <reference types="cypress" />

describe('Footer del Equipo 8', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('El footer existe y es visible', () => {
    cy.get('[data-cy=footer]')
      .should('exist')
      .and('be.visible');
  });

  it('El footer muestra el número de equipo', () => {
    cy.get('[data-cy=footer]')
      .contains('Equipo 8')
      .should('be.visible');
  });

  it('El footer muestra los 2 nombres del equipo', () => {
    const nombres = [
      'Raúl Llamas Yáñez',
      'Wendy Condor Saragosin'
    ];
    nombres.forEach(nombre => {
      cy.get('[data-cy=member-name]')
        .contains(nombre)
        .should('exist');
    });
  });

  it('El footer tiene exactamente 2 miembros', () => {
    cy.get('[data-cy=footer]')
      .find('[data-cy=member-name]')
      .should('have.length', 2);
  });

  it('El footer también aparece en la página /about', () => {
    cy.visit('/about');
    cy.get('[data-cy=footer]').should('be.visible');
  });

});
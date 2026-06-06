/// <reference types="cypress" />

describe('Página de Registro de usuario', () => {

  beforeEach(() => {
    cy.visit('/registro');
  });

  it('La página de registro carga correctamente', () => {
    cy.url().should('include', '/registro');
  });

  it('El formulario de registro tiene campos de nombre, email y contraseña', () => {
    cy.get('input[type="text"], input[name="username"], input[name="nombre"]')
      .should('exist');
    cy.get('input[type="email"], input[name="email"]')
      .should('exist');
    cy.get('input[type="password"]')
      .should('exist');
  });

  it('El usuario puede escribir en los campos del formulario', () => {
    cy.get('input[type="email"], input[name="email"]')
      .first()
      .type('test@correo.com')
      .should('have.value', 'test@correo.com');
    cy.get('input[type="password"]')
      .first()
      .type('password123')
      .should('have.value', 'password123');
  });

  it('El enlace de login lleva a /login', () => {
    cy.get('a[href="/login"]').should('exist');
  });

});

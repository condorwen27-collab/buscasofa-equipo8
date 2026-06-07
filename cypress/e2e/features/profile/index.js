/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let authenticatedUsername;

Given('el usuario está autenticado como {string}', (username) => {
  authenticatedUsername = username;
  cy.visit('/');
  cy.window().then((win) => {
    win.localStorage.setItem('username', username);
    win.localStorage.setItem('token', 'fake-jwt-token');
  });
});

When('navega a la página de perfil', () => {
  cy.visit('/perfil');
});

Then('debería ver su nombre de usuario en el perfil', () => {
  cy.get('#profile-username').should('be.visible').and('contain', authenticatedUsername);
});

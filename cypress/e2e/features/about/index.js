/// <reference types="Cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('el usuario navega a {string}', (path) => {
  cy.visit(path);
});

Then('debería ver el nombre de cada miembro del equipo', () => {
  cy.get('.member-name').should('have.length.at.least', 1);
  cy.get('.member-name').first().should('be.visible');
});

Then('debería ver una descripción de cada miembro', () => {
  cy.get('.member-description').should('have.length.at.least', 1);
  cy.get('.member-description').first().should('be.visible');
});

Then('debería ver el número de equipo', () => {
  cy.get('#team-number').should('be.visible').and('contain', '8');
});

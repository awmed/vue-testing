// https://docs.cypress.io/api/introduction/api.html
import {expect} from 'chai';

describe('Posts test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('.link').should('have.length', 2)
  })

  it('visits the posts create page', () => {
    cy.visit('/posts/create')
    cy.get('[data-cy-post-title]').type('first test title from cy');
    cy.get('[data-cy-post-body]').type('first test body from cy');
    cy.get('[data-cy-submit]').click();
    cy.get('[data-cy-feedback-message]').invoke("text").should('equal', 'Default message');
  });
})

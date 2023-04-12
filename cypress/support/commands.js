// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//import 'cypress-file-upload';
/// <reference types="Cypress" />

  /// <reference types="cypress-xpath" />

 /// require('@4tw/cypress-drag-drop')

    

Cypress.Commands.add("login",(emailId,password) =>{

    cy.fixture('nopcommerce').then((data)=>{

    //cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
    cy.visit(Cypress.config('qaurl'))
    cy.xpath("//*[@id='Email']").clear().type(emailId)
    cy.xpath("//*[@id='Password']").clear().type(password)
    cy.xpath("//button[@type='submit']").click()
    cy.title().should('be.equal','Dashboard / nopCommerce administration')
    
    //cy.screenshot("Homepage")
})
})

Cypress.Commands.add("logout",()=>{
    cy.xpath("//a[normalize-space()='Logout']").click()
    cy.xpath("//strong[normalize-space()='Welcome, please sign in!']").should('be.text','Welcome, please sign in!')
})



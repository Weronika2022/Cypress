/// <reference types="cypress" />

describe('moje pierwsze testy automatyczne', () => {
    beforeEach(() => {
      cy.visit('https://janapawlaii36warszawa.com/try/')
    })
    it('first link check', () => {
        cy.xpath('/html/body/div/div/div[1]/div/center/div/div[2]/a/div').click()
      })
    it('second link check', () => {
    cy.xpath('/html/body/div/div/div/div/center/div/div[3]/a/div').click()
    })
    it('sixth link check', () => {
      cy.xpath('/html/body/div/div/div/div/center/div/div[7]/a/div/div/h6').click()
    })
    it('eighth link check', () => {
      cy.xpath('/html/body/div/div/div/div/center/div/div[9]/a/div/div/h6').click()
    })
    it('seventh link check', () => {
      cy.xpath('/html/body/div/div/div/div/center/div/div[8]/a/div/div/h6').click()
      cy.xpath('/html/body/div/div/div/div/center/div/div[10]/h3/span/span[1]').should('have.text', 'USUNIĘCIE PROBLEMU')
    })
})
/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('moje pierwsze testy automatyczne', () => {
    // przejscie do strony h&m
    beforeEach(() => {
      cy.visit('https://www2.hm.com/pl_pl/index.html')
      cy.viewport(1900, 750)
    })
    // akceptacja coockiesow
    it('Accept cookies', () => {
        // cy.xpath('//*[@id="onetrust-accept-btn-handler"]').click()
        // cy.wait(1000)
        cy.xpath('//*[@id="onetrust-accept-btn-handler"]').contains('Akceptuj').click({force: true})

      })
    // kilkamy link ona  
    it('Kliknięcie pierwszego linku-Ona', () => {
      cy.xpath('//*[@id="onetrust-accept-btn-handler"]').contains('Akceptuj').click({force: true})
      cy.wait(3000)
      cy.xpath('/html/body/header/nav/ul[2]/li[2]/a/span').click()
    })
    // klikam szósty link
    it('sixth link check', () => {
      cy.xpath('//*[@id="onetrust-accept-btn-handler"]').contains('Akceptuj').click({force: true})

      cy.xpath('/html/body/div/div/div/div/center/div/div[7]/a/div/div/h6').click()
    })
    // klikam ósmy link
    it('eighth link check', () => {
      cy.xpath('//*[@id="onetrust-accept-btn-handler"]').contains('Akceptuj').click({force: true})

      cy.xpath('/html/body/div/div/div/div/center/div/div[9]/a/div/div/h6').click()
    })
    // klikam siódmy link
    it('seventh link check', () => {
      cy.xpath('//*[@id="onetrust-accept-btn-handler"]').contains('Akceptuj').click({force: true})

      cy.xpath('/html/body/div/div/div/div/center/div/div[8]/a/div/div/h6').click()
      cy.xpath('/html/body/div/div/div/div/center/div/div[10]/h3/span/span[1]').should('have.text', 'USUNIĘCIE PROBLEMU')
    })
})
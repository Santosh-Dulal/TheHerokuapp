import Hovers from "../support/POM/hovers_pom"

describe('Hovers', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })
    let ho= new Hovers()
    it('Verify that the hovers link is hoverable', () => {
        ho.VerifyEachImageisHoverable()
    })

    it('Verify that the url of the hovers page is valid', () => {
      ho.VerifyURLOfHoversPage()  
    })

    it.only('Verify that the each image is hoverable ',{retries:2}, () => {
        ho.VerifyEachImageisHoverable()
    })
})
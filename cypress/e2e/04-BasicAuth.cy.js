import BasicAuth from "../support/POM/basicauth_pom"

describe('Basic Auth', () => {

    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })
    let ba = new BasicAuth()
    it('Verify that hovering on the basic auth can be done', () => {
        ba.VerifyHoveringOnBasicAuth()
    })
})
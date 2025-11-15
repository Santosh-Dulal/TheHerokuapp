import DigestAuthentication from "../support/POM/digestauthentication"

describe('Digest Authentication', () => {

    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    let da = new DigestAuthentication()
    it('Verify digest auth link is hoverable',() => {
        da.VerifyDigestAuthLinkIsHoverable()
    })

    it('Verify digest authentication', () => {
      da.VerifyLoginWithDigestAuthentication()  
    })
})
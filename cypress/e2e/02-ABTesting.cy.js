import HerokuPOM from "../support/POM/heroku_pom"

describe('AB Testing', () => {
    beforeEach(() => {
         cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    let hp = new HerokuPOM()
    it('Verify navigation to the AB Testing page, validate page content, and return to the home page.',{retries:2}, () => {
        hp.VerifyAbTesting()
    })
})
import ChallengingDom from "../support/POM/challengingdom_pom";

describe('Challenging Dom', () => {

    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })
    let cd = new ChallengingDom()
    it('Verify that the changelling_dom link is hoverable', () => {
        cd.VerifychallengingDomIsHoverable()
    })

    it('Verify that the url of the challenging dom', () => {
        cd.VerifyURLOfChallengingDom()
    })

    it.only('Verify that the all the three buttons exits and clickable', () => {
        cd.VerifyAllButtonsExist()
    })
})
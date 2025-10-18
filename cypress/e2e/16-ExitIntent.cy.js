import ExitIntent from "../support/POM/exitintent_pom"

describe('Exit Intent', () => {
    beforeEach(() => {
         cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })
    let ei= new ExitIntent()
    it('Verify that the exit intent is hoverable', () => {
        ei.VerifyExitIntentIsHoverable()
    })

    it('Verify that the eixt intent url is valid', () => {
      ei.VerifyURLOfExitIntentPage()  
    })

    it('Verify that the modal is seen after mouse is out of view port', () => {
        ei.VerifyModalAppearsAfterViewPortOut()
    })
})
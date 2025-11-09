import MultipleWindows from "../support/POM/multiplewindows_pom"

describe('Multiple Windows', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    let mw=new MultipleWindows()
    it('Verify hovering on windows link', () => {
        mw.VerifyHoveringOnMultipleWindowsLink()
    })

    it('Verify URL of the page', () => {
      mw.VerifyURLOfMultipleWindowsPage()  
    })

    it('Verify opening of new windows', () => {
        mw.VerifyNewWindowOpening()
    })
})
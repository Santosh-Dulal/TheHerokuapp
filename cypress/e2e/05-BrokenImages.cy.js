import BrokenImages from "../support/POM/brokenimages_pom";

describe('Broken Images', () => {

    beforeEach(() => {
           cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })
    let bl = new BrokenImages()
    it('Verify that the hovoering can be done on the link', () => {
        bl.VerifyHoveringOnBrokenImages()
    })

    it('Verify that the url of the page', () => {
        bl.VerifyURLOfBrokenImages()
    })

    it('Verify that there is no broken images in the pages', () => {
      bl.VerifyBrokenImageIsNotPresent()  
    })
})
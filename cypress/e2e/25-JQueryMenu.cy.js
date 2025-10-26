import JQueryMenu from "../support/POM/jquerymenu_pom"

describe('JQuery UI Menus', () => {

    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

   let jm = new JQueryMenu()
    it('Verify hovering on JQuery menu', () => {
        jm.VerifyHoveringOnJQueryMenu()
    })

    it('Verify url of the jquery menu', () => {
        jm.VerifyURLOfJQueryMenu()
    })

    it('Verify menu listing ', () => {
      jm.VerifyMenuListing()  
    })

    it('Verify disabled menu is present', () => {
      jm.VerifyDisabledMenuPresent()  
    })

    it.only('Verify listing of sub menus', () => {
        jm.VerifyListingOfSubMenus()
    })
})
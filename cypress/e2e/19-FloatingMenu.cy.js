import FloatingMenu from "../support/POM/floatingmenu_pom"

describe('Floating Menu', () => {
    beforeEach(() => {
         cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')

    })

    let fm = new FloatingMenu()
    it('Verify that floating menu link is hoverable', () => {
        fm.VerifyFloatingMenuLinkHoverable()
    })

    it('Verify that the url of the floating menu page is valid', () => {
      fm.VerifyFloatingMenuPageURL()  
    })

    it('Verify that floating menu is visible during scroll',()=>{
        fm.VerifyFloatingMenuIsVisibleInScrolling()
    })
})
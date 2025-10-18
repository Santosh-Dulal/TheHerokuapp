class FloatingMenu
{
    lnkFloatingMenu='a[href^="/floating_menu"]'
    menuId='#menu>ul>li'

    VerifyFloatingMenuLinkHoverable()
    {
        cy.get(this.lnkFloatingMenu).trigger('mouseover').should('exist').and('be.visible')
    }

    VerifyFloatingMenuPageURL()
    {
        cy.get(this.lnkFloatingMenu).click()
        cy.url().should('include','/floating_menu')
        cy.contains('Floating Menu')
        cy.get(this.menuId).each(($el)=>{
           cy.wrap($el).should('be.visible')
           cy.log($el.text())
        })
    }

    VerifyFloatingMenuIsVisibleInScrolling()
    {
        cy.get(this.lnkFloatingMenu).click()
        cy.get(this.menuId).should('be.visible')
        cy.scrollTo(0,100)
        cy.wait(300)
        cy.get(this.menuId).should('be.visible')
        cy.scrollTo('center')
        cy.get(this.menuId).should('be.visible')
          cy.wait(300)
        cy.scrollTo(0,'90%')
        cy.get(this.menuId).should('be.visible')
          cy.wait(300)
        cy.scrollTo('bottom')
        cy.get(this.menuId).should('be.visible')
        cy.scrollTo(0,100)
        cy.get(this.menuId).should('be.visible')
        

    }

}
export default FloatingMenu
class JQueryMenu
{
    lnkJQueryMenu='a[href^="/jqueryui/menu"]'
    lnkMenu='ul#menu'
    lnkDisabledMenu='#ui-id-1'
    lnkEnabledMenu='#ui-id-3'
    lnkDownloads='#ui-id-4>a'


    VerifyHoveringOnJQueryMenu()
    {
        cy.get(this.lnkJQueryMenu).trigger('mouseover').should('exist').and('be.visible').and('contain','JQuery UI Menus')
    }

    VerifyURLOfJQueryMenu()
    {
        cy.get(this.lnkJQueryMenu).click()
        cy.url().should('include','/jqueryui/menu')
        cy.contains('JQueryUI - Menu')
    }

    VerifyMenuListing()
    {
        cy.get(this.lnkJQueryMenu).click()
        cy.get(this.lnkMenu).trigger('mouseover')
    }

    VerifyDisabledMenuPresent()
    {
        cy.get(this.lnkJQueryMenu).click()
        cy.get(this.lnkMenu).trigger('mouseover')
        cy.get(this.lnkDisabledMenu).should('exist').and('have.class','ui-state-disabled').and('contain','Disabled').click({force:true})
        cy.url().should('include','/jqueryui/menu')
    }

    VerifyListingOfSubMenus()
    {
        cy.get(this.lnkJQueryMenu).click()
        cy.get(this.lnkEnabledMenu).trigger('mouseover')
    }

    // to be continue

   
}

export default JQueryMenu
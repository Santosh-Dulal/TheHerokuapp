class MultipleWindows
{
    lnkMultipleWindows='a[href^="/windows"]'
    lnkNewWindows='a[href^="/windows/new"]'

    VerifyHoveringOnMultipleWindowsLink()
    {
        cy.get(this.lnkMultipleWindows).trigger('mouseover').should('exist').and('be.visible').and('contain','Multiple Windows')
    }

    VerifyURLOfMultipleWindowsPage()
    {
        cy.get(this.lnkMultipleWindows).click()
        cy.url().should('include','/windows')
        cy.contains('Opening a new window')
        cy.get(this.lnkNewWindows).trigger('mouseover').should('exist').and('be.visible').and('contain','Click Here')
    }

    VerifyNewWindowOpening()
    {
        cy.get(this.lnkMultipleWindows).click()
        cy.get(this.lnkNewWindows).invoke('removeAttr','target').click()
        cy.url().should('include','/windows/new')
        cy.contains('New Window')
    }

}

export default MultipleWindows
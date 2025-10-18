class Dropdown
{
    linkDropdown='a[href="/dropdown"]'
    drpnDropdown='#dropdown'

    VerifyDropdownLinkIsHoverable()
    {
        cy.get(this.linkDropdown).trigger('mouseover').should('exist').and('be.visible').and('have.text','Dropdown')
    }

    VerifyURLOfDropdownPage()
    {
        cy.get(this.linkDropdown).click()
        cy.url().should('include','/dropdown')
        cy.contains('Dropdown List')
        cy.go('back')
    }

    VerifyPlaceHolderText()
    {
        cy.get(this.linkDropdown).click()
        cy.get(this.drpnDropdown)
                            .find('option:disabled')
                            .should('be.visible')
                            .and('have.text', 'Please select an option')
    }

    VerifyOption1IsSelected()
    {
        cy.get(this.linkDropdown).click()
        cy.get(this.drpnDropdown).select('1')
    }

    VerifyOption2IsSelected()
    {
        cy.get(this.linkDropdown).click()
        cy.get(this.drpnDropdown).select('2')
    }

    VerifySelectionViaText()
    {
        cy.get(this.linkDropdown).click()
        cy.get(this.drpnDropdown).select('Option 1').find('option:selected').should('have.text','Option 1')
        cy.get(this.drpnDropdown).select('Option 2').find('option:selected').should('have.text','Option 2')
    }


}

export default Dropdown
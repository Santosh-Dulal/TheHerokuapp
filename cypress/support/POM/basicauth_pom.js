class BasicAuth
{
    linkBasicAuth='a[href^="/basic_auth"]'

    VerifyHoveringOnBasicAuth()
    {
        cy.get(this.linkBasicAuth).trigger('mouseover').should('exist').and('be.visible').and('have.text','Basic Auth')
    }

    VerifyElementsAlertPopup()
    {
        
    }
}
export default BasicAuth
class BasicAuth
{
    linkBasicAuth='a[href^="/basic_auth"]'

    VerifyHoveringOnBasicAuth()
    {
        cy.get(this.linkBasicAuth).trigger('mouseover').should('exist').and('be.visible').and('have.text','Basic Auth')
    }

    VerifyURLOfTheBasicAuth()
    {
        cy.get(this.linkBasicAuth).click()
        cy.url().should('include','/basic_auth')
        //cy.reload()
    }

    VerifyBasicAuth()
    {
        
       cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                    username: 'admin',
                    password: 'admin'
                }
            })

  cy.contains('Congratulations! You must have the proper credentials.')

       
    //cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        
       cy.contains('Basic Auth')
    cy.contains('Congratulations! You must have the proper credentials.')
    }
}
export default BasicAuth
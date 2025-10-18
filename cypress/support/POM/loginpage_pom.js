class LoginPage
{
    linkLogin='a[href="/login"]'
    txtUsername='#username'
    txtPassword='#password'
    btnLogin='.radius[type="submit"]'
    lblBannerMessage='#flash'
    btnLogout='a[href^="/logout"]'

    VerifyHoveringOnLoginLink()
    {
        cy.get(this.linkLogin).trigger('mouseover').should('exist').and('be.visible').and('contain','Form Authentication')
    }

    VerifyURLOfLoginPage()
    {
        cy.get(this.linkLogin).click()
        cy.url().should('include','login')
        cy.contains('Login Page')
        cy.contains('This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.')

    }

    VerifyLoginForVariousScenarios()
    {
        cy.get(this.linkLogin).click()
        cy.fixture('credlogin.json').then((data)=>{
            data.forEach((user)=>{
                if(user.username && user.username.length>0)
                {
                         cy.get(this.txtUsername).clear().type(user.username)
                }
                else
                {
                    cy.get(this.txtUsername).clear()
                }

                if(user.password && user.password.length>0)
                {
                     cy.get(this.txtPassword).clear().type(user.password)
                }
                else
                {
                    cy.get(this.txtPassword).clear()
                }
               
               
                cy.get(this.btnLogin).click()

                if(user.expected==='success')
                {
                    cy.get(this.lblBannerMessage).should('be.visible').and('contain',' You logged into a secure area!')
                    cy.contains('Secure Area')
                    cy.contains('Welcome to the Secure Area. When you are done click logout below.')
                    cy.get(this.btnLogout).should('exist').and('be.visible').and('contain','Logout')
                }
                else
                    {
                       
                       cy.get(this.lblBannerMessage).should('exist').and('be.visible').then(($el)=>{
                            let lblText=$el.text().trim()
                            expect(
                                lblText.includes('Your username is invalid!') ||lblText.includes('Your password is invalid!')
                            ).to.be.true
                       })
                        cy.contains('Login Page')
                }
            })
        })
    }

    VerifyLogout()
    {
        cy.get(this.linkLogin).click()
        cy.fixture('credlogin.json').then((data)=>{

            data.forEach((user)=>{
            if(user.expected==='success')
            {   cy.log(user.expected)
                cy.get(this.txtUsername).clear().type(user.username)
                cy.get(this.txtPassword).clear().type(user.password)
                cy.get(this.btnLogin).click()
                cy.get(this.lblBannerMessage).should('exist').and('be.visible').and('contain','You logged into a secure area!')
                cy.get(this.btnLogout).should('be.visible').click()
                cy.get(this.lblBannerMessage).should('contain', 'You logged out of the secure area!')

            }
            else
            {
                //cy.log('Logout process skipeed, please check your data file.')
            }
            
            })
        
          
            
        })
    }

   


}
export default LoginPage
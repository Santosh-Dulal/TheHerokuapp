class RedirectLink
{
    lnkRedirectLink='a[href^="/redirector"]'
    lnkHere='[href^="redirect"]'
    lnkStatusCode200='a[href^="status_codes/200"]'
    lnkStatusCode301='a[href^="status_codes/301"]'
    lnkStatusCode404='a[href^="status_codes/404"]'
    lnkStatusCode500='a[href^="status_codes/500"]'
    lnkStatusCode='a[href^="/status_codes"]'

   
         statusCodeLinks={
            200:this.lnkStatusCode200,
            301:this.lnkStatusCode301,
            404:this.lnkStatusCode404,
            500:this.lnkStatusCode500
        }
    

    VerifyRedirectLinkIsHoverable()
    {
        cy.get(this.lnkRedirectLink).trigger('mouseover').should('exist').and('be.visible').and('contain','Redirect Link')
    }



    VerifyURLOfRedirectLink()
    {
        cy.get(this.lnkRedirectLink).click()
        cy.url().should('include','/redirector')
        cy.contains('Redirection')
        cy.get(this.lnkHere).trigger('mouseover').should('exist').and('be.visible').and('contain','here')
    }

    ShowElementsOfStatusCodePage()
    {
        cy.url().should('include','/status_codes')
        cy.contains('Status Codes').should('be.visible')
        
        
        Object.entries(this.statusCodeLinks).forEach(([code,selector])=>{
            cy.get(selector).trigger('mouseover').should('exist').and('be.visible').and('contain',code)
        })

    }

    VerifyStatusCodeList()
    {
        cy.get(this.lnkRedirectLink).click()
        cy.get(this.lnkHere).click()
        this.ShowElementsOfStatusCodePage()

    }

    VerifyStatusCode200IsAvailable()
    {
        cy.get(this.lnkRedirectLink).click()
        cy.get(this.lnkHere).click()
        cy.get(this.lnkStatusCode200).click()
        cy.get(this.lnkStatusCode).click()
        this.ShowElementsOfStatusCodePage()
    }

    VerifyStatusCode301IsAvailable()
    {
        cy.get(this.lnkRedirectLink).click()
        cy.get(this.lnkHere).click()
        cy.get(this.lnkStatusCode301).click()
        cy.get(this.lnkStatusCode).click()
        this.ShowElementsOfStatusCodePage()
    }
    VerifyStatusCode404IsAvailable()
    {
        cy.get(this.lnkRedirectLink).click()
        cy.get(this.lnkHere).click()
        cy.get(this.lnkStatusCode404).click()
        cy.get(this.lnkStatusCode).click()
        this.ShowElementsOfStatusCodePage()
    }

    VerifyStatusCode500IsAvailable()
    {
        cy.get(this.lnkRedirectLink).click()
        cy.get(this.lnkHere).click()
        cy.get(this.lnkStatusCode301).click()
        cy.get(this.lnkStatusCode).click()
        this.ShowElementsOfStatusCodePage()
    }

   

    
}

export default RedirectLink
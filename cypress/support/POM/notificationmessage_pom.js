class NotificationMessage
{
    lnkNotificationMessage='a[href^="/notification_message"]'
    lblNotifyBanner="#flash"
    
    VerifyHoveringOnNotificationMessageLink()
    {
        cy.get(this.lnkNotificationMessage).trigger('mouseover').should('exist').and('be.visible').and('contain','Notification Messages')
    }

    VerifyURLOfNotificationMessage()
    {
        cy.get(this.lnkNotificationMessage).click()
        cy.url().should('include','notification_message_rendered')
        cy.contains('Notification Message')
    }

    VerifyNotificationMessageIsPresent()
    {
        cy.get(this.lnkNotificationMessage).click()
        Cypress._.times(20,()=>{
            cy.get(this.lblNotifyBanner,{timeout:5000}).should('be.visible').then(($el)=>{
            let bannerText=$el.text().replace('×','').replace(/\s+/g, ' ').replace(/\n/g, '').trim()
           
            cy.log(bannerText)


             let expectedMessage=[
            "Action successful",
            "Action unsuccesful, please try again"
            
        ]
        expect(expectedMessage).to.include(bannerText)
        })
             cy.get(this.lblNotifyBanner).click()
             cy.wait(300)
        })
        
         
        

       
    }

    VerifyThereIsNoBannerAfterRefresh()
    {
        cy.get(this.lnkNotificationMessage).click()
        cy.get(this.lblNotifyBanner).should('exist').and('be.visible')
        cy.reload()
        cy.get(this.lblNotifyBanner).should('not.exist')
        cy.get(this.lnkNotificationMessage).click()
        cy.reload()
        cy.get(this.lblNotifyBanner).should('not.exist')
    }

}
export default NotificationMessage
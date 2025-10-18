class EntryAdd
{
    lnkEntryAdd='a[href^="/entry_ad"]'
    mdlAd='div#modal'
    lnkClickHere='a#restart-ad'
    lblTitleModal='div.modal-title'
    lblModalBody='div.modal-body>p'
    btnCloseModal='div.modal-footer>p'


    VerifyEntryAddLinkHoaverable()
    {
        cy.get(this.lnkEntryAdd).trigger('mouseover').should('exist').and('be.visible').and('have.text','Entry Ad')
    }

    VerifyEntryAddURLIsValid()
    {
        cy.get(this.lnkEntryAdd).click()
        cy.url().should('include','/entry_ad')
        cy.contains('Entry Ad')
    }
    modalHandle()
    {
        cy.get(this.mdlAd).should('exist').and('be.visible')
        cy.get(this.lblTitleModal).should('exist').and('be.visible').and('contain','This is a modal window')
        cy.get(this.lblModalBody).should('exist').and('be.visible').and('contain',"It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker).")
        cy.get(this.btnCloseModal).should('exist').and('be.visible').and('contain','Close').click()
    }

    VerifyModalPopupIsOpenedOnFirstPageLoad()
    {
        cy.get(this.lnkEntryAdd).click()
        this.modalHandle()

        Cypress._.times(3,()=>{
            cy.get(this.lnkClickHere).click()
            this.modalHandle()
        
        })
        
        
    }

    VerifyModalIsNotSeenAfterClose()
    {
        cy.session(('modal-close'),()=>{
            cy.visit('/')
            cy.get(this.lnkEntryAdd).click()
            this.modalHandle()
        }).then(()=>{
             cy.reload()
            cy.get(this.mdlAd).should('not.exist')
        })
        
       

    }

    
}

export default EntryAdd
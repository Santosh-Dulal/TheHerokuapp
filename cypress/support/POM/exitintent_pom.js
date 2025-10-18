class ExitIntent
{
    lnkExitIntent='a[href^="/exit_intent"]'
    IdModal='div#ouibounce-modal'
    lblModalTitle='div.modal-title'
    lblModalBody='div.modal-body>p'
    btnClose='div.modal-footer>p'

    VerifyExitIntentIsHoverable()
    {
        cy.get(this.lnkExitIntent).trigger('mouseover').should('exist').and('be.visible').and('contain','Exit Intent')
    }

    VerifyURLOfExitIntentPage()
    {
        cy.get(this.lnkExitIntent).click()
        cy.url().should('include','/exit_intent')
        cy.contains('Exit Intent')
    }

    VerifyModalAppearsAfterViewPortOut()
    {
        cy.get(this.lnkExitIntent).click()
        cy.get(this.IdModal).invoke('show')
        cy.document().trigger('mouseleave',{clientY:0})
        cy.get(this.lblModalTitle).should('be.visible').and('contain','This is a modal window')
        cy.get(this.lblModalBody).should('be.visible').and('contain',"It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something).")
        cy.get(this.btnClose).should('be.visible').and('contain','Close').click()
    }



}
export default ExitIntent
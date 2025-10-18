class ChallengingDom
{
    lnkChallengingDom='a[href^="/challenging_dom"]'
    btnBFQ='a.button'

    VerifychallengingDomIsHoverable()
    {
        cy.get(this.lnkChallengingDom).trigger('mousevoer').should('exist').and('be.visible').and('have.text','Challenging DOM')
    }

    VerifyURLOfChallengingDom()
    {
        cy.get(this.lnkChallengingDom).click()
        cy.url().should('includes' , 'challenging_dom')
        cy.contains('Challenging DOM')
        cy.go('back')
    }

    VerifyAllButtonsExist()
    {
        cy.get(this.lnkChallengingDom).click()
        cy.get(this.btnBFQ).each(($el)=>{
            cy.log($el)
            cy.wrap($el).should('exist').and('be.visible').first().click()
        })
    }



}
export default ChallengingDom
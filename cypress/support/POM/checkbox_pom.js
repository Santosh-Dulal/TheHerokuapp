class CheckBox
{
    lnkCheckBox='a[href^="/checkboxes"]'
    chkBoxes='#checkboxes'
    chKCorrectCheckBox='#checkboxes input'

    VerifyHoveringOnCheckBoxes()
    {
        cy.get(this.lnkCheckBox).trigger('mouseover').should('exist').and('be.visible').and('have.text','Checkboxes')
    }

    VerifyURLOfCheckBoxes()
    {
        cy.get(this.lnkCheckBox).click()
        cy.url().should('include','/checkboxes')
        cy.contains('Checkboxes')
        cy.contains(this.chkBoxes,' checkbox 1').should('be.visible')
        cy.contains(this.chkBoxes,' checkbox 2').should('be.visible')
       
        cy.contains(this.chkBoxes,'checkbox 1').should('not.be.checked') // false positive
         cy.contains(this.chkBoxes,'checkbox 2').find('input').should('be.checked')
      
        cy.go('back')
    }

    VerifyCheckUnCheck()
    {
        cy.get(this.lnkCheckBox).click()
        cy.get(this.chKCorrectCheckBox).eq(0).check()
        cy.get(this.chKCorrectCheckBox).eq(1).uncheck()

    }

    VerifyCheckUncheckWithIteration()
    {
        cy.get(this.lnkCheckBox).click()
        cy.get(this.chKCorrectCheckBox).each(($el) => {
        cy.wrap($el).then(($checkbox) => {
        if ($checkbox.is(':checked')) {
            cy.wrap($checkbox).uncheck() // uncheck if already checked
        }       else {
            cy.wrap($checkbox).check()   // check if unchecked
        }
     })
    })

    }
}
export default CheckBox
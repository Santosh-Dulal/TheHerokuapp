class AddRemoveElements
{
    lnkAddRemoveElements='a[href^="/add_remove_elements"]'
    btnAddElement='.example >button'
    btnDelete='div#elements>.added-manually'

    VerifyAddRemoveLinkExists()
    {
        cy.get(this.lnkAddRemoveElements).trigger('mouserover').should('exist').and('be.visible')
    }

    VerifyDifferentElementsOnAddRemovePage()
    {
        cy.get(this.lnkAddRemoveElements).click()
        cy.url().should('include','add_remove_elements/')
        cy.contains('Add/Remove Elements')
        cy.get(this.btnAddElement).should('exist').and('be.visible')
    }

    VerifyDoubleClickOnAddElementButton()
    {
        cy.get(this.lnkAddRemoveElements).click()
        cy.get(this.btnAddElement).dblclick() 
        cy.get(this.btnDelete).should('have.length',2)
        cy.go('back')


    }

    VerifyHundredButtonCanBeAdded()
    {
        cy.get(this.lnkAddRemoveElements).click()
         
        Cypress._.times(100,()=>{
             cy.get(this.btnAddElement).first().click()

        })
        cy.get(this.btnDelete).should('have.length',100)

        Cypress._.times(100,()=>{
            cy.get(this.btnDelete).first().click()
        })
        
         
         cy.get(this.btnDelete).should('have.length',0)
    }



}

export default AddRemoveElements
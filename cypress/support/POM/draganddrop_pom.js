class DragNDrop
{
    lnkDragAndDrop='a[href^="/drag_and_drop"]'
    IdIntialPostion='#column-a'
    IdEndPosition='#column-b'

    VerifyDragAndDropLinkIsHoverable()
    {
        cy.get(this.lnkDragAndDrop).trigger('mouseover').should('exist').and('be.visible').and('have.text','Drag and Drop')
    }

    VerifyURLOfDragAndDrop()
    {
        cy.get(this.lnkDragAndDrop).click()
        cy.url().should('include','/drag_and_drop')
        cy.contains('Drag and Drop')
    }

    VerifyDragAndDropBToA()
    {
        cy.get(this.lnkDragAndDrop).click()
        cy.get(this.IdIntialPostion).should('exist')
        cy.get(this.IdEndPosition).should('exist')

        cy.get(this.IdIntialPostion).drag(this.IdEndPosition)
        
        cy.get(this.IdEndPosition).should('have.text','B')
        cy.get(this.IdIntialPostion).should('have.text','A')
                                


    }

}
export default DragNDrop
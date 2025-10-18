class ContextMenu
{
    lnkContextMenu='a[href^="/context_menu"]'
    rightClickBox='div#hot-spot'

    VerifyContextMenuHoverable()
    {
        cy.get(this.lnkContextMenu).trigger('mouserover').should('exist').and('be.visible').and('have.text','Context Menu').click()
        cy.go('back')

    }
    VerifyURLOfContextMenu()
    {
        cy.get(this.lnkContextMenu).click()
        cy.url().should('include','/context_menu')
        cy.contains('Context Menu')
    }

    VerifyRightClickActionOnContextMenu()
    {
        cy.get(this.lnkContextMenu).click()
        cy.get(this.rightClickBox).rightclick()
        cy.on('window:alert',stub=>{
            expect(stub).to.equal('You selected a context menu')
        })
    }

}
export default ContextMenu
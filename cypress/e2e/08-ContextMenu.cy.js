import ContextMenu from "../support/POM/contextmenu_pom"

describe('Context Menu', () => {

    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    let cm = new ContextMenu()
    it('Verify that the content menu link is clickable and hoaverable', () => {
        cm.VerifyContextMenuHoverable()
    })

    it('Verify that the url of the context menu exists',()=>{
        cm.VerifyURLOfContextMenu()
    })

    it.only('Verify that the context menu is working', () => {
      cm.VerifyRightClickActionOnContextMenu()  
    })
})
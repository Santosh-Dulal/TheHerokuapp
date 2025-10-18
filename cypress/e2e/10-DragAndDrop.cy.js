import DragNDrop from "../support/POM/draganddrop_pom";

describe('Drag and Drop', () => {

    beforeEach(() => {
        
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    let dd = new DragNDrop()

    it('Verify that link of Drag and Drop is hoverable', () => {
        dd.VerifyDragAndDropLinkIsHoverable()
    })

    it('Verify that the url of Drag and Drop page is valid',()=>{
        dd.VerifyURLOfDragAndDrop()
    })

    it.only('Verify that the drag and drop can be from B to A', () => {
       dd.VerifyDragAndDropBToA() 
    })
})
import AddRemoveElements from "../support/POM/addremoveelements_pom";

describe('Add Remove Elements', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })
    let ade = new AddRemoveElements()
    it('Verify add remove links exists and hoverable', () => {
        ade.VerifyAddRemoveLinkExists()
    })

    it('Verify that there are different elements in add remove elements page', () => {
       ade.VerifyDifferentElementsOnAddRemovePage()  
    })

    it('Verify that double clicks can be done',()=>{
        ade.VerifyDoubleClickOnAddElementButton()
    })

    it('Verify that the hundred buttons can be added', () => {
      ade.VerifyHundredButtonCanBeAdded()  
    })
})
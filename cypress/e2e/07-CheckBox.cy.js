import CheckBox from "../support/POM/checkbox_pom"

describe('CheckBoxes', () => {
    beforeEach(() => {
         cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
       cy.visit('/') 
    })

    let cb = new CheckBox()
    it('Verify that the hovering on checkboxes link can be done', () => {
        cb.VerifyHoveringOnCheckBoxes()
    })

    it('Verify that the url of checkboxes page', () => {
        cb.VerifyURLOfCheckBoxes()
    })

    it('Verify check, uncheck operation in checkboxs',()=>{
        cb.VerifyCheckUnCheck()
    })

    it('Verify that check, uncheck opertion via each iteration', () => {
        cb.VerifyCheckUncheckWithIteration()
    })
})
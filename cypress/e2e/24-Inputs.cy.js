import Inputs from "../support/POM/inputs_pom"

describe('Inputs', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    const inp = new Inputs()
    it('Verify that the link is hoverable', () => {
        inp.VerifyInputsLinkIsHoverable()
    })

    it('Verify that the url of the page is valid', () => {
        inp.VerifyURLOfInputsPage()
    })

    it('Verify that number box accepts only numbers as a input', () => {
        inp.VerifyOnlyNumberIsTakenAsInput()
    })
})
import KeyPresses from "../support/POM/keypresses_pom"

describe('Key presses', () => {
    beforeEach(() => {
         cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    let ki = new KeyPresses()
    it('Verify Hovering', () => {
        ki.VerifyHoveringOnKeyPresses()
    })

    it('Verify url of the page key presses', () => {
        ki.VerifyURLOfKeyPresses()
    })

    it('Verify that the key inputs can be done text and results can be verified', () => {
        cy.fixture('keypresses.json').then((data)=>{
           cy.wrap(data.keys).each((key)=>{
            ki.VerifyKeyPressesInTheTextBox(key)
           })
        })
    })
})
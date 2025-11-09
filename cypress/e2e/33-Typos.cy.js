import Typos from "../support/POM/typos_pom"

describe('Typos', () => {

    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    let ty = new Typos()
    it('Verify typos link is hoverable', () => {
        ty.VerifyTyposLinkIsHoverable()
    })

    it('Verify typos page url is valid', () => {
      ty.VerifyURLOfTyposPageIsValid()  
    })

    it('Verify there are no typos in the paragraph',()=>{
        ty.VerifyTyosInTheTexts()
    })
})
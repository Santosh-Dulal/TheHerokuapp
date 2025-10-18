import DisapperingElements from "../support/POM/disappearingelements_pom"

describe('Disappearing Elements', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    let de = new DisapperingElements()
    it('Verify that the disappearing elment is hoverable', () => {
        de.VerifyDisappearingElementIsHoverableandExist()
    })

    it('Verify that the url of the disppearing elemnts exist', () => {
      de.VerifyURLOfDisappearingElements()  
    })

    it.skip('Verify that the gallery dispears/appears in each page reaload',{retries:2},()=>{
        de.VerifyDisappearingElementsInPageReload()
    })

    it('Verify that the Home menu exist', () => {
        de.VerifyHomeMenu()
    })

    it('Verify that the About menu exist', () => {
      de.VerifyAboutMenu()  
    })
    
    it('Verify that the contact us menu exist', () => {
      de.VerifyContactUsMenu()  
    })

    it('Verify that the portfolil menu exist', () => {
      de.VerifyPortfolioMenu()  
    })
})
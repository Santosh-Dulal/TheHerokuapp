import ShadowDom from "../support/POM/shadowdom_pom"

describe('Shadow Dom', () => {

    beforeEach(() => {
         cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
         cy.visit('/')
    })

    let sd= new ShadowDom()
    it('Verify hovering on the shadow dom link', () => {
        sd.VerifyHoveringOnShadowDom()
    })

    it('Verify url of the shadow dom page', () => {
        sd.VerifyURLOfShadowDom()
    })

    it('Verify shadow dom text visibilty', () => {
      sd.VerifyTextsInShadowDom()  
    })
})
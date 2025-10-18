import DynamicContent from "../support/POM/dynamiccontent_pom";

describe('Dynamic Content', () => {

    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')  
    })
    let dc = new DynamicContent()
    it('Verify that the link is hoverable', () => {
        dc.VerifyDynamicContentLinkHoverable()
    })

    it('Verify that the url of the page is valid',()=>{
        dc.VerifyURLOfDyamicContent()
    })

    it('Verify that the dynamic contents are loading on each page refresh',()=>{
        dc.VerifyDynamicImageInPageLoad()
    })

     it('Verify that the dynamic texts are non empty on first page load',()=>{
        dc.VerifyDynamicTextInPageLoadIsNotEmpty()
    })

     it.only('Verify that the dynamic texts are loading on each page refresh',()=>{
        dc.VerifyDynamicTextIsSeenInEachPageLoad()
    })
})
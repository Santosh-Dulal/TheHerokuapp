import InfiniteScroll from "../support/POM/infinitescroll_pom"

describe('Infinite Scroll', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    let is = new InfiniteScroll()
    it('Verify hovering', () => {
        is.VerifyInfiniteScrollLinkIsHoverable()
    })

    it('Verify url of the page', () => {
        is.VerifyURLOfInfiniteScroll()
    })

    it.only('Verify Inifinte Scroll', () => {
      is.VerifyThereIsSomeTextInfiniteScroll()  
    })
})
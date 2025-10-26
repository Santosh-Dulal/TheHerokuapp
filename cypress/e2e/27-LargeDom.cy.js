import LargeDom from "../support/POM/largedom_pom"

describe('Large And Deep Dom', () => {

    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    let ldd= new LargeDom()
    it('Verify hovering', () => {
        ldd.VerifyHoveringOnLargeDeepDom()
    })

    it('Verify URL', () => {
        ldd.VerifyURLOfLargeDeepDomPage()
    })

    it('Verify first and last elements of siblings',()=>{
        ldd.VerifyFirstAndLastElementsOfSiblings()
    })

    it('Verify first and last element of table', () => {
      ldd.VerifyFirstAndLastElementsOfTable()
    })

    it.skip('Verify total count in siblings',()=>{
        ldd.VerifyTotalCountInSiblings()
    })

    it('Verify scrolling in the siblings', () => {
      ldd.VerifySiblingsElementsSeenInScrolling()  
    })

    it('Verify scrolling in the table',()=>{
        ldd.VerifyDataIsSeenInScrollingTable()
    })

    it.only('Verify responsiveness in different devices', () => {
        ldd.VerifyResponsivnessTable()
    })
})
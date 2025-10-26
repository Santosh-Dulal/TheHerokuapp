class InfiniteScroll
{
    lnkIS='a[href^="/infinite_scroll"]'
    lblInfiniteText='div.jscroll-added'

    VerifyInfiniteScrollLinkIsHoverable()
    {
        cy.get(this.lnkIS).trigger('mouseover').should('exist').and('be.visible').and('contain','Infinite Scroll')
    }

    VerifyURLOfInfiniteScroll()
    {
        cy.get(this.lnkIS).click()
        cy.url().should('include','/infinite_scroll')
        cy.contains('Infinite Scroll')
    }

    VerifyThereIsSomeTextInfiniteScroll()
    {
        cy.get(this.lnkIS).click()
        const scrollSteps = [200, 500, 1000, 1500, 2000,3000,5000,6000,7000,10000000]

        scrollSteps.forEach((position) => {
        cy.scrollTo(0, position)
        cy.wait(500)
    })

    // Check if at least one text block is visible (adjust selector as needed)
    cy.get(this.lblInfiniteText).should('have.length.greaterThan', 0)

    }
}
export default InfiniteScroll
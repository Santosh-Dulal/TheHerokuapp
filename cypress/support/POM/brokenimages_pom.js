class BrokenImages
{
    lnkBrokenImages='a[href^="/broken_images"]'
    ImgImages='.example>img'

    VerifyHoveringOnBrokenImages()
    {
        cy.get(this.lnkBrokenImages).should('exist').and('be.visible').and('have.text','Broken Images')
    }

    VerifyURLOfBrokenImages()
    {
        cy.get(this.lnkBrokenImages).click()
        cy.contains('Broken Images')
        cy.url().should('include','/broken_images')
    }

    VerifyBrokenImageIsNotPresent()
    {
        cy.get(this.lnkBrokenImages).click()
        cy.get(this.ImgImages).each(($el, index, $lists)=>{
            cy.wrap($el).should('be.visible')
                        .and(($img)=>{
                            expect(
                                $img[0].naturalWidth,
                                `Image Src:${$img[0].src}`
                            ).to.be.greaterThan(0)
                        })
        })
    }

}
export default BrokenImages
class ShadowDom
{
    lnkShadowDom='a[href^="/shadowdom"]'
    lblText1='span[slot="my-text"]'
    lblText2='ul[slot="my-text"]>li:nth-child(1)'
    myPara='my-paragraph'


    VerifyHoveringOnShadowDom()
    {
        cy.get(this.lnkShadowDom).trigger('mouseover').should('exist').and('be.visible').and('contain','Shadow DOM')
    }

    VerifyURLOfShadowDom()
    {
        cy.get(this.lnkShadowDom).click()
        cy.url().should('include','/shadowdom')
        cy.contains('h1','Simple template')

    }

    VerifyTextsInShadowDom()
    {
        cy.get(this.lnkShadowDom).click()
        cy.get(this.lblText1).should('contain',"Let's have some different text!")
        cy.get('my-paragraph > ul[slot="my-text"] li')
        .should('have.length', 2)
        .then((items) => {
                            expect(items[0]).to.have.text("Let's have some different text!")
                            expect(items[1]).to.have.text("In a list!")
                        })
    }

}
export default ShadowDom
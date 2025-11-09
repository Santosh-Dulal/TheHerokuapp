class Typos
{

    lnkTypos='a[href^="/typos"]'
    lblTexts='div>.example>p'
VerifyTyposLinkIsHoverable()
{
    cy.get(this.lnkTypos).trigger('mouseover').should('exist').and('be.visible').and('contain','Typos')
}

VerifyURLOfTyposPageIsValid()
{
    cy.get(this.lnkTypos).click()
    cy.url().should('include','/typos')
    cy.contains('Typos').should('exist')
}

VerifyTyosInTheTexts()
{
      cy.get(this.lnkTypos).click()
     Cypress._.times(100,()=>{
      cy.reload()
      
   cy.get(this.lblTexts).each(($el)=>{
    let par=$el.text().trim()
    cy.log( par)
   const allowedTexts = [
    "This example demonstrates a typo being introduced. It does it randomly on each page load.",
    "Sometimes you'll see a typo, other times you won't.",
    "Sometimes you'll see a typo, other times you won,t."
  ]

   
   expect(
      allowedTexts,
      `Unexpected text found: "${par}"`
    ).to.include(par)
  })
  })
   
}

   

}




export default  Typos
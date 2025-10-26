class Hovers
{

    lnkHovers='a[href^="/hovers"]'
    ImgFigure='.figure>img'
    lblFigureCaption='.figcaption'
    lnkViewProfile='a[href*="/users/"]'

    VerifyHoverslinkHoverable()
    {
        cy.get(this.lnkHovers).trigger('mouseover').should('exist').and('be.visible').and('contain','Hovers')
    }

    VerifyURLOfHoversPage()
    {
        cy.get(this.lnkHovers).click()
        cy.url().should('include','/hovers')
        cy.contains('Hovers')
    }

    VerifyEachImageisHoverable()
    {
        cy.get(this.lnkHovers).click()
        cy.get('.figure').each(($figure) => {
        cy.wrap($figure).realHover().trigger('mouseover');
        cy.wait(2000);

  cy.wrap($figure).find(this.lblFigureCaption).should('be.visible').within(() => {
    cy.get('h5').invoke('text').then((userName) => {
      cy.get('a').invoke('attr', 'href').then((profileHref) => {
        cy.log(`User: ${userName.trim()}, Profile link: ${profileHref}`);
        expect(userName).to.match(/^name: user\d+$/);
        expect(profileHref).to.match(/\/users\/\d+$/);
        //cy.get(profileHref).click()
        //cy.go('back')
       
      })
      
    })
    
  })
   
})

}



}
export default Hovers
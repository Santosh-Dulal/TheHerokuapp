class DisapperingElements
{
    lnkDisappearingElement='a[href^="/disappearing_elements"]'
    lnkGallery='a[href^="/gallery/"]'
    lnkHome='a[href^="/"]'
    lnkAbout='a[href^="/about/"]'
    lnkContact='a[href^="/contact-us/"]'
    lnkPortfolio='a[href^="/portfolio/"]'

    VerifyDisappearingElementIsHoverableandExist()
    {
        cy.get(this.lnkDisappearingElement).trigger('mouseover').should('exist').and('be.visible').and('have.text','Disappearing Elements')

    }
    VerifyURLOfDisappearingElements()
    {
        cy.get(this.lnkDisappearingElement).click()
        cy.url().should('include','/disappearing_elements')
        cy.contains('h3','Disappearing Elements')
        cy.go('back')
    }
    VerifyDisappearingElementsInPageReload()
    {
        cy.get(this.lnkDisappearingElement).click()
        cy.get(this.lnkGallery).trigger('mouseover').should('exist').and('be.visible').and('have.text','Gallery')
        cy.reload()
        cy.get(this.lnkGallery).should('not.exist')
        cy.reload()
        cy.get(this.lnkGallery).should('exist').and('be.visible')

    }

    VerifyHomeMenu()
    {
        cy.get(this.lnkDisappearingElement).click()
        cy.get(this.lnkHome).click()
        cy.go('forward')
        

    }
    VerifyAboutMenu()
    {
        cy.get(this.lnkDisappearingElement).click()
        cy.get(this.lnkAbout).should('exist').and('be.visilbe').click()
        cy.contains('Not found')
    }

    VerifyContactUsMenu()
    {
        cy.get(this.lnkDisappearingElement).click()
        cy.get(this.lnkContact).should('exist').and('be.visible').click()
        cy.contains('Not found')
    }

    VerifyPortfolioMenu()
    {
        cy.get(this.lnkDisappearingElement).click()
        cy.get(this.lnkPortfolio).should('exist').and('be.visible').click()
        cy.contains('Not found')
    }
}
export default DisapperingElements
class HorizontalSlider
{
    lnkHorizontalSlider='a[href^="/horizontal_slider"]'
    clsSlider='.sliderContainer'
    lblRange='span#range'

    VerifyHorizontalSliderIsHoverable()
    {
        cy.get(this.lnkHorizontalSlider).trigger('mouseover').should('exist').and('be.visible').and('contain','Horizontal Slider')
    }

    VerifyURLOfHorizontalSliderPage()
    {
        cy.get(this.lnkHorizontalSlider).click()
        cy.url().should('include','/horizontal_slider')
        cy.contains('Horizontal Slider')
    }

    VerifySlidingWithMouse()
    {
        cy.get(this.lnkHorizontalSlider).click()
    }
}
export default HorizontalSlider
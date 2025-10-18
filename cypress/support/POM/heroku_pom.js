class HerokuPOM
{

    linkAbTest='a[href^="/abtest"]'
    

    VerifyAbTesting()
    {
        cy.get(this.linkAbTest).click()
        cy.url().should('include','abtest')
        let text=cy.contains('A/B Test Control')
        if(text!=='A/B Test Control')
        {
            cy.reload()
        }
        cy.contains('Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).')
        cy.go('back')
        cy.url().should('eq','https://the-internet.herokuapp.com/')
    }



}
export default HerokuPOM
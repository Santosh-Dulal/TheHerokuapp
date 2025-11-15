class JsAlerts
{
    lnkJsAlertMain='a[href^="/javascript_alerts"]'
    btnAlerts='.example li:nth-child(1)'
    lnkJsConfirm='.example li:nth-child(2)'
    lnkJsPrompt='.example li:nth-child(3)'
    lblResult='p#result'
    

    VerifyJsAlertLinkIsHoverable()
    {
        cy.get(this.lnkJsAlertMain).trigger('mouseover').should('exist').and('be.visible').and('contain','JavaScript Alerts')
    }

    VerifyURLOfJsAlertPage()
    {
        cy.get(this.lnkJsAlertMain).click()
        cy.url().should('include','/javascript_alerts')
        cy.contains('JavaScript Alerts')
    }

    VerifyJsAlertText()
    {
        cy.get(this.lnkJsAlertMain).click()
       
        cy.on('window:alert',(text)=>{
            expect(text).to.equal('I am a JS Alert')
        })
         //cy.get(this.btnAlerts).click({force:true})
          cy.contains('Click for JS Alert').click()
          cy.get(this.lblResult).should('have.text','You successfully clicked an alert').and('be.visible')
    }

    VerifyJSConfirm()
    {
        cy.get(this.lnkJsAlertMain).click()
        cy.on('window:confirm',(texts)=>{
            expect(texts).to.equal('I am a JS Confirm')
        })
        cy.contains('Click for JS Confirm').click()
        cy.get(this.lblResult).should('have.text','You clicked: Ok').and('be.visible')
    }

    VerifyJSPrompt()
    {
        cy.get(this.lnkJsAlertMain).click()
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('This is prompt alert')
        })

        cy.contains('Click for JS Prompt').click()
        cy.get(this.lblResult).should('contain.text','This is prompt alert').and('be.visible')
    }




}
export default JsAlerts
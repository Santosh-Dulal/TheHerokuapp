class KeyPresses
{
    lnkKeyPresses='a[href^="/key_presses"]'
    txtPresses='#target'
    lblResult='#result'

    VerifyHoveringOnKeyPresses()
    {
        cy.get(this.lnkKeyPresses).trigger('mouseover').should('exist').and('be.visible').and('contain','Key Presses')
    }

    VerifyURLOfKeyPresses()
    {
        cy.get(this.lnkKeyPresses).click()
        cy.url().should('include','/key_presses')
        cy.contains('Key Presses')
    }

    VerifyKeyPressesInTheTextBox(input)
    {
        cy.visit('/')
        cy.get(this.lnkKeyPresses).click()
        cy.get(this.txtPresses).clear().type(input)
        //cy.wait(5000)
       // cy.get(this.lblResult).should('contain',{input})


    }
}

export default KeyPresses
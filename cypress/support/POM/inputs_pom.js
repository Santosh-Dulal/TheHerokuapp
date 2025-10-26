class Inputs
{
    lnkInputs='a[href^="/inputs"]'
    txtNumber='.example >input[type="number"]'

    VerifyInputsLinkIsHoverable()
    {
        cy.get(this.lnkInputs).trigger('mouseover').should('exist').and('be.visible').and('contain','Inputs')
    }

    VerifyURLOfInputsPage()
    {
        cy.get(this.lnkInputs).click()
        cy.url().should('include','/inputs')
        cy.contains('Inputs')
    }

    VerifyOnlyNumberIsTakenAsInput()
    {
        function isValidNumber(value) {
            return Number.isFinite(Number(value));
        }   
        cy.get(this.lnkInputs).click()

        cy.fixture('inputs.json').then((data)=>{
         
            data.nums.forEach((num)=>{
                if(isValidNumber(num))
                {
                   
                    cy.get(this.txtNumber).clear().type(num)
                }
                else
                {
                    cy.log("Inputs not accepted by number box :"+num)
                }
            })
        })
    }
}

export default Inputs
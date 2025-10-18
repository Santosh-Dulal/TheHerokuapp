import Dropdown from "../support/POM/dropdown_pom"

describe('Dropdown', () => {

    beforeEach(()=>{

        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    let dd = new Dropdown()
    it('Verify dropdown link is hoverable', () => {
        dd.VerifyDropdownLinkIsHoverable()
    })

    it('Verify dropdown page"s url is valid', () => {
      dd.VerifyURLOfDropdownPage()  
    })

    it('Verify that the default placehoder text can be selected in the dropdown',()=>{
        dd.VerifyPlaceHolderText()
    })

    it('Verify that the option1 can be selected',()=>{
        dd.VerifyOption1IsSelected()
    })

    it('Verify that the option2 can be selected',()=>{
        dd.VerifyOption2IsSelected()
    })

    it('Verify that the option can be selected via text',()=>{
        dd.VerifySelectionViaText()
    })
})
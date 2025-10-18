import LoginPage from "../support/POM/loginpage_pom"

describe('Form Authentication', () => {
    beforeEach(() => {
         cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    const lp = new LoginPage()
    it('Verify that the form authentication link is hoverable', () => {
        lp.VerifyHoveringOnLoginLink()
    })

    it('Verify that the login page url is valid', () => {
        lp.VerifyURLOfLoginPage()
    })

    it('Verify that the login works as expect with ddt',()=>{
        lp.VerifyLoginForVariousScenarios()
    })

    it.only('Verify that the logout works as expect',()=>{
        lp.VerifyLogout()
    })
})

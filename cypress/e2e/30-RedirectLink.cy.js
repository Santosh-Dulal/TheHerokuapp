import RedirectLink from "../support/POM/redirectlink_pom"

describe('Redirection Link', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })
    let rl = new RedirectLink()
    it('Verify hovering', () => {
        rl.VerifyRedirectLinkIsHoverable()
    })

    it('Verify URL', () => {
        rl.VerifyURLOfRedirectLink()
    })

    it('Verify status code list', () => {
      rl.VerifyStatusCodeList()  
    })

    it('Verify status code 200',()=>{
        rl.VerifyStatusCode200IsAvailable()
    })
    it('Verify status code 301',()=>{
        rl.VerifyStatusCode301IsAvailable()
    })
    it('Verify status code 404',()=>{
        rl.VerifyStatusCode404IsAvailable()
    })
    it('Verify status code 505',()=>{
        rl.VerifyStatusCode500IsAvailable()
    })
})
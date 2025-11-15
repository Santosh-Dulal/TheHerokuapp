import SecureFileDownload from "../support/POM/securefiledownload_pom"

describe('Secure File Download', () => {
    beforeEach(() => {
         cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
         cy.visit('/')
    })

    let sfd=new SecureFileDownload()
    it('Verify that the file can be download securely', () => {
        sfd.VerifyFileCanBeDownloadedSecurly()
    })
})
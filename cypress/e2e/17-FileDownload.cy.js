import FileDown from "../support/POM/filedown_pom"

describe('File Downloads', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    let fd= new FileDown()
    it('Verify that the file download link is hoverable', () => {
        fd.VerifyFileDownloadLinkIsHoverable()
    })

    it('Verify that url of the file download page exists', () => {
      fd.VerifyURLOfFiledownLoadPage()  
    })

    it('Verify that the list of the file can be viewed',()=>{
        fd.VerifyListsOfFilesToBeDownloaded()
    })

    it('Verify that the files can be download',()=>{
        fd.VerifyFileDownloadWorks()
    })
})
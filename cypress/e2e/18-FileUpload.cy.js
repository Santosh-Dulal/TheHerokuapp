import FileUpload from "../support/POM/fileupload_pom"

describe('File uploads', () => {
   
    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
         cy.visit('/')
    })
    let fu=new FileUpload()
    it('Verify that the hovering can be done on fileupload link', () => {
        fu.VerifyFileUploadLinkIsHoverable()
    })

    it('Verify that the url of the file upload page',()=>{
        fu.VerifyURLOfFileUploadPageExists()
    })

    it.only('Verify that the upload can be done via choose and upload button',()=>{
        fu.VerifyFileUploadViaChooseButton()
    })
})
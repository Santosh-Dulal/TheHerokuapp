class FileUpload
{
    lnkFileUpload='a[href^="/upload"]'
    btnChooseFile='#file-upload'
    btnUpload='#file-submit'
    dragNDropUpload='.dz-clickable#drag-drop-upload'
    lblFilename=''

    VerifyFileUploadLinkIsHoverable()
    {
        cy.get(this.lnkFileUpload).trigger('mouseover').should('exist').and('be.visible').and('contain','File Upload')
    }

    VerifyURLOfFileUploadPageExists()
    {
        cy.get(this.lnkFileUpload).click()
        cy.url().should('include','/upload')
        cy.contains('File Uploader')
    }

    //VerifyFileUploadViaChooseButton()
    //{
        //cy.get(this.lnkFileUpload).click()
        //cy.url().should('include', '/upload');
        //cy.fixture('filelink.json').then((data)=>{
            
               // data.filePaths.forEach((filepath)=>{
                    //let fileName=filepath.split('/').pop()
                    ///cy.log(fileName)
                    // cy.get(this.btnChooseFile).should('exist')
                   // cy.get(this.btnChooseFile,{force:true}).should('be.visible').attachFile(fileName,{force:true})
                   // cy.get(this.btnUpload).should('exist')
                    //cy.get(this.btnUpload,{force:true}).should('be.visible').click()
                   

              // })
          
       //})
   // }
   VerifyFileUploadViaChooseButton() {
   
    cy.fixture('filelink.json').then((data) => {
        cy.wrap(data.filePaths).each((filepath) => {
            const fileName = filepath.split('/').pop();
            cy.log(`Uploading file: ${fileName}`);

            
                cy.visit('https://the-internet.herokuapp.com/upload');
                cy.url().should('include', '/upload');
                cy.get('body').then($body => {
            if ($body.text().includes('Welcome to the-internet')) {
            cy.log('⚠️ Redirected to homepage. Re-visiting upload page.');
            cy.visit('https://the-internet.herokuapp.com/upload');
            cy.url().should('include', '/upload');
            }
      })

            
            cy.get(this.btnChooseFile, { timeout: 10000 }).should('exist').and('be.visible');
            cy.get(this.btnChooseFile, { force: true }).attachFile(fileName, { force: true });

            cy.get(this.btnUpload, { timeout: 10000 }).should('exist').and('be.visible');
            cy.get(this.btnUpload, { force: true }).click();

          
        })
    })
}
VerifyDragAndDropFiles()
{
    cy.get(this.lnkFileUpload).click()
    cy.fixture('filelink.json').then((data)=>{
        
    })
}
    
}
export default FileUpload
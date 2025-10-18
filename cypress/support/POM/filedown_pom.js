class FileDown
{
    lnkFileDown='li>a[href="/download"]'
    lnkFiles='.example>a[href*="download/"]'

    VerifyFileDownloadLinkIsHoverable()
    {
        cy.get(this.lnkFileDown).trigger('mouseover').should('exist').and('be.visible').and('contain','File Download')
    }

    VerifyURLOfFiledownLoadPage()
    {
        cy.get(this.lnkFileDown).click()
        cy.url().should('include','/download')
        cy.contains('File Downloader')
    }

    VerifyListsOfFilesToBeDownloaded()
    {
        cy.get(this.lnkFileDown).click()
        cy.log(FileDown)
        cy.get(this.lnkFiles).each(($el)=>{
            let a=cy.wrap($el.text())
            cy.log(a)
        })
    }

    VerifyFileDownloadWorks()
    {
        cy.get(this.lnkFileDown).click()
        const baseUrl=Cypress.config('baseUrl')
        const downloadFolder='cypress/downloads'

        cy.fixture('fileData').then(({fileNames})=>{
            fileNames.forEach((fileName)=>{
                let fullUrl=`${baseUrl.replace(/\/$/, '')}/download/${fileName}`
                cy.log(fullUrl)
                cy.downloadFile(fullUrl,downloadFolder,fileName)
                cy.readFile(`${downloadFolder}/${fileName}`).should('exist')
            })
        })


    }

}
export default FileDown
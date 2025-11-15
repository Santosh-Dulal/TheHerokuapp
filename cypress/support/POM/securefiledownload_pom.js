class SecureFileDownload
{
    lnkSecureFileDownload='a[href^="/download_secure"]'
    lnkFile='div.example a[href^="download_secure/"]'

    loginToFile()
    {
        cy.visit('https://the-internet.herokuapp.com/download_secure',{
            auth:{
                username:'admin',
                password:'admin'
            }
        })
        cy.contains('Secure File Downloader')
    }

    VerifyFileCanBeDownloadedSecurly()
    {
        this.loginToFile()
        const baseUrl=Cypress.config('baseUrl')
        const downloadFolder='cypress/downloads'
        cy.get(this.lnkFile).each(($el)=>{
            cy.log($el.text().trim())
             cy.fixture('SFileData').then(({fileNames})=>{
            fileNames.forEach((fileName)=>{
                let fullUrl=`${baseUrl.replace(/\/$/, '')}/download/${fileName}`
                cy.log(fullUrl)
                cy.downloadFile(fullUrl,downloadFolder,fileName)
                cy.readFile(`${downloadFolder}/${fileName}`).should('exist')
            })
        })
        })

    }

}

export default SecureFileDownload
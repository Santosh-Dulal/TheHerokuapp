import EntryAdd from "../support/POM/entryad_pom"

describe('Entry Ad', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    let ea= new EntryAdd()
    it('Verify Entry Ad link is hoaverable', () => {
        ea.VerifyEntryAddLinkHoaverable()
    })

    it('Verify url of the entry ad page is valid', () => {
        ea.VerifyEntryAddURLIsValid()
    })

    it('Verify Entry Ad Modal is opened and its contents are valid',()=>{
         ea.VerifyModalPopupIsOpenedOnFirstPageLoad()
    })

    it.only('Verify that the modal is not open after close and subsequent reload',()=>{
        ea.VerifyModalIsNotSeenAfterClose()
    })

   

       
    
})
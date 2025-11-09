import SortableDataTables from "../support/POM/sortabledatatable_pom"

describe('Sortable Data tables', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
        
    })
    let sdt= new SortableDataTables()
    it('Verify hovering', () => {
        sdt.VerifyHoveringOnSortableDataTableLink()
    })

    it('Verify url of the page', () => {
      sdt.VerifyURLOfSortableDataTables()  
    })

    it('Verify heading of first table without using classes and is', () => {
      sdt.VerifyHeadingOfFirstTableWithoutClassID()
    })

    it('Verify firstname of the first table', () => {
      sdt.VerifyFirstNamesOfFirstTable()
    })

    it('Verify lastname of the first table', () => {
      sdt.VerifyLastNamesOfFirstTable()
    })

    it('Verify emails of the first table', () => {
      sdt.VerifyEmailsOfFirstTable()
    })

    it('Verify due is in $ and is in two dec places',()=>{
      sdt.VerifyDueHasDollarSignAndTwoDecPlaces()
    })

    it('Verify website url is in the correct format', () => {
      sdt.VerifyWebSiteOfFirstTable()
    })

    it.only('Verify that sorting on last name can be done', () => {
      sdt.VerifSortingLastFirstTable()
    })
})
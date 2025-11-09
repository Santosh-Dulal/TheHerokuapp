class SortableDataTables
{
    lnkSortableDataTable='a[href^="/tables"]'
    lblTableHeading='table'
    lblTableEachHeading='thead>tr>th'
    dataCommon='tbody>tr>td'
    dataFirstName='tbody>tr>td:nth-child(1)'
    dataEmails='tbody>tr>td:nth-child(3)'
    dataDue='tbody>tr>td:nth-child(4)'
    dataWebSite=''

    

    VerifyHoveringOnSortableDataTableLink()
    {
        cy.get(this.lnkSortableDataTable).trigger('mouseover').should('exist').and('be.visible').and('contain','Sortable Data Tables')
    }

    VerifyURLOfSortableDataTables()
    {
        cy.get(this.lnkSortableDataTable).click()
        cy.url().should('include','/tables')
        cy.contains('h3','Data Tables')
    }

    VerifyHeadingOfFirstTableWithoutClassID()
    {
        cy.get(this.lnkSortableDataTable).click()
        cy.get(this.lblTableHeading).first().find(this.lblTableEachHeading).each(($el,index,$lists)=>{
         let expectedHeaders=['Last Name','First Name','Email','Due','Web Site','Action']
         expect($el.text().trim()).to.equal(expectedHeaders[index])
      
      })

    }

    VerifyFirstNamesOfFirstTable()
    {
         cy.get(this.lnkSortableDataTable).click()
         cy.get(this.lblTableHeading).first().find(this.lblTableEachHeading).find('td').eq(2).each(($el,index,$lists)=>{
         let expectedFirstName=['John','Frank','Jason','Time']
         expect($el.text().trim()).to.equal(expectedFirstName[index])
      
      })

    }
    VerifyLastNamesOfFirstTable()
    {
        cy.get(this.lnkSortableDataTable).click()
        cy.get(this.lblTableHeading).first().find(this.dataFirstName).each(($el, index, $list)=>{
          let  expectedLastNames=['Smith', 'Bach', 'Doe', 'Conway']
            expect($el.text().trim()).to.equal(expectedLastNames[index])
        })
    }

    VerifyEmailsOfFirstTable()
    {
        cy.get(this.lnkSortableDataTable).click()
        cy.get(this.lblTableHeading).first().find(this.dataEmails).each(($el,index,$list)=>{
            //cy.log($el.text())
            let expectedEmails=['jsmith@gmail.com','fbach@yahoo.com','jdoe@hotmail.com','tconway@earthlink.net']
            let emailRegx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z.]{2,}$/
            let email=$el.text().trim()

            expect(email).to.match(emailRegx)
            expect(email).to.equal(expectedEmails[index])

        })

    }

    VerifyDueHasDollarSignAndTwoDecPlaces()
    {
        cy.get(this.lnkSortableDataTable).click()
        cy.get(this.lblTableHeading).first().find(this.dataDue).each(($el,index,$list)=>{
            let dolarRegex= /\$\d{1,3}(,\d{3})*(\.\d{2})/
            let expectedDue=['$50.00','$51.00','$100.00','$50.00']
            let due=$el.text().trim()
            expect(due).to.match(dolarRegex)
            expect(due).to.equal(expectedDue[index])
        })

    }
    VerifyWebSiteOfFirstTable()
    {
        cy.get(this.lnkSortableDataTable).click()
        cy.get(this.lblTableHeading).first().find(this.lblTableEachHeading).then(($headers)=>{
           let  WebsiteColIndex=$headers.toArray().findIndex(th=>th.innerText.trim()=="Web Site")
            //cy.log(WebsiteColIndex)
            let webSiteCellSelector=`${this.dataCommon}:nth-child(${WebsiteColIndex+1})`
            cy.get(webSiteCellSelector).each(($cell,index)=>{
                let url=$cell.text().trim()
              let webRegex = /\b((?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+(?::\d+)?(?:\/[^\s]*)?)\b/
              cy.log(`Checking URL in row ${index + 1}: ${url}`)
              expect(url).to.match(webRegex)

            })
        })

    }
    VerifSortingLastFirstTable()
    {
        cy.get(this.lnkSortableDataTable).click()
        cy.get(this.lblTableHeading).first().find(this.lblTableEachHeading).then(($header)=>{
           let lastNameColIndex=$header.toArray().findIndex(th=>th.innerText.trim()==='Last Name')
            cy.log(lastNameColIndex)
            let lastNameCellSector=`${this.dataCommon}:nth-child(${lastNameColIndex+1})`
            cy.log(lastNameCellSector)

            cy.wrap($header[lastNameColIndex]).click()
            cy.wait(500)
            cy.wrap($header[lastNameColIndex]).click()


        })
    }

}

export default SortableDataTables
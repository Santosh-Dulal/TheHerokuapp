class DynamicContent
{
    lnkDynamicContent='a[href^="/dynamic_content"]'
    lnkClickHere='a[href*="?with_content=static"]'
    dynamicImage='#content .row .large-2'
    dynamicText='#content .row .large-10'


    VerifyDynamicContentLinkHoverable()
    {
        cy.get(this.lnkDynamicContent).trigger('mouseover').should('exist').and('be.visible').and('have.text','Dynamic Content')
    }

    VerifyURLOfDyamicContent()
    {
        cy.get(this.lnkDynamicContent).click()
        cy.url().should('include','/dynamic_content')
        cy.contains('Dynamic Content')
    }

    VerifyDynamicImageInPageLoad()
    {
        cy.get(this.lnkDynamicContent).click()
        cy.get(this.dynamicImage).then(($el)=>{
            let dImage= $el.toArray().map(el=>el.querySelector('img')?.src)

            cy.get(this.lnkClickHere).click()

            cy.get(this.dynamicImage).then(($el2)=>{
                let SImage=$el2.toArray().map(el=>el.querySelector('img')?.src)
                const changed = dImage.some((src, idx) => src !== SImage[idx]);
                expect(changed).to.be.true
            })
            cy.get(this.lnkClickHere).click()

            cy.get(this.dynamicImage).then(($el2)=>{
                let SImage=$el2.toArray().map(el=>el.querySelector('img')?.src)
                const changed = dImage.some((src, idx) => src !== SImage[idx]);
                expect(changed).to.be.true
            })
            cy.get(this.lnkClickHere).click()

            cy.get(this.dynamicImage).then(($el2)=>{
                let SImage=$el2.toArray().map(el=>el.querySelector('img')?.src)
                const changed = dImage.some((src, idx) => src !== SImage[idx]);
                expect(changed).to.be.true
            })
        })
    }

    VerifyDynamicTextInPageLoadIsNotEmpty()
    {
        cy.get(this.lnkDynamicContent).click()
        cy.get(this.dynamicText).should('have.length.greaterThan',0)

        cy.get(this.dynamicText).each(($el)=>{
            cy.wrap($el).should('be.visible')
                        .and(($content)=>{
                            let text = $content.text().trim()
                            expect(text).not.to.be.empty
                        })
        })
       
    }

    VerifyDynamicTextIsSeenInEachPageLoad()
    {
         cy.get(this.lnkDynamicContent).click()

         cy.get(this.dynamicText).then(($els)=>{
                  const initialTexts = $els.toArray().map(el => el.innerText.trim())

                  cy.get(this.lnkClickHere).click()
                  
                  cy.get(this.lnkClickHere).then(($el2)=>{
                   const newText=$el2.toArray().map(e1=>e1.innerText.trim())

                    expect(initialTexts).to.have.length(initialTexts.length)
                    const changed = initialTexts.some((t, idx) => t !== newText[idx])
                    expect(changed, `Expect at least one block to change`).to.be.true

        })
    })
       
          
    }


}

export default DynamicContent
class LargeDom
{
    lnkLargeDeepDom='a[href^="/large"]'
    lblSiblings='#siblings>div'
    tblTable='#large-table'

    VerifyHoveringOnLargeDeepDom()
    {
        cy.get(this.lnkLargeDeepDom).trigger('mouseover').should('exist').and('be.visible').and('contain','Large & Deep DOM')
    }

    VerifyURLOfLargeDeepDomPage()
    {
        cy.get(this.lnkLargeDeepDom).click()
        cy.url().should('include','/large')
        cy.contains('No Siblings')
        cy.contains('Table')
    }

    VerifyFirstAndLastElementsOfSiblings()
    {
        cy.get(this.lnkLargeDeepDom).click()
        cy.get(this.lblSiblings).first().invoke('text').then((text)=>{
            expect(text.trim()).to.include('1.1')
        })
        cy.get(this.lblSiblings).last().invoke('text').then((text)=>{
            expect(text.trim()).to.include('50.3')
        })
       
    }

    VerifyFirstAndLastElementsOfTable()
    {
        cy.get(this.lnkLargeDeepDom).click()
        cy.get(this.tblTable).first().invoke('text').then((text)=>{
            expect(text.trim()).to.include('1.1')
        })
        cy.get(this.tblTable).last().invoke('text').then((text)=>{
            expect(text.trim()).to.include('50.50')
        })
    }

    VerifyTotalCountInSiblings()
    {
        cy.get(this.lnkLargeDeepDom).click()
       cy.get(this.lblSiblings,{timeout:10000})
    .should('exist') // ensures the element is present
    .then(($siblings) => {
      // $siblings is a jQuery object, so length gives total count
      const totalCount = $siblings.length
      cy.log('Total siblings:', totalCount)

      // Assert the total count (change 50 to your expected number)
      expect(totalCount).to.equal(50)
    })
    }


    //VerifySiblingsElementsSeenInScrolling()
    //{
        //cy.get(this.lnkLargeDeepDom).click()
        //cy.get(this.lblSiblings).each(($el)=>{
           // cy.wrap($el).scrollIntoView().should('be.visible')

            //cy.log($el.text())
       // })
    //}
    VerifySiblingsElementsSeenInScrolling() {
    cy.get(this.lnkLargeDeepDom).click();

    // cy.get(this.lblSiblings).each(($el, index) => {
       
    //     cy.wrap($el).scrollIntoView({ easing: 'linear', duration: 500 })

        
    //     cy.wait(500); // 200ms pause

        
    //     cy.wrap($el).invoke('text').then((text) => {
    //         cy.log(`Sibling ${index + 1}: ${text.trim()}`)
    //     })

    //     // assert it's visible
    //     cy.wrap($el).should('be.visible')
    // })

    cy.get(this.lblSiblings).each(($el, index, $list) => {
    // Scroll each element into view with smooth behavior
    cy.wrap($el).scrollIntoView({ easing: 'linear', duration: 500 })

    // Small pause to mimic human scrolling
    cy.wait(500)

    // Log the text of the current sibling
    cy.wrap($el).invoke('text').then((text) => {
        cy.log(`Sibling ${index + 1}: ${text.trim()}`)
    })

    // Assert the element is visible
    cy.wrap($el).should('be.visible')

    // Optional: Scroll slightly more if needed to mimic full human scroll
    if (index === $list.length - 1) {
        cy.window().then((win) => {
            win.scrollBy(0, 100) // scroll a bit past the last element
        })
    }
})
}

VerifyDataIsSeenInScrollingTable()
{
    cy.get(this.lnkLargeDeepDom).click()
    cy.get(this.tblTable).each(($el,index, $lists)=>{
     cy.wrap($el).scrollIntoView({ easing: 'linear', duration: 500 })
     cy.wait(500)
     cy.wrap($el).invoke('text').then((text)=>{
        cy.log(`Table ${index + 1}: ${text.trim()}`)
       
     })
      cy.wrap($el).should('be.visible')

    })
}

VerifyResponsivnessTable()
{
    cy.get(this.lnkLargeDeepDom).click()
    cy.fixture('phones.json').then((data)=>{
        data.forEach((phone)=>{
            cy.viewport(Number(phone.width),Number(phone.height))
        })
        cy.get(this.tblTable).should('be.visible')
    })
}



}

export default LargeDom
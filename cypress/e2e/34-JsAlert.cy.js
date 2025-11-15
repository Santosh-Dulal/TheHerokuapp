import JsAlerts from "../support/POM/jsalert_pom";

describe('Javascript Alerts', () => {
beforeEach(() => {
     cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
     cy.visit('/')
})

let ja = new JsAlerts()
   
    it('Verify Js Script alerts link is hoverable', () => {
        ja.VerifyJsAlertLinkIsHoverable()
    })

    it('Verify URL of js alert is page', () => {
      ja.VerifyURLOfJsAlertPage()  
    })

    it('Verify Js Alert text', () => {
      ja.VerifyJsAlertText()  
    })

    it('Verify Js confirm alert', () => {
      ja.VerifyJSConfirm()
    })

    it.only('Verify Js prompt alert',()=>{
      ja.VerifyJSPrompt()
    })
   
})
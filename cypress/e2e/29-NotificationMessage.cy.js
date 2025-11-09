import NotificationMessage from "../support/POM/notificationmessage_pom"

describe('Notification Messages', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://298279967.log.optimizely.com/event*', { statusCode: 204, body: {} })
        cy.visit('/')
    })

    let nm= new NotificationMessage()
    it('Verify hovering', () => {
        nm.VerifyHoveringOnNotificationMessageLink()
    })

    it('Verify URL', () => {
        nm.VerifyURLOfNotificationMessage()
    })

    it('Verify Notification Message', () => {
      nm.VerifyNotificationMessageIsPresent()  
    })

    it.only('Verify that there is no banner message after refreshing the page', () => {
      nm.VerifyThereIsNoBannerAfterRefresh()  
    })
})
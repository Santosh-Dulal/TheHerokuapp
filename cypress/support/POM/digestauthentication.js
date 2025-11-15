class DigestAuthentication
{
    lnkDigestAuth='a[href^="/digest_auth"]'


    VerifyDigestAuthLinkIsHoverable()
    {
        cy.get(this.lnkDigestAuth).trigger('mouseover').should('exist').and('contain','Digest Authentication')
    }

    VerifyLoginWithDigestAuthentication()
    {
        // need to install new plugin for digest authenttication
           

        
    }



}

export default DigestAuthentication
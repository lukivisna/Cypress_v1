describe('Contact us', () => {
  it('Contacts',  () => {
    cy.visit('https://www.pneumatiky.cz/')
    /*cy.get("#main-menu .level-1 li").then((elements) => {
      elements[4].click()
      console.log(elements)
    })
*/  cy.contains("Rádce výběru").click()
    //cy.get("a[href=/kontakty]").click()
    cy.contains("Kontakty").click()
    // @todo cy.get("#main-menu li.li-1").click()
    //cy.get('.level-2 a[href=/kontakty]').click({ force: true })
    cy.get("#frm-contactForm-contactForm-name").type("Lukáš Viš")
    cy.get("#frm-contactForm-contactForm-email").clear().type("lukivisna@gmail.com")

  })
})


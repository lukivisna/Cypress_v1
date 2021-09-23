describe('Basic test', () => {
    it('Looking for a product',  () => {
      cy.visit('https://www.alza.cz/')
        cy.get("#edtSearch").click().type("powerbanka")
        cy.get("#btnSearch").click()
    })
})


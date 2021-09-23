describe('Putting in an Order', () => {
  it('Looking for a product',  () => {
    cy.visit('https://www.alza.cz/')
    cy.get("#edtSearch").click().type("powerbanka")
    cy.get("#btnSearch").click()
  })

  it('Choosing the product', () => {
    cy.get('.btnk1').first(). click()
  })

  it('Continue to Basket', () => {
    cy.get("#varBToBasketButton").click()
  });

  it('Continue in order process', () => {
    cy.wait(2000)
    cy.get('.js-button-order-continue').click()
  })
})

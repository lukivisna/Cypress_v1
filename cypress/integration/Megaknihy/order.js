describe('Putting in an Order', () => {
  it('Looking for a product',  () => {
    cy.visit('https://www.megaknihy.cz/', { timeout: 10000 })
    cy.get("#search_query_top").should("be.visible")
    cy.get("#search_query_top").click().type("witcher")
    cy.get("body").then($body => {
      if ($body.find("#search-btn-cont").length > 0) {
        cy.get("#search-btn-cont").click()
      } else {
        cy.get("[name=submit_search]").click()
      }
      }
    )
    cy.clickOnFirst(".product_img_link")
    cy.get("#add_to_cart_button").click()
    cy.get(".control-line").click()
  })

  it("Filling Out an Order", () => {
    //cy.get('[alt="DPD"]').click()
    //cy.get('[alt="Dobírka"]').click()
    //cy.fill("#customer_firstname", "Lukáš")
    //cy.get("#customer_firstname").click().type("Lukáš")
    //cy.fill("#customer_lastname", "Lukáško")
    //cy.fill("#address1", "NetuŠím")
    //cy.fill("#city", "Petrohrad")
    //cy.fill("#postcode", "69830")

    //const simpleObject = {field: ["abc", "cde"], value: ["martin", "bratislava"]}
    const config = [
      {field: "#customer_firstname", value: "Lukáš"},
      {field: "#customer_lastname", value: "Lukáško"},
      {field: "#address1", value: "NetuŠím"},
      {field: "#city", value: "Petrohrad"},
      {field: "#postcode", value: "69830"}]

    cy.fillForm(config)
  })
  /*
  const randomNumber = 5
  const simpleArray = [1234,randomNumber,6,7,8,9, "city"]
  const simpleObject = {field: "#customer_firstname", value: "Lukáš"}
  const complexArray = [simpleObject]

  const simpleFunction = (text) => text.toLowerCase()
  const simpleBiggerFunction = (constant) => {
    if (typeof constant === "number") return "this in number"

    if (typeof constant === "boolean") return "this in not boolean"
    else return "this is string"
  }

  console.log (simpleFunction("LUKAS"))
  console.log (simpleBiggerFunction("LUKAS"))
*/


})


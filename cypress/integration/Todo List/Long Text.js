describe("Todo List", () => {
  it("Add new Todo",  () => {
    cy.visit("https://gander.wustl.edu/~wilson/store/yui/docs/app/app-todo.html")
    cy.get(".todo-input").should("be.visible")
    cy.get(".todo-input").click()
        .type("Cypress automatically runs this command before each test to prevent state from being shared across tests. You shouldn't need to use this command unless you're using it to clear localStorage inside a single test.")
        .type("{enter}")
    cy.get(".todo-view").should("be.visible")
    cy.get(".todo-view").contains("Cypress automatically runs this command before each test to prevent state from being shared across tests. You shouldn't need to use this command unless you're using it to clear localStorage inside a single test.")
  })
})
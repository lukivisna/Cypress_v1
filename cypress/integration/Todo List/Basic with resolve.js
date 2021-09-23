describe("Todo List", () => {
  it("Add new Todo",  () => {
    cy.visit("https://gander.wustl.edu/~wilson/store/yui/docs/app/app-todo.html")
    cy.get(".todo-input").should("be.visible")
    cy.get(".todo-input").click()
    cy.get(".todo-input").type("water{enter}")
    cy.get(".todo-view").should("be.visible")
    cy.get(".todo-view").contains("water")
  })
  it("Resolve Todo",  () => {
    cy.get(".todo-checkbox").should("be.visible")
    cy.get(".todo-checkbox").check()
    cy.get(".todo-checkbox").should("be.checked")
  })
})


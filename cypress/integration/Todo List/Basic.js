describe("Todo List", () => {
  it("Add new Todo",  () => {
    cy.visit("https://gander.wustl.edu/~wilson/store/yui/docs/app/app-todo.html")
    cy.get(".todo-input").should("be.visible")
    cy.get(".todo-input").click()
     .type("water{enter}")
    cy.get(".todo-view").should("be.visible")
      .contains("water")
  })
})


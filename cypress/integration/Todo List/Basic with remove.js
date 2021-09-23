describe("Todo List", () => {
  it("Add new Todo",  () => {
    cy.visit("https://gander.wustl.edu/~wilson/store/yui/docs/app/app-todo.html")
    cy.get(".todo-input").should("be.visible")
    cy.get(".todo-input").click()
    cy.get(".todo-input").type("water{enter}")
    cy.get(".todo-view").should("be.visible")
    cy.get(".todo-view").contains("water")
  })
  it("Remove Todo",  () => {
    cy.get(".todo-view").trigger("mouseover")
    cy.get(".todo-remove-icon").should("be.visible")
    cy.get(".todo-remove-icon").click()
    cy.get(".todo-view").should("not.exist")
  })

})



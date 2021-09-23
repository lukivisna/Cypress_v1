describe("Todo List", () => {
  it("User opens page",  () => {
    cy.visit("https://gander.wustl.edu/~wilson/store/yui/docs/app/app-todo.html")
  })

  it("User sees input",  () => {
    cy.get(".todo-input").should("be.visible")
  })

  it("User adds different todos",  () => {
    cy.get(".todo-input").click()
        .type("Buy water{enter}")
        .type("Buy crypto{enter}")
        .type("Buy groceries{enter}")
        .type("Doctor appointment{enter}")
  })

  it("User sees at least one todo ",  () => {
    cy.get(".todo-view").should("be.visible")
  })

  it("Uses sees at least one checkbox",  () => {
    cy.get(".todo-checkbox").should("be.visible")
  })

  it("User hovers on first todo",  () => {
    cy.get(".todo-view").first().trigger("mouseover")
  })

  it("User removes first todo",  () => {
    cy.clickOn(".todo-remove-icon", 0)
  })
  
  it("User sees his second added todo as first (first todo was removed)",  () => {
    cy.get(".todo-view").then((elements) => cy.wrap(elements[0]).contains("Buy crypto"))
  })
  
  it("User resolves other todo",  () => {
    cy.clickOn(".todo-checkbox", 0)
    cy.clickOn(".todo-checkbox", 1)
    cy.clickOn(".todo-checkbox", 2)
  })

  it("User sees that all of todos are resolved",  () => {
    cy.get(".todo-checkbox").then((elements) => cy.wrap(elements[0]).should("be.checked"))
    cy.get(".todo-checkbox").then((elements) => cy.wrap(elements[1]).should("be.checked"))
    cy.get(".todo-checkbox").then((elements) => cy.wrap(elements[2]).should("be.checked"))
  })
})
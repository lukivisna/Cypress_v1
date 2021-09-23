Cypress.Commands.add('homepage', () => cy.visit('http://localhost:1234'));

Cypress.Commands.add('button', (id) => cy.get(`button[id=${id}]`));

Cypress.Commands.add('clickOnFirst', (selector) => cy.get(selector).then((elements) => elements[0].click()));

Cypress.Commands.add('clickOn', (selector, index) => cy.get(selector).then((elements) => elements[index].click()));

Cypress.Commands.add('setUser', (userKey = 'lv') => cy.setCookie('userKey', userKey));

Cypress.Commands.add('searchText', (text) => {
    cy.get('.c-search__input').type(text);
    cy.get('.c-search__button').click();
});

Cypress.Commands.add('fill', (id, meno) => {
    cy.get(id).click().type(meno)
})

Cypress.Commands.add("fillForm", (config) => {
    //console.log(config, typeof config)
    //config.forEach((value, index) => console.log(value, index))
    config.forEach((item, index) => {
        cy.get(item.field).click().type(item.value)
    })
})
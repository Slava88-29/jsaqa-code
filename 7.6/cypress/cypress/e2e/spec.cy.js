const email = "test@test.com"
const password = "test"
it("Check page display", () => {
  cy.visit("/");
});
describe('template spec', () => {
  beforeEach (()=>{
    cy.visit("/"); 
    cy.login (email,password)
    cy.book ("title","description","author")
  })

  it('Add to favorite', () => {
    cy.get("div.card-footer").contains("Add to favorite").click()
    cy.get("h4").click()
    cy.get("div.card-body").should("contain","title")
  })
  it('Delete from favorite', () => {
    cy.get("div.card-footer").contains("Add to favorite").click()
    cy.get("h4").click()
    cy.get("div.card-footer").contains("Delete from favorite").click()
    cy.contains("Please add some book to favorit on home page!").should("be.visible")
  })
  it('Logout favorite', () => {
    cy.get("div.card-footer").contains("Add to favorite").click()
    cy.get("button").contains("Log out").click()
    cy.contains("Delete from favorite").should("not.exist")
    cy.contains("Favorites").should("not.exist")
  })
})

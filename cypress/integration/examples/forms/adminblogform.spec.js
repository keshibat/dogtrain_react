describe("Successful log in page", () => {
  beforeEach(() => {
    cy.visit("/admin/login");
    cy.get("label.label").contains("Username");
    cy.get('input[name="username"]').type("admin");
    cy.get('input[name="password"]').type("admin");
    cy.get("input.button.is-link").click();
  });

  it("Goes to admin Testimonials page", () => {
    cy.get("input[placeholder='Add a Post Title']").type("add blog test post");
    cy.get("textarea[placeholder='Write a Blog Post']").type(
      "blog message body post"
    );
    cy.get("input.button.is-link")
      .contains("Add Post")
      .click();
    cy.visit("/blog");
    cy.get("span").contains("add blog test post");
  });
});

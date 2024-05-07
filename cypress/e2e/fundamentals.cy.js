describe('Fundamentals test', () => {
	beforeEach(() => {
		cy.visit('/fundamentals');
	});

	it('Contains correct header ', () => {
		// cy.visit("/fundamentals");
		// cy.get("[data-test=fundamentals-header]").should(
		// 	"contain.text",
		// 	"Testing Fundamentals"
		// );

		cy.getDataTest('fundamentals-header').should(
			'contain.text',
			'Testing Fundamentals'
		);
	});

	it('Accordian works correctly ', () => {
		// cy.visit("/fundamentals");
		cy.contains('Your tests will exist in a describe block').should(
			'not.be.visible'
		);
		cy.get('[data-test="accordion-item-1"]').click();
		cy.contains('Your tests will exist in a describe block').should(
			'be.visible'
		);
		cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
		cy.contains('Your tests will exist in a describe block').should(
			'not.be.visible'
		);
	});
});

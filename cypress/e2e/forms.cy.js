describe('form tests', () => {
	beforeEach(() => {
		cy.visit('/forms');
	});

	it('Test subsscribe form', () => {
		cy.contains('Testing Forms');
		// cy.getDataTest('subscribe-form').find('input').type('ryan@coderyan.com');
		cy.getDataTest('subscribe-form').find('input').as('subscribe-input');
		cy.get('@subscribe-input').type('ryan@coderyan.com');
		cy.contains('Successfully subbed: ryan@coderyan.com!').should('not.exist');
		cy.getDataTest('subscribe-button').click();
		cy.contains('Successfully subbed: ryan@coderyan.com!').should('exist');
		cy.wait(3000);
		cy.contains('Successfully subbed: ryan@coderyan.com!').should('not.exist');

		cy.get('@subscribe-input').type('ryan@coderyan.io');
		cy.contains('invalid email: ryan@coderyan.io!').should('not.exist');
		cy.getDataTest('subscribe-button').click();
		cy.contains('Invalid email: ryan@coderyan.io!').should('exist');
		cy.wait(3000);
		cy.contains('invalid email: ryan@coderyan.io!').should('not.exist');

		cy.contains('fail!').should('not.exist');
		cy.getDataTest('subscribe-button').click();
		cy.contains('fail!').should('exist');
	});
});

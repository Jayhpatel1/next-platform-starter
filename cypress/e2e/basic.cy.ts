describe('The Super Food AI portal', () => {
	it('loads home', () => {
		cy.visit('/');
		cy.contains('The Super Food AI');
		cy.contains('Explore Catalog');
	});
	it('loads catalog', () => {
		cy.visit('/catalog');
		cy.contains('Catalog');
		cy.contains('Vision');
	});
	it('loads procure', () => {
		cy.visit('/procure');
		cy.contains('Procure');
		cy.get('input[placeholder*="mass reduction"]').should('exist');
	});
	it('loads control', () => {
		cy.visit('/control');
		cy.contains('Control Panel');
	});
	it('loads account', () => {
		cy.visit('/account');
		cy.contains('Sign in using your phone');
	});
});
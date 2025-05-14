
describe('Basic API tests using only Cypress', () => {

  it('passes', () => {
    cy.request('GET', 'https://www.bstackdemo.com/')
      .then((response) => {
        expect(response.status).to.eq(200)
      })
  })
})

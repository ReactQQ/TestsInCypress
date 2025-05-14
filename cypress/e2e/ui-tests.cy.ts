/*
Exercise:  

Please write tests for the following scenarios and ensure that they can run in isolation.  

Test 1:  
1. Visit the website: https://example.cypress.io/todo
2. Remove all elements from the list.  
3. Add new todo items using the array of strings below:  
   [  
       'Walk the dog', 'Buy milk', 'Buy eggs', 'Buy bread', 'Wash the dog', 'Visit grandma', 'Feed the cat', 'Feed the fish'  
   ]  
4. Verify that the items are added to the list.  

Test 2:  
1. Visit the website: https://example.cypress.io/todo
2. Remove all elements from the list.  
3. Add new todo items using the array of strings:  
   [  
       'Walk the dog', 'Buy milk', 'Buy eggs', 'Buy bread', 'Wash the dog', 'Visit grandma', 'Feed the cat', 'Feed the fish'  
   ]  
4. Verify that the "Items" counter shows the correct number of items.  
5. Mark the first item as completed.  
6. Verify that the "Items" counter shows the correct number of remaining items.  
*/

import axios = require('axios');

describe("Todos exercise", () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
        cy.get(':nth-child(1) > .view > .toggle').click()
        cy.get(':nth-child(2) > .view > .toggle').click()
    })

    it('Test 1', () => {
        const arrayToClick = [
            'Walk the dog', 'Buy milk', 'Buy eggs', 'Buy bread', 'Wash the dog', 'Visit grandma', 'Feed the cat', 'Feed the fish'
        ]

        arrayToClick.forEach(task => {
            cy.get('[data-test="new-todo"]').type(`${task}{enter}`)
            cy.contains('label', task)
        })
    })

    it('Test 2', () => {
        const arrayToClick = [
            'Walk the dog', 'Buy milk', 'Buy eggs', 'Buy bread', 'Wash the dog', 'Visit grandma', 'Feed the cat', 'Feed the fish'
        ]

        let count = 0
        arrayToClick.forEach(task => {
            cy.get('[data-test="new-todo"]').type(`${task}{enter}`)
            count++
        })

        // 4. Verify that the "Items" counter shows the correct number of items.
        cy.get('.todo-count').invoke('text').then((text) => {
            expect(text.trim()).equal(count)
        });
        cy.wait(2222222)

        // 5. Mark the first item as completed.
        // 6. Verify that the "Items" counter shows the correct number of remaining items.  

    })


    it('clicking "type" navigates to a new url', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        // Should be on a new URL which
        // includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
    })
})
### 6.1. TRAVESÍA DE ELEMENTOS (II)
 
.last()
```js
cy.get('.table td')
  .last().should('contain', '1')
```
.next()
```ts
cy.get('.traversal-ul')
  .contains('apples').next().should('contain', 'oranges')
```
.nextAll()
```ts
cy.get('.traversal-next-all')
  .contains('oranges')
  .nextAll().should('have.length', 3)
```
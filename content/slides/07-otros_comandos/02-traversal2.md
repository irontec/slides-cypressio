### 6.1. TRAVESÍA DE ELEMENTOS (III)
 
.nextUntil()
```ts
cy.get('.traversal-next-all')
  .contains('oranges')
  .nextUntil('#fruits').should('have.length', 3)
``` 
 .not()
```ts
cy.get('ul>li').not('.active').should('have.length', 4)
```
 .prev()
 ```ts
cy.get('.traversal-ul')
  .contains('apples').next().should('contain', 'peaches')
 ```
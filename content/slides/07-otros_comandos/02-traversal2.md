### 6.1. TRAVESÍA DE ELEMENTOS (III)

.nextUntil()
```typescript
cy.get('.traversal-next-all')
  .contains('oranges')
  .nextUntil('#fruits').should('have.length', 3)
```
 .not()
```typescript
cy.get('ul>li').not('.active').should('have.length', 4)
```
 .prev()
 ```typescript
cy.get('.traversal-ul')
  .contains('apples').next().should('contain', 'peaches')
 ```
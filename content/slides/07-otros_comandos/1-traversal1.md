### Travesía de elementos (II)

* .last()
```javascript
cy.get('.table td')
  .last().should('contain', '1')
```
* .next()
```typescript
cy.get('.traversal-ul')
  .contains('apples').next().should('contain', 'oranges')
```
* .nextAll()
```typescript
cy.get('.traversal-next-all')
  .contains('oranges')
  .nextAll().should('have.length', 3)
```
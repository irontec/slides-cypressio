### Travesía de elementos (I)

* .eq()
```typescript
cy.get('list')
  .eq(2).should('contain', 'Tercer elemento')
```
* .find()
```typescript
cy.get('.paginacion').find('li').find('a')
  .should('have.length', 7)
```
* .first()
```typescript
cy.get('.table td')
  .first().should('contain', '1')
```
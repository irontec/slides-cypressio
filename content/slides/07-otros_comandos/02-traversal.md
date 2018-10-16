### 6.1. TRAVESÍA DE ELEMENTOS (I)
 
.eq()
```ts
cy.get('list')
  .eq(2).should('contain', 'Tercer elemento')
```
.find()
```ts
cy.get('.paginacion').find('li').find('a')
  .should('have.length', 7)
```
.first()
```ts
cy.get('.table td')
  .first().should('contain', '1')
```
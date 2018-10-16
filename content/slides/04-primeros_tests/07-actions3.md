### 4.7. ACCIONES (II)

.dblclick()
```ts
cy.get('.action-div').dblclick()
```
.check()
```ts
cy.get('.action-radios [type="radio"]')
  .check('radio3', { force: true }).should('be.checked')
```
.uncheck()
```ts
cy.get('.action-radios [type="radio"]')
  .uncheck('radio3', { force: true }).should('not.be.checked')
```

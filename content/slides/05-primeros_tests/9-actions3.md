* .dblclick()
```typescript
cy.get('.action-div').dblclick()
```
* .check()
```typescript
cy.get('.action-radios [type="radio"]')
  .check('radio3', { force: true }).should('be.checked')
```
* .uncheck()
```typescript
cy.get('.action-radios [type="radio"]')
  .uncheck('radio3', { force: true }).should('not.be.checked')
```

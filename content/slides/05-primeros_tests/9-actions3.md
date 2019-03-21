### Acciones (III)

* .dblclick(): doble click en un elemento del DOM.
```typescript
cy.get('.action-div').dblclick()
```
* .check(): check en un checkbox o radiobutton.
```typescript
cy.get('.action-radios [type="radio"]')
  .check('radio3', { force: true }).should('be.checked')
```
* .uncheck(): uncheck en un checkbox.
```typescript
cy.get('.action-radios [type="radio"]')
  .uncheck('radio3', { force: true }).should('not.be.checked')
```

### Acciones

* .type(): escribe dentro de un elemento del DOM.
```typescript
cy.get('.form-email').type('email@email.com')
  .should('have.value', 'email@email.com')
```
* .focus()
```typescript
cy.get('.form-email').focus()
  .should('have.attr', 'style', 'color: blue;')
```
* .blur()
```typescript
cy.get('.form-email').type('Email').blur()
  .should('have.attr', 'style', 'color: red;')
```

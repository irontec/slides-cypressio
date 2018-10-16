### 4.7. ACCIONES (I)

.type()
```ts
cy.get('.form-email').type('email@email.com')
  .should('have.value', 'email@email.com')
```
.focus()
```ts
cy.get('.form-email').focus()
  .should('have.attr', 'style', 'color: blue;')
```
.blur()
```ts
cy.get('.form-email').type('Email').blur()
  .should('have.attr', 'style', 'color: red;')
```

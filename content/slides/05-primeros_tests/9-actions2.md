### Acciones (II)

* .clear(): limpiar un input o textarea.
```typescript
cy.get('.form-input').type('Lorem ipsum')
  .should('have.value', 'Lorem ipsum')
  .clear()
  .should('have.value', '')
```
* .submit(): enviar formulario.
```typescript
cy.get('.form').submit()
```
* .click(): hacer click en un elemento del DOM.
```typescript
cy.get('.form button').click()
cy.get('.container').click('left')
```
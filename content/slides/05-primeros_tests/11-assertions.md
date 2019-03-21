### Assertions / Aserciones

Describen el estado deseado de los elementos de la aplicación.

Las afirmaciones se reintentan automáticamente hasta que pasan o expiran.

* .should(): debe de tener el estado deseado.
```typescript
cy.get('.button').should('have.class', 'btn')
cy.get('.text').should('exist')
cy.get('.text').should('not.be.empty')
cy.get('ul li').should('have.length', 5)
```
* .and(): utilizado para encadenar aserciones.
```typescript
cy.get('.text').should('exist')
               .and('not.be.empty')
```
### Consulta elementos / Querying

* cy.get(): obtener un elemento del DOM.
```typescript
cy.get('.button')
```
* cy.contains(): obtener un elementos del DOM por su contenido.
```typescript
cy.get('.button').contains('Enviar')
cy.contains('Enviar')
```
* .within(): navega dentro de un elemento.
```typescript
cy.get('.query-form').within(() => {
    cy.get('input:first')
    cy.get('input:last')
})
```
* cy.root(): Obtener el elemento root del DOM.
```typescript
cy.get('.query-form').within(() => {
    cy.root().should('have.class', 'query-form')
})
```
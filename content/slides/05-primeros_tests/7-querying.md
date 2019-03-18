### Consulta elementos / Querying

* cy.get(): obtener
```typescript
cy.get('.button')
```
* cy.contains(): contiene
```typescript
cy.get('.button').contains('Enviar')
```
* .within(): dentor de
```typescript
cy.get('.query-form').within(() => {
    cy.get('input:first')
    cy.get('input:last')
})
```
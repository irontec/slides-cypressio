### 4.4. Consulta elementos / Querying

cy.get()
```typescript
cy.get('.button')
```
cy.contains()
```typescript
cy.get('.button').contains('Enviar')
```
.within()
```typescript
cy.get('.query-form').within(() => {
    cy.get('input:first')
    cy.get('input:last')
})
```
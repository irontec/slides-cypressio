### 4.4. CONSULTA ELEMENTOS / QUERYING (I)

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
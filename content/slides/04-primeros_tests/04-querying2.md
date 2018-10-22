### 4.4. Consulta elementos / Querying

cy.root()
```typescript
cy.get('.query-form').within(() => {
    cy.root().should('have.class', 'query-form')
})
```
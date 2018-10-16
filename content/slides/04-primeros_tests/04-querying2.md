### 4.4. CONSULTA ELEMENTOS / QUERYING (II)

cy.root()
```typescript
cy.get('.query-form').within(() => {
    cy.root().should('have.class', 'query-form')
})
```
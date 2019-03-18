* cy.root(): root del DOM
```typescript
cy.get('.query-form').within(() => {
    cy.root().should('have.class', 'query-form')
})
```
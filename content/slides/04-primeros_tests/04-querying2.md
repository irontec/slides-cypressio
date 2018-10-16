### 4.4. CONSULTA ELEMENTOS / QUERYING (II)
 
cy.root()
```ts
cy.get('.query-form').within(() => {
    cy.root().should('have.class', 'query-form')
})
```
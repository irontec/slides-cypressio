### 4.4. CONSULTA ELEMENTOS / QUERYING (I)
 
cy.get()
```ts
cy.get('.button')
```
cy.contains()
```ts
cy.get('.button').contains('Enviar')
```
.within()
```ts
cy.get('.query-form').within(() => {
    cy.get('input:first')
    cy.get('input:last')
})
```
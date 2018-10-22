### 6.4. Window

cy.title()
```typescript
cy.title().should('include', 'Título web')
```
cy.document()
 ```typescript
cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
 ```
cy.viewport()
```typescript
cy.viewport('iphone-4', 'landscape')
cy.viewport(320, 480)
```
### Waiting

* cy.wait()
```typescript
cy.server()
cy.route('/accounts/*').as('getAccount')
cy.visit('/accounts/123')
cy.wait('@getAccount')
```

### 6.3. WAITING
 
cy.wait()
```ts
cy.server()
cy.route('/accounts/*').as('getAccount')
cy.visit('/accounts/123')
cy.wait('@getAccount')
```

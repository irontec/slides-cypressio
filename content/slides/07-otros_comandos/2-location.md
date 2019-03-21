### Location

* cy.url()
```typescript
cy.url().should('contain', '#users/new')
```
* cy.hash()
 ```typescript
cy.hash().should('eq', '#/users/new')
 ```
* cy.location()
 ```typescript
cy.location('pathname').should('eq', '/login')
 ```
 `hash, host, hostname, href, origin, pathname, port, protocol, search`


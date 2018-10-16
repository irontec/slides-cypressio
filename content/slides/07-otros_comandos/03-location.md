### 6.2. LOCATION
 
cy.url()
```ts
cy.url().should('contain', '#users/new')
```
 cy.hash()
 ```ts
cy.hash().should('eq', '#/users/new')
 ```
 cy.location()
 ```ts
cy.location('pathname').should('eq', '/login')  
 ```
 hash, host, hostname, href, origin, pathname, port, protocol, search


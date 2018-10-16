### 6.4. WINDOW
 
cy.title()
```ts
cy.title().should('include', 'Título web')
```
 * cy.window()
cy.document()
 ```ts
cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
 ```
cy.viewport()
```ts
cy.viewport('iphone-4', 'landscape')
cy.viewport(320, 480)
```
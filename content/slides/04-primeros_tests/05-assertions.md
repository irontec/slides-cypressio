### 4.5. ASSERTIONS / AFIRMACIONES (I)

.should()
```ts
cy.get('.button').should('have.class', 'btn')
cy.get('.text').should('exist')
cy.get('.text').should('not.be.empty')
cy.get('ul li').should('have.length', 5)
```
.and()
```ts
cy.get('.text').should('exist')
               .and('not.be.empty')
```
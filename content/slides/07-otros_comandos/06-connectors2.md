### 6.5. CONECTORES (II)
 
then()
```ts
cy.get('div a').should('have.attr', 'href')
  .then((href) => {
      cy.visit(href)        
  })
```
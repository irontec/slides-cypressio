### 6.5. CONECTORES (II)

then()
```typescript
cy.get('div a').should('have.attr', 'href')
  .then((href) => {
      cy.visit(href)
  })
```
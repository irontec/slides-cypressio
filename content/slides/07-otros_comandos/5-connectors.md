### Conectores

* .each()
```typescript
cy.get('ul li span').each(($el, index, $list) => {
  cy.wrap($el).should('not.be.empty')
})
```
* .its()
```typescript
cy.get('ul li').its('length').should('eq', 7)
 ```
* .invoke()
```typescript
cy.get('ul li span').eq(0)
  .invoke('text').should('not.be.empty')
```
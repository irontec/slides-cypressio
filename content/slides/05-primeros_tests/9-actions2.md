* .clear()
```typescript
cy.get('.form-input').type('Lorem ipsum')
  .should('have.value', 'Lorem ipsum')
  .clear()
  .should('have.value', '')
```
* .submit()
```typescript
cy.get('.form').submit()
```
* .click()
```typescript
cy.get('.form button').click()
cy.get('.container').click('left')
```
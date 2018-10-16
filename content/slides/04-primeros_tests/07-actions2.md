### 4.7. ACCIONES (II)

.clear()
```ts
cy.get('.form-input').type('Lorem ipsum')
  .should('have.value', 'Lorem ipsum')
  .clear()
  .should('have.value', '')
```
.submit()
```ts
cy.get('.form').submit()
```
.click()
```ts
cy.get('.form button').click()
cy.get('.container').click('left')
```
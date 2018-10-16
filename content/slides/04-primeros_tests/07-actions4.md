### 4.7. ACCIONES (II)

.select()
```ts
cy.get('.action-select').select('content')
```
.trigger()
```ts
cy.get('[data-cy=draggable]')
  .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
  .trigger('mousemove', { which: 1, pageX: 600, pageY: 600 })
  .trigger('mouseup')
```

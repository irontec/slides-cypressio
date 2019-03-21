### Acciones (IV)

* .select(): seleccionar una opción de un select.
```typescript
cy.get('.action-select').select('contenido')
```
* .trigger(): desencadenar un evento en un elemento del DOM.
```typescript
cy.get('[data-cy=draggable]')
  .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
  .trigger('mousemove', { which: 1, pageX: 600, pageY: 600 })
  .trigger('mouseup')
```

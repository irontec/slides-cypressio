### Comandos navegación

* cy.visit(): visitar página.

```typescript
cy.visit('http://www.google.com')
```
* cy.reload(): recargar página.

```typescript
cy.reload(true)
```
* cy.go(): navegar hacia adelante o hacia atrás.

```typescript
cy.go('back')
cy.go('forward')
cy.go(-1)
cy.go(1)
```

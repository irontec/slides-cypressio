### Variables de entorno (III)

* Por línea de comando, --env

```typescript
$ cypress run --env pre=wwww.preproduccion.com,pro=wwww.produccion.com
```
Sobreescribe todas las variables de entorno anteriores.

Después en el test file:
```typescript
Cypress.env('pre')  
```
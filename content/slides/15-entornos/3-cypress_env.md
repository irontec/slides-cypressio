### Variables de entorno (III)

* Creandonos el fichero cypress.env.json
```typescript
  "env": {
    "pre": "http://www.preproduccion.com",
    "pro": "http://wwww.produccion.com"
  }
```
Después en el test file:
```typescript
Cypress.env('pre')  
```

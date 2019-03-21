### Variables de entorno (II)

Diferentes tipos de uso

* Declarando los entornos en cypress.json:
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

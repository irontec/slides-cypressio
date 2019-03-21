### Variables de entorno

En vez de hard codear los entornos:
```typescript
cy.request('https://api.acme.corp') 
```

Mejor utilizar variables de entorno:
```typescript
cy.request(Cypress.env('EXTERNAL_API'))
```

Sobreescribe a baseUrl de cypress.json

https://docs.cypress.io/guides/guides/environment-variables.html#Setting


### Fixtures

* Son conjuntos fijos de datos.
* Almacenamos estos datos en la carpeta cypress/fixtures

Utilizamos un alias para utilizar los datos 
```typescript
cy.fixture('users/admin.json').as('user') 
```
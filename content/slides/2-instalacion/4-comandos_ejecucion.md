### Comandos de ejecución

En el apartado de scripts de package.json de nuestro proyecto

```typescript
{
  "scripts": {
    "cy:open": "./node_modules/.bin/cypress open"
    "cy:run": "./node_modules/.bin/cypress run"
  }
}
```

Ahora será más fácil ejecutar nuestros tests.
```typescript
npm run cy:open 

npm run cy:run 
```
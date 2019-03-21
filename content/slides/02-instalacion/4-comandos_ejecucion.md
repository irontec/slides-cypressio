### Comandos de ejecución

En el apartado de scripts de package.json de nuestro proyecto

```typescript
{
   "scripts": 
  {
    "cy:open": "cypress open",
    "cy:run": "cypress run --browser chrome"
  }
}
```

Ahora será más fácil ejecutar nuestros tests.
```typescript
npm run cy:open 

npm run cy:run 
```
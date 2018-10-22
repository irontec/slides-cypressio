### 10.1 Routing

cy.server()
```typescript
cy.server()
```

cy.route()
```typescript
cy.route('GET', '/users').as('postUser')
```

cy.request()
```typescript
cy.request({
  method: 'POST',
  url: '/login_with_form', // desde baseUrl 
  body: {
    username: 'jane.lane',
    password: 'password123'
  }
})
```
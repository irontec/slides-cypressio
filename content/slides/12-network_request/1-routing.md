### Routing

https://docs.cypress.io/guides/guides/network-requests.htm

* cy.server(): Inicia el servidor para comenzar a enrutar las respuestas de cy.route () o cy.request ().

```typescript
cy.server()
```

* cy.route(): administra el comportamiento de las solicitudes de red.

```typescript
cy.route('GET', '/users').as('postUser')
```

* cy.request(): solicitud HTTP.

```typescript
cy.request({
  method: 'POST',
  url: '/login_with_form', // desde la baseUrl 
  body: {
    username: 'jane.lane',
    password: 'password123'
  }
})
```
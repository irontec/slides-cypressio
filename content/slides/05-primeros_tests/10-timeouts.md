### Timeouts 

Cypress no hard-codea las esperas.

* 4 segundos para encontrar un elemento en el DOM.
* 4 segundos para pasar una aserción.
* 60 segundos para un PAGE LOAD.

Se puede aumentar los tiempos de espera

```typescript
cy.get('.mobile-nav', { timeout: 10000 })
```


Aplicaciones lentas:  https://www.cypress.io/blog/2018/02/05/when-can-the-test-start/#Conclusion

https://docs.cypress.io/guides/references/configuration.html#Timeouts

https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Timeouts






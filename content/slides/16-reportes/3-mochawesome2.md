### Mochawesome (II)

En el fichero "cypress.json" especificamos el reporter:

```typescript
"reporter": "mochawesome"
```

Añadimos opciones:

```json
"reporterOptions": {
        "overwrite": false,
        "reportDir": "reports",
        "reportFilename": "Report",
        "code": "false"
    }
```
https://www.npmjs.com/package/mochawesome-report-generator


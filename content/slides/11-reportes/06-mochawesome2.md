## MOCHAWESOME

En el fichero "cypress.json" especificamos el reporter:

```
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
### Estructura del test

Prestados de Mocha.

describe() y context(): agrupación de alto nivel

```typescript
describe('General test name', function()=>{ })
context('General test name', function()=>{ })
```

it() y specify(): casos de test

```typescript
it('Test name', function()=> { })
specify('Test name', function()=> { })
```
Excluir o inlcuir tests con .skip() y .only()

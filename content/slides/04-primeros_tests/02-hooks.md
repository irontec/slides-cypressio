### 4.2. Estructura del test

Hooks

```typescript
 describe('Hooks', function() {
  before(function() {
    // antes del bloque de tests
  })

  after(function() {
    // después del bloque de tests
  })

  beforeEach(function() {
    // antes de cada test
  })

  afterEach(function() {
    // después de cada test
  })
})
```
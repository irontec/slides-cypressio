### Estructura del test: Hooks

* before(): se ejecuta antes del bloque de tests.
```typescript
describe('Hooks', function() {
before(function() {
  // Código
})
```
* after(): se ejecuta después del bloque de tests.
```typescript
after(function() {
  // Código
})
```
* beforeEach(): se ejecuta antes de cada test.
```typescript
beforeEach(function() {
  // Código
})
```
* afterEach(): se ejecuta después de cada test.
```typescript
afterEach(function() {
  // Código
})
```

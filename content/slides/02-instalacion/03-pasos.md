### 1.2. Pasos a seguir

En el mismo proyecto o en un proyecto independiente 
```ts
cd /your/project/path

npm install cypress --save-dev
```
Creamos el fichero `package.json` 
```json
{
 "scripts": {
   "cy:open": "cypress open",
   "cy:run": "cypress run"
 }
}
```
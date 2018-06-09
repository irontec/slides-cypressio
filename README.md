# Revel.js webpack starter

A simple 

## Usage

Clone this proyect and change the **./content** directory: 

* Edit _config.json_

* Add slides and index them on config.json.

* Add your media files to be added on the bundle.

* Edit your custom css on _content/css/index.scss_.


```json
{
  "title": "🦄 Irontec reveal.js - webpack starter demo 🦄",
  "options": {
    "controls": true,
    "progress": true,
    "history": true,
    "center": true,
    "slideNumber": false,
    "touch": true,
    "hideAddressBar": true,
    "mouseWheel": true
  },
  "slides": [
    {"path": "index.md", "attrs": {"class":"intro"}},
    [
        "subcontent/01.md",
        "subcontent/02.md"
    ],
    "end.html"
  ]
}
```


## Development time


```bash
npm start
```

Will open a dev-server on http://localhost:8080


## Bundle time

```bash
npm run build
```

Will create a build on _./dist/_.


# TODO

* npm init
* Support for more plugins
* ¿Support for custom themes?
* ¿Auto publish on github/gitlab pages?
* ¿generate a SEO friendly dist? 




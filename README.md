# jspm-boilerplate
my boilerplate, using jspm

install jspm if you haven't, globally.

run jspm install to get babel and sistemjs dependencies.

open config.js and change the path to this
```
paths: {
  "github:*": "./../jspm_packages/github/*",
  "npm:*": "./../jspm_packages/npm/*"
},
```
This is because we keep the index in the dist folder. jspm install reset this
to default values, so need to updated.

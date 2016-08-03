# jspm-boilerplate
my boilerplate, using jspm

install jspm if you haven't, globally.

run
`jspm init`
to install all dependencies.
if you need to change the folder structure run
`jspm init -p`

run
`make dev-build` to build for dev
`make prod-build` to build for production

`make dev-watch` to run a server and watch for dev files
`make prod-watch` to run a server and watch and re-bundle for production (all minified)

**TODO WIP***
`make devbundle-watch` to run a server with bundle, speed up the page start 

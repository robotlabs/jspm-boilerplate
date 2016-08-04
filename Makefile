default: dev-watch
scriptBaseURL := ./src/js/scripts/script-
scriptDestURL := ./dist/js/script.js

build:
	$(MAKE) clean
	$(MAKE) html
	# define which script to copy on head. script-dev OR script-prod, depending from 'm'
	cp $(scriptBaseURL)$(m).js $(scriptDestURL)
	# call dev-css / prod-css
	$(MAKE) build-css

ifeq ($(m),prod)
	$(MAKE) build-js
endif

watch:
	$(MAKE) build
	npm run $(m)-watch-js &
	npm run watch-css &
	npm run serve

build-js:
	jspm bundle-sfx src/js/app/app dist/js/bundle.js --minify

html:
	cp ./src/html/index.html ./dist/index.html

build-css:
	npm run $(m)-css-pre
	npm run $(m)-css-post
ifeq ($(m),prod)
	npm run css-mini
	- rm -r dist/css/styles.css
endif

clean:
	- rm -r dist
	mkdir dist
	mkdir dist/js

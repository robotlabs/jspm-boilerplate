default: dev-watch

dev-build:
	$(MAKE) clean
	$(MAKE) html
	$(MAKE) dev-css
	cp ./src/js/scripts/script-dev.js ./dist/js/script.js

devbundle-build:
	$(MAKE) clean
	$(MAKE) html
	$(MAKE) dev-css
	$(MAKE) build-dev-js
	cp ./src/js/scripts/script-dev.js ./dist/js/script.js

prod-build:
	$(MAKE) clean
	$(MAKE) html
	$(MAKE) prod-css
	$(MAKE) build-js
	cp ./src/js/scripts/script-prod.js ./dist/js/script.js

dev-watch:
	$(MAKE) dev-build
	npm run dev-watch

devbundle-watch:
	$(MAKE) devbundle-build
	npm run devbundle-watch

prod-watch:
	$(MAKE) prod-build
	npm run prod-watch

build-dev-js:
	jspm bundle src/js/app/app dist/js/bundle.js

build-js:
	jspm bundle-sfx src/js/app/app dist/js/bundle.js --minify

html:
	cp ./src/html/index.html ./dist/index.html

dev-css:
	npm run dev-css

prod-css:
	npm run prod-css
	- rm -r dist/css/styles.css

clean:
	- rm -r dist
	mkdir dist
	mkdir dist/js

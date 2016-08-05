default: dev-watch
scriptBaseURL := ./src/js/scripts/script-
scriptDestURL := ./dist/js/script.js

vendors:


build:
	$(MAKE) clean
	$(MAKE) html
ifeq ($(q),release)
	npm run vendors
else
	npm run vendors-min
endif
	# define which script to copy on head. script-dev OR script-prod, depending from 'm'
	cp $(scriptBaseURL)$(m).js $(scriptDestURL)
	$(MAKE) build-css

ifeq ($(m),prod)
	$(MAKE) build-js
ifeq ($(q),release)
	npm run uglify-vendor
	- rm -r dist/js/vendor.js
endif
endif

watch:
	$(MAKE) build
	npm run $(m)-watch-js &
	npm run watch-css &
	npm run serve

build-js:
ifeq ($(q),release)
	jspm bundle-sfx src/js/app/app dist/js/bundle.min.js --minify --skip-source-maps
else
	jspm bundle-sfx src/js/app/app dist/js/bundle.min.js
endif

html:
	cp ./src/html/index.html ./dist/index.html

build-css:
ifeq ($(q),release)
	npm run $(m)-css-pre
	npm run $(m)-css-post
	npm run css-mini
	- rm -r dist/css/styles.css
else
	npm run dev-css-pre
	npm run dev-css-post
endif

clean:
	- rm -r dist
	mkdir dist
	mkdir dist/js

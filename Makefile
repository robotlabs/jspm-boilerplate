default: dev

clean:
	- rm -r dist
	mkdir dist
	mkdir dist/js

build:
	$(MAKE) clean
	cp ./src/html/index.html ./dist/index.html
	cp ./src/js/scripts/script-dev.js ./dist/js/script.js

build-2:
	$(MAKE) clean
	cp ./src/html/index.html ./dist/index.html
	cp ./jspm_packages/system.js ./dist/js/system.js
	cp ./config.js ./dist/js/config.js
	cp ./src/js/script.js ./dist/js/script.js
	cp ./src/js/test.js ./dist/js/test.js
	cp ./src/js/es6-promise.js ./dist/js/es6-promise.js
	jspm bundle src/js/app dist/js/bundle.js

build-dev:
	$(MAKE) clean
	cp ./src/html/index.html ./dist/index.html
	jspm bundle-sfx src/app dist/js/app.js

build2:
	$(MAKE) clean
	jspm bundle-sfx src/app dist/js/app.js
	$(MAKE) serve

production:
	$(MAKE) clean
	cp ./src/html/index.html ./dist/index.html
	cp ./src/js/script-production.js ./dist/js/script.js
	jspm bundle-sfx src/js/app dist/js/bundle.js --minify

production-x:
	$(MAKE) clean
	node-sass app/css -o dist/css/ --output-style compressed
	cp ./src/js/script-production.js ./dist/js/script.js
	jspm bundle-sfx app/index dist/js/app.js --minify

serve:
	browsersync dist/

SystemJS.config({
  browserConfig: {
    "bundles": {
      "dist/js/bundle.min.js": [
        "src/js/app/app.js",
        "src/js/app/mod-1.js"
      ]
    }
  }
});

SystemJS.config({
  packageConfigPaths: [],
  map: {},
  packages: {}
});

SystemJS.config({
  browserConfig: {
    "baseURL": ".",
    "paths": {
      "npm:": "/jspm_packages/npm/",
      "github:": "/jspm_packages/github/"
    },
    "bundles": {
      "dist/js/bundle.min.js": [
        "src/js/app/app.js",
        "src/js/app/mod-1.js"
      ]
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "github:": "jspm_packages/github/"
    }
  },
  devConfig: {
    "map": {
      "core-js": "npm:core-js@1.2.7",
      "babel": "npm:babel-core@5.8.38",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "process": "github:jspm/nodelibs-process@0.2.0-alpha",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.13"
    }
  },
  transpiler: "plugin-babel"
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "gsap": "npm:gsap@1.19.0"
  },
  packages: {}
});

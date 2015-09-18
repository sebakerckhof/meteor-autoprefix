Package.describe({
  name: "seba:autoprefix",
  summary: "Meteor 1.2+ package to autoprefix your css files.",
  version: '0.0.1',
  git: "https://github.com/sebakerckhof/meteor-autoprefix",
  documentation: "README.md"
});

Package.registerBuildPlugin({
  name: "Autoprefixer",
  sources: [
    "plugin/handler.js"
  ],
  use: ['caching-compiler', 'ecmascript', 'html-tools@1.0.4'],
  npmDependencies : {
    'autoprefixer' : '6.0.3'
  }
});

Package.onUse(function (api) {
  api.use(["meteor", 'isobuild:compiler-plugin@1.0.0']);
});

Package.onTest(function (api) {
  api.use('sanjo:jasmine@0.13.6');
  api.use(["meteor", "netanelgilad:angular2-typescript"]);

  // specs
  api.addFiles([
    'tests/tests.spec.js'
  ], 'client');

  // app to test
  api.addFiles([
    "tests/client/index.html",
    "tests/client/app.ts"
  ], "client");
});
  
  
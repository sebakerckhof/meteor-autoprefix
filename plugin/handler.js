const path = Plugin.path;
const fs = Plugin.fs;
const Future = Npm.require('fibers/future');
const autoprefixer = Npm.require('autoprefixer');
const postcss = Npm.require('postcss');

const prefixer = postcss([ autoprefixer ]);

Plugin.registerCompiler({
  extensions: ['css']
}, () => new AutoprefixCompiler());

class AutoprefixCompiler extends CachingCompiler {
  constructor() {
    super({
      compilerName: 'Autoprefixer',
      defaultCacheSize: 1024 * 1024 * 10
    });
  }

  getCacheKey(inputFile) {
    return inputFile.getSourceHash();
  }

  compileResultSize(compileResult) {
    return compileResult.length
      + this.sourceMapSize(compileResult.sourceMap);
  }

  compileOneFile(inputFile) {
    const f = new Future;

    prefixer
      .process(inputFile.getContentsAsString(), { from: inputFile.getPathInPackage(), to: file.getDisplayPath() })
      .then(function (result) {f.return(result);},function(err){f.throw(err);});
    var result = f.wait();

    const compileResult = {css: result.css, sourceMap: result.map};
    return compileResult;
  }

  addCompileResult(inputFile, compileResult) {
    inputFile.addStylesheet({
      data:  compileResult.css,
      path: inputFile.getPathInPackage() + '.css',
      sourceMap:  compileResult.sourceMap
    });
  }
}
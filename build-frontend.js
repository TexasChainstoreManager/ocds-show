#!/usr/bin/env node

var nunjucks = require('nunjucks')
var program = require('commander');
var fs = require('fs');
var watch = require('watch');
var path = require('path');
var release = require(path.join(__dirname, 'release_json', 'test_conversion.json'));

program
  .option('-w --watch')
  .parse(process.argv);

template_folder = path.join(__dirname, 'templates');
example_folder = path.join(__dirname, 'example');

release_jsonp = 'example_release = ' + JSON.stringify(release, null, 2);

opts = {"include": ['\\.html$', '\\.jinja$']};
fs.writeFile(path.join(__dirname, 'templates.js'), nunjucks.precompile(template_folder, opts))
fs.writeFile(path.join(example_folder, 'release.jsonp'), release_jsonp);
if (program.watch) {
   watch.watchTree(template_folder, {'interval': 0.1}, function (f, curr, prev) {
     fs.writeFile(path.join(__dirname, 'templates.js'),
       nunjucks.precompile(template_folder, opts))
   });
}

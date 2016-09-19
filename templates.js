(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["award.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"award-";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += "\" class=\"panel panel-default\">\n  <h3 class=\"panel-heading\"> (Award ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"id"), env.opts.autoescape);
output += ") </h3>\n  <div class=\"panel-body\">\n    Amount ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"currency"), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "award")),"value")),"amount"), env.opts.autoescape);
output += " \n  <div>\n</section>\n\n\n\n\n\n\n\n\n\n\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["awards.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"awards\" class=\"panel panel-default\">\n\n<h2 class=\"panel-heading\"> Awards </h2>\n\n<div class=\"panel-body\">\nContent\n";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "awards");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("award", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
env.getTemplate("award.html", false, "awards.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
})});
}
}
frame = frame.pop();
output += "\n</div>\n\n</section>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base_html.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<!doctype html>\n<html class=\"no-js\" lang=\"\">\n    <head>\n        <meta charset=\"utf-8\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n        <title> </title>\n        <meta name=\"description\" content=\"\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n        <link rel=\"stylesheet\" href=\"/static/css/normalize.min.css\">\n        <link rel=\"stylesheet\" href=\"/static/css/bootstrap.min.css\">\n        <link rel=\"stylesheet\" href=\"/static/css/custom.css\">\n\n    </head>\n    <body>\n\n";
env.getTemplate("release.html", false, "base_html.html", null, function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
t_1.render(context.getVariables(), frame, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
output += t_2
output += "\n\n    </body>\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["buyer.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
if(runtime.contextOrFrameLookup(context, frame, "buyer")) {
output += "\n\t<aside id=\"buyer\" class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">\n\t\t\t\t<h2>\n\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Buyer"), env.opts.autoescape);
output += "\n\t\t\t\t</h2>\n\t\t\t</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<h2>\n\t\t\t\t\t<small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"name"), env.opts.autoescape);
output += "</small>\n\t\t\t\t</h2>\n\t\t\t\t<p>\n\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")) {
output += "\n\t\t\t\t\t\t<div id=\"contactPoint\" class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Contact Point"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"name")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"name"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"email")) {
output += "\n\t\t\t\t\t\t\t\t\t<a href=\"mailto:";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"email"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"email"), env.opts.autoescape);
output += "</a><br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"telephone")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Phone: "), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"telephone"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"faxNumber")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Fax: "), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"faxNumber"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"url")) {
output += "\n\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"contactPoint")),"url"), env.opts.autoescape);
output += "</a><br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t<div id=\"contactPoint\" class=\"panel panel-warning\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Contact Point"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No contact data provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")) {
output += "\n\t\t\t\t\t\t<div id=\"address\" class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Address"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"streetAddress")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"streetAddress"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"locality")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"locality"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"region")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"region"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"postalCode")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"postalCode"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"countryName")) {
output += "\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"address")),"countryName"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t<div id=\"address\" class=\"panel panel-warning\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Address"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No address data provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")) {
output += "\n\t\t\t\t\t\t<div id=\"identifier\" class=\"panel panel-default\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Identifiers"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Scheme"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Identifer"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Legal Name"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"scheme"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"id"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"identifier")),"legalName"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"additionalIdentifiers")) {
output += "\n\t\t\t\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "buyer")),"additionalIdentifiers");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("identifier", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"scheme"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"legalName"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t<div id=\"identifier\" class=\"panel panel-warning\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Identifers"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No identifier data provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
;
}
output += "\n\t\t\t\t</p>\n\t\t\t</div>\n\t</aside>\n";
;
}
else {
output += "\n\t<aside id=\"buyer\" class=\"panel panel-danger\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h2>\n\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No Buyer data provided"), env.opts.autoescape);
output += "\n\t\t\t</h2>\n\t\t</div>\n\t</aside>\n";
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["contracts.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"contracts\" class=\"panel panel-default\">\n  <h2 class=\"panel-heading\">\n    Contracts\n  </h2>\n  <div class=\"panel-body\">\n\tContent\n  </div>\n</section>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["documents.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "documents")) > 0) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">\n\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Documents"), env.opts.autoescape);
output += "\n\t\t</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "documents")) > 0) {
output += "\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Title"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Type"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Description"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Date published"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Date modified"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Format"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Language"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "documents");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("document", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t\t\t\t\t<tr> <!-- add conditional colouring based on presence of url? -->\n\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"type"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((t_4),"datePublished"),10,true,""), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((t_4),"dateModified"),10,true,""), env.opts.autoescape);
output += "</td> <!-- add time hover over? -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"format"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"language"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t";
;
}
else {
output += "\n\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No documents provided"), env.opts.autoescape);
output += "\n\t\t";
;
}
output += "\n\t</div>\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["items.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-";
if((env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "items"))) > 0) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t<div class=\"panel-heading\">\n\t\t<h3 class=\"panel-title\">\n\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Items"), env.opts.autoescape);
output += "\n\t\t</h3>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t";
if(env.getFilter("length").call(context, runtime.contextOrFrameLookup(context, frame, "items")) > 0) {
output += "\n\t\t\t<table class=\"table table-striped\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "ID"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Description"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Classification"), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Scheme - ID"), env.opts.autoescape);
output += ")</small></th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Quantity"), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Unit"), env.opts.autoescape);
output += ")</small></th>\n\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Value per unit"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "items");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</td>\t<!-- need to consider whether to present the id - make sure this is consistent with documents approach -->\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"description"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t(<a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"scheme"), env.opts.autoescape);
output += "</a> -\n\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"uri")) {
output += "\n\t\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"id"), env.opts.autoescape);
output += "</a>)\n\t\t\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"id"), env.opts.autoescape);
output += ")\n\t\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((t_4),"additionalClassifications")) {
output += "\n\t\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),"additionalClassifications");
if(t_7) {var t_6 = t_7.length;
for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("classification", t_8);
frame.set("loop.index", t_5 + 1);
frame.set("loop.index0", t_5);
frame.set("loop.revindex", t_6 - t_5);
frame.set("loop.revindex0", t_6 - t_5 - 1);
frame.set("loop.first", t_5 === 0);
frame.set("loop.last", t_5 === t_6 - 1);
frame.set("loop.length", t_6);
output += "\n\t\t\t\t\t\t\t\t\t\t<br>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"description"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t\t\t<small>\n\t\t\t\t\t\t\t\t\t\t\t(<a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#item-classification-scheme\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"scheme"), env.opts.autoescape);
output += "</a> -\n\t\t\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((t_8),"uri")) {
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"classification")),"uri"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id"), env.opts.autoescape);
output += "</a>)\n\t\t\t\t\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id"), env.opts.autoescape);
output += ")\n\t\t\t\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t\t\t</small>\n\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"quantity"), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"name"), env.opts.autoescape);
output += ")</small></td>\n\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value")),"amount")), env.opts.autoescape);
output += " ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((t_4),"unit")),"value")),"currency"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t";
;
}
else {
output += "\n\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No items provided"), env.opts.autoescape);
output += "\n\t\t";
;
}
output += "\n\t</div>\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["organization.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div class=\"panel panel-default\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h2>\n\t\t\t\t";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += " \n\t\t\t</h2>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t<h2>\n\t\t\t\t<small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"name"), env.opts.autoescape);
output += "</small>\n\t\t\t</h2>\n\t\t\t<p>\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")) {
output += "\n\t\t\t\t\t<div id=\"contactPoint\" class=\"panel panel-default\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Contact Point"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"name")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"name"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email")) {
output += "\n\t\t\t\t\t\t\t\t<a href=\"mailto:";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email"), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"email"), env.opts.autoescape);
output += "</a><br>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"telephone")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Phone: "), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"telephone"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"faxNumber")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Fax: "), env.opts.autoescape);
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"faxNumber"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url")) {
output += "\n\t\t\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"contactPoint")),"url"), env.opts.autoescape);
output += "</a><br>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t<div id=\"contactPoint\" class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Contact Point"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No contact data provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")) {
output += "\n\t\t\t\t\t<div id=\"address\" class=\"panel panel-default\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Address"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"streetAddress")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"streetAddress"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"locality")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"locality"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"region")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"region"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"postalCode")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"postalCode"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"countryName")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"address")),"countryName"), env.opts.autoescape);
output += " <br>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t<div id=\"address\" class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Address"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No address data provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")) {
output += "\n\t\t\t\t\t<div id=\"identifier\" class=\"panel panel-default\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Identifiers"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<table class=\"table table-striped\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Scheme"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Identifer"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t\t\t\t<th>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Legal Name"), env.opts.autoescape);
output += "</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"scheme"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"id"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"identifier")),"legalName"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers")) {
output += "\n\t\t\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "organization")),"additionalIdentifiers");
if(t_3) {var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("identifier", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"http://standard.open-contracting.org/latest/en/schema/codelists/#organization-identifier-scheme\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"scheme"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id"), env.opts.autoescape);
output += "</td>\n\t\t\t\t\t\t\t\t\t\t\t\t<td><a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uri"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"legalName"), env.opts.autoescape);
output += "</a></td>\n\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t<div id=\"identifier\" class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Identifers"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No identifier data provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</p>\n\t\t</div>\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["planning.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"planning\" class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t\t<h2>\n\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Planning"), env.opts.autoescape);
output += "\n\t\t</h2>\n\t</div>\n\t<div class=\"panel-body\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Budget amount"), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "ID"), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"amount")), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"amount")),"currency"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Budget amount not provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id")) {
output += "\n\t\t\t\t\t\t\t\t<small>(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"id"), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<small class=\"bg-warning\">(";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Budget ID not provided"), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Budget description"), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Source"), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"description"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Budget description not provided."), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source")) {
output += "\n\t\t\t\t\t\t\t\t<small>(<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"source"), env.opts.autoescape);
output += "\" target=\"_blank\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Budget source"), env.opts.autoescape);
output += "</a>)</small>\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<small class=\"bg-warning\">(";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Budget source not provided"), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Rationale"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"rationale"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Budget rationale not provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project") && runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"projectID")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Project information"), env.opts.autoescape);
output += " <small>(";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "ID"), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"project"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Project name not provided."), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"projectID")) {
output += "\n\t\t\t\t\t\t\t<small>(";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"budget")),"projectID"), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<small class=\"bg-warning\">(";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Project ID not provided"), env.opts.autoescape);
output += ")</small>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"documents")) {
output += "\n\t\t\t\t\t";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "planning")),"documents");
frame.set("documents", t_1, true);
if(frame.topLevel) {
context.setVariable("documents", t_1);
}
if(frame.topLevel) {
context.addExport("documents", t_1);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "planning.html", null, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
t_2.render(context.getVariables(), frame, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
output += t_3
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Documents"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No documents provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["release.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<header class=\"row\">\n\t<div class=\"col-md-12\">\n\t\t<div class=\"panel-group\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h1>\n\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"title"), env.opts.autoescape);
output += " <small><a data-toggle=\"collapse\" href=\"#metadata\">(hide metadata)</a></small>\n\t\t\t\t\t</h1>\n\t\t\t\t</div>\n\t\t\t\t<div id=\"metadata\" class=\"panel-collapse collapse in\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>OCID: </strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ocid"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Release ID: </strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Date: </strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "date"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Tags: </strong>\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.contextOrFrameLookup(context, frame, "tag"),", "), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<strong>Initiation type: </strong>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "initiationType"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</header>\n<main class=\"row\">\n\t<div class=\"col-md-8\">\n\t\t";
if(runtime.contextOrFrameLookup(context, frame, "planning")) {
output += "\n\t\t\t";
env.getTemplate("planning.html", false, "release.html", null, function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
t_1.render(context.getVariables(), frame, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
output += t_2
output += "\n\t\t";
})});
}
else {
output += "\n\t\t\t<div class=\"panel panel-danger\"> <!-- make the panel behaviour dependent on the release tags, e.g. if planning is present in the release tags this should be danger, otherwise make it collapse -->\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h2 class=\"panel-title\">\n\t\t\t\t\t\tNo planning data provided\n\t\t\t\t\t</h2>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
;
}
output += "\n\t\t";
env.getTemplate("tender.html", false, "release.html", null, function(t_7,t_5) {
if(t_7) { cb(t_7); return; }
t_5.render(context.getVariables(), frame, function(t_8,t_6) {
if(t_8) { cb(t_8); return; }
output += t_6
output += "\n\t\t";
env.getTemplate("awards.html", false, "release.html", null, function(t_11,t_9) {
if(t_11) { cb(t_11); return; }
t_9.render(context.getVariables(), frame, function(t_12,t_10) {
if(t_12) { cb(t_12); return; }
output += t_10
output += "\n\t\t";
env.getTemplate("contracts.html", false, "release.html", null, function(t_15,t_13) {
if(t_15) { cb(t_15); return; }
t_13.render(context.getVariables(), frame, function(t_16,t_14) {
if(t_16) { cb(t_16); return; }
output += t_14
output += " \t\t\n\t</div>\n\t<div class=\"col-md-4\">\n\t\t";
var t_17;
t_17 = runtime.contextOrFrameLookup(context, frame, "buyer");
frame.set("organization", t_17, true);
if(frame.topLevel) {
context.setVariable("organization", t_17);
}
if(frame.topLevel) {
context.addExport("organization", t_17);
}
output += "\n\t\t";
var t_18;
t_18 = "Buyer";
frame.set("title", t_18, true);
if(frame.topLevel) {
context.setVariable("title", t_18);
}
if(frame.topLevel) {
context.addExport("title", t_18);
}
output += "\n\t\t";
env.getTemplate("organization.html", false, "release.html", null, function(t_21,t_19) {
if(t_21) { cb(t_21); return; }
t_19.render(context.getVariables(), frame, function(t_22,t_20) {
if(t_22) { cb(t_22); return; }
output += t_20
output += "\n\t</div>\n</main>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["tender.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<section id=\"tender\" class=\"panel panel-default\">\n\t<div class=\"panel-heading\">\n\t\t<h2>Tender</h2>\n\t</div>\n  \n  \t\t<!-- outstanding fields\n\t\t\n\t\tprocuringEntity [organisation]\n\t\t\n\t\tnumberOfTenderers\n\t\ttenderers [organisations]\n\n\t\tmilestones []\n\t\t\n\t\t-->\n\t\t\n\t\t<!-- also need to add error handling for all fields -->\n\t\t\n\t\t<!-- is there a way we can reference codelist titles and descriptions? Using a custom filter or function -->\n\t\t\n\t\t<!-- should i go through and add elif field|length == 0 then warning ?-->\n\t\n\t<div class=\"panel-body\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Description"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"description"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No description provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Status"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"status"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No status provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount") || runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Value"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<strong>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Lower: "), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"amount")), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"minValue")),"currency"), env.opts.autoescape);
output += "</small>\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No minimum value provided"), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t<p><strong>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Upper: "), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("currency").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"amount")), env.opts.autoescape);
output += " <small>";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"value")),"currency"), env.opts.autoescape);
output += "</small></p>\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No value provided"), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Eligibility criteria"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"eligibilityCriteria"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No eligibility criteria provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Key Dates"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\t<!-- add time hover over? -->\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Tender start: "), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No start date provided"), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Tender end: "), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"tenderPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No end date provided"), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Award start: "), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No start date provided"), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\t\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Award end: "), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No end date provided"), env.opts.autoescape);
output += "<span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Enquiries"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries") == false) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "There have been no enquiries regarding this tender"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"hasEnquiries")) {
output += "\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "There have been enquiries regarding this tender"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No information on enquiries provided"), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t";
;
}
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Enquiries start: "), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"startDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No start date provided"), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<strong>";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Enquiries end: "), env.opts.autoescape);
output += "</strong>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("truncate").call(context, runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"enquiryPeriod")),"endDate"),10,true,""), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No end date provided"), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Procurement method"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod")) {
output += "\n\t\t\t\t\t\t\t<h4>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethod"), env.opts.autoescape);
output += "</h4>\t<!-- set up a filter or function to convert between codelist values and titles -->\n\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t<h4>No procurement method provided</h4>\n\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"procurementMethodRationale"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No rationale provided"), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Award criteria"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteria"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No award criteria provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"awardCriteriaDetails"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No award criteria details provided"), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-4\">\n\t\t\t\t<div class=\"panel panel-";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod")) {
output += "default";
;
}
else {
output += "warning";
;
}
output += "\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Submission method"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("join").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethod"),", "), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No submission method provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails")) {
output += "\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"submissionMethodDetails"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t";
;
}
else {
output += "\n\t\t\t\t\t\t\t\t<span class=\"bg-warning\">";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No submission method details provided"), env.opts.autoescape);
output += "</span>\n\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"items")) {
output += "\n\t\t\t\t\t";
var t_1;
t_1 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"items");
frame.set("foo", t_1, true);
if(frame.topLevel) {
context.setVariable("foo", t_1);
}
if(frame.topLevel) {
context.addExport("foo", t_1);
}
output += "\n\t\t\t\t\t";
env.getTemplate("items.html", false, "tender.html", null, function(t_4,t_2) {
if(t_4) { cb(t_4); return; }
t_2.render(context.getVariables(), frame, function(t_5,t_3) {
if(t_5) { cb(t_5); return; }
output += t_3
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Items"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No items provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents")) {
output += "\n\t\t\t\t\t";
var t_6;
t_6 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "tender")),"documents");
frame.set("documents", t_6, true);
if(frame.topLevel) {
context.setVariable("documents", t_6);
}
if(frame.topLevel) {
context.addExport("documents", t_6);
}
output += "\n\t\t\t\t\t";
env.getTemplate("documents.html", false, "tender.html", null, function(t_9,t_7) {
if(t_9) { cb(t_9); return; }
t_7.render(context.getVariables(), frame, function(t_10,t_8) {
if(t_10) { cb(t_10); return; }
output += t_8
output += "\n\t\t\t\t";
})});
}
else {
output += "\n\t\t\t\t\t<div class=\"panel panel-warning\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "Documents"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("gettext").call(context, "No documents provided"), env.opts.autoescape);
output += "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t";
;
}
output += "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

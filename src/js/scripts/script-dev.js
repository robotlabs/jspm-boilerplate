if (isIE()) {
    var scriptIE = document.createElement('script')
    scriptIE.src = './../src/js/scripts/ie/es6-promise.js';
    scriptIE.type = "text/javascript";
    scriptIE.async = false;
    document.getElementsByTagName('head')[0].appendChild(scriptIE);
}
var scriptVendor = document.createElement('script')
scriptVendor.src = './js/vendor.min.js';
scriptVendor.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(scriptVendor);

var script;
scriptVendor.onload = function() {
    script = document.createElement('script')
    script.src = './../jspm_packages/system.js';
    script.type = "text/javascript";
    document.getElementsByTagName('head')[0].appendChild(script);
    script.onload = function() {
            var script2 = document.createElement('script')
            script2.src = './../config.js';
            script2.type = "text/javascript";
            // script2.async = false;
            document.getElementsByTagName('head')[0].appendChild(script2);
            script2.onload = function() {
                //**System import app, and THEN, when ready, call start. if you let app call start when onload sourcemaps won't work
                System.import('./../src/js/app/app.js').then(function(app) {
                    app.start();
                });

            };
    };
}

//** utils to check if to add promise polyfill ( without IE and jspm doesn't get along too much)
function isIE(userAgent) {
  userAgent = userAgent || navigator.userAgent;
  return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
}

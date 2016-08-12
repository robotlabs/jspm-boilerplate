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
    var scriptSystem = document.createElement('script')
    scriptSystem.src = './../jspm_packages/system.js';
    scriptSystem.type = "text/javascript";
    document.getElementsByTagName('head')[0].appendChild(scriptSystem);
    scriptSystem.onload = function() {
        var scriptConfig = document.createElement('script')
        scriptConfig.src = './../config.js';
        scriptConfig.type = "text/javascript";
        document.getElementsByTagName('head')[0].appendChild(scriptConfig);
        scriptConfig.onload = function() {
            console.log(':: DEV');
            System.import('./../src/js/app/app.js').then(function(app) {
                app.start();
            });
        }
    }
}

//** utils to check if to add promise polyfill ( without IE and jspm doesn't get along too much)
function isIE(userAgent) {
  userAgent = userAgent || navigator.userAgent;
  return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
}

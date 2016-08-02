if (isIE()) {
    var scriptIE = document.createElement('script')
    scriptIE.src = './../src/js/scripts/ie/es6-promise.js';
    scriptIE.type = "text/javascript";
    script2.async = false;
    document.getElementsByTagName('head')[0].appendChild(scriptIE);
}

var script = document.createElement('script')
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
            console.log('lets start :', window.System);
            System.import('./../src/js/app/app.js');
        };
};

//** utils to check if to add promise polyfill ( without IE and jspm doesn't get along too much)
function isIE(userAgent) {
  userAgent = userAgent || navigator.userAgent;
  return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
}

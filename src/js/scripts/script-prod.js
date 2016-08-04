var script = document.createElement('script')
script.src = './js/vendor.min.js';
script.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(script);

script.onload = function() {
    var scriptBundle = document.createElement('script')
    scriptBundle.src = './js/bundle.min.js';
    scriptBundle.type = "text/javascript";
    document.getElementsByTagName('head')[0].appendChild(scriptBundle);
}

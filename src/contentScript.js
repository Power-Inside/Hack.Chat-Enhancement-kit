function injectScript(file) {
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    document.body.appendChild(s);
}

function injectStyle(file) {
    var s = document.createElement('link');
    s.setAttribute('id', 'scheme-link');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('href', file);
    document.head.appendChild(s);
}

injectScript(chrome.extension.getURL('src/main.user.js'));
injectStyle(chrome.extension.getURL('style/custom.css'));

//link#scheme-link(rel="stylesheet", href="/schemes/atelier-dune.css")

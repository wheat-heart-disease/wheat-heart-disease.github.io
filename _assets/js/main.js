// Open links in a new tab
var links = document.links;

for (var i = 0, linksCount = links.length; i < linksCount; i++) {
    links[i].target = '_blank';
}


// A click on a element with class "easy-select" highlights it entirely
document.body.addEventListener('click', easySelect, false);

function easySelect(event) {
    var element = event.target;

    if (element.className.match(/easy-select/)) {
        var selection = window.getSelection();
        selection.removeAllRanges();

        var range = document.createRange();
        range.selectNodeContents(element);
        selection.addRange(range);
    }
}


// External scripts list
var scripts = [
    {
        src: '//www.google-analytics.com/analytics.js',
        callback: function() {
            ga('create', 'UA-47027197-2', 'wheat-heart-disease.github.io');
            ga('send', 'pageview');
        }
    },
    {
        src: '//wheat-heart-disease.disqus.com/embed.js'
    },
    {
        src: '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52ca9e8a58663538',
        callback: function() {
            addthis.layers({
                theme: 'gray',
                share: {
                    position: 'left',
                    services: 'facebook,twitter,more'
                },
                follow: {
                    title: 'Follow us:',
                    visible: 'always',
                    services: [
                        {service: 'twitter', id: 'WheatCHD'},
                        {service: 'facebook', id: 'WheatHeartDisease'}
                    ]
                }
            });
        }
    }
];


// External scripts loading
for (var i = 0; i < scripts.length; i++) {
    loadScript(scripts[i]['src'], scripts[i]['callback']);
}

function loadScript(src, callback)
{
    var isReady = false;

    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = src;
    scriptTag.async = true;
    scriptTag.onload = scriptTag.onreadystatechange = function() {
      if (!isReady && (!this.readyState || this.readyState === 'complete')) {
          isReady = true;
          if (callback) {
              callback();
          }
      }
    };
    document.body.appendChild(scriptTag);
}

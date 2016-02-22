# jQuery Sharrre Plugin
Make your sharing widget! Sharrre is a jQuery plugin that allows you to create nice widgets sharing for Facebook, Twitter, Google Plus (with PHP script) and more. More information on [Sharrre](http://sharrre.com/#demos)

# Supported platforms
* Delicious
* Facebook
* Google+
* LinkedIn
* Pinterest
* Stumbleupon
* Twitter Share + Follow ([See counter alternatives](doc/twitter-counter.md))
* Reddit
* Tumblr

# Installing

You can use the jquery.sharrre.min.js file, all platforms are included in it.

If you want a smaller file and only use a limited number of social network, you can use these files from the src/js folder :
* jquery.sharre.js
* platform/platform.js

After that you can choose which platform you need and load them in your project.

# Usage

```javascript
$('#sharrre').sharrre({
    share: {
        googlePlus: true,
        facebook: true,
        twitter: true
    },
    url: 'http://sharrre.com'
});
```

# Example
**HTML**

```html
<div id="demo1" data-title="sharrre" data-url="http://sharrre.com" ></div>
```

**JS**

```javascript
$(document).ready(function(){
    $('#demo1').sharrre({
        share: {
            googlePlus: true,
            facebook: true,
            twitter: true,
            delicious: true
        },
        buttons: {
            googlePlus: {size: 'tall'},
            facebook: {layout: 'box_count'},
            twitter: {count: 'vertical'},
            delicious: {size: 'tall'}
        },
        hover: function(api, options){
            $(api.element).find('.buttons').show();
        },
        hide: function(api, options){
            $(api.element).find('.buttons').hide();
        }
    });
});
```

See example on [official website](http://sharrre.com/#demos)

# Dependencies
* jQuery 1.7
* Registration at [OpenShareCount](http://opensharecount.com) is mandatory if you want to get Twitter share counts via OpenShareCount (now that Twitter is no longer providing them)

# Author
- [Julien Hany](http://hany.fr)
- [Twitter (@_JulienH)](http://twitter.com/_JulienH)
- [Google+](http://plus.google.com/111637545317893682325)

# Contributing

Any help is welcome, if you want some infos on how contribute, see the [CONTRIBUTORS.md](CONTRIBUTORS.md) file.

# License 

The project is distributed under the MIT License
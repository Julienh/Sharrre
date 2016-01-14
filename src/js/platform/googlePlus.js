SharrrePlatform.register("googlePlus", function () {
    defaultSettings = {  //http://www.google.com/webmasters/+1/button/
        url: '',  //if you need to personnalize button url
        urlCount: false,  //if you want to use personnalize button url on global counter
        size: 'medium',
        lang: 'en-US',
        annotation: ''
    };

    return {
        settings: defaultSettings,
        url: "",
        load: function (self) {
            var sett = self.options.buttons.googlePlus;
            //$(self.element).find('.buttons').append('<div class="button googleplus"><g:plusone size="'+self.options.buttons.googlePlus.size+'" href="'+self.options.url+'"></g:plusone></div>');
            $(self.element).find('.buttons').append('<div class="button googleplus"><div class="g-plusone" data-size="' + sett.size + '" data-href="' + (sett.url !== '' ? sett.url : self.options.url) + '" data-annotation="' + sett.annotation + '"></div></div>');
            window.___gcfg = {
                lang: self.options.buttons.googlePlus.lang
            };
            var loading = 0;
            if (typeof gapi === 'undefined' && loading == 0) {
                loading = 1;
                (function () {
                    var po = document.createElement('script');
                    po.type = 'text/javascript';
                    po.async = true;
                    po.src = '//apis.google.com/js/plusone.js';
                    var s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(po, s);
                })();
            }
            else {
                gapi.plusone.go();
            }
        },
        tracking: function () {
        },
        popup: function (opt) {
            window.open("https://plus.google.com/share?hl=" + opt.buttons.googlePlus.lang + "&url=" + encodeURIComponent((opt.buttons.googlePlus.url !== '' ? opt.buttons.googlePlus.url : opt.url)), "", "toolbar=0, status=0, width=900, height=500");
        }
    }
});
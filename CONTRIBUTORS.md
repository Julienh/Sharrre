# Contribution guide

If you want to contribute, here are some tips:

There is a grunt file, so use it anytime you add a feature.

```
# npm install
# grunt &
```

## Adding a platform

If you want to add a platform, just copy an existing one and adapt it.

The base options of a platform are as follow:

* url : The url use to share the plugin, it can be overrident globally or by platform
* urlCount: Override the url method
* count: If set to false, will not call any API to get the count of shares
* popup: {width/height}: the size of the popup

These methods must be implemented:

* settings : Return the platform configuration
* url : The url used to get the share count if available
* trackingAction : {site, action} : Datas sent to analytics
* load : Will be called when displaying the button without template
* tracking: Will be called to track sharing
* popup : Will be called to open a popup when using a template
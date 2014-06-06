meteor-inline-help
==================

This is a simple inline help package for Meteor. 

![Meteor inline help demo](http://i.imgur.com/BE41CYB.gif "Meteor inline help demo")



How to Use
=========
###install it from atmosphere

for versions before Meteor 0.8
```javascript
mrt add inline-help --pkg-version 0.1.5
```
for Meteor 0.8+
```javascript 
mrt add inline-help
```

###Fetch your help information
property message, supports markdown

```javascript 
var helpData = {
  'help-name': {
    title: "Help document title ",
    message: "Help document message", //supports Markdown
    url: "http://YOUR_URL_TO_ADDITIONAL_HELP",
    options: {
      placement: 'right'
    }
  },
  'another-help-name': {
    title: "another help document title ", //supports Markdown
    message: "another help document message",
    url: "http://YOUR_URL_TO_ADDITIONAL_HELP"
  },
}
InlineHelp.initHelp(helpData); 
```
* 'title', 'url' and 'options' are optional parameters 
* you can use [bootstrap popover options](http://getbootstrap.com/javascript/#popovers).  


### Markup
use showHelp handlebars helper 

for versions before Meteor 0.8
```javascript 
{{showHelp 'help-name'}}
```
for Meteor 0.8+
```javascript 
{{>showHelp 'help-name'}}
```


### Styling
* .show-help-icon - if you need to set a custom icon
* .inline-help-popover - wrapped element in bootstrap popover



var _helpInfo = {};
var converter = new Showdown.converter();
InlineHelp = function() {};

Handlebars.registerHelper('showHelp', function() {
  return Template._helpPopover; //InlineHelp.showHelp(helpKey, true);
});

Template._helpPopover.rendered = function(){
  InlineHelp._initPopover( this.data )
};

InlineHelp.initHelp = function(help) {
  _helpInfo = help;
};

InlineHelp.addHelp = function(key, value) {
  _helpInfo[key] = value;
};

InlineHelp._initPopover = function(key) {
  var options = _helpInfo[ key ] && _helpInfo[key].options || {};
  options.placement = options.placement || "auto"
  options.html = true;
  options.template = '<div class="popover inline-help-popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>';
  $('#' + key).popover(options);
};

Handlebars.registerHelper('helpPopoverData', function ( helpKey ){
  if( _helpInfo[ helpKey ] ){
    var data = _helpInfo[ helpKey ];
    data.key = helpKey;
    data.directCall = true;
    return data;
  } else {
    console.error("unknown inline help document " + helpKey);
    return null;
  }
});

Template._helpPopover.helpers({
  helperData: function(){
   var helpKey = this.key || this;
   if( _helpInfo[ helpKey ] ){
     var data = _helpInfo[ helpKey ];
     data.key = helpKey;
     data.directCall = true;
     return data;
   } else { 
     console.error("unknown inline help document " + helpKey);
     return null;
   } 
  },
  urlForMessage: function(){ 
    return this.url && new Handlebars.SafeString( '<a href=' + this.url + ' class="" target="_blank">Read More</a>');
  }
});

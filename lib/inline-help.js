var _helpInfo = {};
var converter = new Showdown.converter();
InlineHelp = function() {

}

Handlebars.registerHelper('showHelp', function(helpKey) {
  return InlineHelp.showHelp(helpKey, true);
});

Template._helpPopover.rendered = function(){
  InlineHelp._initPopover(this.data.key,this.data.options); 
}

InlineHelp.initHelp = function(help) {
  _helpInfo = help;
};

InlineHelp.addHelp = function(key, value) {
  _helpInfo[key] = value;
}

InlineHelp._initPopover = function(key) {
  options = _helpInfo[key].options || {};
  options.placement = options.placement || "auto"
  options.html = true;
  options.template = '<div class="popover inline-help-popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>';
  $('#' + key).popover(options);
};

InlineHelp.showHelp = function(helpKey, insideHandlebars) {
  if(_helpInfo[helpKey]){
    var data = _helpInfo[helpKey];
    data.key = helpKey;
    data.directCall = !insideHandlebars;
    return new Handlebars.SafeString(Template._helpPopover(data));
  }else {
    console.error("unknown inline help document " + helpKey);
  }
}
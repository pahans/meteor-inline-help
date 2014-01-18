var _helpInfo = {};
var converter = new Showdown.converter();
Help = function() {

}

Handlebars.registerHelper('showHelp', function(helpKey) {
  if(_helpInfo[helpKey]){
    return new Handlebars.SafeString(Template._helpPopover(_helpInfo[helpKey]));
  }else {
    console.error("unknown inline help document " + helpKey);
  }
});

Template._helpPopover.rendered = function(){
  $('.show-help-link').popover({
    html: true, template: '<div class="popover inline-help-popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
  });
}

Help.initHelp = function(help) {
  _helpInfo = help;
};

Help.addHelp = function(key, value) {
  _helpInfo[key] = value;
}
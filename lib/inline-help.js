var _helpInfo = {};
var converter = new Showdown.converter();
InlineHelp = function() {};

Template.registerHelper( "showHelp", function( key ){
  return new Handlebars.SafeString( InlineHelp.showHelp( key , true) );
});

Template._helpPopover.rendered = function(){
  InlineHelp._initPopover( this.data.key,this.data.options )
};

InlineHelp.initHelp = function(help) {
  _.extend(_helpInfo, help);
};

InlineHelp.addHelp = function(key, value) {
  _helpInfo[key] = value;
  console.warn("addHelp is now deprecated, use initHelp instead.");
};

InlineHelp._initPopover = function(key) {
  var options = _helpInfo[ key ] && _helpInfo[key].options || {};
  options.placement = options.placement || "auto"
  options.html = true;
  options.template = '<div class="popover inline-help-popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>';
  $('#' + key).popover(options);
};

Template.showHelp.helpers({
  helperData: function(){
   return InlineHelp.showHelp ( this.key || this, true );
  }
});

Template._helpPopover.helpers({
  urlForMessage: function(){
    return this.url && new Handlebars.SafeString( "<a href='" + this.url + "' class='' target='_blank'>Read More</a>");
  }
});

InlineHelp.showHelp = function(helpKey, insideHandlebars) {
  if(_helpInfo[helpKey]){
    var data = _helpInfo[helpKey];
    data.key = helpKey;
    data.directCall = !insideHandlebars;
    if(data.directCall){
      return templateToHtml(Template._helpPopover, data);
    }
    return data;
  }else {
    throw new Error("unknown inline help document " + helpKey)
  }
}

function templateToHtml(template, data) {
  var html = Blaze.toHTML(Blaze.With(data, function() {
    return template;
  }));
  return html;
}

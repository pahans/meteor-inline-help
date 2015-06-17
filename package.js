Package.describe({
  summary: "simple inline help package for Meteor",
  version: "1.0.2",
  git: "https://github.com/pahans/meteor-inline-help.git",
  name: "pahans:inline-help"
});

Package.on_use(function(api, where) {
  if(api.versionsFrom){
    api.versionsFrom('METEOR@0.9.0');
  }
  api.use(['handlebars','templating', 'showdown'], 'client');

  api.export('InlineHelp', ['client']);

  api.add_files([
    'lib/popover.html','lib/popover.css','lib/inline-help.js'
  ], 'client');

});

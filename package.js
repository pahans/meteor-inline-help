Package.describe({
  summary: "simple inline help package for Meteor"
});

Package.on_use(function(api, where) {
  api.use(['handlebars','templating', 'showdown'], 'client');

  api.export('Help', ['client']);

  api.add_files([
    'lib/popover.html','lib/popover.css','lib/inline-help.js'
  ], 'client');

});
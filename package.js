Package.describe({
  summary: "meteor inline help"
});

Package.on_use(function(api, where) {
  api.use(['handlebars','templating', 'showdown'], 'client');

  api.export('Help', ['client']);

  api.add_files([
    'lib/popover.html'
  ], 'client');
  api.add_files([
    'lib/popover.css'
  ], 'client');
  api.add_files([
    'lib/client.js',
  ], 'client');
});
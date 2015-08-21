Package.describe({
  name: 'canotto90:meteor-google-spreadsheet',
  version: '1.0.1',
  summary: 'Meteor wrapper for node-google-spreadsheet',
  git: 'https://github.com/taromero/meteor-google-spreadsheeti.git',
  documentation: 'README.md'
});

Npm.depends({
  'google-spreadsheet': '1.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.1');
  api.addFiles('meteor-google-spreadsheet.js', 'server');
  api.export('GoogleSpreadsheet', 'server')
});

Package.describe({
  name: 'canotto90:meteor-google-spreadsheet',
  version: '0.2.1',
  summary: 'Meteor wrapper for node-google-spreadsheet',
  git: 'https://github.com/taromero/meteor-google-spreadsheeti.git',
  documentation: 'README.md'
});

Npm.depends({
  'google-spreadsheet': '0.2.8'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.1');
  api.addFiles('meteor-google-spreadsheet.js');
  api.export('GoogleSpreadsheet', 'server')
});

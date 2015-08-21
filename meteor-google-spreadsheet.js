GoogleSpreadsheet = Npm.require("google-spreadsheet")

GoogleSpreadsheet = addMethodsToInstancesOf(GoogleSpreadsheet, function() {
  this.useServiceAccountAuth = Meteor.wrapAsync(this.useServiceAccountAuth)
  this.getRows = Meteor.wrapAsync(this.getRows)
  this.getInfo = Meteor.wrapAsync(this.getInfo)
})

function addMethodsToInstancesOf(cls, fnWithMethods) {
  function extendedConstructor() {
    cls.apply(this, arguments)
    fnWithMethods.call(this)
  }
  extendedConstructor.prototype = Object.create(cls.prototype)
  return extendedConstructor
}

/**
 * Created by charlie on 3/1/16.
 */

var jasmine = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter');
var noop = function() {};

var jrunner = new Jasmine();
jrunner.configureDefaultReporter({
    print: noop
}); // remove default reporter logs
jasmine.getEnv().addReporter(new SpecReporter()); // add jasmine-spec-reporter
jrunner.loadConfigFile(); // load jasmine.json configuration
jrunner.execute();

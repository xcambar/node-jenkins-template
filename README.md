## Requirements

* Node.js modules
** node-jscoverage
** vows
* Ant
** ant-contrib
** jslint4java
* Jenkins
** CheckStyle plugin
** HTML Publisher plugin


## Available Ant tasks

### clean

* Removes the build folder
* Empties log and tmp folders (except .gitignore files)

### ci

* Instruments the js files in the lib folder (for coverage reports)
* Run Vows tests using the instrumented libs
* Generates xunit report files for the tests
* Generates html output for coverage report
* Executes jslint and outputs a checkstyle report


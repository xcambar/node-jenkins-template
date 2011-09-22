## Requirements

node-jscoverage
vows

## How To

### Instrumentalize the js files for coverage report

jscoverage ./lib ./build

### Run the tests

PATH=$PWD/node_modules/vows/bin/:$PATH vows test/* --cover-json --xunit

Tip: in your test suites in Vows, require the _instrumentalized_ files instead of the regular ones.


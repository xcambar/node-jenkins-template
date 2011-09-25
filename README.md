# Jenkins template for NodeJS

This project provides you with
* a complete and functional config.xml template file for Jenkins
* an Ant file with the necessary targets
* a proposal for a basic project structure

## Requirements

* Node.js modules
 * node-jscoverage
 * vows
* Ant
 * ant-contrib
 * jslint4java
* Jenkins
 * CheckStyle plugin
 * HTML Publisher plugin

## How to

You most probably don't want to clone this project to use it, but rather build your repo from its file structure.
Here's how to init a project:


```bash
git init ./my_project
cd ./my_project
git archive --remote github.com/xcambar/jenkins-node-template HEAD | tar xvf -
```

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


## Directory structure

* lib: Where all your prototypes, unrelated to node_modules, must be located. It includes (but not limited to) all the prototypes for your model (whether you use ODM, ORM, or whatsoever...)
* log: Your application log folder. Obvious.
* tmp: Because one always needs a temporary location to store data (prepare DL packages, cache files and data)
* tests: Your Vows test

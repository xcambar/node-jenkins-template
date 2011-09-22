// division-by-zero-test.js

var vows = require('vows'),
    assert = require('assert');
    test1 = require('../build/test1');

// Create a Test Suite
vows.describe('Lib Test').addBatch({
    'Calling function': {
        topic: test1.test,

        'returns true ': function (topic) {
            assert.equal (topic, true);
        }
    }
}).export(module);

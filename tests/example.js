var vows = require('vows'),
    assert = require('assert');
    exampleLib = require('../build/example');

// Create a Test Suite
vows.describe('Example Test').addBatch({
    'Calling test function': {
        topic: exampleLib.test,

        'returns true ': function (topic) {
            assert.equal (topic, true);
        }
    },
    'new unrelated Test': {
        topic: false,
        'isFalse': function(topic) {
            assert.equal(topic, false);
        }
    }
}).export(module);

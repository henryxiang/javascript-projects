'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('counter service', function() {
  it('registered the counters service', () => {
    assert.ok(app.service('counters'));
  });
});

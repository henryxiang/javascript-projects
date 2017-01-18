'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('schedule service', function() {
  it('registered the schedules service', () => {
    assert.ok(app.service('schedules'));
  });
});

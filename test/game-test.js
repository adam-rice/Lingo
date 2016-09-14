const assert = require('chai').assert;

const Lingo = require('../lib/game.js');

describe('Lingo', function(){
  it('should be an object', function(){
    assert.isObject(Lingo);
  });
});

const assert = require('chai').assert;

const Lingo = require('../lib/game');

describe('Lingo', function(){
  it('should be an object', function(){
    var lingo = new Lingo();
    assert.isObject(lingo);
  });
});

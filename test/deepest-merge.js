'use strict';

var test = require('tap').test;
var deepestMerge = require('../index');

test('simple merge', function(t){
  var src = {a: 'a'};
  var src2 = {b: 'b'};

  var expect = {
    a: 'a',
    b: 'b'
  };

  var merged = deepestMerge(src, src2);
  t.deepEqual(merged, expect, 'merged');
  t.end();
});

test('array merge', function(t){
  var src = {a: [1,2]};
  var src2= {a: [3,4]};

  var expect = {a: [1,2,3,4]};
  var merged = deepestMerge(src, src2);
  t.deepEqual(merged, expect, 'merged');
  t.end();
});


test('merge functions', function(t){
  var test1 = false;
  var test2 = false;
  var src = {a: function(){
    test1 = true;
  }};
  var src2 = {a: function(){
    test2 = true;
  }};

  var merged = deepestMerge(src, src2);
  merged.a();
  t.ok(test1, 'set to true');
  t.ok(test2, 'set to true');
  t.end();
});

test('nested merge', function(t){
  var src = {
    a: {
      c: 1
    }
  };

  var src2 = {
    a: {
      b: 1
    }
  };

  var expected = {
    a: {
      c: 1,
      b: 1
    }
  };

  var merged = deepestMerge(src, src2);
  t.deepEqual(merged, expected, 'merged');
  t.end();
});

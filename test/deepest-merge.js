'use strict'

const test = require('tap').test
const deepestMerge = require('../')

test('simple merge', function (t) {
  const src = {a: 'a'}
  const src2 = {b: 'b'}

  const expect = {
    a: 'a',
    b: 'b'
  }

  const merged = deepestMerge(src, src2)
  t.deepEqual(merged, expect, 'merged')
  t.end()
})

test('array merge', function (t) {
  const src = {a: [1, 2]}
  const src2 = {a: [3, 4]}

  const expect = {a: [1, 2, 3, 4]}
  const merged = deepestMerge(src, src2)
  t.deepEqual(merged, expect, 'merged')
  t.end()
})

test('merge functions', function (t) {
  let test1 = false
  let test2 = false
  const src = {a: function () {
    test1 = true
  }}
  const src2 = {a: function () {
    test2 = true
  }}

  const merged = deepestMerge(src, src2)
  merged.a()
  t.ok(test1, 'set to true')
  t.ok(test2, 'set to true')
  t.end()
})

test('nested merge', function (t) {
  const src = {
    a: {
      c: 1
    }
  }

  const src2 = {
    a: {
      b: 1
    }
  }

  const expected = {
    a: {
      c: 1,
      b: 1
    }
  }

  const merged = deepestMerge(src, src2)
  t.deepEqual(merged, expected, 'merged')
  t.end()
})

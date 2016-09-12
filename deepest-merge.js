'use strict'

/**
 * Merge two objects together recursively, merging any nested objects as well
 * including arrays and functions.
 *
 * If two key names match and the values aren't functions or arrays, the "latest"
 * key wins (right imporant). If the values are functions or arrays, the values
 * are merged -- either wrapped in a function which calls both functions in a row
 * supplying the final object as the context, or merged
 *
 * @method  deepestMerge
 * @param {...object} arguments Objects you'd like to merge together
 * @returns {object} merged object
 */
function deepestMerge () {
  const args = []
  for (let i = 0, len = arguments.length; i < len; i++) {
    args.push(arguments[i])
  }
  const dest = {}

  args.forEach((src) => {
    if (typeof src === 'object') {
      Object.keys(src).forEach(function (key) {
        const destType = typeof dest[key]
        const srcType = typeof src[key]
        if (Array.isArray(dest[key]) && Array.isArray(src[key])) {
          dest[key].push.apply(dest[key], src[key])
        } else if (destType === 'function' && srcType === 'function') {
          const destFunc = dest[key]
          const srcFunc = src[key]
          const newFunc = function () {
            srcFunc.apply(dest, arguments)
            destFunc.apply(dest, arguments)
          }
          dest[key] = newFunc
        } else if (destType === 'object' && srcType === 'object') {
          dest[key] = deepestMerge(dest[key], src[key])
        } else {
          dest[key] = src[key]
        }
      })
    }
  })

  return dest
}

module.exports = deepestMerge

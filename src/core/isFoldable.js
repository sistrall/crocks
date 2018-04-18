/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

import hasAlg from './hasAlg.js'

// isFoldable : a -> Boolean
function isFoldable(m) {
  return !!m
    && hasAlg('reduce', m)
}

export default isFoldable
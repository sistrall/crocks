/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

import curry from '../core/curry.js'
import isBifunctor from '../core/isBifunctor.js'
import isFunction from '../core/isFunction.js'

function bimap(f, g, m) {
  if(!(isFunction(f) &&  isFunction(g))) {
    throw new TypeError(
      'bimap: Functions required for first two arguments'
    )
  }

  if(!isBifunctor(m)) {
    throw new TypeError(
      'bimap: Bifunctor required for third argument'
    )
  }

  return m.bimap(f, g)
}

export default curry(bimap)
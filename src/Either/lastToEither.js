/** @license ISC License (c) copyright 2017 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

import Either from './index.js'
import types from '../core/types.js'
const Last = types.proxy('Last')

import curry from '../core/curry.js'
import isFunction from '../core/isFunction.js'
import isSameType from '../core/isSameType.js'

const constant = x => () => x

const applyTransform = (left, last) =>
  last.valueOf().either(
    constant(Either.Left(left)),
    Either.Right
  )

// lastToEither : c -> Last a -> Either c a
// lastToEither : c -> (a -> Last b) -> a -> Either c b
function lastToEither(left, last) {
  if(isFunction(last)) {
    return function(x) {
      const m = last(x)

      if(!isSameType(Last, m)) {
        throw new TypeError('lastToEither: Last returning function required for second argument')
      }

      return applyTransform(left, m)
    }
  }

  if(isSameType(Last, last)) {
    return applyTransform(left, last)
  }

  throw new TypeError('lastToEither: Last or Last returning function required for second argument')
}

export default curry(lastToEither)
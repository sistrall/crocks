/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */

import isFunction from '../core/isFunction.js'

function snd(m) {
  if(!(m && isFunction(m.snd))) {
    throw new TypeError('snd: Pair required')
  }

  return m.snd()
}

export default snd
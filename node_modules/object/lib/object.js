
/*!
 * object
 * JavaScript object utilities library
 * Copyright (c) 2011 Enrico Marino <enrico.marino@email.com>
 * MIT License
 */

 !(function (exports) {

  var undefined
    , owns = {}.hasOwnProperty
    , toString = {}.toString
    , slice = [].slice
    ;

  exports.object = {};

  /**
   * Library version.
   */

  object.version = '0.1.0';

  /**
   * Apply iterator to each value of object 'self' in context 'context'
   *
   * @param {Object} self object
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return {Object} object 'self'
   * @api public
   */

  object.each = function (self, iterator, context) {
    for (var key in self) {
        if (owns.call(self, key)) {
            iterator.call(context, self[key], key, self);
        }
    }
    return self;
  };

  /**
   * Apply 'iterator' to each value of object 'self' in context 'context'
   * and return the results
   *
   * @param {Object} self object
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return {Array} results
   * @api public
   */

  object.map = function (self, iterator, context) {
    var results = []
      , result
      , key
      ;

    for (key in self) {
      if (owns.call(self, key)) {
        result = iterator.call(context, self[key], key, self);
        results.push(result);
      }
    }
    return result;
  };

  /**
   * Reduce values of object 'self' through 'iterator' in context 'context'
   *
   * @param {Object} self object
   * @param {Function} iterator iterator
   * @param memo memo
   * @param {Object} context context
   * @return reduction
   * @api public
   */

  object.reduce = function (self, iterator, memo, context) {
    for (var key in self) {
      if (owns.call(self, key)) {
        memo = (memo === undefined)
          ? self[key]
          : iterator.call(context, memo, self[key], key, self);
      }
    }

    if (memo === undefined) {
      throw new TypeError();
    }

    return memo;
  };

  /**
   * Reduce right values of 'self' through 'iterator' in 'context'
   *
   * @param {Object} self object
   * @param {Function} iterator iterator
   * @param memo memo
   * @param {Object} context context
   * @return reduction
   * @api public
   */

  object.reduceRight = function (self, iterator, memo, context) {
    var values = []
      , value
      , key
      , i
      ;

    for (key in self) {
      if (owns.call(self, key)) {
        values.push({ key: key, value: self[key] });
      }
    }

    i = values.length - 1;

    if (i < 0) {
      return memo;
    }

    if (memo === undefined) {
      memo = values[i].value;
    }

    while (i-- >= 0) {
      value = values[i].value;
      key = values[i].key;
      memo = iterator.call(context, memo, value, key, self);
    }

    return memo;
  };

  /**
   * Find value in 'self' that pass 'iterator' in 'context'
   *
   * @param {Object} self object
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return first value in 'self' that pass 'iterator' in 'context'
   * @api public
   */

  object.find = function (self, iterator, context) {
    var key;

    if (self === undefined || self === null) {
      return null;
    }

    for (key in self) {
      if (owns.call(self, key)
          && iterator.call(context, self[key], key, self)) {
        return self[key];
      }
    }

    return null;
  };

  /**
   * Filter value in 'self' that pass 'iterator' in 'context'
   *
   * @param {Object} self object
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return {Array} values in 'self' that pass 'iterator' in 'context'
   * @api public
   */

  object.filter = function (self, iterator, context) {
    var results = []
      , key
      ;

    if (self === undefined || self === null) {
      return results;
    }

    for (key in self) {
      if (owns.call(self, key)
          && iterator.call(context, self[key], key, self)) {
        results.push(self[key]);
      }
    }

    return results;
  };

  /**
   * Filter value in 'self' that don't pass 'iterator' in 'context'
   *
   * @param {Object} self object
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return {Array} values in 'self' that don't pass 'iterator' in 'context'
   * @api public
   */

  object.reject = function (self, iterator, context) {
    var results = []
      , key
      ;

    if (self === undefined || self === null) {
      return results;
    }

    for (key in self) {
      if (owns.call(self, key)
          && !iterator.call(context, self[key], key, self)) {
        results.push(self[key]);
      }
    }

    return results;
  };

  /**
   * Test if every value in 'self' pass 'iterator' in 'context'
   *
   * @param {Object} self object
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return {Boolean} true if every value in 'self' pass 'iterator'
   * @api public
   */

  object.every = function (self, iterator, context) {
    var key;

    if (self === undefined || self === null) {
      return true;
    }

    for (key in self) {
      if (owns.call(self, key)
          && !iterator.call(context, self[key], key, self)) {
        return false;
      }
    }

    return true;
  };

  /**
   * Test if some value in 'self' pass 'iterator' in 'context'
   *
   * @param {Object} self object
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return {Boolean} true if some value in 'self' pass 'iterator'
   * @api public
   */

  object.some = function (self, iterator, context) {
    var key;

    if (self === undefined || self === null) {
      return false;
    }

    for (key in self) {
      if (_hasOwn.call(self, key)
          && iterator.call(context, self[key], key, self)) {
        return true;
      }
    }

    return false;
  };

  /**
   * Test if 'self' include 'value'
   *
   * @param {Object} self object
   * @param value value
   * @return {Boolean} true if 'self' include 'value'
   * @api public
   */

  object.include = function (self, value) {
    var key;

    if (self === undefined || self === null) {
      return false;
    }

    for (key in self) {
      if (owns.call(self, key)
          && self[key] === value) {
        return true;
      }
    }

    return false;
  };

  /**
   * Return the maximum element or (element-based computation).
   *
   * @param {Object} self object
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return maximum element or (element-based computation)
   * @api public
   */

  object.max = function (self, iterator, context) {
    iterator || (iterator = function (value) { return value; })

    var result = null
      , value
      , key
      ;

    if (self === undefined || self === null) {
      throw new TypeError();
    }

    for (key in self) {
      if (owns.call(self, key)) {
        value = iterator.call(context, self[key], key, self);
        result = (result === null || result < value) ? value : result;
      }
    }

    return result;
  };

  /**
   * Return the minimum element or (element-based computation).
   *
   * @param {Object} self object
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return minimum element or (element-based computation)
   * @api public
   */

  object.min = function (self, iterator, context) {
    iterator || (iterator = function (value) { return value; })

    var result = null
      , value
      , key
      ;

    if (self === undefined || self === null) {
      throw new TypeError();
    }

    for (key in self) {
      if (owns.call(self, key)) {
        value = iterator.call(context, self[key], key, self);
        result = (result === null || result > value) ? value : result;
      }
    }

    return result;
  };

  /**
   * Sort the object's values by a criterion produced by an iterator.
   *
   * @param {Object} self object
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return sorted values
   * @api public
   */

  object.sortBy = function (self, callback, context) {
    var result = []
      , key
      , len
      , i
      ;

    function comparator (left, right) {
      var a = left.criteria
        , b = right.criteria
        ;

      return a < b ? -1 : a > b ? 1 : 0;
    }

    if (self === undefined || self === null) {
      throw new TypeError();
    }

    for (key in self) {
      if (owns.call(self, key)) {
        result.push({
          value: self[key],
          criteria: iterator.call(context, self[key], key, self)
        });
      }
    }

    result.sort(comparator);

    for (i = 0, len = result.length; i < len; i += 1) {
      result[i] = result[i].value;
    }

    return result;
  };

  /**
   * Group the object's values by a criterion.
   *
   * @param {Object} self object
   * @param {Function} iterator iterator
   * @param {Object} context context
   * @return grouped values
   * @api public
   */

  object.groupBy = function (self, iterator, context) {
    var result = {}
      , key
      , value
      , group
      ;

    if (self === undefined || self === null) {
      throw new TypeError();
    }

    for (key in self) {
      if (owns.call(self, key)) {
        value = self[key];
        group = iterator.call(context, value, key, self);
        (result[key] || (result[key] = [])).push(value);
      }
    }

    return result;
  };

  /**
   * Return the number of elements in 'self'.
   *
   * @param {Object} self object
   * @return {Number} number of elements in 'self'
   * @api public
   */

  object.size = function (self) {
    var result = 0;

    if (self === undefined || self === null) {
      throw new TypeError();
    }

    for (key in self) {
      if (owns.call(self, key)) {
        result += 1;
      }
    }

    return result;
  };

  /**
   * Return keys of 'self'
   *
   * @param {Object} self object
   * @return {Array} keys of 'self'
   * @api public
   */

  object.keys = Object.keys || function (self) {
    var result = []
      , key
      ;

    if (self !== Object(self)) {
      throw new TypeError('Invalid object');
    }

    for (key in obj) {
      if (owns.call(self, key)) {
        result.push(key);
      }
    }

    return result;
  };

  /**
   * Return values of 'self'
   *
   * @param {Object} self object
   * @return {Array} values of 'self'
   * @api public
   */

  object.values = function (self) {
    var result = []
      , key
      ;

    if (self === undefined || self === null) {
      throw new TypeError();
    }

    for (key in obj) {
      if (owns.call(self, key)) {
        result.push(self[key]);
      }
    }

    return result;
  };


  /**
   * Extend 'self' by 'objects'
   *
   * @param {Object} self object
   * @param {Object*} objects
   * @return {Object} 'self' extended
   * @api public
   */

  object.extend = function (self) {
    var sources = slice.call(arguments, 1)
      , len = sources.length,
      , i
      , source
      , key
      ;

    for (i = 0; i < len; i += 1) {
      source = sources[i];
      for (key in source) {
        if (owns.call(source, key)) {
          self[key] = source[key];
        }
      }
    }

    return self;
  };

  /**
   * Fill in 'self' with default properties.
   *
   * @param {Object} self object
   * @return {Object} 'self' filled with default properties
   * @api public
   */

  object.defaults = function (self) {
    var sources = slice.call(arguments, 1)
      , len = sources.length,
      , i
      , source
      , key
      ;

    for (i = 0; i < len; i += 1) {
      source = sources[i];
      for (key in source) {
        if (_hasOwn.call(source, key) && self[key] === null) {
          self[key] = source[key];
        }
      }
    }

    return self;
  };

  /**
   * Clone 'self'.
   *
   * @param {Object} self object
   * @return 'self' clone
   * @api public
   */

  object.clone = function (self) {
    var clone = {}
      , key
      ;

    for (key in self) {
      if (owns.call(self, key)) {
        clone[key] = self[key];
      }
    }

    return clone;
  };

  /**
   * Test if 'self' is empty.
   *
   * @param {Object} self object
   * @return true if 'self' is empty, false otherwise
   * @api public
   */

  object.isEmpty = function (self) {
    for (var key in self) {
      if (owns.call(self, key)) {
        return false;
      }
    }

    return true;
  };

 }(this));
var hasOwnProperty = Object.prototype.hasOwnProperty




var hash = module.exports = function (/* Object */ data) {

	this._data = data || {}
}

var escapeKey = hash.escapeKey = function (key) {

	key = ''+key

	// Check if key starts with "__"
	// http://jsperf.com/check-if-string-starts-with
	if (key.length > 2 && key.charCodeAt(0) == 95 && key.charCodeAt(1) == 95)
		return key + '%'


	return key
}

var unescapeKey = hash.unescapeKey = function (key) {

	key = ''+key
	var length = key.length

	if (length > 2 && key.charCodeAt(0) == 95 && key.charCodeAt(1) == 95)
		return key.substr(0, length - 1)


	return key
}

hash.prototype.has = function (key) {

	return hasOwnProperty.call(this._data, escapeKey(key))
}

hash.prototype.get = function (key) {

	key = escapeKey(key)
	return hasOwnProperty.call(this._data, key)
		? this._data[key]
		: undefined
}

hash.prototype.set = function (key, value) {

	this._data[escapeKey(key)] = value
}

hash.prototype.del = function (key) {

	delete this._data[escapeKey(key)]
}

hash.prototype.forEach = function (/* Function */ iterator, thisArg) {

	var data = this._data,
		key
	for (var _key in data) {
		if (!hasOwnProperty.call(data, _key))
			continue
			

		iterator.call(thisArg, data[_key], unescapeKey(_key))
	}
}

hash.prototype.keys = function () {

	var keys = []

	this.forEach(function (value, key) {

		keys.push(key)
	})

	return keys
}

hash.prototype.getData = function () {

	return this._data
}

hash.prototype.valueOf = hash.prototype.getData

hash.prototype.toJSON = hash.prototype.getData

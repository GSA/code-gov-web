var a = require('assert'),
	hash = require('./index'),
	h,
	data




// (constructor)

data = {}
h = new hash(data)
a.strictEqual(
	h._data,
	data
)

h = new hash
a.notEqual(
	h._data,
	data
)


// escapeKey

a.strictEqual(
	hash.escapeKey('abc'),
	'abc'
)

a.strictEqual(
	hash.escapeKey('__proto__'),
	'__proto__%'
)

a.strictEqual(
	hash.escapeKey('__proto__abc'),
	'__proto__abc%'
)

a.strictEqual(
	hash.escapeKey('__'),
	'__'
)


// unescapeKey

a.strictEqual(
	hash.unescapeKey('abc'),
	'abc'
)

a.strictEqual(
	hash.unescapeKey('__proto__%'),
	'__proto__'
)

a.strictEqual(
	hash.unescapeKey('__proto__abcc'),
	'__proto__abc'
)

a.strictEqual(
	hash.unescapeKey('__'),
	'__'
)


// prototype.has

h = new hash({ a: 1 })

a.strictEqual(
	h.has('abc'),
	false
)

a.strictEqual(
	h.has('hasOwnProperty'),
	false
)

a.strictEqual(
	h.has('a'),
	true
)


// prototype.get

a.strictEqual(
	h.get('abc'),
	undefined
)

a.strictEqual(
	h.get('hasOwnProperty'),
	undefined
)

a.strictEqual(
	h.get('a'),
	1
)


// prototype.set

h = new hash

h.set('abc', true)

h.set('__proto___', 5)

h.set('__proto__', 1)

h.set('__parent__', 2)

h.set('__count__', 3)

a.strictEqual(
	h.get('abc'),
	true
)

a.strictEqual(
	h.get('__proto___'),
	5
)

a.strictEqual(
	h.get('__proto___%'),
	undefined
)

a.strictEqual(
	h.get('__proto__'),
	1
)

a.strictEqual(
	h.get('__parent__'),
	2
)

a.strictEqual(
	h.get('__count__'),
	3
)


// prototype.del

h.del('__proto___%'),

a.strictEqual(
	h.has('__proto___'),
	true
)

h.del('__proto___'),

a.strictEqual(
	h.has('__proto___'),
	false
)


// prototype.getData

a.strictEqual(
	h.getData(),
	h._data
)


// prototype.toJSON

a.deepEqual(
	h.toJSON(),
	h.getData()
)


// prototype.valueOf

a.deepEqual(
	h.valueOf(),
	h.getData()
)


// prototype.keys

a.deepEqual(
	h.keys(),
	[ 'abc', '__proto__', '__parent__', '__count__' ]
)


// prototype.forEach

data = { a: 1, b: 2, c: 3, '__proto__%': 4, hasOwnProperty: 5, __: 6 }
h = new hash(data)
var context = {}
h.forEach(function (v, k) {

	a.strictEqual(
		this,
		context
	)

	k = hash.escapeKey(k)

	a.strictEqual(
		v,
		data[k]
	)

	delete data[k]
}, context)

a.deepEqual(
	data,
	{}
)




'<srv'
console.log('Passed ' + module.id)
'srv>'

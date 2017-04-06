'use strict';
const CRLF = '\r\n';

const replaceBuf = buf => {
	const i = buf.indexOf(CRLF);

	if (i === -1) {
		return buf;
	}

	const start = buf.slice(0, i);
	const end = replaceBuf(buf.slice(i + CRLF.length));
	const len = i + start.length + end.length;

	return Buffer.concat([start, '\n', end], len);
};

module.exports = x => {
	if (typeof x !== 'string' && !Buffer.isBuffer(x)) {
		throw new TypeError(`Expected a \`string\` or a \`Buffer\`, got \`${typeof x}\``);
	}

	return Buffer.isBuffer(x) ? replaceBuf(x) : x.replace(new RegExp(CRLF, 'g'), '\n');
};

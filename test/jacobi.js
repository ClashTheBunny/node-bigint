var test = require('tap').test;
var bigint = require('../');

test('jacobi', function (t) {
    t.equal( bigint('10').jacobi( bigint('3') ).toString(), '1');
    t.equal( bigint('1232').jacobi( bigint('3') ).toString(), '-1');

    t.end();
});

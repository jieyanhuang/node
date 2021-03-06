'use strict';
const common = require('../common.js');
const path = require('path');

const bench = common.createBenchmark(main, {
  path: [
    '',
    'C:\\',
    'C:\\foo',
    '\\foo',
    'E:\\foo\\bar.baz',
    'foo\\.bar.baz',
    'foo\\bar',
    '\\foo\\bar\\baz\\asdf\\.quux'
  ],
  n: [1e6]
});

function main(conf) {
  const n = +conf.n;
  const p = path.win32;
  const input = String(conf.path);

  for (var i = 0; i < n; i++) {
    p.parse(input);
  }
  bench.start();
  for (i = 0; i < n; i++) {
    p.parse(input);
  }
  bench.end(n);
}

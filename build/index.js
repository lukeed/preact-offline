const fs = require('fs');
const { rollup } = require('rollup');
const { minify } = require('uglify-js');
const pretty = require('pretty-bytes');
const sizer = require('gzip-size');
const pkg = require('../package');

const umd = pkg['umd:main'];

rollup({
	input: 'src/index.js',
	external: ['preact'],
	plugins: [
		require('rollup-plugin-node-resolve')(),
		require('rollup-plugin-buble')({
			jsx: 'h',
			transforms: { modules:false }
		})
	]
}).then(bun => {
	bun.write({
		format: 'cjs',
		file: pkg.main
	});

	bun.write({
		format: 'es',
		file: pkg.module
	});

	bun.write({
		file: umd,
		format: 'umd',
		name: pkg['umd:name'] || pkg.name
	}).then(_ => {
		const data = fs.readFileSync(umd, 'utf8');

		// produce minified output
		const { code } = minify(data);
		fs.writeFileSync(umd, code);

		// output gzip size
		const int = sizer.sync(code);
		console.log(`~> gzip size: ${ pretty(int) }`);
	})
}).catch(console.error)

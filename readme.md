# preact-foobar [![NPM](https://img.shields.io/npm/v/preact-foobar.svg)](https://www.npmjs.com/package/preact-foobar)

> A (123b gzip) foobar component for Preact

This module exposes three module definitions:

* **ES Module**: `dist/preact-foobar.es.js`
* **CommonJS**: `dist/preact-foobar.js`
* **UMD**: `dist/preact-foobar.min.js`

If using the UMD bundle, the library is exposed as `preactFoobar` globally.

## Install

```
$ npm install --save preact-scroll-header
```

## Usage

```js
import { h } from 'preact';
import Foobar from 'preact-foobar';

<Foobar>
  <h1>Hello</h1>
</Foobar>
```


## Properties

#### id
Type: `String`<br>
Default: `none`

The `id` attribute to pass down.

#### className
Type: `String`<br>
Default: `none`

The `className` attribute to pass down. Added to the wrapper element.

#### foobar
Type: `Number`<br>
Default: `0`

Foobar


## License

MIT © [Luke Edwards](https://lukeed.com)

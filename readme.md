# preact-offline [![NPM](https://img.shields.io/npm/v/preact-offline.svg)](https://www.npmjs.com/package/preact-offline)

> A (300b gzip) component to render alerts/messages when offline.

Check out the [live demo](https://jsfiddle.net/lukeed/8at2tg1e/)!

This module exposes three module definitions:

* **ES Module**: `dist/preact-offline.es.js`
* **CommonJS**: `dist/preact-offline.js`
* **UMD**: `dist/preact-offline.min.js`

If using the UMD bundle, the library is exposed as `preactOffline` globally.

## Install

```
$ npm install --save preact-offline
```

## Usage

```js
import { h } from 'preact';
import Offline from 'preact-offline';

<Offline />
//=> <div>No connection</div>

<Offline id="foo" class="bar">
  <p>Custom Text</p>
</Offline>
//=> <div id="foo" class="bar"><p>Custom Text</p></div>
```

## License

MIT © [Luke Edwards](https://lukeed.com)

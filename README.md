# shared-array-buffer

Literally just the SharedArrayBuffer.

```js
import SharedArrayBuffer from 'shared-array-buffer';

// or

const SharedArrayBuffer = require('shared-array-buffer');
```

That's it, the [SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer) constructor will then be usable even out of [cross origin isolated](https://developer.mozilla.org/en-US/docs/Web/API/crossOriginIsolated) content.


See [this discussion](https://github.com/emscripten-core/emscripten/pull/20011/files#diff-56f3dcce8faea8ec129ec36af3721a853ba4cec7b4535576699944436ec3eae9).

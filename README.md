# proc-nexttick

[![Build Status](https://travis-ci.com/tinchoz49/proc-nexttick.svg?branch=main)](https://travis-ci.com/tinchoz49/proc-nexttick)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Universal process.nextTick for latest browsers

## <a name="install"></a> Install

```
$ npm install proc-nexttick
```

## <a name="usage"></a> Usage

```javascript
const nextTick = require('proc-nexttick')

nextTick((arg1, arg2) => {
  console.log('executed in the next tick', arg1, arg2)
}, 0, 1)
```

In Node.js it will use the native `process.nextTick` without changes.

In the browser:

1. It tries to use `queueMicrotask`.
2. Fallback to use a `process` shim implementation provided by some bundler tool like browserify or webpack.
3. Fallback to use Promises.

## <a name="issues"></a> Issues

:bug: If you found an issue we encourage you to report it on [github](https://github.com/tinchoz49/proc-nexttick/issues). Please specify your OS and the actions to reproduce it.

## <a name="contribute"></a> Contributing

:busts_in_silhouette: Ideas and contributions to the project are welcome. You must follow this [guideline](https://github.com/tinchoz49/proc-nexttick/blob/main/CONTRIBUTING.md).

## License

MIT ©

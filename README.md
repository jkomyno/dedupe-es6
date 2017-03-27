# dedupe-es6 [![Build Status](https://travis-ci.org/jkomyno/dedupe-es6.png)](https://travis-ci.org/jkomyno/dedupe-es6)
Extendable deduplication of array values, ES6 >= only

## Installation
```bash
$ npm i -S dedupe-es6
```

## Usage
First of all, you can import the package with:

```javascript
let dedupe = require('dedupe-es6');
```

or with:

```javascript
import { dedupe } from 'dedupe-es6';
```

### With arrays only
```javascript
let a = dedupe(["first", "second", "third"], ["second", "third", "fourth"]);
console.log(a);

// result: ["first", "second", "third", "fourth"];
```

### With both arrays and strings
```javascript
let a = dedupe("first", ["second", "third"], "second", "fourth");
console.log(a);

// result: ["first", "second", "third", "fourth"];
```

## Contributing
Pull requests and other tests are more than welcome.

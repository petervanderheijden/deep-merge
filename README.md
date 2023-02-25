# deep-merge
Deep-merging objects without overriding existing keys.

## Installation
``npm i @petervanderheijden/deep-merge``

## Usage

```js
const  merge  =  require('./');

const  obj1  = {
version: '1.0.0',
};

const  obj2  = {
version: '2.0.0',
levels: [],
};

const merged = merge(obj1, obj2);

```

## License
[MIT license](https://github.com/petervanderheijden/deep-merge).
 © 2022 Peter van der Heijden
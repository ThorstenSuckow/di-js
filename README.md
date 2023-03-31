# di-js
Constructor based dependency injection in JavaScript.

This project features a module `Injectable.js` which provides a Proxy-handler for `constructor()`. It allows for using
constructor based dependency injection.

All relevant sources can be found in `./src/`.

The project serves educational purposes and is licensed under an [MIT-styled license](LICENSE.md).

## Installation 

```bash
$ git clone https://github.com/thorstensuckow/di-js
$ cd di-js
$ npm ci
$ npm start
```

## Example
```javascript 
    class ServiceClass {}
    
    
    class Foo {}
    Foo = Injectable(Foo, {fooProperty: ServiceClass});
    
    
    class Bar {}
    Bar = Injectable(Foo, {barProperty: ServiceClass});


    const foo = new Foo();
    // foo.fooProperty - [instanceof ServiceClass]
    
    const bar = new Bar();
    // bar.barProperty - [instanceof ServiceClass]
    
    // both barProperty and fooProperty reference the same ServiceClass-instance.
    // bar.barProperty === foo.fooProperty - true
```